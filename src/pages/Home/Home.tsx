import s from "./Home.module.scss";
import aquisi from "../../assets/aquisi.jpg";
import {
  InstagramLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

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
        href={
          "https://api.whatsapp.com/send/?phone=5571983922955&text&type=phone_number&app_absent=0"
        }
        target="_blank"
      >
        Consultoria
      </a>
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

      <div className={s.icons}>
        <a href="https://x.com/aquisitivo" target="_blank">
          <XLogo size={32} />
        </a>
        <a href="https://www.instagram.com/aquisitivo/" target="_blank">
          <InstagramLogo size={32} />
        </a>
        <a
          href="https://www.tiktok.com/@aquisitiv?_t=8o4fThLVJGX&_r=1"
          target="_blank"
        >
          <TiktokLogo size={32} />
        </a>
        <a href="https://www.youtube.com/aquisitivo" target="_blank">
          <YoutubeLogo size={32} />
        </a>
      </div>

      <footer className={s.footer}>
        © Aquisitivo. Todos os Direitos Reservados.
      </footer>
    </main>
  );
}
