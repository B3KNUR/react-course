import { useState } from 'react'
import DestinationCard from '../DestinationCard/DestinationCard'
import './DestinationsList.css'

function DestinationsList() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  function loadCountries() {
    setLoading(true)
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags')
      .then(res => res.json())
      .then(data => {
        const small = data.slice(0, 10).map(c => ({
          name: c.name.common,
          capital: c.capital ? c.capital[0] : 'No capital',
          population: c.population,
          flag: c.flags.png
        }))
        setCountries(small)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dest-list">
      <div className="buttons">
        <button onClick={loadCountries} disabled={loading}>
          {loading ? 'Loading...' : 'Load countries'}
        </button>

        {countries.length > 0 && (
          <>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={() => setSearch('')}>Clear</button>
          </>
        )}
      </div>

      {filtered.length > 0 ? (
        <ul className="country-list">
          {filtered.map((c, i) => (
            <li key={i}>
              <DestinationCard country={c} />
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>{search ? 'Nothing found' : 'Click load to see countries'}</p>
      )}
    </div>
  )
}

export default DestinationsList
