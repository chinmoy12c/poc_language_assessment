import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { copyFileSync, unlinkSync } from 'fs';
import { StudentDataDTO } from './StudentDataDTO';
import { PrismaClient } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaClient
  ) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {preservePath: true}))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      copyFileSync(file.path, `${file.destination}/${file.originalname}`);
      unlinkSync(file.path);
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

  @Post()
  async uploadStudentData(@Body() data: StudentDataDTO) {
    try {
      await this.prisma.student_data.create({data});
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
