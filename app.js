// get ui var
document.getElementById("loan-form").addEventListener("submit", function (e) {
  document.querySelector("#loading").style.display = "block";

  document.querySelector("#results").style.display = "none";

  setTimeout(calResults, 2000);

  e.preventDefault();
});

// Function to calculate
function calResults() {
  // get UI variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("year");

  const monthlyPay = document.getElementById("monthly");
  const totalAmount = document.getElementById("total-amount");
  const totalInterest = document.getElementById("total-interest");

  // calculate interest
  const principal = parseFloat(amount.value);
  const calculatedInterested = parseFloat(interest.value) / 100 / 12;
  const totalPayment = parseFloat(years.value) * 12;

  // calculate monthly
  const x = Math.pow(1 + calculatedInterested, totalPayment);
  const monthly = (principal * x * calculatedInterested) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPay.value = monthly.toFixed(2);
    totalAmount.value = (monthly * totalPayment).toFixed(2);
    totalInterest.value = (monthly * totalPayment - principal).toFixed(2);

    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "block";
  } else {
    showError("Please provide numbers...");
  }

  //   e.preventDefault();
}

// show error message
function showError(error) {
  document.querySelector("#loading").style.display = "block";
  // create elements to show the message
  const errorDiv = document.createElement("div");
  // give class name based on bootstrap alert message
  errorDiv.className = "alert alert-danger";
  // create Text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // append div to card

  const card = document.querySelector(".card-body");

  const heading = document.querySelector(".heading");

  card.appendChild(errorDiv);

  card.insertBefore(errorDiv, heading);

  setTimeout(errorMessage, 2000);
  document.querySelector("#loading").style.display = "none";
}

// remove error message
function errorMessage() {
  document.querySelector(".alert").remove();
}
