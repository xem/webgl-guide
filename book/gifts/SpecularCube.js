var canvas = document.getElementById('webgl');
var gl = getWebGLContext(canvas);

deg2rad = angle => Math.PI * angle / 180;

var VSHADER_SOURCE = `
precision mediump float;
uniform mat4 perspective;
uniform mat4 camera;
attribute vec4 position;
attribute vec4 color;
attribute vec3 normal;
varying vec4 v_position;
varying vec3 v_normal;
varying vec4 v_color;
void main() {
  v_position =  camera * position;
  gl_Position = perspective * v_position;
  v_normal = normalize( mat3(camera) * normal);
  v_color = color;
}`;

var FSHADER_SOURCE = `
precision mediump float;
uniform mat4 camera;
uniform vec3 lightposition;
varying vec4 v_position;
varying vec3 v_normal;
varying vec4 v_color;
void main() {
  vec3 normal = normalize(v_normal);
  vec3 lightPosition = vec3(camera * vec4(lightposition, 1) - v_position);
  vec3 lightDir = normalize(lightPosition);
  float lightDist = length(lightPosition);
  float specular = 0.0;
  float d = max(dot(v_normal, lightDir), 0.0);
  if (d > 0.0) {
    vec3 viewVec = vec3(0,0,1.0);
    vec3 reflectVec = reflect(-lightDir, normal);
    specular = pow(max(dot(reflectVec, viewVec), 0.0), 120.0);
  }
  gl_FragColor.rgb = vec3(0.1,0.1,0.1) + vec3(0.4, 0.4, 0.4) * d + specular;
  gl_FragColor.a = 1.0;
}`;

initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)
var perspectiveMatrixShaderLocation = gl.getUniformLocation(gl.program, 'perspective');
var viewMatrixShaderLocation = gl.getUniformLocation(gl.program, 'camera');
var lightPositionShaderLocation = gl.getUniformLocation(gl.program, 'lightposition');
gl.enable(gl.DEPTH_TEST);
gl.clearColor(0, 0, 0, 1);
var cubeVertices, cubeNormals, indices;
[cubeVertices, cubeNormals, indices] = cube();
g_vertexPositionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, g_vertexPositionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
g_vertexNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, g_vertexNormalBuffer);
gl.bufferData(gl.ARRAY_BUFFER, cubeNormals, gl.STATIC_DRAW);
g_vertexIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g_vertexIndexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

var g_perspectiveMatrix = perspective({fov: deg2rad(30), ratio: 1, near: 1, far: 100});
gl.uniformMatrix4fv(perspectiveMatrixShaderLocation, false, g_perspectiveMatrix);

var g_viewMatrix = identity();
g_viewMatrix = transform(g_viewMatrix, {z: -5, ry: -.3});
gl.uniformMatrix4fv(viewMatrixShaderLocation, false, g_viewMatrix);

var color = gl.getAttribLocation(gl.program, 'color');
gl.vertexAttrib3f(color, 1, 0, 0);

var lightPosition = new Float32Array([0, 0, 2]);
gl.uniform3fv(lightPositionShaderLocation, lightPosition);
gl.bindBuffer(gl.ARRAY_BUFFER, g_vertexPositionBuffer);

var position = gl.getAttribLocation(gl.program, 'position');
gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(position);
gl.bindBuffer(gl.ARRAY_BUFFER, g_vertexNormalBuffer);

var normal = gl.getAttribLocation(gl.program, 'normal');
gl.vertexAttribPointer(normal, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(normal);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g_vertexIndexBuffer);
gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0); 