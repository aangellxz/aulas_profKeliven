import {useState, useEffect} from "react";

export default function Lista(){
     const [usuarios, setUsuarios] = useState([]);
     const [carregando, setCarregando] = useState(true);
     
     useEffect(() => {
        // Simula meus dados que seriam puxados da api

        setTimeout(() => {
            const listarUsuarios = [
                {
                    id: 1,
                    nome: "Liz Macedo",
                    email: "lizmacedo@gmail.com"
                },
                {
                    id: 2,
                    nome: "Virginia Fonceca",
                    email: "VirginiaFonceca@gmail.com"
                },
                {
                    id: 3,
                    nome: "Vini Junior",
                    email: "ViniJunior@gmail.com"
                },
                {
                    id: 4,
                    nome: "Érica Hilton",
                    email: "ÉricaHilton@gmail.com"
                },
            ];
            setUsuarios(listarUsuarios);
            setCarregando(false);
        }, 4000); // depois 4 segundos vão aparecer os usuarios
     });

     return(
        <div>
         <h1>Lista de Usuários</h1>
         {carregando? (
            <p>Carregando dados...</p>
         ) : (
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome}, {usuario.email}</li>
                ))}
            </ul>
         )};
        </div>
     );
};
