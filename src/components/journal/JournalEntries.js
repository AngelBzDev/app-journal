import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [45, 21, 47, 78, 28];

  return (
    <>
      {entries.length > 0 ? (
        <div className="journal__entries">
          {entries.map((entry) => (
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
