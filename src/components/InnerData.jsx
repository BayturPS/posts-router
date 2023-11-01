import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const API = `https://jsonplaceholder.typicode.com/posts`;

const InnerData = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setPost(data);
      };
      getPosts();
    } catch (error) {}
  }, [id]);

  return (
    <Conteiner>
      <Box>
        <h3>id: {post.id}</h3>
        <h3>title: {post.title}</h3>
        <h3>body: {post.body}</h3>
      </Box>

      <Link to=".." relative="path" className="back">
        Back to all posts
      </Link>
    </Conteiner>
  );
};

export default InnerData;

const Conteiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  padding: 1rem;
  border: 1px solid black;
  box-shadow: 0 0 10px 2px white;
  width: 720px;
  height: 150px;
  transition: 0.1s;
  &:hover {
    box-shadow: 0 0 10px 2px green;
  }
`;
