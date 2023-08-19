export type AsssetLikeResource = {
  id: string
  gallery_id: string
  user_id: string
  position_id: number
}

const buildAssetLikeResource = (
  asset_like: AsssetLikeResource
): AsssetLikeResource => {
  const { id, gallery_id, user_id, position_id } = asset_like
  return {
    id,
    gallery_id,
    user_id,
    position_id,
  }
}

export { buildAssetLikeResource }
