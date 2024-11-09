function setupToggle() {
    const togglebutton = document.getElementById("toggle-skills") as HTMLButtonElement | null;
    const skills = document.getElementById("skills") as HTMLElement | null;

    if (togglebutton && skills) {
        togglebutton.addEventListener("click", () => {
            skills.style.display = skills.style.display === "none" ? "block" : "none";
        });
    }
}

// Call the function to set up the toggle functionality
setupToggle();
