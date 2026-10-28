import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); // impede a página de recarregar
    setEnviado({ nome, email });
    setNome("");
    setEmail("");
  }

  return (
    <div>
      <h1>Formulário</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>

      {enviado && (
        <p>
          Enviado: {enviado.nome}, {enviado.email}
        </p>
      )}
    </div>
  );
}