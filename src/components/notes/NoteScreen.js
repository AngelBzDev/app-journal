import React from "react";
import ButtonRound from "../buttons/ButtonRound";

import { FaRegSave } from "react-icons/fa";
import Sidebar from "../journal/Sidebar";
import OptionsBar from "./OptionsBar";
/* import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
 */
const NoteScreen = () => {
  /* const dispatch = useDispatch(); */
  /* const [formValues, handleInputChnage] = useForm({
    title: "",
    body: "",
  }); */

  

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
              /* onChange={handleInputChnage} */
            />
            <textarea
              className="notes__textarea"
              placeholder="Escriba aqui"
              name="body"
              /* onChange={handleInputChnage} */
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
            /* onClick={handleAddNote} */
          >
            <FaRegSave size={"2rem"} />
          </ButtonRound>
        </form>
      </div>
    </>
  );
};

export default NoteScreen;
