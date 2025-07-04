const scriptURL = 'https://script.google.com/macros/s/AKfycbxHDBayPBu4jSy0ntB9zlQGtckpmTj40SSFpdBgBUwSRzQ1mFXNMgOp7sS0DvbeOiQe/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

document.querySelector('.fa-bars').addEventListener('click', function () {
    document.querySelector('nav ul').classList.add('show');
});

document.querySelector('.fa-circle-xmark').addEventListener('click', function () {
    document.querySelector('nav ul').classList.remove('show');
});

var tablinks = document.getElementsByClassName("tab_link");
var tabcontents = document.getElementsByClassName("tab_content");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active_link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active_tab");
    }
    document.getElementById(tabname).classList.add("active_tab");
    event.currentTarget.classList.add("active_link");
}


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTMLL = "Message sent succesfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}