import Link from "next/link";



export default function Footer() {
  return (

    <footer >
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-5">
        <div className="container-fluid">
          <h5 className="navbar-brand font5">
            <Link href="/" className="navbar-brand font5">
              V.R.A.
            </Link>
          </h5>
        </div>

        <div className="col navbar-nav colMeu">

          <Link href="/formacao" className="nav-link">
            Formação
          </Link>

        </div>

        <div className="col navbar-nav colMeu">

          <Link href="/certificados" className="nav-link">
            Certificados
          </Link>

        </div>

        <div className="col navbar-nav colMeu">

          <Link href="/contato" className="nav-link">
            Contato
          </Link>

        </div>

        <div className="col navbar-nav colMeu">

          <Link href="/habilidades" className="nav-link">
            Habilidades
          </Link>

        </div>

        <div className="col navbar-nav colMeu">

          <Link href="/about" className="nav-link">
            Sobre
          </Link>

        </div>




      </nav>

    </footer>

  )
}
