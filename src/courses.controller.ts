import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './interfaces/course.interface';

@Controller('course')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    let courseResult = this.coursesService.findAll();

    return courseResult.catch((error) => {
      throw new HttpException('ไม่พบไฟล์', HttpStatus.NOT_FOUND);
    });
  }

  @Post()
  async create(@Body() course: Course) {
    return this.coursesService.create(course);
  }

  @Delete(':number')
  async delete(@Param('number') number: string) {
    return this.coursesService.delete(number);
  }

  @Put(':number')
  async edit(@Param('number') number: string, @Body() course: Course) {
    return this.coursesService.edit(number, course);
  }
}
