## TS-BLOG

一个 BLOG 基本模块包括:

- 用户模块
  - Github OAuth2.0 登录
  - 用户管理
- 文章模块

  - 文章管理
  - 文章评论管理
  - 文章标签管理(tag 或者 category)
  - 文章点赞管理

- 标签模块
- 友链模块
- 用户留言: 不同于文章的评论, 登录用户可以在留言模块给站点博主写留言
- 打赏模块(暂不支持)

express 和 github 在技术选型和项目架构上有一些不同, express 使用 mongodb 数据库, 使用 mongoose ORM 操作数据库, 实现自有的用户登录注册功能, 并且使用 refreshToken 方案来解决用户无感刷新登录状态的问题, 因此还使用到了 redis.

koa 使用 mysql 数据库, 使用 sequelize ORM 操作数据库, 没有实现用户登录注册, 而是采用第三方 Github OAuth 登录
