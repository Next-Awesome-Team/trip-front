import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user1 = { id: '1', name: 'charles zhao', email: 'weibo.zhao@icloud.com' };
        if (credentials?.username === 'weibo' && credentials.password === 'password') return user1;
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
