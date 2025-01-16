import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import '../styles/Signup.css';
import backgroundImage from '../assets/images/login-background.jpg';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { username, email, password });
      setMessage(response.data.message);

      // Stocker le nom d'utilisateur dans le localStorage
      localStorage.setItem('username', username); // Enregistrer le nom d'utilisateur

      // Redirection vers la page de connexion après l'inscription réussie
      navigate('/login');  
    } catch (error) {
      console.log(error); 
      setMessage(error.response ? error.response.data.message : 'Erreur d\'inscription');
    }
  };

  return (
    <div className="signup-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="signup-container">
        <h2 className="signup-title">Créer un compte</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">S'inscrire</button>
        </form>
        
        {message && <p>{message}</p>}

        <div className="social-login">
          <p>Ou inscrivez-vous avec :</p>
          <div className="social-icons">
            <a href="#" className="social-icon facebook"><FaFacebook size={30} color="#3b5998" /></a>
            <a href="#" className="social-icon google"><FaGoogle size={30} color="#db4437" /></a>
            <a href="#" className="social-icon apple"><FaApple size={30} color="#000" /></a>
          </div>
        </div>

        <div className="login-link">
          <p>Déjà un compte ? <Link to="/login">Se connecter</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
