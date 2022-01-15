import React, {useState} from 'react'

export default function Textform(props) {

const [text, setText] = useState("");

const handleOnchange = (event)=> {
  // console.log("Onchange");
  setText(event.target.value);
}

const handleUpclick = ()=> {
  // console.log("Uppercase was clicked");
  let newText = text.toUpperCase();
  setText(newText);
  props.showalert("converted to uppeer case","success");
}

const handleLoclick = ()=> {
  let newText = text.toLowerCase();
  setText(newText);
  props.showalert("conveted to lower case","success");
}

const handleClclick = ()=> {
  let newText = "";
  setText(newText);
  props.showalert("cleared","success");
}

const handleCopyclick =()=>{
  // var copyText = text;

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text);
  props.showalert("copied to clipboard","success");

}

  return (
    <>
      <div>
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'black' }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2> {props.heading} </h2></label>
          <textarea className="form-control" value = {text} onChange={handleOnchange} style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-2" onClick= {handleUpclick} >Click here to upper case</button>
          <button className="btn btn-primary mx-2" onClick= {handleLoclick} >Click here to lower case</button>
          <button className="btn btn-primary mx-2" onClick= {handleClclick} >Click here to clear</button>
          <button className="btn btn-primary mx-2" onClick= {handleCopyclick} >Click here to copy</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
            <h2>Text summary</h2>
          <p>
            The text contains {text.split(" ").length} words and {text.length} character. <br />
            you need {0.008 * text.split(" ").length } time to read.
          </p>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
          <h2>Previewe</h2>
          <p>
            {text.length>0?text:"Enter text to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
