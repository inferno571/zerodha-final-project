const { model } = require("mongoose");
const { FundsSchema } = require('../schemas/FundsSchema');

const FundsModel = new model("Fund", FundsSchema);

module.exports = { FundsModel };