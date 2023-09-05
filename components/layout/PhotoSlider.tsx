import dynamic from 'next/dynamic'
import { sideImages } from './sideImages'
import 'tiny-slider/dist/tiny-slider.css'

const TinySlider: any = dynamic(() => import('tiny-slider-react'), {
  ssr: false,
})

const Photoslider = ({
  orientation,
}: {
  orientation: 'vertical' | 'horizontal'
}) => {
  const settings = {
    nav: false,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    axis: orientation,
    items: orientation === 'horizontal' ? 3 : 5,
    gutter: 10,
    autoplay: true,
    rewind: false,
    autoplayHoverPause: true,
    loop: true,
    autoplayTimeout: 3000,
    speed: 3000,
  }

  return (
    <div>
      <TinySlider settings={settings}>
        {sideImages.map((image: any, index: number) => {
          return (
            <div className="relative w-[140px]" key={`sideimage-${index}`}>
              <a href={`#&gid=sideImages&pid=image-${image.index}`}>
                <img
                  rel="lightbox[roadtrip]"
                  id={`slideid-${image.index}`}
                  src={image.src}
                  className="cursor-pointer w-full opacity-50 hover:opacity-100 transition-all"
                  style={{
                    transitionProperty: 'all',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '400ms',
                  }}
                />
              </a>
            </div>
          )
        })}
      </TinySlider>
    </div>
  )
}

const PhotosliderVertical = () => <Photoslider orientation="vertical" />
const PhotosliderHorizontal = () => <Photoslider orientation="horizontal" />
export { PhotosliderVertical, PhotosliderHorizontal }
