//Building the Constructor Function
var Branch = function(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",];
  this.storeCookies = [];
  this.totalCookiesSold = 0;

//Obtaining a random number of customer per hour
  this.randomCustomersHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.hourlySales = function() {
    var cookiesSold =  Math.floor(this.randomCustomersHour() * this.avgSale);
    this.storeCookies.push(cookiesSold);
    this.totalCookiesSold += cookiesSold;
  };
}


var branches = [];
branches.push(new Branch("Pioneer Square", 17, 88, 5.2));
branches.push(new Branch("Portland Airport", 6, 24, 1.2));
branches.push(new Branch("Washington Square", 11, 38, 1.9));
branches.push(new Branch("Sellwood", 20, 48, 3.3));
branches.push(new Branch("Pearl District", 3, 24, 2.6));

function createTable() {
  var buildTableBody = document.getElementById("table-branches");
  var branchesRow = document.createElement("tr");
  var hoursRow = document.createElement("th");
  hoursRow.innerText = "Store Locations";
  buildTableBody.appendChild(branchesRow);
  branchesRow.appendChild(hoursRow);
  totalCookiesSold = 0;

  for (index = 0; index < branches.length; index++) {
    var columnOne = document.createElement("tr");
    buildTableBody.appendChild(columnOne);
    var storeNames = document.createElement("td");
    storeNames.innerText = branches[index].name;
    columnOne.appendChild(storeNames);

    for (hoursIndex = 0; hoursIndex < branches[index].storeHours.length + 1; hoursIndex++) {
      branches[index].hourlySales();
      buildTableBody.appendChild(columnOne);
      var cookiesData = document.createElement("td");
      cookiesData.innerText = branches[index].storeCookies[hoursIndex];
      columnOne.appendChild(cookiesData);
    }

    var totals = document.createElement("td")
    cookiesData.innerText = branches[index].totalCookiesSold
    columnOne.appendChild(cookiesData);
  }
};


createTable();
