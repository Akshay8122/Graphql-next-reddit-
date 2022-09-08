import NextAuth from "next-auth";
import RedditProvider from "next-auth/providers/reddit";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIEENT_ID,
      clientSecret: process.env.REDDIT_CLIEENT_SECRET,
    }),
    // ...add more providers here
  ],
});
