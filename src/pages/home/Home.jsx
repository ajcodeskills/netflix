import React from "react";
import "./home.scss";
import { NavBar } from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import List from '../../components/list/List';
export function Home() {
  return (
    <div className="home">
      <NavBar />
      <Featured type = "movie" />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      
    </div>
  );
}
