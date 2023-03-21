import { Roles } from './roles.enum'

export class User {
    userName = '';
    email = '';
    password = '';
    role = Roles.USER

    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role
    }
}