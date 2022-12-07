import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "./ContactService";

const EditContacts = () => {
  const navigate = useNavigate();
  const { contactId } = useParams;
  const [state, setState] = useState({
    loading: false,
    contacts: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: [],
    errorMessage: "",
  });
  useEffect(() => async () => {
    try {
      setState({ ...state, loading: true });
      const response = await ContactService.getContact(contactId);
      const groupResponse = await ContactService.getGroup(response.data);
      setState({
        ...state,
        loading: false,
        contacts: response.data,
        groups: groupResponse.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  });
  const updateInput = (e) => {
    setState({
      ...state,
      contacts: {
        ...state.contacts,
        [e.target.name]: e.target.value,
      },
    });
  };
  const submitForm = async (e) => {
    e.prevent.default();
    try {
      const response = await ContactService.updateContact(
        state.contacts,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, loading: false, errorMessage: error.message });
      navigate(`/contacts/edit${contactId}`, { replace: false });
    }
  };

  const { contacts, groups } = state;

  return (
    <div>
      <div>
        <section className="edit-contact p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-primary fw-bold">Edit Contact</p>
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
            <div className="row align-items-center">
              <div className="col-md-4">
                <form onSubmit={submitForm}>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="name"
                      value={contacts.name}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="mobile"
                      value={contacts.mobile}
                      onChange={updateInput}
                      type="number"
                      className="form-control"
                      placeholder="Number"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="photo"
                      value={contacts.photo}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Photo URL"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="email"
                      value={contacts.email}
                      onChange={updateInput}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="company"
                      value={contacts.company}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="title"
                      value={contacts.title}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="title"
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      required={true}
                      name="groupId"
                      value={contacts.groupId}
                      onChange={updateInput}
                      className="form-control"
                    >
                      <option value="">Select Group</option>
                      {groups.length > 0 &&
                        groups.map((group) => {
                          return (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Update"
                    />
                    <Link to={"/contact/list"} className="btn btn-dark ms-2">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <img src={contacts.photo} alt="" className="contact-img" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditContacts;
