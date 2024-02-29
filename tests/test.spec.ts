import t from "tap";

describe("test sync - single", () => {
  it("pass", () => {
    t.ok(true);
  });
});

describe("test async - single", () => {
  it("pass", async () => {
    await new Promise((re) => setTimeout(re, 1000));
    t.ok(true);
  });
});

describe("test mixed", () => {
  it("pass", async () => {
    t.same(1, 1);
  });

  it("will fail", () => {
    t.ok(true);
  });
});

describe("test multiple", () => {
  it("pass", async () => {
    t.same(1, 1);
  });

  it("will fail", async () => {
    t.ok(true);
  });
});

describe("test force sync", () => {
  it("pass", () => {
    t.same(1, 1);
  });

  it("pass with thenable", (done) => {
    new Promise((re) => setTimeout(re, 1000))
      .then(() => {
        t.ok(true);
        done();
      });
  });
});
