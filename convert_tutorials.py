#!/usr/bin/env python3
"""v4: 将 soarm101 PDF 教程批量转换为 Docusaurus MDX。

相比 v3 的改进（对应新的六个问题）：
1. 代码示例：按字体（SourceCodePro）识别代码行，避免代码被当作正文/标题
2. 参考资料：提取 PDF 链接注释（get_links），把纯文字变成可点击链接
3/5. 标题/加粗：按字号识别标题层级（19.5→##、16.5→###、13.5→####），生成 markdown 标题
4. 表格乱行：is_false_table 剔除误检表格 + POST_FIXES 修正无边框参数表
6. 表格图片：把落在表格单元格内的图片放回对应单元格
"""
import os
import re
import pymupdf

ROOT = '/Users/amy/Documents/机器人/说明书/soarm101'
OUT_DOCS = '/Users/amy/Documents/机器人/说明书/qiyue-tanwei-website/docs/lerobot/so-arm101/tutorials'
OUT_IMG = '/Users/amy/Documents/机器人/说明书/qiyue-tanwei-website/static/img/tutorial/so-arm101'
ZERO = '​'

# 段落重建：行底到下一行顶的间距小于该值视为同一段落续行（pt）
GAP_JOIN = 18
# 代码折行恢复：行右边界超过该值视为被硬折行（pt）
CODE_WRAP_X1 = 525
# 代码行识别：x0 大于该值视为代码行（区别于正文/标题左缘）
CODE_X0 = 72.5

# 官方店铺与购买 CTA（与网站「联系我们 / LeKiwi BOM」按钮样式统一）
STORE_URL = 'https://aozldimvsb4qk5ct-x1oeddvzwb01u.taobao.com/'


def purchase_banner(product='SO-101 套件', note='适配本教程的完整套件，省去采购与组装时间'):
    return (
        '<div style={{ background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)", '
        'borderRadius: "12px", padding: "1.25rem 1.5rem", margin: "1rem 0", color: "#fff", '
        'display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", '
        'gap: "0.75rem", boxShadow: "0 4px 20px rgba(239, 68, 68, 0.3)" }}>\n'
        '  <div style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>\n'
        '    <strong style={{ fontSize: "1.2rem" }}>🛒 购买 ' + product + '</strong><br/>\n'
        '    ' + note + '\n'
        '  </div>\n'
        '  <a href="' + STORE_URL + '" target="_blank" style={{ background: "#fff", color: "#ef4444", '
        'padding: "0.6rem 1.5rem", borderRadius: "8px", fontWeight: 700, fontSize: "1rem", '
        'textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>'
        '🔗 前往淘宝店铺 →</a>\n'
        '</div>'
    )

MAPPING = [
    ('一、概述与简介/01 1.1 LeRobot 项目简介.pdf', '1-1-lerobot-intro', 1),
    ('一、概述与简介/02 1.2 SO-101 机械臂简介.pdf', '1-2-so101-intro', 2),
    ('一、概述与简介/03 1.3 硬件规格与选购渠道.pdf', '1-3-hardware-specs', 3),
    ('二、硬件准备/01 2.1 物料清单（BOM）.pdf', '2-1-bom', 4),
    ('二、硬件准备/02 2.2 3D 打印指南.pdf', '2-2-3d-printing', 5),
    ('二、硬件准备/03 2.3 购买渠道.pdf', '2-3-purchase', 6),
    ('三、环境安装/01 3.1 Mac 环境安装.pdf', '3-1-mac-install', 7),
    ('三、环境安装/02 3.2 Ubuntu 环境安装.pdf', '3-2-ubuntu-install', 8),
    ('三、环境安装/03 3.3 Windows 环境安装.pdf', '3-3-windows-install', 9),
    ('四、组装与配置指南/01 4.1 开箱清点.pdf', '4-1-unboxing', 10),
    ('四、组装与配置指南/02 4.2 认识与准备舵机.pdf', '4-2-servo-prep', 11),
    ('四、组装与配置指南/03 4.3 查找串口设备端口号.pdf', '4-3-serial-port', 12),
    ('四、组装与配置指南/04 4.4 配置舵机 ID.pdf', '4-4-servo-id', 13),
    ('四、组装与配置指南/05 4.5 组装从动臂（Follower）.pdf', '4-5-assemble-follower', 14),
    ('四、组装与配置指南/06 4.6 组装主动臂（Leader）.pdf', '4-6-assemble-leader', 15),
    ('四、组装与配置指南/07 4.7 运动范围校准.pdf', '4-7-calibration', 16),
    ('四、组装与配置指南/08 4.8 相机安装和配置.pdf', '4-8-camera-setup', 17),
    ('四、组装与配置指南/09 4.9 调试与验证.pdf', '4-9-debug-verify', 18),
    ('五、遥操作/01 5.1 基础遥操作.pdf', '5-1-basic-teleop', 19),
    ('五、遥操作/02 5.2 摄像头集成与遥操作.pdf', '5-2-camera-teleop', 20),
    ('六、数据集/01 6.1 采集数据集.pdf', '6-1-data-collection', 21),
    ('六、数据集/02 6.2 数据集管理工具.pdf', '6-2-dataset-tools', 22),
    ('六、数据集/03 6.3 HuggingFace 数据集上传与管理.pdf', '6-3-huggingface', 23),
    ('七、模型训练/01 7.1 训练概述与算法对比.pdf', '7-1-training-overview', 24),
    ('七、模型训练/02 7.2 ACT 训练（推荐入门）.pdf', '7-2-act', 25),
    ('七、模型训练/03 7.3 SmolVLA 训练（推荐进阶）.pdf', '7-3-smolvla', 26),
    ('七、模型训练/04 7.4 Diffusion Policy 训练.pdf', '7-4-diffusion-policy', 27),
    ('七、模型训练/05 7.5 Pi0 与 Pi0.5 训练（效果最优）.pdf', '7-5-pi0', 28),
    ('七、模型训练/06 7.6 云 GPU 训练环境配置.pdf', '7-6-cloud-gpu', 29),
    ('八、模型推理与部署/01 8.1 推理命令说明.pdf', '8-1-inference-commands', 30),
    ('八、模型推理与部署/02 8.2 各模型推理命令汇总.pdf', '8-2-command-summary', 31),
    ('八、模型推理与部署/03 8.3 Jetson Orin 部署.pdf', '8-3-jetson-orin', 32),
    ('八、模型推理与部署/04 8.4 GR00T N1.5 微调与 Jetson AGX Thor 部署.pdf', '8-4-gr00t-thor', 33),
    ('九、进阶应用/01 9.1 XLeRobot 双臂移动平台.pdf', '9-1-xlerobot', 34),
    ('九、进阶应用/02 9.2 LeKiwi 移动底盘.pdf', '9-2-lekiwi', 35),
    ('十、故障排除/01 10.1 常见问题与解决方案.pdf', '10-1-faq', 36),
]

