import React, { useState } from 'react';

const SongList = () => {
  // useState return 2 values (1 is the data + 1 is a func to change the data)
  const [songs, setSongs] = useState([
    { title: 'Memories', id: 1 },
    { title: 'Call from the inside', id: 2 },
    { title: 'Silence', id: 3},
  ])
  const addSong = () => {
    setSongs([...songs, { title: 'New song', id: Date.now() }])
  }
  return (
    <div className="song-list">
      <ul>
        {songs.map(el => <li key={el.id}>{el.title}</li>)}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  )
};

export default SongList;
