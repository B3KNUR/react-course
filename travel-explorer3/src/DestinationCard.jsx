export default function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.flag} alt={destination.name} className="flag-img" />
      <div>
        <h3>{destination.name}</h3>
        <p>Capital: {destination.capital}</p>
        <p>Population: {destination.population}</p>
      </div>
    </div>
  );
}
