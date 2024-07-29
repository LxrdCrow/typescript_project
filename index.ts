// Creation of interfaces

interface IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso';
    assegnaUtente(utente: IUtente): void;
}

interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;
    prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}

// Creation of classes

class Mezzo implements IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso';

    constructor(tipo: 'bici' | 'scooter' | 'monopattino', id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`Mezzo ${this.id} assegnato a ${utente.nome} ${utente.cognome}`);
        } else {
            console.log(`Mezzo ${this.id} non è disponibile`);
        }
    }
}

class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
            console.log(`${this.nome} ${this.cognome} ha prenotato il mezzo con ID ${mezzo.id}`);
        } else {
            console.log(`Il mezzo con ID ${mezzo.id} non è disponibile`);
        }
    }
}

class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`Mezzo con ID ${mezzo.id} aggiunto alla città ${this.nome}`);
    }
}

// Creation of users

const utente1: IUtente = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'Carta di Credito');
const utente2: IUtente = new Utente('Luca', 'Bianchi', 'luca.bianchi@example.com', 'PayPal');

// Creation of vehicles

const bici: IMezzo = new Mezzo('bici', '001');
const scooter: IMezzo = new Mezzo('scooter', '002');
const monopattino: IMezzo = new Mezzo('monopattino', '003');

// Creation of cities

const roma: ICitta = new Citta('Roma');
const milano: ICitta = new Citta('Milano');

// Adding vehicles to cities

roma.aggiungiMezzo(bici);        // Output: Vehicle with ID 001 added to the city Roma
roma.aggiungiMezzo(scooter);     // Output: Vehicle with ID 002 added to the city Roma
milano.aggiungiMezzo(monopattino); // Output: Vehicle with ID 003 added to the city Milano

// Booking vehicles by users

utente1.prenotaMezzo(bici);     // Output: Vehicle 001 assigned to Mario Rossi
utente2.prenotaMezzo(scooter);  // Output: Vehicle 002 assigned to Luca Bianchi

// Attempt to book a vehicle already in use

utente1.prenotaMezzo(scooter);  // Output: The vehicle with ID 002 is not available

// Adding a new vehicle and booking

const bici2: IMezzo = new Mezzo('bici', '004');
roma.aggiungiMezzo(bici2);      // Output: Vehicle with ID 004 added to the city Roma
utente2.prenotaMezzo(bici2);    // Output: Vehicle 004 assigned to Luca Bianchi