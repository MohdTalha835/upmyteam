import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

 const Leads = () => {
   return (
     <>
  <div className="main-container">
    <div className="buttons-group">
      <button type="button" className="btn">
        ALL
      </button>
      <button type="button" className="btn">
        RUNNING
      </button>
      <button type="button" className="btn">
        UNASSIGNED
      </button>
      <button type="button" className="btn ">
        COMPLETED
      </button>
      <button type="button" className="btn">
        NEW
      </button>
      <button type="button" className="btn">
        HOT
      </button>
      <button type="button" className="btn">
        TODAY'S VISIT
      </button>
      <button type="button" className="btn">
        TOTAL VISIT
      </button>
      <button type="button" className="btn">
        SHUFFLE
      </button>
      <button type="button" className="btn">
        ACTION
      </button>
      <button type="button" className="btn">
        UPCOMING
      </button>
    </div>
    <div className="d-flex justify-content-center">
      <form className="d-flex w-80 search-form">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Leads"
          aria-label="Search"
        />
        <button className="btn icons me-2" type="submit">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <button className="btn icons" type="button">
          <i className="fa-solid fa-sliders" />
        </button>
      </form>
    </div>
    <div className="container-fluid main-container my-3">
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">Lead Testing</h5>
            <p className="text-muted mb-1">01/10/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">TEST QUICK</h5>
            <p className="text-muted mb-1">29/08/2025</p>
            <i className="fa-solid fa-flag me-3 " />
            <i className="fa-solid fa-user-tag" />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">TTTTTT</h5>
            <p className="text-muted mb-1">29/07/2025</p>
            <i className="fa-solid fa-flag me-3 " />
            <i className="fa-solid fa-person-running" />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">NEW LEAD SALE</h5>
            <p className="text-muted mb-1">15/06/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">LEAD TEST1</h5>
            <p className="text-muted mb-1">23/05/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">LEAD TESTING</h5>
            <p className="text-muted mb-1">21/06/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">LEAD TESTING</h5>
            <p className="text-muted mb-1">06/12/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">LEAD TESTING</h5>
            <p className="text-muted mb-1">12/10/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">LEAD TESTING</h5>
            <p className="text-muted mb-1">18/01/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-long full-card p-3 w-80">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h5 className="card-title mb-1">LEAD TESTING</h5>
            <p className="text-muted mb-1">27/04/2025</p>
            <i className="fa-solid fa-flag me-3 " />
          </div>
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center me-3">
              <i className="fa-solid fa-share-nodes custom-icon" />
              <button className="btn btn-sm right-button">Remark</button>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <i className="fa-solid fa-phone custom-icon " />
              <button className="btn btn-sm px-4 right-button">Visit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>
   );
 };
 
 export default Leads;