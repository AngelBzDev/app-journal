import React from "react";
import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const {notes} = useSelector(store => store.notes)

  return (
    <>
      {notes.length > 0 ? (
        <div className="journal__entries">
          {notes.map((entry) => (
            <JournalEntry key={entry} />
          ))}
        </div>
      ) : (
        <p className="message-info">Aun no tienes notas, agrega alguna 👽</p>
      )}
    </>
  );
};

export default JournalEntries;
