import React, {useState} from "react";
import {FaQuoteRight} from "react-icons/fa";
import {RevealWrapper} from "next-reveal";
import {Image} from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; // Import CSS styles


function Gallery(this: any) {
    const [showFullSize, setShowFullSize] = useState(false);
    const [srcImg, setSrcImg] = useState("");

    const handleClickImage = (e: any) => {
        e.preventDefault();
        setShowFullSize(!showFullSize);
        setSrcImg(e.target.getAttribute('src'))
    };

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const images = [
        // {
        //     src: '/images/gallery/JIN_2591.JPG',
        //     alt: 'big-grid',
        //     className: 'w-full h-96 object-cover object-bottom'
        // },
        {
            src: '/images/gallery/JIN_2834.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_3049.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_3067.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_3090.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_3903.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_3940.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_3954.JPG',
            width: 200
        },
        {
            src: '/images/gallery/JIN_4016b.JPG',
            width: 200
        }
    ];

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <section id="gallery">
            <div className="bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center relative px-8 py-16">
                <div
                    className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
                <div className="z-10 relative">
                    <h1 className="text-xl italic font-light text-center text-white">
                        Our Gallery
                    </h1>
                    <div className="flex flex-col items-center text-center gap-4 my-10">
                        <img
                            onClick={handleClickImage}
                            src="/images/gallery/JIN_3090.JPG"
                            alt="quote"
                            className="w-[170px] h-[220px] object-cover cursor-pointer"
                        />
                        <RevealWrapper origin="top" duration={1500}>
              <span>
                <FaQuoteRight color="#4242427A" fontSize="1.75rem"/>
              </span>
                        </RevealWrapper>
                        <RevealWrapper origin="top" duration={1500}>
                            <p className="text-[0.8rem] font-light leading-loose px-8">
                                From when I first saw you, I felt that I was finally home, all I
                                want is to make your dreams come true and share our dreams
                                together.
                            </p>
                        </RevealWrapper>
                    </div>
                    <RevealWrapper origin="top" duration={1500}>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                            }}
                        >
                            <Image
                                src={'/images/gallery/JIN_2591.JPG'}
                                alt={'JIN_2591.JPG'}
                                className='w-full h-96 object-cover object-bottom'
                            />
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                // autoPlay={this.props.deviceType !== "mobile"}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                // deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image.src}
                                        // alt={image.alt}
                                        // className={image.className}
                                        width={image.width}
                                    />
                                ))}
                            </Carousel>

                        </Image.PreviewGroup>
                    </RevealWrapper>
                    {/*<RevealWrapper origin="top" duration={1500}>*/}
                    {/*<div className="grid grid-cols-3 gap-1 mt-1">*/}
                    {/*    <img*/}
                    {/*        src="/images/gallery/grid-1.jpg"*/}
                    {/*        alt="grid-1"*/}
                    {/*        className="h-32 object-cover w-full"*/}
                    {/*    />*/}
                    {/*    <img*/}
                    {/*        src="/images/gallery/grid-2.jpg"*/}
                    {/*        alt="grid-2"*/}
                    {/*        className="h-32 object-cover w-full"*/}
                    {/*    />*/}
                    {/*    <img*/}

                    {/*        src="/images/gallery/grid-3.jpg"*/}
                    {/*        alt="grid-3"*/}
                    {/*        className="h-32 object-cover w-full"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*</RevealWrapper>*/}
                </div>
            </div>
            {showFullSize && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '9999'
                    }}
                >
                    <Image
                        src={srcImg}
                        width="200"
                        height="100"
                        alt={"aa"}
                        onClick={handleClickImage}
                    />
                </div>
            )}
        </section>
    );
}

export default Gallery;
