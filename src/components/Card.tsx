import { Variant, Character } from 'utils/types';
import './Card.css'

interface CardProps {
  character: Character;
  variant: Variant;
}

const CARD_LOCATION = `cards`

function Card({ character, variant }: CardProps) {
  function getCardLocation() {
    return `${process.env.PUBLIC_URL}/${CARD_LOCATION}/${variant}-${character}.png`
  }
  
  return (
    <div className="card-container">
      <img className="card" src={getCardLocation()} alt={`${variant}_${character}`} loading="lazy" />
    </div>
  )
}

export default Card;