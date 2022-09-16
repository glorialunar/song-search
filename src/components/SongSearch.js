import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import SongDetail from './SongDetail';
import SongForm from './SongForm';

function SongSearch() {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        setSearch(data);
    }

    // console.log(search);
    useEffect(() => {
        if(search === null) return;

        const fetchData = async() => {
            const { artist, song } = search;
            const API_ARTIST = process.env.REACT_APP_API_ARTIST;
            const TOKEN_API_SONG = process.env.REACT_APP_API_TOKEN_SONG;
            const API_SONG = process.env.REACT_APP_API_SONG;

            let artistURL = `${API_ARTIST}${artist}`;
            let songURL = `${API_SONG}${artist}&mus=${song}&apikey=${TOKEN_API_SONG}`;
     
            setLoading(true);

            const [artistResp, songResp] = await Promise.all([
                helpHttp().get(artistURL),
                helpHttp().get(songURL)
            ]);

            // console.log(artistResp);
            // console.log(songResp);

            setBio(artistResp);
            setLyric(songResp);
            setLoading(false);
        }

        fetchData();
    }, [search])

    return (
        <>
            <h1>Song Search</h1>
            {loading && <Loader/>}
            <SongForm handleSearch={handleSearch}/>
            {search && !loading && <SongDetail search={search} lyric={lyric} bio={bio}/>}
        </>
    )
}

export default SongSearch;
