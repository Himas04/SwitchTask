// Employee ID Card Generat
for (let employeeId = 1; employeeId <= 100; employeeId++) {
  console.log("EMP" + String(employeeId).padStart(3, "0"));
}

//Mutliplex Seat Booking
let seats;
let bookedSeats = [20, 10];
for (seats = 1; seats <= 50; seats++) {
  if (bookedSeats.includes(seats)) {
    console.log("Seat" + " " + seats + " " + "-Booked");
  } else {
    console.log("Seat" + " " + seats + "-Available");
  }
}

//Hospital Token System
for (let token = 1; token <= 100; token++) {
  console.log("Patient" + " " + token + " " + "Got Token");
}

//Bus Reservation SYSTEM

let seatss = 0;

while (seatss > 0) {
  console.log("Seat Booked");
  seatss--;
  break;
}

if (seatss === 0) {
  console.log("Bus Full");
}

//Server Health Monitoring

let serverStatus = "offline";

while (serverStatus === "online") {
  console.log("Server Online");
}
console.log("Server offline");

//Object Property Inspection
let employee = {
  id: "EMP001",
  name: "Himas",
  salary: 50000,
};
for (let key in employee) {
  console.log(key + " : " + employee[key]);
}

// Online Order Tracking

let status = "Processing";

while (status !== "Delivered") {
  console.log("Current Status: " + status);

  if (status === "Processing") {
    status = "Packed";
  } else if (status === "Packed") {
    status = "Shipped";
  } else if (status === "Shipped") {
    status = "Out for Delivery";
  } else if (status === "Out for Delivery") {
    status = "Delivered";
  }
}

console.log("Current Status: " + status);
console.log("Order Delivered Successfully");