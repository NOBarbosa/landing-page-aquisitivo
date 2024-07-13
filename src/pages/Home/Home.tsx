import s from "./Home.module.scss";
import aquisi from "../../assets/aquisi.jpg";

export function Home() {
  return (
    <main className={s.home}>
      <img src={aquisi} alt="foto-do-aquisitivo" />
      <h1>Treinador</h1>
      <h4>@aquisitivo</h4>

      <button className={s.button}>
        <a href="onlyfans.com/aquisitivo" target="_blank">
          Onlyfans
        </a>
      </button>
      <button className={s.button}>
        <a href="privacy.com.br/profile/aquisitivo" target="_blank">
          Privacy
        </a>
      </button>
      <button className={s.button}>
        <a href="https://www.instagram.com/aquisitivo/" target="_blank">
          Instagram
        </a>
      </button>
      <button className={s.button}>
        <a href="https://x.com/aquisitivo" target="_blank">
          X
        </a>
      </button>

      <footer>© Aquisitivo. Todos os Direitos Reservados.</footer>
    </main>
  );
}
