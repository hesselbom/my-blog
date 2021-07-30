const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default function formatDate(date) {
  return (
    months[date.getMonth()] + ' ' +
    date.getDate() + ', ' +
    date.getFullYear()
  )
}
