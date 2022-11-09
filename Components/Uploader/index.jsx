import React from "react";
import { SlPaperClip } from 'react-icons/sl'
import {useRef} from 'react';

export default function Uploader() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="space-x-4">
      <button className="border py-2 rounded text-xs bg-primary-400 inline-flex align-middle items-center space-x-2 justify-center px-4 shadow" onClick={handleClick}>
        < SlPaperClip /><span>Upload</span>
      </button>
      <input type="file" className="text-xs" ref={inputRef}/>
    </div>
  );
}
