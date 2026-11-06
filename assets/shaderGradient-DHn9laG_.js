const y=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,E=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform float uTime;
uniform float uAspect;

float bloom(vec2 p, vec2 c, float r) {
  vec2 d = (p - c) * vec2(uAspect, 1.0);
  return exp(-dot(d, d) / (r * r));
}

void main() {
  vec2 p = vUv - 0.5;
  float t = uTime * 0.06;
  float a = bloom(p, vec2(-0.34 + 0.10 * sin(t * 0.7), 0.22 + 0.06 * cos(t * 0.5)), 0.55);
  float b = bloom(p, vec2( 0.36 + 0.09 * cos(t * 0.6), -0.20 + 0.07 * sin(t * 0.8)), 0.62);
  float c = bloom(p, vec2( 0.10 + 0.14 * sin(t * 0.4), 0.34 + 0.05 * cos(t * 0.9)), 0.40);
  float d = bloom(p, vec2(-0.42 + 0.08 * cos(t * 0.5), -0.34 + 0.06 * sin(t * 0.6)), 0.34);

  vec3 white  = vec3(0.976, 0.988, 1.000);
  vec3 pale   = vec3(0.815, 0.902, 0.996);
  vec3 blue   = vec3(0.522, 0.741, 0.980);
  vec3 cobalt = vec3(0.031, 0.384, 0.929);

  vec3 col = white;
  col = mix(col, pale, clamp(a * 0.72 + b * 0.62 + d * 0.44, 0.0, 1.0));
  col = mix(col, blue, clamp(b * 0.34 + c * 0.30 + d * 0.20, 0.0, 1.0) * 0.55);
  col = mix(col, cobalt, clamp(c * 0.20 + a * 0.10, 0.0, 1.0) * 0.22);
  col = mix(col, white, clamp(vUv.y * 0.30 + (1.0 - vUv.x) * 0.16, 0.0, 0.42));
  outColor = vec4(col, 1.0);
}`;function A(r,t,e){const a=r.createShader(t);return a?(r.shaderSource(a,e),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(r.deleteShader(a),null)):null}function P(r){let t=null;try{t=document.createElement("canvas"),t.setAttribute("aria-hidden","true"),t.style.width="100%",t.style.height="100%",t.style.display="block";const e=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!e)return()=>{};const a=A(e,e.VERTEX_SHADER,y),i=A(e,e.FRAGMENT_SHADER,E);if(!a||!i)return a&&e.deleteShader(a),i&&e.deleteShader(i),()=>{};const o=e.createProgram();if(!o)return()=>{};if(e.attachShader(o,a),e.attachShader(o,i),e.linkProgram(o),e.deleteShader(a),e.deleteShader(i),!e.getProgramParameter(o,e.LINK_STATUS))return e.deleteProgram(o),()=>{};const m=e.createVertexArray(),S=e.getUniformLocation(o,"uTime"),w=e.getUniformLocation(o,"uAspect");r.appendChild(t);let f=0,n=0,l=0,s=!1;const p=()=>Math.min(window.devicePixelRatio||1,1.5),v=()=>{s||(e.useProgram(o),e.bindVertexArray(m),e.uniform1f(S,f),e.uniform1f(w,Math.max(1,r.clientWidth/Math.max(1,r.clientHeight))),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null))},g=()=>{if(s)return;const c=Math.max(1,Math.round(r.clientWidth*p())),h=Math.max(1,Math.round(r.clientHeight*p()));t&&(t.width!==c||t.height!==h)&&(t.width=c,t.height=h,e.viewport(0,0,c,h)),n||v()},x=c=>{if(n=requestAnimationFrame(x),document.hidden){l=c;return}l&&(f+=Math.min((c-l)/1e3,.05)),l=c,v()},u=window.matchMedia("(prefers-reduced-motion: reduce)"),d=()=>{if(cancelAnimationFrame(n),n=0,l=0,!s){if(u.matches||document.hidden){v();return}n=requestAnimationFrame(x)}},b=new ResizeObserver(g);return b.observe(r),g(),d(),document.addEventListener("visibilitychange",d),u.addEventListener("change",d),r.dataset.shader="ready",()=>{s=!0,cancelAnimationFrame(n),b.disconnect(),document.removeEventListener("visibilitychange",d),u.removeEventListener("change",d),m&&e.deleteVertexArray(m),e.deleteProgram(o),e.getExtension("WEBGL_lose_context")?.loseContext(),t?.remove(),delete r.dataset.shader}}catch{return t?.remove(),()=>{}}}export{P as mountShaderWallpaper};
