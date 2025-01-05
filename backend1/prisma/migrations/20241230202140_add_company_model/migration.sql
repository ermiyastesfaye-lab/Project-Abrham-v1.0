-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "websiteUrl" TEXT,
    "sector" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "businessSummary" TEXT NOT NULL,
    "linkedin" TEXT,
    "twitter" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "pitchDeck" TEXT NOT NULL,
    "otherDocuments" TEXT,
    "companyCreatorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_companyName_key" ON "companies"("companyName");

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_companyCreatorId_fkey" FOREIGN KEY ("companyCreatorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
