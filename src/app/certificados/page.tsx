import Image from "next/image";
import Spacing from "../spacing/page";


export default function Certificados() {
  return (
    <>
      <Spacing />
      <section className="container bg-dark text-white rounded">
        <h2>
          Certificado:
        </h2>
        <div className="p-2 text-center">
          <h4>
            Algoritimo - (Conclusão 04/2023)
          </h4>

            <Image
              src="/images/ViniciusRodriguesAlgoritmo40HorasCertificadoCursoemVideo.pdf.png"
              alt="certificado-algoritimo"
              width={650}
              height={400}
              className="rounded"
            />
        </div>
      </section>

      <Spacing />

      <section className="container bg-dark text-white rounded">

        <h2>
          Certificado:
        </h2>

        <div className="p-2 text-center">

        <h4>
          Curso de Java Script e TypeScript do Básico ao Avançado - (Conclusão 05/2023)
        </h4>

          <Image
            src="/images/ViniciusRodriguesCursoJavaScriptETypeScriptdoBásicoAoAvançado146hrs.pdf.png"
            alt="certificado-algoritimo"
            className="rounded"
            width={650}
            height={400}
          />
        </div>
      </section>
      <Spacing />
    </>
  )
}
