import { Authorizer, useAuthorizer } from "@authorizerdev/authorizer-react";
import Card from "@mui/material/Card";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { getCookie, setCookie } from "typescript-cookie";
import { useEffect, useState } from "react";
import { IUser } from "../contexts/userContexts";

export const LandingPage = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (getCookie("user") !== undefined) {
      setUser(JSON.parse(getCookie("user")!));
    }
  }, []);

  return <>{user ? <LandingPage1 /> : <LoginSignup />}</>;
};

const LandingPage1 = () => {
  return (
    <div>
      <Card>
        <div className="p-8">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </Card>
    </div>
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
              setCookie("user", JSON.stringify(user));
              window.location.reload()
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
}
