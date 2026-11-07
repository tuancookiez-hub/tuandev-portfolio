const C=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,I=`#version 300 es
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
}`;function L(o,t,e){const n=o.createShader(t);return n?(o.shaderSource(n,e),o.compileShader(n),o.getShaderParameter(n,o.COMPILE_STATUS)?n:(o.deleteShader(n),null)):null}function q(o){let t=null;try{t=document.createElement("canvas"),t.setAttribute("aria-hidden","true"),t.style.width="100%",t.style.height="100%",t.style.display="block";const e=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!e)return()=>{};const n=L(e,e.VERTEX_SHADER,C),s=L(e,e.FRAGMENT_SHADER,I);if(!n||!s)return n&&e.deleteShader(n),s&&e.deleteShader(s),()=>{};const i=e.createProgram();if(!i)return()=>{};if(e.attachShader(i,n),e.attachShader(i,s),e.linkProgram(i),e.deleteShader(n),e.deleteShader(s),!e.getProgramParameter(i,e.LINK_STATUS))return e.deleteProgram(i),()=>{};const h=e.createVertexArray(),P=e.getUniformLocation(i,"uTime"),T=e.getUniformLocation(i,"uAspect"),U=e.getUniformLocation(i,"uMouse");o.appendChild(t);let w=8,m=0,v=!1,b=1,f=0,d=0,y=0;const a={x:0,y:0},c={x:0,y:0},_=100,D=24,A=()=>Math.min(window.devicePixelRatio||1,1.5),p=r=>{c.x=r.clientX/window.innerWidth*2-1,c.y=1-r.clientY/window.innerHeight*2,y=performance.now()},x=()=>{v||(e.useProgram(i),e.bindVertexArray(h),e.uniform1f(P,w),e.uniform1f(T,b),e.uniform2f(U,a.x,a.y),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null))},S=()=>{if(v)return;b=Math.max(1,o.clientWidth/Math.max(1,o.clientHeight));const r=Math.max(1,Math.round(o.clientWidth*A())),l=Math.max(1,Math.round(o.clientHeight*A()));t&&(t.width!==r||t.height!==l)&&(t.width=r,t.height=l,e.viewport(0,0,r,l)),x()},E=r=>{if(m=requestAnimationFrame(E),document.hidden){d=r;return}const l=.14;a.x+=(c.x-a.x)*l,a.y+=(c.y-a.y)*l;const V=r-y<320?D:_;r-f<V||(d&&(w+=Math.min((r-d)/1e3,.12)),d=r,f=r,!document.querySelector(".os-window-ghost")&&x())},g=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>{if(cancelAnimationFrame(m),m=0,d=0,f=0,window.removeEventListener("pointermove",p),!v){if(g.matches||document.hidden){a.x=0,a.y=0,c.x=0,c.y=0,x();return}window.addEventListener("pointermove",p,{passive:!0}),m=requestAnimationFrame(E)}},M=new ResizeObserver(S);return M.observe(o),S(),u(),document.addEventListener("visibilitychange",u),g.addEventListener("change",u),o.dataset.shader="ready",()=>{v=!0,cancelAnimationFrame(m),window.removeEventListener("pointermove",p),M.disconnect(),document.removeEventListener("visibilitychange",u),g.removeEventListener("change",u),h&&e.deleteVertexArray(h),e.deleteProgram(i),e.getExtension("WEBGL_lose_context")?.loseContext(),t?.remove(),delete o.dataset.shader}}catch{return t?.remove(),()=>{}}}export{q as mountShaderWallpaper};
