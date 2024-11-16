import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Image from "next/image";
import "@/styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home-container fade-in">
        <h1 className="bounce">Welcome to Syeda Ureefa Ali Portfolio</h1>
        <p>This is a brief introduction about me.</p>
        <Image
         src="/images/image.png"
         alt="Profile Picture"
         className="profile-pic" 
         width={700}
         height={700}
         />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
