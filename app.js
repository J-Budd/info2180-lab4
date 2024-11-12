"use strict";
const httpRequest = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    let search = document.querySelector("button");
    search.addEventListener("click", showHeroes);
});


function showHeroes(){
    let url = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.onreadystatechange = handler;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function handler(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            alert(response);
        } else {
            alert('There was a problem with the request.');
        }
    }
}