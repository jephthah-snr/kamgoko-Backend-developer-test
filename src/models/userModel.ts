import { Model } from "objection";

export default class User extends Model {
  static tableName = "users";

  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  phone!: string;
  country!: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;

  userData() {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      country: this.country,
      twitter: this.twitter,
      facebook: this.facebook,
      instagram: this.instagram
    };
  }
}
