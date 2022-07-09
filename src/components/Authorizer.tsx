import {
  AuthorizerProvider,
  Authorizer,
  useAuthorizer,
} from "@authorizerdev/authorizer-react";
import Card from "@mui/material/Card";

export const App = () => {
 
  return (
    <>
      {process.env.NEXT_PUBLIC_AUTHORIZER_URL ? (
        <AuthorizerProvider
          config={{
            authorizerURL: process.env.NEXT_PUBLIC_AUTHORIZER_URL,
            redirectURL: "http://localhost:3000",
            clientID: process.env.NEXT_PUBLIC_CLIENT_ID, // obtain your client id from authorizer dashboard
            //   extraHeaders: {}, // Optional JSON object to pass extra headers in each authorizer requests.
          }}
        >
          <LandingPage />
        </AuthorizerProvider>
      ) : (
        <><h1> The Env files have not loaded</h1></>
      )}
    </>
  );
};

const LandingPage = () => {
  const { user } = useAuthorizer();
  return <>{user ? <Profile /> : <LoginSignup />}</>;
};

const LoginSignup = () => {
  return (
    <div>
      <Card>
        <div className="p-8">
          <Authorizer />
        </div>
      </Card>
    </div>
  );
};

const Profile = () => {
  const { user } = useAuthorizer();
  if (user) {
    return (
      <>
        <div>{user.email}</div>
        <div>{user.id}</div>
        <div>{user.created_at}</div>
        <div>{user.roles}</div>
        <div>{user.signup_methods}</div>
        <div>{user.updated_at}</div>
      </>
    );
  }
  return null;
};
