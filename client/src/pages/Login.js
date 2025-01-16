import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import '../styles/Login.css';
import backgroundImage from '../assets/images/login-background.jpg';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      
      // Afficher un message de succès de connexion
      setMessage('Connexion réussie !');

      // Stocker le token JWT et le nom d'utilisateur
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username); // Enregistrer le nom d'utilisateur

      // Rediriger vers la page d'accueil après un délai de 2 secondes
      setTimeout(() => {
        navigate('/');  
      }, 2000);  // Attente de 2 secondes avant la redirection
      
    } catch (error) {
      console.log(error); 
      setMessage(error.response ? error.response.data.message : 'Erreur de connexion');
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-container">
        <h2 className="login-title">Se connecter</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="login-button">Se connecter</button>
        </form>
        
        {message && <p>{message}</p>} {/* Affichage du message de connexion réussie */}

        <div className="social-login">
          <p>Ou connectez-vous avec :</p>
          <div className="social-icons">
            <a href="#" className="social-icon facebook"><FaFacebook size={30} color="#3b5998" /></a>
            <a href="#" className="social-icon google"><FaGoogle size={30} color="#db4437" /></a>
            <a href="#" className="social-icon apple"><FaApple size={30} color="#000" /></a>
          </div>
        </div>

        <div className="signup-link">
          <p>Pas de compte ? <Link to="/signup">Créer un compte</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
