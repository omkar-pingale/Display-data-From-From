import ShowData from "./component/ShowData.js";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [Flag, setFlag] = useState(false); 
  const [UserTitle, setUserTitle] = useState('')
  const [UserBody, setUserBody] = useState('')
  // const [Data, setData] = useState()[];

  const sendData = () => { // funtion for sending data to server
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",

      data: {
        Title: UserTitle,
        Body: UserBody,
        //data canot be stored in server, but the request has been made for the same  
      },
    })
      .then((res) => {
        setFlag(false)
      })
      .catch((err) => {
        console.log("There was an error!", err);
        alert("Error!, Refresh The Page")
      });

    console.log("sendDataCalled");
  };


  const handelUserTitle =(e)=>{ //storing user given title
    setUserTitle(e.target.value) 
  }
  const handelUserBody =(e)=>{ // storing user given body
    setUserBody(e.target.value)
  }
  

  return (
    <div>
      {Flag ? (
        <>
          <button onClick={() => setFlag(false)}> Show Data</button> {/* optional condition to render form or to show data  */}
          <>
            <h2> Add Data</h2> {/* form code */}
            <input type="text" name="Title" placeholder="Enter Title" onChange={handelUserTitle}/>
            <input type="text" name="Body" placeholder="Enter Body" onChange={handelUserBody} />
            <button onClick={() => sendData()} type="submit">
              {" "}
              submit
            </button>
          </>
        </>
      ) : (
        <>
          <button onClick={() => setFlag(true)}> Add Data</button> {/* data display code */}
          <ShowData/>{" "}
          {/* <ShowData Data={Data} setData={(e) => setData(e)} /> */}
        </>
      )}
    </div>
  );
}

export default App;
