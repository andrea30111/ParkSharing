export class Availability {
    parking: string;
    start_ts: Date;
    end_ts: Date;

    constructor(parking: string, start_ts: Date, end_ts: Date){
        this.parking = parking;
        this.start_ts = start_ts;
        this.end_ts = end_ts;
    } //?=optional
}