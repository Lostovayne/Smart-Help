/*
  Warnings:

  - Added the required column `userId` to the `Donations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Donations" ADD COLUMN     "userId" TEXT NOT NULL;
