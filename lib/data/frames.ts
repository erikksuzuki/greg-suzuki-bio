type Details = {
  title: string
  medium: string
  description: string
}

// NOTE: Might be able to remove? Might be dynamic based on the art?
type Dimension = [width: number, height: number, depth?: number]

// NOTE: Might be able to remove? Might be determined by the Scene
type Position = [x: number, y: number, z: number]

// NOTE: Position for the art inside the frame
type ArtPosition = [x: number, y: number, z: number]

// NOTE: Might be able to remove, might be determined by the Scene
type Rotation = [x: number, y: number, z: number]

// NOTE: Might be able to remove, could declare in each individual frame's .tsx file
type Model = {
  texture?: Textures
  model: string
}

// NOTE: Might be able to remove, could declare in each individual frame's .tsx file
type Textures = {
  diffuse: string
  normal?: string | null
  roughness?: string | null
  metalness?: string | null
}

// An interface describing the different properties of a single frame object
export interface FrameProps {
  id: string
  slug: string
  contract_address?: string | null
  tags: string[]
  details: Details
  dimensions?: Dimension | null
  position?: Position | null
  art_position?: ArtPosition | null
  rotation?: Rotation | null
  // textures: Textures
  // model: Model
}

// A map of frame objects with slug as the key
export type FrameMap = Record<string, FrameProps>

// Generic gold frame
const GOLD_FRAME: FrameProps = {
  id: 'gold-001',
  slug: 'gold-001',
  tags: ['gold'],
  // textures: {
  //   diffuse: '/images/frames/gold-diffuse.jpg',
  //   normal: '/images/frames/gold-normal.jpg',
  //   roughness: '/images/frames/gold-roughness.jpg',
  //   metalness: '/images/frames/gold-metal.jpg',
  // },
  details: {
    title: 'Gold Frame',
    medium: 'Metal',
    description: 'A beautiful gold frame.',
  },
  dimensions: [1.0, 1.0, 0.2],
  position: [0, 0, 0],
  art_position: [0, 0, 0.0062],
  rotation: [0, 0, 0],
}

// Generic acrylic frame
// const ACRYLIC_FRAME: Frame = {
//   id: 'acrylic-001',
//   slug: 'acrylic-001',
//   tags: ['acrylic'],
//   textures: {
//     diffuse: '/textures/frames/acrylic-001/diffuse.jpg',
//     normal: '/textures/frames/acrylic-001/normal.jpg',
//     roughness: '/textures/frames/acrylic-001/roughness.jpg',
//     metalness: '/textures/frames/acrylic-001/metal.jpg',
//   },
//   details: {
//     title: 'Acrylic Frame',
//     medium: 'Acrylic',
//     description: 'A generic acrylic frame',
//   },
//   dimensions: {
//     width: 1.0,
//     height: 1.0,
//     depth: 0.2,
//   },
//   position: {
//     x: 0,
//     y: 0,
//     z: 0,
//   },
//   rotation: {
//     x: 0,
//     y: 0,
//     z: 0,
//   },
// }

export const FramesData: FrameMap = {
  'gold-001': GOLD_FRAME,
  // 'acrylic-001': ACRYLIC_FRAME,
}
