import React from "react";
import ListUserPosts from "../ListUserPosts";

export default function Profile({ user }) {
  return (
    <>
      {user.id && (
        <div className="container bootstrap snippet">
          <div className="row">
            <div className="col-sm-10">
              <h1>{user.username}</h1>
            </div>
            <div className="col-sm-2">
              <a href="/" className=" btn btn-primary col-sm-12 pull-right">
                Voltar
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="text-center">
                <img
                  src={`https://api.adorable.io/avatars/${user.id}`}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
              </div>
              <br />

              <ul className="list-group">
                <li className="list-group-item text-muted">
                  Atividade <i className="fa fa-dashboard fa-1x"></i>
                </li>
                <li className="list-group-item text-right">
                  <span className="float-left">
                    <strong>Posts</strong>
                  </span>
                  {user.posts && user.posts.length}
                </li>
                <li className="list-group-item text-right">
                  <span className="float-left">
                    <strong>Albums</strong>
                  </span>
                  {user.albums && user.albums.length}
                </li>
              </ul>
            </div>
            <div className="col-sm-8">
              <ListUserPosts user={user}></ListUserPosts>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
