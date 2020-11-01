const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.weatherCard__icon img');

const updateUi = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  // destructure properties
  const { cityDets , weather } = data;

  // update details template
  details.innerHTML = `
  <h4>${cityDets.EnglishName}</h4>
  <h6>${weather.WeatherText}</h6>
    <h6>${weather.Temperature.Metric.Value}&deg;C</h6>
  `;

  // update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  
  let timeSrc = null;

  if(weather.IsDayTime) {
    timeSrc = 'img/day.jpg';
  } else {
    timeSrc = 'img/night.jpg';
  }
  time.setAttribute('src', timeSrc);
  // remove the d-none class if present
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets,
    weather: weather
  }
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));
});