# 针对无边框参数表等自动提取无法可靠还原的段落，按文件名做定向替换。
# key = 输出文件名；value = (原始子串, 替换后子串)
POST_FIXES = {
    '3-2-ubuntu-install': (
        '项目要求Ubuntu 版本20.04 LTS 或 22.04 LTS（推荐）\n\n| Python 版本 | 3.12 及以上（lerobot 最新版要求） || NVIDIA 驱动 | ≥ 520（训练时需要） || CUDA 版本 | 11.8 或 12.1（与 PyTorch 版本对应） || GPU 显存 | ≥ 8GB（ACT/Diffusion）；≥ 24GB（Pi0/GR00T） || 磁盘空间 | ≥ 50GB |',
        '项目要求：\n\n| 项目 | 要求 |\n| --- | --- |\n| Ubuntu 版本 | 20.04 LTS 或 22.04 LTS（推荐） |\n| Python 版本 | 3.12 及以上（lerobot 最新版要求） |\n| NVIDIA 驱动 | ≥ 520（训练时需要） |\n| CUDA 版本 | 11.8 或 12.1（与 PyTorch 版本对应） |\n| GPU 显存 | ≥ 8GB（ACT/Diffusion）；≥ 24GB（Pi0/GR00T） |\n| 磁盘空间 | ≥ 50GB |',
    ),
    '7-2-act.2': (
        '判断训练收敛\n\n指标良好状态\n\n训练损失从 >1.0 下降到 &lt;0.1\n\n损失曲线平滑下降，无明显震荡\n\n| 训练步数 | 通常 50,000-200,000 步 |\n| --- | --- |',
        '判断训练收敛\n\n| 指标 | 良好状态 |\n| --- | --- |\n| 训练损失 | 从 >1.0 下降到 &lt;0.1 |\n| 损失曲线 | 平滑下降，无明显震荡 |\n| 训练步数 | 通常 50,000-200,000 步 |',
    ),
    '8-1-inference-commands': (
        '两种推理模式\n\n| 模式 |  | 命令 |  |  | 说明 |\n| --- | --- | --- | --- | --- | --- |\n| 自主推理 |  | lerobot-record -- |  |  | 机器人完全自主执行，不需要人工操控主动臂 |\n|  |  |  | lerobot-record -- |  | 机器人完全 |\n|  |  |  | policy.path=... |  |  |\n| 辅助遥操作 |  | lerobot-teleoperate +--policy.path  |  |  | 主动臂作为辅助输入，模型决定最终动作 |',
        '两种推理模式\n\n| 模式 | 命令 | 说明 |\n| --- | --- | --- |\n| 自主推理 | `lerobot-record --policy.path=<模型路径>` | 机器人完全自主执行，不需要人工操控主动臂 |\n| 辅助遥操作 | `lerobot-teleoperate --policy.path=<模型路径>` | 主动臂作为辅助输入，模型决定最终动作 |',
    ),
    '8-1-inference-commands.2': (
        '核心参数说明\n\n| 参数 |  | 说明 |  | 示例 |  |  |  |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| --policy.path  |  | 模型路径（本地 orHuggingFace） |  | outputs/train/act my t_ _ |  |  |  |\n|  |  |  |  |  | outputs/train/act my t_ _ |  |  |\n|  |  |  | ggingFace） | ask/checkpoints/last/p |  |  |  |\n|  |  |  |  |  | retrained model_ |  |  |\n|  |  |  |  |  |  |  |  |\n| --robot.type  |  | 机器人类型 |  | so101 follower _ |  |  |  |\n| --robot.port  |  | 从动臂端口 |  | /dev/ttyACM0  |  |  |  |\n| --eval.n episodes _ |  | 推理执行次数 |  | 10  |  |  |  |\n| --repo-id  |  | 推理记录保存的数据集 ID |  | YOUR HF USERNAME/eval_ _ _ |  |  |  |\n|  |  |  |  |  | YOUR HF USERNAME/eval_ _ _ |  |  |\n|  |  |  |  |  | act my task_ _ |  |  |\n| --robot.cameras  |  | 摄像头配置（JSON格式） |  | 同训练时摄像头配置 |  |  |  |',
        '核心参数说明\n\n| 参数 | 说明 | 示例 |\n| --- | --- | --- |\n| --policy.path | 模型路径（本地或 HuggingFace） | outputs/train/act_my_task/checkpoints/last/pretrained_model |\n| --robot.type | 机器人类型 | so101_follower |\n| --robot.port | 从动臂串口端口 | /dev/ttyACM0 |\n| --eval.n_episodes | 推理执行次数 | 10 |\n| --repo-id | 推理记录保存的数据集 ID | YOUR_HF_USERNAME/eval_act_my_task |\n| --robot.cameras | 摄像头配置（JSON 格式） | 同训练时摄像头配置 |',
    ),
    '8-3-jetson-orin': (
        '| XLeRobot Jetson Orin 配置XLeRobot 项目特别提供了 Jetson Orin 的补充配置文档：• 参见本地文件： 1-AI机器人教程/2-XLerobot项目指引-0.4/1-XLeRobot项目指引 |  |  |  |\n| --- | --- | --- | --- |\n|  |  | 1-AI机器人教程/2-XLerobot项目指引-0.4/1-XLeRobot项目指引 |  |\n|  | （Jetson Orin版补充）.pdf |  |  |\n\n关键步骤：',
        'XLeRobot Jetson Orin 配置\n\nXLeRobot 项目特别提供了 Jetson Orin 的补充配置文档：参见本地文件 `1-AI机器人教程/2-XLerobot项目指引-0.4/1-XLeRobot项目指引（Jetson Orin版补充）.pdf`。\n\n关键步骤：',
    ),
    '4-6-assemble-leader': (
        '请参见 [3.4-组装从动臂（Follower）]中关节 1-5 的步骤。',
        '请参见 [4.5 组装从动臂（Follower）](./4-5-assemble-follower) 中关节 1-5 的步骤。',
    ),
    '4-6-assemble-leader.2': (
        '### 安装扳机（Follower Trigger）\n\n```text\n扳机用于控制从动臂的夹爪开合，人用手指拨动扳机即可控制夹爪\n```',
        '### 安装扳机（Follower Trigger）\n\n扳机用于控制从动臂的夹爪开合，人用手指拨动扳机即可控制夹爪。',
    ),
    # 章节互跳：把 PDF 里的章节引用转成可点击链接
    '1-1-lerobot-intro': (
        '[4-环境安装]',
        '[3. 环境安装](./3-1-mac-install)',
    ),
    '1-3-hardware-specs': (
        '（第二章节-硬件准备，第一节）',
        '（[2.1 物料清单 BOM](./2-1-bom)）',
    ),
    '2-1-bom': (
        '【2.2 打印指南】',
        '[2.2 打印指南](./2-2-3d-printing)',
    ),
    '4-4-servo-id': (
        '第一步：安装 LeRobot 并连接控制板确保已完成环境安装（见 [三、环境安装]），然后连接控制板到电脑。第二步：运行舵机配置命令每次只连接一个舵机到控制板，运行以下命令：',
        '1. 安装 LeRobot 并连接控制板，确保已完成环境安装（见 [3. 环境安装](./3-1-mac-install)），然后连接控制板到电脑。\n2. 运行舵机配置命令，每次只连接一个舵机到控制板，运行以下命令：',
    ),
    '4-4-servo-id.2': (
        '第三步：按脚本提示逐一配置脚本会提示你依次连接每个舵机并设置 ID：',
        '3. 按脚本提示逐一配置。脚本会提示你依次连接每个舵机并设置 ID：',
    ),
    '4-4-servo-id.3': (
        'https://huggingface.co/datasets/huggingface/documentation-[images/resolve/main/lerobot/setup_motors_so101_2.mp4](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/lerobot/setup_motors_so101_2.mp4)',
        '[setup_motors_so101_2.mp4](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/lerobot/setup_motors_so101_2.mp4)',
    ),
    '4-4-servo-id.4': (
        '- Windows电脑https://gitee.com/ftservo/fddebug[下载FD1.9.8.5(250729).7z ，解压，运行里面的exe程序](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250729).7z)\n- Ubuntu电脑https://github.com/Kotakku/FT_SCServo_Debug_Qt',
        '- Windows 电脑：[下载 FD1.9.8.5(250729).7z](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250729).7z)，解压，运行里面的 exe 程序\n- Ubuntu 电脑：[FT_SCServo_Debug_Qt](https://github.com/Kotakku/FT_SCServo_Debug_Qt)',
    ),
    '5-2-camera-teleop': (
        'index or path _ _',
        'index_or_path',
    ),
    # 资源表超链接：社区资源 / 视频资源
    '1-1-lerobot-intro.2': (
        '| 官方文档 | huggingface.co/docs/lerobot |\n| GitHub 仓库 | github.com/huggingface/lerobot |\n| 预训练模型 & 数据集 | huggingface.co/lerobot |\n| Discord 社区 | discord.gg/s3KuuzsPFb |',
        '| 官方文档 | [huggingface.co/docs/lerobot](https://huggingface.co/docs/lerobot) |\n| GitHub 仓库 | [github.com/huggingface/lerobot](https://github.com/huggingface/lerobot) |\n| 预训练模型 & 数据集 | [huggingface.co/lerobot](https://huggingface.co/lerobot) |\n| Discord 社区 | [discord.gg/s3KuuzsPFb](https://discord.gg/s3KuuzsPFb) |',
    ),
    '1-2-so101-intro': (
        '| SO-101 官方演示视频 | Hugging Face SO-101 页面 |\n| TheRobotStudio GitHub | SO-ARM100 仓库 |\n| LeRobot Discord | 社区讨论 |',
        '| SO-101 官方演示视频 | [Hugging Face SO-101 页面](https://huggingface.co/docs/lerobot/so101) |\n| TheRobotStudio GitHub | [SO-ARM100 仓库](https://github.com/TheRobotStudio/SO-ARM100) |\n| LeRobot Discord | [社区讨论](https://discord.gg/s3KuuzsPFb) |',
    ),
    '1-2-so101-intro.2': (
        '├── 深度相机（带 2 自由度云台）\n└── 总成本约 $660（参考价，跟采购渠道和国家地区有较大关联和差异）',
        '└── 深度相机（带 2 自由度云台）',
    ),
    # 去掉估价 / 价格
    '1-3-hardware-specs.3': (
        '本文详细列出 SO-101 的电机参数、套件构成和成本估算，帮助你在购买前做好充分了解。',
        '本文详细列出 SO-101 的电机参数、套件构成，帮助你在购买前做好充分了解。',
    ),
    '1-3-hardware-specs.4': (
        '## 1.3.4 套件构成与成本',
        '## 1.3.4 套件构成',
    ),
    '1-3-hardware-specs.5': (
        '估算总价：$229.88 美元 / €226.30 欧元（不含3D打印件）以上价格仅供参考，跟采购渠道和国家地区有较大关联和差异。国内购买价格相对低一点',
        '',
    ),
    '1-3-hardware-specs.6': (
        '估算价格：$121.94 美元以上价格仅供参考，跟采购渠道和国家地区有较大关联和差异。',
        '',
    ),
    '2-1-bom.2': (
        '| 桌面固定夹 | 最大开口 ≥ 5cm | 4个 | 固定主从臂底座（各 2 个） |\n\n| USB扩展口 | USB3.0 | 1个 | 扩展4个USB口 |\n| --- | --- | --- | --- |',
        '| 桌面固定夹 | 最大开口 ≥ 5cm | 4个 | 固定主从臂底座（各 2 个） |\n| USB扩展口 | USB3.0 | 1个 | 扩展4个USB口 |',
    ),
    '2-1-bom.3': (
        '| Intel RealSense D405 | 深度相机 | 3D 感知 | 较贵，暂未配置 |\n\n| Intel RealSense D435 | 深度相机，广角 | 场景深度 | 较贵，暂未配置 |\n| --- | --- | --- | --- |',
        '| Intel RealSense D405 | 深度相机 | 3D 感知 | 较贵，暂未配置 |\n| Intel RealSense D435 | 深度相机，广角 | 场景深度 | 较贵，暂未配置 |',
    ),
    '2-1-bom.4': (
        '如果希望节省成本，可以购买6个C066，单个舵机能够从100元降低到50元，主要缺点是没有电机，只有编码器，只能用来做示教，无法跟从动臂之间进行舵机互换，无法主动运动，通用性下降，但是能节省大概300元成本。',
        '',
    ),
    '2-3-purchase': (
        '启月科技也有对应的SFS3215舵机套件销售，整体能够控制在900以内：',
        '启月科技也有对应的 STS3215 舵机套件销售：',
    ),
    '2-3-purchase.2': (
        '| 相机类型 | 推荐型号 | 价格范围 | 用途 |\n| --- | --- | --- | --- |\n| 通用 USB 摄像头 | 罗技 C920/C930e | ¥200-500 | 顶置/侧置视角 |\n| 小型 UVC 模组 | 32×32mm USB 模组 | ¥50-150 | 腕部相机 |\n| 深度相机 | Intel RealSense D405 | ¥1500+ | 3D感知（进阶） |\n| 深度相机 | Intel RealSense D435 | ¥1200+ | 广角3D感知 |',
        '| 相机类型 | 推荐型号 | 用途 |\n| --- | --- | --- |\n| 通用 USB 摄像头 | 罗技 C920/C930e | 顶置/侧置视角 |\n| 小型 UVC 模组 | 32×32mm USB 模组 | 腕部相机 |\n| 深度相机 | Intel RealSense D405 | 3D感知（进阶） |\n| 深度相机 | Intel RealSense D435 | 广角3D感知 |',
    ),
    '2-3-purchase.3': (
        '价格说明：以上摄像头价格仅供参考，跟采购渠道和国家地区有较大关联和差异。',
        '',
    ),
    '2-3-purchase.4': (
        '购买整机套件无需自行 3D 打印和采购零件，适合快速上手：',
        '购买整机套件无需自行 3D 打印和采购零件，适合快速上手：\n\n'
        + purchase_banner('SO-101 套件', '适配本教程的完整套件，省去采购与组装时间'),
    ),
    '5-2-camera-teleop.2': (
        '| 类型 | 推荐用途 | 安装位置 | 价格参考 |\n| --- | --- | --- | --- |\n| USB 摄像头（广角） | 顶置全局视角 | 桌面顶置支架 | ¥50-150 |\n| 小型 UVC 摄像头 | 腕部第一视角 | 夹爪附近 | ¥50-150 |\n| RealSense D405 | 高精度近距深度 | 腕部 | ¥1500+ |\n| RealSense D435 | 广角深度 | 顶置 | ¥1200+ |',
        '| 类型 | 推荐用途 | 安装位置 |\n| --- | --- | --- |\n| USB 摄像头（广角） | 顶置全局视角 | 桌面顶置支架 |\n| 小型 UVC 摄像头 | 腕部第一视角 | 夹爪附近 |\n| RealSense D405 | 高精度近距深度 | 腕部 |\n| RealSense D435 | 广角深度 | 顶置 |',
    ),
    '5-2-camera-teleop.3': (
        '价格说明：以上摄像头价格仅供参考，跟采购渠道和国家地区有较大关联和差异。',
        '',
    ),
    '9-1-xlerobot.3': (
        '，总成本约 $660（跟采购渠道和国家地区有较大关联和差异）',
        '',
    ),
    '9-1-xlerobot.4': (
        '总估算成本：约 $660 美元（仅供参考，跟采购渠道和国家地区有较大关联和差异）',
        '',
    ),
}

