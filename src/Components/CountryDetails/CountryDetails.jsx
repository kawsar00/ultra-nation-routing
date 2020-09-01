import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CountryDetails = () => {
  const { countryName } = useParams()

  const [singleCountry, setSingleCountry] = useState([])
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleCountry(data[0]))

  }, [])
  const { name, capital, population, flag, area, nativeName, region } = singleCountry
  console.log(singleCountry)
   const imgStyle = {
     width: '100%',
   }
   const singleCountryStyle ={
    width: '450px',
    border: '1px solid gray',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#dcdada',
    marginBottom: '10px',
    boxShadow: '5px 5px 10px gray',
    paddingBottom: '15px',
    marginTop: '50px',
   }
  return (
    <div style = {singleCountryStyle}>
      <img style={imgStyle} src={flag} alt="" />
      <h2>{name}</h2>
      <p>Native Name: {nativeName}</p>
      <p>City: {capital}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default CountryDetails;