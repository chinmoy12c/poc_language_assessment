import { Body, Controller, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { copyFileSync, unlinkSync } from 'fs';
import { StudentDataDTO } from './StudentDataDTO';
import { PrismaClient } from '@prisma/client';
import { parse } from 'path';

@Controller()
export class AppController {
  constructor(
    private readonly prisma: PrismaClient
  ) {}

  @Post('data')
  @UseInterceptors(FileInterceptor('file', {preservePath: true}))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() data: any) {
    try {
      copyFileSync(file.path, `${file.destination}/${file.originalname}`);
      unlinkSync(file.path);
      await this.prisma.student_data.create({
        data: {
          name: data.name,
          studentClass: data.studentClass,
          schoolName: data.schoolName,
          wronglyRecognizedCount: parseInt(data.wronglyRecognizedCount, 10),
          wronglyRecognizedWords: data.wronglyRecognizedWords,
          incorrectWordsCount: parseInt(data.incorrectWordsCount, 10),
          incorrectWords: data.incorrectWords,
          totalWords: parseInt(data.totalWords, 10),
          totalTimeTaken: parseInt(data.totalTimeTaken, 10),
          wordsPerMinute: parseInt(data.wordsPerMinute, 10),
          audioFileName: file.originalname,
          textReadId: parseInt(data.textReadId, 10),
          text: data.text
        }
      });
      return {
        "success": true
      }
    }
    catch (e) {
      console.error(e);
      return {
        "success": false
      }
    }
  }

}
