export class Course {
    id: number;
    title: string;
    description: string;
    date: string;
  
    constructor(id: number, title: string, description: string, date: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.date = date;
    }
  }