// IIFE statement

$(function () {

// state variable

let covidData;

// constant

const BASE_URL = "https://covid-api.mmediagroup.fr/v1/cases?country=";

// selected DOM elements

const $country = $('#country');
const $deaths = $('#deaths');
const $confirmed = $('#confirmed')
const $capital_city = $('#recovered')
const $population = $('#population')
const $input = $('#insert');

// event listeners

$('form').on('submit', handleSubmit);

// functions

function handleSubmit (ga) {
    ga.preventDefault();

    let term = $input.val();
   
    term = term.toLowerCase();

    term = term.charAt(0).toUpperCase() + term.slice(1);

    $input.val("");
    // console.log(term); testing

    $.ajax(BASE_URL + term)
    .then(function(data) {
        // console.log('covid 19 data ', data); for debugging purposes
        covidData = data;
        render();
    }, function(error) {
        // console.log('error', error); for debugging purposes
    });
    }     


function render() {
    if(covidData) {
        $country.text(covidData.All.country);
        $deaths.text(covidData.All.deaths);
        $confirmed.text(covidData.All.confirmed);
        $capital_city.text(covidData.All.capital_city);
        $population.text(covidData.All.population);
    }
}
}); // IIFE closing statement
