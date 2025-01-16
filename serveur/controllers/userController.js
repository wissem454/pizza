const getUsers = (req, res) => {
    res.send('Retourner la liste des utilisateurs');
  };
  
  const getProtectedData = (req, res) => {
    res.send('Données protégées accessibles uniquement après authentification');
  };
  
  module.exports = {
    getUsers,
    getProtectedData
  };
  