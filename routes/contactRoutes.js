const express = require("express");
const router = express.Router();
const {
  home,
  createContact,
  getContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");
router.route("/home").get(home);

router.route("/create").post(createContact);

router.route("/getContact/:id").get(getContact);

router.route("/getAllContacts").get(getContacts);

router.route("/update").post(updateContact);

router.route("/delete").post(deleteContact);

module.exports = router;
