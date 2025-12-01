import { useState, useEffect } from "react";
import image from "../assets/news.jpg";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const NEWS_API_KEY = "pub_7b9e824784714032b1e79e740eb2bd2d";
  const NEWS_URL = `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&q=${category}`;
  useEffect(() => {
    fetch(NEWS_URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results || []);
      });
  }, [category]);
  return (
    <div>
      <h1 className="text-center">
        Latest <span className="badge text-bg-dark">News</span>
      </h1>
      {Array.isArray(articles) &&
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image_url}
            url={news.link}
          />
        ))}
    </div>
  );
};

export default NewsBoard;
