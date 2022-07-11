import { IUser } from "../contexts/userContexts";

interface Iprops{
  user: IUser
}

const ProfileBasic = ({user}: Iprops) => {
  
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
};

export default ProfileBasic;
