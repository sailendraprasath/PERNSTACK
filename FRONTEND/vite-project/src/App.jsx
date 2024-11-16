import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InputTodo from "./pages/InputTodo";
import { Fragment } from "react";
import ListTodo from "./pages/ListTodo";

function App() {
  

  return (
    <>
    <Fragment>
      <div className="container">
      <InputTodo/>
      <ListTodo/>
      </div>
    </Fragment>
 
    </>
  )
}
{/* <BrowserRouter>
<Routes>
 <Route path="" element={<InputTodo/>}/>
 <Route path="" element={<ListTodo/>}/>
</Routes>
</BrowserRouter> */}

export default App
