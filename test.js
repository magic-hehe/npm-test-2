const test = require('brittle')
const tmp = require('./')
const fs = require('fs')
const os = require('os')
const path = require('path')

test('basic', async function (t) {
  const dir = await tmp(t)

  t.alike(await fs.promises.readdir(dir), [])
})

