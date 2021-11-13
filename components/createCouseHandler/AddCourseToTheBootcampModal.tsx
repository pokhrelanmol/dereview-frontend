import React, { useState } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const AddCourseToTheBootcampModal = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="">
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="p-10 ">
          <div className="flex flex-col space-y-3 mb-5">
            <label htmlFor="name">Name of the Course</label>
            <input
              type="text"
              className="px-5 py-3 border-2 rounded-md  "
              placeholder="Name of Course"
            />
          </div>
          <div>
            <label htmlFor="description"> Description</label>
            <br />
            <textarea
              cols={60}
              rows={10}
              className="p-5 border-2 rounded-md"
              placeholder="Course description"
            ></textarea>
          </div>
          <button className="float-right py-2 px-7  rounded-md shadow-md bg-gray-200    focus:bg-red-100 ">
            ADD
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddCourseToTheBootcampModal;
