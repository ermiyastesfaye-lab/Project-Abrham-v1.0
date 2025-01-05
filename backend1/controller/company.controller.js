const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Company = require("../model/company.model");

const createCompany = async (req, res) => {
  try {
    const companyData = {
      ...req.body,
      pitchDeck: req.body.pitchDeck || null,
      otherDocuments: req.body.otherDocuments || null,
      companyCreator: {
        connect: {
          id: parseInt(req.body.companyCreator, 10),
        },
      },
    };

    const company = await prisma.company.create({
      data: companyData,
    });

    res.status(201).json(company);
  } catch (err) {
    if (err.code === "P2002") {
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
    const company = await prisma.company.findMany({});
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
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getCompanyByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const userId = parseInt(id, 10);
    const company = await prisma.company.findFirst({
      where: {
        companyCreatorId: userId,
      },
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
const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await prisma.company.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        ...req.body,
      },
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
    console.log("My params:", req.params);
    const userId = parseInt(req.id, 10);
    console.log(userId);
    const company = await prisma.company.findFirst({
      where: {
        companyCreatorId: userId,
      },
    });
    console.log(`Company found: ${company.companyName}`);
    const updatedCompany = await prisma.company.update({
      where: {
        id: company.id,
      },
      data: {
        ...req.body,
      },
    });

    console.log("yo: ", updatedCompany);
    res.status(200).json(updatedCompany);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await prisma.company.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
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
