import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "./ContactService";

const ContactList = () => {
  const [query, setQuery] = useState({
    text: "",
  });
  const [state, setState] = useState({
    loading: false,
    contacts: {},
    filteredContact: [],
    errorMessage: "",
  });
  const fetchContacts = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await ContactService.getAllContacts();
      setState({ ...state, loading: false, contacts: response.data });
    } catch (error) {
      setState({ ...state, loading: false, errorMessage: error.message });
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  // useEffect(() => async () => {
  //   try {
  //     setState({ ...state, loading: true });
  //     const response = await ContactService.getAllContacts();
  //     setState({
  //       ...state,
  //       loading: false,
  //       contacts: response.data,
  //       filteredContact: response.data,
  //     });
  //   } catch (error) {
  //     setState({ ...state, loading: false, errorMessage: error.message });
  //   }
  // });
  const clickDelete = async (contactId) => {
    try {
      const response = await ContactService.deleteContact(contactId);
      if (response) {
        setState({ ...state, loading: true });
        const response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContact: response.data,
        });
      }
    } catch (error) {
      setState({ ...state, loading: false, errorMessage: error.message });
    }
  };

  const { filteredContact } = state;

  const SearchContacts = (e) => {
    setQuery({ ...query, text: e.target.value });
    const cont = state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({
      ...state,
      filteredContact: cont,
    });
  };
  return (
    <div>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="column">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contact/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>

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
            <div className="row">
              <div className="col-md-4">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        name="text"
                        value={query.text}
                        onChange={SearchContacts}
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            {filteredContact.length > 0 &&
              filteredContact.map((contact) => {
                return (
                  <div className="col-md-6" key={contact.id}>
                    <div className="card my-2">
                      <div className="card-body">
                        <div
                          className="row
                    align-items-center
                    d-flex
                    justify-content-around "
                        >
                          <div className="col-md-4">
                            <img
                              src={contact.photo}
                              className="contact-img"
                              alt=""
                            />
                          </div>
                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                Name:
                                <span className="fw-bold">{contact.name}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Mobile Number:
                                <span className="fw-bold">
                                  {contact.mobile}
                                </span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Mail ID:
                                <span className="fw-bold">{contact.email}</span>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="col-md-1
                      d-flex
                      flex-column
                      align-items-center "
                          >
                            <Link
                              to={`/contact/view/${contact.id}`}
                              className="btn btn-warning my-1"
                            >
                              <i className="fa fa-eye" />
                            </Link>
                            <Link
                              to={`/contact/edit/${contact.id}`}
                              className="btn btn-primary my-1"
                            >
                              <i className="fa fa-edit" />
                            </Link>
                            <button
                              className="btn btn-danger my-1"
                              onClick={() => clickDelete(contact.id)}
                            >
                              <i className="fa fa-trash" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactList;
