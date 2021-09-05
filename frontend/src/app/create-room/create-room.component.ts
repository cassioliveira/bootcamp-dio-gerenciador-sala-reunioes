import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomModel } from '../model/room.model';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: RoomModel = new RoomModel();
  submitted = false

  constructor(
    private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new RoomModel();
  }

  save() {
    this.roomService.createRoom(this.room)
      .subscribe(data => console.log(data),
      error => console.log(error));
    this.room = new RoomModel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }

}
