import serve from "../../app";
import dotenv from "dotenv";
import type { Server } from "node:http";
import supertest from "supertest";
import path from "path";
describe("Index Controller API", function () {
  const prefix = "/api/vi";
  let server: Server;
  beforeAll(() => {
    dotenv.config({
      path: path.resolve(__dirname, "../../.env"),
    });
    console.log(process.env.REDIS_HOST);
    server = serve(4000);
  });
  it(prefix + "/index", function () {
    return supertest(server)
      .get(prefix + "/index")
      .expect(501);
  });
  afterAll(() => {
    server.close();
  });
});
