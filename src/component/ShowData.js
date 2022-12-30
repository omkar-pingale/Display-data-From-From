import axios from "axios";
import { useState, useEffect } from "react";

const ShowData = () => {
  const [Data, setData] = useState();
  const [curpage, setcurpage] = useState();

  useEffect(() => { //funtion for fetching data 
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("There was an error!", err);
      });
  }, []);

  // const getnextpage=()=>{
  //     for (let i = j; i < j+10; i++) {
  //      arr.push(Data.i)
  //     }
  // }
  // getnextpage()

  //   console.log("props", props);
  return (
    <div>
      <table>
        <thead>
          <th style={{ width: "3%", padding: "5px" }}>ID</th> {/* titles of column row*/}
          <th style={{ width: "30%", padding: "5px" }}>Title</th>
          <th style={{ width: "87%", padding: "5px" }}>Body</th>
        </thead>
        <tbody style={{ padding: "2px" }}>
          {Data &&
            Data.map((row) => (
              <tr> {/* rows*/}
                <td style={{ width: "3%", padding: "5px" }}>{row.id}</td>
                <td style={{ width: "30%", padding: "5px" }}>{row.title}</td>
                <td style={{ width: "87%", padding: "5px" }}>{row.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
