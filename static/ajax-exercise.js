"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', function (results) {$('#fortune-text').html(results); })
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, getForecast);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);


function getForecast(result) {

    $('#weather-info').html(result["forecast"]);
}


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    
    let params = {'qty': $('#qty-field').val(),
                  'melon_type': $('#melon-type-field').val()};
    
    $.post('/order-melons.json', params, orderResult);
}

function orderResult(results) {
    let code = results["code"];
    let msg = results["msg"];
    
    if (code === "ERROR") {
        $('#order-status').addClass('order-error');
    } else {
        $('#order-status').removeClass('order-error');
    }

    $('#order-status').html(msg);

}


$("#order-form").on('submit', orderMelons);


