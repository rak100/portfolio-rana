import React from 'react';
import resume from '../../assets/small/Resume.png';
import './style.css';

function Resume() {
  return (
    <div className="container">
      <h1 className="resume-header text-center">Resume</h1>
      <div>
        <div className="row p-1">
          <div className="col-md-6">
            <img
              id="resume"
              src={resume}
              alt="thumbnail of resume"
              className="small-img"
            ></img>
          </div>
          <div className="col-md-6">
            <h2 className="text-center p-1 font-weight-bold">
              Technical Skills
            </h2>
            <div className="row">
              <div className="col-md-6">
                <h4>Front-End Tech</h4>
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4>Back-End Tech</h4>
                <ul>
                  <li>Node.Js</li>
                  <li>Express.js</li>
                  <li>Jest</li>
                  <li>MySQL</li>
                  <li>Object Relational Mapping</li>
                  <li>Model View Controller</li>
                  <li>Sequelize</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4>Other Tech</h4>
                <ul>
                  <li>Progressive Web Applications</li>
                  <li>MongoDB</li>
                  <li>NoSQL</li>
                  <li>MERN</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;