#!/bin/bash

echo "🧹 清理项目..."
rm -rf node_modules .nuxt package-lock.json

echo "📦 安装依赖..."
npm install

echo "🔧 设置文件权限..."
chmod +x start.sh

echo "🚀 启动开发服务器..."
npm run dev
