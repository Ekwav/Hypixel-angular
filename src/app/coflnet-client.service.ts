import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Base64 } from 'js-base64'
import { webSocket } from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class CoflnetClientService {

  socket: WebSocket;
  messageIndex = 0;

  answerTable: Subscriber<Command>[] = [];

  // url = "wss://skyblock-backend.coflnet.com/skyblock";
  url = "ws://localhost:8008/skyblock";

  queue:Command[]=[];

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket(this.url);
    this.socket.onmessage = (e) => {
      var command = JSON.parse(e.data) as Command;
      if (command.type.includes("error")) {
        this.answerTable[command.mId].error(command);
        return;
      }
      command.deserialized = JSON.parse(command.data);
      this.answerTable[command.mId].next(command);
    };
    this.socket.onopen = (e)=>{
      this.processQueue();
    }

  }

  processQueue()
  {
    while(this.queue.length > 0)
      {
        var command = this.queue.pop(); 
        this.socket.send(JSON.stringify(command));
      }
  }

  public send(type: string, data: any): Observable<Command> {
    var id = this.messageIndex++;
    var command = {
      "type": type,
      "data": Base64.encode(JSON.stringify(data)),
      "mId": id
    };
    this.queue.push(command);
    switch (this.socket.readyState) {
      case this.socket.CLOSED:
      case this.socket.CLOSING:
        this.connect();
      case this.socket.CONNECTING:
        break;
      default:
        this.processQueue();
    }
    console.log("sent " + type + JSON.stringify(data));
    return new Observable<Command>(subject => {
      this.answerTable[id] = subject;
    });
  }


}

class Command {
  type: string;
  data: string;
  deserialized?: any;
  mId: number;
}
