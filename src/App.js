import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/fetchImages";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearchValueChange = text => {
    setSearchValue(text);
  };

  const handleIncrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(!isLoading);
      const result = await fetchImages(searchValue, page);
    
      setImages(prevState => [...prevState, ...result]);
      setIsLoading(false);
    };
    if (searchValue) {
      fetchData();
    }
  }, [searchValue, page]);

  return (
    <>
      <Searchbar handleSearchValueChange={handleSearchValueChange} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {!images ||
        (images.length > 10 && (
          <Button handleIncrementPage={handleIncrementPage} />
        ))}
    </>
  );
};

export default App;
