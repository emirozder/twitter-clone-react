export const numberFormatOverTenThousend = (value) => {
  return Intl.NumberFormat("tr-TR", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}

export const numberFormat = (value) => {
  return Intl.NumberFormat("tr-TR").format(value)
}