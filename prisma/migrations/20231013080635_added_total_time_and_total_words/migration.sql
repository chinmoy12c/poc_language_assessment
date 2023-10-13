/*
  Warnings:

  - Added the required column `totalTimeTaken` to the `student_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalWords` to the `student_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student_data" ADD COLUMN     "totalTimeTaken" INTEGER NOT NULL,
ADD COLUMN     "totalWords" INTEGER NOT NULL;
