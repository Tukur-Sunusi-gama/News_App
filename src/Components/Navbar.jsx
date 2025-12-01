const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-bg-light">NewsGama</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>
              <li className="nav-item ">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("crime")}
                >
                  Crime
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("domestic")}
                >
                  Domestic
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("education")}
                >
                  Education
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("environment")}
                >
                  Environment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("food")}
                >
                  Food
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("health")}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("lifestyle")}
                >
                  Lifestyle
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("politics")}
                >
                  Politics
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("tourism")}
                >
                  Tourism
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("world")}
                >
                  World
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("other")}
                >
                  Other
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
