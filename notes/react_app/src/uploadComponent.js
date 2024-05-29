import React, { useRef, useState } from 'react';
import axios from 'axios';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

const PhotoUpload = () => {
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');
    const [output, setOutput] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 });
    const imgRef = useRef(null);

    const handleFileChange = () => {
        const file = imgRef.current.files[0];
        if (file) {
            // setFileName(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        const file = imgRef.current.files[0];
        if (!file) {
            setMessage('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('photo', file);

        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('File uploaded successfully');
        } catch (error) {
            setMessage('Error uploading file');
        }
    };

    const cropImageNow = () => {

        const canvas = document.createElement('canvas');
        const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
        const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
        const pixelRatio = window.devicePixelRatio;

        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;

        const ctx = canvas.getContext('2d');
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            imgRef.current,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width * pixelRatio,
            crop.height * pixelRatio,
        );

        canvas.toBlob((blob) => {
            setOutput(new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' }));
        }, 'image/jpeg');

        // const base64Image = canvas.toDataURL('image/jpeg');

    };

    return (
        <div className="file-upload">
            <h2>Upload Photo</h2>
            <input
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={handleFileChange}
            />
            <br />
            {preview && (
                <div>
                    <ReactCrop
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onImageLoaded={(img) => imgRef.current = img}
                    >
                        <img
                            ref={imgRef}
                            src={preview}
                            alt="Crop preview"
                            style={{ width: '400px', marginTop: '10px' }}
                        />
                    </ReactCrop>
                    <button onClick={cropImageNow}>Crop</button>
                </div>
            )}
            <br />
            <br />
            {output && <img src={URL.createObjectURL(output)} />}
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PhotoUpload;
