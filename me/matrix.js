// Multiply 2 matrices
multMat4Mat4 = (a, b) => {
  var i, e, a, b, ai0, ai1, ai2, ai3;
  for (i = 0; i < 4; i++) {
    ai0 = a[i];
    ai1 = a[i+4];
    ai2 = a[i+8];
    ai3 = a[i+12];
    a[i]    = ai0 * b[0]  + ai1 * b[1]  + ai2 * b[2]  + ai3 * b[3];
    a[i+4]  = ai0 * b[4]  + ai1 * b[5]  + ai2 * b[6]  + ai3 * b[7];
    a[i+8]  = ai0 * b[8]  + ai1 * b[9]  + ai2 * b[10] + ai3 * b[11];
    a[i+12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
  }
};

// Set perspective
// options: fovy, aspect, near, far
perspective = (mat, options) => {
  var fovy = options.fovy || 1.5;
  var aspect = options.ratio || 1;
  var near = options.near || 1;
  var far = options.far || 100;
  var s = Math.sin(fovy);
  var rd = 1 / (far - near);
  var ct = Math.cos(fovy) / s;
  mat.set([
    ct / aspect, 0, 0, 0, 
    0, ct, 0, 0, 
    0, 0, -(far + near) * rd, -1,
    0, 0, -2 * near * far * rd, 0
  ]);
}

// Move camera
// options: x/y/z (translate), rx/ry/rz (rotate)
camera = (mat, options) => {
  var x = options.x || 0;
  var y = options.y || 0;
  var z = options.z || 0;
  var rx = options.rx;
  var ry = options.ry;
  var rz = options.rz;
  
  // translate
  if(x || y || z){
    mat[12] += mat[0] * x + mat[4] * y + mat[8]  * z;
    mat[13] += mat[1] * x + mat[5] * y + mat[9]  * z;
    mat[14] += mat[2] * x + mat[6] * y + mat[10] * z;
    mat[15] += mat[3] * x + mat[7] * y + mat[11] * z;
  }
  
  // Rotate
  if(rx) multMat4Mat4(mat, new Float32Array([1, 0, 0, 0, 0, Math.cos(rx), Math.sin(rx), 0, 0, -Math.sin(rx), Math.cos(rx), 0, 0, 0, 0, 1]));
  if(ry) multMat4Mat4(mat, new Float32Array([Math.cos(ry), 0, -Math.sin(ry), 0, 0, 1, 0, 0, Math.sin(ry), 0, Math.cos(ry), 0, 0, 0, 0, 1]));
  if(rz) multMat4Mat4(mat, new Float32Array([Math.cos(rz), Math.sin(rz), 0, 0, -Math.sin(rz), Math.cos(rz), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
};