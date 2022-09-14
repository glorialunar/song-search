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

    img{
        width: 90vw;
        border-radius: 10px;
    }
`