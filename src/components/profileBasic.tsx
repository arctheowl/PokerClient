import { Card, Button} from "@mui/material";
import { IUser } from "../contexts/userContexts";

interface Iprops {
  user: IUser;
}

const ProfileBasic = ({ user }: Iprops) => {
  console.log(user.access_token)
  return (
    <>
      <div className="grid grid-cols-4 ">
        <Card className="w-10/12 p-8 col-span-2">
          <Button onClick={()=>{
            console.log("LOGOUT")
            // logout({
            //   Authorization: `Bearer some_token`,
            // })
          }}>Logout</Button>
          <div>User Email: {user.email}</div>
          <div>User ID: {user.id}</div>
          <div>Created At:{user.created_at}</div>
          <div>Roles: {user.roles}</div>
          <div>Sign-up Methds: {user.signup_methods}</div>
          <div>Last Updated: {user.updated_at}</div>
        </Card>
        <Card className="w-10/12 p-10 col-span-2">
          <h1>Access Token:</h1>
          <div>{user.access_token}</div>
        </Card>
        <Card className="w-10/12 p-10 col-span-2">
          <h1>ID Token:</h1>
          <div>{user.id_token}</div>
        </Card>
      </div>
    </>
  );
};

export default ProfileBasic;
