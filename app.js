var branches = [];

// function branches(minCust, maxCust, avgSale) {
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgSale = avgSale;
//   this.hoursStore = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"],
// };

var pioneer = {
  name: "Pioneer Square",
  minCust:17,
  maxCust:88,
  avgSale:5.2,
  storeHours: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",],
  storeCookies: [],
  totalCookiesSold: 0,

//Generate a random number of customers per hour using math.random
  randomCustomersHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
},

//Calculate number of cookies sold per hour using avgSale and randomCustomersHour
//   hourlySales: function() {
//     for (var i = 0; i < this.storeHours.length; i++) {
//       var cookiesSoldHour = Math.floor(this.avgSale * this.randomCustomersHour());
//       this.totalCookiesSold.push(cookiesSoldHour);
//     }
// },

  hourlySales: function() {
    return (this.randomCustomersHour() * this.avgSale);
},
  cookiesSoldHour: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  },

//Show results as an unordered list in the browser
  displayCookies: function() {
    var display = document.getElementById("display-pioneer");
    display.innerHTML = "<h3>" + this.name + "</h3>"
    display.innerHTML += "<ul>"
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
  },

  totalCookiesSold: function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  },

};


var airport = {
    name: "Pioneer Square",
    minCust:17,
    maxCust:88,
    avgSale:5.2,
    hoursStore: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"],
    storeCookies: [],
    totalCookiesSold: 0,
}

var washington = {
  mincust:11,
  maxcust:38,
  avgsale:1.9,
}

var sellwood = {
  mincust:20,
  maxcust:48,
  avgsale:3.3,
}

var pearl = {
  mincust:3,
  maxcust:24,
  avgsale:2.6,
}




this.pioneer.displayCookies();
