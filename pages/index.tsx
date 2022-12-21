import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MyBackground from "./components/MyBackground";
import TechStack from "./components/TechStack";
import WorkingMethods from "./components/WorkingMethods";
import Portfolio from "./components/Portfolio";
import ProjectCards from "./components/ProjectCards";
import BacktoTop from "./components/BacktoTop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top">
      <NavBar />
      <Header />
      <MyBackground />
      <TechStack />
      <WorkingMethods />
      <Portfolio />
      <ProjectCards />
      <BacktoTop />
      <Footer />
    </main>
  );
}
