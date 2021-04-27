import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {

  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [biografia, setBiografia] = useState({});

  useEffect(()=>{
    if(Object.keys(busquedaletra) === 0) return;

    const consultaAPILetra = async() => {
      const {artista, cancion} = busquedaletra;
  
      const url_letra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      
      const url_artista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}
      `;

      const [letra, informacion] = await Promise.all([
        axios(url_letra),
        axios(url_artista)
      ]);

      setBiografia(informacion.data.artists[0]);
      setLetra(letra.data.lyrics);
      
      //setLetra(resultado.data.lyrics;
    }

    consultaAPILetra()
  },[busquedaletra,biografia]);

  

  return (
    <div>
      <Fragment>
          <Formulario
            setBusquedaLetra = {setBusquedaLetra}
          />
      </Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              biografia={biografia}
            />
          </div>
          <div className="col-md-6">
            <Cancion  
              letra={letra}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
