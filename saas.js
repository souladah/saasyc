const prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];



function afficherTrajets() {

    var resultat = "=== TRAJETS DISPONIBLES ===\n\n";

    for (var i = 0; i < trips.length; i++) {

         resultat+=
            "#" + trips[i].id + " " +
            trips[i].departure + " → " +
            trips[i].destination + "\n" +
            "Départ : " + trips[i].departureTime + "\n" +
            "Arrivée : " + trips[i].arrivalTime + "\n" +
            "Prix : " + trips[i].price + " DH\n" +
            "Places disponibles : " + trips[i].availableSeats +
            "\n\n";
    }
    return resultat ;

}
var nextTicketId = 1;

function acheterTicket() {

    var name_ = prompt("Nom du passager : ").trim().toLowerCase();

    if (name_ === "") {
        return "Le nom du passager est obligatoire.";
    }

    var input_tripId = Number(
        prompt("Identifiant du trajet : ")
    );

    var trip = null;

    for (var i = 0; i < trips.length; i++) {

        if (trips[i].id === input_tripId) {
            trip = trips[i];
            break;
        }
    }

    if (trip === null) {
        return "Trajet introuvable.";
    }

    if (trip.availableSeats === 0) {
        return "Train complet.";
    }

    var seatNumber = 1;

    var j=0 ;
    while(j<tickets.length){
 
        if(tickets[j].tripId===input_tripId && tickets[j].seatNumber===seatNumber ){
            j=0
            seatNumber++
        }else{
            j++
        }

    }


    var ticket = {
        id: nextTicketId,
        passengerName: name_,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    tickets.push(ticket);

    nextTicketId++;

    trip.availableSeats--;

    return "Ticket acheté avec succès !\n" +
        "Ticket #" + ticket.id + "\n" +
        "Passager : " + ticket.passengerName + "\n" +
        "Trajet : " + trip.departure + " → " + trip.destination + "\n" +
        "Place : " + ticket.seatNumber + "\n" +
        "Prix : " + ticket.price + " DH";
}


function afficherTickets() {

    if (tickets.length === 0) {
        return "Aucun ticket enregistré.";
    }

    var result = "affichage des ticket\n";

    for (var i = 0; i < tickets.length; i++) {

        var trip = null;

        for (var j = 0; j < trips.length; j++) {

            if (trips[j].id === tickets[i].tripId) {
                trip = trips[j];
                break;
            }
        }

        result +=
            "Ticket #" + tickets[i].id + "\n" +
            "Passager : " + tickets[i].passengerName + "\n" +
            "Trajet : " + trip.departure + " → " + trip.destination + "\n" +
            "Place : " + tickets[i].seatNumber + "\n" +
            "Prix : " + tickets[i].price + " DH\n\n";
    }

    return result;
}



function annulerTicket() {

    var input_id = Number(
        prompt("Identifiant du ticket : ")
    );

    
   let index=-1;
   let findedticket="";

    for (var i = 0; i < tickets.length; i++) {

        if (tickets[i].id === input_id) {
            index = i;
            findedticket=tickets[i]

            break;
        }
    }

    if (index === -1) {
        return "Ticket introuvable.";
    }


    tickets.splice(index, 1);

    for (var j = 0; j < trips.length; j++) {

        if (trips[j].id === findedticket.tripId) {
            trips[j].availableSeats++;
            break;
        }
    }

    return "Ticket annulé avec succès.";
}

function rechercherTicket() {

    var name = prompt(
        "Nom du passager : "
    ).trim().toLowerCase();

    if (name === "") {
        return "Veuillez saisir un nom.";
    }

    var resultat = "";

    for (var i = 0; i < tickets.length; i++) {

        if (
            tickets[i].passengerName.toLowerCase() === name
        ) {

            var trip = "";

            for (var j = 0; j < trips.length; j++) {

                if (trips[j].id === tickets[i].tripId) {
                    trip = trips[j];
                    break;
                }
            }

            resultat +=
                "Ticket #" + tickets[i].id + "\n" +
                "Passager : " + tickets[i].passengerName + "\n" +
                "Trajet : " + trip.departure + " → " + trip.destination + "\n" +
                "Place : " + tickets[i].seatNumber + "\n" +
                "Prix : " + tickets[i].price + " DH\n\n";
        }
    }

    if (resultat === "") {
        return "Aucun ticket trouvé pour ce passager.";
    }

    return resultat;
}

function filtrerTrajets() {

    var ville = prompt(
        "Ville de départ : "
    ).trim().toLowerCase();

    if (ville === "") {
        return "Veuillez saisir une ville.";
    }

    var resultat = "";

    for (var i = 0; i < trips.length; i++) {

        if (
            trips[i].departure.toLowerCase() === ville
        ) {

            resultat +=
                trips[i].departure + " → " +
                trips[i].destination + " : " +
                trips[i].price + " DH\n";
        }
    }

    if (resultat === "") {
        return "Aucun trajet trouvé pour cette ville.";
    }

    return resultat;
}

function trierTrajets() {

    for (var i = 0; i < trips.length - 1; i++) {
        
        var istried = true;

        for (var j = 0; j < trips.length - 1 - i; j++) {

            if (trips[j].price > trips[j + 1].price) {

                var temp = trips[j];

                trips[j] = trips[j + 1];

                trips[j + 1] = temp;
                istried=false ;
            }
        
        }
        if(istried){
            break ;
            
        }
    }

   let resultat="" ;
   for(let trip of trips){
       resultat+= trip.departure +"->"+trip.destination +" :  " + trip.price+"\n";
   }
   return resultat
   
}
function statistiques() {

    var totalTickets = tickets.length;

    var chiffreAffaires = 0;

    for (let ticket of tickets) {
        chiffreAffaires += ticket.price;
    }

    let tripplusvendu = null;
    let nombreMaxTickets = 0;

    for(let trip of trips){
        var NumberOfTicket=0;
        for(let ticket of tickets){
            if(trip.id===ticket.tripId){
                NumberOfTicket++
            }
        }
        if(NumberOfTicket>nombreMaxTickets){
            nombreMaxTickets=NumberOfTicket ;
            tripplusvendu=trip
        }
    }

    var resultat =
        "=== STATISTIQUES ===\n\n" +
        "Nombre total de tickets : " + totalTickets + "\n" +
        "Chiffre d'affaires total : " + chiffreAffaires + " DH\n\n";

    if (tripplusvendu === null || nombreMaxTickets === 0) {

        resultat +=
            "Trajet le plus vendu :\n" +
            "Aucun ticket vendu.";

    } else {

        resultat +=
            "Trajet le plus vendu :\n\n" +
            tripplusvendu.departure + " → " +
            tripplusvendu.destination + "\n" +
            nombreMaxTickets + " tickets vendus";
    }

    return resultat;
}
function menu() {

    var choix =-1;

    while (choix !== 0) {

        console.log(
            "\n=================================\n" +
            "        RAILWAY MANAGER\n" +
            "================================="
        );

        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8 .statistique ");

        console.log("0. Quitter");

        choix = Number(
            prompt("Votre choix : ")
        );

        switch (choix) {

            case 1:
                console.log(afficherTrajets());
                break;

            case 2:
                console.log(acheterTicket());
                break;

            case 3:
                console.log(afficherTickets());
                break;

            case 4:
                console.log(annulerTicket());
                break;

            case 5:
                console.log(rechercherTicket());
                break;

            case 6:
                console.log(filtrerTrajets());
                break;

            case 7:
                console.log(trierTrajets());
                break;

            case 8 :
                console.log(statistiques()) ;
                break ;
            case 0:
                console.log("Au revoir !");
                break;
         
            default:
                console.log("Choix invalide !");
        }
    }
}

menu();





