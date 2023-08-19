export type AsssetViewResource = {
  id: string
  gallery_id: string
  position_id: number
  view_count: number
}

const buildAssetViewResource = (
  asset_view: AsssetViewResource
): AsssetViewResource => {
  const { id, gallery_id, position_id, view_count } = asset_view
  return {
    id,
    gallery_id,
    position_id,
    view_count,
  }
}

export { buildAssetViewResource }
