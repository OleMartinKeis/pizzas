const myCountry = {
    country: 'Norway',
    city: 'Oslo',
    currency: 'Krone',
  };

  console.log(myCountry);

  const CountryJSON = JSON.stringify(myCountry);
  console.log(CountryJSON);
  
  const country = JSON.parse(CountryJSON);
  console.log(country)