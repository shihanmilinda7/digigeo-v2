"use client";

import Modal from "react-modal";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaFilter } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AreaFilter = ({ isOpenIn, closePopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 50,
    },
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    setIsOpen(isOpenIn);
  }, [isOpenIn]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closePopup}
        // shouldCloseOnOverlayClick={false}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="flex items-center justify-center">
          <span className="text-base font-semibold leading-none text-gray-900 select-none mr-auto flex item-center justify-center uppercase">
            Filters
          </span>
          <AiOutlineCloseCircle
            onClick={closePopup}
            className="h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer flex justify-end"
          />
        </div>
        <div className="flex items-center justify-center pl-8 pr-8">
          <div className="mx-auto w-full max-w-[550px]">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 flex flex-col gap-3">
                {/* <TextInputField
                  label="Old Password"
                  id="oldpassword"
                  name="oldpassword"
                  autoComplete=""
                  placeholder="Old Password"
                  value={oldpassword}
                  onChange={(e) => setOldpassword(e.target.value)}
                /> */}
                {/* <TextInputField
                  label="New Password"
                  id="newpassword"
                  name="newpassword"
                  autoComplete=""
                  placeholder="Task Description"
                  value={newpassword}
                  onChange={(e) => setNewpassword(e.target.value)}
                /> */}
                {/* <TextInputField
                  label="Confirm New Password"
                  id="confirmnewpassword"
                  name="confirmnewpassword"
                  autoComplete=""
                  placeholder="Confirm New Password"
                  value={confirmnewpassword}
                  onChange={(e) => setConfirmnewpassword(e.target.value)}
                /> */}
              </div>
            </div>
            <div className="flex items-center justify-center mt-3">
              <div className="mr-3">
                <Button color="danger" variant="faded" onClick={closePopup}>
                  Close
                </Button>
                {/* <button
                  onClick={updateNewPassword}
                  className="rounded-lg bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Update
                </button> */}
              </div>
              <div>
                <Button color="primary">Save</Button>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600  hover:bg-gradient-to-l hover:from-amber-500 hover:to-amber-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AreaFilter;
