import './DestinationCard.css'

function DestinationCard({ country }) {
  return (
    <div className="card">
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  )
}

export default DestinationCard
