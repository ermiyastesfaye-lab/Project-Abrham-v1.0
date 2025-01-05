-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_companyCreatorId_fkey";

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_companyCreatorId_fkey" FOREIGN KEY ("companyCreatorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
