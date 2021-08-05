import React from 'react'
import "./Card.css"
import typeColour from '../helpers/typeColours'

function Card(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} loading="lazy" />
      </div>

      <h2 className="card__name">{props.pokemon.name}</h2>

      <div className="card__types">
        {props.pokemon.types.map((type, i) => {
          return (
            <div className="card__type" key={i} style={{ backgroundColor: typeColour[type.type.name]}}>
              {type.type.name}
            </div>
          )
        })}
      </div>

      <div className="card__stats">
        {props.pokemon.stats.map((stat, i) => {
            switch(stat.stat.name) {
              case 'hp':
                return <div className="card__stat" key={i}><span>HP</span><span>{stat.base_stat}</span></div>
              case 'attack':
                return <div className="card__stat" key={i}><span>Attack</span><span>{stat.base_stat}</span></div>
              case 'defense':
                return <div className="card__stat" key={i}><span>Defense</span><span>{stat.base_stat}</span></div>
              case 'speed':
                return <div className="card__stat" key={i}><span>Speed</span><span>{stat.base_stat}</span></div>
              default:
                return null
            }
        })}
        <div className="card__stat"><span>Weight</span><span>{props.pokemon.weight}</span></div>
      </div>

    </div>
  )
}

export default Card