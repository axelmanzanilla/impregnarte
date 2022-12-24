import React, { useState } from "react";
import { Div, Img, Button } from "./ImgMoreStyles";

function ImgMore() {
    const [seeMore, setSeeMore] = useState(false);
    return (
        <Div seeMore={seeMore}>
            <Img
                src="https://storage.googleapis.com/assets-impregnarte/images/christmas.jpg"
                alt="christmas"
            />
            <Button onClick={()=>setSeeMore(!seeMore)}>
                {seeMore ? "Ver menos" : "Ver más"}
            </Button>
        </Div>
    );
}

export default ImgMore;
