import React, {useState,useRef} from 'react';
import {useReactToPrint} from 'react-to-print'
import HomePage from './HomePage'
import Background from '../../assets/chrysal.jpg';
import './backend.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

// Create Document Component
const Backend = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'chrysal',
    onAfterPrint: () => alert("PDF Downloaded")
  });


  return (
    <div className="pdf">
      <div ref={componentRef} 
          style={{width: '100%'}} 
          className="pdfdoc">
        <div className="space"></div>
        <h2 id="h2">Roses Post Harvest Trial</h2>
        <div className="center">
          <h2>Mzurie Molo Farm: {props.grower}</h2>
          <h5>Crop: </h5>
          <h5>Trial start date: </h5>
          <h5>Vasing date: </h5>
        </div>
        <br/>
        <p id="u"> Report date:</p>
        <br/>
        <h5>Introduction</h5>
        <br/>
        <h5>Test Scheme</h5><br/>
        <p>&nbsp;29th: &nbsp; &nbsp; 
          <b><i>Crop: &nbsp;&nbsp;Vasing date:</i></b>
        </p>
        <table>
          <thead>
            <th id="column">Trm</th>
            <th>Harvesting solution</th>
            <th>Post grading</th>
            <th>Transport</th>
            <th>Store</th>
            <th>Consumer</th>
            <th>Vase Numbers</th>
            <tr>
              <td>1</td>
              <td>Farm</td>
              <td>Treatment</td>
              <td id="empty">Dry</td>
              <td id="empty">Chrysal Inicial</td>
              <td id="empty">Chrysal Clear</td>
              <td>1-3</td>
            </tr>
            <tr>
              <td id="column">2</td>
              <td>Farm</td>
              <td>Treatment</td>
              <td id="empty"></td>
              <td id="empty"></td>
              <td id="empty"></td>
              <td>1-3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Farm</td>
              <td>Treatment</td>
              <td id="empty"></td>
              <td id="empty"></td>
              <td id="empty"></td>
              <td>1-3</td>
            </tr>
            <tr id="details">
              <td>Details</td>
              <td>Farm</td>
              <td>Treatment</td>
              <td></td>
              <td></td>
              <td></td>
              <td>1-3</td>
            </tr>
          </thead>
        </table>
        <p>Varieties: <i>Nathalie</i></p>
        <br/>
        <h5><b>Observations day</b></h5>
        <table className="yellow">
          <th id="column">CV</th>
          <th>Treatment1</th>
          <th>Treatment2</th>
          <tr>
            <td id="row">Variety 1</td>
            <td>Observations</td>
            <td>Obbservation 2</td>
          </tr>
          <tr>
            <td id="row">Variety 2</td>
            <td>Observations</td>
            <td>Obbservation 2</td>
          </tr>

        </table>
        <br/>
        <h5><b>Photo day </b></h5>
        <table className="none">
          <th>Variety</th>
          <th>Treatment 1</th>
          <th>Treatment 2</th>
          <tr>
            <td><b>Variety 1</b></td>
            <td></td>
          </tr>
        </table>
        <br/>
        <h5>Comments</h5>
        <br/>
        <h5>Conclusion</h5>
      </div>
      <Button variant="success" onClick={handlePrint}>Download PDF</Button>
    </div>
  );
};

export default Backend