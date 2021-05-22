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

  async delete(number: string) {
    let courses: Course[] = await this.jsonConfig.readJsonFile();

    const index = courses.findIndex((item) => {
      return item.number === number;
    });

    courses.splice(index, 1);

    return this.jsonConfig.writeJsonFile(courses);
  }

  async edit(number: string, course: Course) {
    let courses: Course[] = await this.jsonConfig.readJsonFile();

    const index = courses.findIndex((item) => {
      return item.number === number;
    });

    courses[index] = course;

    return this.jsonConfig.writeJsonFile(courses);
  }
}
