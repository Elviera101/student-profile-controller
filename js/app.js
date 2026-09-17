
// DOM Selection using getElementById()
const profileForm = document.getElementById("profileForm");
const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");
const formMessage = document.getElementById("formMessage");

const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

// DOM Selection using querySelector()
const mainContainer = document.querySelector(".container");

// Initial profile data
const initialProfile = {
    name: "Maria Santos",
    program: "BS Information Technology",
    year: "3rd Year",
    status: "active",
    studentId: profileCard.dataset.studentId
};

// Validate student name
function isValidStudentName(name) {
    return typeof name === "string" &&
        name.trim().length >= 2;
}

// Format student status
function formatStudentStatus(status) {
    if (status === "active") {
        return "Active";
    }

    if (status === "inactive") {
        return "Inactive";
    }

    return "";
}

// Update profile
function updateProfile() {
    const name = nameInput.value;
    const program = programInput.value;
    const year = yearInput.value;
    const status = statusInput.value;

    if (!isValidStudentName(name)) {
        formMessage.textContent = "Student name is required";
        return;
    }

    profileName.textContent = name.trim();
    profileProgram.textContent = program;
    profileYear.textContent = year;

    setStatus(status);

    formMessage.textContent = "Profile updated successfully.";
}

// Set student status
function setStatus(status) {
    profileCard.dataset.status = status;
    profileStatus.textContent = formatStudentStatus(status);

    if (status === "active") {
        profileCard.classList.add("active");
        profileCard.classList.remove("inactive");
    } else if (status === "inactive") {
        profileCard.classList.add("inactive");
        profileCard.classList.remove("active");
    }
}

// Toggle details panel
function toggleDetails() {
    detailsPanel.classList.toggle("hidden");
}

// Toggle dark theme
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// Reset profile
function resetProfile() {
    nameInput.value = initialProfile.name;
    programInput.value = initialProfile.program;
    yearInput.value = initialProfile.year;
    statusInput.value = initialProfile.status;

    profileName.textContent = initialProfile.name;
    profileProgram.textContent = initialProfile.program;
    profileYear.textContent = initialProfile.year;

    setStatus(initialProfile.status);

    profileCard.dataset.studentId = initialProfile.studentId;

    studentIdDisplay.textContent =
        "Student ID: " + profileCard.dataset.studentId;

    detailsPanel.classList.remove("hidden");
    document.body.classList.remove("dark-theme");
    formMessage.textContent = "";
}

// Event listeners
profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    updateProfile();
});

toggleDetailsBtn.addEventListener("click", toggleDetails);
themeBtn.addEventListener("click", toggleTheme);
resetBtn.addEventListener("click", resetProfile);

// Defensive check
if (!mainContainer) {
    console.error("Main container was not found.");
}