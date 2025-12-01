import image from "../assets/news.jpg";
import { useState } from "react";

const Newsitem = ({ title, description, src, url }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleReadMoreClick = (e) => {
    if (!url || url === "#") {
      e.preventDefault();
      alert("Link not available for this article.");
    }
  };

  // Truncate text safely
  const truncateText = (text, maxLength) => {
    if (!text) return "Description not available";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div
      className="card bg-dark text-light mb-3 h-100 shadow-sm"
      style={{ maxWidth: "400px", transition: "transform 0.2s" }}
      onMouseEnter={(e) => (e.target.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
    >
      {/* Image section with loading and error handling */}
      <div
        className="position-relative"
        style={{ height: "200px", overflow: "hidden" }}
      >
        {imageLoading && (
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading image...</span>
            </div>
          </div>
        )}
        <img
          src={!imageError && src ? src : image}
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
            display: imageLoading ? "none" : "block",
          }}
          className="card-img-top"
          alt={title ? `News image for: ${title}` : "News image"}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        {imageError && (
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
            <small className="text-light">Image unavailable</small>
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="card-body d-flex flex-column">
        <h5
          className="card-title"
          style={{ fontSize: "1.1rem", lineHeight: "1.3" }}
        >
          {truncateText(title, 60) || "Untitled Article"}
        </h5>
        <p className="card-text flex-grow-1" style={{ fontSize: "0.9rem" }}>
          {truncateText(description, 120)}
        </p>

        {/* Action button */}
        <div className="mt-auto">
          {url && url !== "#" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100"
              onClick={handleReadMoreClick}
            >
              Read more...
            </a>
          ) : (
            <button
              className="btn btn-secondary w-100"
              disabled
              title="Link not available"
            >
              Link unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