# 要求3：正文/表格里的裸网址 → 可点击的 markdown 链接。
# 这些网址原为 PDF 纯文本（非链接注释），提取后是裸文本，需手动包成链接。
# 注意：MDX 不支持 <url> 自动链接（会被当成 JSX 标签报错），必须用 [text](url)。
# 代码块内的网址（git clone / pip install / # 注释）不在此列表，不受影响。
# 值 = (裸网址, 链接文字)
BARE_URL_FIXES = [
    # 4-3 串口驱动（Mac / Linux / Windows）
    ('https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html', '下载'),
    ('https://www.wch.cn/downloads/CH341SER_LINUX_ZIP.html', '下载'),
    ('https://www.wch.cn/downloads/CH341SER_EXE.html', '下载'),
    # 2-2 官方 STL 仓库
    ('https://github.com/TheRobotStudio/SO-ARM100/tree/main/STL/SO101', 'SO-ARM100 STL 文件'),
    # 5-1 LeIsaac 仿真平台
    ('https://lightwheelai.github.io/leisaac', 'LeIsaac 仿真平台'),
    # 9-2 Raspberry Pi Imager 官网
    ('https://www.raspberrypi.com/software/', '下载'),
    # 9-2 百度网盘树莓派镜像
    ('https://pan.baidu.com/s/1Fs0zUuoP1vi4GncC7SX3qw?pwd=a5hs', '下载'),
    ('https://pan.baidu.com/s/1L1ZFS8bCCkw2BuCu5zItHQ?pwd=nuxq', '下载'),
    # 2-3 PartaBot 官网
    ('https://partabot.com', 'partabot.com'),
]

