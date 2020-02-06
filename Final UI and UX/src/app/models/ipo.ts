export class Ipo{
            id:number
            company:string;
            stockexchange:string;
            PriceShare :number;
            NoofShares :number;
            Address :string;
            City :string;
            State :string;
            PinCode :number;
            Date :Date;
            constructor(id:number,company:string,stockexchange:string,PriceShare :number,NoofShares :number,Address :string,City :string,State :string,PinCode :number,Date :Date)
            {
                this.id=id;
                this.company=company;
               this.stockexchange=stockexchange;
                this.PriceShare =PriceShare;
                this.NoofShares =NoofShares;
                this.Address =Address;
                this.City =City;
                this.State =State;
                this.PinCode =PinCode;
                this.Date =Date;
            }
}