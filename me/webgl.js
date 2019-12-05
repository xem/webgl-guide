compile = (gl, vshader, fshader) => {
  var vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vshader);
  gl.compileShader(vs);

  var fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fshader);
  gl.compileShader(fs);

  var program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.useProgram(program);

  console.log('vertex shader:', gl.getShaderInfoLog(vs) || 'OK');
  console.log('fragment shader:', gl.getShaderInfoLog(fs) || 'OK');
  console.log('program:', gl.getProgramInfoLog(program) || 'OK');
  
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  
  return program;
}