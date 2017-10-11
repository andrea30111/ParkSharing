// costruttore della classe Message
export class Message {
    content: string;
    username: string;
    messageId?: string; // quelli con ? sono opzionali
    userId?: string;

    //anche nel costruttore
    constructor(content: string, username: string, messageId?: string, userId?: string ){
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
