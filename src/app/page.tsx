"use client";

export const runtime = 'edge';

import Image from "next/image";
import { useEffect } from 'react';

import hello from "@/assets/Images/hello.png"

import '@/assets/CSS/root/container.css'

export default function Home() {
  useEffect(() => {
    document.title = "Zisty";

    window.onload = function () {
      const container = document.querySelector('.container');
      if (container) {
        container.classList.add('fade-in');
      }
    }
  }, []);

  return (
    <>
      <div className="container">
        <p>Engineering Team</p>
        <h1>We turn the<br /><span className="gradation">Unreal to Real</span></h1>
        <Image src={hello} width={1000} height={600} alt="Hello" />
      </div>
    </>
  );
}
