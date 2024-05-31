import Router from "@koa/router";
import IndexRouter from "./index.router";
import userRouter from './user.router'
const router = new Router({
  prefix: "/api/v1",
});
router.use("/index", IndexRouter.routes(),IndexRouter.allowedMethods())
router.use("/user", userRouter.routes(),userRouter.allowedMethods())
export default router;
