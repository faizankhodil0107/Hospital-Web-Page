/*// Pre-fill doctor name when booking from card
function bookDoctor(name) {
    document.getElementById("doctor").value = name;
    window.location.href = "#appointment";
}

// Appointment form handling
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    alert("Appointment booked for " + name + " with " + doctor + " on " + date);

    // Store in LocalStorage (simulation)
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push({
        name,
        doctor,
        date
    });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    // Reset form
    this.reset();
});
*/