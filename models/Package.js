/**
 * models/Shipment.js
 */

const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  // TODO: Complete this according the the specifications outlined in the README
  itemName: {
    type: String,
    required: true,
  },
  itemContents: {
    type: Number,
    required: true,
  },
});

const PackageModel = mongoose.model('package', PackageSchema);
module.exports = PackageModel;
