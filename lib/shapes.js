// Declare a cube (2x2x2)
// Returns [vertices (Float32Array), normals (Float32Array), indices (Uint16Array)] 
//
//    v6----- v5
//   /|      /|
//  v1------v0|
//  | |     | |
//  | |v7---|-|v4
//  |/      |/
//  v2------v3

cube = () => {

  var vertices = new Float32Array([
     1.0, 1.0, 1.0,  -1.0, 1.0, 1.0,  -1.0,-1.0, 1.0,   1.0,-1.0, 1.0, // front
     1.0, 1.0, 1.0,   1.0,-1.0, 1.0,   1.0,-1.0,-1.0,   1.0, 1.0,-1.0, // right
     1.0, 1.0, 1.0,   1.0, 1.0,-1.0,  -1.0, 1.0,-1.0,  -1.0, 1.0, 1.0, // up
    -1.0, 1.0, 1.0,  -1.0, 1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0,-1.0, 1.0, // left
    -1.0,-1.0,-1.0,   1.0,-1.0,-1.0,   1.0,-1.0, 1.0,  -1.0,-1.0, 1.0, // down
     1.0,-1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0, 1.0,-1.0,   1.0, 1.0,-1.0  // back
  ]);

  var normals = new Float32Array([
    0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,  // front
    1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,  // right
    0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,  // up
   -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  // left
    0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,  // down
    0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0   // back
  ]);

  var indices = new Uint16Array([
    0, 1, 2,   0, 2, 3,  // front
    4, 5, 6,   4, 6, 7,  // right
    8, 9, 10,  8, 10,11, // up
    12,13,14,  12,14,15, // left
    16,17,18,  16,18,19, // down
    20,21,22,  20,22,23  // back
  ]);
  
  return [vertices, normals, indices];
};

// Declare a sphere (customizable precision, radius = 1)
// Returns [vertices (Float32Array), normals (Float32Array), indices (Uint16Array)] 
function sphere(precision = 25) {
  var i, ai, si, ci;
  var j, aj, sj, cj;
  var p1, p2;
  var positions = [];
  var indices = [];

  // Coordinates
  for (j = 0; j <= precision; j++) {
    aj = j * Math.PI / precision;
    sj = Math.sin(aj);
    cj = Math.cos(aj);
    for (i = 0; i <= precision; i++) {
      ai = i * 2 * Math.PI / precision;
      si = Math.sin(ai);
      ci = Math.cos(ai);

      positions.push(si * sj);  // X
      positions.push(cj);       // Y
      positions.push(ci * sj);  // Z
    }
  }

  // Indices
  for (j = 0; j < precision; j++) {
    for (i = 0; i < precision; i++) {
      p1 = j * (precision+1) + i;
      p2 = p1 + (precision+1);
      
      indices.push(p1);
      indices.push(p2);
      indices.push(p1 + 1);
      
      indices.push(p1 + 1);
      indices.push(p2);
      indices.push(p2 + 1);
    }
  }
  
  return [new Float32Array(positions), new Float32Array(positions), new Uint16Array(indices)];
}

// Declare a pyramid (base: 1x1 square, sides: equilateral triangles)
// Returns [vertices (Float32Array), normals (Float32Array), indices (Uint16Array)] 
pyramid = () => {
  var vertices = new Float32Array([
    -0.5, 0.0, 0.5,     0.5, 0.0, 0.5,   0.0, 0.866, 0.0,  // Front
     0.5, 0.0, 0.5,     0.5, 0.0, -0.5,  0.0, 0.866, 0.0,  // Right
     0.5, 0.0, -0.5,   -0.5, 0.0, -0.5,  0.0, 0.866, 0.0,  // Back
    -0.5, 0.0, -0.5,   -0.5, 0.0, 0.5,   0.0, 0.866, 0.0,  // Left
    -0.5, 0.0, 0.5,    -0.5, 0.0, -0.5,   0.5, 0.0, 0.5,    // Base 1 
    -0.5, 0.0, -0.5,    0.5, 0.0, -0.5,   0.5, 0.0, 0.5    // Base 2 
  ]);

  var normals = new Float32Array([
    0, -0.5, 0.866,   0, -0.5, 0.866,  0, -0.5, 0.866,  // Back
    0.866, -0.5, 0,   0.866, -0.5, 0,  0.866, -0.5, 0,  // Left
    0, -0.5, -0.866,  0, -0.5, -0.866, 0, -0.5, -0.866, // Front
    -0.866, -0.5, 0, -0.866, -0.5, 0, -0.866, -0.5, 0,  // Right
    0, 1, 0,          0, 1, 0,         0, 1, 0,         // Base
    0, 1, 0,          0, 1, 0,         0, 1, 0
  ]);

  var indices = new Uint16Array([
    0, 1, 2,    // Front
    3, 4, 5,    // Right
    6, 7, 8,    // Back
    9, 10, 11,  // Left
    12, 13, 14,  15, 16, 17 // Base
  ]);
  
  return [vertices, normals, indices];
}


// Draw the current shape
drawShape = (gl, program, cameraMatrix, modelMatrix, n, sx = 1, sy = 1, sz = 1) => {
  
  // Set the model matrix (add the custom scale if any)
  var model = gl.getUniformLocation(program, 'model');
  modelMatrix = transform(modelMatrix, {sx, sy, sz});
  gl.uniformMatrix4fv(model, false, modelMatrix);

  // Set the cube's mvp matrix (camera x model)
  var mvpMatrix = multMat4Mat4(cameraMatrix, modelMatrix);
  var mvp = gl.getUniformLocation(program, 'mvp');
  gl.uniformMatrix4fv(mvp, false, mvpMatrix);

  // Set the inverse transpose of the model matrix
  var inverseTransposeMatrix = transpose(inverse(modelMatrix));
  var inverseTranspose = gl.getUniformLocation(program, 'inverseTranspose');
  gl.uniformMatrix4fv(inverseTranspose, false, inverseTransposeMatrix);

  // Render
  gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_SHORT, 0);
};