import s from "./Home.module.scss";
import aquisi from "../../assets/aquisi.jpg";
import { InstagramLogo, TiktokLogo, XLogo } from "@phosphor-icons/react";

export function Home() {
  return (
    <main className={s.home}>
      <div className={s.imgContainer}>
        <img src={aquisi} alt="foto-do-aquisitivo" />
      </div>
      <h1>Treinador</h1>
      <h4>@aquisitivo</h4>
      <a
        className={s.button}
        href={"https://onlyfans.com/aquisitivo"}
        target="_blank"
      >
        Onlyfans
      </a>
      <a
        href="https://privacy.com.br/checkout/aquisitivo"
        target="_blank"
        className={s.button}
      >
        Privacy
      </a>
      <a
        href="https://www.instagram.com/aquisitivo/"
        target="_blank"
        className={s.button}
      >
        Instagram
      </a>
      <a href="https://x.com/aquisitivo" target="_blank" className={s.button}>
        X
      </a>

      <div className={s.icons}>
        <a href="https://x.com/aquisitivo" target="_blank">
          <XLogo size={32} />
        </a>
        <a href="https://www.instagram.com/aquisitivo/" target="_blank">
          <InstagramLogo size={32} />
        </a>
        <a href="https://www.tiktok.com/@onlyaquisitivo" target="_blank">
          <TiktokLogo size={32} />
        </a>
      </div>

      <footer className={s.footer}>
        © Aquisitivo. Todos os Direitos Reservados.
      </footer>
    </main>
  );
}