# 无边框参数表：find_tables 无法识别，正文线性化后产生乱码。
# 用「起始标题 → 下一个标题」定位整个乱码区间，整体替换为干净 markdown。
# 值 = (起始锚点文本, 结束锚点文本, 替换内容[含起始标题、不含结束标题])
REGION_FIXES = {
    '7-2-act': (
        '## 关键参数说明',
        '## 使用预训练权重微调',
        '## 关键参数说明\n\n'
        '| 参数 | 说明 | 推荐值 |\n| --- | --- | --- |\n'
        '| --policy.type | 算法类型 | act |\n'
        '| --dataset.repo_id | 训练数据集 | 用户名/数据集名 |\n'
        '| --policy.chunk_size | 动作序列长度 | 100（约 3s @ 60fps） |\n'
        '| --policy.n_action_steps | 推理时执行的动作步数 | 100 |\n'
        '| --policy.dim_model | Transformer 隐藏维度 | 512（小）/ 1024（大） |\n'
        '| --training.num_epochs | 训练轮数（正式训练） | 200（快速验证）/ 1000 |\n'
        '| --training.batch_size | 批次大小 | 32（8GB）/ 64（24GB） |\n'
        '| --training.lr | 学习率 | 1e-4 |\n\n',
    ),
    '6-2-dataset-tools': (
        '### 参数说明',
        '### 分割数据集',
        '### 参数说明\n\n'
        '| 参数 | 说明 |\n| --- | --- |\n'
        '| --repo_id | 数据集 ID |\n'
        '| --operation.type | 操作类型：delete_episodes |\n'
        '| --operation.episode_indices | 要删除的 episode 编号列表 |\n\n',
    ),
    '4-2-servo-prep': (
        '### 关键特性',
        '### 舵机连接线说明',
        '### 关键特性\n\n'
        '| 参数 | 值 |\n| --- | --- |\n'
        '| 型号 | STS3215（飞特舵机） |\n'
        '| 工作电压 | 主动臂：7.4V（C001/C044/C046）；从动臂较大负载：12V（C018）；从动臂正常负载：7.4V（C001） |\n'
        '| 通信方式 | 单线串行总线 |\n'
        '| 默认 ID | 1（出厂设置） |\n'
        '| 默认波特率 | 1,000,000 bps（1Mbps） |\n'
        '| 角度范围 | 0°–360°（位置模式） |\n\n',
    ),
    '4-2-servo-prep.2': (
        '## 4.2.3 四种舵机配置',
        '## 4.2.4 控制板接线',
        '## 4.2.3 四种舵机配置\n\n'
        '在 SO-101 中，根据安装位置和所需扭矩，使用了以下四种齿轮比配置的 STS3215 舵机，如果是零阻尼版，那么主动臂的六个舵机就都是C066：\n\n'
        '| 型号 | 电压 | 齿轮比 | 使用位置 | 舵机示意图 | 包装示意图 |\n'
        '| --- | --- | --- | --- | --- | --- |\n'
        '| C018 | 12V | 1:345 | 从动臂所有关节（6个） | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p2-3.png) | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p2-4.png) |\n'
        '| C001 | 7.4V | 1:345 | 主动臂肩部（ID2）、从动臂所有关节（6个） | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p2-5.png) | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p2-6.png) |\n'
        '| C044 | 7.4V | 1:191 | 主动臂底座（ID1）、肘部（ID3） | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p3-7.png) | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p3-8.png) |\n'
        '| C046 | 7.4V | 1:147 | 主动臂腕部弯（ID4）、腕部旋（ID5）、夹爪（ID6） | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p3-9.png) | ![图](/img/tutorial/so-arm101/4-2-servo-prep-p3-10.png) |\n\n'
        '清点提示：可通过轻轻转动舵机感受阻力来区分齿轮比——阻力越大齿轮比越高。注意：5 号舵机不安装舵盘。\n\n',
    ),
    '4-2-servo-prep.3': (
        '### 上电后舵机指示灯判断',
        '### 控制板跳线设置',
        '### 上电后舵机指示灯判断\n\n'
        '接通电源后，通过舵机红色指示灯判断电源是否正常：\n\n'
        '| 指示灯状态 | 含义 | 处理方式 |\n| --- | --- | --- |\n'
        '| 🔴 长亮红灯 | 电源电压正常，舵机就绪 | 正常，可继续操作 |\n'
        '| 🔴 红灯闪烁 | 电源电压异常（过高或过低） | 立即断电，检查适配器规格 |\n\n'
        '重要：如出现红灯闪烁，务必立即断电。常见原因是主从臂适配器接错。确认后再重新通电。\n\n',
    ),
    '2-1-bom': (
        '### 主动臂（Leader Arm）有阻尼版本-舵机清单',
        '### 主动臂（Leader Arm）零阻尼版本-舵机清单',
        '### 主动臂（Leader Arm）有阻尼版本-舵机清单\n\n'
        '主动臂根据各关节所需扭矩，使用三种不同齿轮比的 7.4V 舵机：\n\n'
        '| 舵机型号 | 电压 | 齿轮比 | 额定扭矩 | 峰值扭矩 | 安装位置（ID） | 数量 |\n'
        '| --- | --- | --- | --- | --- | --- | --- |\n'
        '| STS3215-C044 | 5V/7.4V | 1:191 | 9kg·cm | 27.4kg·cm | ID1 底座、ID3 肘部 | 2个 |\n'
        '| STS3215-C001 | 5V/7.4V | 1:345 | 5kg·cm | 19.5kg·cm | ID2 肩部 | 1个 |\n'
        '| STS3215-C046 | 5V/7.4V | 1:147 | 4.8kg·cm | 14.4kg·cm | ID4 腕弯、ID5 腕旋、ID6 夹爪/扳机 | 3个 |\n\n',
    ),
    '1-3-hardware-specs': (
        '### 方案一：标准配置（原版）',
        '### 方案二：低成本配置',
        '### 方案一：标准配置（原版）\n\n'
        '| 关节编号 | 位置 | 电机型号 | 齿轮比 |\n| --- | --- | --- | --- |\n'
        '| 1 | 底座旋转（ShoulderPan） | STS3215-C044 | 1 / 191 |\n'
        '| 2 | 肩部抬升（ShoulderLift） | STS3215-C001 | 1 / 345 |\n'
        '| 3 | 肘部弯曲（Elbow Flex） | STS3215-C044 | 1 / 191 |\n'
        '| 4 | 腕部弯曲（Wrist Flex） | STS3215-C046 | 1 / 147 |\n'
        '| 5 | 腕部旋转（Wrist Roll） | STS3215-C046 | 1 / 147 |\n'
        '| 6 | 夹爪/扳机（Gripper） | STS3215-C046 | 1 / 147 |\n\n',
    ),
    '1-3-hardware-specs.2': (
        '### 双臂套装（主动臂 + 从动臂）',
        '### 单从动臂',
        '### 双臂套装（主动臂 + 从动臂）\n\n'
        '| 零件 | 数量 | 说明 |\n| --- | --- | --- |\n'
        '| STS3215-C018 舵机 | 6 个 | 从动臂较大负载，12V |\n'
        '| STS3215-C044/C001/C046 舵机 | 6 个 | 主动臂有阻尼，7.4V |\n'
        '| 电机控制板 | 2 块 | 飞特兼容总线舵机控制板 |\n'
        '| USB-C 数据线 | 2 根 | 连接电脑 |\n'
        '| 12V 电源适配器 | 1 个 | 从动臂供电 |\n'
        '| 5V 电源适配器 | 1 个 | 主动臂供电 |\n'
        '| 桌面固定夹 | 4 个 | 固定机械臂底座 |\n\n',
    ),
    '1-1-lerobot-intro': (
        '#### 视觉-语言-动作模型（VLA）',
        '#### 强化学习算法',
        '#### 视觉-语言-动作模型（VLA）\n\n'
        '| 算法 | 特点 | 推荐场景 |\n| --- | --- | --- |\n'
        '| SmolVLA | 轻量级 VLA，进阶推荐 | 资源受限环境 |\n'
        '| Pi0 / Pi0.5 | 效果最优，需大显存 | 高精度任务 |\n'
        '| GR00T N1.5 | NVIDIA 出品，Jetson 优化 | 嵌入式部署 |\n'
        '| XVLA | 跨模态扩展 | 研究场景 |\n\n',
    ),
    '2-2-3d-printing': (
        '### 主动臂（Leader Arm）打印件（一般打印黑色）',
        '## 2.2.3 打印注意事项',
        '### 主动臂（Leader Arm）打印件（一般打印黑色）\n\n'
        '| 零件名称 | 打印数量 | 预计耗时 | 备注 |\n| --- | --- | --- | --- |\n'
        '| 底座 | 1 | ~3h | —— |\n'
        '| 1号舵机套筒 | 1 | ～1h | —— |\n'
        '| 肩部连接件 | 1 | ~1.5h | —— |\n'
        '| 2号舵机套筒 | 1 | ～0.5h | —— |\n'
        '| 大臂 | 1 | ~2h | —— |\n'
        '| 小臂 | 1 | ~1.5h | —— |\n'
        '| 4号舵机套筒 | 1 | ～0.5h | —— |\n'
        '| 主动臂腕部支架 | 1 | ~1h | 该零件为主动臂特有 |\n'
        '| 手柄 | 1 | ~1h | 该零件为主动臂特有 |\n'
        '| 扳机 | 1 | ~0.5h | 该零件为主动臂特有 |\n'
        '| 舵机控制板安装板 | 1 | ~0.5h | —— |\n'
        '| 固定相机安装板 | 1 | ～0.5h | 若无固定相机，则不需要此零件 |\n\n',
    ),
    '4-6-assemble-leader.3': (
        '主动臂组装完成效果（因减速比小，关节会轻松一些；如果是零阻尼版，就会基本无阻力，主要用来反馈关节位置）：',
        '## 4.6.6 操作手感测试',
        '主动臂组装完成效果（因减速比小，关节会轻松一些；如果是零阻尼版，就会基本无阻力，主要用来反馈关节位置）：\n\n'
        '| 主动臂正面 | 主动臂反面 |\n| --- | --- |\n'
        '| ![图](/img/tutorial/so-arm101/4-6-assemble-leader-p6-6.png) | ![图](/img/tutorial/so-arm101/4-6-assemble-leader-p6-7.png) |\n\n',
    ),
    '4-6-assemble-leader.4': (
        '## 4.6.3 组装前准备',
        '## 4.6.4 关节 1-5：与从动臂相同',
        '## 4.6.3 组装前准备\n\n'
        '- 6 个主动臂舵机已配置 ID（1-6），齿轮比正确（见 [4.2 认识与准备舵机](./4-2-servo-prep)）\n'
        '- Leader 特有打印件齐全：Leader Handle、Leader Holder、Follower Trigger\n'
        '- 关节 1-5 的组装与从动臂相同，参考 [4.5 组装从动臂（Follower）](./4-5-assemble-follower)\n\n',
    ),
    '4-9-debug-verify': (
        '### 结构检查清单',
        '### 关节自由度检查',
        '### 结构检查清单\n\n'
        '- 所有螺丝已拧紧，无松动\n'
        '- 所有 3D 打印件连接处无明显间隙\n'
        '- 连接线走线整齐，无夹压风险\n'
        '- 桌面夹已固定，机械臂底座稳定\n\n',
    ),
    '4-9-debug-verify.2': (
        '### 关节自由度检查',
        '## 4.9.3 第二步：上电测试',
        '### 关节自由度检查\n\n'
        '手动（断电状态下）缓慢活动每个关节：\n\n'
        '| 关节 | 预期运动 | 运动范围 |\n| --- | --- | --- |\n'
        '| 关节 1（底座） | 左右旋转 | ±180° |\n'
        '| 关节 2（肩部） | 前后抬升 | 0°~180° |\n'
        '| 关节 3（肘部） | 上下弯曲 | 0°~180° |\n'
        '| 关节 4（腕部弯曲） | 上下翻转 | ±90° |\n'
        '| 关节 5（腕部旋转） | 旋转 | ±180° |\n'
        '| 关节 6（夹爪） | 开合 | 开→合 |\n\n'
        '标准：每个关节应能顺畅转动，无明显卡阻或异响。\n\n',
    ),
    '4-9-debug-verify.3': (
        '异常情况处理：',
        '## 4.9.5 常见调试问题',
        '### 异常情况处理\n\n'
        '| 现象 | 可能原因 | 解决方法 |\n| --- | --- | --- |\n'
        '| 只读到部分舵机 | 某段连接线松动 | 检查断点处连接线，重新插紧 |\n'
        '| 读到 ID 重复 | 舵机 ID 未正确设置 | 重新执行 ID 设置流程 |\n'
        '| 完全读不到舵机 | 控制板模式错误 | 检查跳线帽是否在 B 通道 |\n'
        '| 串口不存在 | USB 线问题 | 更换数据线；重新安装CH34x 驱动 |\n\n',
    ),
    '4-9-debug-verify.4': (
        '## 4.9.5 常见调试问题',
        '## 参考资料',
        '## 4.9.5 常见调试问题\n\n'
        '- Q：舵机上电后有轻微震动，正常吗？A：正常。舵机在保持位置时有轻微抖动属于正常现象，如果震动剧烈则可能是 PID 参数问题。\n'
        '- Q：机械臂上电后自动移动到某个位置，是正常的吗？A：正常。上电后舵机会回到上次记录的位置。首次上电前应确保机械臂处于安全姿态（无遮挡物）。\n'
        '- Q：某个关节转动时发出“咔哒”声？A：可能是舵盘固定螺丝松动，或打印件配合不良。检查对应关节的舵盘螺丝和结构件连接是否紧固。\n\n',
    ),
    '4-5-assemble-follower': (
        '## 4.5.2 组装前准备',
        '## 4.5.3 关节 1：底座与 ID1 舵机',
        '## 4.5.2 组装前准备\n\n'
        '- 所有 6 个从动臂舵机已配置 ID（1-6）\n'
        '- 所有 3D 打印件已检查，支撑已完全去除\n'
        '- M2 和 M3 螺丝分类备好（M3螺丝用于连接舵盘，M2自攻螺丝用于连接舵机机身）\n\n',
    ),
    '4-1-unboxing': (
        '主动臂有阻尼，从动臂中等负载：',
        '主动臂有阻尼，从动臂较大负载：',
        '主动臂有阻尼，从动臂中等负载：\n\n'
        '| 零件 | 数量 | 检查要点 |\n| --- | --- | --- |\n'
        '| STS3215-C001/044/046 舵机 | C001型1个，C044型2个，C046型3个 | 主动臂使用 |\n'
        '| STS3215-C001 舵机 | 6 个 | 从动臂使用 |\n\n',
    ),
    '4-1-unboxing.2': (
        '| 注意： | 如果 | 从动臂选择较大负载版本',
        '### 结构配件',
        '注意：如果从动臂选择较大负载版本，则为 1 个 12V 电源适配器和 1 个 5V 电源适配器；如果从动臂选择中等/正常负载版本，则为 2 个 5V 电源适配器。\n\n',
    ),
    '4-1-unboxing.3': (
        '### 结构配件',
        '### 相机组件',
        '### 结构配件\n\n'
        '| 零件名称 | 规格 | 数量 | 用途 |\n| --- | --- | --- | --- |\n'
        '| F夹 | —— | 4个 | 固定机械臂至桌面 |\n'
        '| 一字螺丝刀 | —— | 1个 |  |\n'
        '| 十字螺丝刀 | —— | 1个 |  |\n'
        '| 铜柱 | M2.5*6mm | 10个 | 固定舵机控制板、手眼相机、桌面相机 |\n'
        '| 十字螺丝 | M2.5 × 4mm | 30 个 | 固定舵机控制板、手眼相机、桌面相机 |\n'
        '| 螺母 | M3 | 4个 | 用于固定手眼相机支架 |\n'
        '| 十字螺丝 | M3*8 | 4个 | 用于固定手眼相机支架 |\n\n',
    ),
    '9-1-xlerobot': (
        '### 设备端口号配置',
        '手眼相机暂无序列号区分',
        '### 设备端口号配置\n\n'
        '选择 Jetson Orin 成品套件，发货时已配置好端口映射。不要随意更换 left/right 配置，也不要更换舵机驱动板与 leader/follower 的搭配关系。\n\n'
        '| 设备 | 端口符号链接 |\n| --- | --- |\n'
        '| 左从臂 | `/dev/so101_follower_left` |\n'
        '| 左引导臂 | `/dev/so101_leader_left` |\n'
        '| 右从臂 | `/dev/so101_follower_right` |\n'
        '| 右引导臂 | `/dev/so101_leader_right` |\n'
        '| 头部相机 | `/dev/camera_top` |\n'
        '| 左手眼相机 | `/dev/camera_left` |\n'
        '| 右手眼相机 | `/dev/camera_right` |\n\n',
    ),
    '9-1-xlerobot.2': (
        '校准文件路径（具体编号依机器而不同）：',
        '### 注意事项',
        '校准文件路径（具体编号依机器而不同）：\n\n'
        '| 类型 | 路径 |\n| --- | --- |\n'
        '| SO-101 从臂 | `~/.cache/huggingface/lerobot/calibration/robots/so101_follower/R1225####.json` |\n'
        '| SO-101 引导臂 | `~/.cache/huggingface/lerobot/calibration/teleoperators/so101_leader/R0725####.json` |\n'
        '| XLeRobot 整体 | `~/.cache/huggingface/lerobot/calibration/robots/xlerobot/XLR25###.json` |\n\n',
    ),
    '6-3-huggingface': (
        '## 数据集命名规范',
        '## 数据集格式说明',
        '## 数据集命名规范\n\n'
        '| 命名维度 | 建议格式 | 示例 |\n| --- | --- | --- |\n'
        '| 用户名/任务 | `username/task_description` | `amy/pick_and_place` |\n'
        '| 包含数量 | 加入 episode 数 | `amy/pick_and_place_100_eps` |\n'
        '| 包含硬件信息 | 加入机器人型号 | `amy/so101_pick_and_place` |\n\n',
    ),
    '7-3-smolvla': (
        '## 关键参数',
        '## 语言条件训练',
        '## 关键参数\n\n'
        '| 参数 | 说明 | 推荐值 |\n| --- | --- | --- |\n'
        '| `--policy.type` | 算法类型 | `smolvla` |\n'
        '| `--policy.pretrained_model_name_or_path` | 基础模型路径 | HuggingFace 模型 ID |\n'
        '| `--training.batch_size` | 批次大小 | 16（16GB）/ 32（24GB） |\n'
        '| `--training.lr` | 学习率 | 2e-5（微调推荐） |\n'
        '| `--training.num_epochs` | 训练轮数 | 100（快速验证）/ 500（正式训练） |\n\n',
    ),
    '7-4-diffusion-policy': (
        '## 关键参数',
        '## ACT vs Diffusion 选择参考',
        '## 关键参数\n\n'
        '| 参数 | 说明 | 推荐值 |\n| --- | --- | --- |\n'
        '| `--policy.type` | 算法类型 | `diffusion` |\n'
        '| `--policy.horizon` | 预测动作序列长度 | 16（标准） |\n'
        '| `--policy.n_obs_steps` | 观测历史步数 | 2 |\n'
        '| `--policy.num_train_timesteps` | 训练时扩散步数 | 100 |\n'
        '| `--policy.num_inference_steps` | 推理时扩散步数 | 10（DDIM 加速） |\n'
        '| `--training.batch_size` | 批次大小 | 32 |\n\n',
    ),
    '7-5-pi0': (
        '## 关键参数',
        '## 云 GPU 训练推荐',
        '## 关键参数\n\n'
        '| 参数 | 说明 | 建议值 |\n| --- | --- | --- |\n'
        '| `--policy.type` | Pi0 用 pi0，Pi0.5 用 pi0fast | — |\n'
        '| `--policy.no_tune_diffusion_model` | 禁止微调扩散模型（降低显存约 8GB） | true（显存不足时） |\n'
        '| `--training.batch_size` | 批次大小 | 4（24GB）/ 8（40GB） |\n'
        '| `--training.gradient_checkpointing` | 梯度检查点（降低显存） | true |\n\n',
    ),
    '6-1-data-collection': (
        '## 关键参数说明',
        '## 采集流程',
        '## 关键参数说明\n\n'
        '| 参数 | 说明 | 推荐值 |\n| --- | --- | --- |\n'
        '| `--dataset.repo_id` | 数据集 ID（用户名/数据集名） | 自定义 |\n'
        '| `--dataset.num_episodes` | 总采集次数（episode 数） | 50-200 |\n'
        '| `--dataset.single_task` | 任务描述（中文或英文均可） | 简洁描述 |\n'
        '| `--dataset.fps` | 录制帧率 | 60 |\n'
        '| `--dataset.push_to_hub` | 是否上传 HuggingFace | true / false |\n\n',
    ),
    # 9-1 信号接线：换页拆出的孤儿表头，整体替换为干净表格
    '9-1-xlerobot.3': (
        '### 信号接线',
        '⑤a 和 ④a 一样',
        '### 信号接线\n\n'
        '| 配对关系 | 用途 | 连接线 | 备注 |\n| --- | --- | --- | --- |\n'
        '| ⑤a ↔ ④b | 左 Follower 臂通信 | USB TypeA-TypeC | ⑤a 中任意一口，也可接USB 3.0 Hub |\n'
        '| ⑤a ↔ ④c | 右 Follower 臂通信 | USB TypeA-TypeC | ⑤a 中任意一口，也可接USB 3.0 Hub |\n'
        '| ④a ↔ ④d | 左手眼相机信号 | USB TypeA-TypeC 3.0 | ④a 中任意一口，也可接USB 3.0 Hub |\n'
        '| ④a ↔ ④e | 右手眼相机信号 | USB TypeA-TypeC 3.0 | ④a 中任意一口，也可接USB 3.0 Hub |\n\n',
    ),
    # 1-3 整机套件：去掉价格描述与乱码淘宝链接，替换为统一购买 CTA
    '1-3-hardware-specs.7': (
        '### 整机套件（无需自行3D打印）',
        '## 参考资料',
        '### 整机套件（无需自行3D打印）\n\n'
        '如下是启月科技的店铺，大家如果要省时间，也可以直接购买套件，适配整体教程。可以视自己的需求购买不同版本：\n\n'
        + purchase_banner('SO-101 套件', '适配本教程的完整套件，省去采购与组装时间') + '\n\n',
    ),
    # 7-6 费用参考：整段删除
    '7-6-cloud-gpu': (
        '## 费用参考（仅供参考）',
        '## 参考资料',
        '',
    ),
}


