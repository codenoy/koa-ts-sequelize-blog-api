// for dev and debug
import "./config/loadDevEnv";
import config from "./config/config";
import serve from "./serve";
console.log(config.port);
serve(config.port);
