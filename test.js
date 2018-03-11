const deco = require('./')
const { describe, it } = require('kocha')
const assert = require('assert')

describe('deco.method', () => {
  it('decorates the method', done => {
    class Foo {
      method () {
        this.originalMethodIsCalled = true
      }
    }

    const decorator = (target, key, descriptor) => {
      const method = descriptor.value

      descriptor.value = function () {
        method.apply(this)

        assert(this.originalMethodIsCalled)

        done()
      }
    }

    deco.method(decorator, Foo, 'method')

    const foo = new Foo()

    foo.method()
  })

  it('throws when the specified key does not exist', () => {
    class Foo {}

    assert.throws(() => {
      deco.method(() => {}, Foo, 'bar')
    })
  })
})

describe('deco.class', () => {
  it.skip('decorates the given class with the give decorator', () => {
  })
})
