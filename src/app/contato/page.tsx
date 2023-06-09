import Image from "next/image"
import Spacing from "../spacing/page"

export default function Contato() {
  return (
    <>
      <Spacing />
      <section className="container bg-dark text-white rounded">
        <h2>Entre em contato:</h2>

        {/*GRID*/}
        <div className="row text-center">

          {/*LINKEDIN*/}
          <div className="col bg-primary p-4 m-4 rounded">
            <h3 className="font3">
              Linkedin
            </h3>
            <a href="https://www.linkedin.com/in/viniciusrodriguesdearaujo" target="_blank" className="hoverLinkedin">
              <Image
                src="/images/linkedin.svg"
                alt="svgLinkedin"
                width={50}
                height={50}
              />
            </a>
          </div>

          {/*GITHUB*/}
          <div className="col bg-primary p-4 m-4 rounded">
            <h3 className="font3">
              GitHub
            </h3>
            <a href="https://github.com/GakurroProfissional/LearningHtmlCssJavaNextJs.git" target="_blank" className="hoverGitHub">
              <Image
                src="/images/github.svg"
                alt="svgImg"
                width={50}
                height={50}
              />
            </a>
          </div>

          {/*CELULAR*/}
          <div className="col bg-primary p-4 m-4 rounded">
            <h3 className="font3">
              Celular
            </h3>
            <div>
              <a href="tel:+5561982214165" target="_blank" className="bg-black p-2 text-white decoration-none">
                (61) 9 8221 - 4165
              </a>
            </div>
          </div>

          {/*WHATSAPP*/}
          <div className="col bg-primary p-4 m-4 rounded">
            <h3 className="font3">
              Whatsapp
            </h3>
            <a href="https://wa.me/5561982214165" target="_blank">
              <Image
                src="/images/imgSvgWhats/inline/white/whatsInlineWhite.svg"
                alt="svgImg"
                className="bg-success p-2"
                width={150}
                height={50}
              />
            </a>
          </div>

        </div>
      </section>
      <Spacing />
    </>
  )
}
