export interface IRestaurant {
    id: number;
    name: string;
    address: string;
    mailAddress: string;
    phone: string;
    commandCount: number;
    description: string;
}

export class Restaurant implements IRestaurant {
    id: number;
    name: string;
    address: string;
    mailAddress: string;
    phone: string;
    commandCount: number;
    description: string;

    constructor(id?: number, name?: string, address?: string, 
        mailAddress?: string, phone?: string, commandCount?: number,
        description?: string) {
        this.id = id || null;
        this.name = name || null;
        this.address = address || null;
        this.mailAddress = mailAddress || null;
        this.phone = phone || null;
        this.commandCount = commandCount || 0;
        this.description = description || null;
    }
}