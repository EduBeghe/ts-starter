export class EmailBody {
  from: string;
  to: string;
  description: string;

  constructor(from: string, to: string, description: string) {
    this.from = from;
    this.to = to;
    this.description = description;
  }
}
