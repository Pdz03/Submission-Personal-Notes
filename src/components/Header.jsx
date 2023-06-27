import React from "react";
import Search from "./Search";

const Header = ({ onSearch }) => {
  return (
      <div className="note-app__header">
          <h1>Personal Notes Apps</h1>
          <Search onSearch={onSearch} />
      </div>
  )
}

export default Header;