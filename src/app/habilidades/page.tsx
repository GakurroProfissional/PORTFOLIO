import Image from "next/image"
import Spacing from "../spacing/page"


export default function Habilidades() {
  return (
    <>
      <Spacing />
      <section className="container bg-dark text-white rounded">
        <h2>
          Historia com a T.I.
        </h2>

        <blockquote className="blockquote">
          Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar.
          <br />
          <br />
          <footer className="blockquote-footer">Alan Turing</footer>
        </blockquote>

        <h3>Oque realmente importa</h3>

        <p className="m-4">
          Sou um <strong>Front-End Developer com um ano de experiência</strong> e possuo conhecimentos em <b>HTML, CSS, Bootstrap, JavaScript, React, Next, Vite, Webpack, Babel e Node</b>. Tenho paixão por criar interfaces web dinâmicas e acessíveis que proporcionem uma ótima experiência ao usuário. <strong>Busco uma oportunidade de integrar uma equipe criativa e inovadora que valorize o aprendizado contínuo e a qualidade do código.</strong>
        </p>

        <p className="m-4">
          Até o momento, utilizei apenas o Visual Studio Code para escrever e executar meus códigos, mas não existem segredos para se comportar nessas plataformas. O que há são melhores experiências dependendo de qual linguagem de programação você está utilizando.
        </p>


        <section className="container">
          <h3>
            Noções de:
          </h3>
          <div className="row text-center">

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                React
              </p>
              <a href="https://react.dev/" target="_blank" >
                <Image
                  src="/images/react.svg"
                  alt="svgReact"
                  width={65}
                  height={65}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded" >
              <p>
                Next
              </p>
              <a href="https://nextjs.org/" target="_blank">
                <Image

                  src="/images/next.svg"
                  alt="svgNext"
                  width={65}
                  height={65}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                Babel
              </p>
              <a href="https://babeljs.io/" target="_blank">
                <Image
                  src="https://d33wubrfki0l68.cloudfront.net/377d727c8d878832f20e08939889a58bdff0b3f2/63787/img/babel.svg"
                  alt="imgBabel"
                  width={65}
                  height={65}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                Webpack
              </p>
              <a href="https://webpack.js.org/" target="_blank">
                <Image
                  src="https://webpack.js.org/site-logo.c0e60df418e04f58.svg"
                  alt="imgWebpack"
                  height={65}
                  width={65}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                Node
              </p>
              <a href="https://nodejs.org/en" target="_blank">
                <Image
                  src="https://nodejs.org/static/images/logo.svg"
                  alt="svgNode"
                  height={65}
                  width={65}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                MongoDB
              </p>
              <a href="https://www.mongodb.com/" target="_blank">
                <Image
                  src="/images/mongoDB.svg"
                  alt="svgMongo"
                  height={65}
                  width={65}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                HTML 5
              </p>
              <a href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML" target="_blank">
                <Image

                  src="/images/mozila.svg"
                  alt="svgMozila"
                  width={100}
                  height={50}
                />
              </a>
            </div>

            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                CSS 3
              </p>
              <a href="https://www.developer.mozilla.org/en-US/" target="_blank">
                <Image

                  src="/images/mozila.svg"
                  alt="svgMozila"
                  width={100}
                  height={50}
                />
              </a>
            </div>


            <div className="col bg-primary p-4 m-4 rounded">
              <p>
                Jest
              </p>
              <div >
                <a href="https://jestjs.io/pt-BR/" className="bg-success p-2 nav-link text-black">

                    JEST

                </a>
              </div>
            </div>


          </div>
        </section>


      </section >
      <Spacing />
    </>
  )
}
