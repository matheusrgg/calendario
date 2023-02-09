import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class SlotsService {
 


    slotsGET= {
      "results": [
        {
          "id": 1,
          "occur_date": "2019-07-09T10:00:00-03:00",
          "status": 1,
          "room": "Room 1",
          "length_in_minutes": 60,
          "total_capacity": 15,
          "total_booked": 5,
          "product_id": 1,
          "booking_window": {
            "opens_at": "2019-07-08T00:00:00Z",
            "closes_at": "2019-07-09T09:00:00-03:00"
          },
          "cancellable_until": "2019-07-09T09:08:00-03:00",
          "instructors": [
            {
              "name": "Axel",
              "substitute": false
            },
            {
              "name": "Blaze",
              "substitute": true
            }
          ],
          "rating": 4.5
        },
        {
          "id": 2,
          "occur_date": "2019-07-09T10:00:00-03:00",
          "status": 1,
          "room": "Room 1",
          "length_in_minutes": 60,
          "total_capacity": 15,
          "total_booked": 5,
          "product_id": 1,
          "booking_window": {
            "opens_at": "2019-07-08T00:00:00Z",
            "closes_at": "2019-07-09T09:00:00-03:00"
          },
          "cancellable_until": "2019-07-09T09:08:00-03:00",
          "instructors": [
            {
              "name": "Axel",
              "substitute": false
            },
            {
              "name": "Blaze",
              "substitute": true
            }
          ],
          "rating": 4.5
        }
      ]
    }
    getSlots(){
        return of(this.slotsGET)
    }

}