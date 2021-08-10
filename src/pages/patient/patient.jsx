import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./patient.css";

const Patient = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="PatientInfo">
        <div className="PatientImg">
          <img
            src="https://static01.nyt.com/images/2020/05/26/fashion/26STEP-CHICKENS-TIKTOK-CULT-1/26STEP-CHICKENS-TIKTOK-CULT-1-superJumbo.jpg"
            alt=""
          />
        </div>
        <div className="PatientName">
          <p>XueHuaPiao</p>
          <button className="buttonpatient">Config</button>
        </div>
      </div>
        <div className="valuescontainer">
      <div className="BloodPressure">
        <p className="bloodvalue">110/80 mm </p>
        <p className="bloodplaceholder">Blood Pressure</p>
        <div className="BloodCircle">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEVN/wxFqpIQAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
      </div>

      <div className="OxygenLevel">
        <p className="oxygenvalue">100 mm</p>
        <p className="oxygenplaceholder">Oxygen Level</p>
        <div className="oxygencircle">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoICg8HCBAHBwcHDQoHBwcHDQ8IDQcKFRUWFhURHx8YHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NFysZHx0rKysrKysrNysrKysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOUA3QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAKhABAQEAAQMCBQIHAAAAAAAAAAERAjFh8BIhIkFRcYEyQgMTUnKCktH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQcE/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDrARWSO5GbxaQFhCJAaiAC1MUQZxcCKJ59Vw0gBaaSopLQ1RENNUBFTQZz9qrCVaJ+D/ZpOQCFIAuEpqAYU0DDBKoohEFglXFFTFiAk+4qaBISKaBKkWxAN89mk86gEqRYQCUMEUtKKqM28eJpzpICouGIJrSQkIFClUSLxJCIJYqNAJCpii4RMMBTE1QPSYRNNFAoH6RmxrUAwzz2IBZ6lS8iVRLOpJfqnInpBqEhhAJFMSgUgUE3z3NUgAUxBMXFASqCiYQICSCwIIu9iEACw0FZhqwGfiXVUGfwsqYucQBFxACAFISAIqRN5eRRqQhFQTAtFBRNBFsNPwAKmgQBRFwKgaGkqBqgDNpCrPPmoESTuuAalUqCKRcUQhRBUoQFTE1QKAoi0ggaWiYCoWEUVNCz+5BaQWijLSSiFqROXHu1w6KKiKgSJi0UM7qlSgLhCgoioJUq1MUUVEEixJFih9U91PfsghrSWdlCFpD9QIsvQIiqnzCAVYnKkqomGLSAFLCgJi2mgSFhpoLUNKgikABLPPYk6f8AFD93ncXAE09KkA086rDQTPOpIJoLAZQXjVTVkBOXqaiWJIoRplYBhTQD8BpiCVdLDQRVqKGEis6CkTz5rgGJpYQFlJSIBvwrBJQWFiS+/pVAJPOqyAIBQS/D/kQnnuRRQgBKIuAaakUBFhEFQqWKLvZFLfSCWmQtUEhILAJFxKQAwZs8wGjEkUFQtMQUE2Al4kW1PVx+qi4YT7EAkLCgFVMTfMBSqyC4BYBQ0oGEgQAE85AuqgUKi+dF0E1KsVBlTCqEVMVBKST5JyIoappfsBhgIELAFEiioi8jDQImtJb/AFAFqatBLSryANCRKQWwsDUCTz3WMlUWpasKBpqNIJSefI5JFFpqatqBQigmqgoJVwoGFKAqYtSAG90pxqAtVFExdKaBKaRNBYSLqeqAQ3skigVItJATley8OiZ1J6vz8wWhKqCGFKAUlKoaWprSCBRQpfPcIBL2SVaAFExBUXBRFRcAxIsiQFgEAtVLTUE5dKsKRRNZ/mdoANStADO/EtAAiiCKAIWACLQALAAsQFFhAAZwDBsAEpQQKn8LoCj/2Q=="
            alt=""
          />
        </div>
      </div>

      <div className="SugarLevel">
          <p className="sugarvalue">120mg</p>
          <p className="sugarplaceholder">Sugar Level</p>
          <div className="sugarcircle">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="" />
          </div>
      </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default Patient;
