const finalDate = "1 Jan 2021";
// Définit la date actuel en milisecondes


function countdown() { 
    const currentDate = new Date();
    // formatage de la date passé en format dateTime
    const expireDate = new Date(finalDate);

    // récupération des éléménents

    const dayElement = document.getElementById("day");
    const hourElement = document.getElementById("hour");
    const minElement = document.getElementById("minute");
    const secondeElement= document.getElementById("second");


    // définir le seconde entre les deux valeurs et transforme en seconde en divisant mes milisecondes par 1000 pour donner des secondes
    const totalSecondes = Math.floor((expireDate - currentDate) / 1000) ;

    const days = Math.floor(totalSecondes / 3600 / 24);
    const hours = Math.floor(totalSecondes / 3600) % 24;
    const minutes = Math.floor(totalSecondes / 60) % 60;
    const seconds = Math.floor(totalSecondes) % 60;

    // je passe les dates à la vue
    dayElement.innerHTML = formatDate(days);
    hourElement.innerHTML = formatDate(hours);
    minElement.innerHTML = formatDate(minutes);
    secondeElement.innerHTML = formatDate(seconds);

}

// formatage sous 10
function formatDate(time){
    return time < 10 ?(`0${time}`): time;
}


setInterval( countdown , 1000);

// affiche le le temps restant dans le bon paragraphe






