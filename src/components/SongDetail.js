import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import styles from 'styled-components';

function SongDetail({search, lyric, bio}) {
    if(!lyric || !bio) return null;
    // console.log(search);
    console.log(lyric);
    // console.log(bio);

    return (
        <>
            <SongDetailsContainer>
                {lyric.type === "song_notfound" || lyric.err || lyric.name === "AbortError" ? (
                    <Message className="error" msg={`Error: no existe la canción "${search.song}"`}/>
                ) : (
                    <SongLyric title={lyric.mus[0].name} lyric={lyric.mus[0].text}/>
                )}

                {bio.artists === null || bio.err || bio.name === "AbortError" ? (
                    <Message className="error" msg={`Error: no existe el artista "${search.artist}"`}/> 
                ) : (
                    <SongArtist artist={bio.artists[0]}/>
                )}
            </SongDetailsContainer>
        </>
    )
}

export default SongDetail;

const SongDetailsContainer = styles.div`
    width: 90vw;
    margin: 0 auto;

    @media(min-width: 850px){
        display: flex;
        justify-content: center;
    }
`
