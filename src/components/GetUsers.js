import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { LOAD_USERS } from "../GraphQL/Queries";

export default function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <div>GetUsers</div>
    </div>
  );
}
