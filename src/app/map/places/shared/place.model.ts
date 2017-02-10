export class Place {
    public id : number;
    constructor(
        public address : string,
        public number_address : string,
        public zip_code : string,
        public country : string,
        public state : string,
        public city : string
    ) {}
}