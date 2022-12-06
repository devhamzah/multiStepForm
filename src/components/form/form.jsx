import { useState } from "react";
import OtherInfo from "./otherInfo";
import PersnolInfo from "./persnolInfo";
import SignUp from "./signup";

const Form = () => {
  const [page, setPage] = useState(0);
  const pages = [
    { title: "Sign Up", element: <SignUp /> },
    { title: "Persnol Info", element: <PersnolInfo /> },
    { title: "Other Info", element: <OtherInfo /> },
  ];

  return (
    <div className="from">

      <div className="formContainer">
        <div className="myform">
        <div  style={{width: page === 0 ? "33.3%" : page === 1 ? "66%" : "100%" }}  className="progressbar">
            
        </div>
        <div className="progressbarlight" ></div>
          <div className="header">
            <h1>{pages[page].title}</h1>
          </div>
          <div className="body">{pages[page].element}</div>
          <div className="footer">
            <button  disabled={page === 0} onClick={() => setPage(page - 1)}>
              Back
            </button>
            <button
              disabled={page === pages.length - 1}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
