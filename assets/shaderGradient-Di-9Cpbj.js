const q=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,H=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform float uTime;
uniform float uAspect;
uniform vec2 uMouse;

float bloom(vec2 p, vec2 c, float r) {
  vec2 d = (p - c) * vec2(uAspect, 1.0);
  return exp(-dot(d, d) / (r * r));
}

void main() {
  vec2 p = vUv - 0.5;
  float t = uTime * 0.06;
  // Smoothed pointer in p-space. Different parallax weights per bloom give a
  // subtle depth cue while staying a flat 2D field.
  vec2 m = uMouse * vec2(0.42, 0.30);
  float a = bloom(p, vec2(-0.34 + 0.10 * sin(t * 0.7) + m.x * 0.85, 0.22 + 0.06 * cos(t * 0.5) + m.y * 0.85), 0.55);
  float b = bloom(p, vec2( 0.36 + 0.09 * cos(t * 0.6) + m.x * 0.55, -0.20 + 0.07 * sin(t * 0.8) + m.y * 0.55), 0.62);
  float c = bloom(p, vec2( 0.10 + 0.14 * sin(t * 0.4) + m.x * 1.10, 0.34 + 0.05 * cos(t * 0.9) + m.y * 1.10), 0.40);
  float d = bloom(p, vec2(-0.42 + 0.08 * cos(t * 0.5) + m.x * 0.35, -0.34 + 0.06 * sin(t * 0.6) + m.y * 0.35), 0.34);

  vec3 white  = vec3(0.976, 0.988, 1.000);
  vec3 pale   = vec3(0.815, 0.902, 0.996);
  vec3 blue   = vec3(0.522, 0.741, 0.980);
  vec3 cobalt = vec3(0.031, 0.384, 0.929);

  vec3 col = white;
  col = mix(col, pale, clamp(a * 0.72 + b * 0.62 + d * 0.44, 0.0, 1.0));
  col = mix(col, blue, clamp(b * 0.34 + c * 0.30 + d * 0.20, 0.0, 1.0) * 0.55);
  col = mix(col, cobalt, clamp(c * 0.20 + a * 0.10, 0.0, 1.0) * 0.22);
  // A soft blue glow that follows the cursor — visible on the white base.
  vec2 q = (p - m) * vec2(uAspect, 1.0);
  float halo = exp(-dot(q, q) / 0.30);
  col = mix(col, blue, halo * 0.30);
  col = mix(col, cobalt, halo * halo * 0.08);
  col = mix(col, white, clamp(vUv.y * 0.30 + (1.0 - vUv.x) * 0.16, 0.0, 0.42));
  outColor = vec4(col, 1.0);
}`;function T(n,t,e){const r=n.createShader(t);return r?(n.shaderSource(r,e),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(n.deleteShader(r),null)):null}function W(n){let t=null;try{t=document.createElement("canvas"),t.setAttribute("aria-hidden","true"),t.style.width="100%",t.style.height="100%",t.style.display="block";const e=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!e)return()=>{};const r=T(e,e.VERTEX_SHADER,q),d=T(e,e.FRAGMENT_SHADER,H);if(!r||!d)return r&&e.deleteShader(r),d&&e.deleteShader(d),()=>{};const i=e.createProgram();if(!i)return()=>{};if(e.attachShader(i,r),e.attachShader(i,d),e.linkProgram(i),e.deleteShader(r),e.deleteShader(d),!e.getProgramParameter(i,e.LINK_STATUS))return e.deleteProgram(i),()=>{};const f=e.createVertexArray(),P=e.getUniformLocation(i,"uTime"),_=e.getUniformLocation(i,"uAspect"),U=e.getUniformLocation(i,"uMouse");n.appendChild(t);let b=8,m=0,h=!1,y=1,p=0,v=0,w=0;const a={x:0,y:0},c={x:0,y:0},D=100,I=24,R=50,V=window.matchMedia("(pointer: coarse)").matches,A=()=>Math.min(window.devicePixelRatio||1,1.5),l=o=>{c.x=o.clientX/window.innerWidth*2-1,c.y=1-o.clientY/window.innerHeight*2,w=performance.now()},x=()=>{h||(e.useProgram(i),e.bindVertexArray(f),e.uniform1f(P,b),e.uniform1f(_,y),e.uniform2f(U,a.x,a.y),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null))},E=()=>{if(h)return;y=Math.max(1,n.clientWidth/Math.max(1,n.clientHeight));const o=Math.max(1,Math.round(n.clientWidth*A())),s=Math.max(1,Math.round(n.clientHeight*A()));t&&(t.width!==o||t.height!==s)&&(t.width=o,t.height=s,e.viewport(0,0,o,s)),x()},S=o=>{if(m=requestAnimationFrame(S),document.hidden){v=o;return}const s=.14;a.x+=(c.x-a.x)*s,a.y+=(c.y-a.y)*s;const C=o-w<320,L=V&&o-w>1400;L&&(c.x=.6*Math.sin(o*31e-5),c.y=.5*Math.sin(o*23e-5+1.3));const F=C?I:L?R:D;o-p<F||(v&&(b+=Math.min((o-v)/1e3,.12)),v=o,p=o,!document.documentElement.dataset.windowMotion&&x())},g=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>{if(cancelAnimationFrame(m),m=0,v=0,p=0,window.removeEventListener("pointermove",l),window.removeEventListener("pointerdown",l),!h){if(g.matches||document.hidden){a.x=0,a.y=0,c.x=0,c.y=0,x();return}window.addEventListener("pointermove",l,{passive:!0}),window.addEventListener("pointerdown",l,{passive:!0}),m=requestAnimationFrame(S)}},M=new ResizeObserver(E);return M.observe(n),E(),u(),document.addEventListener("visibilitychange",u),g.addEventListener("change",u),n.dataset.shader="ready",()=>{h=!0,cancelAnimationFrame(m),window.removeEventListener("pointermove",l),window.removeEventListener("pointerdown",l),M.disconnect(),document.removeEventListener("visibilitychange",u),g.removeEventListener("change",u),f&&e.deleteVertexArray(f),e.deleteProgram(i),e.getExtension("WEBGL_lose_context")?.loseContext(),t?.remove(),delete n.dataset.shader}}catch{return t?.remove(),()=>{}}}export{W as mountShaderWallpaper};
