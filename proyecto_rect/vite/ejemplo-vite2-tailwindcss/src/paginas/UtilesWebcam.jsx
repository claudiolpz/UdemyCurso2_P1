import { Link } from "react-router";
import {useRef, useState, useCallback} from 'react'

import Webcam from 'react-webcam'

const UtilesWebcam = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing]= useState(false);
  const [recorderChunks, setRecorderChunks] = useState([])
  const handleStartCaptureClick = useCallback(()=>{
    setCapturing(true);
    mediaRecorderRef.current= new MediaRecorder(webcamRef.current.stream,{
      mimeType:"video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({data}) =>{
      if(data.size >0){
        setRecorderChunks((prev)=>prev.concat(data));
      }
    },
    [setRecorderChunks]
  );
  const handleStopCaptureClick = useCallback(()=>{
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef,webcamRef, setCapturing]);
  const handleDownload = useCallback(()=>{
    if(recorderChunks.length){
      const blob = new Blob(recorderChunks, {
        type:"video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display:none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm"
      a.click();
      window.URL.revokeObjectURL(url);
      setRecorderChunks([]);
    }
  }, [recorderChunks])

  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              to="/utiles"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Utiles
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Webcam
            </span>
          </div>
        </li>
      </ol>
    </nav>
    <h1 className="text-center mb-2">Webcam </h1>
    <hr />
    <Webcam audio={true} ref={webcamRef} />
    {capturing ? (
     <button
     onClick={handleStopCaptureClick}
     className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     >
     Detener Captura
   </button>
    ):(
      <button
      onClick={handleStartCaptureClick}
      className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
      Hacer Captura
    </button>)}
    {console.log(recorderChunks.length)}
    {recorderChunks.length >0 && (
      <button
      onClick={handleDownload}
      className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
      Descargar
    </button>
    )}
    </div>
  )
}

export default UtilesWebcam
