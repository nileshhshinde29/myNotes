const myObj = data; // data is our object of values that we want to validate
const [formValues, setFormValues] = React.useState(myObj);
const [formErrors, setformErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

useEffect(() => {
  setFormValues(myObj);
}, [data]);

useEffect(() => {
  if (Object.keys(formErrors).length == 0 && isSubmit) {
    console.log("summited"); //  here write code for submit
  }
}, [formErrors]);

const AddQuestionIntoArray = (e, data) => {
  // pass this function onSubmit with paramiter Obj e,g onClick={(e)=>AddQuestionIntoArray(e, Obj)}

  e.preventDefault();
  setIsSubmit(true);
  setformErrors(validate(data));
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "question text is require";
  }
  if (!values.password) {
    errors.password = "password is require";
  }
  return errors;
};
