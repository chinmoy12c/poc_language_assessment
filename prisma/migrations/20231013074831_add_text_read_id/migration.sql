/*
  Warnings:

  - Added the required column `textReadId` to the `student_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student_data" ADD COLUMN     "textReadId" INTEGER NOT NULL;
