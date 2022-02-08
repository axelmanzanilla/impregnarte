import React from "react";
import { Banner as BannerComponent } from './BannerStyles';
import { Link } from 'react-router-dom';

function Banner(){
    return(
        <Link to='/catalogo'><BannerComponent></BannerComponent></Link>
    )
}

export default Banner;
