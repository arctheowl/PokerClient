import { useQuery, gql , useMutation} from "@apollo/client";

export const TokenValidator = (Token: string) => {
  const TOKEN_QUERY = gql`
    query {
        validate_jwt_token(params:{token_type: "id_token", token: "${Token}"}) {
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

// export const Logout = () => {
//   const Logout_QUERY = gql`
//     mutation {
//       logout {
//         message
//       }
//     }
//   `;
//   const [Logout, { data, loading, error }] = useMutation(Logout_QUERY);
//   Logout()

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :</p>;

//   console.log(data);
//   return Logout();
// };

export const Logout_QUERY = gql`
    mutation {
      logout {
        message
      }
    }
  `;