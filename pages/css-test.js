import React from 'react' //eslint-disable-line
import css from 'next/css' // eslint-disable-line

const style = css({
  color: 'red',
  ':hover': {
    color: 'blue'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})

export default () => <p className={style}>Hi there!</p>
