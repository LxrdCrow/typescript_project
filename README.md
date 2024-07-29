# Vehicle Booking System

<br>

## Project Description

I created a TypeScript application for Start2Impact University. This project is a basic interface that utilizes shared micromobility, where users, once registered, can select a vehicle and the city where they will use it. In its simplicity, users can view their ID and whether the vehicle is available or not. <br><br>
The project is deployed on CodePen: [https://codepen.io/LxrdCrow/pen/XWLjbGd](https://codepen.io/LxrdCrow/pen/XWLjbGd)

<br>

## Features

- **User Registration**: Users can register by providing their first name, last name, email, and preferred payment method.
- **Vehicle Booking**: Users can book an available vehicle (bike, scooter, electric scooter) by choosing from the vehicles available in a specific city.
- **Availability Management**: Each vehicle has a status that can be "available" or "in use". Once booked, the vehicle status changes to "in use".
- **Add Vehicles to Cities**: New vehicles can be added to the cities where the system operates.

<br>

## Project Structure

### Interfaces

- `IUser`: Represents the users of the service.
  - Properties: `firstName`, `lastName`, `email`, `preferredPaymentMethod`
  - Method: `bookVehicle(vehicle: IVehicle): void`

- `IVehicle`: Represents the transportation vehicles.
  - Properties: `type` (bike, scooter, electricScooter), `id`, `status` (available, inUse)
  - Method: `assignUser(user: IUser): void`

- `ICity`: Represents the cities where the system operates.
  - Properties: `name`, `availableVehicles`
  - Method: `addVehicle(vehicle: IVehicle): void`

### Classes

- `Vehicle`: Implements the `IVehicle` interface and manages the information of each vehicle.
- `User`: Implements the `IUser` interface and manages user information.
- `City`: Implements the `ICity` interface and manages the available vehicles in a city.

### Example Usage

```typescript
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
```


<br>

## Requirements

- Node.js

- TypeScript
