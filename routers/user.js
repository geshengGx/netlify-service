import { Router } from "express";

import { resolve } from 'path';

const projectRoot = process.cwd(); // 项目根目录
const staticPath = resolve(projectRoot, 'public'); //静态资源目录

const router = Router();

router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/test", (req, res) => res.send('测试------>'+staticPath + '<------>'+ projectRoot));

export default router;