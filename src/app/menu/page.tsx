import Link from "next/link"


export default function Menu() {

  return (

    <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top " >
      <div className="container-fluid">
        <h5 >
          <Link href="/" className="navbar-brand font5">
            V. R. A.
          </Link>
        </h5>
      </div>

      <div className="col navbar-nav colMeu">
        <p className="nav-item">
          <Link
            href="/contato"
            className="nav-link"
          >
            Contato
          </Link>
        </p>
      </div>

      <div className="col navbar-nav colMeu">
        <p className="nav-item">
          <Link
            href="/formacao"
            className="nav-link"
          >
            Formação
          </Link>
        </p>
      </div>

      <div className="col navbar-nav colMeu">
        <p className="nav-item">
          <Link
            href="/habilidades"
            className="nav-link"
          >
            Habilidades
          </Link>
        </p>
      </div>

      <div className="col navbar-nav colMeu">
        <p className="nav-item">
          <Link
            href="/certificados"
            className="nav-link"
          >
            Certificados
          </Link>
        </p>
      </div>

    </nav >

  )
}
