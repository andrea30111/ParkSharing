export class Parking {
    address: string;
    city: string;
    cap: number;
    latitude: number;
    longitude: number;
    length: number;
    width: number;
    height: number;
    type: number; //0: private | 1: hotel | 2: supermarket
    box_type?: number; //set only if private parking (type=0) - 0: internal box. | 1: external box | 2: internal space | 3: external space
    hourly_price?: number;
    daily_price?: number;
    weekly_price?: number;
    montly_price?: number;
    user?: string;

    constructor(address: string, city: string, cap: number, latitude: number, longitude: number, length: number, width: number, height: number, type: number, box_type?: number, hourly_price?: number, daily_price?: number, weekly_price?: number, montly_price?: number, user?: string){
        this.address = address;
        this.city = city;
        this.cap = cap;
        this.latitude = latitude;
        this.longitude = longitude;
        this.length = length;
        this.width = width;
        this.height = height;
        this.type = type;
        this.box_type = box_type;
        this.hourly_price = hourly_price;
        this.daily_price = daily_price;
        this.weekly_price = weekly_price;
        this.montly_price = montly_price;
        this.user = user;
    } //?=optional
}