-- CreateTable
CREATE TABLE "student_data" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "wronglyRecognizedCount" INTEGER NOT NULL,
    "wronglyRecognizedWords" TEXT NOT NULL,
    "incorrectWordsCount" INTEGER NOT NULL,
    "incorrectWords" TEXT NOT NULL,
    "wordsPerMinute" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "student_data_pkey" PRIMARY KEY ("id")
);
