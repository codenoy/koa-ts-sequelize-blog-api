import type { Context, Next } from "koa";
function errorMiddleware() {
  return async function error(ctx: Context, next: Next) {
    try {
      await next();
    } catch (err: any) {
      ctx.status = err.status || err.statusCode || 500;
      ctx.body = {
        error: err.message,
        code: err.code || null,
        data: null,
      };
    }
  };
}
export default errorMiddleware;
