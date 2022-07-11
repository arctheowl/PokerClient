import { Card, Button } from "@mui/material";
import { IUser } from "../../contexts/userContexts";
import PermanentDrawerLeft from "./menu";

interface Iprops {
  user: IUser;
}

const ProfileBasic = ({ user }: Iprops) => {
  console.log(user.access_token);
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <PermanentDrawerLeft />
        <Card className="p-8 col-start-2 col-span-2">
          <Button variant="contained"
            onClick={() => {
              console.log("LOGOUT");
            }}
          >
            Logout
          </Button>
          <div>User Email: {user.email}</div>
          <div>User ID: {user.id}</div>
          <div>Created At:{user.created_at}</div>
          <div>Roles: {user.roles}</div>
          <div>Sign-up Methds: {user.signup_methods}</div>
          <div>Last Updated: {user.updated_at}</div>
        </Card>
        <Card className="p-10 col-span-2 col-start-2">
          <h1>Access Token:</h1>
          <div>{user.access_token}</div>
        </Card>
        <Card className="p-10 col-span-2 col-start-2">
          <h1>ID Token:</h1>
          <div>{user.id_token}</div>
        </Card>
      </div>
    </>
  );
};

export default ProfileBasic;
