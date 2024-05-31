//  /router/index.router.ts
import Router from "@koa/router";
import UserController from "../controller/user.controller";
const router = new Router();
router.get("/1", UserController.getOne);
export default router;
