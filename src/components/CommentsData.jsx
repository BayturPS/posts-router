import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const API = `https://jsonplaceholder.typicode.com/comments`;

const CommentsData = () => {
  const [comment, setComment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const getComments = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setComment(data);
      };
      getComments();
    } catch (error) {}
  }, [id]);

  return (
    <Conteiner>
      <Box>
        <h3>id: {comment.id}</h3>
        <h3>name: {comment.name}</h3>
        <h3>email: {comment.email}</h3>
        <h3>body: {comment.body}</h3>
      </Box>

      <Link to=".." relative="path" className="back">
        Back to all comments
      </Link>
    </Conteiner>
  );
};

export default CommentsData;

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
  width: 700px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 10px 2px purple;
  }
`;
