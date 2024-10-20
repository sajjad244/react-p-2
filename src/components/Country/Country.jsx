import {useState} from "react";
import "./Country.css";
const Country = ({country, handleVisitedCountry}) => {
  const {name, flags, population, area, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country  ${visited && "visited"}`}>
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited} className="btn">
        {visited ? "visited" : "Going"}
      </button>
      {visited ? "I have visited this Country" : "I want to visit"}
      <br />
      <br />
      <button onClick={() => handleVisitedCountry(country)} className="btn">
        Mark visited
      </button>
    </div>
  );
};

export default Country;
