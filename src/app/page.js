import About from "@/components/home/About";
import Advantages from "@/components/home/Advantages";
import Banner from "@/components/home/Banner";
import News from "@/components/home/News";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <Banner/>
      <About/>
      <Advantages/>
      <Team/>
      <Projects/>
      <News/>
    </>
  );
}
