import React ,{useEffect,useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import {FiPower,FiTrash2} from "react-icons/fi";

import api from "../services/api";

import logoImage from '../../assets/logo.svg';

import "./styles.css";

export default function Profile() {
  const history = useHistory();
  const ong = localStorage.getItem("ong");
  const [incidents,setIncidents] = useState([]);

  useEffect(()=>{
    async function loadIncidents(){
      const response = await api.get("ongs/incidents");

      setIncidents(response.data);
    }

    loadIncidents();
  },[]);

  async function handleDeleteIncident(incidentId){

    await api.delete(`incidents/${incidentId}`);
    
    setIncidents(incidents.filter( (incident) =>incident.id !== incidentId ));

  }

  function handleLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("ong");

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage}alt="Be The Hero" />
        <span>Bem vinda, {ong}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>
      
      <h1>Casos Cadastrados</h1>

      <ul>
        {
          incidents.map( incident => (
            <li key={incident.id}>
              <strong>Caso:</strong>
              <p>{incident.title}</p>
              <strong>Descrição:</strong>
              <p>{incident.description}</p>
              <strong>Valor:</strong>
              <p>
                {
                  Intl.NumberFormat('pt-BR',{
                    style:"currency",
                    currency:"BRL"
                  }).format(incident.value) 
                }
              </p>
              <button type="button" onClick={ () => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={22} color="#a8a8b3"/>
              </button>
            </li>

          ))
        }
      </ul>
    </div>
  );
}
