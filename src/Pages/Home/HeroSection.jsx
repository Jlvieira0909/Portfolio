export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Olá, Me chamo João Luiz e eu sou</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title-color">Front End Developer e UI/UX Designer</span>{" "}
                    </h1>
                    <p className="hero--section--description">
                        Atuo na área de web design e web developement
                        <br/> tanto como front end developer como UI/UX designer
                    </p>
                </div>
                <a href="mailto:lvjohn09@gmail.com" className="btn btn-primary" >Entre em Contato!</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
    ;
}
