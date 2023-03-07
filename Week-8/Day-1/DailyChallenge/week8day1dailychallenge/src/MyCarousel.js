import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Show (){

    return(
        <>
            <Carousel>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    )
}

export default Show

