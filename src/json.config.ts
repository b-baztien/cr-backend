import { Course } from './interfaces/course.interface';

export class JsonConfig {
  private _jsonFilePath: string = './assets/json/courses.json';
  private fs = require('fs');

  public get getJsonFilePath(): string {
    return this._jsonFilePath;
  }

  readJsonFile = () => {
    return this.fs.readFile(this._jsonFilePath, 'utf8', (err, jsonString) => {
      if (err) {
        console.log('อ่านไฟล์ล้มเหลว:', err);
        return;
      }

      console.log('ข้อมูล:', jsonString);
      return JSON.parse(jsonString);
    });
  };
}
