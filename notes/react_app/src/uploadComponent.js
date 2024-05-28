import React, { useRef, useState } from 'react';
import axios from 'axios';
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'

const PhotoUpload = () => {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');
    const [fileName, setFileName] = useState('');
    const [output, setOutput] = useState(null);
    const [image, setImage] = useState(null);



    const [crop, setCrop] = useState()

    // Handle file selection
    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        if (file) {
            setFileName(file);
            setImage(file)
            setPreview(URL.createObjectURL(file));
        }
    };

    // Handle file upload
    const handleUpload = async () => {
        const file = fileInputRef.current.files[0];
        if (!file) {
            setMessage('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('File uploaded successfully');
        } catch (error) {
            setMessage('Error uploading file');
        }
    };

    console.log(image);


    const cropImageNow = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image?.naturalWidth / image.width;
        const scaleY = image?.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        // Converting to base64
        const base64Image = canvas.toDataURL('image/jpeg');
        setOutput(base64Image);
    };


    return (
        <div className="file-upload">
            <h2>Upload Photo</h2>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            {/* {fileName && <p>Selected file: {fileName.name}</p>} */}
            <br />
            {/* {crop && <img src={URL.createObjectURL(crop)} alt="fileName" style={{ width: '400px', marginTop: '10px' }} />} */}
            {fileName &&
                <ReactCrop crop={crop} onChange={c => setCrop(c)} onImageLoaded={setImage}>
                    <img src={URL.createObjectURL(fileName)} alt="fileName" style={{ width: '400px', marginTop: '10px' }} />
                    <button onClick={cropImageNow}>Crop</button>
                </ReactCrop>
            }

            {/* {
                fileName && <ReactCrop src={URL.createObjectURL(fileName)} onImageLoaded={setImage}
                    crop={crop} onChange={setCrop} />
            } */}


            <br />
            <br />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PhotoUpload;
