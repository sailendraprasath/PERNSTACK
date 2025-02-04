import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const onsubmitForm = async(e)=>{
    e.preventDefault();
    try {
      const body ={ description };
      const response = await fetch("http://localhost:4000/todos",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <Fragment>
        <h1 className="text-center mt-5">Pern Todo List</h1>
        <form className="d-flex mt-5 ml-96" onSubmit={onsubmitForm}>
          <input
            type="text"
            className="form-control border-black border-2 "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-warning">ADD</button>
        </form>
      </Fragment>
    </>
  );
};

export default InputTodo;
