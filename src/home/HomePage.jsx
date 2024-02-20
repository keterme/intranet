import React, {useState,useRef} from 'react';
import {useReactToPrint} from 'react-to-print'
import Background from '../../assets/chrysal.jpg';
import './backend.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
//import { PDFViewer } from '@react-pdf/renderer';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './home.css';
//import Abstract from './Abstract'

const HomePage = () => {
  const [details, setDetails] = useState([{
    heading: "",
    grower: "",
    trialdate: "",
    vdate: "",
    mmea: "",
    product: "",
    rdate: "",
    intro: "",
    hs: "",
    bortrytis: "",
    pg: "",
    vn: "",
    observation: "",
    varietyname: "",
    observations: "",
    image: "",
    vname: "",
    imgfile: "",
    transport: "",
    store: "",
    consumer: "",
    harvestsol: "",
    imgfile: "",
    postgrading: "",
    trans: "",
    str: "",
    cons: "",
    comments: "",
  }]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [records, setRecords] = useState([]);

  const handleChangeOne =()=> {

  }

  const handleChange = (e,index) => {
    const {name,value} = e.target;
    setDetails((prev) => {
      return {...prev, [name]: value}
    }) 
  };

  const handleremove= index=>{
    const list=[...details];
    list.splice(index,1);
    setDetails(list);
  }

  const handleaddclick=()=>{ 
    setDetails([...details, { hs:'', bortrytis:'', pg:'', vn:''}]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    if(!details.grower || !details.mmea) {
      alert("All fields are required!"); 
    }
    else {
      const newRecord = {...details}
      setRecords([...records, newRecord])
      setDetails(setFormSubmitted(true));
    } 
  }

  const [noOfRowsofTreatment, setNoOfRowsofTreatment] = useState(1);

  const [noOfRows, setNoOfRows] = useState(1);
  const [noOfColumns, setNoOfColumns] = useState(1);

  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ list: "ordered" }],
      [{ list: "bullet" }]
    ]
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'chrysal',
    onAfterPrint: () => alert("PDF Downloaded")
  });
  
  return (       
    <>  
      {!formSubmitted ? 
        (<div className="report__maincontainer">
          <div className="header">
            <div className="form1">
              <form onSubmit={handleSubmit}>
                <div className="report-container">
                  <div className="label__grower">
                      <label>Heading</label>
                  </div> 
                  <input type="text" 
                         name="heading"
                         autoComplete="off"
                         value={details.heading}
                         placeholder="Heading..."
                         onChange={handleChange}
                  />         
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Grower</label>
                  </div> 
                  <input type="text" 
                         name="grower"
                         autoComplete="off"
                         value={details.grower}
                         placeholder="Farm..."
                         onChange={handleChange}
                  />         
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Trial Start Date</label>
                  </div> 
                  <input type="date" 
                         name="trialdate"
                         autoComplete="off"
                         value={details.trialdate}
                         onChange={handleChange}
                  />
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Vasing Date</label>
                  </div> 
                  <input type="date" 
                         name="vdate"
                         autoComplete="off"
                         value={details.vdate}
                         onChange={handleChange}
                  />
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Crop</label>
                  </div>
                  <input type="text" 
                         name="mmea" 
                         autoComplete="off"
                         placeholder="Consumer..."
                         value={details.mmea}
                         onChange={handleChange}
                  />
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Products</label>
                  </div>
                  <input type="text" 
                         name="product" 
                        autoComplete="off"
                        placeholder="Products..."
                        value={details.product}
                        onChange={handleChange} 
                  />
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Report Date</label>
                  </div> 
                  <input type="date" 
                         name="rdate"
                         autoComplete="off"
                         value={details.rdate}
                         onChange={handleChange}
                  />
                </div>

                <div className="report-container">
                  <div className="label__grower">
                      <label>Introduction</label>
                  </div> 
                  <div className="quill">
                    <ReactQuill
                      name="intro"
                      theme='snow'
                      modules={modules}
                      value={details.intro}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="report-container">
                  <div className="label__grower">
                    <label>TREATMENTS</label>
                  </div>
                  <div className="report-container">
                    <div className="">
                      <table class="table table-hover table-bordered p-5">
                        <thead>
                          <tr>
                            <th scope="col">Treatment</th>
                            <th scope="col">Harvesting Solution</th>
                            <th scope="col">Anti-bortrytis</th>
                            <th scope="col">Post grading</th>
                            <th scope="col">Vase Numbers</th>
                          </tr>
                        </thead>
                        <tbody>
                        {records.map((x, i) => {
                          return (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td><input type="text" autoComplete="off" name="hs" value={details.hs}
                              onChange={e => handleChange(e,i)}/></td>
                              <td><input type="text" autoComplete="off" name="bortrytis" value={details.bortrytis}
                              onChange={e => handleChange(e,i)}/></td>
                              <td><input type="text" autoComplete="off" name="pg" value={details.pg}
                              onChange={e => handleChange(e,i)}/></td>
                              <td><input type="text" autoComplete="off" name="vn" value={details.vn}
                              onChange={e => handleChange(e,i)}/></td>
                            </tr>
                          );
                        })}     
                        </tbody>
                      </table>
                      <div className="btnsports">
                        <button type="button" className="btn btn-primary me-3" onClick={ handleaddclick}>Add</button>
                        <button type="button" className="btn btn-danger" onClick={i=> handleremove(i)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-container">
                  <div className="label__grower">
                      <label className="treats">OBSERVATIONS</label>
                  </div>
                  <input type="number" name="observation" value={details.observation}
                      onChange={handleChange} placeholder="Observation day..." /><br/>
                  <div className="report-container">
                    <div className="">
                      <table class="table table-hover table-bordered p-5">
                        <thead>
                          <tr>
                            <th scope="col">Variety</th>
                            <th scope="col">Variety Name</th>
                            {[...Array(noOfColumns)].map((elementInArray, index) => {
                              return (<th scope="col">Treatment {index + 1}</th>);
                            })}
                          </tr>
                        </thead>
                        <tbody>
                        {[...Array(noOfRows)].map((elementInArray, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td><input type="text" name="varietyname" value={details.varietyname}
                              onChange={handleChange}/></td>
                              {[...Array(noOfColumns)].map((elementInArray, index) => {
                                return (
                                  <td>
                                    <ReactQuill
                                      name="observations"
                                      theme='snow'
                                      modules={modules}
                                      value={details.observations}
                                      onChange={handleChange}
                                    />
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}     
                        </tbody>
                      </table>
                      <div className="btnsports">
                        <button type="button" className="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add Variety</button>
                        <button type="button" className="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete Variety</button>
                      
                        <button type="button" id="cbssports" className="btn btn-primary me-3" onClick={() => {
                          setNoOfColumns(noOfColumns + 1)}}>Add Treatment</button>
                        }
                        <button type="button" id="cbssports" className="btn btn-danger" onClick={() => setNoOfColumns(noOfColumns - 1)}>Delete Treatment</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-container">
                  <div className="label__grower">
                      <label className="treats">IMAGES</label>
                  </div>
                  <input type="number" name="image" value={details.image}
                      onChange={handleChange}placeholder="Photos day..." /><br/>
                  <div className="report-container">
                    <div className="">
                      <table class="table table-hover table-bordered p-5">
                        <thead>
                          <tr>
                            <th scope="col">Variety</th>
                            <th scope="col">Variety Name</th>
                            {[...Array(noOfColumns)].map((elementInArray, index) => {
                              return (<th scope="col">Treatment {index + 1}</th>);
                            })}
                          </tr>
                        </thead>
                        <tbody>
                        {[...Array(noOfRows)].map((elementInArray, index) => {
                          return (
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td><input type="text" name="vname" value={details.vname}
                              onChange={handleChange}/></td>
                              {[...Array(noOfColumns)].map((elementInArray, index) => {
                                return (
                                  <td>                                    
                                    <input type="file" 
                                           name="imgfile"
                                           className="imagery"
                                           accept="image/*"
                                           capture
                                           value={details.imgfile}
                                           onChange={handleChange}                                      
                                    />
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}     
                        </tbody>
                      </table>
                      <div className="btnsports">
                        <button type="button" className="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add Variety</button>
                        <button type="button" className="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete Variety</button>
                      
                        <button type="button" id="cbssports" className="btn btn-primary me-3" onClick={() =>
                          setNoOfColumns(noOfColumns + 1)}>Add Images</button>
                        <button type="button" id="cbssports" className="btn btn-danger" onClick={() => setNoOfColumns(noOfColumns - 1)}>Delete Images</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-container">
                  <div className="label__grower">
                      <label className="treats"><b>DEFAULT DETAILS</b></label>
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Transport</label>
                    </div> 
                    <input type="text" 
                           name="transport"
                           autoComplete="off"
                           placeholder="As dry?..."
                           value={details.transport}
                           onChange={handleChange}
                    />         
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Store</label>
                    </div> 
                    <input type="text" 
                           name="store"
                           autoComplete="off"
                           placeholder="Store..."
                           value={details.store}
                           onChange={handleChange}
                    />         
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Consumer</label>
                    </div> 
                    <input type="text" 
                           name="consumer"
                           autoComplete="off"
                           placeholder="Consumer..."
                           value={details.consumer}
                           onChange={handleChange}
                    />         
                  </div>
                </div>

                <div className="table-container">
                  <div className="label__grower">
                      <label className="treats">TREATMENT DETAILS</label>
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Harvesting Solution</label>
                    </div> 
                    <input type="text" 
                           name="harvestsol"
                           value={details.harvestsol}
                           onChange={handleChange}
                           autocomplete="off"
                           placeholder="E.g litres/bucket, hrs, sleeve or no sleeve?..." 
                    />         
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Post grading</label>
                    </div> 
                    <input type="text" 
                           name="postgrading"
                           value={details.postgrading}
                           onChange={handleChange}
                           autocomplete="off"
                           placeholder="E.g litres/bucket, hrs..." 
                    />         
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Transport</label>
                    </div> 
                    <input type="text" 
                           name="trans"
                           autocomplete="off"
                           value={details.trans}
                           onChange={handleChange}
                           placeholder="E.g degrees? how many days?..." 
                    />         
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Store</label>
                    </div> 
                    <input type="text" 
                           name="str"
                           autocomplete="off"
                           value={details.str}
                           onChange={handleChange}
                           placeholder="E.g degrees? how many days?..." 
                    />         
                  </div> 
                  <div className="report-container">
                    <div className="label__grower">
                        <label>Consumer</label>
                    </div> 
                    <input type="text" 
                           name="cons"
                           autocomplete="off"
                           value={details.postgrading}
                           onChange={handleChange}
                           placeholder="E.g litres/vase? hours in light?..." 
                    />         
                  </div>                                       
                </div>            

                <div className="report-container">
                  <div className="label__grower">
                      <label>COMMENTS & CONCLUSIONS</label>
                  </div> 
                  <div className="quill">
                    <ReactQuill
                      name="comments"
                      theme='snow'
                      modules={modules}
                      value={details.comments}
                      onChange={handleChangeOne}
                    />
                  </div>         
                </div>

                {/*<div className="report-container">
                  <div className="label__grower">
                      <label>COMMENTS & CONCLUSIONS</label>
                  </div> 
                  <button type="button" onClick={() => handleAddOne()}>Add</button>
                    {val.map((data,i) => {
                      return (
                        <ReactQuill
                          theme='snow'
                          modules={modules}
                          id="down"
                          onChange={e=>handleChangeOne(e,i)}
                        />
                      )
                    })}         
                </div>*/}

                <button type="submit" className="btn btn-primary me-3">Submit</button>

              </form>
            </div>
          </div>
        </div>)
      : (
        <div>
          {records.map((curElem) => {
            return (
                <div className="pdf">
                  <div ref={componentRef} 
                      style={{width: '100%'}} 
                      className="pdfdoc">
                    <div className="space"></div>
                    <h2 id="h2">{curElem.heading}</h2>
                    <div className="center">
                      <h2>Mzurie Molo Farm: {curElem.grower}</h2>
                      <h5>Crop: {curElem.mmea}</h5>
                      <h5>Trial start date: {curElem.trialdate}</h5>
                      <h5>Vasing date: {curElem.vdate}</h5>
                    </div>
                    <br/>
                    <p id="u"> Report date: {curElem.rdate}</p>
                    <br/>
                    <h5>Introduction</h5>
                    <br/>
                    {curElem.intro}
                    
                    <h5>Trial Test Scheme {curElem.crop}</h5><br/>
                    <p>&nbsp;29th: &nbsp; &nbsp; 
                      <b><i>Crop: &nbsp;&nbsp;Vasing date: {curElem.vdate}</i></b>
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
                          <td>Trm</td>
                          <td>Farm</td>
                          <td>Treatment</td>
                          <td id="empty">Dry</td>
                          <td id="empty">Chrysal Inicial</td>
                          <td id="empty">Chrysal Clear</td>
                          <td>1-3</td>
                        </tr>        
                        <tr id="details">
                          <td>Details</td>
                          <td>{curElem.harvestsol}</td>
                          <td>{curElem.postgrading}</td>
                          <td>{curElem.trans}</td>
                          <td>{curElem.str}</td>
                          <td>{curElem.cons}</td>
                          <td></td>
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
              )
          })} 
        </div>
      )}
    </>
  )
}

export default HomePage