"use client";

import {useEffect} from "react";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import WeddingEvents from "./components/WeddingEvents";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import {RevealWrapper} from "next-reveal";
import useSound from "use-sound";

export default function Home() {
    const [play, {sound}] = useSound("/audio/backsound.mp3", {
        volume: 0.5,
        interrupt: true
    });

    useEffect(() => {
        const handleScroll = () => {
            if (sound && sound.playing()) return;
            // Bắt đầu phát âm thanh khi người dùng cuộn trang
            play();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [play]);

    const handlePlay = () => {
        if (sound && sound.playing()) return;
        play();
    }
    return (
        <main className="max-w-[34.125rem] mx-auto">
            <RevealWrapper duration={1500}>
                <Hero/>
            </RevealWrapper>
            <Countdown/>
            <WeddingEvents/>
            {/*<Reservation/>*/}
            <Gallery/>
            <Footer/>
        </main>
    );
}
