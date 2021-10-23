export class Customer {
    constructor(id, cumtomerNumber){
        this.id = id;
        this.cumtomerNumber = cumtomerNumber;
    }
}

let customer = new Customer(1, 123456);
// constructor'da tanımlanmazda undefined olur. Tanımlanırsa atama olur.
console.log(customer.cumtomerNumber); 
//instance'a yapılan prototyping 
customer.name = "Ayşe";
console.log(customer.name)

//Classa yapılan prototyping
Customer.surName = "Karaca";
console.log(Customer.surName);

class IndividualCustomer extends Customer{
    constructor(firstName, cumtomerNumber){
        super(id, cumtomerNumber);
        this.firstName = firstName;
    }
}