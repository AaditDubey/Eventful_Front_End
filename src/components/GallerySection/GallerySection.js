import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import pImg1 from '../../images/gallery/1.jpg'
import pImg2 from '../../images/gallery/2.jpg'
import pImg3 from '../../images/gallery/3.jpg'
import pImg4 from '../../images/gallery/4.jpg'
import pImg5 from '../../images/gallery/5.jpg'
import pImg6 from '../../images/gallery/6.jpg'
import pImg7 from '../../images/gallery/7.jpg'
import pImg8 from '../../images/gallery/8.jpg'

const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
    pImg6,
    pImg7,
    pImg8,
]

const GallerySection = (props) => {

    const [open, setOpen] = React.useState(false);


    return (
        <section className="gallery-one">
            <div className="outer-container">
                <div className="clearfix">
                    {images.map((item, pitem) => (
                        <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6" key={pitem}>
                            <div className="gallery-one_block-inner">
                                <div className="gallery-one_block-image" onClick={() => setOpen(true)}>
                                    <img src={item} alt="" />
                                    <div className="gallery-one_block-overlay">
                                        <span className="gallery-one_block-icon flaticon-plus-symbol"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                ]}
                plugins={[Zoom]}
            />
        </section>
    )
}

export default GallerySection;