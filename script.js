// 

function showPage(page) {

    // 1. Hel dhammaan sections-ka
    let sections = document.querySelectorAll(".main section");

    // 2. Dhammaan sections-ka ka saar active
    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    // 3. Hel section-ka la doortay
    let selectedPage = document.getElementById(page);

    // 4. Kan la doortay ku dar active
    selectedPage.classList.add("active");
}