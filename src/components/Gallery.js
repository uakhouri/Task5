import "./Gallery.css";
import { ImageList } from "./ImageList";
import { FaSearch } from "react-icons/fa";

function Gallery() {
  return (
    <div>
      <h1>Gallery Space</h1>
      <input
        type="text"
        placeholder="Search Image"
        className="Inputtag"></input>
      <button className="SearchIcon">
        <FaSearch />
      </button>
      <div className="DivBody">
        {ImageList.map((index, i) => {
          return (
            <div key={i} className="GalBody">
              <div className="GalImg">
                <img
                  src={process.env.PUBLIC_URL + `/images/gallery${i + 1}.jpeg`}
                  alt={index.title}
                  className="Imagein"></img>
              </div>

              <div className="GalText">{index.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Gallery;
