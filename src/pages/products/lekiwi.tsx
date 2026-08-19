import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function Lekiwi() {
  return (
    <ProductPage
      title="Lekiwi 全向移动底盘"
      description="Lekiwi — 全向移动模块化机器人底盘，麦克纳姆轮，SLAM 自主导航"
      category="LeRobot 开源硬件"
      categoryTo="/docs/lerobot/overview"
      accent="#6366f1"
      tagline="麦克纳姆轮全向移动 · SLAM 自主导航"
      intro="四轮独立麦克纳姆轮布局，支持前行、横移、斜行与原地旋转；集成激光雷达、IMU 与超声波传感器，模块化上装快拆接口一底多用。"
      image="img/lekiwi.png"
      keySpecs={[
        {label: '最大负载', value: '50kg'},
        {label: '最大速度', value: '1.5 m/s'},
        {label: '续航', value: '8-12h'},
        {label: '软件', value: 'ROS2 + Nav2'},
      ]}
      highlights={[
        {icon: '🧭', title: 'SLAM 导航', desc: '兼容 Cartographer / SLAM Toolbox，自主建图与路径规划。'},
        {icon: '⚡', title: '全向移动', desc: '前行、横移、斜行、原地旋转，窄空间灵活穿梭。'},
        {icon: '🧩', title: '模块化上装', desc: '标准快拆接口，机械臂、传感器、储物箱自由组合。'},
        {icon: '🔋', title: '长续航', desc: '8-12 小时标配电池，满足全天候任务需求。'},
      ]}
      specs={[
        {label: '驱动方式', value: '四轮独立麦克纳姆轮'},
        {label: '最大负载', value: '50kg'},
        {label: '最大速度', value: '1.5 m/s'},
        {label: '续航', value: '8-12 小时'},
        {label: '主控', value: 'Raspberry Pi 5 / Jetson Orin NX'},
        {label: '传感器', value: '激光雷达 + IMU + 超声波'},
        {label: '自重', value: '~18kg'},
        {label: '尺寸', value: '600 × 500 × 280 mm'},
        {label: '软件', value: 'ROS2 Humble + Nav2'},
      ]}
      docsUrl="/docs/lerobot/lekiwi/bom"
      docsLabel="查看教程"
      related={[
        {name: 'SO-ARM101 机械臂', desc: '桌面级开源机械臂，可搭载于 Lekiwi 上装平台', to: '/products/so-arm101'},
        {name: 'Xlerobot 家务机器人', desc: '基于 Lekiwi 底盘打造的双臂服务机器人', to: '/products/xlerobot'},
        {name: '固定相机', desc: '2K 全局感知相机，用于移动机器人场景理解', to: '/products/fixed-camera'},
      ]}
    />
  );
}
