import profileImage from "../../assets/picture/Profile-Pic.jpg";
import "./style.css";

function About() {
  return (
    <section>
      <div className="about-header">
        <h1 className="text-center">About Me</h1>
      </div>
      <div className="p-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-2 p-5">
            <img
              src={profileImage}
              alt="profile"
              className="profile-image rounded img-fluid"
            />
          </div>
          <div className="col-md-10 lh-lg p-5">
            <p className="about-text">
              Rana Muhammad Ahmad here. I have a strong enthusiasm for coding,
              and I'm now attending a coding boot camp to broaden my expertise
              and experience. I'm pursuing a computer science bachelor's degree.
              My strong interpersonal and teamwork abilities also make me a
              valuable member of any programming team. My portfolio demonstrates
              my adaptability and knowledge by highlighting myexperience and
              talents in a variety of projects, including web development and
              database administration. I look forward to learning more about
              programming as I advance in my career. I am convinced that I can
              succeed as a programmer given my technical expertise, solid work
              ethic, and love of coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
