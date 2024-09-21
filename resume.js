document.addEventListener("DOMContentLoaded", function () {
    var downloadPdfButton = document.getElementById("downloadPdf");
    downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener("click", function () {
        var resumeElement = document.querySelector(".resume");
        // PDF generation options
        var opt = {
            margin: 0.5,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Generate the PDF
        if (resumeElement) {
            html2pdf().from(resumeElement).set(opt).save();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
        if (skillsSection) {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block"; // Show the section
            }
            else {
                skillsSection.style.display = "none"; // Hide the section
            }
        }
    });
    // Dark Mode Toggle
    var darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle === null || darkModeToggle === void 0 ? void 0 : darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
