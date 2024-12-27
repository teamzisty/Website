export const runtime = 'edge';
import Image from "next/image";
import hero from "@/styles/hero.module.css";
import logo from "@/assets/zisty_header.png";

export default function Home() {
  return (
    <main className="home">
      <div className={hero.hero}>
        <div className={hero["contents"]}>
          <p className={hero.tag}>Welcome to Zisty</p>
          <h1>Our mission is to<br />“turn the unreal into reality.”</h1>
          <p className={hero.description}>We are a community team of mainly Japanese students who love programming.</p>
        </div>
        <div className={hero["animation"]}>
          <Image src={logo} width={500} height={500} alt="hero" className={hero.real} />
        </div>
      </div>
    </main>
  );
}
