-- CreateTable
CREATE TABLE "Notice" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Causas" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Causas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donaciones" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "causaId" INTEGER NOT NULL,

    CONSTRAINT "Donaciones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donaciones" ADD CONSTRAINT "Donaciones_causaId_fkey" FOREIGN KEY ("causaId") REFERENCES "Causas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
