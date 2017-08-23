var Branch = function(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",];
  this.storeCookies = [];
  this.totalCookiesSold = 0;
  this.randomCustomersHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.hourlySales = function() {
    return Math.floor(this.randomCustomersHour() * this.avgSale);
  };
  this.cookiesSoldHour = function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  };
  this.displayCookies = function() {
    var display = document.getElementById("display-pioneer");
    display.innerHTML = "<h3>" + this.name + "</h3>";
    display.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
    display.innerHTML += "Total: " + this.totalCookiesSold();
  };
  this.totalCookiesSold = function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  };
};

function cookiesSoldHourly() {
  var Total = 0;
  var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
  var storeCookies = [];
  for (var index = 0; index < this.storeHours.length; i++){
    storeCookies += storeHours[index];
    storeCookies.push(this.hourlySales())
  }
}


var pioneer = new Branch("Pioneer Square", 17, 88, 5.2);
var airport = new Branch("Portland Airport", 6, 24, 1.2);
var washington = new Branch("Washington Square", 11, 38, 1.9);
var sellwood = new Branch("Sellwood", 20, 48, 3.3);
var pearl = new Branch("Pearl District", 3, 24, 2.6);


pioneer.cookiesSoldHour();
pioneer.displayCookies();
airport.cookiesSoldHour();
airport.displayCookies();
washington.cookiesSoldHour();
washington.displayCookies();
sellwood.cookiesSoldHour();
sellwood.displayCookies();
pearl.cookiesSoldHour();
pearl.displayCookies();


// --------------------
// function addListItem(contentToAdd, itemName = "li") {
//   var listToUse = document.getElementById("example-list");
//   var cookieStandItem = document.createElement(itemName);
//   cookieStandItem.innerText = contentToAdd;
//   listToUse.appendChild(cookieStandItem);
// }
//
// var cookieStore = [];
// cookieStore.push();
//
// for (storeIndex = 0; storeIndex < cookieStore.length; storeIndex++) {
//   addListItem("Cookies Store Name");
//   addListItem("- more data here -");
//   addListItem("Total: ###");
// }
// ------------------------
