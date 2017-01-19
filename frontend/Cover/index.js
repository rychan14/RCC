import {j, createElement} from 'lib/index.js'
// import styles from './styles.css'
import {css} from 'glamor'

const container = css({
  alignItems: 'center',
  backgroundColor: '#021216',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  width: '100%'
})

const header = css({
  color: '#F1FBFE',
  fontFamily: 'Quicksand',
  fontSize: '3em',
  fontWeight: 300
})

export default () => {
  return createElement(
    j('div', {class: container}
      , j('h1', {class: header}, 'Welcome')
    )
  )
}
