import { Injectable } from '@angular/core'
import { Food } from '../shared/models/Food'
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAllFoods().find(food => food.id == id)!;
  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag.toLowerCase() == 'all')
      return this.getAllFoods();
    else
      return this.getAllFoods().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    const tagMap: { [tagName: string]: Tag } = {};

    // Add 'all' tag with the count of all foods
    tagMap['All'] = { name: 'All', count: this.getAllFoods().length };

    // Iterate through each Food object
    this.getAllFoods().forEach((food) => {
      // Iterate through tags of the current Food
      food.tags.forEach((tag) => {
        // Check if the tag already exists in the tagMap
        if (tagMap[tag]) {
          // If yes, increment the count
          tagMap[tag].count++;
        } else {
          // If no, create a new Tag object
          tagMap[tag] = { name: tag, count: 1 };
        }
      });
    });

    // Convert the tagMap values to an array of Tag objects
    const tags: Tag[] = Object.values(tagMap);

    return tags;
  }




  getAllFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Meatball',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/1.jpg',
        cookTime: '10-15',
        price: 130,
        discount: 25,
        isFreeDelivery: true,
        tags: ['Meatball', 'Snacks']
      },
      {
        id: 2,
        price: 100,
        discount: 45,
        isFreeDelivery: false,
        name: 'Pizza',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/2.jpg',
        cookTime: '10-15',
        tags: ['Fry', 'Pizza']
      },
      {
        id: 3,
        price: 90,
        discount: 0,
        isFreeDelivery: true,
        name: 'Nacchos',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/3.jpg',
        cookTime: '10-15',
        tags: ['Nacchos']
      },
      {
        id: 4,
        price: 120,
        discount: 0,
        isFreeDelivery: false,
        name: 'Burger',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/4.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 5,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 5',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/5.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 6,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 6',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/6.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 7,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 7',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/7.jpg',
        cookTime: '10-15',
        tags: ['Rice']
      },
      {
        id: 8,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 8',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/8.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 9,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 9',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/9.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 10,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 10',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/10.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 11,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 11',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/11.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 12,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 12',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/12.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 13,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 13',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/13.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 14,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 14',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/14.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 15,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 15',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/15.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      },
      {
        id: 16,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 16',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/16.jpg',
        cookTime: '10-15',
        tags: ['Pizza', 'Snacks']
      },
      {
        id: 17,
        price: 100,
        discount: 0,
        isFreeDelivery: false,
        name: 'Product 17',
        description: 'Combination of rice, moong dal, masoor dal & chicken with spices',
        imageUrl: 'assets/17.jpg',
        cookTime: '10-15',
        tags: ['Fry']
      }
    ];
  }
}
