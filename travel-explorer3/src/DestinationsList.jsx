import { useState } from 'react';
import DestinationCard from './DestinationCard';
import './DestinationsList.css';

export function DestinationsList() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags')
      .then(res => res.json())
      .then(data => {
        const limited = data.slice(0, 10).map(c => ({
          name: c.name.common,
          capital: c.capital ? c.capital[0] : 'No capital',
          population: c.population,
          flag: c.flags.png
        }));
        setDestinations(limited);
      })
      .catch(() => {
        console.log('Could not load data');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="destinations-list-container">
      <button onClick={loadData} disabled={loading} className="load-button">
        {loading ? 'Loading' : 'Load Countries'}
      </button>

      {destinations.length > 0 ? (
        <ul className="destinations-ul">
          {destinations.map((item, i) => (
            <li key={i}>
              <DestinationCard destination={item} />
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p className="no-data">Press the button to see countries</p>
      )}
    </div>
  );
}
