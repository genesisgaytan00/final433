import Head from "next/head";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";
const HomePage = () => {
  return ( 
    <div>
      <div className="container">
      <img src="/genpic.jpg" alt="Genesis Picture" className="pic" />
      <div class="overlay">
      <div class="text">LinkedIn: <a href="https://www.linkedin.com/in/genesis-gaytan-ba330b164/">Genesis Gaytan</a></div>
      </div>
      </div>
        <h1>Genesis Gaytan</h1>
        <h2>Student</h2>
        <h3>Student at Illinois Institute of Technology | GHC’23 |OMS intern @ Ulta Beauty</h3>
        <h3>Expected bachelor’s degree in Information Technology and Management along with a minor in Computer Science. Experience with programming and collaborative projects. Seeking an internship position or potential job opportunity.</h3>
    </div>
  );
}
 
export default HomePage;
