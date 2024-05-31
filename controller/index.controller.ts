import type { Context } from "koa";
import HttpErrors from "http-errors";
import got from "got";
import config from "../config/config";
import User from '../model/User.Model'
class IndexController {
 async  index(ctx: Context) {
    // throw HttpErrors.NotImplemented();
    ctx.body = await User.findOne()
  }
  async githubOAuth(ctx: Context) {
    const requestToken = ctx.query.code;
    if (!requestToken) {
      throw HttpErrors.BadRequest();
    }
    console.log("authorization code:", requestToken);
    console.log("redirect_url", ctx.query.to);
    const ret: any = await got.post(
      "https://github.com/login/oauth/access_token?" +
        `client_id=${config.github.clientId}&` +
        `client_secret=${config.github.clientSecret}&` +
        `code=${requestToken}`,
      { responseType: "json" }
    );
    console.log("ret:", ret, ret.body);
    const accessToken = ret.body.access_token;
    console.log(`access token: ${accessToken}`);
    const ret2: any = await got.get("https://api.github.com/user", {
      headers: {
        Authorization: "Bearer " + accessToken,
        Accept: "application/json",
      },
      responseType: "json",
    });
    console.log("ret2:", ret2.body);

    const ret3: any = await got.get("https://api.github.com/user/emails", {
      headers: {
        Authorization: "Bearer " + accessToken,
        Accept: "application/json",
      },
      responseType: "json",
    });
    console.log("ret3:", ret3.body);
    // 这里应该去调用
    return ctx.redirect((ctx.query.to as string) || "/");
  }
  githubOAuthClientId(ctx: Context) {
    ctx.body = {
      cilentId: config.github.clientId,
    };
  }
}
export default new IndexController();
