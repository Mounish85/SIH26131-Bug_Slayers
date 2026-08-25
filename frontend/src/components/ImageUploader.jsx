import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';

const ImageUploader = ({ onImageSelect }) => {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const selectFile = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onImageSelect(file, url);
    }
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    selectFile(files?.[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const { files } = event.dataTransfer;
    selectFile(files?.[0]);
  };

  const removeImage = () => {
    setPreview(null);
    onImageSelect(null, null);
  };

  return (
    <div className="image-uploader">
      {!preview ? (
        <label
          className={`upload-area${isDragging ? ' drag-active' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <Upload size={48} className="upload-icon" />
          <p>Drag and drop or click to upload</p>
          <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} hidden />
        </label>
      ) : (
        <div className="preview-area">
          <img src={preview} alt="Crop preview" className="image-preview" />
          <button type="button" className="btn-remove" onClick={removeImage}>
            <X size={20} /> Remove
          </button>
        </div>
      )}
    </div>
  );
};
export default ImageUploader;