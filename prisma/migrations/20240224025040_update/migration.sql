/*
  Warnings:

  - Added the required column `amount` to the `Donations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Donations" ADD COLUMN     "amount" INTEGER NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;
