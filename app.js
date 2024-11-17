"use strict";
const httpRequest = new XMLHttpRequest();


document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector("button");
    search.addEventListener("click", function() {
        const url = `http://localhost/info2180-lab4/superheroes.php`;

        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    const response = httpRequest.responseText;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    });
});
