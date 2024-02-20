import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import React, {useState} from 'react'

export default function Textarea() {
  const [convertedText, setConvertedText] = useState("");
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
      />
    </div>
  );
}