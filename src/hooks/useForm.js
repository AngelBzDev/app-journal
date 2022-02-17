import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleInputChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  return [formValues, handleInputChange];
};

export default useForm;
