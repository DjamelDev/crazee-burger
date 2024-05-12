import React, { useState } from "react";

const LoginForm = () => {
  const [prenom, setPrenom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        required
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <button>Accédez à votre espace</button>
    </form>
  );
};

export default LoginForm;