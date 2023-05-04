import { Container } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation"

const RootLayout = () => {
    return(
        <>
           <Navigation/>
            <main className="rootlayout">
               <Container>
                 <Outlet/>
               </Container>
            </main>
        </>
       
    )
}

export default RootLayout
