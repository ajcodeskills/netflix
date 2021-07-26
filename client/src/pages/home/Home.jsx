import React from "react";
import "./home.scss";
import { NavBar } from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

export function Home({ type }) {
  const [lists, setLists] = React.useState([]);
  const [genre, setGenre] = React.useState(null);

  React.useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer token",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />
      {lists?.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}
