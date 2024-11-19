import styles from './SobreMim.module.css';
import meuAvatar from '../../images/WhatsApp_Image_2023-05-16_at_13.29.59__4_-removebg-preview.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import curriculo from './currículoLuanFernandes.pdf'


const SobreMim = ({ modoDL }) => {
  return (
    <div className={modoDL === true ? styles.sobremimD : styles.sobremim}>
      <div className={styles.containertec}>

          <img className={styles.meuAvatar} src={meuAvatar} alt="meu avatar" />
  
      </div>
      <section className={modoDL === true ? styles.textSobreMimD : styles.textSobreMim}>
        <h1>Sobre Mim</h1>
        <div className={styles.curriculoM}>
          <span>Meu Curriculo</span>
          <div><FiDownload /></div>
        </div>
        <p>Olá, me chamo Luan Fernandes, tenho 25 anos e sou apaixonado por programação e tecnologia desde pequeno. Meu primeiro contato com esse universo foi na infância, mas foi em 2016, durante meu curso técnico, que decidi me dedicar integralmente à área de programação. Foi lá que aprendi minhas primeiras linguagens, como Java e C++, e desde então, essa paixão só cresceu.</p>
        <p>Atualmente, faço parte da Academia de Programadores INSPA, uma iniciativa voltada para o desenvolvimento Full Stack. Nessa jornada, tenho me aprofundado em tecnologias modernas e ferramentas essenciais, como:</p>
        
          <p>*-React com TypeScript e Vite, para interfaces dinâmicas e performáticas;</p>
          <p>*-Node.js com Prisma, para o desenvolvimento de servidores robustos e escaláveis;</p>
          <p>*-Banco de dados SQL com MySQL, otimizando o armazenamento e a manipulação de dados.</p>
      
        <p>Sou formado em Análise e Desenvolvimento de Sistemas e também possuo formação técnica em Informática. Minha trajetória une conhecimento acadêmico, prática em projetos desafiadores e uma constante busca por aprendizado, sempre focado em criar soluções inovadoras e eficientes.</p>
        <div className={styles.curriculo}>
          <span>Meu Curriculo</span>
          <div><a href={curriculo} download ><FiDownload /></a></div>
        </div>
      </section>

    </div>
  )
}

export default SobreMim