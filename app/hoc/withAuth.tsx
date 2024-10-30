"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getToken } from '../hooks/authService'; 

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = getToken(); 
      if (!token) {
        router.push('/pages/public/login'); 
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
