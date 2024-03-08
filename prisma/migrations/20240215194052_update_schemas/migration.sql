/*
  Warnings:

  - You are about to drop the `Causas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Donaciones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Donaciones" DROP CONSTRAINT "Donaciones_causaId_fkey";

-- DropTable
DROP TABLE "Causas";

-- DropTable
DROP TABLE "Donaciones";

-- CreateTable
CREATE TABLE "Causes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Causes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donations" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "causesId" INTEGER NOT NULL,

    CONSTRAINT "Donations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donations" ADD CONSTRAINT "Donations_causesId_fkey" FOREIGN KEY ("causesId") REFERENCES "Causes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
