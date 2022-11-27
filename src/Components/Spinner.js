import SpinnerImage from "../images/Color-Loading-2.gif";
const Spinner = () => {
  return (
    <div>
      <img
        src={SpinnerImage}
        alt="Spinner Imager"
        className="d-block m-auto"
        style={{ width: "200px" }}
      />
    </div>
  );
};
export default Spinner;
