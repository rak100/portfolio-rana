import React from "react";
import sport from "../../assets/small/MARV'S SPORTS.png";
import basketball from "../../assets/small/basketball-tracker.png";
import './style.css'


function Portfolio() {
  return (
    <div className="container">
      <section>
        <div className="row px-5">
          <h1 className="section-title text-center p-3">Work</h1>

          <div className="col-md-12">
            <div className="project">
              <h4>MARV'S SPORTS</h4>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={sport}
                    className="my-2 img-fluid rounded"
                    alt="MARV'S SPORTS"
                  />
                </div>
                <div className="project col-md-8">
                  <p>
                    MARV'S SPORTS is a live streaming website which is used to
                    retrieve sports data. The user has to select a soccer league
                    from the leagues dropdown, then the user has to choose a
                    team from the teams dropdown. Then the user has to select a
                    date from the calendar to retrieve chosen day's data. The
                    news headlines, scores & upcoming matches are also displayed
                    side by side. Used Moment.js library to work with date. Used
                    Rapid API to retrieve match data for teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="project">
              <h4>Basket Ball Tracker</h4>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={basketball}
                    className="my-2 img-fluid rounded"
                    alt="Basketball Tracker"
                  />
                </div>
                <div className="project col-md-8">
                  <p>
                    Basketball Tracker is an application for anyone who enjoys
                    playing the game of basketball and would like to keep track
                    of their individual performance. If you play weekend games
                    with your friends or are a part of a league, (recreational
                    or competitive), you can use this application to record some
                    notes about how you played in a particular game.
                    Additionally, there are some stats including points,
                    rebounds, and assists. The application calculates totals and
                    averages to help you evaluate your performance over time.
                    All of this information is displayed via the dashboard,
                    which works as your performance stat sheet.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Portfolio;

