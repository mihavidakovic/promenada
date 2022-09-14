import { useState, useEffect, Ref } from "react"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from "react-photoswipe-gallery";

export default function GalleryComponent({ number }) {
    const [images, setImages] = useState()

    function getImages(num) {
        let all = []
        for (let index = 1; index < num; index++) {
            all.push({
                imageUrl: "https://assets.24ur.si/promenada2022/slika-" + index + ".jpg",
                thumbUrl: "https://assets.24ur.si/promenada2022/thumbnails/slika-" + index + ".jpg"
            })
        }

        setImages(all)

    }

    useEffect(() => {
        getImages(number)
    }, [])

    const options = {
        settings: {
            overlayColor: 'rgba(0, 0, 0, 0.9)',
        },
        caption: {},
        buttons: {
            showDownloadButton: false,
            showNextButton: false,
            showPrevButton: true,

        },
        thumbnails: {
            showThumbnails: true
        },
        progressBar: {},
        showAnimationDuration: 200,
        hideAnimationDuration: 0,


    }

    if (images) {
        return (
            <Gallery options={options} id="promenada2022">
                <div style={{width: '100%'}} className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-0 md:px-0 bg-white">
                    {images.map((image, i) => {
                        return (
                            <Item
                                original={image.imageUrl}
                                thumbnail={image.thumbUrl}
                                key={i}
                            >
                                {({ ref, open }) => (
                                    <div onClick={open}
                                        ref={ref} 
                                        className="w-full bg-cover bg-center cursor-pointer opacity-90 hover:opacity-100 hover:shadow-lg transition" 
                                        style={{ paddingBottom: "100%", backgroundImage: 'url(' + image.thumbUrl + ')' }}>
                                    </div>
                                )}
                            </Item>
                        )
                    })}
                </div>
            </Gallery>
        )
    } else {
        return (
            <>
                loading
            </>
        )
    }
}
