import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner';
const Spinner = () => {
  return (
    <div>
      <Oval
        color="black"
        height={100}
        width={100}
        timeout={3000}
        ariaLabel='loading'
      />
    </div>
  );
};
export default Spinner;