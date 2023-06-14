import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className="max-w-sm shadow-xl">
      <div className="w-full h-64">
        <img
          src={image.webformatURL}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-5 w-full px-2">
        <h1 className="text-xl text-gray-900 font-semibold">
          Photo By {image.user}
        </h1>
        <ul className="py-2">
          <li className="py-1 text-gray-700">
            <strong>Views :</strong>
            {" "+image.views}
          </li>
          <li className="py-1 text-gray-700">
            <strong>Downloads :</strong>
            {" "+image.downloads}
          </li>
          <li className="py-1 text-gray-700">
            <strong>Likes :</strong>
            {" "+image.likes}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImageCard
