import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';
import { JsonConfig } from './json.config';

@Injectable()
export class CoursesService {
  jsonConfig: JsonConfig = new JsonConfig();

  async findAll(): Promise<Course[]> {
    return this.jsonConfig.readJsonFile();
  }

  async create(course: Course): Promise<void> {
    let courses: Course[] = await this.jsonConfig.readJsonFile();

    courses.push(course);

    return this.jsonConfig.writeJsonFile(courses);
  }
}
