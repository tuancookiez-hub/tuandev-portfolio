function gn(A,o){let d=A;Fe(),o={IMMEDIATE:!0,TRIGGER:"hover",AUTO:!1,INTERVAL:3e3,SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_COUNT:Number.parseInt(Math.random()*20)+5,SPLAT_COLOR:void 0,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1,...o};function ae(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=Re()}let P=[],D=[],S=[];P.push(new ae);let{gl:e,ext:g}=b(d);U()&&(o.DYE_RESOLUTION=512),g.supportLinearFiltering||(o.DYE_RESOLUTION=512,o.SHADING=!1,o.BLOOM=!1,o.SUNRAYS=!1);function b(n){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},r=n.getContext("webgl2",t),i=!!r;i||(r=n.getContext("webgl",t)||n.getContext("experimental-webgl",t));let a,f;i?(r.getExtension("EXT_color_buffer_float"),f=r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),f=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);let u=i?r.HALF_FLOAT:a.HALF_FLOAT_OES,s,c,z;return i?(s=L(r,r.RGBA16F,r.RGBA,u),c=L(r,r.RG16F,r.RG,u),z=L(r,r.R16F,r.RED,u)):(s=L(r,r.RGBA,r.RGBA,u),c=L(r,r.RGBA,r.RGBA,u),z=L(r,r.RGBA,r.RGBA,u)),{gl:r,ext:{formatRGBA:s,formatRG:c,formatR:z,halfFloatTexType:u,supportLinearFiltering:f}}}function L(n,t,r,i){if(!Y(n,t,r,i))switch(t){case n.R16F:return L(n,n.RG16F,n.RG,i);case n.RG16F:return L(n,n.RGBA16F,n.RGBA,i);default:return null}return{internalFormat:t,format:r}}function Y(n,t,r,i){let a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,t,4,4,0,r,i,null);let f=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,f),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0),n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE}function U(){return/Mobi|Android/i.test(navigator.userAgent)}class B{constructor(t,r){this.vertexShader=t,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(t){let r=0;for(let a=0;a<t.length;a++)r+=dn(t[a]);let i=this.programs[r];if(!i){let a=m(e.FRAGMENT_SHADER,this.fragmentShaderSource,t);i=G(this.vertexShader,a),this.programs[r]=i}i!==this.activeProgram&&(this.uniforms=H(i),this.activeProgram=i)}bind(){e.useProgram(this.activeProgram)}}class v{constructor(t,r){this.uniforms={},this.program=G(t,r),this.uniforms=H(this.program)}bind(){e.useProgram(this.program)}}function G(n,t){let r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,t),e.linkProgram(r),x)return w.push([r,!0]),r;if(!e.getProgramParameter(r,e.LINK_STATUS))throw e.getProgramInfoLog(r);return r}function H(n){let t=[],r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let a=e.getActiveUniform(n,i).name;t[a]=e.getUniformLocation(n,a)}return t}function m(n,t,r){t=q(t,r);let i=e.createShader(n);if(e.shaderSource(i,t),e.compileShader(i),x)return w.push([i,!1]),i;if(!e.getShaderParameter(i,e.COMPILE_STATUS))throw e.getShaderInfoLog(i);return i}function q(n,t){if(!t)return n;let r="";return t.forEach(i=>{r+=`#define ${i}
`}),r+n}let x=e.getExtension("KHR_parallel_shader_compile"),w=[],h=m(e.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),ue=m(e.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),le=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),$=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),j=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),R=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`),y=m(e.FRAGMENT_SHADER,o.TRANSPARENT?`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
`:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),p=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),F=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),C=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),Q=m(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),Ce=m(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;
    #define ITERATIONS 16
    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;
        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;
        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;
        float color = texture2D(uTexture, vUv).a;
        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }
        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),ze=m(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),Ge=m(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,g.supportLinearFiltering?null:["MANUAL_FILTERING"]),Xe=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),Ye=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),He=m(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`),Ve=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),We=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),T=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),n=>{e.bindFramebuffer(e.FRAMEBUFFER,n),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}),E,l,fe,ce,N,se,Z,pe,Se=$e(),V=new v(ue,le),De=new v(h,$),ve=new v(h,j),Ae=new v(h,R),_e=new v(h,y),J=new v(h,p),W=new v(h,F),ee=new v(h,C),Le=new v(h,Q),me=new v(h,Ce),I=new v(h,ze),_=new v(h,Ge),Te=new v(h,Xe),he=new v(h,Ye),X=new v(h,He),ne=new v(h,Ve),re=new v(h,We),M=new B(h,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif
    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif
    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif
    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`);function Ue(){let n=ie(o.SIM_RESOLUTION),t=ie(o.DYE_RESOLUTION),r=g.halfFloatTexType,i=g.formatRGBA,a=g.formatRG,f=g.formatR,u=g.supportLinearFiltering?e.LINEAR:e.NEAREST;E=E?ye(E,t.width,t.height,i.internalFormat,i.format,r,u):Ee(t.width,t.height,i.internalFormat,i.format,r,u),l=l?ye(l,n.width,n.height,a.internalFormat,a.format,r,u):Ee(n.width,n.height,a.internalFormat,a.format,r,u),fe=O(n.width,n.height,f.internalFormat,f.format,r,e.NEAREST),ce=O(n.width,n.height,f.internalFormat,f.format,r,e.NEAREST),N=Ee(n.width,n.height,f.internalFormat,f.format,r,e.NEAREST),ke(),Ke()}function ke(){let n=ie(o.BLOOM_RESOLUTION),t=g.halfFloatTexType,r=g.formatRGBA,i=g.supportLinearFiltering?e.LINEAR:e.NEAREST;se=O(n.width,n.height,r.internalFormat,r.format,t,i),S.length=0;for(let a=0;a<o.BLOOM_ITERATIONS;a++){let f=n.width>>a+1,u=n.height>>a+1;if(f<2||u<2)break;let s=O(f,u,r.internalFormat,r.format,t,i);S.push(s)}}function Ke(){let n=ie(o.SUNRAYS_RESOLUTION),t=g.halfFloatTexType,r=g.formatR,i=g.supportLinearFiltering?e.LINEAR:e.NEAREST;Z=O(n.width,n.height,r.internalFormat,r.format,t,i),pe=O(n.width,n.height,r.internalFormat,r.format,t,i)}function O(n,t,r,i,a,f){e.activeTexture(e.TEXTURE0);let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,n,t,0,i,a,null);let s=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.viewport(0,0,n,t),e.clear(e.COLOR_BUFFER_BIT),{texture:u,fbo:s,width:n,height:t,texelSizeX:1/n,texelSizeY:1/t,attach(c){return e.activeTexture(e.TEXTURE0+c),e.bindTexture(e.TEXTURE_2D,u),c}}}function Ee(n,t,r,i,a,f){let u=O(n,t,r,i,a,f),s=O(n,t,r,i,a,f);return{width:n,height:t,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(c){u=c},get write(){return s},set write(c){s=c},swap(){let c=u;u=s,s=c}}}function qe(n,t,r,i,a,f,u){let s=O(t,r,i,a,f,u);return De.bind(),e.uniform1i(De.uniforms.uTexture,n.attach(0)),T(s.fbo),s}function ye(n,t,r,i,a,f,u){return n.width===t&&n.height===r||(n.read=qe(n.read,t,r,i,a,f,u),n.write=O(t,r,i,a,f,u),n.width=t,n.height=r,n.texelSizeX=1/t,n.texelSizeY=1/r),n}function $e(n){let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:t,width:1,height:1,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,t),a}},i=new Image;return i.onload=()=>{r.width=i.width,r.height=i.height,e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,i)},r}function je(){let n=[];o.SHADING&&n.push("SHADING"),o.BLOOM&&n.push("BLOOM"),o.SUNRAYS&&n.push("SUNRAYS"),M.setKeywords(n)}let Oe=!1;function be(){Oe=!0,je(),Ue(),o.IMMEDIATE&&Ne(o.SPLAT_COUNT)}function Qe(){if(!x)return!0;for(let n=0;n<w.length;n++){let[t,r]=w[n];if(!(r?e.getProgramParameter(t,x.COMPLETION_STATUS_KHR):e.getShaderParameter(t,x.COMPLETION_STATUS_KHR)))return!1}for(let[n,t]of w)(t?!e.getProgramParameter(n,e.LINK_STATUS):!e.getShaderParameter(n,e.COMPILE_STATUS))&&console.error("fluid shader:",t?e.getProgramInfoLog(n):e.getShaderInfoLog(n));return w=[],!0}x||be();function we(){k||(o.AUTO&&o.INTERVAL&&!o.PAUSED&&D.push(o.SPLAT_COUNT),setTimeout(we,o.INTERVAL))}setTimeout(we,o.INTERVAL);let de=Date.now(),te=0,k=!1;K();function K(){if(k)return;if(!Qe()){requestAnimationFrame(K);return}if(!Oe){be(),requestAnimationFrame(K);return}let n=Ze();(!o.FRAME||o.FRAME(n)!==!1)&&(Fe()&&Ue(),Je(n),en(),o.PAUSED||nn(n),rn()),requestAnimationFrame(K)}function Ze(){let n=Date.now(),t=(n-de)/1e3;return t=Math.min(t,.016666),de=n,t}function Fe(){let n=Ie(d.clientWidth),t=Ie(d.clientHeight);return d.width!==n||d.height!==t?(d.width=n,d.height=t,!0):!1}function Je(n){o.COLORFUL&&(te+=n*o.COLOR_UPDATE_SPEED,te>=1&&(te=hn(te,0,1),P.forEach(t=>{t.color=Re()})))}function en(){D.length>0&&Ne(D.pop()),P.forEach(n=>{n.moved&&(n.moved=!1,cn(n))})}function nn(n){e.disable(e.BLEND),e.viewport(0,0,l.width,l.height),he.bind(),e.uniform2f(he.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(he.uniforms.uVelocity,l.read.attach(0)),T(ce.fbo),X.bind(),e.uniform2f(X.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(X.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(X.uniforms.uCurl,ce.attach(1)),e.uniform1f(X.uniforms.curl,o.CURL),e.uniform1f(X.uniforms.dt,n),T(l.write.fbo),l.swap(),Te.bind(),e.uniform2f(Te.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(Te.uniforms.uVelocity,l.read.attach(0)),T(fe.fbo),ve.bind(),e.uniform1i(ve.uniforms.uTexture,N.read.attach(0)),e.uniform1f(ve.uniforms.value,o.PRESSURE),T(N.write.fbo),N.swap(),ne.bind(),e.uniform2f(ne.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(ne.uniforms.uDivergence,fe.attach(0));for(let r=0;r<o.PRESSURE_ITERATIONS;r++)e.uniform1i(ne.uniforms.uPressure,N.read.attach(1)),T(N.write.fbo),N.swap();re.bind(),e.uniform2f(re.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(re.uniforms.uPressure,N.read.attach(0)),e.uniform1i(re.uniforms.uVelocity,l.read.attach(1)),T(l.write.fbo),l.swap(),_.bind(),e.uniform2f(_.uniforms.texelSize,l.texelSizeX,l.texelSizeY),g.supportLinearFiltering||e.uniform2f(_.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);let t=l.read.attach(0);e.uniform1i(_.uniforms.uVelocity,t),e.uniform1i(_.uniforms.uSource,t),e.uniform1f(_.uniforms.dt,n),e.uniform1f(_.uniforms.dissipation,o.VELOCITY_DISSIPATION),T(l.write.fbo),l.swap(),e.viewport(0,0,E.width,E.height),g.supportLinearFiltering||e.uniform2f(_.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),e.uniform1i(_.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(_.uniforms.uSource,E.read.attach(1)),e.uniform1f(_.uniforms.dissipation,o.DENSITY_DISSIPATION),T(E.write.fbo),E.swap()}function rn(n){o.BLOOM&&un(E.read,se),o.SUNRAYS&&(ln(E.read,E.write,Z),fn(Z,pe,1)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND);let t=e.drawingBufferWidth,r=e.drawingBufferHeight;e.viewport(0,0,t,r);let i=null;o.TRANSPARENT||tn(i,Tn(o.BACK_COLOR)),o.TRANSPARENT&&on(i),an(i,t,r)}function tn(n,t){Ae.bind(),e.uniform4f(Ae.uniforms.color,t.r,t.g,t.b,1),T(n)}function on(n){_e.bind(),e.uniform1f(_e.uniforms.aspectRatio,d.width/d.height),T(n)}function an(n,t,r){if(M.bind(),o.SHADING&&e.uniform2f(M.uniforms.texelSize,1/t,1/r),e.uniform1i(M.uniforms.uTexture,E.read.attach(0)),o.BLOOM){e.uniform1i(M.uniforms.uBloom,se.attach(1)),e.uniform1i(M.uniforms.uDithering,Se.attach(2));let i=En(Se,t,r);e.uniform2f(M.uniforms.ditherScale,i.x,i.y)}o.SUNRAYS&&e.uniform1i(M.uniforms.uSunrays,Z.attach(3)),T(n)}function un(n,t){if(S.length<2)return;let r=t;e.disable(e.BLEND),J.bind();let i=o.BLOOM_THRESHOLD*o.BLOOM_SOFT_KNEE+1e-4,a=o.BLOOM_THRESHOLD-i,f=i*2,u=.25/i;e.uniform3f(J.uniforms.curve,a,f,u),e.uniform1f(J.uniforms.threshold,o.BLOOM_THRESHOLD),e.uniform1i(J.uniforms.uTexture,n.attach(0)),e.viewport(0,0,r.width,r.height),T(r.fbo),W.bind();for(let s=0;s<S.length;s++){let c=S[s];e.uniform2f(W.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(W.uniforms.uTexture,r.attach(0)),e.viewport(0,0,c.width,c.height),T(c.fbo),r=c}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let s=S.length-2;s>=0;s--){let c=S[s];e.uniform2f(W.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(W.uniforms.uTexture,r.attach(0)),e.viewport(0,0,c.width,c.height),T(c.fbo),r=c}e.disable(e.BLEND),ee.bind(),e.uniform2f(ee.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(ee.uniforms.uTexture,r.attach(0)),e.uniform1f(ee.uniforms.intensity,o.BLOOM_INTENSITY),e.viewport(0,0,t.width,t.height),T(t.fbo)}function ln(n,t,r){e.disable(e.BLEND),Le.bind(),e.uniform1i(Le.uniforms.uTexture,n.attach(0)),e.viewport(0,0,t.width,t.height),T(t.fbo),me.bind(),e.uniform1f(me.uniforms.weight,o.SUNRAYS_WEIGHT),e.uniform1i(me.uniforms.uTexture,t.attach(0)),e.viewport(0,0,r.width,r.height),T(r.fbo)}function fn(n,t,r){V.bind();for(let i=0;i<r;i++)e.uniform2f(V.uniforms.texelSize,n.texelSizeX,0),e.uniform1i(V.uniforms.uTexture,n.attach(0)),T(t.fbo),e.uniform2f(V.uniforms.texelSize,0,n.texelSizeY),e.uniform1i(V.uniforms.uTexture,t.attach(0)),T(n.fbo)}function cn(n){let t=n.deltaX*o.SPLAT_FORCE,r=n.deltaY*o.SPLAT_FORCE;ge(n.texcoordX,n.texcoordY,t,r,n.color)}function Ne(n){for(let t=0;t<n;t++){let r=Re();o.SPLAT_COLOR||(r.r*=10,r.g*=10,r.b*=10),ge(Math.random(),Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),r)}}function ge(n,t,r,i,a){e.viewport(0,0,l.width,l.height),I.bind(),e.uniform1i(I.uniforms.uTarget,l.read.attach(0)),e.uniform1f(I.uniforms.aspectRatio,d.width/d.height),e.uniform2f(I.uniforms.point,n,t),e.uniform3f(I.uniforms.color,r,i,0),e.uniform1f(I.uniforms.radius,sn(o.SPLAT_RADIUS/100)),T(l.write.fbo),l.swap(),e.viewport(0,0,E.width,E.height),e.uniform1i(I.uniforms.uTarget,E.read.attach(0)),e.uniform3f(I.uniforms.color,a.r,a.g,a.b),T(E.write.fbo),E.swap()}function sn(n){let t=d.width/d.height;return t>1&&(n*=t),n}function vn(){let n=mn(Math.random(),1,1);return n.r*=.15,n.g*=.15,n.b*=.15,n}function Re(){let n=o.SPLAT_COLOR||vn();return{r:n.r,g:n.g,b:n.b}}function mn(n,t,r){let i,a,f,u=Math.floor(n*6),s=n*6-u,c=r*(1-t),z=r*(1-s*t),xe=r*(1-(1-s)*t);switch(u%6){case 0:i=r,a=xe,f=c;break;case 1:i=z,a=r,f=c;break;case 2:i=c,a=r,f=xe;break;case 3:i=c,a=z,f=r;break;case 4:i=xe,a=c,f=r;break;case 5:i=r,a=c,f=z;break}return{r:i,g:a,b:f}}function Tn(n){return{r:n.r/255,g:n.g/255,b:n.b/255}}function hn(n,t,r){let i=r-t;return i===0?t:(n-t)%i+t}function ie(n){let t=e.drawingBufferWidth/e.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(n),i=Math.round(n*t);return e.drawingBufferWidth>e.drawingBufferHeight?{width:i,height:r}:{width:r,height:i}}function En(n,t,r){return{x:t/n.width,y:r/n.height}}function Ie(n){let t=Math.min(window.devicePixelRatio||1,o.MAX_DPR||8);return Math.floor(n*t)}return{splat:ge,stop(){k=!0},resume(){k&&(k=!1,de=Date.now(),K())}};function dn(n){if(n.length===0)return 0;let t=0;for(let r=0;r<n.length;r++)t=(t<<5)-t+n.charCodeAt(r),t|=0;return t}}const Me=[{r:.02,g:.2,b:.56},{r:.06,g:.3,b:.62},{r:.12,g:.34,b:.56}],oe=A=>{const o=Me[Math.floor(Math.random()*Me.length)];return{r:o.r*A,g:o.g*A,b:o.b*A}},Pe=5200,Rn=1700,xn=2600,Be={fine:30,coarse:48};function pn(A){const o=window.matchMedia("(prefers-reduced-motion: reduce)");let d=()=>{};const ae=()=>{const D=document.createElement("canvas");A.appendChild(D);const S=window.matchMedia("(pointer: coarse)").matches,e=A.closest(".desk-page"),g=document.documentElement;let b=D.getBoundingClientRect();const L=()=>{b=D.getBoundingClientRect()},Y=new ResizeObserver(L);Y.observe(A);let U=null,B=null,v=null,G=0;const H=R=>({x:(R.clientX-b.left)/Math.max(1,b.width),y:1-(R.clientY-b.top)/Math.max(1,b.height)}),m=R=>{U=H(R),G=performance.now()},q=R=>{v=H(R),B=v,G=performance.now()};let x=null,w=0,h=0;const ue=S?Be.coarse:Be.fine,le=()=>{const R=x;if(!R)return!0;if(g.dataset.windowMotion)return!1;const y=performance.now();if(v){const p=Math.random()*Math.PI*2;R.splat(v.x,v.y,Math.cos(p)*320,Math.sin(p)*320,oe(.4)),v=null}if(U){if(B){let p=U.x-B.x,F=U.y-B.y;const C=b.width/Math.max(1,b.height);C<1?p*=C:F/=C,(p!==0||F!==0)&&R.splat(U.x,U.y,p*Pe,F*Pe,oe(.15))}B=U,U=null}if(y-w>Rn){w=y;const p=y*21e-5,F=.5+.38*Math.sin(p*1.3),C=.5+.34*Math.sin(p*.9+1.7),Q=p*2.4;R.splat(F,C,Math.cos(Q)*240,Math.sin(Q)*240,oe(.34))}return y-G>xn&&y-h<ue?!1:(h=y,!0)};try{x=gn(D,{IMMEDIATE:!1,AUTO:!1,TRANSPARENT:!0,BLOOM:!1,SUNRAYS:!1,SHADING:!0,COLORFUL:!1,SIM_RESOLUTION:S?64:96,DYE_RESOLUTION:S?256:512,PRESSURE_ITERATIONS:S?8:14,DENSITY_DISSIPATION:.55,VELOCITY_DISSIPATION:.35,CURL:14,SPLAT_RADIUS:S?.5:.36,MAX_DPR:1,FRAME:le})}catch{return Y.disconnect(),D.remove(),()=>{}}for(const[R,y,p,F]of[[.78,.72,-260,-120],[.6,.3,180,200],[.86,.22,-140,260],[.3,.62,220,-90]])x.splat(R,y,p,F,oe(.42));const $=()=>{!e||!x||(e.dataset.fitted==="true"&&e.dataset.deskClear==="false"?x.stop():x.resume())},j=new MutationObserver($);return e&&j.observe(e,{attributes:!0,attributeFilter:["data-fitted","data-desk-clear"]}),$(),window.addEventListener("pointermove",m,{passive:!0}),window.addEventListener("pointerdown",q,{passive:!0}),()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerdown",q),Y.disconnect(),j.disconnect(),x?.stop(),(D.getContext("webgl2")??D.getContext("webgl"))?.getExtension("WEBGL_lose_context")?.loseContext(),D.remove()}},P=()=>{d(),d=o.matches?()=>{}:ae(),A.dataset.shader="ready"};return P(),o.addEventListener("change",P),()=>{o.removeEventListener("change",P),d(),delete A.dataset.shader}}export{pn as mountFluidWallpaper};
