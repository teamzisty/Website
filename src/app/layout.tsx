import clsx from "clsx";
import Image from "next/image";
import header from "@/styles/header.module.css";
import footer from "@/styles/footer.module.css";
import "@/styles/globals.css";
import icon from "@/assets/zisty_header.png";

export const metadata = {
  title: {
    default: 'Zisty',
    template: '%s / Zisty'
  },
  description: 'We are a team of engineers with the slogan “We turn the unreal to real”. It is a team that stands like a club, consisting mainly of students.',
  metadataBase: new URL('https://zisty.net'),
  openGraph: {
    title: 'We turn the unreal to real',
    description: 'We are a team of engineers with the slogan “We turn the unreal to real”. It is a team that stands like a club, consisting mainly of students.',
    url: 'https://zisty.net',
    siteName: 'Zisty',
    images: [
      {
        url: '/ogp.webp',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

        <div className={header.headerClass}>
          <div className={header.leftLinks}>
            <a className={header.headerA} href="/"><Image src={"https://github.com/teamzisty/Website/blob/main/src/assets/Images/zisty_header.png?raw=true"} width={500} height={500} alt="zisty_header" /></a>
            <a className={header.headerA} href="/blog/">Blog</a>
            <a className={header.headerA} href="https://accounts.zisty.net/">Accounts</a>
          </div>
          <div className={header.rightLinks}>
            <a className={header.headerB} href="https://discord.gg/6BPfVm6cST" target="_blank"><i className={clsx("fa-brands", "fa-discord", header["Brands"])}></i></a>
            <a className={header.headerB} href="https://x.com/teamzisty" target="_blank"><i className={clsx("fa-brands", "fa-x-twitter", header["Brands"])}></i></a>
            <a className={header.headerB} href="https://github.com/teamzisty" target="_blank"><i className={clsx("fa-brands", "fa-github", header["Brands"])}></i></a>
          </div>
        </div>

        {children}

        <footer className={footer.footer}>
          <Image
            src={icon}
            width={500}
            height={500}
            alt="zisty_header"
            className={footer.logo}
          />

          <div className={footer.nav}>
            <div className={footer.category}>
              <div className={footer.categoryName}>More</div>
              <ul className={footer.categoryNav}>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="mailto:info@zisty.net">Contact Us</a></li>
                <li><a href="https://docs.zisty.net/" target="_blank">Documents <i className={clsx("fa-solid", "fa-arrow-up-right-from-square", footer["redirect"])}></i></a></li>
              </ul>
            </div>

            <div className={footer.category}>
              <div className={footer.categoryName}>Legal</div>
              <ul className={footer.categoryNav}>
                <li><a href="/privacy/">Privacy Policy</a></li>
                <li><a href="/terms/">Terms of Use</a></li>
                <li><a href="/cookie/">Cookie Policy</a></li>
              </ul>
            </div>

            <div className={footer.category}>
              <div className={footer.categoryName}>Accounts</div>
              <ul className={footer.categoryNav}>
                <li><a href="https://accounts.zisty.net/" target="_blank">Dashboard  <i className={clsx("fa-solid", "fa-arrow-up-right-from-square", footer["redirect"])}></i></a></li>
                <li><a href="https://accounts.zisty.net/login" target="_blank">Login  <i className={clsx("fa-solid", "fa-arrow-up-right-from-square", footer["redirect"])}></i></a></li>
                <li><a href="https://accounts.zisty.net/register" target="_blank">Register  <i className={clsx("fa-solid", "fa-arrow-up-right-from-square", footer["redirect"])}></i></a></li>
              </ul>
            </div>

            <div className={footer.category}>
              <div className={footer.categoryName}>Socials</div>
              <ul className={footer.categoryNav}>
                <li><a href="https://x.com/teamzisty" target="_blank"><i className="bi bi-twitter-x"></i> X</a></li>
                <li><a href="https://github.com/teamzisty" target="_blank"><i className="bi bi-github"></i> Github</a></li>
                <li><a href="https://dsc.gg/teamzisty" target="_blank"><i className="bi bi-discord"></i> Discord</a></li>
                <li><a href="https://misskey.io/@teamzisty" target="_blank"><i className="bi bi-globe"></i> Fediverse</a></li>
              </ul>
            </div>
          </div>
        </footer>   
      </body>
    </html>
  );
}
