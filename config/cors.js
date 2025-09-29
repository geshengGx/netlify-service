import cors from 'cors';

export default cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400, // 预检请求缓存时间（秒）
  optionsSuccessStatus: 200 // 一些老设备需要
});