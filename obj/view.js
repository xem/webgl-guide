// Convert deg in radians
deg2rad = angle => Math.PI * angle / 180;

// Vertex shader
var vshader = `
precision mediump float;
attribute vec4 pos;
attribute vec4 col;
attribute vec3 normal;
uniform mat4 camera;
uniform vec3 lightColor;
uniform vec3 lightDirection;
varying vec4 v_col;
varying vec3 v_normal;
varying vec3 v_position;
void main() {
  
  vec4 col = vec4(1.0, 1.0, 1.0, 1.0);

  // Apply the camera matrix to the vertex position
  gl_Position = camera * pos;
  
  // Set varying position for the fragment shader 
  v_position = vec3(pos.xyz);
  
  // Set the face normal
  v_normal = normalize(normal);
  
  // Set the color
  v_col = col;
}`;

// Fragment shader program
var fshader = `
precision mediump float;
uniform vec3 lightColor;
uniform vec3 lightPosition;
uniform vec3 ambientLight;
varying vec3 v_normal;
varying vec3 v_position;
varying vec4 v_col;
void main() {
  
  // Compute direction between the light and the current point
  vec3 lightDirection = normalize(lightPosition - v_position);
  
  // Compute angle between the normal and that direction
  float nDotL = max(dot(lightDirection, v_normal), 0.0);
  
  // Compute diffuse light proportional to this angle
  vec3 diffuse = lightColor * v_col.rgb * nDotL;
  
  // Compute ambient light
  vec3 ambient = ambientLight * v_col.rgb;
  
  // Compute total light (diffuse + ambient)
  gl_FragColor = vec4(diffuse + ambient, 1.0);
}`;

// Compile program
var program = compile(gl, vshader, fshader);

// Create a cube
var vertices = new Float32Array(z[0].groups[0].v);

var normals = new Float32Array(z[0].groups[0].vn);

var n = 36;

// Set position and color
arraybuffer(gl, vertices, program, 'pos', 3, gl.FLOAT);
arraybuffer(gl, normals, program, 'normal', 3, gl.FLOAT);

// Set the clear color and enable the depth test
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.enable(gl.DEPTH_TEST);

// Set the camera
var camera = gl.getUniformLocation(program, 'camera');
var cameraMatrix = perspective({fovy: deg2rad(30), aspect: 1, near: 1, far: 100});
cameraMatrix = transform(cameraMatrix, {z: -5});
gl.uniformMatrix4fv(camera, false, cameraMatrix);

// Set the point light color and position
var lightColor = gl.getUniformLocation(program, 'lightColor');
gl.uniform3f(lightColor, .6, .6, .6);
var lightPosition = gl.getUniformLocation(program, 'lightPosition');
gl.uniform3f(lightPosition, 2.5, 2.5, -2.5);

// Set the ambient light color
var ambientLight = gl.getUniformLocation(program, 'ambientLight');
gl.uniform3f(ambientLight, 0.2, 0.4, 0.2);

// Animate
setInterval(() => {
  cameraMatrix = transform(cameraMatrix, {rx: .0, ry: .015, rz: .0});
  gl.uniformMatrix4fv(camera, false, cameraMatrix);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, z[0].groups[0].v.length);
}, 16);


