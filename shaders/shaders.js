const _vert = `
varying vec2 vUv;
void main(){
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}
`
const _frag = `
varying vec2 vUv;
void main(){
    vec3 colA = vec3(1,0,0);
    vec3 colB = vec3(0,0,1);
    gl_FragColor = vec4( vUv,1.0, 1.0 );
}
`