import React from 'react'
import Root from './Root.dev'
import tape from 'tape'

tape("App's state.active initial value", t => {
  const actual = new Root().state.active
  const expected = false

  t.equal(actual, expected,
    'Should be false')

  t.end()
})