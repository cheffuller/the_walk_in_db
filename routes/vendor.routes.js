module.exports = (app) => {
  const vendor = require("../controllers/vendor.controller");
  var router = require("express").Router();

  router.post("/", vendor.create);
  router.get("/", vendor.findAll);
  router.get("/:id", vendor.findOne);
  router.put("/:id", vendor.update);
  router.delete("/:id", vendor.delete);

  app.use("/api/vendor", router);
};
