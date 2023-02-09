import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class AulasService {
 


    aulasGET= [
        // {
            // "classes": [
              {
                "id": 1,
                "name": "Cycle",
                "slug": "cycle",
                "description": "Our standard cycle classes",
                "notes": "Notes",
                "bookable": true,
                "visible": true,
                "product_id": 1,
                "gym_id": 123,
                "reference": "111",
                "created_at": "2019-07-03T17:44:22Z[UTC]",
                "categories": [
                  {
                    "name": "Category test",
                    "translation_key": "key.test.category"
                  }
                ],
                "levels": [
                  {
                    "name": "Level test",
                    "translation_key": "key.test.level"
                  }
                ]
              },
              {
                "id": 2,
                "name": "Super Cycle",
                "slug": "super-cycle",
                "description": "Our super advanced cycle class",
                "notes": "Notes",
                "bookable": true,
                "visible": true,
                "product_id": 1,
                "gym_id": 123,
                "reference": "111",
                "created_at": "2019-07-03T17:44:22Z[UTC]",
                "categories": [
                  {
                    "name": "Category test",
                    "translation_key": "key.test.category"
                  }
                ],
                "levels": [
                  {
                    "name": "Level test",
                    "translation_key": "key.test.level"
                  }
                ]
              }
            ]
        //   }
    // ]

    getAulas(){
        return of(this.aulasGET)
    }

}