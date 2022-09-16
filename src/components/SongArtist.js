import styles from 'styled-components';

function SongArtist({artist}) {
    // console.log(artist);
    return (
        <>
            <SongArtistContainer>
                <h3>{artist.strArtist}</h3>
                <img src={artist.strArtistThumb} alt={artist.strArtist}/>
                <p><b>Born Year: </b>{artist.intBornYear}</p>
                <p><b>Country: </b>{artist.strCountry}</p>
                <p><b>Genre: </b>{artist.strGenre}</p>
                <a href={artist.strLastFMChart}>Sitio Web</a>
            </SongArtistContainer>
        </>
    )
}

export default SongArtist;

const SongArtistContainer = styles.section`
    margin: 2rem 0;

    a{
        color: #000;
        text-decoration: none;
        background: #FFB200;
        padding: 0.3rem;
        border-radius: 0.5rem;
    }

    img{
        width: 90vw;
        border-radius: 10px;
    }

    @media(min-width: 550px){
        img{
            max-width: 400px;
        }
    }

    @media(min-width: 850px){
        margin: 0 2rem;
        img{
            max-width: 400px;
        }
    }
`