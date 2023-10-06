import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loader } from "rsuite";
import NewsList from './NewsList'; // Import your NewsList component

const News = () => {
  const [newsData, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "4f7300823ec04093bc71ee2297bfc752"; // Replace with your NewsAPI key
  const query = "Crypto";
  const api_url = `https://newsapi.org/v2/everything?q=${query}&from=2023-10-06&sortBy=popularity&apiKey=${API_KEY}`;

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    try {
      const response = await axios.get(api_url);
      if (response.data.articles) {
        setNews(response.data.articles.slice(0, 5));
        setLoading(false);
        console.log(response.data.articles.slice(0, 5));
      } else {
        console.error("No articles found in API response.");
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  return (
    <div className="w-[40%] mx-auto text-gray-100 bg-gray-800 rounded-xl px-6 py-4">
      <h1 className="text-3xl font-bold mb-2">News:</h1>
      {loading ? (
        <Loader backdrop content="Getting latest news..." />
      ) : (
        newsData.map((data) => (
          <NewsList
            className="max-w-xs mx-auto mb-8"
            key={data.urlToImage}
            title={data.title}
            img={data.urlToImage}
            link={data.url}
          />
        ))
      )}
    </div>
  );
  console.log(newsData);
};

export default News;
