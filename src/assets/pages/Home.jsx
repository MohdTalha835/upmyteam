import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 200; // control speed here

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);
  return (
    <div className="main-container">
      <div className="heading">
        <h1>Dashboard</h1>
      </div>
      <div className="container">
        <div className="card card1">
          <div className="card-icon icon1">
            <i className="fa-solid fa-users" />
          </div>
          <div className="card-info">
            <h2 className="counter" data-target="61">0</h2>
            <p>Team Members</p>
          </div>
        </div>

        <div className="card card2">
          <div className="card-icon icon2">
            <i className="fa-solid fa-chart-simple" style={{ border: '1px solid #58B948', padding: '4px' }} />
          </div>
          <div className="card-info">
            <h2 className="counter" data-target="11">0</h2>
            <p>Buying Projects</p>
          </div>
        </div>

        <div className="card card3">
          <div className="card-icon icon3">
            <i className="fa-solid fa-user-tag" />
          </div>
          <div className="card-info">
            <h2 className="counter" data-target="8">0</h2>
            <p>Leads</p>
          </div>
        </div>

        <div className="card card4">
          <div className="card-icon icon4">
            <i className="fa-solid fa-person-running" />
          </div>
          <div className="card-info">
            <h2 className="counter" data-target="2">0</h2>
            <p>Total Visits</p>
          </div>
        </div>

        <div className="card card5">
          <div className="card-icon icon5">
            <i className="fa-solid fa-house-circle-check" />
          </div>
          <div className="card-info">
            <p>Sold <br /> Properties</p>
          </div>
        </div>

        <div className="card card6">
          <div className="card-icon icon6">
            <i className="fa-solid fa-person-walking-arrow-right" />
          </div>
          <div className="card-info">
            <p>Leave <br /> Applications</p>
          </div>
        </div>

        <div className="card card7">
          <div className="card-icon icon7">
            <i className="fas fa-wallet" />
          </div>
          <div className="card-info">
            <p>Expense</p>
          </div>
        </div>

        <div className="card card8">
          <div className="card-icon icon8">
            <i className="fas fa-money-check-alt" />
          </div>
          <div className="card-info">
            <p>Cheque <br /> Manager</p>
          </div>
        </div>

        <div className="card card9">
          <div className="card-icon icon9">
            <i className="fas fa-tasks" />
          </div>
          <div className="card-info">
            <p>Task <br /> Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
