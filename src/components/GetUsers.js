import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { LOAD_USERS } from "../GraphQL/Queries";

export default function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  return (
    <div>
      <div>
        {
            users?.slice(0,20).map((u)=>(
                <div key={u.id}>
                    {u.email}
                </div>
            ))
        }
      </div>
    </div>
  );
}
