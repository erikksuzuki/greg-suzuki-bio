export const PROCESSING_PERCENTAGES: Record<string, any> = {
  wire: 0,
  bank_account: 0,
  credit_card: 0.025,
}

export const getAssetPriceBreakdown = (
  quantity: number,
  price_per_unit?: number,
  type?: string
): { total: number; subtotal: number; processing_fee: number } => {
  const subtotal = (price_per_unit || 0) * (quantity ? quantity : 0)
  const processing_percentage = type ? PROCESSING_PERCENTAGES[type] : 0
  const processing_fee = subtotal * processing_percentage
  const total = Number((subtotal + processing_fee).toFixed(2))

  return { total, subtotal, processing_fee }
}
