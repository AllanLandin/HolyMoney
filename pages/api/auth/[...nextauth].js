import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import database from "@/infra/database";
import bcrypt from "bcrypt";

const authOptions = {
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const user = await database.query(
            "SELECT * FROM user WHERE email=?",
            [email]
          );
          const passwordMatches = user[0]
            ? await bcrypt.compare(password, user[0].password)
            : false;

          if (passwordMatches) {
            return { username: user.username, email: user.email };
          } else {
            return null;
          }
        } catch (error) {
          console.debug(
            "An error ocurred trying to fetch the data from database:",
            error
          );
          throw error;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
