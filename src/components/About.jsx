import React, { useState } from "react";
import Footer from "./Footer";


export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
const {togglemode,mode} = props;
 let mystyle ={
   color:props.mode ==='dark'?'Black':'#042743',
   backgroundColor :props.mode==='light'?'b#042743':'white',
   border:'2px solid',
   borderColor:props.mode==='dark'?'Black':'#042743',
 }
 let mystyleh1 ={
  color:props.mode ==='dark'?'white':'#042743',
 }

  return (
    <>
      <div className="container">
        <h1 className="my-3" style={mystyleh1}>About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={mystyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Go over what you wrote
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>
                  Grammar Corrector gives you a tool to rapidly and effectively
                  analyse your writing, including word count, character count,
                  and read minutes. makes it possible to repair typos .{" "}
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                No cost to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>
                  It is Grammar Corrector is a free tool that allows you to
                  statically count words and characters for a given text. Freely
                  examines your grammar, and you can choose whatever specific
                  word you wish to fix.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Responsive and compatible with browsers.
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>
                  looks beautiful on a phone. Every browser, including Chrome,
                  Mozilla, Firefox, Safari, and Opera, can use this tool. It is
                  appropriate to count words and characters in essays, books,
                  Excel documents, PDF documents, and Facebook posts. overflow.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer title="Designed by Paras Raut" mode={mode} togglemode={togglemode} fixed={"fixed"}/>
    </>
  );
}