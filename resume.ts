// Declare html2pdf as any to avoid TypeScript errors
declare var html2pdf: any;

document.addEventListener("DOMContentLoaded", () => {
    const downloadPdfButton = document.getElementById("downloadPdf");

    downloadPdfButton?.addEventListener("click", () => {
        const resumeElement = document.querySelector(".resume") as HTMLElement;

        // PDF generation options
        const opt = {
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
document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills");
    const skillsSection = document.getElementById("skills");

    toggleSkillsButton?.addEventListener("click", () => {
        if (skillsSection) {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block"; // Show the section
            } else {
                skillsSection.style.display = "none"; // Hide the section
            }
        }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

