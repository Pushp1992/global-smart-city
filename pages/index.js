import Router from 'next/router';
import { useEffect } from 'react';


export default function App() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') Router.push('/home')
  }, [])
  return null
}