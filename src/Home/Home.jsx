import { NavHome } from "../navbar/navbar";
import { Seccion1 } from "../secciones/seccion1";
import { Seccion2 } from "../secciones/seccion2";
export function Home(){
    return(
        <>
        <NavHome></NavHome>
        <Seccion1></Seccion1>
        <Seccion2></Seccion2>
        </>
    )
}