const { default: mongoose } = require("mongoose");
const Company = require("../model/company.model");
const moongose = require("mongoose");

const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(500)
        .json({ message: err.message, duplicate: "Duplicate entry" });
    }
    res.status(500).json({
      message: err.message,
    });
  }
};

const getCompanies = async (req, res) => {
  try {
    const company = await Company.find({});
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    if (!company) {
      return res.status(404).json({ messgae: "Company not found" });
    }
    const updatedCompany = await Company.findById(id);
    res.status(200).json(updatedCompany);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(500)
        .json({ message: err.message, duplicate: "Duplicate entry" });
    }
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateCompanyByUserId = async (req, res) => {
  try {
    console.log(req.user);
    console.log(mongoose.Types.ObjectId.createFromHexString(req.user));
    const updatedCompany = await Company.findOneAndUpdate(
      {
        companyCreator: mongoose.Types.ObjectId.createFromHexString(req.user),
      },
      req.body,
      { new: true, runValidators: true }
    );
    console.log("yo: ", updatedCompany);
    if (!updatedCompany) {
      return res.status(404).json({ messgae: "Company not found" });
    }
    res.status(200).json(updatedCompany);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getCompanyByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      companyCreator: mongoose.Types.ObjectId.createFromHexString(id),
    });

    console.log("Retrieved company: ", company);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndDelete(id);
    if (!company) {
      return res.status(404).json({ messgae: "Company not found" });
    }
    res.status(200).json({ message: "Company deleted Successfully" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  updateCompanyByUserId,
  getCompanyByUserId,
};
