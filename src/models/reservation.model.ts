export class Reservation{
    user: string;
    parking: string;
    car: string;
    start_ts: date;
    end_ts: date;
    amount: number;
    payment_type: number;
    
    constructor(user: string, parking: string, car: string, start_ts: date, end_ts: date, amount: number, payment_type: number){
        this.user = user;
        this.parking = parking;
        this.car = car;
        this.start_ts = start_ts;
        this.end_ts = end_ts;
        this.amount = amount;
        this.payment_type = payment_type;
    }
}