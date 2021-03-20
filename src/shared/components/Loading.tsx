import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loading() {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        icon="spinner"
        spin
        size="10x"
        className="text-primary"
      />
      <h3 className="text-primary my-2">LOADING ...</h3>
    </div>
  );
}
export default Loading;
