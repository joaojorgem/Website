import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useRouteMatch } from "react-router-dom";
import Profile from "../../components/Profile";
import Swal from "sweetalert2";

export default function UserProfile() {
  const [user, setUser] = useState([]);
  const { params } = useRouteMatch();

  useEffect(() => {
    const id = params.id;
    function loadUser() {
      api
        .get(`user/${id}/posts`)
        .then(({ data }) => {
          setUser(data);
        })
        .catch(error => {
          Swal.fire("Error!", error.message, "error");
        });
    }
    return loadUser();
  }, []);

  return <Profile user={user}></Profile>;
}
