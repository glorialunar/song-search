import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

function SongDetail({search, lyric, bio}) {
    if(!lyric || !bio) return null;
    // console.log(search);
    // console.log(lyric);
    console.log(bio);

    return (
        <>
            {lyric.type === "notfound" || lyric.err || lyric.name === "AbortError" ? (
                <Message msg={`Error: no existe la canción "${search.song}"`}/>
            ) : (
                <SongLyric title={lyric.mus[0].name} lyric={lyric.mus[0].text}/>
            )}

            {bio.artists ? (
                <SongArtist artist={bio.artists[0]}/>
            ) : (
                <Message 
                    msg={`Error: no existe el artista "${search.artist}"`}
                    
                    // img={bio.artists[0].strArtistThumb}
                    // bornYear={bio.artists[0].intBornYear}
                    // country={bio.artists[0].strCountry}
                    // genre={bio.artists[0].strGenre}
                    // web={bio.artists[0].strLastFMChart}

                /> 
            )}
        </>
    )
}

export default SongDetail;
