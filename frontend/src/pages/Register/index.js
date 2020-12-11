import React, { useState } from "react";
import api from "../../services/api";
import { login } from "../../services/auth";
import Swal from "sweetalert2";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmitform(event) {
    event.preventDefault();

    api
      .post("/register", { username, email, password })
      .then(({ data }) => {
        login(data.token);
        window.location.href = "/";
      })
      .catch(error => Swal.fire("Error!", error.message, "error"));
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center  align-items-center mt-5">
          <div className="col col-lg-4">
            <div className="card">
              <article className="card-body">
                <h4 className="card-title text-center mb-4 mt-1">
                  Cadastrar - Oficina 5
                </h4>
                <hr />
                <br></br>
                <form onSubmit={e => handleSubmitform(e)}>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="username"
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Email or login"
                        type="email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="******"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Entrar
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
