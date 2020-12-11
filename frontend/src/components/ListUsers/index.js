import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function loadUsers() {
      api
        .get("users")
        .then(({ data }) => {
          setUsers(data);
        })
        .catch(error => {
          Swal.fire("Error!", error.message, "error");
        });
    }
    return loadUsers();
  }, []);

  return (
    <>
      <h1>Usuarios</h1>
      <div className="row">
        {users.map((user, i) => (
          <div key={i} className="col-sm-6 col-md-3">
            <div className="card mb-5">
              <img
                src={`https://api.adorable.io/avatars/${user.id}`}
                className="card-img-top circled"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize text-center">
                  {user.username}
                </h5>
                <p className="card-text text-center">{user.email}</p>
                <Link
                  to={"/user/" + user.id}
                  className="btn btn-block btn-primary"
                >
                  Ver Perfil
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
