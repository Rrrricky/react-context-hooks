import React, {useState} from 'react';

const NewSongForm = ({ addSong }) => {
  // 1. Set a local empty state with hooks
  const [title, setTitle] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    // 3. Send it to the addSong prop
    addSong(title)
    setTitle('')
  }
  return (
    <form onSubmit={(handleSubmit)}>
      <label htmlFor="title">Song name</label>
      {/* 2. onChange: add e.target.value to the localState title */}
      <input id="title" type="text" value={title} required onChange={e => setTitle(e.target.value)} />
      <input type="submit" value="Add a song"/>
    </form>
  )
}

export default NewSongForm;
