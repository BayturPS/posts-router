import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Nav>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "lightyellow",
                textDecoration: "none",
              }
            : {}
        }
        to="posts"
        end
      >
        Posts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="comments"
      >
        Comments
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="users"
      >
        Users
      </NavLink>
    </Nav>
  );
};

export default Menu;
const Nav = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 20rem;
  background-color: darkslategray;
  padding-top: 30px;
  box-shadow: 0 0 15px 2px black;
`;
