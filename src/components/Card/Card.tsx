import './Card.css'

interface Coordinates {
  x: number,
  y: number
}

interface Override {
  layer?: number,
  offset?: Coordinates,
  scale?: number,
  objectFit?: any,
  rotate: number,
  alpha?: number
}

interface Layer {
  layerNumber: number,
    textureUrl: string,
    scale?: Coordinates,
    offset?: Coordinates,
    alpha: number,
    angle: number,
    override?: Override
}

interface ForegroundLayer {
  layerNum: number,
  textureUrl: string
}

interface ImageComponents {
  foregroundScreenUrl: string,
  renderForegroundOverPowerCost: true,
  logoUrl: string,
  isCompositeFoilMaskLayer2: false,
  backgroundMaterial: {
      layers: Layer[],
      angle: number,
      offset: Coordinates,
      scale: Coordinates,
      override: Override
  },
  foregroundLayers: ForegroundLayer[]
}

interface CardProps {
  components: ImageComponents;
  preview: string;
  variant: string;
}

function Card({ components, preview, variant }: CardProps) {
  return (
    <img className="card" src={preview} alt={variant} loading="lazy" />
  )
}

export default Card;