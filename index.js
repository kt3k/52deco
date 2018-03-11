/**
 * Apply the method decorator.
 * @param {Function} decorator The decorator
 * @param {Function} cls The decoratee class
 * @param {string} key The decoratee method's name
 */
exports.method = (decorator, cls, key) => {
  const proto = cls.prototype
  const descriptor = Object.getOwnPropertyDescriptor(proto, key)

  if (!descriptor) {
    throw new Error(`${key} is not defined in class ${cls.name}`)
  }

  const resultDescriptor = decorator(proto, key, descriptor)

  Object.defineProperty(proto, key, resultDescriptor || descriptor)
}

/**
 * Apply the class decorator.
 * @param {Function} decorator The decorator
 * @param {Function} cls The decoratee class
 */
exports.class = (decorator, cls) => {
  // TODO: please implement this, anybody.
}
