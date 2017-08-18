// var branches = [];
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
  hourlySales: function() {
    return Math.floor(this.randomCustomersHour() * this.avgSale);
},
  cookiesSoldHour: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  },

//Show results as an unordered list in the browser
  displayCookies: function() {
    var display = document.getElementById("display-pioneer");
    display.innerHTML = "<h3>" + this.name + "</h3>";
    display.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
    display.innerHTML += "Total: " + this.totalCookiesSold();
  },

//Obtain total cookies sold a day for each store branch
  totalCookiesSold: function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  },
};

var airport = {
  name: "Portland Airport",
  minCust:6,
  maxCust:24,
  avgSale:1.2,
  storeHours: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",],
  storeCookies: [],
  totalCookiesSold: 0,

//Generate a random number of customers per hour using math.random
  randomCustomersHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
},

// //Calculate number of cookies sold per hour using avgSale and randomCustomersHour
  hourlySales: function() {
    return Math.floor(this.randomCustomersHour() * this.avgSale);
},
  cookiesSoldHour: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  },

//Show results as an unordered list in the browser
  displayCookies: function() {
    var display = document.getElementById("display-airport");
    display.innerHTML = "<h3>" + this.name + "</h3>";
    display.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
    display.innerHTML += "Total: " + this.totalCookiesSold();
  },

//Obtain total cookies sold a day for each store branch
  totalCookiesSold: function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  },
};

var washington = {
  name: "Washington Square",
  minCust:6,
  maxCust:24,
  avgSale:1.2,
  storeHours: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",],
  storeCookies: [],
  totalCookiesSold: 0,

//Generate a random number of customers per hour using math.random
  randomCustomersHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
},

// //Calculate number of cookies sold per hour using avgSale and randomCustomersHour
  hourlySales: function() {
    return Math.floor(this.randomCustomersHour() * this.avgSale);
},
  cookiesSoldHour: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  },

//Show results as an unordered list in the browser
  displayCookies: function() {
    var display = document.getElementById("display-washington");
    display.innerHTML = "<h3>" + this.name + "</h3>";
    display.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
    display.innerHTML += "Total: " + this.totalCookiesSold();
  },

//Obtain total cookies sold a day for each store branch
  totalCookiesSold: function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  },
};


var sellwood = {
  name: "Sellwood",
  minCust:6,
  maxCust:24,
  avgSale:1.2,
  storeHours: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",],
  storeCookies: [],
  totalCookiesSold: 0,

//Generate a random number of customers per hour using math.random
  randomCustomersHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
},

// //Calculate number of cookies sold per hour using avgSale and randomCustomersHour
  hourlySales: function() {
    return Math.floor(this.randomCustomersHour() * this.avgSale);
},
  cookiesSoldHour: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  },

//Show results as an unordered list in the browser
  displayCookies: function() {
    var display = document.getElementById("display-sellwood");
    display.innerHTML = "<h3>" + this.name + "</h3>";
    display.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
    display.innerHTML += "Total: " + this.totalCookiesSold();
  },

//Obtain total cookies sold a day for each store branch
  totalCookiesSold: function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  },
};


var pearl = {
  name: "Pearl District",
  minCust:6,
  maxCust:24,
  avgSale:1.2,
  storeHours: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",],
  storeCookies: [],
  totalCookiesSold: 0,

//Generate a random number of customers per hour using math.random
  randomCustomersHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
},

// //Calculate number of cookies sold per hour using avgSale and randomCustomersHour
  hourlySales: function() {
    return Math.floor(this.randomCustomersHour() * this.avgSale);
},
  cookiesSoldHour: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.hourlySales());
    }
  },

//Show results as an unordered list in the browser
  displayCookies: function() {
    var display = document.getElementById("display-pearl");
    display.innerHTML = "<h3>" + this.name + "</h3>";
    display.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      display.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + "</li>"
    }
    display.innerHTML += "</ul>"
    display.innerHTML += "Total: " + this.totalCookiesSold();
  },

//Obtain total cookies sold a day for each store branch
  totalCookiesSold: function () {
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
    }
    return Total;
  },
};


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
