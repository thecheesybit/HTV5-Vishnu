import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

import AuthForm from '../components/auth/auth-form';
import Image from "next/image";
import load from "/public/loading.gif";


function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <Image src={load} alt="loading" width={65} height={65} className="center"/>
  }

  return <AuthForm />;
}

export default AuthPage;
