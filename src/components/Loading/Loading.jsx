import React from "react";
import { Loading as LoadingComponent, Letter } from "./LoadingStyles";

function Loading(){
    return(
        <LoadingComponent>
        {
            "cargando".split('').map((l, i) => <Letter key={i} letra={l} pos={i}></Letter>)
        }
        </LoadingComponent>
    )
}

export default Loading;
