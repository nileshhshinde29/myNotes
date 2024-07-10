import React, { useState, useRef } from 'react';
import { Cropper } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';

export const UploadExample = () => {
    const cropperRef = useRef(null);

    const [image] = useState(
        'https://images.unsplash.com/photo-1604335079441-274c03ad99a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80',
    );

    const onUpload = () => {
        if (cropperRef.current) {
            const canvas = cropperRef.current.getCanvas();
            if (canvas) {
                canvas.toBlob((blob) => {
                    if (blob) {
                        console.log("image", image);
                        console.log("blob", new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' }));
                        const form = new FormData();
                        form.append('file', blob, 'cropped-image.jpg');
                        fetch('http://example.com/upload/', {
                            method: 'POST',
                            body: form,
                        }).then((response) => {
                            if (response.ok) {
                                console.log('Upload successful!');
                            } else {
                                console.error('Upload failed.');
                            }
                        });
                    }
                }, 'image/jpeg');
            }
        }
    };

    return (
        <div>
            <input type='file' onChange={(e) => console.log(e)} />
            <Cropper
                ref={cropperRef}
                src={image}
                className="cropper"
            />
            <button onClick={onUpload}>Upload</button>
        </div>
    );
};

export default UploadExample