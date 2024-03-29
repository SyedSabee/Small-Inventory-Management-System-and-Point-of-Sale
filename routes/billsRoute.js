const express = require("express");
const {
  addBillsController,
  getBillsController,
} = require("./../controllers/billsController");

const router = express.Router();
// router

// Method - Post
router.post("/add-bills", addBillsController);

// Method - Get
router.get("/get-bills", getBillsController);

module.exports = router;
