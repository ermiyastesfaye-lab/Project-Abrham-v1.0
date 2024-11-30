const express = require("express");
const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  updateCompanyByUserId,
  getCompanyByUserId,
} = require("../controller/company.controller");
const router = express.Router();

router.post("/", createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.get("/userId/:id", getCompanyByUserId);
router.patch("/:id", updateCompany);
router.patch("/", updateCompanyByUserId);
router.delete("/:id", deleteCompany);

module.exports = router;
