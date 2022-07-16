export const dateFormat = (date: Date): string => {
  if (Number.isNaN(date.getTime())) return ''

  return Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(date)
}
