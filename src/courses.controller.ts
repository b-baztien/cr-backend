import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './interfaces/course.interface';

@Controller('course')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll() {
    return this.coursesService.findAll().catch((error) => {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    });
  }
}
