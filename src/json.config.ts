import { Course } from './interfaces/course.interface';

export class JsonConfig {
  private _jsonFilePath: string = './assets/json/coursess.json';
  private fs = require('fs');

  public get getJsonFilePath(): string {
    return this._jsonFilePath;
  }

  readJsonFile = () =>
    new Promise<Course[]>((resolve, reject) => {
      this.fs.readFile(this._jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          console.log('อ่านไฟล์ล้มเหลว:', err);
          reject(err);
          return;
        }
        resolve(JSON.parse(jsonString));
      });
    });
}
