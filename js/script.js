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
const $recovered = $('#recovered')
const $population = $('#population')
const $input = $('#insert');

// event listeners

$('form').on('submit', handleSubmit);

// functions

function handleSubmit (ga) {
    ga.preventDefault();

    const term = $input.val();

    $input.val("");

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
        $recovered.text(covidData.All.recovered);
        $population.text(covidData.All.population);
    }
}
}); // IIFE closing statement