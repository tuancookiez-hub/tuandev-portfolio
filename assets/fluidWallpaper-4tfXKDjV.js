function mn(D,o){let d=D;we(),o={IMMEDIATE:!0,TRIGGER:"hover",AUTO:!1,INTERVAL:3e3,SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_COUNT:Number.parseInt(Math.random()*20)+5,SPLAT_COLOR:void 0,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1,...o};function oe(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=Re()}let I=[],S=[],p=[];I.push(new oe);let{gl:e,ext:g}=O(d);L()&&(o.DYE_RESOLUTION=512),g.supportLinearFiltering||(o.DYE_RESOLUTION=512,o.SHADING=!1,o.BLOOM=!1,o.SUNRAYS=!1);function O(n){let r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},t=n.getContext("webgl2",r),i=!!t;i||(t=n.getContext("webgl",r)||n.getContext("experimental-webgl",r));let a,f;i?(t.getExtension("EXT_color_buffer_float"),f=t.getExtension("OES_texture_float_linear")):(a=t.getExtension("OES_texture_half_float"),f=t.getExtension("OES_texture_half_float_linear")),t.clearColor(0,0,0,1);let u=i?t.HALF_FLOAT:a.HALF_FLOAT_OES,v,c,P;return i?(v=_(t,t.RGBA16F,t.RGBA,u),c=_(t,t.RG16F,t.RG,u),P=_(t,t.R16F,t.RED,u)):(v=_(t,t.RGBA,t.RGBA,u),c=_(t,t.RGBA,t.RGBA,u),P=_(t,t.RGBA,t.RGBA,u)),{gl:t,ext:{formatRGBA:v,formatRG:c,formatR:P,halfFloatTexType:u,supportLinearFiltering:f}}}function _(n,r,t,i){if(!G(n,r,t,i))switch(r){case n.R16F:return _(n,n.RG16F,n.RG,i);case n.RG16F:return _(n,n.RGBA16F,n.RGBA,i);default:return null}return{internalFormat:r,format:t}}function G(n,r,t,i){let a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,r,4,4,0,t,i,null);let f=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,f),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0),n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE}function L(){return/Mobi|Android/i.test(navigator.userAgent)}class M{constructor(r,t){this.vertexShader=r,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(r){let t=0;for(let a=0;a<r.length;a++)t+=sn(r[a]);let i=this.programs[t];if(!i){let a=h(e.FRAGMENT_SHADER,this.fragmentShaderSource,r);i=C(this.vertexShader,a),this.programs[t]=i}i!==this.activeProgram&&(this.uniforms=X(i),this.activeProgram=i)}bind(){e.useProgram(this.activeProgram)}}class m{constructor(r,t){this.uniforms={},this.program=C(r,t),this.uniforms=X(this.program)}bind(){e.useProgram(this.program)}}function C(n,r){let t=e.createProgram();if(e.attachShader(t,n),e.attachShader(t,r),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw e.getProgramInfoLog(t);return t}function X(n){let r=[],t=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<t;i++){let a=e.getActiveUniform(n,i).name;r[a]=e.getUniformLocation(n,a)}return r}function h(n,r,t){r=W(r,t);let i=e.createShader(n);if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw e.getShaderInfoLog(i);return i}function W(n,r){if(!r)return n;let t="";return r.forEach(i=>{t+=`#define ${i}
`}),t+n}let s=h(e.VERTEX_SHADER,`
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
`),k=h(e.VERTEX_SHADER,`
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
`),K=h(e.FRAGMENT_SHADER,`
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
`),ae=h(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),ue=h(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),q=h(e.FRAGMENT_SHADER,`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`),$=h(e.FRAGMENT_SHADER,o.TRANSPARENT?`
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
`),R=h(e.FRAGMENT_SHADER,`
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
`),U=h(e.FRAGMENT_SHADER,`
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
`),x=h(e.FRAGMENT_SHADER,`
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
`),w=h(e.FRAGMENT_SHADER,`
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
`),B=h(e.FRAGMENT_SHADER,`
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
`),j=h(e.FRAGMENT_SHADER,`
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
`),Be=h(e.FRAGMENT_SHADER,`
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
    }`,g.supportLinearFiltering?null:["MANUAL_FILTERING"]),Pe=h(e.FRAGMENT_SHADER,`
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
`),Ce=h(e.FRAGMENT_SHADER,`
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
`),ze=h(e.FRAGMENT_SHADER,`
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
`),Ge=h(e.FRAGMENT_SHADER,`
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
`),Xe=h(e.FRAGMENT_SHADER,`
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
`),T=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),n=>{e.bindFramebuffer(e.FRAMEBUFFER,n),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}),E,l,le,fe,b,ce,Q,pe,Se=We(),Y=new m(k,K),De=new m(s,ae),ve=new m(s,ue),Ae=new m(s,q),_e=new m(s,$),Z=new m(s,R),H=new m(s,U),J=new m(s,x),Le=new m(s,w),se=new m(s,B),F=new m(s,j),A=new m(s,Be),me=new m(s,Pe),he=new m(s,Ce),z=new m(s,ze),ee=new m(s,Ge),ne=new m(s,Xe),N=new M(s,`
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
`);function Ue(){let n=re(o.SIM_RESOLUTION),r=re(o.DYE_RESOLUTION),t=g.halfFloatTexType,i=g.formatRGBA,a=g.formatRG,f=g.formatR,u=g.supportLinearFiltering?e.LINEAR:e.NEAREST;E=E?ye(E,r.width,r.height,i.internalFormat,i.format,t,u):Te(r.width,r.height,i.internalFormat,i.format,t,u),l=l?ye(l,n.width,n.height,a.internalFormat,a.format,t,u):Te(n.width,n.height,a.internalFormat,a.format,t,u),le=y(n.width,n.height,f.internalFormat,f.format,t,e.NEAREST),fe=y(n.width,n.height,f.internalFormat,f.format,t,e.NEAREST),b=Te(n.width,n.height,f.internalFormat,f.format,t,e.NEAREST),Ye(),He()}function Ye(){let n=re(o.BLOOM_RESOLUTION),r=g.halfFloatTexType,t=g.formatRGBA,i=g.supportLinearFiltering?e.LINEAR:e.NEAREST;ce=y(n.width,n.height,t.internalFormat,t.format,r,i),p.length=0;for(let a=0;a<o.BLOOM_ITERATIONS;a++){let f=n.width>>a+1,u=n.height>>a+1;if(f<2||u<2)break;let v=y(f,u,t.internalFormat,t.format,r,i);p.push(v)}}function He(){let n=re(o.SUNRAYS_RESOLUTION),r=g.halfFloatTexType,t=g.formatR,i=g.supportLinearFiltering?e.LINEAR:e.NEAREST;Q=y(n.width,n.height,t.internalFormat,t.format,r,i),pe=y(n.width,n.height,t.internalFormat,t.format,r,i)}function y(n,r,t,i,a,f){e.activeTexture(e.TEXTURE0);let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,n,r,0,i,a,null);let v=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,v),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.viewport(0,0,n,r),e.clear(e.COLOR_BUFFER_BIT),{texture:u,fbo:v,width:n,height:r,texelSizeX:1/n,texelSizeY:1/r,attach(c){return e.activeTexture(e.TEXTURE0+c),e.bindTexture(e.TEXTURE_2D,u),c}}}function Te(n,r,t,i,a,f){let u=y(n,r,t,i,a,f),v=y(n,r,t,i,a,f);return{width:n,height:r,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(c){u=c},get write(){return v},set write(c){v=c},swap(){let c=u;u=v,v=c}}}function Ve(n,r,t,i,a,f,u){let v=y(r,t,i,a,f,u);return De.bind(),e.uniform1i(De.uniforms.uTexture,n.attach(0)),T(v.fbo),v}function ye(n,r,t,i,a,f,u){return n.width===r&&n.height===t||(n.read=Ve(n.read,r,t,i,a,f,u),n.write=y(r,t,i,a,f,u),n.width=r,n.height=t,n.texelSizeX=1/r,n.texelSizeY=1/t),n}function We(n){let r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let t={texture:r,width:1,height:1,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,r),a}},i=new Image;return i.onload=()=>{t.width=i.width,t.height=i.height,e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,i)},t}function ke(){let n=[];o.SHADING&&n.push("SHADING"),o.BLOOM&&n.push("BLOOM"),o.SUNRAYS&&n.push("SUNRAYS"),N.setKeywords(n)}ke(),Ue(),o.IMMEDIATE&&be(o.SPLAT_COUNT);function Oe(){V||(o.AUTO&&o.INTERVAL&&!o.PAUSED&&S.push(o.SPLAT_COUNT),setTimeout(Oe,o.INTERVAL))}setTimeout(Oe,o.INTERVAL);let Ee=Date.now(),te=0,V=!1;de();function de(){if(V)return;let n=Ke();(!o.FRAME||o.FRAME(n)!==!1)&&(we()&&Ue(),qe(n),$e(),o.PAUSED||je(n),Qe()),requestAnimationFrame(de)}function Ke(){let n=Date.now(),r=(n-Ee)/1e3;return r=Math.min(r,.016666),Ee=n,r}function we(){let n=Fe(d.clientWidth),r=Fe(d.clientHeight);return d.width!==n||d.height!==r?(d.width=n,d.height=r,!0):!1}function qe(n){o.COLORFUL&&(te+=n*o.COLOR_UPDATE_SPEED,te>=1&&(te=cn(te,0,1),I.forEach(r=>{r.color=Re()})))}function $e(){S.length>0&&be(S.pop()),I.forEach(n=>{n.moved&&(n.moved=!1,on(n))})}function je(n){e.disable(e.BLEND),e.viewport(0,0,l.width,l.height),he.bind(),e.uniform2f(he.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(he.uniforms.uVelocity,l.read.attach(0)),T(fe.fbo),z.bind(),e.uniform2f(z.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(z.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(z.uniforms.uCurl,fe.attach(1)),e.uniform1f(z.uniforms.curl,o.CURL),e.uniform1f(z.uniforms.dt,n),T(l.write.fbo),l.swap(),me.bind(),e.uniform2f(me.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(me.uniforms.uVelocity,l.read.attach(0)),T(le.fbo),ve.bind(),e.uniform1i(ve.uniforms.uTexture,b.read.attach(0)),e.uniform1f(ve.uniforms.value,o.PRESSURE),T(b.write.fbo),b.swap(),ee.bind(),e.uniform2f(ee.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(ee.uniforms.uDivergence,le.attach(0));for(let t=0;t<o.PRESSURE_ITERATIONS;t++)e.uniform1i(ee.uniforms.uPressure,b.read.attach(1)),T(b.write.fbo),b.swap();ne.bind(),e.uniform2f(ne.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(ne.uniforms.uPressure,b.read.attach(0)),e.uniform1i(ne.uniforms.uVelocity,l.read.attach(1)),T(l.write.fbo),l.swap(),A.bind(),e.uniform2f(A.uniforms.texelSize,l.texelSizeX,l.texelSizeY),g.supportLinearFiltering||e.uniform2f(A.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);let r=l.read.attach(0);e.uniform1i(A.uniforms.uVelocity,r),e.uniform1i(A.uniforms.uSource,r),e.uniform1f(A.uniforms.dt,n),e.uniform1f(A.uniforms.dissipation,o.VELOCITY_DISSIPATION),T(l.write.fbo),l.swap(),e.viewport(0,0,E.width,E.height),g.supportLinearFiltering||e.uniform2f(A.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),e.uniform1i(A.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(A.uniforms.uSource,E.read.attach(1)),e.uniform1f(A.uniforms.dissipation,o.DENSITY_DISSIPATION),T(E.write.fbo),E.swap()}function Qe(n){o.BLOOM&&nn(E.read,ce),o.SUNRAYS&&(tn(E.read,E.write,Q),rn(Q,pe,1)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND);let r=e.drawingBufferWidth,t=e.drawingBufferHeight;e.viewport(0,0,r,t);let i=null;o.TRANSPARENT||Ze(i,fn(o.BACK_COLOR)),o.TRANSPARENT&&Je(i),en(i,r,t)}function Ze(n,r){Ae.bind(),e.uniform4f(Ae.uniforms.color,r.r,r.g,r.b,1),T(n)}function Je(n){_e.bind(),e.uniform1f(_e.uniforms.aspectRatio,d.width/d.height),T(n)}function en(n,r,t){if(N.bind(),o.SHADING&&e.uniform2f(N.uniforms.texelSize,1/r,1/t),e.uniform1i(N.uniforms.uTexture,E.read.attach(0)),o.BLOOM){e.uniform1i(N.uniforms.uBloom,ce.attach(1)),e.uniform1i(N.uniforms.uDithering,Se.attach(2));let i=vn(Se,r,t);e.uniform2f(N.uniforms.ditherScale,i.x,i.y)}o.SUNRAYS&&e.uniform1i(N.uniforms.uSunrays,Q.attach(3)),T(n)}function nn(n,r){if(p.length<2)return;let t=r;e.disable(e.BLEND),Z.bind();let i=o.BLOOM_THRESHOLD*o.BLOOM_SOFT_KNEE+1e-4,a=o.BLOOM_THRESHOLD-i,f=i*2,u=.25/i;e.uniform3f(Z.uniforms.curve,a,f,u),e.uniform1f(Z.uniforms.threshold,o.BLOOM_THRESHOLD),e.uniform1i(Z.uniforms.uTexture,n.attach(0)),e.viewport(0,0,t.width,t.height),T(t.fbo),H.bind();for(let v=0;v<p.length;v++){let c=p[v];e.uniform2f(H.uniforms.texelSize,t.texelSizeX,t.texelSizeY),e.uniform1i(H.uniforms.uTexture,t.attach(0)),e.viewport(0,0,c.width,c.height),T(c.fbo),t=c}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let v=p.length-2;v>=0;v--){let c=p[v];e.uniform2f(H.uniforms.texelSize,t.texelSizeX,t.texelSizeY),e.uniform1i(H.uniforms.uTexture,t.attach(0)),e.viewport(0,0,c.width,c.height),T(c.fbo),t=c}e.disable(e.BLEND),J.bind(),e.uniform2f(J.uniforms.texelSize,t.texelSizeX,t.texelSizeY),e.uniform1i(J.uniforms.uTexture,t.attach(0)),e.uniform1f(J.uniforms.intensity,o.BLOOM_INTENSITY),e.viewport(0,0,r.width,r.height),T(r.fbo)}function tn(n,r,t){e.disable(e.BLEND),Le.bind(),e.uniform1i(Le.uniforms.uTexture,n.attach(0)),e.viewport(0,0,r.width,r.height),T(r.fbo),se.bind(),e.uniform1f(se.uniforms.weight,o.SUNRAYS_WEIGHT),e.uniform1i(se.uniforms.uTexture,r.attach(0)),e.viewport(0,0,t.width,t.height),T(t.fbo)}function rn(n,r,t){Y.bind();for(let i=0;i<t;i++)e.uniform2f(Y.uniforms.texelSize,n.texelSizeX,0),e.uniform1i(Y.uniforms.uTexture,n.attach(0)),T(r.fbo),e.uniform2f(Y.uniforms.texelSize,0,n.texelSizeY),e.uniform1i(Y.uniforms.uTexture,r.attach(0)),T(n.fbo)}function on(n){let r=n.deltaX*o.SPLAT_FORCE,t=n.deltaY*o.SPLAT_FORCE;ge(n.texcoordX,n.texcoordY,r,t,n.color)}function be(n){for(let r=0;r<n;r++){let t=Re();o.SPLAT_COLOR||(t.r*=10,t.g*=10,t.b*=10),ge(Math.random(),Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),t)}}function ge(n,r,t,i,a){e.viewport(0,0,l.width,l.height),F.bind(),e.uniform1i(F.uniforms.uTarget,l.read.attach(0)),e.uniform1f(F.uniforms.aspectRatio,d.width/d.height),e.uniform2f(F.uniforms.point,n,r),e.uniform3f(F.uniforms.color,t,i,0),e.uniform1f(F.uniforms.radius,an(o.SPLAT_RADIUS/100)),T(l.write.fbo),l.swap(),e.viewport(0,0,E.width,E.height),e.uniform1i(F.uniforms.uTarget,E.read.attach(0)),e.uniform3f(F.uniforms.color,a.r,a.g,a.b),T(E.write.fbo),E.swap()}function an(n){let r=d.width/d.height;return r>1&&(n*=r),n}function un(){let n=ln(Math.random(),1,1);return n.r*=.15,n.g*=.15,n.b*=.15,n}function Re(){let n=o.SPLAT_COLOR||un();return{r:n.r,g:n.g,b:n.b}}function ln(n,r,t){let i,a,f,u=Math.floor(n*6),v=n*6-u,c=t*(1-r),P=t*(1-v*r),xe=t*(1-(1-v)*r);switch(u%6){case 0:i=t,a=xe,f=c;break;case 1:i=P,a=t,f=c;break;case 2:i=c,a=t,f=xe;break;case 3:i=c,a=P,f=t;break;case 4:i=xe,a=c,f=t;break;case 5:i=t,a=c,f=P;break}return{r:i,g:a,b:f}}function fn(n){return{r:n.r/255,g:n.g/255,b:n.b/255}}function cn(n,r,t){let i=t-r;return i===0?r:(n-r)%i+r}function re(n){let r=e.drawingBufferWidth/e.drawingBufferHeight;r<1&&(r=1/r);let t=Math.round(n),i=Math.round(n*r);return e.drawingBufferWidth>e.drawingBufferHeight?{width:i,height:t}:{width:t,height:i}}function vn(n,r,t){return{x:r/n.width,y:t/n.height}}function Fe(n){let r=Math.min(window.devicePixelRatio||1,o.MAX_DPR||8);return Math.floor(n*r)}return{splat:ge,stop(){V=!0},resume(){V&&(V=!1,Ee=Date.now(),de())}};function sn(n){if(n.length===0)return 0;let r=0;for(let t=0;t<n.length;t++)r=(r<<5)-r+n.charCodeAt(t),r|=0;return r}}const Ne=[{r:.02,g:.2,b:.56},{r:.06,g:.3,b:.62},{r:.12,g:.34,b:.56}],ie=D=>{const o=Ne[Math.floor(Math.random()*Ne.length)];return{r:o.r*D,g:o.g*D,b:o.b*D}},Ie=5200,hn=1700,Tn=2600,Me={fine:30,coarse:48};function En(D){const o=window.matchMedia("(prefers-reduced-motion: reduce)");let d=()=>{};const oe=()=>{const S=document.createElement("canvas");D.appendChild(S);const p=window.matchMedia("(pointer: coarse)").matches,e=D.closest(".desk-page"),g=document.documentElement;let O=S.getBoundingClientRect();const _=()=>{O=S.getBoundingClientRect()},G=new ResizeObserver(_);G.observe(D);let L=null,M=null,m=null,C=0;const X=R=>({x:(R.clientX-O.left)/Math.max(1,O.width),y:1-(R.clientY-O.top)/Math.max(1,O.height)}),h=R=>{L=X(R),C=performance.now()},W=R=>{m=X(R),M=m,C=performance.now()};let s=null,k=0,K=0;const ae=p?Me.coarse:Me.fine,ue=()=>{const R=s;if(!R)return!0;if(g.dataset.windowMotion)return!1;const U=performance.now();if(m){const x=Math.random()*Math.PI*2;R.splat(m.x,m.y,Math.cos(x)*320,Math.sin(x)*320,ie(.4)),m=null}if(L){if(M){let x=L.x-M.x,w=L.y-M.y;const B=O.width/Math.max(1,O.height);B<1?x*=B:w/=B,(x!==0||w!==0)&&R.splat(L.x,L.y,x*Ie,w*Ie,ie(.15))}M=L,L=null}if(U-k>hn){k=U;const x=U*21e-5,w=.5+.38*Math.sin(x*1.3),B=.5+.34*Math.sin(x*.9+1.7),j=x*2.4;R.splat(w,B,Math.cos(j)*240,Math.sin(j)*240,ie(.34))}return U-C>Tn&&U-K<ae?!1:(K=U,!0)};try{s=mn(S,{IMMEDIATE:!1,AUTO:!1,TRANSPARENT:!0,BLOOM:!1,SUNRAYS:!1,SHADING:!0,COLORFUL:!1,SIM_RESOLUTION:p?64:96,DYE_RESOLUTION:p?256:512,PRESSURE_ITERATIONS:p?8:14,DENSITY_DISSIPATION:.55,VELOCITY_DISSIPATION:.35,CURL:14,SPLAT_RADIUS:p?.5:.36,MAX_DPR:1,FRAME:ue})}catch{return G.disconnect(),S.remove(),()=>{}}for(const[R,U,x,w]of[[.78,.72,-260,-120],[.6,.3,180,200],[.86,.22,-140,260],[.3,.62,220,-90]])s.splat(R,U,x,w,ie(.42));const q=()=>{!e||!s||(e.dataset.fitted==="true"&&e.dataset.deskClear==="false"?s.stop():s.resume())},$=new MutationObserver(q);return e&&$.observe(e,{attributes:!0,attributeFilter:["data-fitted","data-desk-clear"]}),q(),window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerdown",W,{passive:!0}),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerdown",W),G.disconnect(),$.disconnect(),s?.stop(),(S.getContext("webgl2")??S.getContext("webgl"))?.getExtension("WEBGL_lose_context")?.loseContext(),S.remove()}},I=()=>{d(),d=o.matches?()=>{}:oe(),D.dataset.shader="ready"};return I(),o.addEventListener("change",I),()=>{o.removeEventListener("change",I),d(),delete D.dataset.shader}}export{En as mountFluidWallpaper};
