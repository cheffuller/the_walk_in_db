const sequelize = require("../models/index");

const address = require("./address");
const company = require("./company");
const user = require("./user");
const cart = require("./cart");
const delivery = require("./delivery");
const vendor = require("./vendor");
const product = require("./product");
const cart__product = require("./cart__product");
const company__vendor = require("./company__vendor");

const Address = require("../models/address.model");
const Company = require("../models/company.model");
const User = require("../models/user.model");
const Cart = require("../models/cart.model");
const Delivery = require("../models/delivery.model");
const Vendor = require("../models/vendor.model");
const Product = require("../models/product.model");
const Cart__Product = require("../models/cart__product.model");
const Company__Vendor = require("../models/company__vendor.model");

const populateIDs = (hasIDs, needsIDs, IDfieldOne, IDfieldTwo) => {
  for (let i = 0; i < hasIDs.length; i++) {
    needsIDs[i][IDfieldOne] = hasIDs[i].id;
    needsIDs[i][IDfieldTwo] = hasIDs[i].id;
  }
};

const runSeeds = async () => {
  await sequelize.sync({ force: true });

  const seededAddresses = await Address.bulkCreate(address, { raw: true });

  await populateIDs(
    seededAddresses,
    company,
    "address_id",
    "delivery_address_id"
  );

  const seededCompanies = await Company.bulkCreate(company, { raw: true });

  await populateIDs(seededCompanies, user, "company_id");

  const seededUsers = await User.bulkCreate(user, { raw: true });

  await populateIDs(seededUsers, cart, "user_id");

  const seededCarts = await Cart.bulkCreate(cart, { raw: true });

  await populateIDs(seededCarts, delivery, "cart_id");
  await populateIDs(seededAddresses, delivery, "address_id");

  await Delivery.bulkCreate(delivery);

  const seededVendors = await Vendor.bulkCreate(vendor, { raw: true });

  await populateIDs(seededVendors, product, "vendor_id");
  
  const seededProducts = await Product.bulkCreate(product, { raw: true });

  for (let i = 0; i < seededCarts.length; i++) {
    const cart = await Cart.findByPk(seededCarts[i].id)
    const product = await Product.findByPk(seededProducts[i].id)
    cart.addProduct(product)

    const company = await Company.findByPk(seededCompanies[i].id);
    const vendor = await Vendor.findByPk(seededVendors[i].id);
    company.addVendor(vendor)
  }
};

runSeeds();
