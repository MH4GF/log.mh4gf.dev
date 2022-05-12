import { Tag } from '~/src/model/ArticleModel'

type Props = {
  tag: Tag
}

const bgColor = (color: Tag['color']) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-900'
    case 'brown':
      return 'bg-yellow-900'
    case 'gray':
      return 'bg-gray-700'
    case 'green':
      return 'bg-emerald-800'
    case 'orange':
      return 'bg-orange-800'
    case 'pink':
      return 'bg-pink-800'
    case 'purple':
      return 'bg-purple-900'
    case 'red':
      return 'bg-red-700'
    case 'yellow':
      return 'bg-yellow-700'
    default:
      return 'bg-blue-700'
  }
}

const classNames = (color: Tag['color']): string => {
  const classes = ['px-1', 'py-px', 'text-sm', 'rounded']
  classes.push(bgColor(color))
  return classes.join(' ')
}

export const TagChip: React.FC<Props> = ({ tag }) => {
  return <span className={classNames(tag.color)}>{tag.name}</span>
}
