import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
    }),
    async function authorize(credentials, req) {
      // Handle the logic of authorization. If returned null, tha means the user is not authorize to log in.

      // test
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

      if (user) {
        return user;
      } else {
        return null;
      }
    },
  ],
};

export { handler as GET, handler as POST };
