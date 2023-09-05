import { useRouter } from 'next/router'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { sideImages } from './sideImages'
import 'photoswipe/dist/photoswipe.css'

const PhotoModal = ({ page }: any) => {
  const router = useRouter()
  const onBeforeOpen = (pswpInstance: any) => {
    router.replace(`/?page=${page}`)
    pswpInstance.on('change', () => {
      router.replace(`/?page=${page}`)
    })
  }
  const options = {
    arrowPrev: true,
    arrowNext: true,
    zoom: true,
    close: true,
    counter: true,
  }
  return (
    <Gallery
      withCaption
      id="sideImages"
      onBeforeOpen={onBeforeOpen}
      options={options}
    >
      {sideImages.map((image: any) => {
        return (
          <Item
            caption={image.alt}
            key={`sideImages-image-${image.index}`}
            id={`image-${image.index}`}
            original={image.src}
            thumbnail={image.src}
            width="960"
            height="720"
          >
            {({ ref, open }: any) => (
              <img ref={ref} onClick={open} src={image.src} alt={image.alt} />
            )}
          </Item>
        )
      })}
    </Gallery>
  )
}

export default PhotoModal
