const express = require("express");
const upload = require("../middleware/multerConfig");
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

router.post(
  "/",
  upload.fields([{ name: "pitchDeck" }, { name: "otherDocuments" }]),
  async (req, res) => {
    try {
      const pitchDeckUrl = req.files.pitchDeck
        ? req.files.pitchDeck[0].path
        : null;
      const otherDocsUrl = req.files.otherDocuments
        ? req.files.otherDocuments[0].path
        : null;

      const companyData = {
        ...req.body,
        pitchDeck: pitchDeckUrl,
        otherDocuments: otherDocsUrl,
      };

      console.log("Creating company with data:", companyData);

      const company = await createCompany({ body: companyData }, res);
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.get("/userId/:id", getCompanyByUserId);
router.patch("/:id", updateCompany);
router.patch(
  "/userId/:id",
  upload.fields([{ name: "pitchDeck" }, { name: "otherDocuments" }]),
  async (req, res) => {
    const { id } = req.params;
    console.log("Request Body:", req.body);
    console.log("Request Files:", req.files);
    console.log("User ID from params in routes:", id);
    try {
      const companyData = { ...req.body };

      console.log("urls: ", req.files.pitchDeck);
      if (req.files.pitchDeck) {
        companyData.pitchDeck = req.files.pitchDeck[0].path;
      }

      if (req.files.otherDocuments) {
        companyData.otherDocuments = req.files.otherDocuments[0].path;
      }

      console.log("Editing company with data:", companyData);

      const company = await updateCompanyByUserId(
        { body: companyData, id },
        res
      );
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
router.delete("/:id", deleteCompany);

module.exports = router;
