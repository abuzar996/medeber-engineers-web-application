import Main from "../containers/main";
import Services from "../containers/services";
import FeaturedProjects from "../containers/featured";
import Testimonial from "../containers/testimonials";
import Environment from "../containers/environment";
import Experties from "../containers/experties";
const Home = () => {
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
