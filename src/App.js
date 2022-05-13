import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Havearead from './components/Havearead';
import Header from './components/Header';
import Topics from './components/Topics';
import VideoComponent from './components/VideoComponent';
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./config/firebaseConfig"


function App() {
  const [categories, setCategories] = useState([])

  const categoryCollectionRef = collection(db, "categories");

  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoryCollectionRef);

      const dataArray = await Promise.all(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setCategories(dataArray)
    }




    getCategories()

  }, [])




  return (
    <div className='main_content'>
      <Header />
      <Banner />
      <Categories categories={categories} />
      <VideoComponent />
      <FAQ />
      <Havearead />
      <Topics />
      <Footer />
    </div>
  );
}

export default App;
