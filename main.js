var appPage =

{
  init: function () {
    appPage.initStyle();
    appPage.initEvents();

  },

  initStyle: function () {
    appPage.addSchedule();
    appPage.surveyFilter();

},

  initEvents: function () {

  },

  addSchedule: function () {
      currentMonth = moment().quarter();

        if (currentMonth === 1) {
          season = "winter";
        }
        else if (currentMonth === 2) {
          season = "spring";
        }
        else if (currentMonth === 3) {
          season = "summer";
        }
        else {
          season = "fall";
        }

      if (season==="winter") {
        var currentProducts = seasonalInfo["winter"]["N"];
      }
      else if (season==="spring") {
        var currentProducts = seasonalInfo["spring"]["Y"];
      }
      else if (season==="summer"){
        var currentProducts = seasonalInfo["summer"]["Y"];
      }
      else {
        var currentProducts = seasonalInfo["fall"]["Y"];
      }


      for (var i in currentProducts) {
        console.log(currentProducts[i]);
      }

      var newProductList = {
        // list: splitProducts
        list: currentProducts[i]
      }


    var inSeasonCompiled = _.template(templates.inSeason);
    console.log(inSeasonCompiled(newProductList));
    $(".inSeasonBoard").append(inSeasonCompiled(newProductList));

  },

  surveyFilter: function () {
  valArr = []

  // STORE LOCATION TO ARRAY
  $(".loc").click(function () {
    var searchVal0 = $(this).attr('rel');
    console.log(searchVal0);
    valArr.push(searchVal0);
  });

  // STORE SIZE TO ARRAY
  $(".count").click(function () {
    var searchVal1 = $(this).attr('rel');
    console.log(searchVal1);
    valArr.push(searchVal1);
  });

  // FIND FARMS
  $(".submitButton").click(function () {
    var findFarms = function(farmName) {

      if (csaInfo[farmName]["pickUp"].hasOwnProperty(valArr[0]) && csaInfo[farmName]["pricesPerBag"].hasOwnProperty(valArr[1])) {
        console.log(csaInfo[farmName]["farmName"]);
        console.log(csaInfo[farmName]["pricesPerBag"][valArr[1]]);
        console.log(csaInfo[farmName]["pickUp"][valArr[0]]);
        console.log(csaInfo[farmName]["organizations_url"]);

        var theFarmName =  (csaInfo[farmName]["farmName"]);
        var thePrice = (csaInfo[farmName]["pricesPerBag"][valArr[1]]);
        var theLocation = (csaInfo[farmName]["pickUp"][valArr[0]]);
        var theUrl = (csaInfo[farmName]["organizations_url"]);

        var newFarmList = {
          farm: theFarmName,
          price: thePrice,
          pickup: theLocation,
          url: theUrl
        }
        // TEMPLATES
        var farmResultsCompiled = _.template(templates.farmResults);
        console.log(farmResultsCompiled(newFarmList));
        $(".farmResults").append(farmResultsCompiled(newFarmList));
      }
    }
    findFarms("Ambrose")
    findFarms("Gruber")
    findFarms("Hudson")
    findFarms("Legare")
    findFarms("Rosebank")


  });

  }
}

$(document).ready(function() {
  appPage.init();
});
