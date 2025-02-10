document.addEventListener("DOMContentLoaded", () => {
    // Dynamically insert the footer
    const footer = `
    <footer class="bg-primary text-white text-center py-3">
        &copy; <span id="start-year"></span> - <span id="current-year"></span> 
        <span id="footer-title">cizgicicocuk</span> | All rights reserved.
    </footer>`;
    document.body.insertAdjacentHTML('beforeend', footer);

    // Set the current year dynamically after the footer is added
    const currentYear = new Date().getFullYear();
    const startYear = 2024;

    // Update the year range in the inserted footer
    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("start-year").textContent = startYear;
});
