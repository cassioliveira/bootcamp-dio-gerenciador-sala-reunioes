import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomModel } from '../model/room.model';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrls: ['./details-room.component.css']
})
export class DetailsRoomComponent implements OnInit {

  id: number;
  room: RoomModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.room = new RoomModel();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
    .subscribe(data => {
        console.log(data);
        this.room = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/rooms']);
  }

}
