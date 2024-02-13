import Main from "../containers/main";
import Services from "../containers/services";
import FeaturedProjects from "../containers/featured";
import Testimonial from "../containers/testimonials";
import Environment from "../containers/environment";
import Experties from "../containers/experties";
//import CustomInfo from "../commons/custom-info";
const Home = () => {
  /*
JANUARY 23, 2024
NEWS
TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director*/
  return (
    <>
      {/* <CustomInfo type={"news"} /> */}
      <Main />
      <FeaturedProjects />
      <Services />
      <Testimonial />
      <Environment />
      <Experties />
    </>
  );
};

export default Home;
