import React from 'react';

const Info = ({biografia}) => {
    if(Object.keys(biografia).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES} = biografia;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light front-weight-bold">
                informacion artista
            </div>
            <div className= "card-body">
                <img src={strArtistThumb} alt="Logo artista"/>
                <p className="card-text">{strGenre}</p>
                <h2 className="card-text">Biografia</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${biografia.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${biografia.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${biografia.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Info;