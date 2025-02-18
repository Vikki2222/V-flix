import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  return (
  <>
  <MovieCard movie={{title:"Viks film",release_date:"2024"}}></MovieCard>
  <MovieCard movie={{title:"Vik film",release_date:"2020"}}></MovieCard>
  </>
  );
}

export default App
