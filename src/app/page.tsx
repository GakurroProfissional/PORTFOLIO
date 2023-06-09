import Image from "next/image"


import Spacing from "./spacing/page"


export default function Home() {
  return (

    <>
      <Spacing />
      <section className="container p-5 bg-dark text-white rounded">

        <h2>
          Apresentação:
        </h2>


        <p className="m-4">
          Me chamo <strong>Vinícius Rodrigues de Araujo</strong> e este site tem o intuito de demonstrar minhas <b>competências</b>, <b>habilidades</b> e mostrar um pouco da minha <strong>historia de vida</strong>.
        </p>



        <h2>Objetivo ao integrar uma empresa:</h2>
        <ul>
          <li>Desenvolver novas habilidades e conhecimentos para aplicação eficiente e tempestiva diante de situações
            de risco e/ou tradicionais/eventuais.</li>
          <li>Exercer as atividades com boa-fé, transparência, diligência e lealdade.</li>
          <li>Adotar condutas compatíveis com os princípios da idoneidade moral e profissional. </li>
        </ul>

        <Spacing />

        <h4>
          Disciplinas que estudei
        </h4>

        <ol className="list-group list-group-numbered p-3">
          <li className="list-group-item p-4"> <b>Legislação</b>

            <ul>
              <li>Noções de:
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">Constituição Federal</li>
                  <li className="list-group-item">Código Penal - C.P.</li>
                  <li className="list-group-item">Código Processual Penal - C.P.P.</li>
                  <li className="list-group-item">Direito Administrativo</li>
                  <li className="list-group-item">Código de Defesa do Consumidor - C.D.C.</li>
                  <li className="list-group-item">Plano Distrital de Políticas para Mulheres - P.D.P.M.</li>
                  <li className="list-group-item">Lei Geral de Proteção de Dados - LGPD</li>
                  
                  <li className="list-group-item">LODF</li>
                </ol>
              </li>
            </ul>
          </li>

          <Spacing />


          <li className="list-group-item"><b>Demais conhecimentos</b>
            <ul>
              <li>Noções de:
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">Português</li>
                  <li className="list-group-item">Raciocínio Lógico</li>
                  <li className="list-group-item">Matemática Básica</li>
                  <li className="list-group-item">Matemática Financeira</li>
                  <li className="list-group-item">Matemática Aplicada</li>
                  <li className="list-group-item">Contabilidade</li>
                  <li className="list-group-item">Estatística</li>
                  <li className="list-group-item">Sistema Financeiro Nacional - SFN</li>
                  <li className="list-group-item">Governança Corporativa - G.C.</li>
                  <li className="list-group-item">Compliance</li>
                  <li className="list-group-item">Inovação</li>
                  
                </ol>
              </li>
            </ul>
          </li>
        </ol>

        <Spacing />

        <section className="container ">
          <h3>
            Concursos que realizei para adquirir experiência:
          </h3>

          <div className="row text-center text-black">
              <div className="col bg-light p-4 m-4 rounded">
                <p>
                  PMDF 2018 - Praça;
                </p>
                <Image
                  src="/images/logoPMDF.png"
                  alt="logoPMDF"
                  width={60}
                  height={60}
                />
              </div>

            <div className="col bg-light p-4 m-4 rounded">
              <p>
                PCDF 2019 - Escrivão;
              </p>
              <Image
                src="/images/logoPCDF.jpg"
                alt="logoPCDF"
                width={60}
                height={60}
              />
            </div>

            <div className="col bg-light p-4 m-4 rounded">
              <p>
                PCDF 2021 - Agente;
              </p>
              <Image
                src="/images/logoPCDF.jpg"
                alt="logoPCDF"
                width={60}
                height={60}
              />
            </div>

            <div className="col bg-light p-4 m-4 rounded">
              <p>
                BRB 2022 - Escriturário;
              </p>
              <Image
                src="/images/logoBrb.png"
                alt="logo"
                width={60}
                height={60}
              />
            </div>

            <div className="col bg-light p-4 m-4 rounded">
              <p>
                PMDF 2023 - Praça;
              </p>
              <Image
                src="/images/logoPMDF.png"
                alt="logoPMDF"
                width={60}
                height={60}
              />
            </div>

          </div>
        </section>

      </section >

      <Spacing />
    </>

  )
}
