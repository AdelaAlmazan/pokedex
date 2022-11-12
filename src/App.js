import { useEffect, useState } from 'react';
import { LoadingPage } from './LoadingPage';
import MainPokemon from './mainPokemon';



const App = () => {

  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true)
    }, [1000])
  }, [])

  return (
    <>
      {
        isLoaded &&
        <MainPokemon/>
      }
      {
        !isLoaded &&
      <LoadingPage/>
      }
    </>

   

  );
}

export default App;