def clean(s):
    if s is None:
        return ''
    return s.replace(ZERO, '')


def derive_title(src_rel):
    base = os.path.basename(src_rel)
    base = base[:-4] if base.lower().endswith('.pdf') else base
    parts = base.split(' ', 1)
    if len(parts) > 1:
        return parts[1].strip()
    return base


def join_cell(s):
    s = clean(s)
    if not s:
        return s
    parts = s.split('\n')
    if len(parts) == 1:
        return s
    result = parts[0]
    for i in range(1, len(parts)):
        prev = result[-1] if result else ''
        cur = parts[i][0] if parts[i] else ''
        if prev.isdigit() and cur and not cur.isascii():
            result += ' ' + parts[i]
        else:
            result += parts[i]
    return result


def table_to_md(rows):
    if not rows or not rows[0]:
        return ''
    header = [join_cell(c) for c in rows[0]]
    lines = ['| ' + ' | '.join(header) + ' |']
    lines.append('| ' + ' | '.join('---' for _ in header) + ' |')
    for r in rows[1:]:
        cells = [join_cell(c) for c in r]
        while len(cells) < len(header):
            cells.append('')
        lines.append('| ' + ' | '.join(cells) + ' |')
    return '\n'.join(lines)


def place_images(rows, t, page_images, claimed):
    """把落在表格内的图片放回对应单元格。

    仅处理「单行图片、列数等于图片数」的规则画廊表（标题行 + 图片行）。
    复杂表格（列数不等于图片数）保持原样，交由 REGION_FIXES 处理。
    """
    if not rows or not rows[0]:
        return rows
    ncols = len(rows[0])
    tx0, ty0, tx1, ty1 = t.bbox
    imgs = []
    for i, (ib, md) in enumerate(page_images):
        cx = (ib[0] + ib[2]) / 2
        cy = (ib[1] + ib[3]) / 2
        if tx0 - 2 <= cx <= tx1 + 2 and ty0 - 2 <= cy <= ty1 + 2:
            imgs.append((i, ib, md))
    if len(imgs) != ncols or ncols == 0:
        return rows
    imgs.sort(key=lambda p: p[1][0])
    target = None
    for ri, r in enumerate(rows):
        if all((not clean(c).strip()) for c in r):
            target = ri
            break
    if target is None:
        rows.append([''] * ncols)
        target = len(rows) - 1
    for col, (i, ib, md) in enumerate(imgs):
        rows[target][col] = md
        claimed.add(i)
    return rows


