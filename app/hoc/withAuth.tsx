
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/pages/public/login'); 
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
