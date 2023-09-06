export default class CustomError extends Error {
  public status: number;
  public message: any;
  constructor(status: number, message: any) {
    super();
    this.status = status;
    this.message = message;
  }
}