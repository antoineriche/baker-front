export interface ICommand {
    id: number;
    date: Date;
    count: number;
    restaurantId: number;
}

export class Command implements ICommand {
    id: number;    
    date: Date;
    count: number;
    restaurantId: number;

    constructor(id?: number, date?: Date, count ?: number, restaurantId ?: number) {
        this.id = id || null;
        this.date = date || null;
        this.count = count || 0;
        this.restaurantId = restaurantId || null; 
    }
}