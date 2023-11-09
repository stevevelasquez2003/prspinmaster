import { NavHome } from "../navbar/navbar";
import { Seccion1 } from "../secciones/seccion1";
import { Seccion2 } from "../secciones/seccion2";
import { Footer } from "../footer/footer";
export function Home(){
    return(
        <>
        <NavHome></NavHome>
        <br />
        <br />
        <br />
        <Seccion1></Seccion1>
        <br />
        <Seccion2></Seccion2>
        <Footer></Footer>
        </>
    )
}