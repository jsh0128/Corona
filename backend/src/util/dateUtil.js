/**
 * @description date를 yyyyMMdd형식으로 변환
 * @param {Date} _date
 */
exports.formatYYYYMMDD = (_date) => {
  const year = _date.getFullYear()
  const month = _date.getMonth() + 1
  const date = _date.getDate()

  const zeroFilledYear = numberZeroFill(year, 2)
  const zeroFilledMonth = numberZeroFill(month, 2)
  const zeroFilledDate = numberZeroFill(date, 2)

  return `${zeroFilledYear}${zeroFilledMonth}${zeroFilledDate}`
}

const numberZeroFill = (number, length) => {
  const strNumber = String(number)

  return strNumber.padStart(length, "0")
}
