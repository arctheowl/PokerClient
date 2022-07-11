import { Authorizer, useAuthorizer } from "@authorizerdev/authorizer-react";
import Card from "@mui/material/Card";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import NoSsr from "../components/dynamic";

export const LandingPage = () => {

  let user
  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
  }
  return (
    <>
      <NoSsr>{user ? <LandingPage1 /> : <LoginSignup />}</NoSsr>
    </>
  );
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
              localStorage.setItem("user", JSON.stringify(user));
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export function TokenValidator(Token: any) {
  const GET_LOCATIONS = gql`
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
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log(data.validate_jwt_token.is_valid);
  return data.validate_jwt_token.is_valid;
}
