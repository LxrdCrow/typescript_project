# Project_TypeScript

<br>

## Descrizione del Progetto

Ho creato un'applicazione in TypeScript per Start2Impact University. Trattasi di una possibile prima interfaccia che impiega l'uso della micromobilità condivisa, dove l'utente, una volta registratosi, può selezionare il mezzo e la città dove lo andrà ad utilizzare. Nella sua semplicità, si può visualizzare il proprio ID e se il mezzo sarà disponibile o meno. <br><br>
Il progetto è stato deployato su CodePen: https://codepen.io/LxrdCrow/pen/XWLjbGd

<br>

## Funzionalità

- **Registrazione Utente**: Gli utenti possono registrarsi fornendo nome, cognome, email e metodo di pagamento preferito.
- **Prenotazione Mezzi**: Gli utenti possono prenotare un mezzo disponibile (bici, scooter, monopattino) scegliendo tra i mezzi disponibili in una città specifica.
- **Gestione della Disponibilità**: Ogni mezzo ha uno stato che può essere "disponibile" o "in uso". Una volta prenotato, il mezzo diventa "in uso".
- **Aggiunta di Mezzi alle Città**: È possibile aggiungere nuovi mezzi alle città in cui Moove opera.

<br>

## Struttura del Progetto

### Interfacce

- `IUtente`: Rappresenta gli utenti del servizio.
  - Proprietà: `nome`, `cognome`, `email`, `metodoPagamentoPreferito`
  - Metodo: `prenotaMezzo(mezzo: IMezzo): void`

- `IMezzo`: Rappresenta i mezzi di trasporto.
  - Proprietà: `tipo` (bici, scooter, monopattino), `id`, `stato` (disponibile, in uso)
  - Metodo: `assegnaUtente(utente: IUtente): void`

- `ICitta`: Rappresenta le città in cui Moove opera.
  - Proprietà: `nome`, `mezziDisponibili`
  - Metodo: `aggiungiMezzo(mezzo: IMezzo): void`


### Classi

- `Mezzo`: Implementa l'interfaccia `IMezzo` e gestisce le informazioni di ciascun mezzo.
- `Utente`: Implementa l'interfaccia `IUtente` e gestisce le informazioni degli utenti.
- `Citta`: Implementa l'interfaccia `ICitta` e gestisce i mezzi disponibili in una città.


### Esempio di Utilizzo

```typescript
// Creazione degli utenti
const utente1: IUtente = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'Carta di Credito');
const utente2: IUtente = new Utente('Beatrice', 'Verdi', 'beatrice.verdi@example.com', 'PayPal');

// Creazione dei mezzi
const bici: IMezzo = new Mezzo('bici', '001');
const scooter: IMezzo = new Mezzo('scooter', '002');
const monopattino: IMezzo = new Mezzo('monopattino', '003');

// Creazione delle città
const roma: ICitta = new Citta('Roma');
const firenze: ICitta = new Citta('Firenze');

// Aggiunta dei mezzi alle città
roma.aggiungiMezzo(bici);
roma.aggiungiMezzo(scooter);
firenze.aggiungiMezzo(monopattino);

// Prenotazione dei mezzi da parte degli utenti
utente1.prenotaMezzo(bici);
utente2.prenotaMezzo(scooter);

// Tentativo di prenotazione di un mezzo già in uso
utente1.prenotaMezzo(scooter);

// Aggiunta di un nuovo mezzo e prenotazione
const bici2: IMezzo = new Mezzo('bici', '004');
firenze.aggiungiMezzo(bici2);
utente2.prenotaMezzo(bici2);
```

<br>

## Requisiti

- Node.js

- TypeScript
