import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';
import { JsonConfig } from './json.config';

@Injectable()
export class CoursesService {
  jsonConfig: JsonConfig = new JsonConfig();

  async findAll(): Promise<Course[]> {
    return this.jsonConfig.readJsonFile();
  }
}
