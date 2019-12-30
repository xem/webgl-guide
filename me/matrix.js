// Create an identity mat4
identity = () => {
  return new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);
}

// Compute the multiplication of two mat4
multMat4Mat4 = (a, b) => {
  var i, e, a, b, ai0, ai1, ai2, ai3;
  var c = new Float32Array(16);
  for (i = 0; i < 4; i++) {
    ai0 = a[i];
    ai1 = a[i+4];
    ai2 = a[i+8];
    ai3 = a[i+12];
    c[i]    = ai0 * b[0]  + ai1 * b[1]  + ai2 * b[2]  + ai3 * b[3];
    c[i+4]  = ai0 * b[4]  + ai1 * b[5]  + ai2 * b[6]  + ai3 * b[7];
    c[i+8]  = ai0 * b[8]  + ai1 * b[9]  + ai2 * b[10] + ai3 * b[11];
    c[i+12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
  }
  return c;
};

// Compute a perspective mat4
// options: fovy, aspect, near, far
perspective = (options) => {
  var fovy = options.fovy || 1.5;
  var aspect = options.ratio || 1;
  var near = options.near || 1;
  var far = options.far || 100;
  var s = Math.sin(fovy);
  var rd = 1 / (far - near);
  var ct = Math.cos(fovy) / s;
  return new Float32Array([
    ct / aspect, 0, 0, 0, 
    0, ct, 0, 0, 
    0, 0, -(far + near) * rd, -1,
    0, 0, -2 * near * far * rd, 0
  ]);
}

// Transform a mat4
// options: x/y/z (translate), rx/ry/rz (rotate), sx/sy/sz (scale)
transform = (mat, options) => {
  
  var out = new Float32Array(mat);
  
  var x = options.x || 0;
  var y = options.y || 0;
  var z = options.z || 0;
  
  var sx = options.sx || 1;
  var sy = options.sy || 1;
  var sz = options.sz || 1;
  
  var rx = options.rx;
  var ry = options.ry;
  var rz = options.rz;
  
  // translate
  if(x || y || z){
    out[12] += out[0] * x + out[4] * y + out[8]  * z;
    out[13] += out[1] * x + out[5] * y + out[9]  * z;
    out[14] += out[2] * x + out[6] * y + out[10] * z;
    out[15] += out[3] * x + out[7] * y + out[11] * z;
  }
  
  // Rotate
  if(rx) out.set(multMat4Mat4(out, new Float32Array([1, 0, 0, 0, 0, Math.cos(rx), Math.sin(rx), 0, 0, -Math.sin(rx), Math.cos(rx), 0, 0, 0, 0, 1])));
  if(ry) out.set(multMat4Mat4(out, new Float32Array([Math.cos(ry), 0, -Math.sin(ry), 0, 0, 1, 0, 0, Math.sin(ry), 0, Math.cos(ry), 0, 0, 0, 0, 1])));
  if(rz) out.set(multMat4Mat4(out, new Float32Array([Math.cos(rz), Math.sin(rz), 0, 0, -Math.sin(rz), Math.cos(rz), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])));
  
  // Scale
  if(sx !== 1){
    out[0] *= sx;  
    out[1] *= sx;
    out[2] *= sx;
    out[3] *= sx;
  }
  if(sy !== 1){
    out[4] *= sy;
    out[5] *= sy;
    out[6] *= sy;
    out[7] *= sy;
  }
  if(sz !== 1){
    out[8] *= sz;
    out[9] *= sz;
    out[10] *= sz;
    out[11] *= sz;
  }
  
  return out;
};

// Get the transposed of a mat4
transpose = m => {
  return new Float32Array([
    m[0], m[4], m[8],  m[12],
    m[1], m[5], m[9],  m[13],
    m[2], m[6], m[10], m[14],
    m[3], m[7], m[11], m[15]
  ]);
}

// Get the inverse of a mat4
// The mat4 is not modified, a new mat4 is returned
inverse = m => {
  var inv = new Float32Array([
     m[5]*m[10]*m[15] - m[5]*m[11]*m[14] - m[9]*m[6]*m[15] + m[9]*m[7]*m[14] + m[13]*m[6]*m[11] - m[13]*m[7]*m[10],
    -m[1]*m[10]*m[15] + m[1]*m[11]*m[14] + m[9]*m[2]*m[15] - m[9]*m[3]*m[14] - m[13]*m[2]*m[11] + m[13]*m[3]*m[10],
     m[1]*m[6]*m[15]  - m[1]*m[7]*m[14]  - m[5]*m[2]*m[15] + m[5]*m[3]*m[14] + m[13]*m[2]*m[7]  - m[13]*m[3]*m[6],
    -m[1]*m[6]*m[11]  + m[1]*m[7]*m[10]  + m[5]*m[2]*m[11] - m[5]*m[3]*m[10] - m[9]*m[2]*m[7]   + m[9]*m[3]*m[6],
    -m[4]*m[10]*m[15] + m[4]*m[11]*m[14] + m[8]*m[6]*m[15] - m[8]*m[7]*m[14] - m[12]*m[6]*m[11] + m[12]*m[7]*m[10],
     m[0]*m[10]*m[15] - m[0]*m[11]*m[14] - m[8]*m[2]*m[15] + m[8]*m[3]*m[14] + m[12]*m[2]*m[11] - m[12]*m[3]*m[10],
    -m[0]*m[6]*m[15]  + m[0]*m[7]*m[14]  + m[4]*m[2]*m[15] - m[4]*m[3]*m[14] - m[12]*m[2]*m[7]  + m[12]*m[3]*m[6],
     m[0]*m[6]*m[11]  - m[0]*m[7]*m[10]  - m[4]*m[2]*m[11] + m[4]*m[3]*m[10] + m[8]*m[2]*m[7]   - m[8]*m[3]*m[6],
     m[4]*m[9]*m[15]  - m[4]*m[11]*m[13] - m[8]*m[5]*m[15] + m[8]*m[7]*m[13] + m[12]*m[5]*m[11] - m[12]*m[7]*m[9],
    -m[0]*m[9]*m[15]  + m[0]*m[11]*m[13] + m[8]*m[1]*m[15] - m[8]*m[3]*m[13] - m[12]*m[1]*m[11] + m[12]*m[3]*m[9],
     m[0]*m[5]*m[15]  - m[0]*m[7]*m[13]  - m[4]*m[1]*m[15] + m[4]*m[3]*m[13] + m[12]*m[1]*m[7]  - m[12]*m[3]*m[5],
    -m[0]*m[5]*m[11]  + m[0]*m[7]*m[9]   + m[4]*m[1]*m[11] - m[4]*m[3]*m[9]  - m[8]*m[1]*m[7]   + m[8]*m[3]*m[5],
    -m[4]*m[9]*m[14]  + m[4]*m[10]*m[13] + m[8]*m[5]*m[14] - m[8]*m[6]*m[13] - m[12]*m[5]*m[10] + m[12]*m[6]*m[9],
     m[0]*m[9]*m[14]  - m[0]*m[10]*m[13] - m[8]*m[1]*m[14] + m[8]*m[2]*m[13] + m[12]*m[1]*m[10] - m[12]*m[2]*m[9],
    -m[0]*m[5]*m[14]  + m[0]*m[6]*m[13]  + m[4]*m[1]*m[14] - m[4]*m[2]*m[13] - m[12]*m[1]*m[6]  + m[12]*m[2]*m[5],
     m[0]*m[5]*m[10]  - m[0]*m[6]*m[9]   - m[4]*m[1]*m[10] + m[4]*m[2]*m[9]  + m[8]*m[1]*m[6]   - m[8]*m[2]*m[5]
  ]);
  det = m[0]*inv[0] + m[1]*inv[4] + m[2]*inv[8] + m[3]*inv[12];
  if(!det) return m;
  det = 1 / det;
  for(var i = 0; i < 16; i++) {
    inv[i] *= det;
  }
  return inv;
}

/*// Normalize a vec3
normalize = vec => {
  g = Math.hypot(vec[0], vec[1], vec[2]);
  if(g == 0 || g == 1) return vec;
  vec[0] /= g;
  vec[1] /= g; 
  vec[2] /= g;
  return vec;
}*/