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



var nextTicketId = 1;




function afficherTrajets() {

    

    var lignes = trips.map(trip => {

        return "#" + trip.id + " " +
               trip.departure + " → " +
               trip.destination + "\n" +
               "Départ : " + trip.departureTime + "\n" +
               "Arrivée : " + trip.arrivalTime + "\n" +
               "Prix : " + trip.price + " DH\n" +
               "Places disponibles : " +
               trip.availableSeats;
    });


    
    return "=== TRAJETS DISPONIBLES ===\n\n" +
           lignes.join("\n\n");
}




function acheterTicket() {

    

    var passengerName = prompt(
        "Nom du passager : "
    ).trim();


    

    if (passengerName === "") {
        return "Le nom du passager est obligatoire.";
    }



    var tripIdInput = prompt(
        "Identifiant du trajet : "
    );



    var tripId = Number(tripIdInput);




    if (isNaN(tripId)) {
        return "Veuillez entrer un identifiant valide (nombre).";
    }


    

    var trip = trips.find(
        t => t.id === tripId
    );


    
    if (!trip) {
        return "Trajet introuvable.";
    }




    if (trip.availableSeats <= 0) {
        return "Train complet.";
    }


    

    var seatNumber = 1;


    


    while (
        tickets.some(t =>
            t.tripId === trip.id &&
            t.seatNumber === seatNumber
        )
    ) {

       

        seatNumber++;
    }


    

    var ticket = {

       

        id: nextTicketId,


        passengerName: passengerName,


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
           "Trajet : " +
           trip.departure + " → " +
           trip.destination + "\n" +
           "Place : " + ticket.seatNumber + "\n" +
           "Prix : " + ticket.price + " DH";
}




function afficherTickets() {

    

    if (tickets.length === 0) {
        return "Aucun ticket enregistré.";
    }



    var lignes = tickets.map(ticket => {

        

        var trip = trips.find(
            t => t.id === ticket.tripId
        );


        return "Ticket #" + ticket.id + "\n" +
               "Passager : " + ticket.passengerName + "\n" +
               "Trajet : " +
               trip.departure + " → " +
               trip.destination + "\n" +
               "Place : " + ticket.seatNumber + "\n" +
               "Prix : " + ticket.price + " DH";
    });



    return "=== TICKETS ===\n\n" +
           lignes.join("\n\n");
}



function annulerTicket() {

   

    var idInput = prompt(
        "Identifiant du ticket : "
    );



    var ticketId = Number(idInput);


    


    

    var index = tickets.findIndex(
        t => t.id === ticketId
    );


    if (index === -1) {
        return "Ticket introuvable.";
    }


   

    var ticket = tickets[index];


    

    var trip = trips.find(
        t => t.id === ticket.tripId
    );


    

    tickets.splice(index, 1);


    

    trip.availableSeats++;


    return "Ticket annulé avec succès.";
}




function rechercherTicket() {

    // Demander le nom du passager.

    var name = prompt(
        "Nom du passager : "
    ).trim();



    if (name === "") {
        return "Veuillez saisir un nom.";
    }


   

    var resultats = tickets.filter(
        t => t.passengerName === name
    );



    if (resultats.length === 0) {
        return "Aucun ticket trouvé pour ce passager.";
    }



    var lignes = resultats.map(ticket => {


        var trip = trips.find(
            t => t.id === ticket.tripId
        );


        return "Ticket #" + ticket.id + "\n" +
               "Passager : " +
               ticket.passengerName + "\n" +
               "Trajet : " +
               trip.departure + " → " +
               trip.destination + "\n" +
               "Place : " +
               ticket.seatNumber + "\n" +
               "Prix : " +
               ticket.price + " DH";
    });


    

    return lignes.join("\n\n");
}




function filtrerTrajets() {


    var ville = prompt(
        "Ville de départ : "
    ).trim().toLowerCase();



    if (ville === "") {
        return "Veuillez saisir une ville.";
    }




    var resultats = trips.filter(
        t => t.departure.toLowerCase() === ville
    );



    if (resultats.length === 0) {
        return "Aucun trajet trouvé pour cette ville.";
    }



    var lignes = resultats.map(t =>
        t.departure + " → " +
        t.destination + " : " +
        t.price + " DH"
    );


    return lignes.join("\n");
}




function trierTrajets() {



    for (var i = 0; i < trips.length - 1; i++) {


        

        for (
            var j = 0;
            j < trips.length - 1 - i;
            j++
        ) {


           

            if (
                trips[j].price >
                trips[j + 1].price
            ) {

               

                var temp = trips[j];


                

                trips[j] = trips[j + 1];


                

                trips[j + 1] = temp;
            }
        }
    }



    var lignes = trips.map(t =>
        t.departure + " → " +
        t.destination + " : " +
        t.price + " DH"
    );


    return lignes.join("\n");
}




function menu() {

    // Je commence avec -1
    // pour entrer dans la boucle.

    var choix = -1;




    while (choix !== 0) {

        

        console.log(
            "\n=================================\n" +
            "        RAILWAY MANAGER\n" +
            "=================================\n"
        );

        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter");



        var input = prompt(
            "Votre choix : "
        );



        choix = Number(input);



        if (isNaN(choix)) {

            console.log(
                "Veuillez entrer un nombre."
            );



            continue;
        }



        switch (choix) {

            case 1:

                console.log(
                    afficherTrajets()
                );

                break;


            case 2:

                console.log(
                    acheterTicket()
                );

                break;


            case 3:

                console.log(
                    afficherTickets()
                );

                break;


            case 4:

                console.log(
                    annulerTicket()
                );

                break;


            case 5:

                console.log(
                    rechercherTicket()
                );

                break;


            case 6:

                console.log(
                    filtrerTrajets()
                );

                break;


            case 7:

                console.log(
                    trierTrajets()
                );

                break;


            case 0:

                console.log(
                    "Au revoir !"
                );

                break;


            default:

                console.log(
                    "Choix invalide !"
                );
        }
    }
}



menu();
