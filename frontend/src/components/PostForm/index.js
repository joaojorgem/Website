import React, { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

export default function PostForm({ refreshPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmitform(e) {
    e.preventDefault();

    api
      .post("/posts", { title, body })
      .then(({ data }) => {
        refreshPost(data);
        setTitle("");
        setBody("");
        Swal.fire(
          "Postagem Cadastrada!",
          "Sua postagem foi cadastrada com sucesso!",
          "success"
        );
      })
      .catch(error => Swal.fire("Error!", error.message, "error"));
  }
  return (
    <div className="container">
      <h2>Cadastrar Postagem</h2> <hr></hr>
      <form onSubmit={e => handleSubmitform(e)}>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Titulo:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Artigo:
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              value={body}
              onChange={e => setBody(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Cadastrar Postagem
            </button>
          </div>
        </div>
      </form>
      <hr></hr>
    </div>
  );
}
