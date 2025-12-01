import { useState, useEffect } from "react";
import image from "../assets/news.jpg";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const NEWS_API_KEY = "pub_7b9e824784714032b1e79e740eb2bd2d";
  const NEWS_URL = `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&q=${category}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(NEWS_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "error") {
          throw new Error(data.message || "Failed to fetch news");
        }

        setArticles(data.results || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message || "Failed to load news. Please try again later.");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  // Loading state
  if (loading) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading latest news...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger text-center" role="alert">
              <h4 className="alert-heading">Oops! Something went wrong</h4>
              <p>{error}</p>
              <button
                className="btn btn-outline-danger"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Latest <span className="badge text-bg-dark">News</span>
      </h1>

      {articles.length === 0 ? (
        <div className="text-center">
          <div className="alert alert-info" role="alert">
            <h4 className="alert-heading">No News Found</h4>
            <p>
              No articles available for the "{category}" category at the moment.
            </p>
            <p>Try selecting a different category or check back later.</p>
          </div>
        </div>
      ) : (
        <div className="row">
          {articles.map((news, index) => (
            <div
              key={news.link || index}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <Newsitem
                title={news.title}
                description={news.description}
                src={news.image_url}
                url={news.link}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
