import React,{useState,useEffect} from 'react'
import './App.css'
import ImageCard from './components/ImageCard';
import Search from './components/Search';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(()=>{
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  },[term]);

  return (
    <div className="container mx-auto my-10">
      <div className="mb-10 flex justify-center items-center">
        <Search searchText={(text) => setTerm(text)} />
      </div>
      {isLoading ? (
        <h1 className="mt-2 text-3xl font-semibold text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App
