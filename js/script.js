// state variable

let covidData;

// constant

const BASE_URL = "https://covid-api.mmediagroup.fr/v1/cases?country=";

// selected DOM elements

const $country = $('#country');
const $deaths = $('#deaths');

const $input = $('#insert');


$('form').on('submit', handleSubmit);

// functions

function handleSubmit (ga) {
    ga.preventDefault();

    const term = $input.val();

    $input.val("");

    $.ajax(BASE_URL + term)
    .then(function(data) {
        console.log('covid 19 data ', data);
        covidData = data;
        render();
    }, function(error) {
        console.log('error', error);
    });
    }     


function render() {
    if(covidData) {
        $country.text(covidData.All.country);
        $deaths.text(covidData.All.deaths);
        
    }
}