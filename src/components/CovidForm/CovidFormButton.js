import { Button } from "antd";
import { useDispatch } from "react-redux";
import { OPEN_COVID_FORM } from "../../constants";
import { ESP } from "../../constants/idioms";

const CovidFormButton = ({ currentIdiom }) => {
  const dispatch = useDispatch();

  const open = () => dispatch({ type: OPEN_COVID_FORM });

  return (
    <Button onClick={open}>
      <img
        alt="covid-imagen"
        style={{ width: "20px", marginRight: 5 }}
        src={process.env.PUBLIC_URL + "/virus.svg"}
      />
      {currentIdiom === ESP ? "Formulario Covid-19" : "Form Covid-19"}
    </Button>
  );
};
export default CovidFormButton;
