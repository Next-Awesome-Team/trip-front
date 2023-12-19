import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const AuthPage = (props: Props) => {
  const router = useRouter();
  const { authType } = router.query;
  const isSignIn = authType === 'signin';

  return (
    <>
      <div>This is authentication page</div>
      {isSignIn ? <div>SignIn</div> : <div>SignUp</div>}
    </>
  );
};

export default AuthPage;
