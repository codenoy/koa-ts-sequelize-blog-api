import log4js from "log4js";
log4js.configure({
  appenders: {
    /* 定义每种输出格式 */
    out: { type: "stdout" }, // 输出到标准输出流
    access: {
      // file 输出格式 输出到文件下
      type: "dateFile",
      filename: "access-logs/access", // 文件名称
      pattern: "yyyy-MM-dd.log", // 文件输出格式
      alwaysIncludePattern: true, // 文件名称是否包含文件输出格式
      daysToKeep: 1, //每1天新建日志
      maxLogSize: 1024 * 1024 * 10, // bytes,超过 10MB 则生成新文件
      backups: 100, // 存储的该类型日志文件总数不能超过100
    },
    log: {
      // file 输出格式 输出到文件下
      type: "dateFile",
      filename: "logs/log", // 文件名称
      pattern: "yyyy-MM-dd.log", // 文件输出格式
      alwaysIncludePattern: true, // 文件名称是否包含文件输出格式
      daysToKeep: 1, //每1天新建日志
      maxLogSize: 1024 * 1024 * 10, // bytes,超过 10MB 则生成新文件
      backups: 1000, // 存储的该类型日志文件总数不能超过100
    },
  },
  categories: {
    // 访问日志输出到标准io控制台 和 访问文件
    access: {
      // ACCESS_LOG=console,access
      // ACCESS_LOG=console
      appenders: process.env.ACCESS_LOG
        ? process.env.ACCESS_LOG.split(",")
        : ["out"],
      level: process.env.ACCESS_LOG_LEVEL || "info",
    },
    default: {
      // LOG=console
      // LOG=console,log
      appenders: process.env.LOG ? process.env.LOG.split(",") : ["out"],
      level: process.env.LOG_LEVEL || "info",
    },
  },
});
const accessLogger = log4js.getLogger("access");
const logger = log4js.getLogger(); // 业务logger

export { accessLogger };

export default logger;
