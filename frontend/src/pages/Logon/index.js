import React,{useState} from 'react';

import { FiLogIn } from "react-icons/fi";
import {Link,useHistory} from "react-router-dom";

import api from "../services/api";

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

import "./styles.css";

export default function Logon() {
  const history = useHistory();
  const [code,setCode] = useState("");

  async function handleLogin(e){
    e.preventDefault();

    const data = { code };

    try{
      const response = await api.post("session",data);

      localStorage.setItem("token",response.data.token);
      localStorage.setItem("ong",response.data.ong.name);
      
      history.push("/profile");
    }catch(err){
      alert("Erro ao logar");
    }
  }

  return (
   <div className="logon-container">
     <section className="form" >
       <img src={logoImage}alt="Be The Hero" />
       <form onSubmit={handleLogin}>
        <h1>Faça Seu Logon</h1>
        <input 
          placeholder="Seu código"
          value={code}
          onChange={(e)=>setCode(e.target.value)}
        />
        <button className="button"type="submit">Entrar</button>
        <Link to="/register" className="back-link">
          <FiLogIn size={16} color="#E02041"/>
          Não Tenho Cadastro
        </Link>
       </form>
    </section>
    <img src={heroesImage}alt="heroes" />
   </div>
  );
}
