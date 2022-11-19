import React from "react";

export const DataContext = React.createContext({
  user_id: null,
  first_name: "",
  last_name: "",
  email: "",
});
