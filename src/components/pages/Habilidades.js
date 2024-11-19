import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BsGit, BsGithub, BsFiletypeSql } from "react-icons/bs";
import { SiVite, SiTypescript, SiMysql } from "react-icons/si";

import styles from './Habilidades.module.css';
import { useState } from "react";

const Habilidades = ({ modoDL }) => {
  const [tituloTec, setTituloTec] = useState(undefined);
  const [paragrafoTec, setParagrafoTec] = useState(undefined);

  if (tituloTec === undefined) {
    setTituloTec("{/* Passe o mouse ou clique em algum dos ícones... */}");
  }

  return (
    <div className={modoDL === true ? styles.habilidadesD : styles.habilidades}>
      <div className={styles.tecnologias}>

        <DiJavascript1 
          onMouseEnter={() => [setTituloTec("JavaScript"), setParagrafoTec("JavaScript traz dinamismo às páginas web. Tenho experiência em criar funcionalidades interativas e manipulação do DOM.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconJsD : styles.iconJs}
        />

        <FaReact 
          onMouseEnter={() => [setTituloTec("React"), setParagrafoTec("React é uma biblioteca JavaScript para criação de interfaces de usuário. Domino hooks, componentes e roteamento.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconReactD : styles.iconReact}
        />

        <BsGit 
          onMouseEnter={() => [setTituloTec("Git"), setParagrafoTec("Git é um sistema de versionamento. Tenho experiência em gerenciar commits, branches e colaborar em projetos.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconGitD : styles.iconGit}
        />

        <BsGithub 
          onMouseEnter={() => [setTituloTec("GitHub"), setParagrafoTec("GitHub é uma plataforma para hospedagem de repositórios. Uso para compartilhar projetos e colaborar com equipes.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconGithubD : styles.iconGithub}
        />

        <SiVite 
          onMouseEnter={() => [setTituloTec("Vite"), setParagrafoTec("Vite é uma ferramenta de build moderna e rápida para projetos web. Uso para otimizar o desenvolvimento de projetos React.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconViteD : styles.iconVite}
        />

        <BsFiletypeSql 
          onMouseEnter={() => [setTituloTec("SQL"), setParagrafoTec("SQL é usado para manipulação de dados em bancos de dados. Domino consultas, inserções, atualizações e exclusões.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconSqlD : styles.iconSql}
        />

        <SiTypescript 
          onMouseEnter={() => [setTituloTec("TypeScript"), setParagrafoTec("TypeScript adiciona tipagem estática ao JavaScript. Uso para criar aplicações mais seguras e de fácil manutenção.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconTsD : styles.iconTs}
        />

        <FaNode 
          onMouseEnter={() => [setTituloTec("Node.js"), setParagrafoTec("Node.js permite criar aplicações server-side. Tenho experiência em criar APIs e lidar com integrações.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconNodeD : styles.iconNode}
        />

        <SiMysql 
          onMouseEnter={() => [setTituloTec("MySQL"), setParagrafoTec("MySQL é um banco de dados relacional. Tenho experiência em criar, gerenciar e otimizar bancos de dados.")]}
          onMouseLeave={() => [setTituloTec(undefined), setParagrafoTec(undefined)]}
          className={modoDL === true ? styles.iconMysqlD : styles.iconMysql}
        />
      </div>
      <span className={modoDL === true ? styles.textotecD : styles.textotec}>
        <h1>{tituloTec}</h1>
        <p>{paragrafoTec}</p>
      </span>
    </div>
  );
};

export default Habilidades;
