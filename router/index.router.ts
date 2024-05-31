//  /router/index.router.ts
import Router from "@koa/router";
import IndexController from "../controller/index.controller";
const router = new Router();
router.get("/", IndexController.index);
export default router;
