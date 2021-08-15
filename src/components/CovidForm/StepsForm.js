import { Button, Steps, Tabs, Form, Space, Divider } from "antd";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { ESP } from "../../constants/idioms";
import { getCurrentIdiom } from "../../store/selectors";
import { CovidFormWrapper, FlexSpace } from "./styles";
import {
  LeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {
  ArribalDateInput,
  ArribalVillaDateInput,
  CountrySelector,
  DateOfBirthInput,
  DepartureDateInput,
  DepartureVillaDateInput,
  DirectionInput,
  EmailInput,
  NameInput,
  NumDepartureFlightInput,
  NumFlightInput,
  NumGuestsInput,
  PassportInput,
  PetTypeInput,
  PostalCodeInput,
  RentalDateInput,
  SurnameInput,
  SwimInput,
  TelefonInput,
} from "../FormComponents";
import { useRef } from "react";

const StepsForm = ({ form, onChange, currentStep, setCurrentStep }) => {
  const { Step } = Steps;

  const { TabPane } = Tabs;

  const currentIdiom = useSelector(getCurrentIdiom);

  const inputPhoto = useRef(null);

  const rules = [
    {
      required: true,
      message:
        currentIdiom.value === ESP
          ? "⚠️ Campo requerido. ⚠️"
          : "⚠️ Required field. ⚠️",
    },
  ];

  return (
    <Fragment>
      <Steps current={currentStep} style={{ marginBottom: 15 }}>
        <Step title="CHECKIN"></Step>
        <Step title="COVID QR"></Step>
        <Step title={currentIdiom.value === ESP ? "NIÑOS" : "CHILDREN"}></Step>
        <Step title={currentIdiom.value === ESP ? "MASCOTAS" : "PETS"}></Step>
        <Step title="CHECKOUT" />
        <Step
          title={currentIdiom.value === ESP ? "MÁS INFORMACIÓN" : "MORE INFO"}
        ></Step>
      </Steps>

      <Tabs activeKey={currentStep + ""} style={{ height: "53vh" }}>
        <TabPane tab="Tab 1" key={0}>
          <FlexSpace>
            <RentalDateInput
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP ? "Fecha de alquiler" : "Rental date"
              }
              rules={rules}
            ></RentalDateInput>
            <ArribalVillaDateInput
              placeholder={
                currentIdiom.value === ESP
                  ? "Seleccionar fecha y hora de llegada a la villa"
                  : "Select date and time of arrival at the villa"
              }
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP
                  ? "Fecha y hora de llegada a la villa"
                  : "Arrival date and time at the villa"
              }
              rules={rules}
            ></ArribalVillaDateInput>
            <NumGuestsInput
              label={
                currentIdiom.value === ESP ? "Nº de huéspedes" : "Nº of guests"
              }
              style={{ width: "100%" }}
              rules={rules}
            ></NumGuestsInput>
          </FlexSpace>
          <FlexSpace>
            <ArribalDateInput
              placeholder={
                currentIdiom.value === ESP
                  ? "Seleccionar fecha y hora de llegada del vuelo"
                  : "Select arrival date and time of the flight"
              }
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP
                  ? "Fecha y hora de llegada del vuelo"
                  : "Arrival date and time of the flight"
              }
              rules={rules}
            ></ArribalDateInput>
            <NumFlightInput
              rules={rules}
              placeholder={"FR 1935"}
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP ? "Número de vuelo" : "Flight number"
              }
            ></NumFlightInput>
          </FlexSpace>
          <FlexSpace>
            <NameInput
              rules={rules}
              style={{ width: "100%" }}
              label={currentIdiom.value === ESP ? "Nombre" : "Name"}
            ></NameInput>
            <SurnameInput
              rules={rules}
              style={{ width: "100%" }}
              label={currentIdiom.value === ESP ? "Apellidos" : "Surname"}
            ></SurnameInput>
            <TelefonInput
              form={form}
              style={{ width: "100%" }}
              currentIdiom={currentIdiom.value}
              label={currentIdiom.value === ESP ? "Teléfono" : "Telefon"}
            ></TelefonInput>
          </FlexSpace>
          <FlexSpace>
            <DateOfBirthInput
              rules={rules}
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP
                  ? "Fecha de nacimiento"
                  : "Date of birth"
              }
              placeholder={
                currentIdiom.value === ESP
                  ? "Seleccionar fecha de nacimiento"
                  : "Select date of birth"
              }
            ></DateOfBirthInput>
            <EmailInput
              rules={rules.concat({
                type: "email",
                message:
                  currentIdiom.value === ESP
                    ? "⚠️ Introduce un correo válido. ⚠️"
                    : "⚠️ Enter a valid email. ⚠️",
              })}
              style={{ width: "100%" }}
              label={currentIdiom.value === ESP ? "Correo" : "Email"}
            ></EmailInput>
            <PassportInput
              rules={rules}
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP
                  ? "Nº de passaporte"
                  : "Nº of passport"
              }
            ></PassportInput>
          </FlexSpace>
          <FlexSpace>
            <DirectionInput
              rules={rules}
              style={{ width: "100%" }}
              label={currentIdiom.value === ESP ? "Dirección" : "Direction"}
            ></DirectionInput>
            <PostalCodeInput
              rules={rules}
              style={{ width: "100%" }}
              label={currentIdiom.value === ESP ? "Nº postal" : "Postal code"}
            ></PostalCodeInput>
            <CountrySelector
              rules={rules}
              style={{ width: "100%" }}
              label={currentIdiom.value === ESP ? "Pais" : "Country"}
            ></CountrySelector>
          </FlexSpace>
        </TabPane>
        <TabPane tab="Tab 2" key={1}>
          <CovidFormWrapper>
            {currentIdiom.value === ESP
              ? "Haga clic en la imagen para seleccionar el pasaporte Covid-19"
              : "Click on the image to select the Covid-19 passport"}
            <img
              onClick={() => inputPhoto.current.click()}
              style={{ width: "500px", cursor: "pointer" }}
              src={process.env.PUBLIC_URL + "/QR-COVID.jpeg"}
              alt="camara-imagen"
            ></img>
            <input
              accept="image/*,application/pdf"
              id="icon-button-file"
              type="file"
              ref={inputPhoto}
              onChange={(file) => onChange(file)}
              style={{ display: "none" }}
              capture="environment"
            />
          </CovidFormWrapper>
        </TabPane>
        <TabPane tab="Tab 2" key={2}>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <div style={{ overflowY: "auto", maxHeight: "46vh" }}>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                      alignItems: "center",
                    }}
                    align="baseline"
                  >
                    <NameInput
                      name={[name, "name"]}
                      fieldKey={[fieldKey, "name"]}
                      rules={rules}
                      style={{ width: "300px" }}
                      label={currentIdiom.value === ESP ? "Nombre" : "Name"}
                    ></NameInput>
                    <DateOfBirthInput
                      rules={rules}
                      name={[name, "dateOfBirth"]}
                      fieldKey={[fieldKey, "dateOfBirth"]}
                      style={{ width: "300px" }}
                      label={
                        currentIdiom.value === ESP
                          ? "Fecha de nacimiento"
                          : "Date of birth"
                      }
                      placeholder={
                        currentIdiom.value === ESP
                          ? "Seleccionar fecha de nacimiento"
                          : "Select date of birth"
                      }
                    ></DateOfBirthInput>
                    <SwimInput
                      name={[name, "swim"]}
                      fieldKey={[fieldKey, "swim"]}
                      style={{ margin: "0 10px 0 10px" }}
                      title={
                        currentIdiom.value === ESP ? "Sabe nadar" : "Can swim"
                      }
                    ></SwimInput>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    {currentIdiom.value === ESP ? "Añadir niño" : "Add child"}
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
        </TabPane>
        <TabPane tab="Tab 2" key={3}>
          <Form.List name="pets">
            {(fields, { add, remove }) => (
              <div style={{ overflowY: "auto", maxHeight: "46vh" }}>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                      alignItems: "center",
                    }}
                    align="baseline"
                  >
                    <NameInput
                      name={[name, "name"]}
                      fieldKey={[fieldKey, "name"]}
                      rules={rules}
                      style={{ width: "300px" }}
                      label={currentIdiom.value === ESP ? "Nombre" : "Name"}
                    ></NameInput>
                    <DateOfBirthInput
                      rules={rules}
                      name={[name, "dateOfBirth"]}
                      fieldKey={[fieldKey, "dateOfBirth"]}
                      style={{ width: "300px" }}
                      label={
                        currentIdiom.value === ESP
                          ? "Fecha de nacimiento"
                          : "Date of birth"
                      }
                      placeholder={
                        currentIdiom.value === ESP
                          ? "Seleccionar fecha de nacimiento"
                          : "Select date of birth"
                      }
                    ></DateOfBirthInput>
                    <PetTypeInput
                      name={[name, "type"]}
                      fieldKey={[fieldKey, "type"]}
                      rules={rules}
                      style={{ width: "250px" }}
                      currentIdiom={currentIdiom.value}
                      label={currentIdiom.value === ESP ? "Tipo" : "Type"}
                    ></PetTypeInput>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    {currentIdiom.value === ESP ? "Añadir mascota" : "Add pet"}
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
        </TabPane>
        <TabPane tab="Tab 2" key={4}>
          <DepartureVillaDateInput
            placeholder={
              currentIdiom.value === ESP
                ? "Seleccionar fecha y hora de salida de la villa"
                : "Select date and time of departure at the villa"
            }
            style={{ width: "100%" }}
            label={
              currentIdiom.value === ESP
                ? "Seleccionar fecha y hora de salida de la villa"
                : "Select date and time of departure from the villa"
            }
            rules={rules}
          ></DepartureVillaDateInput>
          <FlexSpace>
            <DepartureDateInput
              placeholder={
                currentIdiom.value === ESP
                  ? "Seleccionar fecha y hora de salida del vuelo"
                  : "Select departure date and time of the flight"
              }
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP
                  ? "Fecha y hora de salida"
                  : "Departure date and time"
              }
              rules={rules}
            ></DepartureDateInput>
            <NumDepartureFlightInput
              rules={rules}
              placeholder={"FR 1935"}
              style={{ width: "100%" }}
              label={
                currentIdiom.value === ESP ? "Número de vuelo" : "Flight number"
              }
            ></NumDepartureFlightInput>
          </FlexSpace>
        </TabPane>
        <TabPane tab="Tab 2" key={5}>
          <Divider>
            {currentIdiom.value === ESP
              ? "Información de la ECOTASA"
              : "ECOTASA information"}
          </Divider>
          <a
            href={"https://www.ecotasa.es/en-gb/"}
            target="_blank"
            rel="noreferrer"
          >
            {currentIdiom.value === ESP
              ? "Información de la ECOTASA"
              : "ECOTASA information"}
          </a>
          <Divider>
            {currentIdiom.value === ESP ? "Agradecimientos" : "Thanks"}
          </Divider>
          <span>
            {currentIdiom.value === ESP
              ? "Buenas tardes, espero que esté bien. Deseo que su vuelo a Mallorca haya sido agradable y sin complicaciones."
              : "Good afternoon, I hope you are well. I wish your flight to Mallorca was pleasant and uncomplicated."}
          </span>
          <br></br>
          <span>
            {currentIdiom.value === ESP
              ? "A pesar de estos momentos tan complicados que hemos vivido, y que estamos viviendo, deseamos que disfrute de su estancia en la villa y que pueda descubrir todas las maravillas de la isla."
              : "Despite these difficult times that we have lived, and that we are living, we hope you enjoy your stay in the villa and that you can discover all the wonders of the island."}
          </span>

          <Divider>
            {currentIdiom.value === ESP
              ? "Opinión en la web"
              : "Opinion on the web"}
          </Divider>
          <span>
            {currentIdiom.value === ESP
              ? "Al mismo tiempo, nos sería de gran ayuda si pudiera dejar una opinión de su estancia en la página de reserva. Para ello, solo dispondrá de una semana."
              : "At the same time, it would be helpful to us if you could leave a review of your stay on the booking page. You will only have one week to do this."}
          </span>
          <br></br>
          <span>
            {currentIdiom.value === ESP
              ? "Para nosotros es muy importante su opinión para poder mejorar de cara al futuro y ofrecer un mejor servicio a próximos huéspedes. "
              : "Your opinion is very important to us in order to improve for the future and offer a better service to future guests."}
          </span>

          <Divider>
            {currentIdiom.value === ESP ? "Despedida" : "Goodbye"}
          </Divider>
          <span>
            {currentIdiom.value === ESP
              ? "Si el servicio ha sido de su agrado nos sería de mucha ayuda una recomendación. Esperamos verle en un futuro. Gracias y les deseamos lo mejor."
              : "If the service has been to your liking, a recommendation would be very helpful. We hope to see you in the future. Thank you and we wish you the best."}
          </span>
          <br></br>
          <strong>Rafel Martorell</strong>
          <strong>
            {currentIdiom.value === ESP
              ? ". Gerente de Villa Mimosa."
              : ". Manager of Villa Mimosa."}
          </strong>
        </TabPane>
      </Tabs>

      <FlexSpace style={{ margin: "25px 0px 0px 0px" }}>
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          <LeftOutlined />
        </Button>
        <Button
          disabled={currentStep === 5}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          <RightOutlined />
        </Button>
      </FlexSpace>
    </Fragment>
  );
};
export default StepsForm;
