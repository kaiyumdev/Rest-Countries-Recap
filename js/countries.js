const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}

const displayCountries = (countries) => {
// console.log(countries[0]);
const countriesHTML = countries.map (country => getCountryHTML(country));
const container = document.getElementById('countries');
container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = (country) =>{
    console.log(country);
    return`
    <div class="country">
    <h2>${country.name}</h2>
    <img src="${country.flags.png}">
    </div>
    `

}
loadCountries()