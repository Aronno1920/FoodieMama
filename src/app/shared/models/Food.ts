export class Food {
    id!: number;
    name!: string;
    description!: string;
    imageUrl!: string;
    cookTime!: string;

    price!: number;
    discount: number = 0;
    isFreeDelivery!: boolean;
    tags!: string[];
}