import GlobaStyle from "./styles/global"
import styled from "styled-components";
import Grid from "./components/Grid"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width:100%;
  max-width:800px;
  margin-top:20px;
  display:flex;
  flex-direction:column;
  align-items: center;
  gap:10px;
`;

const api = "http://localhost:8800";

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get(api);
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1: -1)));
    } catch (error) {
      toast.error(error.me);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers])

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users ={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobaStyle/>
    </>
  );
}

export default App;