def is_code_table(rows):
    text = '\n'.join(clean(c) for r in rows for c in (r or []) if c)
    if 'Code block' in text:
        return True
    if '\\' in text:
        return True
    if '{' in text or '}' in text:
        return True
    vals = [clean(c).strip() for r in rows for c in (r or []) if c]
    if vals and all(v.isdigit() for v in vals):
        return True
    return False


SECTION_RE = re.compile(r'^\d{1,2}\.\d{1,2}(?:\.\d{1,2})?[\s　]')


def is_false_table(rows, bbox=None, page_height=None):
    for r in rows:
        for c in (r or []):
            raw = clean(c).strip()
            if not raw:
                continue
            if SECTION_RE.match(raw) and ('\n' in raw or len(raw) > 25):
                return True
    if bbox is not None and page_height is not None and page_height > 0:
        if (bbox[3] - bbox[1]) > 0.55 * page_height:
            return True
    return False


def line_in_tables(x0, y0, x1, y1, table_bboxes):
    cy = (y0 + y1) / 2
    for tx0, ty0, tx1, ty1 in table_bboxes:
        if ty0 <= cy <= ty1 and max(x0, tx0) < min(x1, tx1):
            return True
    return False


def join_prose(prev, cur):
    if not prev:
        return cur
    pa, cb = prev[-1], cur[0]
    if pa.isascii() and pa.isalnum() and cb.isascii() and cb.isalnum():
        return prev + ' ' + cur
    return prev + cur


