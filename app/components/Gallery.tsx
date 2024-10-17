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
        // o to
        'https://lh3.googleusercontent.com/pw/AP1GczPhsVma8ng30L906KZHO2kWjYr6OvtuSVgchGVYz_AEO-G6PRjzlBVC8eJGy4cUyvCbwgLG5yIsEAz092-7dICeUcn8OOJpacC-4D-Xu0rG46prZQxBF1BgvU7Nyql0a6aO84Nu6rx5muG8JBVHX8pd=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOQQA13Rq4PjuKxw-tBcqLcCFKsztQsN17JxuVYXmicJ30jAesugQMpBbGN1nPcszm93Hwery1Dq1Z1oCG2moIZVvFDH7btZ1xxgzgU9nvLU2-gah3YBity_LPx4JCY4jqa-7wl-o4BEu5FYkaX49P6=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczO3Fo-zYYVGEe5J7yHZRmvNQCU-A0oqZHRcJffHudrwaKo-ZOS5CqzhIQtXCw67q1aXjUEwk4tZ946A8X4yzOxhm7TbOQklLoAAbCpS8KyzzxF4BCN_dWuAU6q7NbgkTwoNAMtfhE9IDltJKglUGlVR=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczN3t8SKIoYa40mX2v7NQx9UT4arpqppnlK5qVmoFygYtldLoqIZ4uv_Oy9H7UobQu5206aPxOwrithXzD8Od7PoPPwu6RwtUaNg4nsEsjLAJob-mbeqJ6ZRNvFWzApFmucWP0dtZ5pNgnU-B50aFDNa=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczO59d1tISUKLqrwTeH2GZKBCPgVKmjguQ7YV2bLozAgmWNsF-5qCjCWToOloVhNrs6cG8jmcuYRsBh57FjhDvTtDIYZ7jEr8RrzE2Je2wJnDKOORBhClxRsrspmQH5uWAFj3_pB7i1QBqlbpLs6ml69=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNniQRZbgEzpVq132MtYSMwRic1Ud-Dz86R0TOqTATY75UfpPqEdGM99N1HW2nrcJqTFnb4xAhk9WJoAzoMpZcM7W-rP37DePRy1_LpKQz8reUrJ8E89w1GOSRD7sWaBqlqWDjsz9stpHmrr33MQOnD=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOdS9W7yawsHxcXOWcaecfmLI9DVFL6nJAjP_pKizv56Rs4SfNEcKslV6FQ4v6Aq_RdFwHa0RppmFYPqqCYY-KlsuXGHOCMN66TzMDQuk_cMi_WpoZ01_fo9onpZZHihHEtK1UO5xJl5DbB0bDV0rG-=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczM0-SW3pbVLsWf-JRvqNykatXyFQJW7uDNS2J7mrTsVA1rXHTf4k8gaai5PENSndCxIpqwcnSu1wfR3-qlfkH7UEYYLMDmN9htlyrxDMCM70tAf0OaYq8dM61gN1YwKWje-RCkXvUzz-ofCH8ouBk2v=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMTMJwVBfH03JsjhtZLZv7U5vMTFJbsiyX4myp1IuabMGjskWfublVE0a6xPtp6IuWnCl9IpFn_uLwB8Ah-74HzsOGvldB_DXSXjX4kg7oMK2muUeHXkOwGaDynDbwpLT2t9G1q5AOqWpiEIasOw0Cw=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMceN24kUAD2QygHyqvdtBDDYR8vup_WJOvI1lQgUE9-MVGlSwMXccM9eHzhT6OTvUdXK2LnQB7aw9sF79QbpT7zDKWlBm9Oy9QmpkyfAg6RPLX1U9xruNj8ttmsPt9GfvKn5raHQSg8Xma2-xlrxP4=w635-h953-s-no-gm?authuser=0',

        // phong den
        'https://lh3.googleusercontent.com/pw/AP1GczNN2Ix5fmcBopSt33ZEhxAd2esUVThkrF1ALH1ew34XXt82TFgLVLEeu8AFREvT8wHRz_FP0eFQz0h6qENwHu3zajFsaJWReO_b8Dzwrr2qgo0HfLxfRh3xS7tG_QW4mBZWIXEB8kTDFYS9lh2KpLyg=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNPgAOM1eBKroNfuj4q7JWthoq8zK1Ho4oAMstCxS3FqqVgtvElDBo-iM0Z6y1rCWOYWLDL6fgAl2cBnDKUMg2PH4jciQKORFLOvnj8X0Tq1phhT-Gwm1hBw7m5JkDPcVb2T5jdkhVFli0nvZa0g9Ad=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPONTzY42klyeJj_KqLvVVBYuxeSgkVpfW5DbNXkmu__o3M4cYM5ov5e4OBVb4fZpM3uFu0p3a7k-YVpRur4hOa6lfQ2Onb7iHh7neGZl49TjQvBqFbwUxbiSGxLUt-UyRzcPH9kyqsReacENYQhdYe=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczP1EPphvRPqK7ajkNvYbYxKkG6wIsmMN8DqMekeNqJNBMRtrqBY-LyKVPh8T0tX3DhFJwDE3fl8j2M9KUGCcx9RbKcf2PFCDRTy3lCoFDqzC9Y8QmG4iQBZ-mRl_3ZAT2LzE88mKNAxQMP91eekWj0I=w635-h953-s-no-gm?authuser=0',
        // 'https://lh3.googleusercontent.com/pw/AP1GczM4pG7FUbuCiqIOKs9AlGjy9g_NavvhAg3FzzxVQpkuoJDBkY4EFUOCEEukuQIej58whLyrdQttbqcEFsDdKtsmDXgPu-eQ96-Vs7JxgbRRC3V0hx5zZ194jKE38bu1E6XGpegrp7XPsoOlKqQxhTRy=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMD1TsR9169337RP6Aa00gIqBDWYxxDB9Js84EkeuUnIEgStwPv6njc-Jw6CCML_67Kg3zSbzPEl6AzfFGDoQqBAbJD7aDon0y0me3Plc20FD6UYhBgkViUmultYcUGMJe3ax_S_RV5QjLtg68vp3hc=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMDrtRVjnHmgOHCE_P1AVkD-7ZGrRUUq5yeket0eaXpFZsuF5RdZcBms_X3PINxNfFbVb4skXUbQZFNKdENoPcX-k8l_WbvJ3sj9CcQ20PeZEZepUK_aYsW2iLOJz5PwR9GDAsNp0-meaavu1hh6PpK=w635-h953-s-no-gm?authuser=0',
        // 'https://lh3.googleusercontent.com/pw/AP1GczNZCDKAXmOmmo1FdrksdiZAwLLEei6_9ovetGIYrD8Gm2ydUbpX-eS1exrRlTZhS7lhv0lncGsB2H9rKHfI4yds3E-lp399oPcJ0or_OLwGiBE8TDxOnnV_-tQ6sWpCzg8BQFg9kCgNTNhdm5_zi53J=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNNR-hiQ8RSu0hZyGQJuy_hLFjaR2aC6OxmHL5YpiaLG_ZFf1THustfyenOUjMPnwqAKlnVDnXojtFS5WWEpdSKBhEwl7ry0Xc1E0u1e4-z5eXWxQkpgH1sqUXrOeRz8S0gWyzjII_YlI7cZcbKMm-v=w635-h953-s-no-gm?authuser=0',

        // phong trang
        'https://lh3.googleusercontent.com/pw/AP1GczPSUiGkS5GirYKTq5qHM3fc0UsecKoJwg1St1CzwejzUT-8YpHUB-XhnoZvlKLDABszPR6a7HZgMIkplj9Pey64l88TkycmD_MgFI_kk_tKK2GtNAxQMvYTnoOwdfA7aHUKNzYakGMCw7Wu6u9k94fp=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPjVenf6uxqfm8pn1bN-8tkTtQq6YzNoFHemB4Y2hCmY8aMjHC09dy6KUBb8y8VC3N3MG49kbdW-JbaT_kQA28QFTzwwtJNjnufLB61WkqXwZy3IJkj2AdQJYNrSYK_HztgRMGk-0ZcvmRUnOz2uVP4=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMCaN81abmlIOQ5IRCKwRKK7Jrhr9BsS0dZnU_7Q8HBNi0yWkUpJ2cU2-h7FDo2LAK0tOJlWOhEgxwBuwmhlwNldBM5XZ3kD9o76QZ0pv57_swuNhhBRyoOr1LZGHRPZZu0wYBqot3LOox3zaLU0t2-=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMSfNtwQR4BlqPAVj6au1lkx4LF8HPckz_ENnkYjOHSlmCw_TxHu8fuk5u2jUdS5EkBuj-3PLg49031_RdYw27mFZMPpqpa1YXEaJ9jJQ_C9hjibP6E-QrYb8MJZ-PFRw0sHSIm5eYnOVgZs90SsdWf=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPI8WNxXgJ5TPtbSgkJrhQ8_169KLmmnRvxjt5-iUj-7rOgAaNseiuPXY5wp2dB3i1-OjniYhq0LQGhpfQ2PBO9c6wIDp86IwQRmD3-1i-8rvv1oPopF-zfPcPk5rMXyWAqThlJbkvkxuUdbbBnweKs=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczO530tbktLvkMPuTKoHYkaAAf0ir5CgI4ZEoKf9cS1qP3_0hESdphuz0SoC6PPkR1Xp8uW0TtADCPfb0b-8Ymh6Mbkk49LQFJkeNX6EuztjHOXWK9xtIfDEj7IEQU7HG0YR8AjMx_amXOWNB5NE2Sc4=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOj9tdmGQ_7Ceuj65BFs4g9H-KemhD4MksGPzlzYlRenFB5w8e2K1m9KyrvaRZL9ACTapQVVt8v0RvHd3qIkxn2QcJcqc66pWlvIjHQG46nqflVplcTpfQOlva3Sq5DBPKxRZczyyzLJOpPAjAjDUkB=w635-h953-s-no-gm?authuser=0',

        // san thuong
        // 'https://lh3.googleusercontent.com/pw/AP1GczOI1PK7NNLLOcFkHlMn0_r4JpOzfa067bc0P0v4YarvkZ4jZ7NgcI1AA51E-RjAtsAiE2a_H36mh4Ibn8m2k-wGvxDcOo7DP-qUFbEthxKtsa_bD6UpAV8CZk1b563Tw7yiBRmht6eF03x5arZCc4mV=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPp0NZROfBk7DZ3oy2mw7-UOWJLnBMGpqI2hhVmlsN27loOCGkz1B_sntoGXlqKnpZIu3zw-74bKZ-1U4X3aDqFU8zq5vZ4bVXK_IWPWz7EGBHGmwwpqy3zUIHQR4ced56KPh3Y6TZcHhAJICziZ9ZG=w635-h953-s-no-gm?authuser=0',
        // 'https://lh3.googleusercontent.com/pw/AP1GczNnveOCViwiTM-FLOz3CXw4EkNbSa-dIDA_Po4PzbmEh8Apo_ALRXLrV_g0TYkX_bAzqPvxwZmZgOJkOlsPZWWFIB2UHnSbW3m4YxGz4oAM3tOlCIK2yPtyxjIAEF9HrdutOgQx8CPgerIJYedz7phy=w635-h953-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOf4Hz-jVAt0vI6X77c_C3sOtHJBzri64EBO2Gq9xLOWqPgI9y7tQYTfjO8Z94Bgy6XfNfL687TnfeVAhc6ajtohO-7-iaThM6dvBCpQhx8wqKEa_Y2jWDjIT0bGlh_34x4ecBhBGsqfx9RPORMlpIy=w635-h953-s-no-gm?authuser=0',

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
            <div className="relative px-8 py-2">
                <div
                    className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <div className="z-10 relative">
                        <h1 className="text-xl italic font-light text-center text-white pt-8">
                            Our Gallery
                        </h1>
                        <div className="flex flex-col items-center text-center gap-4 my-10">

                            <RevealWrapper origin="top" duration={1500}>
                                <Image
                                    src={'https://lh3.googleusercontent.com/pw/AP1GczO530tbktLvkMPuTKoHYkaAAf0ir5CgI4ZEoKf9cS1qP3_0hESdphuz0SoC6PPkR1Xp8uW0TtADCPfb0b-8Ymh6Mbkk49LQFJkeNX6EuztjHOXWK9xtIfDEj7IEQU7HG0YR8AjMx_amXOWNB5NE2Sc4=w635-h953-s-no-gm?authuser=0'}
                                    alt={'quote'}
                                />
                                <span>
                                    <FaQuoteRight color="#4242427A" fontSize="1.75rem"/>
                                </span>
                            </RevealWrapper>
                            <RevealWrapper origin="bottom" duration={1500}>
                                <p className="text-[0.8rem] font-light leading-loose px-8">
                                    From when I first saw you, I felt that I was finally home, all I
                                    want is to make your dreams come true and share our dreams
                                    together.
                                </p>
                            </RevealWrapper>
                        </div>
                        <RevealWrapper origin="top" duration={1500}>
                            <Image
                                src={'https://lh3.googleusercontent.com/pw/AP1GczOu_M25o3Sn3MdN2azk7hgSawJHpmcVGo7uLq2NEWJPZeQe76H7LsW0-lMrIgDRJbumiRuHsqIeWQBcnoAKf_dUW8Im7y1BwDLUQ9lA-LtJkhAvI7Mc_kd90caR1YC3WsizT7nxCgmsSjQpdScS2UdG=w635-h953-s-no-gm?authuser=0'}
                                alt={'JIN_2591'}
                                className='w-full h-96 object-cover object-bottom'
                            />
                            <Carousel
                                // swipeable={false}
                                // draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        // alt={image.alt}
                                        // className={image.className}
                                        // width={image.width}
                                    />
                                ))}
                            </Carousel>
                            {/*<Image*/}
                            {/*    src='https://lh3.googleusercontent.com/pw/AP1GczOPrtLhwNdbsZpmmGtLina_IDGLLYi0VEW6tIgNXw0UemOneF7trmj-UVoAz40yoAKoU_S2grmfsbh72JIojYLNGVOcfWqe-V9SHKS8xtlYtvnmSkh6D-KK0Gl0TEkSTzuA005tG60X4VzVpO0qPzOq=w1430-h953-s-no-gm?authuser=0'*/}
                            {/*    alt={'JIN_2591'}*/}
                            {/*    className='w-full h-96 object-cover object-bottom'*/}
                            {/*/>*/}

                        </RevealWrapper>
                    </div>
                </Image.PreviewGroup>
            </div>
            <div className="relative px-8 pb-16">
                <div
                    className="bg-transparent bg-[linear-gradient(180deg,#EAEAEA_53%,#424242_100%)] absolute inset-0"></div>
                <RevealWrapper origin="top" duration={2000}>
                    <Image
                        src='https://lh3.googleusercontent.com/pw/AP1GczMcHhCp56oGnQeNIN7Iz5GmxXkxQw99pB60BKZ-gJhQnb9MM6okDCsfGgv0k7Fx8VGSdc0jrU4AYbpaUkAUtaATOu-kl3TyLvicdges10ndotFWYB8CbdRQ0FhLYKd8rTbi7IPsnz18D7FrIk9uqq4P=w1430-h953-s-no-gm?authuser=0'
                        alt={'JIN_2591'}
                        className='w-full h-96 object-cover object-bottom'
                    />
                </RevealWrapper>

            </div>
            {/*{showFullSize && (*/}
            {/*    <div*/}
            {/*        style={{*/}
            {/*            position: 'fixed',*/}
            {/*            top: '50%',*/}
            {/*            left: '50%',*/}
            {/*            transform: 'translate(-50%, -50%)',*/}
            {/*            zIndex: '9999'*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            src={srcImg}*/}
            {/*            width="200"*/}
            {/*            height="100"*/}
            {/*            alt={"aa"}*/}
            {/*            onClick={handleClickImage}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*)}*/}
        </section>
    );
}

export default Gallery;
