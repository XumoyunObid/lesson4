import React from "react";
import { Modal } from "../../components/ui/modal";
import { Register } from "./register";
import { loadState, saveState } from "../../config/storage";
import { useModal } from "../../hook/useModal";
import { Login } from "./login";
import { Link } from "react-router-dom";
import Logo from "/vite.svg";
import Navbar from "./components/navbar";

export const Header = () => {
  const { isOpen, close, open } = useModal();
  const { isOpen: isOpen2, toggle } = useModal();
  const user = loadState("user");

  return (
    <div className="bg-white shadow px-4 py-3">
      <div className="container  flex justify-between items-center">
        <img src={Logo} alt="" />
        <Navbar />
        <Modal isOpen={isOpen} close={close}>
          {!isOpen2 ? (
            <Register changeModal={toggle} closeModal={close} />
          ) : (
            <Login close={close} />
          )}

          <button className=" text-red-400" onClick={toggle}>
            {isOpen2 ? "Register" : "Login"}
          </button>
        </Modal>
        {!user ? (
          <button
            onClick={open}
            className=" bg-blue-500 text-white py-4 px-9 rounded-lg"
          >
            Kirish
          </button>
        ) : (
          <Link
            to="/user"
            className=" bg-blue-500 text-white py-4 px-9 rounded-lg"
          >
            Profile
          </Link>
        )}
      </div>
    </div>
  );
};
