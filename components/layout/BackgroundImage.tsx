import ImageCrossFade from '../ImageCrossFade'

export default function BackgroundImage({ backgroundImage }: any) {
  return (
    <ImageCrossFade imgUrl={backgroundImage ?? ''} width={1728} height={864} />
  )
}
