import { type ChangeEvent, useState } from "react";
import { v4 } from "uuid";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { PageWrapper, Controls, NotesList, NoteItem } from "./styles";
import { type Note } from "./types";

function Homework_09() {
  const [note, setNote] = useState<string>("");

  const [notes, setNotes] = useState<Note[]>([]);

  const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const addNote = (event: any) => {
    event.preventDefault();

    const newNote: Note = {
      text: note,
    };

    setNotes([...notes, newNote]);
    setNote("");
  };

  const noteItems = notes.map((item: Note) => {
    return <NoteItem key={v4()}>{item.text}</NoteItem>;
  });

  return (
    <PageWrapper onSubmit={addNote}>
      <Controls>
        <Input
          id="note-id"
          name="note"
          type="text"
          placeholder="Add note"
          label="Note"
          value={note}
          onChange={onChangeNote}
        />

        <Button name="Add" type="submit" />
      </Controls>

      <NotesList>{noteItems}</NotesList>
    </PageWrapper>
  );
}

export default Homework_09;
