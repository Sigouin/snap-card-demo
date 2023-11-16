import 'App.css';
import Card from 'components/Card';
import useCardData from 'utils/useCardData';

function App() {  
  const {cardData, error, loading} = useCardData();

  return (
    <div className="App">
      {
        loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">{`${error}...`}</h1>
            <img src={`${process.env.PUBLIC_URL}/errorgif.gif`} alt="ya dingus" />
          </div>
        ) : (
          <ul className="flex flex-wrap">
            {
              cardData.variants.map(({imageUrl, imageComponents, variantLabel}: any) => {
                const label = variantLabel || 'Base';
                return (
                  <li className="relative flex justify-center items-center" key={label}>
                    <strong className="variant-label absolute text-6xl text-white stroke-black z-10">{label}</strong>
                    <Card preview={imageUrl} components={imageComponents} variant={label || 'base'} />
                  </li>
                )
              })
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;