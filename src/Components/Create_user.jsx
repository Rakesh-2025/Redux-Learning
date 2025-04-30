import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from '../Slices/user_slice';


const Create_user = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const dispatch = useDispatch();

  const nameinput = (e) => {
    setName(e.target.value);
  };

  const ageinput = (e) => {
    setAge(e.target.value);
  };

  const emailinput = (e) => {
    setEmail(e.target.value);
  };

  const phoneinput = (e) => {
    setPhone(e.target.value);
  };

  const Add = () => {
    const users_datas = {
      Name: name,
      Age: age,
      Email: email,
      Phone: phone,
    };
    dispatch(addUser(users_datas));
    console.log("Datas :", users_datas);
  };

  return (
    <div className="p-4 d-flex justify-content-center">
      <div className="m-4  w-25 ">
        <div>
          <label htmlFor="">Name :</label>
          <input
            type="text"
            
            className="ms-3"
            onChange={nameinput}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">Age :</label>
          <input
            type="number"
            
            className="ms-4  "
            onChange={ageinput}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="">Phone :</label>
          <input
            type="tel"
           
            className="ms-3"
            onChange={emailinput}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="">Email :</label>
          <input
            type="email"
          
            className="ms-4"
            onChange={phoneinput}
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button onClick={Add} className="btn-success btn btn-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create_user;
