import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bike;

  constructor(private bikeService: BikeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // before the component loads get the ID
    this.getBike(this.route.snapshot.params.id);
  }

  getBike(id: number) {

    this.bikeService.getBike(id).subscribe( 
      data => { 
        this.bike = data;
      },
      error => console.log(error),
      () => console.log("Bike " + id + " loaded!")
    )

  }

}
