import { useEffect, useState } from "react";

const validCards = ['arnim', 'carnage', 'galactus', 'venom'] as const
export type CardName = typeof validCards[number]

function useCardData(
  card: CardName = new URLSearchParams(window.location.search).get('card') as CardName
) {
  const [cardData, setCardData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | false>(false)

  useEffect(() => {
    if( !card ) {
      setLoading(false)
      setError(`You didn't supply a card`)
    } else if(!validCards.includes(card)) {
      setLoading(false)
      setError(`That's not a valid option`)
    } else {
      fetch(`localdata/${card}.json`)
        .then(res => res.json())
        .then(data => {
          setCardData(data)
          setLoading(false)
          setError(false)
        })
    }
  }, [card])

  return {
    cardData,
    error,
    loading,
  }
}

export default useCardData;