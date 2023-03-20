import React from "react";

const Modal = ({ item, onClose }) => {
  const { id, title, short_description, platform, genre, thumbnail } = item;

  return (
    <div className="bg-fixed bg-no-repeat bg-center flex flex-col z-10 fixed inset-0 bg-opacity-50 backdrop-blur-sm justify-center items-center">
      <img src={thumbnail} alt="img" className="" />
      <div className="bg-white">
        <div className="">{id}</div>
        <div className="">{title}</div>
        <div className="">{short_description}</div>
        <div className="">{platform}</div>
        <div className="">{genre}</div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
