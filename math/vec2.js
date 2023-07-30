(() => {
const scope = { v2: class extends Array {
      constructor(x = 0, y = x) {
        super(x, y);
        return this;
      }

    get x() { return this[0] }
    get y() { return this[1] }
    set x(v) { this[0] = v }
    set y(v) { this[1] = v }

  set(x, y = x) {
    if (x.length) return this.copy(x);
    this[0] = x
    this[1] = y
    return this;
  }

  copy(v) {
    this[0] = v[0]
    this[1] = v[1]
    return this;
  }

  add(x = 0, y = x) {
    const v = this.clone()
    if (x.length) {
      v[0] += x[0];
      v[1] += x[1];
    }
    else {
      v[0] += x;
      v[1] += y;
    }
    return v;
  }

  addInPlace(x = 0, y = x) {
    if (x.length) {
      this[0] += x[0];
      this[1] += x[1];
    }
    else {
      this[0] += x;
      this[1] += y;
    }
    return this;
  }

  sub(x = 0, y = x) {
    const v = this.clone()
    if (x.length) {
      v[0] -= x[0];
      v[1] -= x[1];
    }
    else {
      v[0] -= x;
      v[1] -= y;
    }
    return v;
  }

  subInPlace(x = 0, y = x) {
    if (x.length) {
      this[0] -= x[0];
      this[1] -= x[1];
    }
    else {
      this[0] -= x;
      this[1] -= y;
    }
    return this;
  }

  multiply(x = 0, y = x) {
    const v = this.clone()
    if (x.length) {
      v[0] *= x[0];
      v[1] *= x[1];
    }
    else {
      v[0] *= x;
      v[1] *= y;
    }
    return v;
  }

  multiplyInPlace(x = 0, y = x) {
    if (x.length) {
      this[0] *= x[0];
      this[1] *= x[1];
    }
    else {
      this[0] *= x;
      this[1] *= y;
    }
    return this;
  }

  divide(x = 0, y = x) {
    const v = this.clone()
    if (x.length) {
      v[0] /= x[0];
      v[1] /= x[1];
    }
    else {
      v[0] /= x;
      v[1] /= y;
    }
    return v;
  }

  divideInPlace(x = 0, y = x) {
    if (x.length) {
      this[0] /= x[0];
      this[1] /= x[1];
    }
    else {
      this[0] /= x;
      this[1] /= y;
    }
    return this;
  }

  clone() { return new scope.v2(this[0], this[1]) }
}}

const { v2: V2 } = scope

window.v2 = function (x, y) { return new V2(x, y) }

v2.up = () => new V2(0, 1);
v2.down = () => new V2(0, -1);
v2.left = () => new V2(-1, 0);
v2.right = () => new V2(1, 0);
v2.negInfinity = () => new V2(-Infinity, -Infinity);
v2.infinity = () => new V2(Infinity, Infinity);
v2.one = () => new V2(1, 1);
v2.zero = () => new V2(0, 0);
v2.angle = v => Math.atan2(v[1], v[0]);
v2.constant = Object.freeze(v2.zero())
})()