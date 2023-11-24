import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Tag } from '../../shared/models/Tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private fservice:FoodService){
  }

  ngOnInit():void{
    this.tags = this.fservice.getAllTag();
  }

}
