const React = require('react'); // bring in React
const { useState, useEffect } = React; // we now have the power to change the state (variables stored by site)
const { createRoot } = require('react-dom/client'); // select what we need from React - DOM Client

const SongContainer = (props) => {
    const [ songs, setSongs ] = useState(props.songs);
    // data, method to call to change value of data
    const [reload, setReload] = useState(false);

    // wrap in a magical little container box
    useEffect(()=>{
        const loadSongsFromServer = async () => {
            console.log('Loading Songs!');
            const response = await fetch('/getSongs');
            const data = await response.json();
            setSongs(data);
        }

        loadSongsFromServer();
    },[reload]);
    // [] - empty dependency array - this ends the loop of calling!
    // dependency = run when...

    // if no songs
    if(songs.length === 0){
        return (
            <>
                <h3>no songs found</h3>
            </>
        );
    }

    const songList = songs.map( (song) => {
        return (
            <div key={song.title}>
                <h2><i>{song.title}</i> - {song.artist}</h2>
            </div>
        );
    });

    // else print songs
    return (
        <div>
            <h1>My favorite banjo ballad:</h1>
            <button onClick={()=>setReload(!reload)}>re-load songs</button>
            {songList}
        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />)
}

window.onload = init;