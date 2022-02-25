import React from "react";
import { Link } from "react-router-dom";

const JournalEntry = ({title, body}) => {

  return (
    <Link to={`/note/${'xd'}`} className="journal__entry" >
      <div className="jornal__title-container">
        <h4>{title}</h4>
        <div
          className="journal__entry-img"
          style={{
            background:
              "url(https://play-lh.googleusercontent.com/40I0MAr1getFF-dLOzxekLi2_C3MC_u0HL2gmqNbXNWy32n9Bo3XIz2YYlAutfCT8aw)",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="journal__entry-body">
          <p>{body}</p>
      </div>
      <p className="journal__entry-date">01/01/2022</p>
    </Link>
  );
};

export default JournalEntry;
