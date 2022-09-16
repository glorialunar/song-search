import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import styles from 'styled-components';

function SongDetail({search, lyric, bio}) {
    if(!lyric || !bio) return null;
    // console.log(search);
    // console.log(lyric);
    console.log(bio);

    return (
        <>
            <SongDetailsContainer>
                {lyric.type === "song_notfound" || lyric.err || lyric.name === "AbortError" || bio.artists === null || bio.err ? (
                    <Message msg={`Error: no existe la canción "${search.song}" del artista "${search.artist}"`}/> 
                ) : (
                    <>
                        <SongArtist artist={bio.artists[0]}/>
                        <SongLyric title={lyric.mus[0].name} lyric={lyric.mus[0].text}/>
                    </>
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
