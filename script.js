// Disables all elements with the pages class
function hidePages(){
    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
}

// Enables the about page
function displayAboutPage(id){
    aboutPage = document.getElementById("about");
    aboutPage.style.display = "initial";
}

// Enables the projects page
function displayProjectsPage(id){
    projectsPage = document.getElementById("projects");
    projectsPage.style.display = "initial";
}

// Enables the contact page
function displayContactPage(id){
    contactPage = document.getElementById("contact");
    contactPage.style.display = "initial";
}