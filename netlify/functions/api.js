import express from "express";
import serverless from "serverless-http";
import cors from "../../config/cors.js";
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// 路由导入
import user from "../../routers/user.js"

const api = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const staticPath = resolve(__dirname, '../../public');

// 将 public 目录设置为静态资源目录
api.use('/static', express.static(staticPath));

// 中间件
api.use(cors); // 跨域

// 主页
api.get('/', (req, res) => {
  // 使用 path.join 构建安全的绝对路径
  res.sendFile(resolve(staticPath, 'index.html'));
});


// 路由
api.use('/api/user', user) // 用户路由

export const handler = serverless(api);