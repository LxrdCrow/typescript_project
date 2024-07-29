interface IVehicle {
    type: 'bike' | 'scooter' | 'electricScooter';
    id: string;
    status: 'available' | 'inUse';
    assignUser(user: IUser): void;
}

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    preferredPaymentMethod: string;
    bookVehicle(vehicle: IVehicle): void;
}

interface ICity {
    name: string;
    availableVehicles: IVehicle[];
    addVehicle(vehicle: IVehicle): void;
}


class Vehicle implements IVehicle {
    type: 'bike' | 'scooter' | 'electricScooter';
    id: string;
    status: 'available' | 'inUse';

    constructor(type: 'bike' | 'scooter' | 'electricScooter', id: string) {
        this.type = type;
        this.id = id;
        this.status = 'available';
    }

    assignUser(user: IUser): void {
        if (this.status === 'available') {
            this.status = 'inUse';
            console.log(`Vehicle ${this.id} assigned to ${user.firstName} ${user.lastName}`);
        } else {
            console.log(`Vehicle ${this.id} is not available`);
        }
    }
}

class User implements IUser {
    firstName: string;
    lastName: string;
    email: string;
    preferredPaymentMethod: string;

    constructor(firstName: string, lastName: string, email: string, preferredPaymentMethod: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
    }

    bookVehicle(vehicle: IVehicle): void {
        if (vehicle.status === 'available') {
            vehicle.assignUser(this);
            console.log(`${this.firstName} ${this.lastName} booked vehicle with ID ${vehicle.id}`);
        } else {
            console.log(`Vehicle with ID ${vehicle.id} is not available`);
        }
    }
}

class City implements ICity {
    name: string;
    availableVehicles: IVehicle[];

    constructor(name: string) {
        this.name = name;
        this.availableVehicles = [];
    }

    addVehicle(vehicle: IVehicle): void {
        this.availableVehicles.push(vehicle);
        console.log(`Vehicle with ID ${vehicle.id} added to city ${this.name}`);
    }
}


// User creation
const user1: IUser = new User('Mario', 'Rossi', 'mario.rossi@example.com', 'Credit Card');
const user2: IUser = new User('Beatrice', 'Verdi', 'beatrice.verdi@example.com', 'PayPal');

// Vehicle creation
const bike: IVehicle = new Vehicle('bike', '001');
const scooter: IVehicle = new Vehicle('scooter', '002');
const electricScooter: IVehicle = new Vehicle('electricScooter', '003');

// City creation
const rome: ICity = new City('Rome');
const florence: ICity = new City('Florence');

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
const bike2: IVehicle = new Vehicle('bike', '004');
florence.addVehicle(bike2);
user2.bookVehicle(bike2);
