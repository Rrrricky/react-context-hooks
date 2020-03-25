import React, { useState, useEffect } from 'react';
import NewSongForm from "./NewSongForm"

const SongList = () => {
  // useState return 2 values (1 is the data + 1 is a func to change the data)
  const [songs, setSongs] = useState([
    { title: 'Memories', id: 1 },
    { title: 'Call from the inside', id: 2 },
    { title: 'Silence', id: 3},
  ])
  const [age, setAge] = useState(20)
  // We wanna to trigger the hook only when age state (re)render
  // by specifying a second parameter
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])
  const addSong = title => {
    // Add this new state to the local state (songs)
    setSongs([...songs, { title, id: Date.now() }])
  }
  return (
    <div className="song-list">
      <ul>
        {songs.map(el => <li key={el.id}>{el.title}</li>)}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  )
};

export default SongList;
