var modal = document.getElementById("termsModal");

var termsLink = document.querySelector(".terms-link");

var closeBtn = document.querySelector(".close");

termsLink.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


