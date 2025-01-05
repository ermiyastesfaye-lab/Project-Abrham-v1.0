-- CreateEnum
CREATE TYPE "Role" AS ENUM ('company', 'investor');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" DEFAULT 'investor',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
