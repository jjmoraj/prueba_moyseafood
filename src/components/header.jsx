import { Link, BrowserRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const HeaderComponent = () =>{


    return(

        <>
        <section className="jumbotron text-center">
  
          <div className="container">
            <h1 className="jumbotron-heading">Usuarios de MoySeaFood</h1>
            <p className="lead text-muted">Aqui encontraras los usuario de MoySeaFood, asi como sus distintos datos.</p>
                <Link className="btn btn-primary my-2" to='/users'>
                    Usuarios
                </Link>
          </div>
        </section>
        </>

    )
}

export default HeaderComponent;