import WhyChooseUs from "./components/WhyChooseUs";
import OurValue from "./components/OurValue";
import OurTeam from "./components/OurTeam";
import WhoWeAre from "./components/WhoWeAre";

export default function App() {
  return (
    <main>
      <h1 className="my-10 text-center">Why Choose Us Component</h1>
      <WhyChooseUs />
      <h1 className="my-10 text-center">Our Value Component</h1>
      <OurValue />
      <h1 className="my-10 text-center">Our Team Component</h1>
      <OurTeam />
      <h1 className="my-10 text-center">Who We Are Component</h1>
      <WhoWeAre />
    </main>
  );
}
