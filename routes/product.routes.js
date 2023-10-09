module.exports = (app) => {
  const product = require("../controllers/product.controller");
  var router = require("express").Router();

  router.post("/", product.create);
  router.get("/", product.findAll);
  router.get("/:id", product.findOne);
  router.put("/:id", product.update);
  router.delete("/:id", product.delete);

  app.use("/api/product", router);
};