/*
// Convert deg in radians
deg2rad = angle => Math.PI * angle / 180;

// Vertex shader
var vshader = `
attribute vec4 pos; 
attribute vec4 col;
attribute vec4 normal;
attribute vec2 uv;
uniform mat4 mvp;
uniform mat4 model;            // model matrix
uniform mat4 inverseTranspose; // inversed transposed model matrix
varying vec4 v_col;
varying vec3 v_normal;
varying vec3 v_position;
varying vec2 v_uv;
void main() {

  vec4 col = vec4(0.9, 0.4, 0.4, 1.0);
  
  // Apply the model matrix and the camera matrix to the vertex position
  gl_Position = mvp * pos;
  
  // Set varying position for the fragment shader
  v_position = vec3(model * pos);
  
  // Recompute the face normal
  v_normal = normalize(vec3(inverseTranspose * normal));
  
  // Set the color
  v_col = col;
  
  v_uv = uv;
}`;

// Fragment shader program
var fshader = `
precision mediump float;
uniform vec3 lightColor;
uniform vec3 lightPosition;
uniform vec3 ambientLight;
varying vec3 v_normal;
varying vec3 v_position;
varying vec4 v_col;
uniform sampler2D sampler;
varying vec2 v_uv;
void main() {

  // Compute direction between the light and the current point
  vec3 lightDirection = normalize(lightPosition - v_position);
  
  // Compute angle between the normal and that direction
  float nDotL = max(dot(lightDirection, v_normal), 0.0);
  
  // Compute diffuse light proportional to this angle
  vec3 diffuse = lightColor * v_col.rgb * nDotL;
  
  // Compute ambient light
  vec3 ambient = ambientLight * v_col.rgb;
  
  // Compute total light (diffuse + ambient)
  gl_FragColor = vec4(diffuse + ambient, 1.0);// + texture2D(sampler, v_uv);
  
  //gl_FragColor = ;
}`;

// Compile program
var program = compile(gl, vshader, fshader);

// Texture
var texture = gl.createTexture();
var sampler = gl.getUniformLocation(program, 'sampler');
var image = new Image();
image.onload = function(){

  // Flip the image Y coordinate
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

  // Activate texture unit0
  gl.activeTexture(gl.TEXTURE0);

  // Bind the texture object to the target
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set texture parameters
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  
  // Set the image to texture
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

  // Pass the texure unit 0 to u_Sampler
  gl.uniform1i(sampler, 0);
};
image.src = z[0].groups[0].map_Kd;
document.body.style.background = 'url('+z[0].groups[0].map_Kd+')';

// Initialize data
var vertices = new Float32Array(z[0].groups[0].v);
var normals = new Float32Array(z[0].groups[0].vn);
var normals = new Float32Array(z[0].groups[0].vt);

var n = 36;

// Set position, color, normal buffers
arraybuffer(gl, vertices, program, 'pos', 3, gl.FLOAT);
arraybuffer(gl, normals, program, 'normal', 3, gl.FLOAT);
arraybuffer(gl, normals, program, 'uv', 2, gl.FLOAT);

// Set the clear color and enable the depth test
gl.clearColor(0.8, 0.9, 1, 1);
gl.enable(gl.DEPTH_TEST);

// Set the camera
var cameraMatrix = perspective({fovy: deg2rad(30), aspect: 1, near: 1, far: 100});
cameraMatrix = transform(cameraMatrix, {y: -.3, z: -4, rx: 0, ry: 0, rx: .1});

// Set the point light color and position
var lightColor = gl.getUniformLocation(program, 'lightColor');
gl.uniform3f(lightColor, .5, .5, 1);

var lightPosition = gl.getUniformLocation(program, 'lightPosition');
gl.uniform3f(lightPosition, -2, -2, -3);

// Set the ambient light color
var ambientLight = gl.getUniformLocation(program, 'ambientLight');
gl.uniform3f(ambientLight, 0.5, 0.5, 0.5);

// Get uniforms used in the loop
var model = gl.getUniformLocation(program, 'model');
var mvp = gl.getUniformLocation(program, 'mvp');
var inverseTranspose = gl.getUniformLocation(program, 'inverseTranspose');

var cubeAngle = 0;

// Loop
setInterval(() => {
  
  cubeAngle += .015;
  
  // Set the model matrix
  var modelMatrix = identity();
  modelMatrix = transform(modelMatrix, {ry: cubeAngle});
  gl.uniformMatrix4fv(model, false, modelMatrix);
  
  // Set the cube's mvp matrix (camera x model)
  var mvpMatrix = multMat4Mat4(cameraMatrix, modelMatrix);
  gl.uniformMatrix4fv(mvp, false, mvpMatrix);
  
  // Set the inverse transpose of the model matrix
  var inverseTransposeMatrix = transpose(inverse(modelMatrix));
  gl.uniformMatrix4fv(inverseTranspose, false, inverseTransposeMatrix);

  // Render
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, z[0].groups[0].v.length);
}, 16);*/