const { Schema } = require("mongoose");

const FundsSchema = new Schema({
    availableMargin: Number,
    usedMargin: Number,
    availableCash: Number,
    openingBalance: Number,
    payin: Number,
});

module.exports = { FundsSchema };