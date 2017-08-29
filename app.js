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
    for (var index = 0; index < this.storeHours.length; index++){
    this.storeCookies.push(this.randomCustomersHour());
    }
  };
  this.totalCookiesSold = function() {
    var Total = 0;
    for (var index = 0; index < this.storeCookies.length; index++) {
      Total += this.storeCookies[index];
    }
      return Total;
  };
};

var pioneer = new Branch("Pioneer Square", 17, 88, 5.2);
var airport = new Branch("Portland Airport", 6, 24, 1.2);
var washington = new Branch("Washington Square", 11, 38, 1.9);
var sellwood = new Branch("Sellwood", 20, 48, 3.3);
var pearl = new Branch("Pearl District", 3, 24, 2.6);
var Branches = [];



function getTableRowInfo() {
  var buildTableBody = document.getElementById("table-branches");
  var row = document.createElement("tr");
  var openHours = document.createElement("th");
    openHours.innerText = "Store Locations";
    row.appendChild(openHours);
    buildTableBody.appendChild(row);
    totalCookiesSold = 0;

  for (lugar = 0; lugar < Branches.length; lugar++) {
    var tr = document.createElement("tr");
    var td = document.createElement("th");
    td.innerText = Branches[lugar].name;
    tr.appendChild(td)

  for (times = 0; times < storeHours.length; times++) {
    if(lugar == 0) {
    hours = document.createElement("th");
    hours.innerText = storeHours[times];
    row.appendChild(hours);
  }
  var cookieData = document.createElement("td");
  cookieData.innerText = Branches[lugar].cookiesSoldHour();
  tr.appendChild(cookieData);
  buildTableBody.appendChild(tr);

  Branches[lugar].totalCookiesSold += cookieData;
  console.log(totalCookiesSold)
}

  if (lugar == 0){
    var grandTotalColumn = document.createElement("th");
    grandTotalColumn.innerText = "Total";
    row.appendChild(grandTotalColumn);
  }

  var grandTotalData = document.createElement("td");
  grandTotalData.innerText = Branches[lugar].totalCookiesSold;
  tr.appendChild(grandTotalData);
  buildTableBody.appendChild(tr);
  }
}

getTableRowInfo();
