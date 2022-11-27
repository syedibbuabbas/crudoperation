import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "./ContactService";
import Spinner from "./Spinner";

const ViewContacts = () => {
  // const { contactId } = useParams;
  // const [state, setState] = useState({
  //   loading: false,
  //   contact: {},
  //   errorMessage: "",
  //   group : {}
  // });
  // useEffect(() => async () => {
  //   try {
  //     setState({ ...state, loading: true });
  //     const response = await ContactService.getAllContacts(contactId);
  //     const groupResponse = await ContactService.getGroup(response.data)
  //     console.log(response.data);
  //     setState({ ...state, loading: false, contact: response.data, group: groupResponse.data });
  //   } catch (error) {
  //     setState({ ...state, loading: false, errorMessage: error.message });
  //   }
  // });
  // const { loading, contact, errorMessage, group } = state;
  return (
    <div>
      <section>
        <div className="view-contact-intro p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-warning fw-bold">View Contact</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {
        loading ? <Spinner/> :<div>

        </div>
      } */}
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                alt=""
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name:<span className="fw-bold">Raj Kumar</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile Number :<span className="fw-bold">9876543210</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mail ID :<span className="fw-bold">Raj@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company Name :<span className="fw-bold">Zoho</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title :<span className="fw-bold">Mr.</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group :<span className="fw-bold">A Group</span>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <Link to={"/contact/list"} className="btn btn-info">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewContacts;
