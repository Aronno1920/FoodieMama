import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/models/Food'
import { SearchComponent } from "../../pagepart/search/search.component";
import { TagsComponent } from '../../pagepart/tags/tags.component';
import { NotfoundComponent } from '../notfound/notfound.component'

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [CommonModule, RouterModule, SearchComponent, TagsComponent, NotfoundComponent]
})
export class HomePageComponent implements OnInit {
  foods:Food[]= [];

  constructor(private fservice:FoodService, private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
        this.foods=this.fservice.getAllFoods().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
        this.foods = this.fservice.getAllFoodsByTag(params['tag'])  
      else
        this.foods=this.fservice.getAllFoods();
      })
    }

}
