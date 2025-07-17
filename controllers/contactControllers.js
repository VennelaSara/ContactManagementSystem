const asyncHandler = require("express-async-handler");
const Contact = require("../models/contacts");
const home = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Welcome to Contact Management System" });
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({ message: "All Fields are Mandatory!" });
    throw new Error("All Fields are Mandatory");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(200).json({ message: "Contact created Successfully" });
});

const getContact = asyncHandler(async (req, res) => {
  const contact_id = req.params.id;
  const contact = Contact.findById(contact_id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found!");
  }
  res.status(200).json({ message: "Contact retrieved Successfully" }, contact);
});

const getContacts = asyncHandler(async (req, res) => {
  const contacts = Contact.find();
  if (!contacts) {
    res.status(404);
    throw new Error("Contacts not Found!");
  }
  res
    .status(200)
    .json({ message: "Contacts retrieved Successfully" }, contacts);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found!");
  }
  res.status(200).json({ message: "Contact updated Successfully" });
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found!");
  }
  await contact.remove();
  res.status(200).json({ message: "Contact deleted Successfully" });
});

module.exports = {
  home,
  createContact,
  getContact,
  getContacts,
  updateContact,
  deleteContact,
};
