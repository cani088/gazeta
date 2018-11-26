import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  trends:trends[];
  hasElements=0;
  
  constructor(private dataService:DataService) {
    this.getTrends(5);
   }
   getTrends(not){
    this.dataService.getTrends(not).subscribe((trends)=>{
      this.trends=trends;
      if(this.trends){
        this.hasElements=1;
      }
    });
   }
 
  ngOnInit() {
  }
}

interface trends {
  lat_trend_id:any;
  post_id:any;
  post_title:any;
  post_body:any;
  post_receiver:any;
  recent_t:any;
  post_type:any;
  post_event_id:any;
  post_like_type:any;
  post_location:any;
  post_created_by:any;
  post_create_date:any;
  post_updated_by:any;
  post_update_date:any;
  post_privacy:any;
  post_longtext:any;
  post_update_status:any;
  post_link_ext:any;
  post_link_desc:any;
  post_rating:any;
  user_id:any;
  user_name:any;
  user_surname:any;
  user_profilepic:any;
  user_city_id:any;
  user_status:any;
  user_cover_pic:any;
  user_s_status:any;
  user_type_r:any;
  user_busname:any;
  user_buscategory:any;
  city_name:any;
  city_id:any;
  iti_events_id:any;
  iti_events_parent_id:any;
  iti_events_history_n:any;
  iti_events_title:any;
  iti_events_desc:any;
  iti_events_starts_on:any;
  iti_events_ends_on:any;
  iti_events_photo:any;
  post_color:any;
  iti_events_created_by:any;
  likes:any;
  comments:any;
};