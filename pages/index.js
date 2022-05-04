import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Loader show />
      <button onClick={() => toast.success('hello toast!')}>
        Click for Toast!
      </button>
    </div>
  )
}
