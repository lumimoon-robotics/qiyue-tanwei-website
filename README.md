# 启月探微 · 官方网站

> 探微知著 · 启智未来 — 开源机器人技术与智能硬件平台

基于 [Docusaurus](https://docusaurus.io/) 构建，通过 GitHub Actions 自动部署到 GitHub Pages。

## 🚀 本地开发

```bash
npm install
npm start        # http://localhost:3000
```

## 🏗️ 构建

```bash
npm run build    # 生成静态文件到 build/
npm run serve    # 本地预览构建结果
```

## 🌐 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

线上地址：[https://lumimoon.cn](https://lumimoon.cn)

### DNS 配置

需要在 DNS 服务商添加以下记录：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| CNAME | `@` (或 `www`) | `lumimoon-robotics.github.io` |

## 📦 产品

- 🦾 SO-ARM101 机械臂
- 🔧 Lekiwi 底盘
- 🤖 Xlerobot 家务机器人
- ✋ AmazingHand 灵巧手

## 📄 许可

Copyright © 2026 启月探微
