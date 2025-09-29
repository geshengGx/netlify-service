import express from "express";
import service from "../config/service.js";
import cors from "../config/cors.js";
import { resolve } from 'path';

// 路由导入
import user from "../routers/user.js"

const api = express();

const projectRoot = process.cwd(); // 项目根目录
const staticPath = resolve(projectRoot, 'public'); //静态资源目录

// 将 public 目录设置为静态资源目录
api.use('/static', express.static(staticPath));

// 主页
api.get('/', (req, res) => {
  // 使用 path.join 构建安全的绝对路径
  res.sendFile(resolve(staticPath, 'index.html'));
});

// 中间件
api.use(cors); // 跨域

// 路由
api.use('/api/user', user) // 用户路由

// 启动服务
api.listen(service.port, () => {
    console.log("api服务启动成功");
    console.log(`http://localhost:${service.port}`);
})

