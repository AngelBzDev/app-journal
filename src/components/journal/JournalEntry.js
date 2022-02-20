import React from "react";
import { Link } from "react-router-dom";

const JournalEntry = () => {

  return (
    <Link to={`/note/${'xd'}`} className="journal__entry" >
      <div className="jornal__title-container">
        <h4>Title</h4>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis molestie enim, quis euismod mauris ultrices dictum. Donec et tempus risus. Vivamus a arcu sed nibh tristique efficitur. Vestibulum sit amet sapien vitae tellus luctus dignissim vel sodales dolor. Nulla pellentesque, elit sit amet euismod suscipit, ante magna faucibus ex, eu laoreet diam diam auctor urna. Nam mollis tempus mi, a fringilla lorem mollis ut. Sed in urna turpis. Aliquam bibendum magna a arcu rutrum, a venenatis nibh tristique. </p>
      </div>
      <p className="journal__entry-date">01/01/2022</p>
    </Link>
  );
};

export default JournalEntry;
