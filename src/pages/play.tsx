import { useEffect, useState } from "react";
import { getCookie } from "typescript-cookie";
import { TokenValidator } from "../components/utils/TokenValuidator";
import { IUser } from "../contexts/userContexts";

const Play = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const auth = TokenValidator(user?.id_token!)
  useEffect(() => {
    let cookie = getCookie("user");
    if (cookie) {
      setUser(JSON.parse(cookie));
    }
  }, []);
  if (auth === false) {
    return <h1>Unauthorized</h1>;
  }

  return (
    <>
      <div>Play</div>
      <div>Hello {user?.id}</div>
    </>
  );
};

export default Play;
