"use client";
import Image from "next/image";
import type { ReactNode } from 'react';

import zisty_header from "@/assets/Images/zisty_header.png"

import '@/assets/CSS/element.css'
import '@/assets/CSS/header.css'

const url = "https://zisty.net/";
const favicon = "/favicon.png";
const ogpIcon = "/ogp.webp";
const siteName = "Zisty";
const description = "Zisty is a team that was randomly formed by saying, “Come join us if you want to! Probably, or certainly, the best team in the universe (I'm sure).";
const metadata = {
  title: "Zisty",
  description: "Zisty is a team that was randomly formed by saying, “Come join us if you want to! Probably, or certainly, the best team in the universe (I'm sure).",
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja-JP",
    type: "website",
    images: ogpIcon
  },
  icons: favicon,
  verification: {
    google: ""
  },
  publisher: `@teamzisty`,
  robots: "index, follow",
  creator: `@teamzisty`,
  keywords: ['Zisty', 'TeamZisty', 'ZISTY', 'teamzisty'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

			<div className="header">
					<div className="left-links">
						<a className="header-a" href="https://zisty.net/">
							<Image src={zisty_header} width={18} height={18} alt="Zisty Icon" />
						</a>
						<a className="header-a" href="https://zisty.net/blog/">Blog</a>
						<a className="header-a" href="https://accounts.zisty.net/">Accounts</a>
					</div>
					<div className="right-links">
						<a className="header-b" href="https://discord.gg/6BPfVm6cST" target="_blank">
							<i className="fa-brands fa-discord"></i>
						</a>
						<a className="header-b" href="https://x.com/teamzisty" target="_blank">
							<i className="fa-brands fa-x-twitter"></i>
						</a>
						<a className="header-b" href="https://github.com/teamzisty" target="_blank">
							<i className="fa-brands fa-github"></i>
						</a>
					</div>
				</div>

				{children}
			</body>
		</html>
	);
}
