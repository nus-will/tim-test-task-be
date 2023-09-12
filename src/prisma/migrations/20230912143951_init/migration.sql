-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "day_rate" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speciality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContractorToSpeciality" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContractorToSpeciality_AB_unique" ON "_ContractorToSpeciality"("A", "B");

-- CreateIndex
CREATE INDEX "_ContractorToSpeciality_B_index" ON "_ContractorToSpeciality"("B");

-- AddForeignKey
ALTER TABLE "_ContractorToSpeciality" ADD CONSTRAINT "_ContractorToSpeciality_A_fkey" FOREIGN KEY ("A") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractorToSpeciality" ADD CONSTRAINT "_ContractorToSpeciality_B_fkey" FOREIGN KEY ("B") REFERENCES "Speciality"("id") ON DELETE CASCADE ON UPDATE CASCADE;
