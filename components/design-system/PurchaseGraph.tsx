import { formatAsPercentage } from '../../lib/helpers/formatters'

const PurchaseGraph = ({
  supply_sold,
  supply,
  supply_buying,
}: {
  supply_sold: number
  supply: number
  supply_buying: number
}) => {
  const soldPercentage = formatAsPercentage(supply_sold / supply)
  const buyPercentage = formatAsPercentage(supply_buying / supply)
  const maxPercentageBuytable = formatAsPercentage(
    (supply - supply_sold) / supply
  )
  const maxPurchaseReached = supply_buying >= supply - supply_sold

  return (
    <div className="relative w-full h-3 rounded-full bg-lazarus-primary-100 mt-2">
      <div className="flex flex-row justify-start items-start rounded-full overflow-hidden">
        <div
          className="h-3 bg-lazarus-primary-600"
          style={{ width: soldPercentage }}
        />
        <div
          className="h-3 bg-[#FDB022]"
          style={{
            width: !maxPurchaseReached ? buyPercentage : maxPercentageBuytable,
          }}
        />
      </div>
    </div>
  )
}

export { PurchaseGraph }
