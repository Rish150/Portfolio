// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxHDBayPBu4jSy0ntB9zlQGtckpmTj40SSFpdBgBUwSRzQ1mFXNMgOp7sS0DvbeOiQe/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// Sidebar toggle menu
const sidemenu = document.getElementById("sidemenu");
const hamburger = document.querySelector(".fa-bars");

// Toggle sidebar open/close
function togglemenu() {
    sidemenu.classList.toggle("show");
    hamburger.classList.toggle("active");
}

// Auto-close menu when link clicked
document.querySelectorAll("#sidemenu a").forEach(link => {
    link.addEventListener("click", () => {
        sidemenu.classList.remove("show");
        hamburger.classList.remove("active");
    });
});

// Tab functionality
const tablinks = document.getElementsByClassName("tab_link");
const tabcontents = document.getElementsByClassName("tab_content");

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
