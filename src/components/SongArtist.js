function SongArtist({artist}) {
    // console.log(artist);
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist}/>
            <p>{artist.intBornYear}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre}</p>
            <a href={artist.strLastFMChart}>Sitio Web</a>
        </section>
    )
}

export default SongArtist;
