const Customer = function (cus_id, firstName, lastName, age, phone) {
    this.cus_id = cus_id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phone = phone;
}

Customer.prototype.getCustomer = function () {
    return `${this.cus_id} ${this.firstName} ${this.lastName} ${this.age} ${this.phone} `;
};

var cus_detail = [{
        id: 1,
        firstName: "Sarocha",
        lastName: "Chang",
        age: 20,
        phone: "0952056174"
    },
    {
        id: 2,
        firstName: "Ticha",
        lastName: "Chang",
        age: 24,
        phone: "0931374677"
    },
    {
        id: 3,
        firstName: "Chonticha",
        lastName: "Chang",
        age: 27,
        phone: "0947459385"
    }
];

//console.log(cus_detail);
module.exports = {
    Customer: Customer,
    cus_detail: cus_detail
}