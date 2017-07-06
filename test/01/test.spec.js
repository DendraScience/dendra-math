/**
 * Main tests
 */

describe('Module', function () {
  let math

  it('should import', function () {
    math = require('../../dist')

    expect(math).to.have.property('unit')
  })

  it('should convert mbar to psi', function () {
    const mbar = math.unit(1, 'mbar')

    expect(mbar.toNumber('psi')).to.equal(0.0145038)
  })
})
