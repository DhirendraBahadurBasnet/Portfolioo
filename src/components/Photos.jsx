import React from "react";

const photos = [
  {
    image:
      "https://www.jeevankarki9.com.np/img/jeevan-hazesoft-hdl.jpeg",
  },
  {
    image:
      "https://www.jeevankarki9.com.np/img/jeevan-bungee.jpeg",
  },
  {
    image:
      "https://www.jeevankarki9.com.np/img/profile-pic.jpg",
  },
  {
    image:
      "https://www.jeevankarki9.com.np/img/hazesoft-group-1.jpeg",
  },
];
function Photos() {
  return (
    <div className="w-full lg:px-8 py-8" id="photos">
    <div>
      <h1 className="text-3xl lg:px-12 px-10 ">Photos</h1>
      <div className="photo-items grid lg:grid-cols-2 gap-4 w-full lg:px-12 px-10 py-6">
        {photos.map((photo, index) => (
          <div className="aspect-square">
            <img
              key={index}
              className="object-cover w-full h-full"
              src={photo.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Photos;
