import React from "react";

export default function ListPosts({ posts }) {
  return (
    <>
      <div className="container">
        <h3>Lista de Postagens</h3>
        <div className="row">
          {posts.length
            ? posts.map((post, i) => (
                <div key={i} className="col-sm-6 col-md-4">
                  <div className="card p-2 m-2" style={{ width: "100%" }}>
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {post.user.username}
                      </h6>
                      <p className="card-text">{post.body}</p>
                      <ul className="list-group">
                        <li className="list-group-item text-right">
                          <span className="float-left">
                            <strong>Comentários</strong>
                          </span>
                          {post.comments.length}
                        </li>

                        {post.comments.map((comment, i) => {
                          return (
                            <li key={i} className="list-group-item small">
                              <small>{comment.body}</small>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
