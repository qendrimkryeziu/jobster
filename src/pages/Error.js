import { Link } from "react-router-dom";
import Img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={Img} alt="not found " />
        <h3>Ohh! Page Not Found</h3>
        <h3>We can't seem to find the page you're looking for</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
