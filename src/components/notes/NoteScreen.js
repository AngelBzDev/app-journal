import React from "react";
import ButtonRound from "../buttons/ButtonRound";

import { FaCoins, FaRegSave } from "react-icons/fa";
import Sidebar from "../journal/Sidebar";
import OptionsBar from "./OptionsBar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startAddNewNote } from "../../actions/notes";
import useForm from "../../hooks/useForm";
import swal from "sweetalert";

//TODO Hacer el dispatch de la nota activa
const NoteScreen = () => {

  const params = useParams();
  const {noteId} = params

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    title: "",
    body: "",
  });
  const { title, body } = formValues;

  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch(startAddNewNote(formValues));
    swal({
      title: "Wow!",
      text: "Nota creada correctamente",
      icon: "success",
    }).then(ok => ok && navigate('/'))
  };

  const handleUpdateNote = (e) => {
    e.preventDefault()
    console.log('update')
  }

  return (
    <>
      <Sidebar />
      <OptionsBar />
      <div className="container">
        <form className="notes__content">
          <div className="notes__text">
            <input
              type="text"
              className="notes__title-input"
              autoComplete="off"
              placeholder="Titulo"
              name="title"
              onChange={handleInputChange}
              value={title}
            />
            <textarea
              className="notes__textarea"
              placeholder="Escriba aqui"
              name="body"
              onChange={handleInputChange}
              value={body}
            ></textarea>
          </div>
          <div className="notes__image">
            <img
              src="https://play-lh.googleusercontent.com/40I0MAr1getFF-dLOzxekLi2_C3MC_u0HL2gmqNbXNWy32n9Bo3XIz2YYlAutfCT8aw"
              alt="iamgen random"
            />
          </div>
          <ButtonRound
            type={"submit"}
            nameClass="btn-newEntry"
            onClick={!!noteId ? handleUpdateNote : handleAddNote}
          >
            <FaRegSave size={"2rem"} />
          </ButtonRound>
        </form>
      </div>
    </>
  );
};

export default NoteScreen;
