import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  url;
  constructor(public htttp:Http) { 
    console.log('Data Service Connected');  
  }

  getTrends(not){
    this.url='http://localhost:8000/api/mobile/results/getAll/latest_random_trends/'+not;
    return this.htttp.get(this.url).map(res=>res.json());
  }

}
