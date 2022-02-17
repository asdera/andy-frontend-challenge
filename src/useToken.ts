import { useState } from "react";

export interface loginToken {
  username: string;
  password: string;
  viewPrivate: boolean;
}

// MANUAL LOGINS
const WorkingLogins: { [name: string]: string } = {
  htn: "123",
  hackglobal: "ilovecode",
  andy: "wang",
  zaf: "hi",
  feteam: "react",
};

const login = (userToken: loginToken) => {
  if (WorkingLogins[userToken.username] === userToken.password) {
    // Do something to protect user data
    return { ...userToken, password: "", viewPrivate: true };
  } else {
    return userToken;
  }
};

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (!tokenString) return { username: "", password: "", viewPrivate: false };
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: loginToken) => {
    const newUserToken = login(userToken);
    if (!newUserToken.viewPrivate) {
      return false;
    }
    localStorage.setItem("token", JSON.stringify(newUserToken));
    setToken(newUserToken);
    return true;
  };

  return {
    setToken: saveToken,
    token,
  };
}
