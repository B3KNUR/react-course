import './App.css'
import DestinationsList from './components/DestinationsList/DestinationsList'

function App() {
  return (
    <div className="app">
      <h1>Travel Explorer</h1>
      <p>Find new places and have fun!</p>

      <section className="about">
        <h2>About us</h2>
        <p>
          Welcome to Travel Explorer! Here you can check out countries and learn 
          something interesting about them.
        </p>
      </section>

      <section className="explore">
        <h2>Explore destinations</h2>
        <DestinationsList />
      </section>

      <section className="contact">
        <h2>Contact us</h2>
        <ul>
          <li>Email: travel.explorer.team@gmail.com</li>
          <li>Instagram: @travel_explorer</li>
          <li>Telegram: @travel_explorer_team</li>
          <li>Phone: +7 (777) 123-45-67</li>
        </ul>
      </section>

      <footer className="footer">
        © 2025 Travel Explorer
      </footer>
    </div>
  )
}

export default App
