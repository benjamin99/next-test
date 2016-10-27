import React from 'react' // eslint-disable-line
import Link from 'next/link' //eslint-disable-line

export default () => (
  <div>
    <h1>Hello world!</h1>
    <Link href='/about'>abount me</Link> <br></br>
    <Link href='/api'>api test</Link>
  </div>
)