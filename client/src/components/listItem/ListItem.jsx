import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import axios from "axios";
import "./listItem.scss";
export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [movie, setMovie] = React.useState({});
  React.useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find" + item, {
          headers: {
            token: "Bearer token",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, [item]);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
