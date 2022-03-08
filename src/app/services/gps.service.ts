import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Gps} from "../models/gps.model";

@Injectable({
  providedIn: 'root'
})
export class GpsService {
  gps = this.socket.fromEvent<Gps[]>('news');

  constructor(private socket: Socket) {
  }
}
