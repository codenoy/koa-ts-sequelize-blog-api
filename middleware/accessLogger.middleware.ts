import type { Context, Next } from "koa";
import { accessLogger } from "../utils/logger";
function accessLoggerMiddleware() {
  return async function (ctx: Context, next: Next) {
    const enterTime = Date.now();
    const ip = ctx.request.ip;
    const method = ctx.request.method;
    const url = ctx.request.url;
    const userAgent = ctx.request.headers["user-agent"];
    await next();
    const status = ctx.status;
    const contentLength = ctx.response.length;
    const responseTime = Date.now() - enterTime;
    accessLogger.info(
      `${ip} ${method} ${url} -  ${status} ${responseTime}ms ${contentLength} - ${userAgent}`
    );
  };
}
export default accessLoggerMiddleware;
