const Account = require("../models/Account");

const registerNewAccount = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const account = await Account.create({ name, email });
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const retrieveAllAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

const getAccountById = async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }
  res.json(account);
};

const patchAccountDetails = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  res.json(account);
};

const deleteAccountEntry = async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }
  res.status(204).send();
};

module.exports = { registerNewAccount, deleteAccountEntry, patchAccountDetails, getAccountById, retrieveAllAccounts }
