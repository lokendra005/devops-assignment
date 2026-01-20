const request = require("supertest");
const app = require("../src/app");

describe("Account API", () => {
  it("should fail when name is missing", async () => {
    const res = await request(app)
      .post("/accounts")
      .send({ email: "test@test.com" });

    expect(res.statusCode).toBe(400);
  });
});
