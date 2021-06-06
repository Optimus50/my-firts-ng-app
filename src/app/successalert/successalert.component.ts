import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreateStatus: string = 'No Server was created'

  serverId: number = 10;
  serverStatus: string = 'offline';

  serverName: string ='';

  getServer() {
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreateStatus = 'Server was created';
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }

  ngOnInit(): void {
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
