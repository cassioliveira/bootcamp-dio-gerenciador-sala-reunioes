import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomModel } from '../model/room.model';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

id: number;
room: RoomModel;
submitted = false;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.room = new RoomModel();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new RoomModel();
    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }

}
