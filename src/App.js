import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddContacts from "./Components/AddContacts";
import ContactList from "./Components/ContactList";
import EditContacts from "./Components/EditContacts";
import NavBar from "./Components/NavBar";

import ViewContacts from "./Components/ViewContacts";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contact/list"} />} />
        <Route path={"/contact/list"} element={<ContactList />} />
        <Route path={"/contact/view/:contactId"} element={<ViewContacts />} />
        <Route path={"/contact/edit/:contactId"} element={<EditContacts />} />
        <Route path={"/contact/add"} element={<AddContacts />} />
      </Routes>
    </div>
  );
};

export default App;
