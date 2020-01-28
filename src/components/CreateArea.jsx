import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [writingNote, setWritingNote] = useState(false);

  function startWritingNote(){
    setWritingNote(true);
  }

  function handleTitleChange(event){
    const newTitle = event.target.value;
    setNoteTitle(newTitle);
  }

  function handleContentChange(event){
    const newContent = event.target.value;
    setNoteContent(newContent);
  }


  function createNote(event){
    event.preventDefault();
    props.addNote({
      title: noteTitle,
      content: noteContent
    });
    setNoteTitle("");
    setNoteContent("");
    setWritingNote(false);
  }

  return (
    <div>
      <form class="create-note">
        {writingNote && <input name="title" placeholder="Title" onChange={handleTitleChange} value={noteTitle} />}
        <textarea name="content" placeholder="Take a note..." rows={writingNote ? 3 : 1} onChange={handleContentChange} value={noteContent} onClick={startWritingNote}/>
        <Zoom in={writingNote}>
          <Fab aria-label="add" onClick={createNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
