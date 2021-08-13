import { useSelector } from "react-redux";
import { getCovidForm, getCurrentIdiom } from "../../store/selectors";
import { Divider, Form, Modal, notification } from "antd";
import { CLOSE_COVID_FORM } from "../../constants";
import { useDispatch } from "react-redux";
import { FlexSpace } from "./styles";
import { ESP } from "../../constants/idioms";
import StepsForm from "./StepsForm";
import { CancelButton, SubmitButton } from "../FormComponents";
import moment from "moment";
import { useState } from "react";
import { sendMail } from "../../actions/emailAction";
import { renderToString } from "react-dom/server";

moment.locale("es");

const CovidForm = () => {
  const { show } = useSelector(getCovidForm) || {};

  const currentIdiom = useSelector(getCurrentIdiom);

  const [image, setimage] = useState();

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const getBase64FromUrl = async (url, name, type) => {
    const docdata = await fetch(url);
    const blob = await docdata.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result;
        setimage(base64data);
        notification["success"]({
          message:
            currentIdiom.value === ESP
              ? "Imagen guardada correctamente"
              : "Image saved successfully",
        });
      };
    });
  };

  const onChange = async (file) => {
    try {
      let doc = file.target.files[0];
      const blob = new Blob([doc], { type: doc.type });
      const docURL = URL.createObjectURL(blob);
      await getBase64FromUrl(docURL, doc.name, doc.type);
    } catch {}
  };

  const onFinish = async (dataForm) => {
    //await dispatch(createCovidForm(dataForm));
    console.log({ ...dataForm, image });
    dispatch(sendMail(renderToString(<div>p</div>)));
    dispatch({ type: CLOSE_COVID_FORM });
  };

  const handleOnFailed = async () => {
    notification["error"]({
      message:
        currentIdiom.value === ESP
          ? "Faltan campos por rellenar"
          : "Missing fields to fill",
    });
  };

  const cancel = () => {
    dispatch({ type: CLOSE_COVID_FORM });
  };

  return (
    <Modal
      title={currentIdiom.value === ESP ? "FORMULARIO COVID" : "COVID FORM"}
      visible={show}
      {...mdlProps}
    >
      <Form
        form={form}
        onFinishFailed={handleOnFailed}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ numGuestsInput: 0, rentalDateInput: moment() }}
      >
        <StepsForm form={form} onChange={onChange}></StepsForm>
        <Divider></Divider>
        <FlexSpace style={{ justifyContent: "flex-end" }}>
          <CancelButton onClick={cancel}></CancelButton>
          <SubmitButton
            text={
              currentIdiom.value === ESP ? "ENVIAR FORMULARIO" : "SEND FORM"
            }
          />
        </FlexSpace>
      </Form>
    </Modal>
  );
};
export default CovidForm;
const mdlProps = {
  closable: false,
  footer: null,
  forceRender: true,
  width: "1200px",
};
