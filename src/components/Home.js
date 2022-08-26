import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const homeData = {
  firstName: "Good",
  lastName: "Web",
};

const Home = ({ activeWithBtn }) => {
  const navContext = useContext(context);
  const { changeNav } = navContext;

  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home">
          <div className="image">
                <img src="img/logo/logo.png" alt="" style={{'height':'50%', 'width':'50%'}}/>
              </div>
          <h3 className="job">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button transition_link">
            <a href="#contact" onClick={() => changeNav("contact")}>
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
