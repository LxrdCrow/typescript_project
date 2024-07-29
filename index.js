"use strict";
class Vehicle {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.status = 'available';
    }
    assignUser(user) {
        if (this.status === 'available') {
            this.status = 'inUse';
            console.log(`Vehicle ${this.id} assigned to ${user.firstName} ${user.lastName}`);
        }
        else {
            console.log(`Vehicle ${this.id} is not available`);
        }
    }
}
class User {
    constructor(firstName, lastName, email, preferredPaymentMethod) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
    }
    bookVehicle(vehicle) {
        if (vehicle.status === 'available') {
            vehicle.assignUser(this);
            console.log(`${this.firstName} ${this.lastName} booked vehicle with ID ${vehicle.id}`);
        }
        else {
            console.log(`Vehicle with ID ${vehicle.id} is not available`);
        }
    }
}
class City {
    constructor(name) {
        this.name = name;
        this.availableVehicles = [];
    }
    addVehicle(vehicle) {
        this.availableVehicles.push(vehicle);
        console.log(`Vehicle with ID ${vehicle.id} added to city ${this.name}`);
    }
}
// User creation
const user1 = new User('Mario', 'Rossi', 'mario.rossi@example.com', 'Credit Card');
const user2 = new User('Beatrice', 'Verdi', 'beatrice.verdi@example.com', 'PayPal');
// Vehicle creation
const bike = new Vehicle('bike', '001');
const scooter = new Vehicle('scooter', '002');
const electricScooter = new Vehicle('electricScooter', '003');
// City creation
const rome = new City('Rome');
const florence = new City('Florence');
// Adding vehicles to cities
rome.addVehicle(bike);
rome.addVehicle(scooter);
florence.addVehicle(electricScooter);
// Booking vehicles by users
user1.bookVehicle(bike);
user2.bookVehicle(scooter);
// Attempt to book a vehicle already in use
user1.bookVehicle(scooter);
// Adding a new vehicle and booking it
const bike2 = new Vehicle('bike', '004');
florence.addVehicle(bike2);
user2.bookVehicle(bike2);
