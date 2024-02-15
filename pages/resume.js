import Head from "next/head";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";
const Resume = () => {
  return (
    <div>
      <Head>
        <title>Genesis Gaytan's Resume</title>
      </Head>


      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold">GENESIS GAYTAN</h1>
          <p className="text-sm">genesisgaytan01@gmail.com | 773-899-8424</p>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">SUMMARY</h2>
          <p>
            Expected bachelor’s degree in Information Technology and Management along with a minor in Computer Science. 
            Experience with programming and collaborative projects. Seeking an internship position or potential job opportunity.
          </p>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">EDUCATION</h2>
          <p>Bachelor of Science, Information Technology and Management</p>
          <p>Illinois Institute of Technology, Chicago, IL</p>
          <p>Expected Graduation Date: May 2025</p>
          <p>GPA: 2.97/4.0</p>
          <ul className="list-disc ml-4">
            <li>Fall Semester 2020 - Dean's List</li>
            <li>Leaders in Science and Tech Scholarship, Heald Scholarship, and Stem+ Scholarship Recipient</li>
            <li>Social Media Manager of IIT Association for Computing Machinery - Women</li>
            <li>Additional Coursework: Intro to Computer Science, Object Oriented Programming 1 and 2, Front-End Web Development, Intermediate Software Development, Systems Programming, Introduction to Operating Systems, Data Modeling and Application Systems, Data Networks</li>
          </ul>
          <p>City Colleges of Chicago</p>
          <ul className="list-disc ml-4">
            <li>DoD-Stem Scholar</li>
            <li>Additional Coursework in Computer Science: Discrete Structures, Data Structures and Algorithms</li>
            <li>Workplace Cybersecurity Essentials Training</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">SKILLS</h2>
          <ul className="list-disc ml-4">
            <li>Front-End Skills: HTML, CSS, Swift, JavaScript, XML, REACT</li>
            <li>Linux</li>
            <li>SQL</li>
            <li>Python</li>
            <li>Java</li>
            <li>Fluent in English and Spanish</li>
            <li>Familiar Tools: GitHub, Replit, Eclipse, Visual Studio Code</li>
            <li>Microsoft Office</li>
            <li>iOS and Mac Experience</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">EXPERIENCE</h2>
          <ul className="list-disc ml-4">
            <li>Ulta Beauty - OMS Software Developer Intern</li>
            <li>Kode With Klossy - Scholar</li>
            <li>IPUL Casa De Luz - Teacher Volunteer</li>
            <li>Violinist</li>
            <li>Starbucks - Barista</li>
            <li>Beehive Day Care - Assistant Teacher</li>
          </ul>
          <div className="link">
            <a href="/Gaytan,Genesis -RESUME.pdf" download="RESUME PDF">Download Resume</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
