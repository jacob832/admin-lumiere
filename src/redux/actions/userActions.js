export const login = (userInfo) => {
    return {
      type: "LOGIN",
      payload: userInfo,
    };
  };
  
  export const logout = () => {
    return {
      type: "LOGOUT",
    };
  };
  