function sn(D,o){let g=D;Ue(),o={IMMEDIATE:!0,TRIGGER:"hover",AUTO:!1,INTERVAL:3e3,SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_COUNT:Number.parseInt(Math.random()*20)+5,SPLAT_COLOR:void 0,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1,...o};function re(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=he()}let I=[],p=[],S=[];I.push(new re);let{gl:e,ext:d}=y(g);L()&&(o.DYE_RESOLUTION=512),d.supportLinearFiltering||(o.DYE_RESOLUTION=512,o.SHADING=!1,o.BLOOM=!1,o.SUNRAYS=!1);function y(n){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},r=n.getContext("webgl2",t),i=!!r;i||(r=n.getContext("webgl",t)||n.getContext("experimental-webgl",t));let a,f;i?(r.getExtension("EXT_color_buffer_float"),f=r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),f=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);let u=i?r.HALF_FLOAT:a.HALF_FLOAT_OES,v,c,P;return i?(v=_(r,r.RGBA16F,r.RGBA,u),c=_(r,r.RG16F,r.RG,u),P=_(r,r.R16F,r.RED,u)):(v=_(r,r.RGBA,r.RGBA,u),c=_(r,r.RGBA,r.RGBA,u),P=_(r,r.RGBA,r.RGBA,u)),{gl:r,ext:{formatRGBA:v,formatRG:c,formatR:P,halfFloatTexType:u,supportLinearFiltering:f}}}function _(n,t,r,i){if(!G(n,t,r,i))switch(t){case n.R16F:return _(n,n.RG16F,n.RG,i);case n.RG16F:return _(n,n.RGBA16F,n.RGBA,i);default:return null}return{internalFormat:t,format:r}}function G(n,t,r,i){let a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,t,4,4,0,r,i,null);let f=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,f),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0),n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE}function L(){return/Mobi|Android/i.test(navigator.userAgent)}class M{constructor(t,r){this.vertexShader=t,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(t){let r=0;for(let a=0;a<t.length;a++)r+=vn(t[a]);let i=this.programs[r];if(!i){let a=m(e.FRAGMENT_SHADER,this.fragmentShaderSource,t);i=C(this.vertexShader,a),this.programs[r]=i}i!==this.activeProgram&&(this.uniforms=X(i),this.activeProgram=i)}bind(){e.useProgram(this.activeProgram)}}class s{constructor(t,r){this.uniforms={},this.program=C(t,r),this.uniforms=X(this.program)}bind(){e.useProgram(this.program)}}function C(n,t){let r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,t),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw e.getProgramInfoLog(r);return r}function X(n){let t=[],r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let a=e.getActiveUniform(n,i).name;t[a]=e.getUniformLocation(n,a)}return t}function m(n,t,r){t=W(t,r);let i=e.createShader(n);if(e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw e.getShaderInfoLog(i);return i}function W(n,t){if(!t)return n;let r="";return t.forEach(i=>{r+=`#define ${i}
`}),r+n}let h=m(e.VERTEX_SHADER,`
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
`),k=m(e.VERTEX_SHADER,`
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
`),Y=m(e.FRAGMENT_SHADER,`
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
`),te=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),R=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),w=m(e.FRAGMENT_SHADER,`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`),x=m(e.FRAGMENT_SHADER,o.TRANSPARENT?`
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
`),O=m(e.FRAGMENT_SHADER,`
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
`),B=m(e.FRAGMENT_SHADER,`
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
`),K=m(e.FRAGMENT_SHADER,`
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
`),Fe=m(e.FRAGMENT_SHADER,`
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
`),Ne=m(e.FRAGMENT_SHADER,`
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
`),Ie=m(e.FRAGMENT_SHADER,`
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
`),Me=m(e.FRAGMENT_SHADER,`
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
    }`,d.supportLinearFiltering?null:["MANUAL_FILTERING"]),Be=m(e.FRAGMENT_SHADER,`
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
`),Pe=m(e.FRAGMENT_SHADER,`
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
`),Ce=m(e.FRAGMENT_SHADER,`
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
`),ze=m(e.FRAGMENT_SHADER,`
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
`),Ge=m(e.FRAGMENT_SHADER,`
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
`),T=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),n=>{e.bindFramebuffer(e.FRAMEBUFFER,n),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}),E,l,ie,oe,b,ae,q,Ee,ge=Ve(),H=new s(k,Y),de=new s(h,te),ue=new s(h,R),Re=new s(h,w),xe=new s(h,x),$=new s(h,O),V=new s(h,B),j=new s(h,K),pe=new s(h,Fe),le=new s(h,Ne),F=new s(h,Ie),A=new s(h,Me),fe=new s(h,Be),ce=new s(h,Pe),z=new s(h,Ce),Q=new s(h,ze),Z=new s(h,Ge),N=new M(h,`
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
`);function Se(){let n=ee(o.SIM_RESOLUTION),t=ee(o.DYE_RESOLUTION),r=d.halfFloatTexType,i=d.formatRGBA,a=d.formatRG,f=d.formatR,u=d.supportLinearFiltering?e.LINEAR:e.NEAREST;E=E?De(E,t.width,t.height,i.internalFormat,i.format,r,u):ve(t.width,t.height,i.internalFormat,i.format,r,u),l=l?De(l,n.width,n.height,a.internalFormat,a.format,r,u):ve(n.width,n.height,a.internalFormat,a.format,r,u),ie=U(n.width,n.height,f.internalFormat,f.format,r,e.NEAREST),oe=U(n.width,n.height,f.internalFormat,f.format,r,e.NEAREST),b=ve(n.width,n.height,f.internalFormat,f.format,r,e.NEAREST),Xe(),Ye()}function Xe(){let n=ee(o.BLOOM_RESOLUTION),t=d.halfFloatTexType,r=d.formatRGBA,i=d.supportLinearFiltering?e.LINEAR:e.NEAREST;ae=U(n.width,n.height,r.internalFormat,r.format,t,i),S.length=0;for(let a=0;a<o.BLOOM_ITERATIONS;a++){let f=n.width>>a+1,u=n.height>>a+1;if(f<2||u<2)break;let v=U(f,u,r.internalFormat,r.format,t,i);S.push(v)}}function Ye(){let n=ee(o.SUNRAYS_RESOLUTION),t=d.halfFloatTexType,r=d.formatR,i=d.supportLinearFiltering?e.LINEAR:e.NEAREST;q=U(n.width,n.height,r.internalFormat,r.format,t,i),Ee=U(n.width,n.height,r.internalFormat,r.format,t,i)}function U(n,t,r,i,a,f){e.activeTexture(e.TEXTURE0);let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,n,t,0,i,a,null);let v=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,v),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.viewport(0,0,n,t),e.clear(e.COLOR_BUFFER_BIT),{texture:u,fbo:v,width:n,height:t,texelSizeX:1/n,texelSizeY:1/t,attach(c){return e.activeTexture(e.TEXTURE0+c),e.bindTexture(e.TEXTURE_2D,u),c}}}function ve(n,t,r,i,a,f){let u=U(n,t,r,i,a,f),v=U(n,t,r,i,a,f);return{width:n,height:t,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(c){u=c},get write(){return v},set write(c){v=c},swap(){let c=u;u=v,v=c}}}function He(n,t,r,i,a,f,u){let v=U(t,r,i,a,f,u);return de.bind(),e.uniform1i(de.uniforms.uTexture,n.attach(0)),T(v.fbo),v}function De(n,t,r,i,a,f,u){return n.width===t&&n.height===r||(n.read=He(n.read,t,r,i,a,f,u),n.write=U(t,r,i,a,f,u),n.width=t,n.height=r,n.texelSizeX=1/t,n.texelSizeY=1/r),n}function Ve(n){let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:t,width:1,height:1,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,t),a}},i=new Image;return i.onload=()=>{r.width=i.width,r.height=i.height,e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,i)},r}function We(){let n=[];o.SHADING&&n.push("SHADING"),o.BLOOM&&n.push("BLOOM"),o.SUNRAYS&&n.push("SUNRAYS"),N.setKeywords(n)}We(),Se(),o.IMMEDIATE&&ye(o.SPLAT_COUNT);function Ae(){se||(o.AUTO&&o.INTERVAL&&!o.PAUSED&&p.push(o.SPLAT_COUNT),setTimeout(Ae,o.INTERVAL))}setTimeout(Ae,o.INTERVAL);let _e=Date.now(),J=0,se=!1;Le();function Le(){if(se)return;let n=ke();(!o.FRAME||o.FRAME(n)!==!1)&&(Ue()&&Se(),Ke(n),qe(),o.PAUSED||$e(n),je()),requestAnimationFrame(Le)}function ke(){let n=Date.now(),t=(n-_e)/1e3;return t=Math.min(t,.016666),_e=n,t}function Ue(){let n=Oe(g.clientWidth),t=Oe(g.clientHeight);return g.width!==n||g.height!==t?(g.width=n,g.height=t,!0):!1}function Ke(n){o.COLORFUL&&(J+=n*o.COLOR_UPDATE_SPEED,J>=1&&(J=fn(J,0,1),I.forEach(t=>{t.color=he()})))}function qe(){p.length>0&&ye(p.pop()),I.forEach(n=>{n.moved&&(n.moved=!1,tn(n))})}function $e(n){e.disable(e.BLEND),e.viewport(0,0,l.width,l.height),ce.bind(),e.uniform2f(ce.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(ce.uniforms.uVelocity,l.read.attach(0)),T(oe.fbo),z.bind(),e.uniform2f(z.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(z.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(z.uniforms.uCurl,oe.attach(1)),e.uniform1f(z.uniforms.curl,o.CURL),e.uniform1f(z.uniforms.dt,n),T(l.write.fbo),l.swap(),fe.bind(),e.uniform2f(fe.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(fe.uniforms.uVelocity,l.read.attach(0)),T(ie.fbo),ue.bind(),e.uniform1i(ue.uniforms.uTexture,b.read.attach(0)),e.uniform1f(ue.uniforms.value,o.PRESSURE),T(b.write.fbo),b.swap(),Q.bind(),e.uniform2f(Q.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(Q.uniforms.uDivergence,ie.attach(0));for(let r=0;r<o.PRESSURE_ITERATIONS;r++)e.uniform1i(Q.uniforms.uPressure,b.read.attach(1)),T(b.write.fbo),b.swap();Z.bind(),e.uniform2f(Z.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(Z.uniforms.uPressure,b.read.attach(0)),e.uniform1i(Z.uniforms.uVelocity,l.read.attach(1)),T(l.write.fbo),l.swap(),A.bind(),e.uniform2f(A.uniforms.texelSize,l.texelSizeX,l.texelSizeY),d.supportLinearFiltering||e.uniform2f(A.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);let t=l.read.attach(0);e.uniform1i(A.uniforms.uVelocity,t),e.uniform1i(A.uniforms.uSource,t),e.uniform1f(A.uniforms.dt,n),e.uniform1f(A.uniforms.dissipation,o.VELOCITY_DISSIPATION),T(l.write.fbo),l.swap(),e.viewport(0,0,E.width,E.height),d.supportLinearFiltering||e.uniform2f(A.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),e.uniform1i(A.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(A.uniforms.uSource,E.read.attach(1)),e.uniform1f(A.uniforms.dissipation,o.DENSITY_DISSIPATION),T(E.write.fbo),E.swap()}function je(n){o.BLOOM&&en(E.read,ae),o.SUNRAYS&&(nn(E.read,E.write,q),rn(q,Ee,1)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND);let t=e.drawingBufferWidth,r=e.drawingBufferHeight;e.viewport(0,0,t,r);let i=null;o.TRANSPARENT||Qe(i,ln(o.BACK_COLOR)),o.TRANSPARENT&&Ze(i),Je(i,t,r)}function Qe(n,t){Re.bind(),e.uniform4f(Re.uniforms.color,t.r,t.g,t.b,1),T(n)}function Ze(n){xe.bind(),e.uniform1f(xe.uniforms.aspectRatio,g.width/g.height),T(n)}function Je(n,t,r){if(N.bind(),o.SHADING&&e.uniform2f(N.uniforms.texelSize,1/t,1/r),e.uniform1i(N.uniforms.uTexture,E.read.attach(0)),o.BLOOM){e.uniform1i(N.uniforms.uBloom,ae.attach(1)),e.uniform1i(N.uniforms.uDithering,ge.attach(2));let i=cn(ge,t,r);e.uniform2f(N.uniforms.ditherScale,i.x,i.y)}o.SUNRAYS&&e.uniform1i(N.uniforms.uSunrays,q.attach(3)),T(n)}function en(n,t){if(S.length<2)return;let r=t;e.disable(e.BLEND),$.bind();let i=o.BLOOM_THRESHOLD*o.BLOOM_SOFT_KNEE+1e-4,a=o.BLOOM_THRESHOLD-i,f=i*2,u=.25/i;e.uniform3f($.uniforms.curve,a,f,u),e.uniform1f($.uniforms.threshold,o.BLOOM_THRESHOLD),e.uniform1i($.uniforms.uTexture,n.attach(0)),e.viewport(0,0,r.width,r.height),T(r.fbo),V.bind();for(let v=0;v<S.length;v++){let c=S[v];e.uniform2f(V.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(V.uniforms.uTexture,r.attach(0)),e.viewport(0,0,c.width,c.height),T(c.fbo),r=c}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let v=S.length-2;v>=0;v--){let c=S[v];e.uniform2f(V.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(V.uniforms.uTexture,r.attach(0)),e.viewport(0,0,c.width,c.height),T(c.fbo),r=c}e.disable(e.BLEND),j.bind(),e.uniform2f(j.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(j.uniforms.uTexture,r.attach(0)),e.uniform1f(j.uniforms.intensity,o.BLOOM_INTENSITY),e.viewport(0,0,t.width,t.height),T(t.fbo)}function nn(n,t,r){e.disable(e.BLEND),pe.bind(),e.uniform1i(pe.uniforms.uTexture,n.attach(0)),e.viewport(0,0,t.width,t.height),T(t.fbo),le.bind(),e.uniform1f(le.uniforms.weight,o.SUNRAYS_WEIGHT),e.uniform1i(le.uniforms.uTexture,t.attach(0)),e.viewport(0,0,r.width,r.height),T(r.fbo)}function rn(n,t,r){H.bind();for(let i=0;i<r;i++)e.uniform2f(H.uniforms.texelSize,n.texelSizeX,0),e.uniform1i(H.uniforms.uTexture,n.attach(0)),T(t.fbo),e.uniform2f(H.uniforms.texelSize,0,n.texelSizeY),e.uniform1i(H.uniforms.uTexture,t.attach(0)),T(n.fbo)}function tn(n){let t=n.deltaX*o.SPLAT_FORCE,r=n.deltaY*o.SPLAT_FORCE;me(n.texcoordX,n.texcoordY,t,r,n.color)}function ye(n){for(let t=0;t<n;t++){let r=he();o.SPLAT_COLOR||(r.r*=10,r.g*=10,r.b*=10),me(Math.random(),Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),r)}}function me(n,t,r,i,a){e.viewport(0,0,l.width,l.height),F.bind(),e.uniform1i(F.uniforms.uTarget,l.read.attach(0)),e.uniform1f(F.uniforms.aspectRatio,g.width/g.height),e.uniform2f(F.uniforms.point,n,t),e.uniform3f(F.uniforms.color,r,i,0),e.uniform1f(F.uniforms.radius,on(o.SPLAT_RADIUS/100)),T(l.write.fbo),l.swap(),e.viewport(0,0,E.width,E.height),e.uniform1i(F.uniforms.uTarget,E.read.attach(0)),e.uniform3f(F.uniforms.color,a.r,a.g,a.b),T(E.write.fbo),E.swap()}function on(n){let t=g.width/g.height;return t>1&&(n*=t),n}function an(){let n=un(Math.random(),1,1);return n.r*=.15,n.g*=.15,n.b*=.15,n}function he(){let n=o.SPLAT_COLOR||an();return{r:n.r,g:n.g,b:n.b}}function un(n,t,r){let i,a,f,u=Math.floor(n*6),v=n*6-u,c=r*(1-t),P=r*(1-v*t),Te=r*(1-(1-v)*t);switch(u%6){case 0:i=r,a=Te,f=c;break;case 1:i=P,a=r,f=c;break;case 2:i=c,a=r,f=Te;break;case 3:i=c,a=P,f=r;break;case 4:i=Te,a=c,f=r;break;case 5:i=r,a=c,f=P;break}return{r:i,g:a,b:f}}function ln(n){return{r:n.r/255,g:n.g/255,b:n.b/255}}function fn(n,t,r){let i=r-t;return i===0?t:(n-t)%i+t}function ee(n){let t=e.drawingBufferWidth/e.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(n),i=Math.round(n*t);return e.drawingBufferWidth>e.drawingBufferHeight?{width:i,height:r}:{width:r,height:i}}function cn(n,t,r){return{x:t/n.width,y:r/n.height}}function Oe(n){let t=Math.min(window.devicePixelRatio||1,o.MAX_DPR||8);return Math.floor(n*t)}return{splat:me,stop(){se=!0}};function vn(n){if(n.length===0)return 0;let t=0;for(let r=0;r<n.length;r++)t=(t<<5)-t+n.charCodeAt(r),t|=0;return t}}const we=[{r:.02,g:.2,b:.56},{r:.06,g:.3,b:.62},{r:.12,g:.34,b:.56}],ne=D=>{const o=we[Math.floor(Math.random()*we.length)];return{r:o.r*D,g:o.g*D,b:o.b*D}},be=5200,mn=1700,hn=2600;function Tn(D){const o=window.matchMedia("(prefers-reduced-motion: reduce)");let g=()=>{};const re=()=>{const p=document.createElement("canvas");D.appendChild(p);const S=window.matchMedia("(pointer: coarse)").matches,e=D.closest(".desk-page"),d=document.documentElement;let y=p.getBoundingClientRect();const _=()=>{y=p.getBoundingClientRect()},G=new ResizeObserver(_);G.observe(D);let L=null,M=null,s=null,C=0;const X=R=>({x:(R.clientX-y.left)/Math.max(1,y.width),y:1-(R.clientY-y.top)/Math.max(1,y.height)}),m=R=>{L=X(R),C=performance.now()},W=R=>{s=X(R),M=s,C=performance.now()};let h=null,k=0,Y=!1;const te=()=>{const R=h;if(!R)return!0;if(d.dataset.windowMotion||e&&e.dataset.fitted==="true"&&e.dataset.deskClear==="false")return!1;const w=performance.now();if(s){const x=Math.random()*Math.PI*2;R.splat(s.x,s.y,Math.cos(x)*320,Math.sin(x)*320,ne(.4)),s=null}if(L){if(M){let x=L.x-M.x,O=L.y-M.y;const B=y.width/Math.max(1,y.height);B<1?x*=B:O/=B,(x!==0||O!==0)&&R.splat(L.x,L.y,x*be,O*be,ne(.15))}M=L,L=null}if(w-k>mn){k=w;const x=w*21e-5,O=.5+.38*Math.sin(x*1.3),B=.5+.34*Math.sin(x*.9+1.7),K=x*2.4;R.splat(O,B,Math.cos(K)*240,Math.sin(K)*240,ne(.34))}return!(w-C>hn&&(Y=!Y,Y))};try{h=sn(p,{IMMEDIATE:!1,AUTO:!1,TRANSPARENT:!0,BLOOM:!1,SUNRAYS:!1,SHADING:!0,COLORFUL:!1,SIM_RESOLUTION:S?64:96,DYE_RESOLUTION:S?256:512,PRESSURE_ITERATIONS:S?10:14,DENSITY_DISSIPATION:.55,VELOCITY_DISSIPATION:.35,CURL:14,SPLAT_RADIUS:S?.5:.36,MAX_DPR:1,FRAME:te})}catch{return G.disconnect(),p.remove(),()=>{}}for(const[R,w,x,O]of[[.78,.72,-260,-120],[.6,.3,180,200],[.86,.22,-140,260],[.3,.62,220,-90]])h.splat(R,w,x,O,ne(.42));return window.addEventListener("pointermove",m,{passive:!0}),window.addEventListener("pointerdown",W,{passive:!0}),()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerdown",W),G.disconnect(),h?.stop(),(p.getContext("webgl2")??p.getContext("webgl"))?.getExtension("WEBGL_lose_context")?.loseContext(),p.remove()}},I=()=>{g(),g=o.matches?()=>{}:re(),D.dataset.shader="ready"};return I(),o.addEventListener("change",I),()=>{o.removeEventListener("change",I),g(),delete D.dataset.shader}}export{Tn as mountFluidWallpaper};
