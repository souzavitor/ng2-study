export class User {
  public _id : string;
  public name: string;
  public password: string;
  public password_confirmation: string;
  public email: string;
  public username : string;
  public checked_email : boolean;
  public created_at : Date;
  public updated_at : Date;

  public token? : string;
  constructor() { }
}