import { useEffect, useState } from "react";
import '@/styles/globals.css';
import Navbar from '@/components/modules/Navbar/Navbar';
import Footer from '@/components/modules/Footer/Footer';

export default function App({ Component, pageProps }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/icons")
      .then((res) => res.json())
      .then((data) => setIcons(data))
      .catch((err) => console.error("Error fetching icons:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer icons={icons} />
    </>
  );
}
