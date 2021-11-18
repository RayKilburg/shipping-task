/**
 * cotrollers/packages.js
 */

const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

module.exports = router;

// ---------------------------
// ---------------------------
// ROUTES
// ---------------------------
// ---------------------------

router.get('/', getPackages);
router.put('/', createPackage);
router.patch('/', editPackage);
router.delete('/', deletePackage);

router.get('/queue', getPackageQueue);

// ---------------------------
// ---------------------------
// CONTROLLER
// ---------------------------
// ---------------------------

async function getPackages(req, res) {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.json({ message: err });
  }
  // throw new Error('Not implemented.');
}

async function createPackage(req, res) {
  throw new Error('Not implemented.');
}

async function editPackage(req, res) {
  throw new Error('Not implemented.');
}

async function deletePackage(req, res) {
  throw new Error('Not implemented.');
}

async function getPackageQueue(req, res) {
  throw new Error('Not implemented.');
}
