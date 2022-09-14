function SongLyric({title, lyric}) {
    return (
        <section>
            <h3>Song: {title}</h3>
            <blockquote style={{whiteSpace: "pre-wrap"}}>{lyric}</blockquote> 
        </section>
    )
}

export default SongLyric;

