export class Place {
    public _id : string;
    constructor(
        public label : string,
        public address : string,
        public number_address : string,
        public zip_code : string,
        public country : string,
        public state : string,
        public city : string,
        public coordinates : Array<number>
    ) {}
}