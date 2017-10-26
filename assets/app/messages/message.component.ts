import { MessageService } from './message.service';
import { Component , Input , Output , EventEmitter } from "@angular/core";
import { Message } from "./message.module";


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'] // importazione dello stile messaggio
})

export class MessageComponent {
    //qui andiamo a dire che il messaggio deve essere fatto come il message definito nel module
    // questo indica il fatto che può essere acceduto dall'esterno e scritto
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService){
       
    }
    color = 'red';

    onEdit(){
        this.editClicked.emit('A new value');
    }

    onDelete(){
        this.messageService.deleteMessage(this.message);
    }
}
