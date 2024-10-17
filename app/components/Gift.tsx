import React, {useState} from "react";
import {RevealWrapper} from "next-reveal";

function Gift() {
    const [showQr, setShowQr] = useState(false);

    const handleClickShowQr = () => {
        setShowQr(true);
    }
    return (
        <section id="gift">
            <RevealWrapper origin="top" duration={3000}>
                <div
                    className="flex flex-col content-start gift relative bg-[url('https://lh3.googleusercontent.com/pw/AP1GczMCaN81abmlIOQ5IRCKwRKK7Jrhr9BsS0dZnU_7Q8HBNi0yWkUpJ2cU2-h7FDo2LAK0tOJlWOhEgxwBuwmhlwNldBM5XZ3kD9o76QZ0pv57_swuNhhBRyoOr1LZGHRPZZu0wYBqot3LOox3zaLU0t2-=w635-h953-s-no-gm?authuser=0')] bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <h1 className="text-xl italic font-light text-center text-white relative z-20 py-6">
                        Gift for us
                    </h1>
                    {
                        showQr
                            ?
                            <img
                                className="h-1/2 relative z-20 self-center rounded-2xl cursor-pointer"
                                src="/images/gift/qr.png"
                                alt='qr'
                            />
                            :
                            <img
                                onClick={() => handleClickShowQr()}
                                className="h-1/5 relative z-20 self-center rounded-2xl cursor-pointer"
                                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDFzdm5teGEwbHVjbjJid2l2bjF1ZW42eHJrMTY5MzVyMXdpN3VtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/giKdkKxdDWecg524cE/giphy.webp"
                                alt='gift'
                            />
                    }
                </div>
            </RevealWrapper>

        </section>
    );
}

export default Gift;
