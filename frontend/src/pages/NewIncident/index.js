import React,{useState} from 'react';

import { FiArrowLeft } from "react-icons/fi";
import {Link ,useHistory} from "react-router-dom";

import api from "../services/api";
import logoImage from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  const history = useHistory();
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [value,setValue] = useState(0);

  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try{
      await api.post("incidents",data);
      history.push("/profile");
    }catch(err){
      alert("Erro no cadastro de um novo Incidente");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage}alt="Be The Hero" />
          <h1>Cadatrar Novo Caso</h1>
          <p>
            Descreva o caso detalhamente para encontrar um herói para resolver isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e=> setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            maxLength="255"
            value={description}
            onChange={e=> setDescription(e.target.value)}
          />
          <input 
            type="number" 
            step="0.01" 
            min="0" 
            placeholder="Valor"
            value={value}
            onChange={e=> setValue(e.target.value)}
            />
        
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
