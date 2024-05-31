import http from "http";
import Koa from "koa";
import { koaBody } from "koa-body";
import "./database/db";
import errorMiddleware from "./middleware/error.middleware";
import accessLoggerMiddleware from "./middleware/accessLogger.middleware";
import router from "./router/router";
import logger from "./utils/logger";
process.on("uncaughtException", (err) => {
  // TODO: 记录 error 日志
  logger.error("未捕获异常ERROR:", err.message);
});
process.on("unhandledRejection", (err) => {
  // TODO: 记录 error 日志
  logger.error("未捕获promise异常ERROR:", err);
});
process.on("exit", (code) => {
  logger.error("process exit code:", code);
});
const app = new Koa();
app.on("error", (error) => {
  // 中间件中没被catch的error, 通常第一个中间件就是错误中间件, 会catch所有error
  logger.error(error);
});
app.use(errorMiddleware());
app.use(accessLoggerMiddleware());
app.use(koaBody());
// 路由
app.use(router.routes()).use(router.allowedMethods());
app.use(ctx=>{
  console.log(ctx.request.url)
})
function serve(port: number) {
  if (!port) {
    console.error("port not provider");
    process.exit(1);
  }
  const server = http
    .createServer(app.callback())
    .listen(port, () => console.log(`server listen ${port}`));
  return server;
}
export { serve };
export default serve;
