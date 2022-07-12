import { Authorizer, useAuthorizer } from "@authorizerdev/authorizer-react";
import Card from "@mui/material/Card";
import { useQuery, gql, useMutation } from "@apollo/client";
import { getCookie, setCookie } from "typescript-cookie";
import { useEffect, useState } from "react";
import { IUser } from "../contexts/userContexts";
import AreaSelection from "./landingComponents/areaSelection";
// import { Logout } from "./utils/TokenValuidator";
import { Button } from "@mui/material";
import { Logout_QUERY }  from "./utils/TokenValuidator";

export const SignupLandingPage = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (getCookie("user") !== undefined) {
      setUser(JSON.parse(getCookie("user")!));
    }
  }, []);

  return <>{user ? <LandingPage /> : <LoginSignup />}</>;
};

const LandingPage = () => {
  const [Logout, { data, loading, error }] = useMutation(Logout_QUERY);
  return (
    <>
      <AreaSelection areas={["profile", "about", "play"]} />
      <Button variant="contained" onClick={()=>Logout()}>Logout</Button>
    </>
  );
};

const LoginSignup = () => {
  return (
    <div>
      <Card>
        <div className="p-8">
          <Authorizer
            onLogin={(loginResponse: any) => {
              let user = loginResponse.user;
              user.access_token = loginResponse.access_token;
              user.id_token = loginResponse.id_token;
              setCookie("user", JSON.stringify(user));
              window.location.reload();
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export const TokenValidator = (Token: string) => {
  const TOKEN_QUERY = gql`
    query {
      validate_jwt_token(
        params: {
          token_type: "access_token"
          token: "${Token}"}
      ) {
        is_valid
      }
    }
  `;
  const { loading, error, data } = useQuery(TOKEN_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log(data.validate_jwt_token.is_valid);
  return data.validate_jwt_token.is_valid;
};

