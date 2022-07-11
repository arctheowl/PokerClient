import { TokenValidator } from "./LandingPage";
import { IUser } from "../contexts/userContexts";

const ProfileBasic = () => {
  
  let user
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user")!)
  }
 
  console.log(user);

  if (user) {
    console.log(user);
    if (TokenValidator(`${user.access_token}`)) {
      return (
        <>
          <div>{user.email}</div>
          <div>{user.id}</div>
          <div>{user.created_at}</div>
          <div>{user.roles}</div>
          <div>{user.signup_methods}</div>
          <div>{user.updated_at}</div>
          <div>{user.access_token}</div>
        </>
      );
    }
  }
  return <h1>No User</h1>;
};

export default ProfileBasic;
