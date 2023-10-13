/*
  Warnings:

  - You are about to drop the column `class` on the `student_data` table. All the data in the column will be lost.
  - Added the required column `studentClass` to the `student_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student_data" DROP COLUMN "class",
ADD COLUMN     "studentClass" TEXT NOT NULL;