def should_join_code(prev, prev_x1, cur):
    p = prev.rstrip()
    if p.endswith('\\'):
        return False
    if p in ('--', '-'):
        return True
    if len(p) < len(prev) and p and p[-1] in ':,=+':
        return True
    if prev_x1 >= CODE_WRAP_X1:
        c = cur.lstrip()
        if c and not c.startswith(('#', '--', '}', "'", '"')):
            return True
    return False


def dewarp_code(lines):
    out = []
    for text, x1 in lines:
        if not out:
            out.append([text, x1])
            continue
        prev, prev_x1 = out[-1]
        if should_join_code(prev, prev_x1, text):
            out[-1][0] = prev + text
            out[-1][1] = x1
        else:
            out.append([text, x1])
    return [r[0] for r in out]


def normalize_key(s):
    s = clean(s)
    s = re.sub(r'\.md$', '', s, flags=re.I)
    s = s.strip().rstrip('/')
    s = s.split('/')[-1]
    s = re.sub(r'^\d+(?:\.\d+)*[.\-–]?\s*', '', s)
    s = re.sub(r'\s+', '', s)
    s = s.replace('（', '(').replace('）', ')')
    return s


def build_link_map(mapping):
    m = {}
    for src_rel, name, pos in mapping:
        title = derive_title(src_rel)
        m[normalize_key(title)] = (name, title)
    m['组装指南'] = ('4-1-unboxing', '4.1 开箱清点')
    return m


LINK_PAT = re.compile(r'(?<!!)\[([^\]]+)\]\(([^)]*)\)')


def fix_links(body, link_map):
    def repl(m):
        text, target = m.group(1), m.group(2)
        if re.match(r'^(https?://|#|/)', target):
            return m.group(0)
        key = normalize_key(target)
        if key in link_map:
            ename, ctitle = link_map[key]
            return f'[{ctitle}](./{ename})'
        return text

    return LINK_PAT.sub(repl, body)


def escape_angle_brackets(body):
    lines = body.split('\n')
    in_code = False
    res = []
    for ln in lines:
        if ln.strip().startswith('```'):
            in_code = not in_code
            res.append(ln)
            continue
        if in_code:
            res.append(ln)
        else:
            res.append(ln.replace('<', '&lt;'))
    return '\n'.join(res)


def is_code_font(spans):
    for sp in spans:
        f = sp.get('font', '')
        if 'SourceCodePro' in f or 'Mono' in f or 'Code' in f or 'Consolas' in f:
            return True
    return False


# PDF 里「Code block」标签用 Type3 字体渲染，提取后字母被拆开成 "C d bl k" 等乱码。
CODE_BLOCK_LABEL_RE = re.compile(
    r'^[Cc]\s*[oO]\s*[dD]\s*[eE]\s*[bB]\s*[lL]\s*[oO]\s*[cC]\s*[kK]\s*$'
    r'|^[Cc]\s*[dD]\s*[bB]\s*[lL]\s*[kK]\s*$'
)


def merge_code_fences(body):
    """合并因 PDF 换页被拆成相邻 ```text``` 的代码块，并剔除乱码的 Code block 标签。

    仅当闭合围栏与下一个开启围栏之间只有空行/乱码标签时才合并，
    中间存在正文的两个独立代码块不会被合并。
    """
    lines = body.split('\n')
    out = []
    i = 0
    n = len(lines)

    def is_open(l):
        return l.strip().startswith('```')

    while i < n:
        line = lines[i]
        s = line.strip()

        # 乱码标签（如 "C d bl k"）：跳过
        if CODE_BLOCK_LABEL_RE.match(s):
            i += 1
            continue

        if not is_open(line):
            out.append(line)
            i += 1
            continue

        # 定位闭合围栏
        j = i + 1
        while j < n and not is_open(lines[j]):
            j += 1
        if j >= n:
            out.extend(lines[i:])
            break
        close_idx = j

        # 向后看：跳过空行与乱码标签，判断是否紧跟另一个围栏（换页拆分的续块）
        k = close_idx + 1
        while k < n:
            ls = lines[k].strip()
            if ls == '' or CODE_BLOCK_LABEL_RE.match(ls):
                k += 1
                continue
            break
        if k < n and is_open(lines[k]):
            # 合并两块：找到第二块的闭合围栏
            j2 = k + 1
            while j2 < n and not is_open(lines[j2]):
                j2 += 1
            lang = s[3:].strip()
            content = lines[i + 1:close_idx] + lines[k + 1:j2]
            out.append('```' + lang)
            out.extend(content)
            out.append('```')
            i = j2 + 1
            continue

        # 不合并：原样输出
        out.extend(lines[i:close_idx + 1])
        i = close_idx + 1

    return '\n'.join(out)


def cleanup_purchase_links(body):
    """把教程里的淘宝 item 链接统一替换为官方店铺链接（含 PDF 提取产生的乱码形式）。"""
    store = f'[启月探微官方店铺]({STORE_URL})'
    # 乱码形式：https://item.taobao.com/item.htm?[xxx](https://item.taobao.com/item.htm?xxx)
    body = re.sub(
        r'https?://item\.taobao\.com/item\.htm\?\[[^\]]*\]\(https?://item\.taobao\.com/item\.htm\?[^)]*\)',
        store,
        body,
    )
    # 表格等处的裸 URL
    body = re.sub(
        r'https?://item\.taobao\.com/item\.htm\?[^\s|)\[]*',
        store,
        body,
    )
    return body


def heading_level(size):
    """按字号映射标题层级。25.5→1(章标题)、19.5→2、16.5→3、13.5→4、12/10.5→正文。"""
    if size >= 24:
        return 1
    if size >= 18:
        return 2
    if size >= 15:
        return 3
    if size >= 13:
        return 4
    return 0


def link_uri_for(bbox, links):
    """判断文本行是否落在某个链接注释内，返回其 uri。"""
    x0, y0, x1, y1 = bbox
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    for rect, uri in links:
        rx0, ry0, rx1, ry1 = rect
        if rx0 - 2 <= cx <= rx1 + 2 and ry0 - 2 <= cy <= ry1 + 2:
            return uri
    return None


