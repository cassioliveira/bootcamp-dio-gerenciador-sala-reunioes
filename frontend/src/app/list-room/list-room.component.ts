import { Component, OnInit } from '@angular/core';
import { DetailsRoomComponent } from '../../app/details-room/details-room.component';
import { Observable } from 'rxjs';
import {RoomService} from '../../app/services/room.service';
import { RoomModel } from '../model/room.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  rooms: Observable<RoomModel[]>;

  constructor(
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roomDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number){
    this.router.navigate(['update', id]);
  }
}
