export class User {
    firstName: string;
    lastName: string;
    fiscalCode: string;
    password: string;
    email: string;
    messagesId?: string[];

    constructor(email: string, password: string, firstName?: string, lastName?: string, fiscalCode?: string, messagesId?: string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fiscalCode = fiscalCode;
        this.password = password;
        this.email = email;
        this.messagesId = messagesId;
    } //?=optional
}