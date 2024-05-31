import { Sequelize } from "sequelize-typescript";
import config from "../config/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dirname = path.dirname(fileURLToPath(import.meta.url));
const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    database: config.mysql.database,
    dialect: "mysql",
    models: [
      path.resolve(dirname, "../model/**/*.ts"),
      path.resolve(dirname, "../model/**/*.js"),
    ],
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }
);
sequelize.authenticate().then(()=>{
  console.log('sequelize connect to mysql successed')
  console.log(sequelize.models)
})

export default sequelize;
