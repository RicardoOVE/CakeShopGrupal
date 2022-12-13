import React from "react";
import axios from "axios"
import { useState } from "react";


const Addimage = () => {


    const [image, setImage] = useState({ preview: '', data: '' })
    const [url, setUrl] = useState("");

    const sendForm = (e) => {
        e.preventDefault();
        
        let formData = new FormData()
        formData.append('file', image.data)
        axios.post("http://localhost:8000/api/imagen", formData)
            .then(result => {
                console.log(result);
            })
            .catch(err => (false));
    }

    const handleFileChange = (e) => {
        const vid = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(vid);
        setUrl(vid.data.name);
    }

    return (
<div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
<form onSubmit={sendForm}>
 
 <div className='form-group'>
     <label htmlFor="file">Imagen:</label>
     <input type='file' name='file' onChange={handleFileChange} required className="form-control" accept='image/png, image/jpeg ,image/jpg, image/webp'></input>
     {image.preview && <img src={image.preview} alt="File not available" className={`mt-3 mb-2 `} />}
 </div>
 <button type='submit' className="btn btn-primary">Guardar</button>
</form>

</div>
)

}

export default Addimage;
