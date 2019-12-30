// Declare a cube 
// (2x2x2, centered on the origin)
//
//    v6----- v5
//   /|      /|
//  v1------v0|
//  | |     | |
//  | |v7---|-|v4
//  |/      |/
//  v2------v3

cube = (r = 1, g = 1, b = 1) => {

  var vertices = new Float32Array([   // Coordinates
     1.0, 1.0, 1.0,  -1.0, 1.0, 1.0,  -1.0,-1.0, 1.0,   1.0,-1.0, 1.0, // front
     1.0, 1.0, 1.0,   1.0,-1.0, 1.0,   1.0,-1.0,-1.0,   1.0, 1.0,-1.0, // right
     1.0, 1.0, 1.0,   1.0, 1.0,-1.0,  -1.0, 1.0,-1.0,  -1.0, 1.0, 1.0, // up
    -1.0, 1.0, 1.0,  -1.0, 1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0,-1.0, 1.0, // left
    -1.0,-1.0,-1.0,   1.0,-1.0,-1.0,   1.0,-1.0, 1.0,  -1.0,-1.0, 1.0, // down
     1.0,-1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0, 1.0,-1.0,   1.0, 1.0,-1.0  // back
  ]);

  var colors = new Float32Array([    // Colors (red)
    r, g, b,  r, g, b,  r, g, b,  r, g, b, // front
    r, g, b,  r, g, b,  r, g, b,  r, g, b, // right
    r, g, b,  r, g, b,  r, g, b,  r, g, b, // up
    r, g, b,  r, g, b,  r, g, b,  r, g, b, // left
    r, g, b,  r, g, b,  r, g, b,  r, g, b, // down
    r, g, b,  r, g, b,  r, g, b,  r, g, b  // back
  ]);

  var normals = new Float32Array([    // Normal
    0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,  // front
    1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,  // right
    0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,  // up
   -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  // left
    0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,  // down
    0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0   // back
  ]);

  var indices = new Uint8Array([
    0, 1, 2,   0, 2, 3,  // front
    4, 5, 6,   4, 6, 7,  // right
    8, 9, 10,  8, 10,11, // up
    12,13,14,  12,14,15, // left
    16,17,18,  16,18,19, // down
    20,21,22,  20,22,23  // back
  ]);
  
  return [vertices, colors, normals, indices];
}

// Draw the current shape
drawShape = (gl, program, cameraMatrix, modelMatrix, sx = 1, sy = 1, sz = 1) => {
  
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
  gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
}