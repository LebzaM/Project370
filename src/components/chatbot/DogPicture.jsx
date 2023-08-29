import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageData, setImageData] = useState(null);
  const imageUrl = 'data:image/jpeg;base64,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'; // Replace with your image URL

  useEffect(() => {
    // Fetch the image data from the URL
    fetch(imageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.arrayBuffer(); 
      })
      .then((data) => {
        setImageData(data); // Store the image data in state
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [imageUrl]);

  return (
    <div>
      {imageData ? (
        <img
          src={`data:image/jpeg;base64,${btoa(
            new Uint8Array(imageData).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          )}`}
          alt="Campus"
          style={{width:'75%'}}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DogPicture;