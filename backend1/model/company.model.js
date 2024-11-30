const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
    },
    sector: {
      type: String,
      required: true,
    },
    stage: {
      type: String,
      required: true,
    },
    businessSummary: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    pitchDeck: {
      type: String,
      required: true,
    },
    otherDocuments: {
      type: String,
    },
    companyCreator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("company", CompanySchema);
module.exports = Company;
