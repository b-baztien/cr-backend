import { Course } from './interfaces/course.interface';

export class JsonConfig {
  private _jsonFilePath: string = './assets/json/courses.json';
  private fs = require('fs');

  public get getJsonFilePath(): string {
    return this._jsonFilePath;
  }

  readJsonFile = () => {
    return new Promise<Course[]>((resolve, reject) => {
      this.fs.readFile(this._jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          console.log('อ่านไฟล์ล้มเหลว:', err);
          reject(err);
          return;
        }
        if (jsonString == '') {
          resolve([]);
        } else {
          resolve(JSON.parse(jsonString));
        }
      });
    });
  };

  writeJsonFile = (course: Course[]) => {
    return new Promise<void>((resolve, reject) => {
      this.fs.writeFile(
        this._jsonFilePath,
        JSON.stringify(course),
        'utf-8',
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        },
      );
    });
  };
}
