const DisplayForm = ({ data }) => {
  console.log(data);
  return (
    <div>
      Hola
      <div>Hola 2</div>
      {"<a download='FILENAME.EXT' href={" +
        data.image +
        "}>        Download      </a>"}
    </div>
  );
};
export default DisplayForm;
