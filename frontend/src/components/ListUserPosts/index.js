import React from "react";

export default function ListUserPosts({ user }) {
  return (
    <>
      <div className="row">
        {user.posts && user.posts.length ? (
          user.posts.map((post, i) => (
            <div className="col-sm-12 col-md-4">
              <div key={i} className="card p-2 m-2" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.username}
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
        ) : (
          <div className="h1">Ainda não tem nenhuma postagem!</div>
        )}
      </div>
    </>
  );
}
