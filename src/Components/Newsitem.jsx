import image from "../assets/news.jpg";
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 my-3 mx-3 px-3 py-3 d-inline-block"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt="news image"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {" "}
          {description
            ? description.slice(0, 90)
            : "News is currenlty unavailable"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
