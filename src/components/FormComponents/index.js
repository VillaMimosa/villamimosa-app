import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import { ESP } from "../../constants/idioms";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/en/world.json";
import es from "world_countries_lists/data/es/world.json";
import { useSelector } from "react-redux";
import { getCountries } from "../../store/selectors";
import moment from "moment";
moment.locale("es");

export const SubmitButton = (props) => {
  return (
    <Form.Item style={{ marginLeft: 15, marginBottom: 0 }} {...props}>
      <Button htmlType="submit" type="primary" {...props}>
        {props?.text ? props.text : "ENVIAR"}
      </Button>
    </Form.Item>
  );
};

export const CancelButton = (props) => {
  return (
    <Form.Item style={{ marginBottom: 0 }} {...props}>
      <Button danger {...props}>
        {props.currentIdiom === ESP ? "CANCELAR" : "CANCEL"}
      </Button>
    </Form.Item>
  );
};

export const RentalDateInput = (props) => {
  const dateFormat = "DD/MM/YYYY";
  return (
    <Form.Item name="rentalDate" {...props}>
      <DatePicker {...props} format={dateFormat} />
    </Form.Item>
  );
};

export const DateOfBirthInput = (props) => {
  const dateFormat = "DD/MM/YYYY";
  return (
    <Form.Item name="dateOfBirth" {...props}>
      <DatePicker {...props} format={dateFormat} />
    </Form.Item>
  );
};

export const ArribalDateInput = (props) => {
  const dateFormat = "DD/MM/YYYY HH:mm";
  return (
    <Form.Item name="arribalDate" {...props}>
      <DatePicker {...props} showTime format={dateFormat} />
    </Form.Item>
  );
};

export const DepartureDateInput = (props) => {
  const dateFormat = "DD/MM/YYYY HH:mm";
  return (
    <Form.Item name="departureDate" {...props}>
      <DatePicker {...props} showTime format={dateFormat} />
    </Form.Item>
  );
};

export const ArribalVillaDateInput = (props) => {
  const dateFormat = "DD/MM/YYYY HH:mm";
  return (
    <Form.Item name="arribalvillaDate" {...props}>
      <DatePicker {...props} showTime format={dateFormat} />
    </Form.Item>
  );
};

export const DepartureVillaDateInput = (props) => {
  const dateFormat = "DD/MM/YYYY HH:mm";
  return (
    <Form.Item name="departurevillaDate" {...props}>
      <DatePicker {...props} showTime format={dateFormat} />
    </Form.Item>
  );
};

export const NumGuestsInput = (props) => {
  return (
    <Form.Item name="numGuests" {...props}>
      <InputNumber {...props} />
    </Form.Item>
  );
};

export const NumFlightInput = (props) => {
  return (
    <Form.Item name="numFlight" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const NumDepartureFlightInput = (props) => {
  return (
    <Form.Item name="numDepartureFlight" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const PostalCodeInput = (props) => {
  return (
    <Form.Item name="postalCode" {...props}>
      <InputNumber {...props} />
    </Form.Item>
  );
};

export const NameInput = (props) => {
  return (
    <Form.Item name="name" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const SurnameInput = (props) => {
  return (
    <Form.Item name="surname" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const EmailInput = (props) => {
  return (
    <Form.Item name="email" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const PassportInput = (props) => {
  return (
    <Form.Item name="passport" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const DirectionInput = (props) => {
  return (
    <Form.Item name="direction" {...props}>
      <Input {...props} />
    </Form.Item>
  );
};

export const SwimInput = (props) => {
  return (
    <Form.Item name="swim" {...props} valuePropName="checked">
      <Checkbox {...props}>{props.title}</Checkbox>
    </Form.Item>
  );
};

export const PetTypeInput = (props) => {
  return (
    <Form.Item name="petType" {...props}>
      <Radio.Group {...props}>
        <Radio.Button value={"Dog"}>
          {props.currentIdiom === ESP ? "Perro" : "Dog"}
        </Radio.Button>
        <Radio.Button value={"Cat"}>
          {props.currentIdiom === ESP ? "Gato" : "Cat"}
        </Radio.Button>
        <Radio.Button value={"Other"}>
          {props.currentIdiom === ESP ? "Otro" : "Other"}
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};

export const TelefonInput = (props) => {
  const onChange = (value) => {
    props.form.setFieldsValue({ telefon: value });
  };

  return (
    <Form.Item name="telefon" {...props}>
      <ConfigProvider locale={props.currentIdiom === ESP ? es : en}>
        <CountryPhoneInput onChange={onChange} style={{ height: 33 }} />
      </ConfigProvider>
    </Form.Item>
  );
};

export const CountrySelector = ({ onChange, ...props }) => {
  const countries = useSelector(getCountries);

  if (!countries) {
    return null;
  }

  return (
    <Form.Item style={{ width: "100%" }} name="country" {...props}>
      <Select
        options={countries}
        {...props}
        placeholder="País"
        onChange={onChange}
        allowClear
        showSearch
        autoComplete="new-password"
      />
    </Form.Item>
  );
};
