import type { Context } from "koa";
import User from '../model/User.Model'
class UserController {
 async getOne(ctx: Context) {
    // throw HttpErrors.NotImplemented();
    ctx.body = await User.findOne()
  }
}
export default new UserController();
