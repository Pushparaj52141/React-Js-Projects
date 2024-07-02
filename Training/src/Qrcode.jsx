import React,{useState} from 'react';

export const Qrcode = () => {
  //useState
  const [img,setImg] = useState("");
  const [loading,setLoading] = useState(false);
  const [qrData,setQrData] =useState("150");
  const[qrSize,setQrSize]=useState("150");
  async function generateQR(){
   setLoading(true);
   try{
     const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
     setImg(url);
   } catch (error){
    console.error("Error Generating QR code",error);
   } finally{
    setLoading(false);
   }
  }  
  function downloadQR() {
   fetch(img).then((response)=>response.blob())
   .then((blob)=>{
    const link = document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="Qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   });
 
  } 
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading&&<p>Please wait...</p>}
        {img && <img src={img} className="img"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data For QR code
            </label>
            <input type="text" value={qrData} id ="dataInput" placeholder="Enter Your URL " onChange={(e)=>
            setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">
                Image size (e.g.,150,300):
            </label>
            <input type="text" value={qrSize} id ="dataInput" placeholder="Enter QR Image Size" onChange={(e)=>
            setQrSize(e.target.value)}/>
            <button className = "generate-button" disabled={loading} onClick ={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick ={downloadQR}>Download QR Code</button>

        </div>
        <div className="footer">
        <p>Designed By<a href="https://www.zenaxatech.com/?i=2">Zenaxa</a></p>
    </div>
    </div>
  )
}


