import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
  //code for explore more button
  let history = useHistory();
  function handleClick(countryName) {
    history.push(`/country/${countryName}`);
  }
  const { name, capital, population } = props.country
  const countryStyle = {
    width: '450px',
    border: '1px solid gray',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#dcdada',
    boxShadow: '5px 5px 10px gray',
    paddingBottom: '15px',
    marginTop: '30px',
  }
  return (
    <div style={countryStyle}>
      <h2>{name}</h2>
      <p>City: {capital}</p>
      <p>Population: {population}</p>
      <button onClick={() => {handleClick(name)}}>Explore More</button> <br/> <br/>
      <span><Link to={`/country/${name}`}>Click for details</Link></span>
    </div>
  );
};

export default Country;