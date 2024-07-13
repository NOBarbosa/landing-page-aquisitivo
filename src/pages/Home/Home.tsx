import s from "./Home.module.scss";
import aquisi from "../../assets/aquisi.jpg";

export function Home() {
  return (
    <main className={s.home}>
      <img src={aquisi} alt="foto-do-aquisitivo" />
      <h1>@Aquisitivo</h1>
      <h2>Treinador</h2>

      <button className={s.button}>
        <a href="">Onlyfans</a>
      </button>
      <button className={s.button}>
        <a href="">Privacy</a>
      </button>
      <button className={s.button}>
        <a href="">Instagram</a>
      </button>
      <button className={s.button}>X</button>

      <footer>© Aquisitivo. Todos os Direitos Reservados.</footer>
    </main>
  );
}
