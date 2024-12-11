import Image from "next/image";
import type { ReactNode } from 'react';
import zisty_header from "@/assets/Images/zisty_header.png"
import './globals.css'

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