def convert(src_rel, name, pos, link_map):
    src = os.path.join(ROOT, src_rel)
    doc = pymupdf.open(src)
    title = derive_title(src_rel)
    img_counter = 0

    # 单元：kind, top, x0, x1, bottom, payload
    #   text  payload=(text, size, is_code, uri)
    #   table payload=md
    #   image payload=md
    all_units = []
    for page_idx in range(doc.page_count):
        page = doc[page_idx]
        page_h = page.rect.height
        tables = page.find_tables().tables
        valid_table_bboxes = []
        for t in tables:
            if not is_code_table(t.extract()) and not is_false_table(t.extract(), t.bbox, page_h):
                valid_table_bboxes.append(tuple(t.bbox))

        links = []
        for l in page.get_links():
            if l.get('uri'):
                links.append((tuple(l['from']), l['uri']))

        page_units = []
        page_images = []
        claimed = set()
        d = page.get_text('dict')
        for b in d['blocks']:
            if b['type'] == 1:
                x0, y0, x1, y1 = b['bbox']
                if (x1 - x0) < 8 or (y1 - y0) < 8:
                    continue
                img_counter += 1
                img_name = f'{name}-p{page_idx + 1}-{img_counter}.png'
                img_path = os.path.join(OUT_IMG, img_name)
                try:
                    pix = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), clip=(x0, y0, x1, y1))
                    pix.save(img_path)
                    page_images.append(((x0, y0, x1, y1), '![图](%s)' % ('/img/tutorial/so-arm101/' + img_name)))
                except Exception as e:
                    print(f'  [图片渲染失败] {img_name}: {e}')
            elif b['type'] == 0:
                for line in b.get('lines', []):
                    text = clean(''.join(sp['text'] for sp in line.get('spans', [])))
                    if not text.strip():
                        continue
                    x0, y0, x1, y1 = line['bbox']
                    spans = line.get('spans', [])
                    size = max((sp['size'] for sp in spans), default=12.0)
                    code_font = is_code_font(spans)
                    if code_font and text.strip().isdigit() and x1 < 65:
                        continue  # 左侧行号列
                    if line_in_tables(x0, y0, x1, y1, valid_table_bboxes):
                        continue  # 表格内文本（由 table 单元输出）
                    uri = link_uri_for((x0, y0, x1, y1), links)
                    page_units.append(('text', y0, x0, x1, y1, (text, size, code_font, uri)))

        for t in tables:
            rows = t.extract()
            if is_code_table(rows) or is_false_table(rows, t.bbox, page_h):
                continue
            rows = place_images(rows, t, page_images, claimed)
            md = table_to_md(rows)
            if md:
                x0, y0, x1, y1 = t.bbox
                page_units.append(('table', y0, x0, x1, y1, md))

        # 未落入任何表格的图片，作为独立图片输出
        for i, (ib, md) in enumerate(page_images):
            if i in claimed:
                continue
            x0, y0, x1, y1 = ib
            page_units.append(('image', y0, x0, x1, y1, md))

        page_units.sort(key=lambda u: (u[1], u[2]))
        off = page_idx * 2000
        for u in page_units:
            all_units.append((u[0], u[1] + off, u[2], u[3], u[4] + off, u[5]))

    doc.close()

    out = []
    code_mode = False
    code_buf = []
    prev_joinable = False
    prev_is_list = False
    prev_bottom = None
    pending_bullet = None

    list_re = re.compile(r'^\d+[.、]\s')

    def blank():
        if out and out[-1] != '':
            out.append('')

    def flush_code():
        nonlocal code_mode, code_buf
        if code_buf:
            out.append('```text')
            out.extend(dewarp_code(code_buf))
            out.append('```')
        code_buf = []
        code_mode = False

    for u in all_units:
        kind = u[0]
        if kind == 'table':
            flush_code()
            blank()
            out.append(u[5])
            blank()
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None
            pending_bullet = None
            continue
        if kind == 'image':
            flush_code()
            blank()
            out.append(u[5])
            blank()
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None
            pending_bullet = None
            continue

        top, x0, x1, bottom, payload = u[1], u[2], u[3], u[4], u[5]
        text, size, code_font, uri = payload
        s = text.strip()
        if not s:
            continue

        # 代码行（字体 + 左缩进，排除表格单元格内的等宽文本）
        if code_font and x0 >= CODE_X0:
            if not code_mode:
                flush_code()
                code_mode = True
                code_buf = []
            code_buf.append((text, x1))
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None
            continue

        # 退出代码模式（下一行是正文）
        if code_mode:
            flush_code()
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None

        # 代码块标签：跳过
        if s.lower() == 'code block':
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None
            continue

        # 独立 bullet 字符（先于标题判断，避免被当作标题）
        if s in ('•', '·', '●', '○'):
            pending_bullet = '-'
            continue
        if pending_bullet:
            s = pending_bullet + ' ' + s
            pending_bullet = None

        # 标题（按字号，且不是链接/列表）
        lvl = heading_level(size)
        if lvl == 1:
            # 章标题：frontmatter 已含，跳过
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None
            continue
        if lvl >= 2:
            flush_code()
            if uri and '](' not in s:
                s = f'[{s}]({uri})'
            out.append('#' * lvl + ' ' + s)
            out.append('')
            prev_joinable = False
            prev_is_list = False
            prev_bottom = None
            continue

        # 链接文本（文本本身已是链接则跳过，避免双重包裹）
        if uri and '](' not in s and 'http' not in s:
            if s.startswith(('- ', '* ', '• ', '· ')):
                s = '- [' + s[2:] + '](' + uri + ')'
            elif not s.startswith(('![', '|', '#')):
                s = f'[{s}]({uri})'

        # 列表项
        if list_re.match(s) or s.startswith(('- ', '* ', '• ', '· ')):
            if not prev_is_list:
                blank()
            out.append(s)
            prev_joinable = True
            prev_is_list = True
            prev_bottom = bottom
            continue

        # 正文
        if prev_joinable and prev_bottom is not None and (top - prev_bottom) < GAP_JOIN:
            out[-1] = join_prose(out[-1], s)
        else:
            blank()
            out.append(s)
            prev_is_list = False
        prev_joinable = True
        prev_bottom = bottom

    flush_code()

    # 去标题重复（含标题被渲染为 ## 的情况）
    if title:
        t_clean = title.strip()
        for i in range(len(out)):
            stripped = out[i].strip()
            if stripped == t_clean:
                out[i] = ''
                break
            m = re.match(r'^#{1,4}\s+(.+)$', stripped)
            if m and m.group(1).strip() == t_clean:
                out[i] = ''
                break

    body = '\n'.join(out)
    body = re.sub(r'\n{3,}', '\n\n', body).strip()
    body = fix_links(body, link_map)
    body = escape_angle_brackets(body)
    body = merge_code_fences(body)
    body = cleanup_purchase_links(body)

    # 定向修正
    fix_keys = [k for k in POST_FIXES if k == name or k.startswith(name + '.')]
    for key in fix_keys:
        old, new = POST_FIXES[key]
        if old in body:
            body = body.replace(old, new)

    # 要求3：裸网址 → 可点击的 markdown 链接 [text](url)
    for url, label in BARE_URL_FIXES:
        body = body.replace(url, f'[{label}]({url})')

    # 无边框参数表：按标题锚点整段替换
    region_keys = [k for k in REGION_FIXES if k == name or k.startswith(name + '.')]
    for key in region_keys:
        start, end, repl = REGION_FIXES[key]
        si = body.find(start)
        if si != -1:
            ei = body.find(end, si + len(start))
            if ei != -1:
                body = body[:si] + repl + body[ei:]

    body = re.sub(r'\n{3,}', '\n\n', body).strip()

    if title is None:
        title = name

    front = (
        '---\n'
        f'sidebar_position: {pos}\n'
        f'title: {title}\n'
        f'description: {title}\n'
        '---\n\n'
    )
    os.makedirs(OUT_DOCS, exist_ok=True)
    os.makedirs(OUT_IMG, exist_ok=True)
    with open(os.path.join(OUT_DOCS, name + '.mdx'), 'w', encoding='utf-8') as f:
        f.write(front + body + '\n')
    return title, img_counter


def main():
    link_map = build_link_map(MAPPING)
    total_imgs = 0
    for src_rel, name, pos in MAPPING:
        try:
            title, nimg = convert(src_rel, name, pos, link_map)
            total_imgs += nimg
            print(f'[OK] {name}  (图片 {nimg})  ->  {title}')
        except Exception as e:
            print(f'[FAIL] {name}: {e!r}')
    print(f'\n完成，共 {len(MAPPING)} 篇，图片 {total_imgs} 张')


if __name__ == '__main__':
    main()
