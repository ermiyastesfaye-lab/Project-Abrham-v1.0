/*
  Warnings:

  - You are about to drop the column `facebook` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `companies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "linkedin",
DROP COLUMN "twitter";
