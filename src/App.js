import React, {useState, useEffect} from 'react'
import { getAllPokemon, getPokemon } from './services/pokemon'
import Header from './components/Header'
import Nav from './components/Nav'
import Card from './components/Card'
import './App.css';

function App() {

  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [isloading, setIsLoading] = useState('true')
  const pokemonPerPage = 14
  const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}`

  // get initial list of pokemon
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl)
      setNextUrl(response.next)
      setPrevUrl(response.previous)
      await loadingPokemon(response.results)
      setIsLoading(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData)
  }

  const next = async () => {
    setIsLoading(true)
    let response = await getAllPokemon(nextUrl)
    await loadingPokemon(response.results)
    setNextUrl(response.next)
    setPrevUrl(response.previous)
    setIsLoading(false)
  }

  const prev = async () => {
    setIsLoading(true)
    let response = await getAllPokemon(prevUrl)
    await loadingPokemon(response.results)
    setNextUrl(response.next)
    setPrevUrl(response.previous)
    setIsLoading(false)
  }

  return (
    <div className="App">
      <Header />
      <Nav next={next} prev={prev} />
      {
        isloading ? <h1 className="loading">Loading</h1> : (
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>
        )
      }

    </div>
  );
}

export default App