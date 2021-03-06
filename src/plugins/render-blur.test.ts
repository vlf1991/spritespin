import * as SpriteSpin from '..'
import * as t from '../lib.test'

describe('SpriteSpin.Plugins#render-blur', () => {

  let data: SpriteSpin.Data
  beforeEach((done) => {
    t.get$El().spritespin({
      source: [t.RED40x30, t.GREEN40x30, t.BLUE40x30],
      width: 40,
      height: 30,

      animate: false,
      onComplete: done,
      plugins: ['blur']
    })
    data = t.get$El().data(SpriteSpin.namespace)
  })

  afterEach(() => {
    SpriteSpin.destroy(data)
  })

  describe('basics', () => {
    it ('has has ease plugin', () => {
      expect(data.plugins[0].name).toBe('blur')
    })

    it ('doesnt break', () => {
      // can not test blur programmatically
      // thus just call updateFrame several times to step through frames
      SpriteSpin.updateFrame(data, 0)
      SpriteSpin.updateFrame(data, 1)
      SpriteSpin.updateFrame(data, 2)
    })
  })
})
