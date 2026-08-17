import{r as yt,R as Vf,U as nn,c as zf,N as on,S as jl,C as Qe,M as Cn,a as Xl,e as st,w as Ke,V as Nt,l as To,F as $l,W as Ao,b as qt,d as dt,L as Yn,H as xn,D as hn,B as Ot,f as Mi,g as Ee,p as Wf,h as Ti,i as Gn,j as or,k as jf,m as Ft,O as Ka,n as ot,E as Xf,P as xi,A as $f,o as Ir,q as Ge,s as mn,t as Zn,u as ei,v as Ai,x as Bn,y as qf,z as Kf,G as ti,I as Vt,J as ya,K as Yf,Q as Kn,T as wo,X as Zf,Y as Qf,Z as li,_ as Jf,$ as eu,a0 as tu,a1 as nu,a2 as iu,a3 as ru,a4 as au,a5 as ou,a6 as su,a7 as lu,a8 as cu,a9 as fu,aa as uu,ab as du,ac as hu,ad as pu,ae as _u,af as Ur,ag as Ui,ah as mu,ai as On,aj as gu,ak as vu,al as Ya,am as bu,an as Za,ao as xu,ap as Su,aq as Eu,ar as je,as as Qa,at as yu,au as Mu,av as Kt,aw as Qn,ax as Ji,ay as Tu,az as sn,aA as mi,aB as An,aC as Au,aD as ql,aE as Kl,aF as Yl,aG as sr,aH as Zl,aI as Ql,aJ as Jl,aK as ec,aL as wu,aM as Ru,aN as Cu,aO as Pu,aP as tc,aQ as Du,aR as Lu,aS as Iu,aT as Nr,aU as Or,aV as Fr,aW as Br,aX as Ro,aY as Co,aZ as Po,a_ as Do,a$ as Lo,b0 as Io,b1 as Uo,b2 as No,b3 as Oo,b4 as Ma,b5 as Fo,b6 as Bo,b7 as ko,b8 as Go,b9 as Ho,ba as Vo,bb as zo,bc as Wo,bd as jo,be as Xo,bf as $o,bg as qo,bh as Ko,bi as Yo,bj as Zo,bk as Qo,bl as Jo,bm as es,bn as ts,bo as ns,bp as Ta,bq as is,br as Uu,bs as Nu,bt as Ou,bu as Fu,bv as Bu,bw as ku,bx as Gu,by as Hu,bz as rs,bA as Vu,bB as er,bC as zu,bD as as,bE as os,bF as ss,bG as nc,bH as ic,bI as vr,bJ as ls,bK as Wu,bL as rc,bM as Ja,bN as Aa,bO as ac,bP as ju,bQ as oc,bR as sc,bS as lc,bT as cc,bU as fc,bV as uc,bW as dc,bX as cs,bY as hc,bZ as kr,b_ as Gr,b$ as Xu,c0 as $u,c1 as fs,c2 as Ut,c3 as qu,c4 as pc,c5 as wi,c6 as ni,c7 as lr,c8 as Ku,c9 as Yu,ca as Zu,cb as Qu,cc as Ju,cd as ed,ce as td,cf as nd,cg as id,ch as br,ci as _c,cj as Tt,ck as gn,cl as rd,cm as ad,cn as mc,co as eo,cp as cr,cq as od,cr as gc,cs as sd,ct as vc,cu as ld,cv as cd,cw as bc,cx as fd,cy as ud,cz as Ri,cA as wa,cB as us,cC as dd,cD as xc,cE as hd,cF as pd,cG as _d,cH as md,cI as gd,cJ as vd,cK as bd,cL as Hr}from"./index-CyIFYkr0.js";function xd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Sd(e,t,n){return t=Cd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ds(e,t){return Md(e)||xd(e,t)||Sc(e,t)||wd()}function Ed(e){return yd(e)||Td(e)||Sc(e)||Ad()}function yd(e){if(Array.isArray(e))return Ra(e)}function Md(e){if(Array.isArray(e))return e}function Td(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sc(e,t){if(e){if(typeof e=="string")return Ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ra(e,t)}}function Ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Ad(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cd(e){var t=Rd(e,"string");return typeof t=="symbol"?t:String(t)}var Pd=function(t,n){var i=new Set(n);return Object.assign.apply(Object,[{}].concat(Ed(Object.entries(t).filter(function(r){var a=ds(r,1),o=a[0];return!i.has(o)}).map(function(r){var a=ds(r,2),o=a[0],s=a[1];return Sd({},o,s)}))))};function Dd(e,{wrapperElementType:t="div",nodeMapper:n=a=>a,methodNames:i=[],initPropNames:r=[]}={}){return yt.forwardRef((a,o)=>{const s=yt.useRef(),l=yt.useMemo(()=>{const p=Object.fromEntries(r.filter(c=>a.hasOwnProperty(c)).map(c=>[c,a[c]]));return e(p)},[]);hs(()=>{l(n(s.current))},yt.useLayoutEffect),hs(()=>l._destructor instanceof Function?l._destructor:void 0);const u=yt.useCallback((p,...c)=>l[p]instanceof Function?l[p](...c):void 0,[l]),d=yt.useRef({});return Object.keys(Pd(a,[...i,...r])).filter(p=>d.current[p]!==a[p]).forEach(p=>u(p,a[p])),d.current=a,yt.useImperativeHandle(o,()=>Object.fromEntries(i.map(p=>[p,(...c)=>u(p,...c)])),[u]),Vf.createElement(t,{ref:s})})}function hs(e,t=yt.useEffect){const n=yt.useRef(),i=yt.useRef(!1),r=yt.useRef(!1),[a,o]=yt.useState(0);i.current&&(r.current=!0),t(()=>(i.current||(n.current=e(),i.current=!0),o(s=>s+1),()=>{r.current&&(n.current&&n.current(),n.current=void 0,i.current=!1,r.current=!1)}),[])}function Ec(){let e=null,t=!1,n=null,i=null;function r(a,o){n(a,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Ld(e){const t=new WeakMap;function n(s,l){const u=s.array,d=s.usage,p=u.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,u,d),s.onUploadCallback();let _;if(u instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=e.HALF_FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=e.SHORT;else if(u instanceof Uint32Array)_=e.UNSIGNED_INT;else if(u instanceof Int32Array)_=e.INT;else if(u instanceof Int8Array)_=e.BYTE;else if(u instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:p}}function i(s,l,u){const d=l.array,p=l.updateRanges;if(e.bindBuffer(u,s),p.length===0)e.bufferSubData(u,0,d);else{p.sort((_,m)=>_.start-m.start);let c=0;for(let _=1;_<p.length;_++){const m=p[c],E=p[_];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++c,p[c]=E)}p.length=c+1;for(let _=0,m=p.length;_<m;_++){const E=p[_];e.bufferSubData(u,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=t.get(s);l&&(e.deleteBuffer(l.buffer),t.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=t.get(s);(!d||d.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const u=t.get(s);if(u===void 0)t.set(s,n(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,l),u.version=s.version}}return{get:r,remove:a,update:o}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,th=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ph=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Oh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$h=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Id,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Od,alphatest_fragment:Fd,alphatest_pars_fragment:Bd,aomap_fragment:kd,aomap_pars_fragment:Gd,batching_pars_vertex:Hd,batching_vertex:Vd,begin_vertex:zd,beginnormal_vertex:Wd,bsdfs:jd,iridescence_fragment:Xd,bumpmap_pars_fragment:$d,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Zd,color_fragment:Qd,color_pars_fragment:Jd,color_pars_vertex:eh,color_vertex:th,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:rh,displacementmap_pars_vertex:ah,displacementmap_vertex:oh,emissivemap_fragment:sh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:fh,envmap_fragment:uh,envmap_common_pars_fragment:dh,envmap_pars_fragment:hh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:Th,envmap_vertex:_h,fog_vertex:mh,fog_pars_vertex:gh,fog_fragment:vh,fog_pars_fragment:bh,gradientmap_pars_fragment:xh,lightmap_pars_fragment:Sh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:yh,lights_pars_begin:Mh,lights_toon_fragment:Ah,lights_toon_pars_fragment:wh,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Ph,lights_physical_pars_fragment:Dh,lights_fragment_begin:Lh,lights_fragment_maps:Ih,lights_fragment_end:Uh,lightprobes_pars_fragment:Nh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:kh,map_fragment:Gh,map_pars_fragment:Hh,map_particle_fragment:Vh,map_particle_pars_fragment:zh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:jh,morphinstance_vertex:Xh,morphcolor_vertex:$h,morphnormal_vertex:qh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Yh,normal_fragment_begin:Zh,normal_fragment_maps:Qh,normal_pars_fragment:Jh,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:sp,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:fp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:vp,skinbase_vertex:bp,skinning_pars_vertex:xp,skinning_vertex:Sp,skinnormal_vertex:Ep,specularmap_fragment:yp,specularmap_pars_fragment:Mp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:wp,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Dp,worldpos_vertex:Lp,background_vert:Ip,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Op,cube_vert:Fp,cube_frag:Bp,depth_vert:kp,depth_frag:Gp,distance_vert:Hp,distance_frag:Vp,equirect_vert:zp,equirect_frag:Wp,linedashed_vert:jp,linedashed_frag:Xp,meshbasic_vert:$p,meshbasic_frag:qp,meshlambert_vert:Kp,meshlambert_frag:Yp,meshmatcap_vert:Zp,meshmatcap_frag:Qp,meshnormal_vert:Jp,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:r_,meshtoon_vert:a_,meshtoon_frag:o_,points_vert:s_,points_frag:l_,shadow_vert:c_,shadow_frag:f_,sprite_vert:u_,sprite_frag:d_},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ee},probesMax:{value:new Ee},probesResolution:{value:new Ee}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},tn={basic:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ut([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ut([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ut([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ut([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ut([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ut([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ut([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ut([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ut([he.common,he.displacementmap,{referencePosition:{value:new Ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ut([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};tn.physical={uniforms:Ut([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ni={r:0,b:0,g:0},h_=new Cn,yc=new je;yc.set(-1,0,0,0,1,0,0,0,1);function p_(e,t,n,i,r,a){const o=new Qe(0);let s=r===!0?0:1,l,u,d=null,p=0,c=null;function _(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const S=y.backgroundBlurriness>0;T=t.get(T,S)}return T}function m(y){let T=!1;const S=_(y);S===null?h(o,s):S&&S.isColor&&(h(S,1),T=!0);const M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(y,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===vr)?(u===void 0&&(u=new Ft(new Ja(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Aa(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(yc),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==ot,(d!==S||p!==S.version||c!==e.toneMapping)&&(u.material.needsUpdate=!0,d=S,p=S.version,c=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ft(new ec(2,2),new Kt({name:"BackgroundMaterial",uniforms:Aa(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=dt.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,c=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,T){y.getRGB(Ni,rc(e)),n.buffers.color.setClear(Ni.r,Ni.g,Ni.b,T,a)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),s=T,h(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(y){s=y,h(o,s)},render:m,addToRenderList:E,dispose:f}}function __(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=c(null);let a=r,o=!1;function s(C,N,Q,K,j){let q=!1;const P=p(C,K,Q,N);a!==P&&(a=P,u(a.object)),q=_(C,K,Q,j),q&&m(C,K,Q,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(C,N,Q,K),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function u(C){return e.bindVertexArray(C)}function d(C){return e.deleteVertexArray(C)}function p(C,N,Q,K){const j=K.wireframe===!0;let q=i[N.id];q===void 0&&(q={},i[N.id]=q);const P=C.isInstancedMesh===!0?C.id:0;let k=q[P];k===void 0&&(k={},q[P]=k);let ee=k[Q.id];ee===void 0&&(ee={},k[Q.id]=ee);let ae=ee[j];return ae===void 0&&(ae=c(l()),ee[j]=ae),ae}function c(C){const N=[],Q=[],K=[];for(let j=0;j<n;j++)N[j]=0,Q[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Q,attributeDivisors:K,object:C,attributes:{},index:null}}function _(C,N,Q,K){const j=a.attributes,q=N.attributes;let P=0;const k=Q.getAttributes();for(const ee in k)if(k[ee].location>=0){const X=j[ee];let te=q[ee];if(te===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;P++}return a.attributesNum!==P||a.index!==K}function m(C,N,Q,K){const j={},q=N.attributes;let P=0;const k=Q.getAttributes();for(const ee in k)if(k[ee].location>=0){let X=q[ee];X===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));const te={};te.attribute=X,X&&X.data&&(te.data=X.data),j[ee]=te,P++}a.attributes=j,a.attributesNum=P,a.index=K}function E(){const C=a.newAttributes;for(let N=0,Q=C.length;N<Q;N++)C[N]=0}function h(C){f(C,0)}function f(C,N){const Q=a.newAttributes,K=a.enabledAttributes,j=a.attributeDivisors;Q[C]=1,K[C]===0&&(e.enableVertexAttribArray(C),K[C]=1),j[C]!==N&&(e.vertexAttribDivisor(C,N),j[C]=N)}function y(){const C=a.newAttributes,N=a.enabledAttributes;for(let Q=0,K=N.length;Q<K;Q++)N[Q]!==C[Q]&&(e.disableVertexAttribArray(Q),N[Q]=0)}function T(C,N,Q,K,j,q,P){P===!0?e.vertexAttribIPointer(C,N,Q,j,q):e.vertexAttribPointer(C,N,Q,K,j,q)}function S(C,N,Q,K){E();const j=K.attributes,q=Q.getAttributes(),P=N.defaultAttributeValues;for(const k in q){const ee=q[k];if(ee.location>=0){let ae=j[k];if(ae===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const X=ae.normalized,te=ae.itemSize,ve=t.get(ae);if(ve===void 0)continue;const Ue=ve.buffer,G=ve.type,L=ve.bytesPerElement,$=G===e.INT||G===e.UNSIGNED_INT||ae.gpuType===tc;if(ae.isInterleavedBufferAttribute){const J=ae.data,be=J.stride,ye=ae.offset;if(J.isInstancedInterleavedBuffer){for(let _e=0;_e<ee.locationSize;_e++)f(ee.location+_e,J.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _e=0;_e<ee.locationSize;_e++)h(ee.location+_e);e.bindBuffer(e.ARRAY_BUFFER,Ue);for(let _e=0;_e<ee.locationSize;_e++)T(ee.location+_e,te/ee.locationSize,G,X,be*L,(ye+te/ee.locationSize*_e)*L,$)}else{if(ae.isInstancedBufferAttribute){for(let J=0;J<ee.locationSize;J++)f(ee.location+J,ae.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let J=0;J<ee.locationSize;J++)h(ee.location+J);e.bindBuffer(e.ARRAY_BUFFER,Ue);for(let J=0;J<ee.locationSize;J++)T(ee.location+J,te/ee.locationSize,G,X,te*L,te/ee.locationSize*J*L,$)}}else if(P!==void 0){const X=P[k];if(X!==void 0)switch(X.length){case 2:e.vertexAttrib2fv(ee.location,X);break;case 3:e.vertexAttrib3fv(ee.location,X);break;case 4:e.vertexAttrib4fv(ee.location,X);break;default:e.vertexAttrib1fv(ee.location,X)}}}}y()}function M(){w();for(const C in i){const N=i[C];for(const Q in N){const K=N[Q];for(const j in K){const q=K[j];for(const P in q)d(q[P].object),delete q[P];delete K[j]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const Q in N){const K=N[Q];for(const j in K){const q=K[j];for(const P in q)d(q[P].object),delete q[P];delete K[j]}}delete i[C.id]}function R(C){for(const N in i){const Q=i[N];for(const K in Q){const j=Q[K];if(j[C.id]===void 0)continue;const q=j[C.id];for(const P in q)d(q[P].object),delete q[P];delete j[C.id]}}}function v(C){for(const N in i){const Q=i[N],K=C.isInstancedMesh===!0?C.id:0,j=Q[K];if(j!==void 0){for(const q in j){const P=j[q];for(const k in P)d(P[k].object),delete P[k];delete j[q]}delete Q[K],Object.keys(Q).length===0&&delete i[N]}}}function w(){D(),o=!0,a!==r&&(a=r,u(a.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:w,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:h,disableUnusedAttributes:y}}function m_(e,t,n){let i;function r(l){i=l}function a(l,u){e.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,d){d!==0&&(e.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function s(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let c=0;for(let _=0;_<d;_++)c+=u[_];n.update(c,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function g_(e,t,n,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(R){const v=R===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!v)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(Ke("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:_,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:M,samples:b}}function v_(e){const t=this;let n=null,i=0,r=!1,a=!1;const o=new Qa,s=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const _=p.length!==0||c||i!==0||r;return r=c,i=p.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,c){n=d(p,c,0)},this.setState=function(p,c,_){const m=p.clippingPlanes,E=p.clipIntersection,h=p.clipShadows,f=e.get(p);if(!r||m===null||m.length===0||a&&!h)a?d(null):u();else{const y=a?0:i,T=y*4;let S=f.clippingState||null;l.value=S,S=d(m,c,T,_);for(let M=0;M!==T;++M)S[M]=n[M];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,c,_,m){const E=p!==null?p.length:0;let h=null;if(E!==0){if(h=l.value,m!==!0||h===null){const f=_+E*4,y=c.matrixWorldInverse;s.getNormalMatrix(y),(h===null||h.length<f)&&(h=new Float32Array(f));for(let T=0,S=_;T!==E;++T,S+=4)o.copy(p[T]).applyMatrix4(y,s),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,h}}const wn=4,ps=[.125,.215,.35,.446,.526,.582],Nn=20,b_=256,ci=new Ka,_s=new Qe;let Vr=null,zr=0,Wr=0,jr=!1;const x_=new Ee;class ms{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,r=100,a={}){const{size:o=256,position:s=x_}=a;Vr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,s),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vr,zr,Wr),this._renderer.xr.enabled=jr,t.scissorTest=!1,zn(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===wi||t.mapping===ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:xn,format:mn,colorSpace:pc,depthBuffer:!1},r=gs(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gs(t,n,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S_(a)),this._blurMaterial=y_(a,t,n),this._ggxMaterial=E_(a,t,n)}return r}_compileMaterial(t){const n=new Ft(new Gn,t);this._renderer.compile(n,ci)}_sceneToCubeUV(t,n,i,r,a){const l=new xi(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,c=p.autoClear,_=p.toneMapping;p.getClearColor(_s),p.toneMapping=on,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Ja,new lr({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,h=E.material;let f=!1;const y=t.background;y?y.isColor&&(h.color.copy(y),t.background=null,f=!0):(h.color.copy(_s),f=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,u[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[T],a.y,a.z)):S===1?(l.up.set(0,0,u[T]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[T],a.z)):(l.up.set(0,u[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[T]));const M=this._cubeSize;zn(r,S*M,T>2?M:0,M,M),p.setRenderTarget(r),f&&p.render(E,l),p.render(t,l)}p.toneMapping=_,p.autoClear=c,t.background=y}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===wi||t.mapping===ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vs());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const s=a.uniforms;s.envMap.value=t;const l=this._cubeSize;zn(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ci)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),c=0+u*1.25,_=p*c,{_lodMax:m}=this,E=this._sizeLods[i],h=3*E*(i>m-wn?i-m+wn:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=m-n,zn(a,h,f,3*E,2*E),r.setRenderTarget(a),r.render(s,ci),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-i,zn(t,h,f,3*E,2*E),r.setRenderTarget(t),r.render(s,ci)}_blur(t,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",a),this._halfBlur(o,t,i,i,r,"longitudinal",a)}_halfBlur(t,n,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=u;const c=u.uniforms,_=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Nn-1),E=a/m,h=isFinite(a)?1+Math.floor(d*E):Nn;h>Nn&&Ke(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Nn}`);const f=[];let y=0;for(let R=0;R<Nn;++R){const v=R/E,w=Math.exp(-v*v/2);f.push(w),R===0?y+=w:R<h&&(y+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;c.envMap.value=t.texture,c.samples.value=h,c.weights.value=f,c.latitudinal.value=o==="latitudinal",s&&(c.poleAxis.value=s);const{_lodMax:T}=this;c.dTheta.value=m,c.mipInt.value=T-i;const S=this._sizeLods[r],M=3*S*(r>T-wn?r-T+wn:0),b=4*(this._cubeSize-S);zn(n,M,b,3*S,2*S),l.setRenderTarget(n),l.render(p,ci)}}function S_(e){const t=[],n=[],i=[];let r=e;const a=e-wn+1+ps.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>e-wn?l=ps[o-e+wn-1]:o===0&&(l=0),n.push(l);const u=1/(s-2),d=-u,p=1+u,c=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,m=6,E=3,h=2,f=1,y=new Float32Array(E*m*_),T=new Float32Array(h*m*_),S=new Float32Array(f*m*_);for(let b=0;b<_;b++){const R=b%3*2/3-1,v=b>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];y.set(w,E*m*b),T.set(c,h*m*b);const D=[b,b,b,b,b,b];S.set(D,f*m*b)}const M=new Gn;M.setAttribute("position",new Qn(y,E)),M.setAttribute("uv",new Qn(T,h)),M.setAttribute("faceIndex",new Qn(S,f)),i.push(new Ft(M,null)),r>wn&&r--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function gs(e,t,n){const i=new qt(e,t,n);return i.texture.mapping=vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zn(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function E_(e,t,n){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function y_(e,t,n){const i=new Float32Array(Nn),r=new Ee(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function vs(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function bs(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function xr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mc extends qt{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new ac(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ja(5,5,5),a=new Kt({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:sn});a.uniforms.tEquirect.value=n;const o=new Ft(r,a),s=n.minFilter;return n.minFilter===Yn&&(n.minFilter=Vt),new ju(1,10,this).update(t,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(a)}}function M_(e){let t=new WeakMap,n=new WeakMap,i=null;function r(c,_=!1){return c==null?null:_?o(c):a(c)}function a(c){if(c&&c.isTexture){const _=c.mapping;if(_===kr||_===Gr)if(t.has(c)){const m=t.get(c).texture;return s(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const E=new Mc(m.height);return E.fromEquirectangularTexture(e,c),t.set(c,E),c.addEventListener("dispose",u),s(E.texture,c.mapping)}else return null}}return c}function o(c){if(c&&c.isTexture){const _=c.mapping,m=_===kr||_===Gr,E=_===wi||_===ni;if(m||E){let h=n.get(c);const f=h!==void 0?h.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new ms(e)),h=m?i.fromEquirectangular(c,h):i.fromCubemap(c,h),h.texture.pmremVersion=c.pmremVersion,n.set(c,h),h.texture;if(h!==void 0)return h.texture;{const y=c.image;return m&&y&&y.height>0||E&&y&&l(y)?(i===null&&(i=new ms(e)),h=m?i.fromEquirectangular(c):i.fromCubemap(c),h.texture.pmremVersion=c.pmremVersion,n.set(c,h),c.addEventListener("dispose",d),h.texture):null}}}return c}function s(c,_){return _===kr?c.mapping=wi:_===Gr&&(c.mapping=ni),c}function l(c){let _=0;const m=6;for(let E=0;E<m;E++)c[E]!==void 0&&_++;return _===m}function u(c){const _=c.target;_.removeEventListener("dispose",u);const m=t.get(_);m!==void 0&&(t.delete(_),m.dispose())}function d(c){const _=c.target;_.removeEventListener("dispose",d);const m=n.get(_);m!==void 0&&(n.delete(_),m.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function T_(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const r=e.getExtension(i);return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Yf("WebGLRenderer: "+i+" extension not supported."),r}}}function A_(e,t,n,i){const r={},a=new WeakMap;function o(p){const c=p.target;c.index!==null&&t.remove(c.index);for(const m in c.attributes)t.remove(c.attributes[m]);c.removeEventListener("dispose",o),delete r[c.id];const _=a.get(c);_&&(t.remove(_),a.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function s(p,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,n.memory.geometries++),c}function l(p){const c=p.attributes;for(const _ in c)t.update(c[_],e.ARRAY_BUFFER)}function u(p){const c=[],_=p.index,m=p.attributes.position;let E=0;if(m===void 0)return;if(_!==null){const y=_.array;E=_.version;for(let T=0,S=y.length;T<S;T+=3){const M=y[T+0],b=y[T+1],R=y[T+2];c.push(M,b,b,R,R,M)}}else{const y=m.array;E=m.version;for(let T=0,S=y.length/3-1;T<S;T+=3){const M=T+0,b=T+1,R=T+2;c.push(M,b,b,R,R,M)}}const h=new(m.count>=65535?Xu:$u)(c,1);h.version=E;const f=a.get(p);f&&t.remove(f),a.set(p,h)}function d(p){const c=a.get(p);if(c){const _=p.index;_!==null&&c.version<_.version&&u(p)}else u(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:d}}function w_(e,t,n){let i;function r(p){i=p}let a,o;function s(p){a=p.type,o=p.bytesPerElement}function l(p,c){e.drawElements(i,c,a,p*o),n.update(c,i,1)}function u(p,c,_){_!==0&&(e.drawElementsInstanced(i,c,a,p*o,_),n.update(c,i,_))}function d(p,c,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,a,p,0,_);let E=0;for(let h=0;h<_;h++)E+=c[h];n.update(E,i,1)}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function R_(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=s*(a/3);break;case e.LINES:n.lines+=s*(a/2);break;case e.LINE_STRIP:n.lines+=s*(a-1);break;case e.LINE_LOOP:n.lines+=s*a;break;case e.POINTS:n.points+=s*a;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function C_(e,t,n){const i=new WeakMap,r=new Nt;function a(o,s,l){const u=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=d!==void 0?d.length:0;let c=i.get(s);if(c===void 0||c.count!==p){let w=function(){R.dispose(),i.delete(s),s.removeEventListener("dispose",w)};c!==void 0&&c.texture.dispose();const _=s.morphAttributes.position!==void 0,m=s.morphAttributes.normal!==void 0,E=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],f=s.morphAttributes.normal||[],y=s.morphAttributes.color||[];let T=0;_===!0&&(T=1),m===!0&&(T=2),E===!0&&(T=3);let S=s.attributes.position.count*T,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const b=new Float32Array(S*M*4*p),R=new nc(b,S,M,p);R.type=An,R.needsUpdate=!0;const v=T*4;for(let D=0;D<p;D++){const C=h[D],N=f[D],Q=y[D],K=S*M*4*D;for(let j=0;j<C.count;j++){const q=j*v;_===!0&&(r.fromBufferAttribute(C,j),b[K+q+0]=r.x,b[K+q+1]=r.y,b[K+q+2]=r.z,b[K+q+3]=0),m===!0&&(r.fromBufferAttribute(N,j),b[K+q+4]=r.x,b[K+q+5]=r.y,b[K+q+6]=r.z,b[K+q+7]=0),E===!0&&(r.fromBufferAttribute(Q,j),b[K+q+8]=r.x,b[K+q+9]=r.y,b[K+q+10]=r.z,b[K+q+11]=Q.itemSize===4?r.w:1)}}c={count:p,texture:R,size:new Ge(S,M)},i.set(s,c),s.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let _=0;for(let E=0;E<u.length;E++)_+=u[E];const m=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:a}}function P_(e,t,n,i,r){let a=new WeakMap;function o(u){const d=r.render.frame,p=u.geometry,c=t.get(u,p);if(a.get(c)!==d&&(t.update(c),a.set(c,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),a.get(u)!==d&&(n.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,e.ARRAY_BUFFER),a.set(u,d))),u.isSkinnedMesh){const _=u.skeleton;a.get(_)!==d&&(_.update(),a.set(_,d))}return c}function s(){a=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:s}}const D_={[dc]:"LINEAR_TONE_MAPPING",[uc]:"REINHARD_TONE_MAPPING",[fc]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function L_(e,t,n,i,r,a){const o=new qt(t,n,{type:e,depthBuffer:r,stencilBuffer:a,samples:i?4:0,depthTexture:r?new Ti(t,n):void 0}),s=new qt(t,n,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new Gn;l.setAttribute("position",new or([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new or([0,2,0,0,2,0],2));const u=new jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(l,u),p=new Ka(-1,1,1,-1,0,1);let c=null,_=null,m=!1,E,h=null,f=[],y=!1;this.setSize=function(T,S){o.setSize(T,S),s.setSize(T,S);for(let M=0;M<f.length;M++){const b=f[M];b.setSize&&b.setSize(T,S)}},this.setEffects=function(T){f=T,y=f.length>0&&f[0].isRenderPass===!0;const S=o.width,M=o.height;for(let b=0;b<f.length;b++){const R=f[b];R.setSize&&R.setSize(S,M)}},this.begin=function(T,S){if(m||T.toneMapping===on&&f.length===0)return!1;if(h=S,S!==null){const M=S.width,b=S.height;(o.width!==M||o.height!==b)&&this.setSize(M,b)}return y===!1&&T.setRenderTarget(o),E=T.toneMapping,T.toneMapping=on,!0},this.hasRenderPass=function(){return y},this.end=function(T,S){T.toneMapping=E,m=!0;let M=o,b=s;for(let R=0;R<f.length;R++){const v=f[R];if(v.enabled!==!1&&(v.render(T,b,M,S),v.needsSwap!==!1)){const w=M;M=b,b=w}}if(c!==T.outputColorSpace||_!==T.toneMapping){c=T.outputColorSpace,_=T.toneMapping,u.defines={},dt.getTransfer(c)===ot&&(u.defines.SRGB_TRANSFER="");const R=D_[_];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(h),T.render(d,p),h=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),l.dispose(),u.dispose()}}const Tc=new ed,Ca=new Ti(1,1),Ac=new nc,wc=new Ku,Rc=new ac,xs=[],Ss=[],Es=new Float32Array(16),ys=new Float32Array(9),Ms=new Float32Array(4);function ai(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let a=xs[r];if(a===void 0&&(a=new Float32Array(r),xs[r]=a),t!==0){i.toArray(a,0);for(let o=1,s=0;o!==t;++o)s+=n,e[o].toArray(a,s)}return a}function xt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function St(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Sr(e,t){let n=Ss[t];n===void 0&&(n=new Int32Array(t),Ss[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function I_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function U_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xt(n,t))return;e.uniform2fv(this.addr,t),St(n,t)}}function N_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xt(n,t))return;e.uniform3fv(this.addr,t),St(n,t)}}function O_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xt(n,t))return;e.uniform4fv(this.addr,t),St(n,t)}}function F_(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(xt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),St(n,t)}else{if(xt(n,i))return;Ms.set(i),e.uniformMatrix2fv(this.addr,!1,Ms),St(n,i)}}function B_(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(xt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),St(n,t)}else{if(xt(n,i))return;ys.set(i),e.uniformMatrix3fv(this.addr,!1,ys),St(n,i)}}function k_(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(xt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),St(n,t)}else{if(xt(n,i))return;Es.set(i),e.uniformMatrix4fv(this.addr,!1,Es),St(n,i)}}function G_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function H_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xt(n,t))return;e.uniform2iv(this.addr,t),St(n,t)}}function V_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xt(n,t))return;e.uniform3iv(this.addr,t),St(n,t)}}function z_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xt(n,t))return;e.uniform4iv(this.addr,t),St(n,t)}}function W_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function j_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xt(n,t))return;e.uniform2uiv(this.addr,t),St(n,t)}}function X_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xt(n,t))return;e.uniform3uiv(this.addr,t),St(n,t)}}function $_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xt(n,t))return;e.uniform4uiv(this.addr,t),St(n,t)}}function q_(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Ca.compareFunction=n.isReversedDepthBuffer()?Ya:Za,a=Ca):a=Tc,n.setTexture2D(t||a,r)}function K_(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||wc,r)}function Y_(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Rc,r)}function Z_(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Ac,r)}function Q_(e){switch(e){case 5126:return I_;case 35664:return U_;case 35665:return N_;case 35666:return O_;case 35674:return F_;case 35675:return B_;case 35676:return k_;case 5124:case 35670:return G_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return z_;case 5125:return W_;case 36294:return j_;case 36295:return X_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}function J_(e,t){e.uniform1fv(this.addr,t)}function em(e,t){const n=ai(t,this.size,2);e.uniform2fv(this.addr,n)}function tm(e,t){const n=ai(t,this.size,3);e.uniform3fv(this.addr,n)}function nm(e,t){const n=ai(t,this.size,4);e.uniform4fv(this.addr,n)}function im(e,t){const n=ai(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rm(e,t){const n=ai(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function am(e,t){const n=ai(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function om(e,t){e.uniform1iv(this.addr,t)}function sm(e,t){e.uniform2iv(this.addr,t)}function lm(e,t){e.uniform3iv(this.addr,t)}function cm(e,t){e.uniform4iv(this.addr,t)}function fm(e,t){e.uniform1uiv(this.addr,t)}function um(e,t){e.uniform2uiv(this.addr,t)}function dm(e,t){e.uniform3uiv(this.addr,t)}function hm(e,t){e.uniform4uiv(this.addr,t)}function pm(e,t,n){const i=this.cache,r=t.length,a=Sr(n,r);xt(i,a)||(e.uniform1iv(this.addr,a),St(i,a));let o;this.type===e.SAMPLER_2D_SHADOW?o=Ca:o=Tc;for(let s=0;s!==r;++s)n.setTexture2D(t[s]||o,a[s])}function _m(e,t,n){const i=this.cache,r=t.length,a=Sr(n,r);xt(i,a)||(e.uniform1iv(this.addr,a),St(i,a));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||wc,a[o])}function mm(e,t,n){const i=this.cache,r=t.length,a=Sr(n,r);xt(i,a)||(e.uniform1iv(this.addr,a),St(i,a));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||Rc,a[o])}function gm(e,t,n){const i=this.cache,r=t.length,a=Sr(n,r);xt(i,a)||(e.uniform1iv(this.addr,a),St(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||Ac,a[o])}function vm(e){switch(e){case 5126:return J_;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return sm;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return fm;case 36294:return um;case 36295:return dm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class bm{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Q_(n.type)}}class xm{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vm(n.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(t,n[s.id],i)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function Ts(e,t){e.seq.push(t),e.map[t.id]=t}function Em(e,t,n){const i=e.name,r=i.length;for(Xr.lastIndex=0;;){const a=Xr.exec(i),o=Xr.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){Ts(n,u===void 0?new bm(s,e,t):new xm(s,e,t));break}else{let p=n.map[s];p===void 0&&(p=new Sm(s),Ts(n,p)),n=p}}}class tr{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(n,o),l=t.getUniformLocation(n,s.name);Em(s,l,this)}const r=[],a=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(t,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,a=t.length;r!==a;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function As(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const ym=37297;let Mm=0;function Tm(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const ws=new je;function Am(e){dt._getMatrix(ws,dt.workingColorSpace,e);const t=`mat3( ${ws.elements.map(n=>n.toFixed(4))} )`;switch(dt.getTransfer(e)){case hc:return[t,"LinearTransferOETF"];case ot:return[t,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Rs(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+a+`

`+Tm(e.getShaderSource(t),s)}else return a}function wm(e,t){const n=Am(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Rm={[dc]:"Linear",[uc]:"Reinhard",[fc]:"Cineon",[cc]:"ACESFilmic",[lc]:"AgX",[sc]:"Neutral",[oc]:"Custom"};function Cm(e,t){const n=Rm[t];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oi=new Ee;function Pm(){dt.getLuminanceCoefficients(Oi);const e=Oi.x.toFixed(4),t=Oi.y.toFixed(4),n=Oi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gi).join(`
`)}function Lm(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Im(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(t,r),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function gi(e){return e!==""}function Cs(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ps(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(e){return e.replace(Um,Om)}const Nm=new Map;function Om(e,t){let n=ke[t];if(n===void 0){const i=Nm.get(t);if(i!==void 0)n=ke[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pa(n)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ds(e){return e.replace(Fm,Bm)}function Bm(e,t,n,i){let r="";for(let a=parseInt(t);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ls(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const km={[Ji]:"SHADOWMAP_TYPE_PCF",[mi]:"SHADOWMAP_TYPE_VSM"};function Gm(e){return km[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hm={[wi]:"ENVMAP_TYPE_CUBE",[ni]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function Vm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Hm[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const zm={[ni]:"ENVMAP_MODE_REFRACTION"};function Wm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":zm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jm={[Ju]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};function Xm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":jm[e.combine]||"ENVMAP_BLENDING_NONE"}function $m(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qm(e,t,n,i){const r=e.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=Gm(n),u=Vm(n),d=Wm(n),p=Xm(n),c=$m(n),_=Dm(n),m=Lm(a),E=r.createProgram();let h,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(gi).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(gi).join(`
`),f.length>0&&(f+=`
`)):(h=[Ls(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),f=[Ls(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==on?"#define TONE_MAPPING":"",n.toneMapping!==on?ke.tonemapping_pars_fragment:"",n.toneMapping!==on?Cm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,wm("linearToOutputTexel",n.outputColorSpace),Pm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gi).join(`
`)),o=Pa(o),o=Cs(o,n),o=Ps(o,n),s=Pa(s),s=Cs(s,n),s=Ps(s,n),o=Ds(o),s=Ds(s),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",n.glslVersion===fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+h+o,S=y+f+s,M=As(r,r.VERTEX_SHADER,T),b=As(r,r.FRAGMENT_SHADER,S);r.attachShader(E,M),r.attachShader(E,b),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(C){if(e.debug.checkShaderErrors){const N=r.getProgramInfoLog(E)||"",Q=r.getShaderInfoLog(M)||"",K=r.getShaderInfoLog(b)||"",j=N.trim(),q=Q.trim(),P=K.trim();let k=!0,ee=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,E,M,b);else{const ae=Rs(r,M,"vertex"),X=Rs(r,b,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+j+`
`+ae+`
`+X)}else j!==""?Ke("WebGLProgram: Program Info Log:",j):(q===""||P==="")&&(ee=!1);ee&&(C.diagnostics={runnable:k,programLog:j,vertexShader:{log:q,prefix:h},fragmentShader:{log:P,prefix:f}})}r.deleteShader(M),r.deleteShader(b),v=new tr(r,E),w=Im(r,E)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(E,ym)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=M,this.fragmentShader=b,this}let Km=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Zm(t),n.set(t,i)),i}}class Zm{constructor(t){this.id=Km++,this.code=t,this.usedTimes=0}}function Qm(e){return e===ti||e===Ma||e===Ta}function Jm(e,t,n,i,r,a){const o=new qu,s=new Ym,l=new Set,u=[],d=new Map,p=i.logarithmicDepthBuffer;let c=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,w,D,C,N,Q){const K=C.fog,j=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||q,P),ee=k&&k.mapping===vr?k.image.height:null,ae=_[v.type];v.precision!==null&&(c=i.getMaxPrecision(v.precision),c!==v.precision&&Ke("WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));const X=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=X!==void 0?X.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let Ue,G,L,$;if(ae){const Me=tn[ae];Ue=Me.vertexShader,G=Me.fragmentShader}else{Ue=v.vertexShader,G=v.fragmentShader;const Me=s.getVertexShaderStage(v),pt=s.getFragmentShaderStage(v);s.update(v,Me,pt),L=Me.id,$=pt.id}const J=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),ye=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,$e=!!v.map,Ne=!!v.matcap,We=!!k,Ve=!!v.aoMap,Be=!!v.lightMap,Ye=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,Et=!!v.displacementMap,Mt=!!v.emissiveMap,ht=!!v.metalnessMap,vt=!!v.roughnessMap,O=v.anisotropy>0,Lt=v.clearcoat>0,Ze=v.dispersion>0,A=v.iridescence>0,g=v.sheen>0,B=v.transmission>0,z=O&&!!v.anisotropyMap,Y=Lt&&!!v.clearcoatMap,oe=Lt&&!!v.clearcoatNormalMap,le=Lt&&!!v.clearcoatRoughnessMap,Z=A&&!!v.iridescenceMap,ie=A&&!!v.iridescenceThicknessMap,ce=g&&!!v.sheenColorMap,Re=g&&!!v.sheenRoughnessMap,de=!!v.specularMap,fe=!!v.specularColorMap,De=!!v.specularIntensityMap,Le=B&&!!v.transmissionMap,Oe=B&&!!v.thicknessMap,U=!!v.gradientMap,se=!!v.alphaMap,ne=v.alphaTest>0,ue=!!v.alphaHash,ge=!!v.extensions;let re=on;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(re=e.toneMapping);const Ae={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:G,defines:v.defines,customVertexShaderID:L,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:Ne,envMap:We,envMapMode:We&&k.mapping,envMapCubeUVHeight:ee,aoMap:Ve,lightMap:Be,bumpMap:Ye,normalMap:lt,displacementMap:Et,emissiveMap:Mt,normalMapObjectSpace:lt&&v.normalMapType===Wu,normalMapTangentSpace:lt&&v.normalMapType===ls,packedNormalMap:lt&&v.normalMapType===ls&&Qm(v.normalMap.format),metalnessMap:ht,roughnessMap:vt,anisotropy:O,anisotropyMap:z,clearcoat:Lt,clearcoatMap:Y,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,dispersion:Ze,iridescence:A,iridescenceMap:Z,iridescenceThicknessMap:ie,sheen:g,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:de,specularColorMap:fe,specularIntensityMap:De,transmission:B,transmissionMap:Le,thicknessMap:Oe,gradientMap:U,opaque:v.transparent===!1&&v.blending===er&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:ne,alphaHash:ue,combine:v.combine,mapUv:$e&&m(v.map.channel),aoMapUv:Ve&&m(v.aoMap.channel),lightMapUv:Be&&m(v.lightMap.channel),bumpMapUv:Ye&&m(v.bumpMap.channel),normalMapUv:lt&&m(v.normalMap.channel),displacementMapUv:Et&&m(v.displacementMap.channel),emissiveMapUv:Mt&&m(v.emissiveMap.channel),metalnessMapUv:ht&&m(v.metalnessMap.channel),roughnessMapUv:vt&&m(v.roughnessMap.channel),anisotropyMapUv:z&&m(v.anisotropyMap.channel),clearcoatMapUv:Y&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(v.sheenRoughnessMap.channel),specularMapUv:de&&m(v.specularMap.channel),specularColorMapUv:fe&&m(v.specularColorMap.channel),specularIntensityMapUv:De&&m(v.specularIntensityMap.channel),transmissionMapUv:Le&&m(v.transmissionMap.channel),thicknessMapUv:Oe&&m(v.thicknessMap.channel),alphaMapUv:se&&m(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(lt||O),vertexNormals:!!j.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&($e||se),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||j.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:re,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===ot,decodeVideoTextureEmissive:Mt&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hn,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function h(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(f(w,v),y(w,v),w.push(e.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function f(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function T(v){const w=_[v.type];let D;if(w){const C=tn[w];D=ic.clone(C.uniforms)}else D=v.uniforms;return D}function S(v,w){let D=d.get(w);return D!==void 0?++D.usedTimes:(D=new qm(e,w,v,r),u.push(D),d.set(w,D)),D}function M(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function b(v){s.remove(v)}function R(){s.dispose()}return{getParameters:E,getProgramCacheKey:h,getUniforms:T,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:u,dispose:R}}function eg(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function r(o,s,l){e.get(o)[s]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:a}}function tg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Is(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Us(){const e=[];let t=0;const n=[],i=[],r=[];function a(){t=0,n.length=0,i.length=0,r.length=0}function o(c){let _=0;return c.isInstancedMesh&&(_+=2),c.isSkinnedMesh&&(_+=1),_}function s(c,_,m,E,h,f){let y=e[t];return y===void 0?(y={id:c.id,object:c,geometry:_,material:m,materialVariant:o(c),groupOrder:E,renderOrder:c.renderOrder,z:h,group:f},e[t]=y):(y.id=c.id,y.object=c,y.geometry=_,y.material=m,y.materialVariant=o(c),y.groupOrder=E,y.renderOrder=c.renderOrder,y.z=h,y.group=f),t++,y}function l(c,_,m,E,h,f){const y=s(c,_,m,E,h,f);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):n.push(y)}function u(c,_,m,E,h,f){const y=s(c,_,m,E,h,f);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):n.unshift(y)}function d(c,_,m){n.length>1&&n.sort(c||tg),i.length>1&&i.sort(_||Is),r.length>1&&r.sort(_||Is),m&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let c=t,_=e.length;c<_;c++){const m=e[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:l,unshift:u,finish:p,sort:d}}function ng(){let e=new WeakMap;function t(i,r){const a=e.get(i);let o;return a===void 0?(o=new Us,e.set(i,[o])):r>=a.length?(o=new Us,a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function ig(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Ee,color:new Qe};break;case"SpotLight":n={position:new Ee,direction:new Ee,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Ee,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Ee,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new Ee,halfWidth:new Ee,halfHeight:new Ee};break}return e[t.id]=n,n}}}function rg(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let ag=0;function og(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function sg(e){const t=new ig,n=rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Ee);const r=new Ee,a=new Cn,o=new Cn;function s(u){let d=0,p=0,c=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let _=0,m=0,E=0,h=0,f=0,y=0,T=0,S=0,M=0,b=0,R=0;u.sort(og);for(let w=0,D=u.length;w<D;w++){const C=u[w],N=C.color,Q=C.intensity,K=C.distance;let j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ti?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=N.r*Q,p+=N.g*Q,c+=N.b*Q;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],Q);R++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const P=C.shadow,k=n.get(C);k.shadowIntensity=P.intensity,k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,i.directionalShadow[_]=k,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=C.shadow.matrix,y++}i.directional[_]=q,_++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(N).multiplyScalar(Q),q.distance=K,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[E]=q;const P=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,P.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[E]=P.matrix,C.castShadow){const k=n.get(C);k.shadowIntensity=P.intensity,k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=j,S++}E++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(N).multiplyScalar(Q),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[h]=q,h++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const P=C.shadow,k=n.get(C);k.shadowIntensity=P.intensity,k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,k.shadowCameraNear=P.camera.near,k.shadowCameraFar=P.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=C.shadow.matrix,T++}i.point[m]=q,m++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(Q),q.groundColor.copy(C.groundColor).multiplyScalar(Q),i.hemi[f]=q,f++}}h>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=c;const v=i.hash;(v.directionalLength!==_||v.pointLength!==m||v.spotLength!==E||v.rectAreaLength!==h||v.hemiLength!==f||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==S||v.numSpotMaps!==M||v.numLightProbes!==R)&&(i.directional.length=_,i.spot.length=E,i.rectArea.length=h,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+M-b,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,v.directionalLength=_,v.pointLength=m,v.spotLength=E,v.rectAreaLength=h,v.hemiLength=f,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=S,v.numSpotMaps=M,v.numLightProbes=R,i.version=ag++)}function l(u,d){let p=0,c=0,_=0,m=0,E=0;const h=d.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const T=u[f];if(T.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),p++}else if(T.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),_++}else if(T.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const S=i.point[c];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),c++}else if(T.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(h),E++}}}return{setup:s,setupView:l,state:i}}function Ns(e){const t=new sg(e),n=[],i=[],r=[];function a(c){p.camera=c,n.length=0,i.length=0,r.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function l(c){r.push(c)}function u(){t.setup(n)}function d(c){t.setupView(n,c)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:s,pushLightProbeGrid:l}}function lg(e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let s;return o===void 0?(s=new Ns(e),t.set(r,[s])):a>=o.length?(s=new Ns(e),o.push(s)):s=o[a],s}function i(){t=new WeakMap}return{get:n,dispose:i}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ug=[new Ee(1,0,0),new Ee(-1,0,0),new Ee(0,1,0),new Ee(0,-1,0),new Ee(0,0,1),new Ee(0,0,-1)],dg=[new Ee(0,-1,0),new Ee(0,-1,0),new Ee(0,0,1),new Ee(0,0,-1),new Ee(0,-1,0),new Ee(0,-1,0)],Os=new Cn,fi=new Ee,$r=new Ee;function hg(e,t,n){let i=new $l;const r=new Ge,a=new Ge,o=new Nt,s=new yu,l=new Mu,u={},d=n.maxTextureSize,p={[Mi]:Ot,[Ot]:Mi,[hn]:hn},c=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:cg,fragmentShader:fg}),_=c.clone();_.defines.HORIZONTAL_PASS=1;const m=new Gn;m.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ft(m,c),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ji;let f=this.type;this.render=function(b,R,v){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;this.type===Tu&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ji);const w=e.getRenderTarget(),D=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),N=e.state;N.setBlending(sn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Q=f!==this.type;Q&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(j=>j.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,j=b.length;K<j;K++){const q=b[K],P=q.shadow;if(P===void 0){Ke("WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const k=P.getFrameExtents();r.multiply(k),a.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/k.x),r.x=a.x*k.x,P.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/k.y),r.y=a.y*k.y,P.mapSize.y=a.y));const ee=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=ee,P.map===null||Q===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===mi){if(q.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new qt(r.x,r.y,{format:ti,type:xn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),P.map.texture.name=q.name+".shadowMap",P.map.depthTexture=new Ti(r.x,r.y,An),P.map.depthTexture.name=q.name+".shadowMapDepth",P.map.depthTexture.format=ei,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=On,P.map.depthTexture.magFilter=On}else q.isPointLight?(P.map=new Mc(r.x),P.map.depthTexture=new Au(r.x,Bn)):(P.map=new qt(r.x,r.y),P.map.depthTexture=new Ti(r.x,r.y,Bn)),P.map.depthTexture.name=q.name+".shadowMap",P.map.depthTexture.format=ei,this.type===Ji?(P.map.depthTexture.compareFunction=ee?Ya:Za,P.map.depthTexture.minFilter=Vt,P.map.depthTexture.magFilter=Vt):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=On,P.map.depthTexture.magFilter=On);P.camera.updateProjectionMatrix()}const ae=P.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<ae;X++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,X),e.clear();else{X===0&&(e.setRenderTarget(P.map),e.clear());const te=P.getViewport(X);o.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),N.viewport(o)}if(q.isPointLight){const te=P.camera,ve=P.matrix,Ue=q.distance||te.far;Ue!==te.far&&(te.far=Ue,te.updateProjectionMatrix()),fi.setFromMatrixPosition(q.matrixWorld),te.position.copy(fi),$r.copy(te.position),$r.add(ug[X]),te.up.copy(dg[X]),te.lookAt($r),te.updateMatrixWorld(),ve.makeTranslation(-fi.x,-fi.y,-fi.z),Os.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Os,te.coordinateSystem,te.reversedDepth)}else P.updateMatrices(q);i=P.getFrustum(),S(R,v,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===mi&&y(P,v),P.needsUpdate=!1}f=this.type,h.needsUpdate=!1,e.setRenderTarget(w,D,C)};function y(b,R){const v=t.update(E);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qt(r.x,r.y,{format:ti,type:xn})),c.uniforms.shadow_pass.value=b.map.depthTexture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,v,c,E,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,v,_,E,null)}function T(b,R,v,w){let D=null;const C=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)D=C;else if(D=v.isPointLight===!0?l:s,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=D.uuid,Q=R.uuid;let K=u[N];K===void 0&&(K={},u[N]=K);let j=K[Q];j===void 0&&(j=D.clone(),K[Q]=j,R.addEventListener("dispose",M)),D=j}if(D.visible=R.visible,D.wireframe=R.wireframe,w===mi?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:p[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const N=e.properties.get(D);N.light=v}return D}function S(b,R,v,w,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===mi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const Q=t.update(b),K=b.material;if(Array.isArray(K)){const j=Q.groups;for(let q=0,P=j.length;q<P;q++){const k=j[q],ee=K[k.materialIndex];if(ee&&ee.visible){const ae=T(b,ee,w,D);b.onBeforeShadow(e,b,R,v,Q,ae,k),e.renderBufferDirect(v,null,Q,ae,b,k),b.onAfterShadow(e,b,R,v,Q,ae,k)}}}else if(K.visible){const j=T(b,K,w,D);b.onBeforeShadow(e,b,R,v,Q,j,null),e.renderBufferDirect(v,null,Q,j,b,null),b.onAfterShadow(e,b,R,v,Q,j,null)}}const N=b.children;for(let Q=0,K=N.length;Q<K;Q++)S(N[Q],R,v,w,D)}function M(b){b.target.removeEventListener("dispose",M);for(const v in u){const w=u[v],D=b.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function pg(e,t){function n(){let U=!1;const se=new Nt;let ne=null;const ue=new Nt(0,0,0,0);return{setMask:function(ge){ne!==ge&&!U&&(e.colorMask(ge,ge,ge,ge),ne=ge)},setLocked:function(ge){U=ge},setClear:function(ge,re,Ae,Me,pt){pt===!0&&(ge*=Me,re*=Me,Ae*=Me),se.set(ge,re,Ae,Me),ue.equals(se)===!1&&(e.clearColor(ge,re,Ae,Me),ue.copy(se))},reset:function(){U=!1,ne=null,ue.set(-1,0,0,0)}}}function i(){let U=!1,se=!1,ne=null,ue=null,ge=null;return{setReversed:function(re){if(se!==re){const Ae=t.get("EXT_clip_control");re?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),se=re;const Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return se},setTest:function(re){re?J(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(re){ne!==re&&!U&&(e.depthMask(re),ne=re)},setFunc:function(re){if(se&&(re=td[re]),ue!==re){switch(re){case Gu:e.depthFunc(e.NEVER);break;case ku:e.depthFunc(e.ALWAYS);break;case Bu:e.depthFunc(e.LESS);break;case wo:e.depthFunc(e.LEQUAL);break;case Fu:e.depthFunc(e.EQUAL);break;case Ou:e.depthFunc(e.GEQUAL);break;case Nu:e.depthFunc(e.GREATER);break;case Uu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=re}},setLocked:function(re){U=re},setClear:function(re){ge!==re&&(ge=re,se&&(re=1-re),e.clearDepth(re))},reset:function(){U=!1,ne=null,ue=null,ge=null,se=!1}}}function r(){let U=!1,se=null,ne=null,ue=null,ge=null,re=null,Ae=null,Me=null,pt=null;return{setTest:function(rt){U||(rt?J(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(rt){se!==rt&&!U&&(e.stencilMask(rt),se=rt)},setFunc:function(rt,Yt,Zt){(ne!==rt||ue!==Yt||ge!==Zt)&&(e.stencilFunc(rt,Yt,Zt),ne=rt,ue=Yt,ge=Zt)},setOp:function(rt,Yt,Zt){(re!==rt||Ae!==Yt||Me!==Zt)&&(e.stencilOp(rt,Yt,Zt),re=rt,Ae=Yt,Me=Zt)},setLocked:function(rt){U=rt},setClear:function(rt){pt!==rt&&(e.clearStencil(rt),pt=rt)},reset:function(){U=!1,se=null,ne=null,ue=null,ge=null,re=null,Ae=null,Me=null,pt=null}}}const a=new n,o=new i,s=new r,l=new WeakMap,u=new WeakMap;let d={},p={},c={},_=new WeakMap,m=[],E=null,h=!1,f=null,y=null,T=null,S=null,M=null,b=null,R=null,v=new Qe(0,0,0),w=0,D=!1,C=null,N=null,Q=null,K=null,j=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,k=0;const ee=e.getParameter(e.VERSION);ee.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),P=k>=1):ee.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),P=k>=2);let ae=null,X={};const te=e.getParameter(e.SCISSOR_BOX),ve=e.getParameter(e.VIEWPORT),Ue=new Nt().fromArray(te),G=new Nt().fromArray(ve);function L(U,se,ne,ue){const ge=new Uint8Array(4),re=e.createTexture();e.bindTexture(U,re),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<ne;Ae++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(se,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,ge):e.texImage2D(se+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return re}const $={};$[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),$[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),$[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),J(e.DEPTH_TEST),o.setFunc(wo),Ye(!1),lt(rs),J(e.CULL_FACE),Ve(sn);function J(U){d[U]!==!0&&(e.enable(U),d[U]=!0)}function be(U){d[U]!==!1&&(e.disable(U),d[U]=!1)}function ye(U,se){return c[U]!==se?(e.bindFramebuffer(U,se),c[U]=se,U===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=se),U===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=se),!0):!1}function _e(U,se){let ne=m,ue=!1;if(U){ne=_.get(se),ne===void 0&&(ne=[],_.set(se,ne));const ge=U.textures;if(ne.length!==ge.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let re=0,Ae=ge.length;re<Ae;re++)ne[re]=e.COLOR_ATTACHMENT0+re;ne.length=ge.length,ue=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,ue=!0);ue&&e.drawBuffers(ne)}function $e(U){return E!==U?(e.useProgram(U),E=U,!0):!1}const Ne={[li]:e.FUNC_ADD,[Qf]:e.FUNC_SUBTRACT,[Zf]:e.FUNC_REVERSE_SUBTRACT};Ne[nd]=e.MIN,Ne[id]=e.MAX;const We={[hu]:e.ZERO,[du]:e.ONE,[uu]:e.SRC_COLOR,[fu]:e.SRC_ALPHA,[cu]:e.SRC_ALPHA_SATURATE,[lu]:e.DST_COLOR,[su]:e.DST_ALPHA,[ou]:e.ONE_MINUS_SRC_COLOR,[au]:e.ONE_MINUS_SRC_ALPHA,[ru]:e.ONE_MINUS_DST_COLOR,[iu]:e.ONE_MINUS_DST_ALPHA,[nu]:e.CONSTANT_COLOR,[tu]:e.ONE_MINUS_CONSTANT_COLOR,[eu]:e.CONSTANT_ALPHA,[Jf]:e.ONE_MINUS_CONSTANT_ALPHA};function Ve(U,se,ne,ue,ge,re,Ae,Me,pt,rt){if(U===sn){h===!0&&(be(e.BLEND),h=!1);return}if(h===!1&&(J(e.BLEND),h=!0),U!==zu){if(U!==f||rt!==D){if((y!==li||M!==li)&&(e.blendEquation(e.FUNC_ADD),y=li,M=li),rt)switch(U){case er:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ss:e.blendFunc(e.ONE,e.ONE);break;case os:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case as:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:st("WebGLState: Invalid blending: ",U);break}else switch(U){case er:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ss:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case os:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case as:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",U);break}T=null,S=null,b=null,R=null,v.set(0,0,0),w=0,f=U,D=rt}return}ge=ge||se,re=re||ne,Ae=Ae||ue,(se!==y||ge!==M)&&(e.blendEquationSeparate(Ne[se],Ne[ge]),y=se,M=ge),(ne!==T||ue!==S||re!==b||Ae!==R)&&(e.blendFuncSeparate(We[ne],We[ue],We[re],We[Ae]),T=ne,S=ue,b=re,R=Ae),(Me.equals(v)===!1||pt!==w)&&(e.blendColor(Me.r,Me.g,Me.b,pt),v.copy(Me),w=pt),f=U,D=!1}function Be(U,se){U.side===hn?be(e.CULL_FACE):J(e.CULL_FACE);let ne=U.side===Ot;se&&(ne=!ne),Ye(ne),U.blending===er&&U.transparent===!1?Ve(sn):Ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),a.setMask(U.colorWrite);const ue=U.stencilWrite;s.setTest(ue),ue&&(s.setMask(U.stencilWriteMask),s.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),s.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(U){C!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),C=U)}function lt(U){U!==Hu?(J(e.CULL_FACE),U!==N&&(U===rs?e.cullFace(e.BACK):U===Vu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),N=U}function Et(U){U!==Q&&(P&&e.lineWidth(U),Q=U)}function Mt(U,se,ne){U?(J(e.POLYGON_OFFSET_FILL),(K!==se||j!==ne)&&(K=se,j=ne,o.getReversed()&&(se=-se),e.polygonOffset(se,ne))):be(e.POLYGON_OFFSET_FILL)}function ht(U){U?J(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function vt(U){U===void 0&&(U=e.TEXTURE0+q-1),ae!==U&&(e.activeTexture(U),ae=U)}function O(U,se,ne){ne===void 0&&(ae===null?ne=e.TEXTURE0+q-1:ne=ae);let ue=X[ne];ue===void 0&&(ue={type:void 0,texture:void 0},X[ne]=ue),(ue.type!==U||ue.texture!==se)&&(ae!==ne&&(e.activeTexture(ne),ae=ne),e.bindTexture(U,se||$[U]),ue.type=U,ue.texture=se)}function Lt(){const U=X[ae];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ze(){try{e.compressedTexImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function g(){try{e.texSubImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function B(){try{e.texSubImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function oe(){try{e.texStorage2D(...arguments)}catch(U){st("WebGLState:",U)}}function le(){try{e.texStorage3D(...arguments)}catch(U){st("WebGLState:",U)}}function Z(){try{e.texImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function ie(){try{e.texImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function ce(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function Re(U,se){p[U]!==se&&(e.pixelStorei(U,se),p[U]=se)}function de(U){Ue.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function fe(U){G.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),G.copy(U))}function De(U,se){let ne=u.get(se);ne===void 0&&(ne=new WeakMap,u.set(se,ne));let ue=ne.get(U);ue===void 0&&(ue=e.getUniformBlockIndex(se,U.name),ne.set(U,ue))}function Le(U,se){const ue=u.get(se).get(U);l.get(se)!==ue&&(e.uniformBlockBinding(se,ue,U.__bindingPointIndex),l.set(se,ue))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},p={},ae=null,X={},c={},_=new WeakMap,m=[],E=null,h=!1,f=null,y=null,T=null,S=null,M=null,b=null,R=null,v=new Qe(0,0,0),w=0,D=!1,C=null,N=null,Q=null,K=null,j=null,Ue.set(0,0,e.canvas.width,e.canvas.height),G.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:J,disable:be,bindFramebuffer:ye,drawBuffers:_e,useProgram:$e,setBlending:Ve,setMaterial:Be,setFlipSided:Ye,setCullFace:lt,setLineWidth:Et,setPolygonOffset:Mt,setScissorTest:ht,activeTexture:vt,bindTexture:O,unbindTexture:Lt,compressedTexImage2D:Ze,compressedTexImage3D:A,texImage2D:Z,texImage3D:ie,pixelStorei:Re,getParameter:ce,updateUBOMapping:De,uniformBlockBinding:Le,texStorage2D:oe,texStorage3D:le,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:z,compressedTexSubImage3D:Y,scissor:de,viewport:fe,reset:Oe}}function _g(e,t,n,i,r,a,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,d=new WeakMap,p=new Set;let c;const _=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,g){return m?new OffscreenCanvas(A,g):Yu("canvas")}function h(A,g,B){let z=1;const Y=Ze(A);if((Y.width>B||Y.height>B)&&(z=B/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(z*Y.width),le=Math.floor(z*Y.height);c===void 0&&(c=E(oe,le));const Z=g?E(oe,le):c;return Z.width=oe,Z.height=le,Z.getContext("2d").drawImage(A,0,0,oe,le),Ke("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+oe+"x"+le+")."),Z}else return"data"in A&&Ke("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function f(A){return A.generateMipmaps}function y(A){e.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(A,g,B,z,Y,oe=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;z&&(le=t.get("EXT_texture_norm16"),le||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&le&&(Z=le.R16_EXT),B===e.SHORT&&le&&(Z=le.R16_SNORM_EXT)),g===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),g===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&le&&(Z=le.RG16_EXT),B===e.SHORT&&le&&(Z=le.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),g===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),g===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),g===e.RGB&&(B===e.UNSIGNED_SHORT&&le&&(Z=le.RGB16_EXT),B===e.SHORT&&le&&(Z=le.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),g===e.RGBA){const ie=oe?hc:dt.getTransfer(Y);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=ie===ot?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&le&&(Z=le.RGBA16_EXT),B===e.SHORT&&le&&(Z=le.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(A,g){let B;return A?g===null||g===Bn||g===Ai?B=e.DEPTH24_STENCIL8:g===An?B=e.DEPTH32F_STENCIL8:g===sr&&(B=e.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bn||g===Ai?B=e.DEPTH_COMPONENT24:g===An?B=e.DEPTH_COMPONENT32F:g===sr&&(B=e.DEPTH_COMPONENT16),B}function b(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==On&&A.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),w(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function v(A){const g=A.target;g.removeEventListener("dispose",v),C(g)}function w(A){const g=i.get(A);if(g.__webglInit===void 0)return;const B=A.source,z=_.get(B);if(z){const Y=z[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&D(A),Object.keys(z).length===0&&_.delete(B)}i.remove(A)}function D(A){const g=i.get(A);e.deleteTexture(g.__webglTexture);const B=A.source,z=_.get(B);delete z[g.__cacheKey],o.memory.textures--}function C(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let Y=0;Y<g.__webglFramebuffer[z].length;Y++)e.deleteFramebuffer(g.__webglFramebuffer[z][Y]);else e.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)e.deleteFramebuffer(g.__webglFramebuffer[z]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=A.textures;for(let z=0,Y=B.length;z<Y;z++){const oe=i.get(B[z]);oe.__webglTexture&&(e.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(B[z])}i.remove(A)}let N=0;function Q(){N=0}function K(){return N}function j(A){N=A}function q(){const A=N;return A>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function P(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function k(A,g){const B=i.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const z=A.image;if(z===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{be(B,A,g);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+g)}function ee(A,g){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){be(B,A,g);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+g)}function ae(A,g){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){be(B,A,g);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+g)}function X(A,g){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){ye(B,A,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+g)}const te={[_u]:e.REPEAT,[ya]:e.CLAMP_TO_EDGE,[pu]:e.MIRRORED_REPEAT},ve={[On]:e.NEAREST,[mu]:e.NEAREST_MIPMAP_NEAREST,[Ui]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[Ur]:e.LINEAR_MIPMAP_NEAREST,[Yn]:e.LINEAR_MIPMAP_LINEAR},Ue={[Eu]:e.NEVER,[Su]:e.ALWAYS,[xu]:e.LESS,[Za]:e.LEQUAL,[bu]:e.EQUAL,[Ya]:e.GEQUAL,[vu]:e.GREATER,[gu]:e.NOTEQUAL};function G(A,g){if(g.type===An&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===Ur||g.magFilter===Ui||g.magFilter===Yn||g.minFilter===Vt||g.minFilter===Ur||g.minFilter===Ui||g.minFilter===Yn)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,te[g.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,te[g.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,te[g.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ve[g.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Ue[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===On||g.minFilter!==Ui&&g.minFilter!==Yn||g.type===An&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function L(A,g){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const z=g.source;let Y=_.get(z);Y===void 0&&(Y={},_.set(z,Y));const oe=P(g);if(oe!==A.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[oe].usedTimes++;const le=Y[A.__cacheKey];le!==void 0&&(Y[A.__cacheKey].usedTimes--,le.usedTimes===0&&D(g)),A.__cacheKey=oe,A.__webglTexture=Y[oe].texture}return B}function $(A,g,B){return Math.floor(Math.floor(A/B)/g)}function J(A,g,B,z){const oe=A.updateRanges;if(oe.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,B,z,g.data);else{oe.sort((Re,de)=>Re.start-de.start);let le=0;for(let Re=1;Re<oe.length;Re++){const de=oe[le],fe=oe[Re],De=de.start+de.count,Le=$(fe.start,g.width,4),Oe=$(de.start,g.width,4);fe.start<=De+1&&Le===Oe&&$(fe.start+fe.count-1,g.width,4)===Le?de.count=Math.max(de.count,fe.start+fe.count-de.start):(++le,oe[le]=fe)}oe.length=le+1;const Z=n.getParameter(e.UNPACK_ROW_LENGTH),ie=n.getParameter(e.UNPACK_SKIP_PIXELS),ce=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let Re=0,de=oe.length;Re<de;Re++){const fe=oe[Re],De=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Oe=De%g.width,U=Math.floor(De/g.width),se=Le,ne=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Oe,U,se,ne,B,z,g.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(e.UNPACK_SKIP_ROWS,ce)}}function be(A,g,B){let z=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=e.TEXTURE_3D);const Y=L(A,g),oe=g.source;n.bindTexture(z,A.__webglTexture,e.TEXTURE0+B);const le=i.get(oe);if(oe.version!==le.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ne=dt.getPrimaries(dt.workingColorSpace),ue=g.colorSpace===Kn?null:dt.getPrimaries(g.colorSpace),ge=g.colorSpace===Kn||ne===ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let ie=h(g.image,!1,r.maxTextureSize);ie=Lt(g,ie);const ce=a.convert(g.format,g.colorSpace),Re=a.convert(g.type);let de=S(g.internalFormat,ce,Re,g.normalized,g.colorSpace,g.isVideoTexture);G(z,g);let fe;const De=g.mipmaps,Le=g.isVideoTexture!==!0,Oe=le.__version===void 0||Y===!0,U=oe.dataReady,se=b(g,ie);if(g.isDepthTexture)de=M(g.format===Zn,g.type),Oe&&(Le?n.texStorage2D(e.TEXTURE_2D,1,de,ie.width,ie.height):n.texImage2D(e.TEXTURE_2D,0,de,ie.width,ie.height,0,ce,Re,null));else if(g.isDataTexture)if(De.length>0){Le&&Oe&&n.texStorage2D(e.TEXTURE_2D,se,de,De[0].width,De[0].height);for(let ne=0,ue=De.length;ne<ue;ne++)fe=De[ne],Le?U&&n.texSubImage2D(e.TEXTURE_2D,ne,0,0,fe.width,fe.height,ce,Re,fe.data):n.texImage2D(e.TEXTURE_2D,ne,de,fe.width,fe.height,0,ce,Re,fe.data);g.generateMipmaps=!1}else Le?(Oe&&n.texStorage2D(e.TEXTURE_2D,se,de,ie.width,ie.height),U&&J(g,ie,ce,Re)):n.texImage2D(e.TEXTURE_2D,0,de,ie.width,ie.height,0,ce,Re,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Le&&Oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,se,de,De[0].width,De[0].height,ie.depth);for(let ne=0,ue=De.length;ne<ue;ne++)if(fe=De[ne],g.format!==mn)if(ce!==null)if(Le){if(U)if(g.layerUpdates.size>0){const ge=cs(fe.width,fe.height,g.format,g.type);for(const re of g.layerUpdates){const Ae=fe.data.subarray(re*ge/fe.data.BYTES_PER_ELEMENT,(re+1)*ge/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ne,0,0,re,fe.width,fe.height,1,ce,Ae)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ie.depth,ce,fe.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ne,de,fe.width,fe.height,ie.depth,0,fe.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ie.depth,ce,Re,fe.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ne,de,fe.width,fe.height,ie.depth,0,ce,Re,fe.data)}else{Le&&Oe&&n.texStorage2D(e.TEXTURE_2D,se,de,De[0].width,De[0].height);for(let ne=0,ue=De.length;ne<ue;ne++)fe=De[ne],g.format!==mn?ce!==null?Le?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,ne,0,0,fe.width,fe.height,ce,fe.data):n.compressedTexImage2D(e.TEXTURE_2D,ne,de,fe.width,fe.height,0,fe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&n.texSubImage2D(e.TEXTURE_2D,ne,0,0,fe.width,fe.height,ce,Re,fe.data):n.texImage2D(e.TEXTURE_2D,ne,de,fe.width,fe.height,0,ce,Re,fe.data)}else if(g.isDataArrayTexture)if(Le){if(Oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,se,de,ie.width,ie.height,ie.depth),U)if(g.layerUpdates.size>0){const ne=cs(ie.width,ie.height,g.format,g.type);for(const ue of g.layerUpdates){const ge=ie.data.subarray(ue*ne/ie.data.BYTES_PER_ELEMENT,(ue+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ue,ie.width,ie.height,1,ce,Re,ge)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ce,Re,ie.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,de,ie.width,ie.height,ie.depth,0,ce,Re,ie.data);else if(g.isData3DTexture)Le?(Oe&&n.texStorage3D(e.TEXTURE_3D,se,de,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ce,Re,ie.data)):n.texImage3D(e.TEXTURE_3D,0,de,ie.width,ie.height,ie.depth,0,ce,Re,ie.data);else if(g.isFramebufferTexture){if(Oe)if(Le)n.texStorage2D(e.TEXTURE_2D,se,de,ie.width,ie.height);else{let ne=ie.width,ue=ie.height;for(let ge=0;ge<se;ge++)n.texImage2D(e.TEXTURE_2D,ge,de,ne,ue,0,ce,Re,null),ne>>=1,ue>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){const ne=e.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),p.add(g),ne.onpaint=ue=>{const ge=ue.changedElements;for(const re of p)ge.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ie);else{const ge=e.RGBA,re=e.RGBA,Ae=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ge,re,Ae,ie)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(De.length>0){if(Le&&Oe){const ne=Ze(De[0]);n.texStorage2D(e.TEXTURE_2D,se,de,ne.width,ne.height)}for(let ne=0,ue=De.length;ne<ue;ne++)fe=De[ne],Le?U&&n.texSubImage2D(e.TEXTURE_2D,ne,0,0,ce,Re,fe):n.texImage2D(e.TEXTURE_2D,ne,de,ce,Re,fe);g.generateMipmaps=!1}else if(Le){if(Oe){const ne=Ze(ie);n.texStorage2D(e.TEXTURE_2D,se,de,ne.width,ne.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,Re,ie)}else n.texImage2D(e.TEXTURE_2D,0,de,ce,Re,ie);f(g)&&y(z),le.__version=oe.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function ye(A,g,B){if(g.image.length!==6)return;const z=L(A,g),Y=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);const oe=i.get(Y);if(Y.version!==oe.__version||z===!0){n.activeTexture(e.TEXTURE0+B);const le=dt.getPrimaries(dt.workingColorSpace),Z=g.colorSpace===Kn?null:dt.getPrimaries(g.colorSpace),ie=g.colorSpace===Kn||le===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ce=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!ce&&!Re?de[re]=h(g.image[re],!0,r.maxCubemapSize):de[re]=Re?g.image[re].image:g.image[re],de[re]=Lt(g,de[re]);const fe=de[0],De=a.convert(g.format,g.colorSpace),Le=a.convert(g.type),Oe=S(g.internalFormat,De,Le,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,se=oe.__version===void 0||z===!0,ne=Y.dataReady;let ue=b(g,fe);G(e.TEXTURE_CUBE_MAP,g);let ge;if(ce){U&&se&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Oe,fe.width,fe.height);for(let re=0;re<6;re++){ge=de[re].mipmaps;for(let Ae=0;Ae<ge.length;Ae++){const Me=ge[Ae];g.format!==mn?De!==null?U?ne&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Me.width,Me.height,De,Me.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,Oe,Me.width,Me.height,0,Me.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Me.width,Me.height,De,Le,Me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,Oe,Me.width,Me.height,0,De,Le,Me.data)}}}else{if(ge=g.mipmaps,U&&se){ge.length>0&&ue++;const re=Ze(de[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Oe,re.width,re.height)}for(let re=0;re<6;re++)if(Re){U?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,De,Le,de[re].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Oe,de[re].width,de[re].height,0,De,Le,de[re].data);for(let Ae=0;Ae<ge.length;Ae++){const pt=ge[Ae].image[re].image;U?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,pt.width,pt.height,De,Le,pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,Oe,pt.width,pt.height,0,De,Le,pt.data)}}else{U?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Le,de[re]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Oe,De,Le,de[re]);for(let Ae=0;Ae<ge.length;Ae++){const Me=ge[Ae];U?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,De,Le,Me.image[re]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,Oe,De,Le,Me.image[re])}}}f(g)&&y(e.TEXTURE_CUBE_MAP),oe.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function _e(A,g,B,z,Y,oe){const le=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),ie=S(B.internalFormat,le,Z,B.normalized,B.colorSpace),ce=i.get(g),Re=i.get(B);if(Re.__renderTarget=g,!ce.__hasExternalTextures){const de=Math.max(1,g.width>>oe),fe=Math.max(1,g.height>>oe);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,oe,ie,de,fe,g.depth,0,le,Z,null):n.texImage2D(Y,oe,ie,de,fe,0,le,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),vt(g)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Y,Re.__webglTexture,0,ht(g)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Y,Re.__webglTexture,oe),n.bindFramebuffer(e.FRAMEBUFFER,null)}function $e(A,g,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),g.depthBuffer){const z=g.depthTexture,Y=z&&z.isDepthTexture?z.type:null,oe=M(g.stencilBuffer,Y),le=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;vt(g)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ht(g),oe,g.width,g.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ht(g),oe,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,oe,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,A)}else{const z=g.textures;for(let Y=0;Y<z.length;Y++){const oe=z[Y],le=a.convert(oe.format,oe.colorSpace),Z=a.convert(oe.type),ie=S(oe.internalFormat,le,Z,oe.normalized,oe.colorSpace);vt(g)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ht(g),ie,g.width,g.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ht(g),ie,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ie,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ne(A,g,B){const z=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),G(e.TEXTURE_CUBE_MAP,g.depthTexture);const ce=a.convert(g.depthTexture.format),Re=a.convert(g.depthTexture.type);let de;g.depthTexture.format===ei?de=e.DEPTH_COMPONENT24:g.depthTexture.format===Zn&&(de=e.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,de,g.width,g.height,0,ce,Re,null)}}else k(g.depthTexture,0);const oe=Y.__webglTexture,le=ht(g),Z=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ie=g.depthTexture.format===Zn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===ei)vt(g)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,Z,oe,0,le):e.framebufferTexture2D(e.FRAMEBUFFER,ie,Z,oe,0);else if(g.depthTexture.format===Zn)vt(g)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,Z,oe,0,le):e.framebufferTexture2D(e.FRAMEBUFFER,ie,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(A){const g=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const z=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=z}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let z=0;z<6;z++)Ne(g.__webglFramebuffer[z],A,z);else{const z=A.texture.mipmaps;z&&z.length>0?Ne(g.__webglFramebuffer[0],A,0):Ne(g.__webglFramebuffer,A,0)}else if(B){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=e.createRenderbuffer(),$e(g.__webglDepthbuffer[z],A,!1);else{const Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,oe)}}else{const z=A.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),$e(g.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,oe)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ve(A,g,B){const z=i.get(A);g!==void 0&&_e(z.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&We(A)}function Be(A){const g=A.texture,B=i.get(A),z=i.get(g);A.addEventListener("dispose",v);const Y=A.textures,oe=A.isWebGLCubeRenderTarget===!0,le=Y.length>1;if(le||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=g.version,o.memory.textures++),oe){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let ie=0;ie<g.mipmaps.length;ie++)B.__webglFramebuffer[Z][ie]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(le)for(let Z=0,ie=Y.length;Z<ie;Z++){const ce=i.get(Y[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=e.createTexture(),o.memory.textures++)}if(A.samples>0&&vt(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const ie=Y[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ce=a.convert(ie.format,ie.colorSpace),Re=a.convert(ie.type),de=S(ie.internalFormat,ce,Re,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),fe=ht(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,fe,de,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),$e(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(oe){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),G(e.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)_e(B.__webglFramebuffer[Z][ie],A,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie);else _e(B.__webglFramebuffer[Z],A,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(g)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let Z=0,ie=Y.length;Z<ie;Z++){const ce=Y[Z],Re=i.get(ce);let de=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(de,Re.__webglTexture),G(de,ce),_e(B.__webglFramebuffer,A,ce,e.COLOR_ATTACHMENT0+Z,de,0),f(ce)&&y(de)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,z.__webglTexture),G(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)_e(B.__webglFramebuffer[ie],A,g,e.COLOR_ATTACHMENT0,Z,ie);else _e(B.__webglFramebuffer,A,g,e.COLOR_ATTACHMENT0,Z,0);f(g)&&y(Z),n.unbindTexture()}A.depthBuffer&&We(A)}function Ye(A){const g=A.textures;for(let B=0,z=g.length;B<z;B++){const Y=g[B];if(f(Y)){const oe=T(A),le=i.get(Y).__webglTexture;n.bindTexture(oe,le),y(oe),n.unbindTexture()}}}const lt=[],Et=[];function Mt(A){if(A.samples>0){if(vt(A)===!1){const g=A.textures,B=A.width,z=A.height;let Y=e.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=i.get(A),Z=g.length>1;if(Z)for(let ce=0;ce<g.length;ce++)n.bindFramebuffer(e.FRAMEBUFFER,le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ie=A.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Re=i.get(g[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Re,0)}e.blitFramebuffer(0,0,B,z,0,0,B,z,Y,e.NEAREST),l===!0&&(lt.length=0,Et.length=0,lt.push(e.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(lt.push(oe),Et.push(oe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Et)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<g.length;ce++){n.bindFramebuffer(e.FRAMEBUFFER,le.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Re=i.get(g[ce]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,le.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,Re,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function ht(A){return Math.min(r.maxSamples,A.samples)}function vt(A){const g=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(A){const g=o.render.frame;d.get(A)!==g&&(d.set(A,g),A.update())}function Lt(A,g){const B=A.colorSpace,z=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==pc&&B!==Kn&&(dt.getTransfer(B)===ot?(z!==mn||Y!==nn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",B)),g}function Ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.getTextureUnits=K,this.setTextureUnits=j,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=ae,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function mg(e,t){function n(i,r=Kn){let a;const o=dt.getTransfer(r);if(i===nn)return e.UNSIGNED_BYTE;if(i===Zl)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return e.UNSIGNED_SHORT_5_5_5_1;if(i===wu)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ru)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cu)return e.BYTE;if(i===Pu)return e.SHORT;if(i===sr)return e.UNSIGNED_SHORT;if(i===tc)return e.INT;if(i===Bn)return e.UNSIGNED_INT;if(i===An)return e.FLOAT;if(i===xn)return e.HALF_FLOAT;if(i===Du)return e.ALPHA;if(i===Lu)return e.RGB;if(i===mn)return e.RGBA;if(i===ei)return e.DEPTH_COMPONENT;if(i===Zn)return e.DEPTH_STENCIL;if(i===Iu)return e.RED;if(i===Yl)return e.RED_INTEGER;if(i===ti)return e.RG;if(i===Kl)return e.RG_INTEGER;if(i===ql)return e.RGBA_INTEGER;if(i===Nr||i===Or||i===Fr||i===Br)if(o===ot)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ro||i===Co||i===Po||i===Do)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ro)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Co)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Po)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Do)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lo||i===Io||i===Uo||i===No||i===Oo||i===Ma||i===Fo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Lo||i===Io)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Uo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===No)return a.COMPRESSED_R11_EAC;if(i===Oo)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ma)return a.COMPRESSED_RG11_EAC;if(i===Fo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bo||i===ko||i===Go||i===Ho||i===Vo||i===zo||i===Wo||i===jo||i===Xo||i===$o||i===qo||i===Ko||i===Yo||i===Zo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ko)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Go)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Jo||i===es)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Qo)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===es)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ts||i===ns||i===Ta||i===is)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ts)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ns)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===is)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ai?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Jl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Kt({vertexShader:gg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new ec(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xg extends Xf{constructor(t,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,d=null,p=null,c=null,_=null,m=null;const E=typeof XRWebGLBinding<"u",h=new bg,f={},y=n.getContextAttributes();let T=null,S=null;const M=[],b=[],R=new Ge;let v=null;const w=new xi;w.viewport=new Nt;const D=new xi;D.viewport=new Nt;const C=[w,D],N=new $f;let Q=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let $=M[L];return $===void 0&&($=new Ir,M[L]=$),$.getTargetRaySpace()},this.getControllerGrip=function(L){let $=M[L];return $===void 0&&($=new Ir,M[L]=$),$.getGripSpace()},this.getHand=function(L){let $=M[L];return $===void 0&&($=new Ir,M[L]=$),$.getHandSpace()};function j(L){const $=b.indexOf(L.inputSource);if($===-1)return;const J=M[$];J!==void 0&&(J.update(L.inputSource,L.frame,u||o),J.dispatchEvent({type:L.type,data:L.inputSource}))}function q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",P);for(let L=0;L<M.length;L++){const $=b[L];$!==null&&(b[L]=null,M[L].disconnect($))}Q=null,K=null,h.reset();for(const L in f)delete f[L];t.setRenderTarget(T),_=null,c=null,p=null,r=null,S=null,G.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){s=L,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return c!==null?c:_},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",q),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,be=null,ye=null;y.depth&&(ye=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=y.stencil?Zn:ei,be=y.stencil?Ai:Bn);const _e={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:a};p=this.getBinding(),c=p.createProjectionLayer(_e),r.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),S=new qt(c.textureWidth,c.textureHeight,{format:mn,type:nn,depthTexture:new Ti(c.textureWidth,c.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),S=new qt(_.framebufferWidth,_.framebufferHeight,{format:mn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function P(L){for(let $=0;$<L.removed.length;$++){const J=L.removed[$],be=b.indexOf(J);be>=0&&(b[be]=null,M[be].disconnect(J))}for(let $=0;$<L.added.length;$++){const J=L.added[$];let be=b.indexOf(J);if(be===-1){for(let _e=0;_e<M.length;_e++)if(_e>=b.length){b.push(J),be=_e;break}else if(b[_e]===null){b[_e]=J,be=_e;break}if(be===-1)break}const ye=M[be];ye&&ye.connect(J)}}const k=new Ee,ee=new Ee;function ae(L,$,J){k.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(J.matrixWorld);const be=k.distanceTo(ee),ye=$.projectionMatrix.elements,_e=J.projectionMatrix.elements,$e=ye[14]/(ye[10]-1),Ne=ye[14]/(ye[10]+1),We=(ye[9]+1)/ye[5],Ve=(ye[9]-1)/ye[5],Be=(ye[8]-1)/ye[0],Ye=(_e[8]+1)/_e[0],lt=$e*Be,Et=$e*Ye,Mt=be/(-Be+Ye),ht=Mt*-Be;if($.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ht),L.translateZ(Mt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),ye[10]===-1)L.projectionMatrix.copy($.projectionMatrix),L.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const vt=$e+Mt,O=Ne+Mt,Lt=lt-ht,Ze=Et+(be-ht),A=We*Ne/O*vt,g=Ve*Ne/O*vt;L.projectionMatrix.makePerspective(Lt,Ze,A,g,vt,O),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function X(L,$){$===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices($.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let $=L.near,J=L.far;h.texture!==null&&(h.depthNear>0&&($=h.depthNear),h.depthFar>0&&(J=h.depthFar)),N.near=D.near=w.near=$,N.far=D.far=w.far=J,(Q!==N.near||K!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),Q=N.near,K=N.far),N.layers.mask=L.layers.mask|6,w.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;const be=L.parent,ye=N.cameras;X(N,be);for(let _e=0;_e<ye.length;_e++)X(ye[_e],be);ye.length===2?ae(N,w,D):N.projectionMatrix.copy(w.projectionMatrix),te(L,N,be)};function te(L,$,J){J===null?L.matrix.copy($.matrixWorld):(L.matrix.copy(J.matrixWorld),L.matrix.invert(),L.matrix.multiply($.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy($.projectionMatrix),L.projectionMatrixInverse.copy($.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=qf*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(c===null&&_===null))return l},this.setFoveation=function(L){l=L,c!==null&&(c.fixedFoveation=L),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=L)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(N)},this.getCameraTexture=function(L){return f[L]};let ve=null;function Ue(L,$){if(d=$.getViewerPose(u||o),m=$,d!==null){const J=d.views;_!==null&&(t.setRenderTargetFramebuffer(S,_.framebuffer),t.setRenderTarget(S));let be=!1;J.length!==N.cameras.length&&(N.cameras.length=0,be=!0);for(let Ne=0;Ne<J.length;Ne++){const We=J[Ne];let Ve=null;if(_!==null)Ve=_.getViewport(We);else{const Ye=p.getViewSubImage(c,We);Ve=Ye.viewport,Ne===0&&(t.setRenderTargetTextures(S,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(S))}let Be=C[Ne];Be===void 0&&(Be=new xi,Be.layers.enable(Ne),Be.viewport=new Nt,C[Ne]=Be),Be.matrix.fromArray(We.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(We.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ne===0&&(N.matrix.copy(Be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),be===!0&&N.cameras.push(Be)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Ne=p.getDepthInformation(J[0]);Ne&&Ne.isValid&&Ne.texture&&h.init(Ne,r.renderState)}if(ye&&ye.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let Ne=0;Ne<J.length;Ne++){const We=J[Ne].camera;if(We){let Ve=f[We];Ve||(Ve=new Jl,f[We]=Ve);const Be=p.getCameraImage(We);Ve.sourceTexture=Be}}}}for(let J=0;J<M.length;J++){const be=b[J],ye=M[J];be!==null&&ye!==void 0&&ye.update(be,$,u||o)}ve&&ve(L,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}const G=new Ec;G.setAnimationLoop(Ue),this.setAnimationLoop=function(L){ve=L},this.dispose=function(){}}}const Sg=new Cn,Cc=new je;Cc.set(-1,0,0,0,1,0,0,0,1);function Eg(e,t){function n(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,rc(e)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,y,T,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(h,f):f.isMeshLambertMaterial?(a(h,f),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(h,f),p(h,f)):f.isMeshPhongMaterial?(a(h,f),d(h,f),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(h,f),c(h,f),f.isMeshPhysicalMaterial&&_(h,f,S)):f.isMeshMatcapMaterial?(a(h,f),m(h,f)):f.isMeshDepthMaterial?a(h,f):f.isMeshDistanceMaterial?(a(h,f),E(h,f)):f.isMeshNormalMaterial?a(h,f):f.isLineBasicMaterial?(o(h,f),f.isLineDashedMaterial&&s(h,f)):f.isPointsMaterial?l(h,f,y,T):f.isSpriteMaterial?u(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,n(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,n(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,n(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Ot&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,n(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Ot&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,n(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,n(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const y=t.get(f),T=y.envMap,S=y.envMapRotation;T&&(h.envMap.value=T,h.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(Cc),h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,h.aoMapTransform))}function o(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,n(f.map,h.mapTransform))}function s(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,y,T){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*y,h.scale.value=T*.5,f.map&&(h.map.value=f.map,n(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,n(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,n(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,n(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function p(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function c(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function _(h,f,y){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,f){f.matcap&&(h.matcap.value=f.matcap)}function E(h,f){const y=t.get(f).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yg(e,t,n,i){let r={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const b=M.program;i.uniformBlockBinding(S,b)}function u(S,M){let b=r[S.id];b===void 0&&(h(S),b=d(S),r[S.id]=b,S.addEventListener("dispose",y));const R=M.program;i.updateUBOMapping(S,R);const v=t.render.frame;a[S.id]!==v&&(c(S),a[S.id]=v)}function d(S){const M=p();S.__bindingPointIndex=M;const b=e.createBuffer(),R=S.__size,v=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,R,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,b),b}function p(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const M=r[S.id],b=S.uniforms,R=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let v=0,w=b.length;v<w;v++){const D=b[v];if(Array.isArray(D))for(let C=0,N=D.length;C<N;C++)_(D[C],v,C,R);else _(D,v,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(S,M,b,R){if(E(S,M,b,R)===!0){const v=S.__offset,w=S.value;if(Array.isArray(w)){let D=0;for(let C=0;C<w.length;C++){const N=w[C],Q=f(N);m(N,S.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,S.__data)}}function m(S,M,b){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,b)}function E(S,M,b,R){const v=S.value,w=M+"_"+b;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{const D=R[w];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function h(S){const M=S.uniforms;let b=0;const R=16;for(let w=0,D=M.length;w<D;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,Q=C.length;N<Q;N++){const K=C[N],j=Array.isArray(K.value)?K.value:[K.value];for(let q=0,P=j.length;q<P;q++){const k=j[q],ee=f(k),ae=b%R,X=ae%ee.boundary,te=ae+X;b+=X,te!==0&&R-te<ee.storage&&(b+=R-te),K.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=ee.storage}}}const v=b%R;return v>0&&(b+=R-v),S.__size=b,S.__cache={},this}function f(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",S),M}function y(S){const M=S.target;M.removeEventListener("dispose",y);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function T(){for(const S in r)e.deleteBuffer(r[S]);o=[],r={},a={}}return{bind:l,update:u,dispose:T}}const Mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function Tg(){return Jt===null&&(Jt=new Kf(Mg,16,16,ti,xn),Jt.name="DFG_LUT",Jt.minFilter=Vt,Jt.magFilter=Vt,Jt.wrapS=ya,Jt.wrapT=ya,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Ag{constructor(t={}){const{canvas:n=zf(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:_=nn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const E=_,h=new Set([ql,Kl,Yl]),f=new Set([nn,Bn,sr,Ai,Zl,Ql]),y=new Uint32Array(4),T=new Int32Array(4),S=new Ee;let M=null,b=null;const R=[],v=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let C=!1,N=null,Q=null,K=null,j=null;this._outputColorSpace=jl;let q=0,P=0,k=null,ee=-1,ae=null;const X=new Nt,te=new Nt;let ve=null;const Ue=new Qe(0);let G=0,L=n.width,$=n.height,J=1,be=null,ye=null;const _e=new Nt(0,0,L,$),$e=new Nt(0,0,L,$);let Ne=!1;const We=new $l;let Ve=!1,Be=!1;const Ye=new Cn,lt=new Ee,Et=new Nt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function vt(){return k===null?J:1}let O=i;function Lt(x,F){return n.getContext(x,F)}try{const x={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xl}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",Yt,!1),O===null){const F="webgl2";if(O=Lt(F,x),O===null)throw Lt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw st("WebGLRenderer: "+x.message),x}let Ze,A,g,B,z,Y,oe,le,Z,ie,ce,Re,de,fe,De,Le,Oe,U,se,ne,ue,ge,re;function Ae(){Ze=new T_(O),Ze.init(),ue=new mg(O,Ze),A=new g_(O,Ze,t,ue),g=new pg(O,Ze),A.reversedDepthBuffer&&c&&g.buffers.depth.setReversed(!0),Q=O.createFramebuffer(),K=O.createFramebuffer(),j=O.createFramebuffer(),B=new R_(O),z=new eg,Y=new _g(O,Ze,g,z,A,ue,B),oe=new M_(D),le=new Ld(O),ge=new __(O,le),Z=new A_(O,le,B,ge),ie=new P_(O,Z,le,ge,B),U=new C_(O,A,Y),De=new v_(z),ce=new Jm(D,oe,Ze,A,ge,De),Re=new Eg(D,z),de=new ng,fe=new lg(Ze),Oe=new p_(D,oe,g,ie,m,l),Le=new hg(D,ie,A),re=new yg(O,B,A,g),se=new m_(O,Ze,B),ne=new w_(O,Ze,B),B.programs=ce.programs,D.capabilities=A,D.extensions=Ze,D.properties=z,D.renderLists=de,D.shadowMap=Le,D.state=g,D.info=B}Ae(),E!==nn&&(w=new L_(E,n.width,n.height,s,r,a));const Me=new xg(D,O);this.xr=Me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const x=Ze.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ze.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(x){x!==void 0&&(J=x,this.setSize(L,$,!1))},this.getSize=function(x){return x.set(L,$)},this.setSize=function(x,F,W=!0){if(Me.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}L=x,$=F,n.width=Math.floor(x*J),n.height=Math.floor(F*J),W===!0&&(n.style.width=x+"px",n.style.height=F+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(L*J,$*J).floor()},this.setDrawingBufferSize=function(x,F,W){L=x,$=F,J=W,n.width=Math.floor(x*W),n.height=Math.floor(F*W),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(E===nn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(X)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,F,W,H){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,F,W,H),g.viewport(X.copy(_e).multiplyScalar(J).round())},this.getScissor=function(x){return x.copy($e)},this.setScissor=function(x,F,W,H){x.isVector4?$e.set(x.x,x.y,x.z,x.w):$e.set(x,F,W,H),g.scissor(te.copy($e).multiplyScalar(J).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(x){g.setScissorTest(Ne=x)},this.setOpaqueSort=function(x){be=x},this.setTransparentSort=function(x){ye=x},this.getClearColor=function(x){return x.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,W=!0){let H=0;if(x){let V=!1;if(k!==null){const me=k.texture.format;V=h.has(me)}if(V){const me=k.texture.type,Se=f.has(me),pe=Oe.getClearColor(),Te=Oe.getClearAlpha(),Ce=pe.r,Fe=pe.g,He=pe.b;Se?(y[0]=Ce,y[1]=Fe,y[2]=He,y[3]=Te,O.clearBufferuiv(O.COLOR,0,y)):(T[0]=Ce,T[1]=Fe,T[2]=He,T[3]=Te,O.clearBufferiv(O.COLOR,0,T))}else H|=O.COLOR_BUFFER_BIT}F&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Yt,!1),Oe.dispose(),de.dispose(),fe.dispose(),z.dispose(),oe.dispose(),ie.dispose(),ge.dispose(),re.dispose(),ce.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",go),Me.removeEventListener("sessionend",vo),Ln.stop()};function pt(x){x.preventDefault(),To("WebGLRenderer: Context Lost."),C=!0}function rt(){To("WebGLRenderer: Context Restored."),C=!1;const x=B.autoReset,F=Le.enabled,W=Le.autoUpdate,H=Le.needsUpdate,V=Le.type;Ae(),B.autoReset=x,Le.enabled=F,Le.autoUpdate=W,Le.needsUpdate=H,Le.type=V}function Yt(x){st("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Zt(x){const F=x.target;F.removeEventListener("dispose",Zt),Nf(F)}function Nf(x){Of(x),z.remove(x)}function Of(x){const F=z.get(x).programs;F!==void 0&&(F.forEach(function(W){ce.releaseProgram(W)}),x.isShaderMaterial&&ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,W,H,V,me){F===null&&(F=Mt);const Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=kf(x,F,W,H,V);g.setMaterial(H,Se);let Te=W.index,Ce=1;if(H.wireframe===!0){if(Te=Z.getWireframeAttribute(W),Te===void 0)return;Ce=2}const Fe=W.drawRange,He=W.attributes.position;let Pe=Fe.start*Ce,Je=(Fe.start+Fe.count)*Ce;me!==null&&(Pe=Math.max(Pe,me.start*Ce),Je=Math.min(Je,(me.start+me.count)*Ce)),Te!==null?(Pe=Math.max(Pe,0),Je=Math.min(Je,Te.count)):He!=null&&(Pe=Math.max(Pe,0),Je=Math.min(Je,He.count));const mt=Je-Pe;if(mt<0||mt===1/0)return;ge.setup(V,H,pe,W,Te);let _t,tt=se;if(Te!==null&&(_t=le.get(Te),tt=ne,tt.setIndex(_t)),V.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*vt()),tt.setMode(O.LINES)):tt.setMode(O.TRIANGLES);else if(V.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),g.setLineWidth(wt*vt()),V.isLineSegments?tt.setMode(O.LINES):V.isLineLoop?tt.setMode(O.LINE_LOOP):tt.setMode(O.LINE_STRIP)}else V.isPoints?tt.setMode(O.POINTS):V.isSprite&&tt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const wt=V._multiDrawStarts,xe=V._multiDrawCounts,Gt=V._multiDrawCount,Xe=Te?le.get(Te).bytesPerElement:1,Wt=z.get(H).currentProgram.getUniforms();for(let Qt=0;Qt<Gt;Qt++)Wt.setValue(O,"_gl_DrawID",Qt),tt.render(wt[Qt]/Xe,xe[Qt])}else if(V.isInstancedMesh)tt.renderInstances(Pe,mt,V.count);else if(W.isInstancedBufferGeometry){const wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xe=Math.min(W.instanceCount,wt);tt.renderInstances(Pe,mt,xe)}else tt.render(Pe,mt)};function mo(x,F,W){x.transparent===!0&&x.side===hn&&x.forceSinglePass===!1?(x.side=Ot,x.needsUpdate=!0,Ii(x,F,W),x.side=Mi,x.needsUpdate=!0,Ii(x,F,W),x.side=hn):Ii(x,F,W)}this.compile=function(x,F,W=null){W===null&&(W=x),b=fe.get(W),b.init(F),v.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),x!==W&&x.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const H=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const pe=me[Se];mo(pe,W,V),H.add(pe)}else mo(me,W,V),H.add(me)}),b=v.pop(),H},this.compileAsync=function(x,F,W=null){const H=this.compile(x,F,W);return new Promise(V=>{function me(){if(H.forEach(function(Se){z.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){V(x);return}setTimeout(me,10)}Ze.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Dr=null;function Ff(x){Dr&&Dr(x)}function go(){Ln.stop()}function vo(){Ln.start()}const Ln=new Ec;Ln.setAnimationLoop(Ff),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(x){Dr=x,Me.setAnimationLoop(x),x===null?Ln.stop():Ln.start()},Me.addEventListener("sessionstart",go),Me.addEventListener("sessionend",vo),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(x,F);const W=Me.enabled===!0&&Me.isPresenting===!0,H=w!==null&&(k===null||W)&&w.begin(D,k);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(F),F=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(D,x,F,k),b=fe.get(x,v.length),b.init(F),b.state.textureUnits=Y.getTextureUnits(),v.push(b),Ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix(Ye,Ao,F.reversedDepth),Be=this.localClippingEnabled,Ve=De.init(this.clippingPlanes,Be),M=de.get(x,R.length),M.init(),R.push(M),Me.enabled===!0&&Me.isPresenting===!0){const Se=D.xr.getDepthSensingMesh();Se!==null&&Lr(Se,F,-1/0,D.sortObjects)}Lr(x,F,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(be,ye,F.reversedDepth),ht=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ht&&Oe.addToRenderList(M,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&De.beginShadows();const V=b.state.shadowsArray;if(Le.render(V,x,F),Ve===!0&&De.endShadows(),(H&&w.hasRenderPass())===!1){const Se=M.opaque,pe=M.transmissive;if(b.setupLights(),F.isArrayCamera){const Te=F.cameras;if(pe.length>0)for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const He=Te[Ce];xo(Se,pe,x,He)}ht&&Oe.render(x);for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const He=Te[Ce];bo(M,x,He,He.viewport)}}else pe.length>0&&xo(Se,pe,x,F),ht&&Oe.render(x),bo(M,x,F)}k!==null&&P===0&&(Y.updateMultisampleRenderTarget(k),Y.updateRenderTargetMipmap(k)),H&&w.end(D),x.isScene===!0&&x.onAfterRender(D,x,F),ge.resetDefaultState(),ee=-1,ae=null,v.pop(),v.length>0?(b=v[v.length-1],Y.setTextureUnits(b.state.textureUnits),Ve===!0&&De.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,N!==null&&N.renderEnd()};function Lr(x,F,W,H){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||We.intersectsSprite(x)){H&&Et.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ye);const Se=ie.update(x),pe=x.material;pe.visible&&M.push(x,Se,pe,W,Et.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||We.intersectsObject(x))){const Se=ie.update(x),pe=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Et.copy(x.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Et.copy(Se.boundingSphere.center)),Et.applyMatrix4(x.matrixWorld).applyMatrix4(Ye)),Array.isArray(pe)){const Te=Se.groups;for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const He=Te[Ce],Pe=pe[He.materialIndex];Pe&&Pe.visible&&M.push(x,Se,Pe,W,Et.z,He)}}else pe.visible&&M.push(x,Se,pe,W,Et.z,null)}}const me=x.children;for(let Se=0,pe=me.length;Se<pe;Se++)Lr(me[Se],F,W,H)}function bo(x,F,W,H){const{opaque:V,transmissive:me,transparent:Se}=x;b.setupLightsView(W),Ve===!0&&De.setGlobalState(D.clippingPlanes,W),H&&g.viewport(X.copy(H)),V.length>0&&Li(V,F,W),me.length>0&&Li(me,F,W),Se.length>0&&Li(Se,F,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function xo(x,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Pe=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new qt(1,1,{generateMipmaps:!0,type:Pe?xn:nn,minFilter:Yn,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const me=b.state.transmissionRenderTarget[H.id],Se=H.viewport||X;me.setSize(Se.z*D.transmissionResolutionScale,Se.w*D.transmissionResolutionScale);const pe=D.getRenderTarget(),Te=D.getActiveCubeFace(),Ce=D.getActiveMipmapLevel();D.setRenderTarget(me),D.getClearColor(Ue),G=D.getClearAlpha(),G<1&&D.setClearColor(16777215,.5),D.clear(),ht&&Oe.render(W);const Fe=D.toneMapping;D.toneMapping=on;const He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Ve===!0&&De.setGlobalState(D.clippingPlanes,H),Li(x,W,H),Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Je=0,mt=F.length;Je<mt;Je++){const _t=F[Je],{object:tt,geometry:wt,material:xe,group:Gt}=_t;if(xe.side===hn&&tt.layers.test(H.layers)){const Xe=xe.side;xe.side=Ot,xe.needsUpdate=!0,So(tt,W,H,wt,xe,Gt),xe.side=Xe,xe.needsUpdate=!0,Pe=!0}}Pe===!0&&(Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me))}D.setRenderTarget(pe,Te,Ce),D.setClearColor(Ue,G),He!==void 0&&(H.viewport=He),D.toneMapping=Fe}function Li(x,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let V=0,me=x.length;V<me;V++){const Se=x[V],{object:pe,geometry:Te,group:Ce}=Se;let Fe=Se.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),pe.layers.test(W.layers)&&So(pe,F,W,Te,Fe,Ce)}}function So(x,F,W,H,V,me){x.onBeforeRender(D,F,W,H,V,me),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(D,F,W,H,x,me),V.transparent===!0&&V.side===hn&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,D.renderBufferDirect(W,F,H,V,x,me),V.side=Mi,V.needsUpdate=!0,D.renderBufferDirect(W,F,H,V,x,me),V.side=hn):D.renderBufferDirect(W,F,H,V,x,me),x.onAfterRender(D,F,W,H,V,me)}function Ii(x,F,W){F.isScene!==!0&&(F=Mt);const H=z.get(x),V=b.state.lights,me=b.state.shadowsArray,Se=V.state.version,pe=ce.getParameters(x,V.state,me,F,W,b.state.lightProbeGridArray),Te=ce.getProgramCacheKey(pe);let Ce=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Fe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=oe.get(x.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",Zt),Ce=new Map,H.programs=Ce);let He=Ce.get(Te);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===Se)return yo(x,pe),He}else pe.uniforms=ce.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,W,pe),x.onBeforeCompile(pe,D),He=ce.acquireProgram(pe,Te),Ce.set(Te,He),H.uniforms=pe.uniforms;const Pe=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pe.clippingPlanes=De.uniform),yo(x,pe),H.needsLights=Hf(x),H.lightsStateVersion=Se,H.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=He,H.uniformsList=null,He}function Eo(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=tr.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function yo(x,F){const W=z.get(x);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Bf(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=x.length;W<H;W++){const V=x[W];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function kf(x,F,W,H,V){F.isScene!==!0&&(F=Mt),Y.resetTextureUnits();const me=F.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,pe=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:dt.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ce=oe.get(H.envMap||Se,Te),Fe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let _t=on;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_t=D.toneMapping);const tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=tt!==void 0?tt.length:0,xe=z.get(H),Gt=b.state.lights;if(Ve===!0&&(Be===!0||x!==ae)){const at=x===ae&&H.id===ee;De.setState(H,x,at)}let Xe=!1;H.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Gt.state.version||xe.outputColorSpace!==pe||V.isBatchedMesh&&xe.batching===!1||!V.isBatchedMesh&&xe.batching===!0||V.isBatchedMesh&&xe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&xe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&xe.instancing===!1||!V.isInstancedMesh&&xe.instancing===!0||V.isSkinnedMesh&&xe.skinning===!1||!V.isSkinnedMesh&&xe.skinning===!0||V.isInstancedMesh&&xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&xe.instancingMorph===!1&&V.morphTexture!==null||xe.envMap!==Ce||H.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==De.numPlanes||xe.numIntersection!==De.numIntersection)||xe.vertexAlphas!==Fe||xe.vertexTangents!==He||xe.morphTargets!==Pe||xe.morphNormals!==Je||xe.morphColors!==mt||xe.toneMapping!==_t||xe.morphTargetsCount!==wt||!!xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,xe.__version=H.version);let Wt=xe.currentProgram;Xe===!0&&(Wt=Ii(H,F,V),N&&H.isNodeMaterial&&N.onUpdateProgram(H,Wt,xe));let Qt=!1,Sn=!1,Hn=!1;const nt=Wt.getUniforms(),gt=xe.uniforms;if(g.useProgram(Wt.program)&&(Qt=!0,Sn=!0,Hn=!0),H.id!==ee&&(ee=H.id,Sn=!0),xe.needsLights){const at=Bf(b.state.lightProbeGridArray,V);xe.lightProbeGrid!==at&&(xe.lightProbeGrid=at,Sn=!0)}if(Qt||ae!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),nt.setValue(O,"projectionMatrix",x.projectionMatrix),nt.setValue(O,"viewMatrix",x.matrixWorldInverse);const yn=nt.map.cameraPosition;yn!==void 0&&yn.setValue(O,lt.setFromMatrixPosition(x.matrixWorld)),A.logarithmicDepthBuffer&&nt.setValue(O,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&nt.setValue(O,"isOrthographic",x.isOrthographicCamera===!0),ae!==x&&(ae=x,Sn=!0,Hn=!0)}if(xe.needsLights&&(Gt.state.directionalShadowMap.length>0&&nt.setValue(O,"directionalShadowMap",Gt.state.directionalShadowMap,Y),Gt.state.spotShadowMap.length>0&&nt.setValue(O,"spotShadowMap",Gt.state.spotShadowMap,Y),Gt.state.pointShadowMap.length>0&&nt.setValue(O,"pointShadowMap",Gt.state.pointShadowMap,Y)),V.isSkinnedMesh){nt.setOptional(O,V,"bindMatrix"),nt.setOptional(O,V,"bindMatrixInverse");const at=V.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),nt.setValue(O,"boneTexture",at.boneTexture,Y))}V.isBatchedMesh&&(nt.setOptional(O,V,"batchingTexture"),nt.setValue(O,"batchingTexture",V._matricesTexture,Y),nt.setOptional(O,V,"batchingIdTexture"),nt.setValue(O,"batchingIdTexture",V._indirectTexture,Y),nt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&nt.setValue(O,"batchingColorTexture",V._colorsTexture,Y));const En=W.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&U.update(V,W,Wt),(Sn||xe.receiveShadow!==V.receiveShadow)&&(xe.receiveShadow=V.receiveShadow,nt.setValue(O,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(gt.envMapIntensity.value=F.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=Tg()),Sn){if(nt.setValue(O,"toneMappingExposure",D.toneMappingExposure),xe.needsLights&&Gf(gt,Hn),me&&H.fog===!0&&Re.refreshFogUniforms(gt,me),Re.refreshMaterialUniforms(gt,H,J,$,b.state.transmissionRenderTarget[x.id]),xe.needsLights&&xe.lightProbeGrid){const at=xe.lightProbeGrid;gt.probesSH.value=at.texture,gt.probesMin.value.copy(at.boundingBox.min),gt.probesMax.value.copy(at.boundingBox.max),gt.probesResolution.value.copy(at.resolution)}tr.upload(O,Eo(xe),gt,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tr.upload(O,Eo(xe),gt,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&nt.setValue(O,"center",V.center),nt.setValue(O,"modelViewMatrix",V.modelViewMatrix),nt.setValue(O,"normalMatrix",V.normalMatrix),nt.setValue(O,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const at=H.uniformsGroups;for(let yn=0,Vn=at.length;yn<Vn;yn++){const Mo=at[yn];re.update(Mo,Wt),re.bind(Mo,Wt)}}return Wt}function Gf(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function Hf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,F,W){const H=z.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=F,z.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){const W=z.get(x);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,W=0){k=x,q=F,P=W;let H=null,V=!1,me=!1;if(x){const pe=z.get(x);if(pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),X.copy(x.viewport),te.copy(x.scissor),ve=x.scissorTest,g.viewport(X),g.scissor(te),g.setScissorTest(ve),ee=-1;return}else if(pe.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(pe.__hasExternalTextures)Y.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Fe=x.depthTexture;if(pe.__boundDepthTexture!==Fe){if(Fe!==null&&z.has(Fe)&&(x.width!==Fe.image.width||x.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ce=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?H=Ce[F][W]:H=Ce[F],V=!0):x.samples>0&&Y.useMultisampledRTT(x)===!1?H=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[W]:H=Ce,X.copy(x.viewport),te.copy(x.scissor),ve=x.scissorTest}else X.copy(_e).multiplyScalar(J).floor(),te.copy($e).multiplyScalar(J).floor(),ve=Ne;if(W!==0&&(H=Q),g.bindFramebuffer(O.FRAMEBUFFER,H)&&g.drawBuffers(x,H),g.viewport(X),g.scissor(te),g.setScissorTest(ve),V){const pe=z.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,W)}else if(me){const pe=F;for(let Te=0;Te<x.textures.length;Te++){const Ce=z.get(x.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,W,pe)}}else if(x!==null&&W!==0){const pe=z.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,W)}ee=-1},this.readRenderTargetPixels=function(x,F,W,H,V,me,Se,pe=0){if(!(x&&x.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){g.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ce=x.textures[pe],Fe=Ce.format,He=Ce.type;if(x.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Fe)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(He)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-H&&W>=0&&W<=x.height-V&&O.readPixels(F,W,H,V,ue.convert(Fe),ue.convert(He),me)}finally{const Ce=k!==null?z.get(k).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,F,W,H,V,me,Se,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(F>=0&&F<=x.width-H&&W>=0&&W<=x.height-V){g.bindFramebuffer(O.FRAMEBUFFER,Te);const Ce=x.textures[pe],Fe=Ce.format,He=Ce.type;if(x.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(F,W,H,V,ue.convert(Fe),ue.convert(He),0);const Je=k!==null?z.get(k).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Je);const mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Wf(O,mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(Pe),O.deleteSync(mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,W=0){const H=Math.pow(2,-W),V=Math.floor(x.image.width*H),me=Math.floor(x.image.height*H),Se=F!==null?F.x:0,pe=F!==null?F.y:0;Y.setTexture2D(x,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,Se,pe,V,me),g.unbindTexture()},this.copyTextureToTexture=function(x,F,W=null,H=null,V=0,me=0){let Se,pe,Te,Ce,Fe,He,Pe,Je,mt;const _t=x.isCompressedTexture?x.mipmaps[me]:x.image;if(W!==null)Se=W.max.x-W.min.x,pe=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Fe=W.min.y,He=W.isBox3?W.min.z:0;else{const gt=Math.pow(2,-V);Se=Math.floor(_t.width*gt),pe=Math.floor(_t.height*gt),x.isDataArrayTexture?Te=_t.depth:x.isData3DTexture?Te=Math.floor(_t.depth*gt):Te=1,Ce=0,Fe=0,He=0}H!==null?(Pe=H.x,Je=H.y,mt=H.z):(Pe=0,Je=0,mt=0);const tt=ue.convert(F.format),wt=ue.convert(F.type);let xe;F.isData3DTexture?(Y.setTexture3D(F,0),xe=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),xe=O.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),xe=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Gt=g.getParameter(O.UNPACK_ROW_LENGTH),Xe=g.getParameter(O.UNPACK_IMAGE_HEIGHT),Wt=g.getParameter(O.UNPACK_SKIP_PIXELS),Qt=g.getParameter(O.UNPACK_SKIP_ROWS),Sn=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(O.UNPACK_SKIP_IMAGES,He);const Hn=x.isDataArrayTexture||x.isData3DTexture,nt=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const gt=z.get(x),En=z.get(F),at=z.get(gt.__renderTarget),yn=z.get(En.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,at.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Vn=0;Vn<Te;Vn++)Hn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,z.get(x).__webglTexture,V,He+Vn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,z.get(F).__webglTexture,me,mt+Vn)),O.blitFramebuffer(Ce,Fe,Se,pe,Pe,Je,Se,pe,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||z.has(x)){const gt=z.get(x),En=z.get(F);g.bindFramebuffer(O.READ_FRAMEBUFFER,K),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,j);for(let at=0;at<Te;at++)Hn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,V,He+at):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,V),nt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,En.__webglTexture,me,mt+at):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,En.__webglTexture,me),V!==0?O.blitFramebuffer(Ce,Fe,Se,pe,Pe,Je,Se,pe,O.COLOR_BUFFER_BIT,O.NEAREST):nt?O.copyTexSubImage3D(xe,me,Pe,Je,mt+at,Ce,Fe,Se,pe):O.copyTexSubImage2D(xe,me,Pe,Je,Ce,Fe,Se,pe);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else nt?x.isDataTexture||x.isData3DTexture?O.texSubImage3D(xe,me,Pe,Je,mt,Se,pe,Te,tt,wt,_t.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(xe,me,Pe,Je,mt,Se,pe,Te,tt,_t.data):O.texSubImage3D(xe,me,Pe,Je,mt,Se,pe,Te,tt,wt,_t):x.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Pe,Je,Se,pe,tt,wt,_t.data):x.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Pe,Je,_t.width,_t.height,tt,_t.data):O.texSubImage2D(O.TEXTURE_2D,me,Pe,Je,Se,pe,tt,wt,_t);g.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xe),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Wt),g.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),g.pixelStorei(O.UNPACK_SKIP_IMAGES,Sn),me===0&&F.generateMipmaps&&O.generateMipmap(xe),g.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&Y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Y.setTextureCube(x,0):x.isData3DTexture?Y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Y.setTexture2DArray(x,0):Y.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){q=0,P=0,k=null,g.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ao}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(t),n.unpackColorSpace=dt._getUnpackColorSpace()}}const Jn=new Qa,pn=new Ge,Pc=new Ee,qr=new Ge,nr=new Ge,fr=new Ee,Da=new Ee,Dc=new Cn,Lc=new Ee,Ic=new Ee;let Ct=null,en=null;const _n=[],Rn={NONE:-1,PAN:0,ROTATE:1};class wg extends br{constructor(t,n,i=null){super(n,i),this.objects=t,this.recursive=!0,this.transformGroup=!1,this.rotateSpeed=1,this.raycaster=new _c,this.mouseButtons={LEFT:Tt.PAN,MIDDLE:Tt.PAN,RIGHT:Tt.ROTATE},this.touches={ONE:gn.PAN},this._onPointerMove=Rg.bind(this),this._onPointerDown=Cg.bind(this),this._onPointerCancel=Pg.bind(this),this._onContextMenu=Dg.bind(this),i!==null&&this.connect(i)}connect(t){super.connect(t),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointerup",this._onPointerCancel),this.domElement.addEventListener("pointerleave",this._onPointerCancel),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointerup",this._onPointerCancel),this.domElement.removeEventListener("pointerleave",this._onPointerCancel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="",this.domElement.style.cursor=""}dispose(){this.disconnect()}_updatePointer(t){const n=this.domElement.getBoundingClientRect();pn.x=(t.clientX-n.left)/n.width*2-1,pn.y=-(t.clientY-n.top)/n.height*2+1}_updateState(t){let n;if(t.pointerType==="touch")n=this.touches.ONE;else switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=null}switch(n){case Tt.PAN:case gn.PAN:this.state=Rn.PAN;break;case Tt.ROTATE:case gn.ROTATE:this.state=Rn.ROTATE;break;default:this.state=Rn.NONE}}}function Rg(e){const t=this.object,n=this.domElement,i=this.raycaster;if(this.enabled!==!1){if(this._updatePointer(e),i.setFromCamera(pn,t),Ct)this.state===Rn.PAN?i.ray.intersectPlane(Jn,fr)&&(Ct.position.copy(fr.sub(Pc).applyMatrix4(Dc)),this.dispatchEvent({type:"drag",object:Ct})):this.state===Rn.ROTATE&&(qr.subVectors(pn,nr).multiplyScalar(this.rotateSpeed),Ct.rotateOnWorldAxis(Lc,qr.x),Ct.rotateOnWorldAxis(Ic.normalize(),-qr.y),this.dispatchEvent({type:"drag",object:Ct})),nr.copy(pn);else if(e.pointerType==="mouse"||e.pointerType==="pen")if(_n.length=0,i.setFromCamera(pn,t),i.intersectObjects(this.objects,this.recursive,_n),_n.length>0){const r=_n[0].object;Jn.setFromNormalAndCoplanarPoint(t.getWorldDirection(Jn.normal),Da.setFromMatrixPosition(r.matrixWorld)),en!==r&&en!==null&&(this.dispatchEvent({type:"hoveroff",object:en}),n.style.cursor="auto",en=null),en!==r&&(this.dispatchEvent({type:"hoveron",object:r}),n.style.cursor="pointer",en=r)}else en!==null&&(this.dispatchEvent({type:"hoveroff",object:en}),n.style.cursor="auto",en=null);nr.copy(pn)}}function Cg(e){const t=this.object,n=this.domElement,i=this.raycaster;this.enabled!==!1&&(this._updatePointer(e),this._updateState(e),_n.length=0,i.setFromCamera(pn,t),i.intersectObjects(this.objects,this.recursive,_n),_n.length>0&&(this.transformGroup===!0?Ct=Uc(_n[0].object):Ct=_n[0].object,Jn.setFromNormalAndCoplanarPoint(t.getWorldDirection(Jn.normal),Da.setFromMatrixPosition(Ct.matrixWorld)),i.ray.intersectPlane(Jn,fr)&&(this.state===Rn.PAN?(Dc.copy(Ct.parent.matrixWorld).invert(),Pc.copy(fr).sub(Da.setFromMatrixPosition(Ct.matrixWorld)),n.style.cursor="move",this.dispatchEvent({type:"dragstart",object:Ct})):this.state===Rn.ROTATE&&(Lc.set(0,1,0).applyQuaternion(t.quaternion).normalize(),Ic.set(1,0,0).applyQuaternion(t.quaternion).normalize(),n.style.cursor="move",this.dispatchEvent({type:"dragstart",object:Ct})))),nr.copy(pn))}function Pg(){this.enabled!==!1&&(Ct&&(this.dispatchEvent({type:"dragend",object:Ct}),Ct=null),this.domElement.style.cursor=en?"pointer":"auto",this.state=Rn.NONE)}function Dg(e){this.enabled!==!1&&e.preventDefault()}function Uc(e,t=null){return e.isGroup&&(t=e),e.parent===null?t:Uc(e.parent,t)}function Lg(e,t,n){var i,r=1;e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function a(){var o,s=i.length,l,u=0,d=0,p=0;for(o=0;o<s;++o)l=i[o],u+=l.x||0,d+=l.y||0,p+=l.z||0;for(u=(u/s-e)*r,d=(d/s-t)*r,p=(p/s-n)*r,o=0;o<s;++o)l=i[o],u&&(l.x-=u),d&&(l.y-=d),p&&(l.z-=p)}return a.initialize=function(o){i=o},a.x=function(o){return arguments.length?(e=+o,a):e},a.y=function(o){return arguments.length?(t=+o,a):t},a.z=function(o){return arguments.length?(n=+o,a):n},a.strength=function(o){return arguments.length?(r=+o,a):r},a}function Ig(e){const t=+this._x.call(null,e);return Nc(this.cover(t),t,e)}function Nc(e,t,n){if(isNaN(t))return e;var i,r=e._root,a={data:n},o=e._x0,s=e._x1,l,u,d,p,c;if(!r)return e._root=a,e;for(;r.length;)if((d=t>=(l=(o+s)/2))?o=l:s=l,i=r,!(r=r[p=+d]))return i[p]=a,e;if(u=+e._x.call(null,r.data),t===u)return a.next=r,i?i[p]=a:e._root=a,e;do i=i?i[p]=new Array(2):e._root=new Array(2),(d=t>=(l=(o+s)/2))?o=l:s=l;while((p=+d)==(c=+(u>=l)));return i[c]=r,i[p]=a,e}function Ug(e){Array.isArray(e)||(e=Array.from(e));const t=e.length,n=new Float64Array(t);let i=1/0,r=-1/0;for(let a=0,o;a<t;++a)isNaN(o=+this._x.call(null,e[a]))||(n[a]=o,o<i&&(i=o),o>r&&(r=o));if(i>r)return this;this.cover(i).cover(r);for(let a=0;a<t;++a)Nc(this,n[a],e[a]);return this}function Ng(e){if(isNaN(e=+e))return this;var t=this._x0,n=this._x1;if(isNaN(t))n=(t=Math.floor(e))+1;else{for(var i=n-t||1,r=this._root,a,o;t>e||e>=n;)switch(o=+(e<t),a=new Array(2),a[o]=r,r=a,i*=2,o){case 0:n=t+i;break;case 1:t=n-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=t,this._x1=n,this}function Og(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function Fg(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function bn(e,t,n){this.node=e,this.x0=t,this.x1=n}function Bg(e,t){var n,i=this._x0,r,a,o=this._x1,s=[],l=this._root,u,d;for(l&&s.push(new bn(l,i,o)),t==null?t=1/0:(i=e-t,o=e+t);u=s.pop();)if(!(!(l=u.node)||(r=u.x0)>o||(a=u.x1)<i))if(l.length){var p=(r+a)/2;s.push(new bn(l[1],p,a),new bn(l[0],r,p)),(d=+(e>=p))&&(u=s[s.length-1],s[s.length-1]=s[s.length-1-d],s[s.length-1-d]=u)}else{var c=Math.abs(e-+this._x.call(null,l.data));c<t&&(t=c,i=e-c,o=e+c,n=l.data)}return n}function kg(e){if(isNaN(l=+this._x.call(null,e)))return this;var t,n=this._root,i,r,a,o=this._x0,s=this._x1,l,u,d,p,c;if(!n)return this;if(n.length)for(;;){if((d=l>=(u=(o+s)/2))?o=u:s=u,t=n,!(n=n[p=+d]))return this;if(!n.length)break;t[p+1&1]&&(i=t,c=p)}for(;n.data!==e;)if(r=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,r?(a?r.next=a:delete r.next,this):t?(a?t[p]=a:delete t[p],(n=t[0]||t[1])&&n===(t[1]||t[0])&&!n.length&&(i?i[c]=n:this._root=n),this):(this._root=a,this)}function Gg(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function Hg(){return this._root}function Vg(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function zg(e){var t=[],n,i=this._root,r,a,o;for(i&&t.push(new bn(i,this._x0,this._x1));n=t.pop();)if(!e(i=n.node,a=n.x0,o=n.x1)&&i.length){var s=(a+o)/2;(r=i[1])&&t.push(new bn(r,s,o)),(r=i[0])&&t.push(new bn(r,a,s))}return this}function Wg(e){var t=[],n=[],i;for(this._root&&t.push(new bn(this._root,this._x0,this._x1));i=t.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.x1,l=(o+s)/2;(a=r[0])&&t.push(new bn(a,o,l)),(a=r[1])&&t.push(new bn(a,l,s))}n.push(i)}for(;i=n.pop();)e(i.node,i.x0,i.x1);return this}function jg(e){return e[0]}function Xg(e){return arguments.length?(this._x=e,this):this._x}function Oc(e,t){var n=new to(t??jg,NaN,NaN);return e==null?n:n.addAll(e)}function to(e,t,n){this._x=e,this._x0=t,this._x1=n,this._root=void 0}function Fs(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var kt=Oc.prototype=to.prototype;kt.copy=function(){var e=new to(this._x,this._x0,this._x1),t=this._root,n,i;if(!t)return e;if(!t.length)return e._root=Fs(t),e;for(n=[{source:t,target:e._root=new Array(2)}];t=n.pop();)for(var r=0;r<2;++r)(i=t.source[r])&&(i.length?n.push({source:i,target:t.target[r]=new Array(2)}):t.target[r]=Fs(i));return e};kt.add=Ig;kt.addAll=Ug;kt.cover=Ng;kt.data=Og;kt.extent=Fg;kt.find=Bg;kt.remove=kg;kt.removeAll=Gg;kt.root=Hg;kt.size=Vg;kt.visit=zg;kt.visitAfter=Wg;kt.x=Xg;function $g(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Fc(this.cover(t,n),t,n,e)}function Fc(e,t,n,i){if(isNaN(t)||isNaN(n))return e;var r,a=e._root,o={data:i},s=e._x0,l=e._y0,u=e._x1,d=e._y1,p,c,_,m,E,h,f,y;if(!a)return e._root=o,e;for(;a.length;)if((E=t>=(p=(s+u)/2))?s=p:u=p,(h=n>=(c=(l+d)/2))?l=c:d=c,r=a,!(a=a[f=h<<1|E]))return r[f]=o,e;if(_=+e._x.call(null,a.data),m=+e._y.call(null,a.data),t===_&&n===m)return o.next=a,r?r[f]=o:e._root=o,e;do r=r?r[f]=new Array(4):e._root=new Array(4),(E=t>=(p=(s+u)/2))?s=p:u=p,(h=n>=(c=(l+d)/2))?l=c:d=c;while((f=h<<1|E)===(y=(m>=c)<<1|_>=p));return r[y]=a,r[f]=o,e}function qg(e){var t,n,i=e.length,r,a,o=new Array(i),s=new Array(i),l=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,t=e[n]))||isNaN(a=+this._y.call(null,t))||(o[n]=r,s[n]=a,r<l&&(l=r),r>d&&(d=r),a<u&&(u=a),a>p&&(p=a));if(l>d||u>p)return this;for(this.cover(l,u).cover(d,p),n=0;n<i;++n)Fc(this,o[n],s[n],e[n]);return this}function Kg(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,i=this._y0,r=this._x1,a=this._y1;if(isNaN(n))r=(n=Math.floor(e))+1,a=(i=Math.floor(t))+1;else{for(var o=r-n||1,s=this._root,l,u;n>e||e>=r||i>t||t>=a;)switch(u=(t<i)<<1|e<n,l=new Array(4),l[u]=s,s=l,o*=2,u){case 0:r=n+o,a=i+o;break;case 1:n=r-o,a=i+o;break;case 2:r=n+o,i=a-o;break;case 3:n=r-o,i=a-o;break}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=i,this._x1=r,this._y1=a,this}function Yg(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function Zg(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Pt(e,t,n,i,r){this.node=e,this.x0=t,this.y0=n,this.x1=i,this.y1=r}function Qg(e,t,n){var i,r=this._x0,a=this._y0,o,s,l,u,d=this._x1,p=this._y1,c=[],_=this._root,m,E;for(_&&c.push(new Pt(_,r,a,d,p)),n==null?n=1/0:(r=e-n,a=t-n,d=e+n,p=t+n,n*=n);m=c.pop();)if(!(!(_=m.node)||(o=m.x0)>d||(s=m.y0)>p||(l=m.x1)<r||(u=m.y1)<a))if(_.length){var h=(o+l)/2,f=(s+u)/2;c.push(new Pt(_[3],h,f,l,u),new Pt(_[2],o,f,h,u),new Pt(_[1],h,s,l,f),new Pt(_[0],o,s,h,f)),(E=(t>=f)<<1|e>=h)&&(m=c[c.length-1],c[c.length-1]=c[c.length-1-E],c[c.length-1-E]=m)}else{var y=e-+this._x.call(null,_.data),T=t-+this._y.call(null,_.data),S=y*y+T*T;if(S<n){var M=Math.sqrt(n=S);r=e-M,a=t-M,d=e+M,p=t+M,i=_.data}}return i}function Jg(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,i,r,a,o=this._x0,s=this._y0,l=this._x1,u=this._y1,d,p,c,_,m,E,h,f;if(!n)return this;if(n.length)for(;;){if((m=d>=(c=(o+l)/2))?o=c:l=c,(E=p>=(_=(s+u)/2))?s=_:u=_,t=n,!(n=n[h=E<<1|m]))return this;if(!n.length)break;(t[h+1&3]||t[h+2&3]||t[h+3&3])&&(i=t,f=h)}for(;n.data!==e;)if(r=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,r?(a?r.next=a:delete r.next,this):t?(a?t[h]=a:delete t[h],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(i?i[f]=n:this._root=n),this):(this._root=a,this)}function ev(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function tv(){return this._root}function nv(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function iv(e){var t=[],n,i=this._root,r,a,o,s,l;for(i&&t.push(new Pt(i,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(i=n.node,a=n.x0,o=n.y0,s=n.x1,l=n.y1)&&i.length){var u=(a+s)/2,d=(o+l)/2;(r=i[3])&&t.push(new Pt(r,u,d,s,l)),(r=i[2])&&t.push(new Pt(r,a,d,u,l)),(r=i[1])&&t.push(new Pt(r,u,o,s,d)),(r=i[0])&&t.push(new Pt(r,a,o,u,d))}return this}function rv(e){var t=[],n=[],i;for(this._root&&t.push(new Pt(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.y0,l=i.x1,u=i.y1,d=(o+l)/2,p=(s+u)/2;(a=r[0])&&t.push(new Pt(a,o,s,d,p)),(a=r[1])&&t.push(new Pt(a,d,s,l,p)),(a=r[2])&&t.push(new Pt(a,o,p,d,u)),(a=r[3])&&t.push(new Pt(a,d,p,l,u))}n.push(i)}for(;i=n.pop();)e(i.node,i.x0,i.y0,i.x1,i.y1);return this}function av(e){return e[0]}function ov(e){return arguments.length?(this._x=e,this):this._x}function sv(e){return e[1]}function lv(e){return arguments.length?(this._y=e,this):this._y}function Bc(e,t,n){var i=new no(t??av,n??sv,NaN,NaN,NaN,NaN);return e==null?i:i.addAll(e)}function no(e,t,n,i,r,a){this._x=e,this._y=t,this._x0=n,this._y0=i,this._x1=r,this._y1=a,this._root=void 0}function Bs(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var Dt=Bc.prototype=no.prototype;Dt.copy=function(){var e=new no(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,i;if(!t)return e;if(!t.length)return e._root=Bs(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var r=0;r<4;++r)(i=t.source[r])&&(i.length?n.push({source:i,target:t.target[r]=new Array(4)}):t.target[r]=Bs(i));return e};Dt.add=$g;Dt.addAll=qg;Dt.cover=Kg;Dt.data=Yg;Dt.extent=Zg;Dt.find=Qg;Dt.remove=Jg;Dt.removeAll=ev;Dt.root=tv;Dt.size=nv;Dt.visit=iv;Dt.visitAfter=rv;Dt.x=ov;Dt.y=lv;function cv(e){const t=+this._x.call(null,e),n=+this._y.call(null,e),i=+this._z.call(null,e);return kc(this.cover(t,n,i),t,n,i,e)}function kc(e,t,n,i,r){if(isNaN(t)||isNaN(n)||isNaN(i))return e;var a,o=e._root,s={data:r},l=e._x0,u=e._y0,d=e._z0,p=e._x1,c=e._y1,_=e._z1,m,E,h,f,y,T,S,M,b,R,v;if(!o)return e._root=s,e;for(;o.length;)if((S=t>=(m=(l+p)/2))?l=m:p=m,(M=n>=(E=(u+c)/2))?u=E:c=E,(b=i>=(h=(d+_)/2))?d=h:_=h,a=o,!(o=o[R=b<<2|M<<1|S]))return a[R]=s,e;if(f=+e._x.call(null,o.data),y=+e._y.call(null,o.data),T=+e._z.call(null,o.data),t===f&&n===y&&i===T)return s.next=o,a?a[R]=s:e._root=s,e;do a=a?a[R]=new Array(8):e._root=new Array(8),(S=t>=(m=(l+p)/2))?l=m:p=m,(M=n>=(E=(u+c)/2))?u=E:c=E,(b=i>=(h=(d+_)/2))?d=h:_=h;while((R=b<<2|M<<1|S)===(v=(T>=h)<<2|(y>=E)<<1|f>=m));return a[v]=o,a[R]=s,e}function fv(e){Array.isArray(e)||(e=Array.from(e));const t=e.length,n=new Float64Array(t),i=new Float64Array(t),r=new Float64Array(t);let a=1/0,o=1/0,s=1/0,l=-1/0,u=-1/0,d=-1/0;for(let p=0,c,_,m,E;p<t;++p)isNaN(_=+this._x.call(null,c=e[p]))||isNaN(m=+this._y.call(null,c))||isNaN(E=+this._z.call(null,c))||(n[p]=_,i[p]=m,r[p]=E,_<a&&(a=_),_>l&&(l=_),m<o&&(o=m),m>u&&(u=m),E<s&&(s=E),E>d&&(d=E));if(a>l||o>u||s>d)return this;this.cover(a,o,s).cover(l,u,d);for(let p=0;p<t;++p)kc(this,n[p],i[p],r[p],e[p]);return this}function uv(e,t,n){if(isNaN(e=+e)||isNaN(t=+t)||isNaN(n=+n))return this;var i=this._x0,r=this._y0,a=this._z0,o=this._x1,s=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(e))+1,s=(r=Math.floor(t))+1,l=(a=Math.floor(n))+1;else{for(var u=o-i||1,d=this._root,p,c;i>e||e>=o||r>t||t>=s||a>n||n>=l;)switch(c=(n<a)<<2|(t<r)<<1|e<i,p=new Array(8),p[c]=d,d=p,u*=2,c){case 0:o=i+u,s=r+u,l=a+u;break;case 1:i=o-u,s=r+u,l=a+u;break;case 2:o=i+u,r=s-u,l=a+u;break;case 3:i=o-u,r=s-u,l=a+u;break;case 4:o=i+u,s=r+u,a=l-u;break;case 5:i=o-u,s=r+u,a=l-u;break;case 6:o=i+u,r=s-u,a=l-u;break;case 7:i=o-u,r=s-u,a=l-u;break}this._root&&this._root.length&&(this._root=d)}return this._x0=i,this._y0=r,this._z0=a,this._x1=o,this._y1=s,this._z1=l,this}function dv(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function hv(e){return arguments.length?this.cover(+e[0][0],+e[0][1],+e[0][2]).cover(+e[1][0],+e[1][1],+e[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function it(e,t,n,i,r,a,o){this.node=e,this.x0=t,this.y0=n,this.z0=i,this.x1=r,this.y1=a,this.z1=o}function pv(e,t,n,i){var r,a=this._x0,o=this._y0,s=this._z0,l,u,d,p,c,_,m=this._x1,E=this._y1,h=this._z1,f=[],y=this._root,T,S;for(y&&f.push(new it(y,a,o,s,m,E,h)),i==null?i=1/0:(a=e-i,o=t-i,s=n-i,m=e+i,E=t+i,h=n+i,i*=i);T=f.pop();)if(!(!(y=T.node)||(l=T.x0)>m||(u=T.y0)>E||(d=T.z0)>h||(p=T.x1)<a||(c=T.y1)<o||(_=T.z1)<s))if(y.length){var M=(l+p)/2,b=(u+c)/2,R=(d+_)/2;f.push(new it(y[7],M,b,R,p,c,_),new it(y[6],l,b,R,M,c,_),new it(y[5],M,u,R,p,b,_),new it(y[4],l,u,R,M,b,_),new it(y[3],M,b,d,p,c,R),new it(y[2],l,b,d,M,c,R),new it(y[1],M,u,d,p,b,R),new it(y[0],l,u,d,M,b,R)),(S=(n>=R)<<2|(t>=b)<<1|e>=M)&&(T=f[f.length-1],f[f.length-1]=f[f.length-1-S],f[f.length-1-S]=T)}else{var v=e-+this._x.call(null,y.data),w=t-+this._y.call(null,y.data),D=n-+this._z.call(null,y.data),C=v*v+w*w+D*D;if(C<i){var N=Math.sqrt(i=C);a=e-N,o=t-N,s=n-N,m=e+N,E=t+N,h=n+N,r=y.data}}return r}const _v=(e,t,n,i,r,a)=>Math.sqrt((e-i)**2+(t-r)**2+(n-a)**2);function mv(e,t,n,i){const r=[],a=e-i,o=t-i,s=n-i,l=e+i,u=t+i,d=n+i;return this.visit((p,c,_,m,E,h,f)=>{if(!p.length)do{const y=p.data;_v(e,t,n,this._x(y),this._y(y),this._z(y))<=i&&r.push(y)}while(p=p.next);return c>l||_>u||m>d||E<a||h<o||f<s}),r}function gv(e){if(isNaN(c=+this._x.call(null,e))||isNaN(_=+this._y.call(null,e))||isNaN(m=+this._z.call(null,e)))return this;var t,n=this._root,i,r,a,o=this._x0,s=this._y0,l=this._z0,u=this._x1,d=this._y1,p=this._z1,c,_,m,E,h,f,y,T,S,M,b;if(!n)return this;if(n.length)for(;;){if((y=c>=(E=(o+u)/2))?o=E:u=E,(T=_>=(h=(s+d)/2))?s=h:d=h,(S=m>=(f=(l+p)/2))?l=f:p=f,t=n,!(n=n[M=S<<2|T<<1|y]))return this;if(!n.length)break;(t[M+1&7]||t[M+2&7]||t[M+3&7]||t[M+4&7]||t[M+5&7]||t[M+6&7]||t[M+7&7])&&(i=t,b=M)}for(;n.data!==e;)if(r=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,r?(a?r.next=a:delete r.next,this):t?(a?t[M]=a:delete t[M],(n=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&n===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!n.length&&(i?i[b]=n:this._root=n),this):(this._root=a,this)}function vv(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function bv(){return this._root}function xv(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function Sv(e){var t=[],n,i=this._root,r,a,o,s,l,u,d;for(i&&t.push(new it(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=t.pop();)if(!e(i=n.node,a=n.x0,o=n.y0,s=n.z0,l=n.x1,u=n.y1,d=n.z1)&&i.length){var p=(a+l)/2,c=(o+u)/2,_=(s+d)/2;(r=i[7])&&t.push(new it(r,p,c,_,l,u,d)),(r=i[6])&&t.push(new it(r,a,c,_,p,u,d)),(r=i[5])&&t.push(new it(r,p,o,_,l,c,d)),(r=i[4])&&t.push(new it(r,a,o,_,p,c,d)),(r=i[3])&&t.push(new it(r,p,c,s,l,u,_)),(r=i[2])&&t.push(new it(r,a,c,s,p,u,_)),(r=i[1])&&t.push(new it(r,p,o,s,l,c,_)),(r=i[0])&&t.push(new it(r,a,o,s,p,c,_))}return this}function Ev(e){var t=[],n=[],i;for(this._root&&t.push(new it(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=t.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.y0,l=i.z0,u=i.x1,d=i.y1,p=i.z1,c=(o+u)/2,_=(s+d)/2,m=(l+p)/2;(a=r[0])&&t.push(new it(a,o,s,l,c,_,m)),(a=r[1])&&t.push(new it(a,c,s,l,u,_,m)),(a=r[2])&&t.push(new it(a,o,_,l,c,d,m)),(a=r[3])&&t.push(new it(a,c,_,l,u,d,m)),(a=r[4])&&t.push(new it(a,o,s,m,c,_,p)),(a=r[5])&&t.push(new it(a,c,s,m,u,_,p)),(a=r[6])&&t.push(new it(a,o,_,m,c,d,p)),(a=r[7])&&t.push(new it(a,c,_,m,u,d,p))}n.push(i)}for(;i=n.pop();)e(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function yv(e){return e[0]}function Mv(e){return arguments.length?(this._x=e,this):this._x}function Tv(e){return e[1]}function Av(e){return arguments.length?(this._y=e,this):this._y}function wv(e){return e[2]}function Rv(e){return arguments.length?(this._z=e,this):this._z}function Gc(e,t,n,i){var r=new io(t??yv,n??Tv,i??wv,NaN,NaN,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function io(e,t,n,i,r,a,o,s,l){this._x=e,this._y=t,this._z=n,this._x0=i,this._y0=r,this._z0=a,this._x1=o,this._y1=s,this._z1=l,this._root=void 0}function ks(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var At=Gc.prototype=io.prototype;At.copy=function(){var e=new io(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,n,i;if(!t)return e;if(!t.length)return e._root=ks(t),e;for(n=[{source:t,target:e._root=new Array(8)}];t=n.pop();)for(var r=0;r<8;++r)(i=t.source[r])&&(i.length?n.push({source:i,target:t.target[r]=new Array(8)}):t.target[r]=ks(i));return e};At.add=cv;At.addAll=fv;At.cover=uv;At.data=dv;At.extent=hv;At.find=pv;At.findAllWithinRadius=mv;At.remove=gv;At.removeAll=vv;At.root=bv;At.size=xv;At.visit=Sv;At.visitAfter=Ev;At.x=Mv;At.y=Av;At.z=Rv;function vn(e){return function(){return e}}function dn(e){return(e()-.5)*1e-6}function Cv(e){return e.index}function Gs(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function Pv(e){var t=Cv,n=c,i,r=vn(30),a,o,s,l,u,d,p=1;e==null&&(e=[]);function c(f){return 1/Math.min(l[f.source.index],l[f.target.index])}function _(f){for(var y=0,T=e.length;y<p;++y)for(var S=0,M,b,R,v=0,w=0,D=0,C,N;S<T;++S)M=e[S],b=M.source,R=M.target,v=R.x+R.vx-b.x-b.vx||dn(d),s>1&&(w=R.y+R.vy-b.y-b.vy||dn(d)),s>2&&(D=R.z+R.vz-b.z-b.vz||dn(d)),C=Math.sqrt(v*v+w*w+D*D),C=(C-a[S])/C*f*i[S],v*=C,w*=C,D*=C,R.vx-=v*(N=u[S]),s>1&&(R.vy-=w*N),s>2&&(R.vz-=D*N),b.vx+=v*(N=1-N),s>1&&(b.vy+=w*N),s>2&&(b.vz+=D*N)}function m(){if(o){var f,y=o.length,T=e.length,S=new Map(o.map((b,R)=>[t(b,R,o),b])),M;for(f=0,l=new Array(y);f<T;++f)M=e[f],M.index=f,typeof M.source!="object"&&(M.source=Gs(S,M.source)),typeof M.target!="object"&&(M.target=Gs(S,M.target)),l[M.source.index]=(l[M.source.index]||0)+1,l[M.target.index]=(l[M.target.index]||0)+1;for(f=0,u=new Array(T);f<T;++f)M=e[f],u[f]=l[M.source.index]/(l[M.source.index]+l[M.target.index]);i=new Array(T),E(),a=new Array(T),h()}}function E(){if(o)for(var f=0,y=e.length;f<y;++f)i[f]=+n(e[f],f,e)}function h(){if(o)for(var f=0,y=e.length;f<y;++f)a[f]=+r(e[f],f,e)}return _.initialize=function(f,...y){o=f,d=y.find(T=>typeof T=="function")||Math.random,s=y.find(T=>[1,2,3].includes(T))||2,m()},_.links=function(f){return arguments.length?(e=f,m(),_):e},_.id=function(f){return arguments.length?(t=f,_):t},_.iterations=function(f){return arguments.length?(p=+f,_):p},_.strength=function(f){return arguments.length?(n=typeof f=="function"?f:vn(+f),E(),_):n},_.distance=function(f){return arguments.length?(r=typeof f=="function"?f:vn(+f),h(),_):r},_}const Dv=1664525,Lv=1013904223,Hs=4294967296;function Iv(){let e=1;return()=>(e=(Dv*e+Lv)%Hs)/Hs}var Vs=3;function Kr(e){return e.x}function zs(e){return e.y}function Uv(e){return e.z}var Nv=10,Ov=Math.PI*(3-Math.sqrt(5)),Fv=Math.PI*20/(9+Math.sqrt(221));function Bv(e,t){t=t||2;var n=Math.min(Vs,Math.max(1,Math.round(t))),i,r=1,a=.001,o=1-Math.pow(a,1/300),s=0,l=.6,u=new Map,d=rd(_),p=ad("tick","end"),c=Iv();e==null&&(e=[]);function _(){m(),p.call("tick",i),r<a&&(d.stop(),p.call("end",i))}function m(f){var y,T=e.length,S;f===void 0&&(f=1);for(var M=0;M<f;++M)for(r+=(s-r)*o,u.forEach(function(b){b(r)}),y=0;y<T;++y)S=e[y],S.fx==null?S.x+=S.vx*=l:(S.x=S.fx,S.vx=0),n>1&&(S.fy==null?S.y+=S.vy*=l:(S.y=S.fy,S.vy=0)),n>2&&(S.fz==null?S.z+=S.vz*=l:(S.z=S.fz,S.vz=0));return i}function E(){for(var f=0,y=e.length,T;f<y;++f){if(T=e[f],T.index=f,T.fx!=null&&(T.x=T.fx),T.fy!=null&&(T.y=T.fy),T.fz!=null&&(T.z=T.fz),isNaN(T.x)||n>1&&isNaN(T.y)||n>2&&isNaN(T.z)){var S=Nv*(n>2?Math.cbrt(.5+f):n>1?Math.sqrt(.5+f):f),M=f*Ov,b=f*Fv;n===1?T.x=S:n===2?(T.x=S*Math.cos(M),T.y=S*Math.sin(M)):(T.x=S*Math.sin(M)*Math.cos(b),T.y=S*Math.cos(M),T.z=S*Math.sin(M)*Math.sin(b))}(isNaN(T.vx)||n>1&&isNaN(T.vy)||n>2&&isNaN(T.vz))&&(T.vx=0,n>1&&(T.vy=0),n>2&&(T.vz=0))}}function h(f){return f.initialize&&f.initialize(e,c,n),f}return E(),i={tick:m,restart:function(){return d.restart(_),i},stop:function(){return d.stop(),i},numDimensions:function(f){return arguments.length?(n=Math.min(Vs,Math.max(1,Math.round(f))),u.forEach(h),i):n},nodes:function(f){return arguments.length?(e=f,E(),u.forEach(h),i):e},alpha:function(f){return arguments.length?(r=+f,i):r},alphaMin:function(f){return arguments.length?(a=+f,i):a},alphaDecay:function(f){return arguments.length?(o=+f,i):+o},alphaTarget:function(f){return arguments.length?(s=+f,i):s},velocityDecay:function(f){return arguments.length?(l=1-f,i):1-l},randomSource:function(f){return arguments.length?(c=f,u.forEach(h),i):c},force:function(f,y){return arguments.length>1?(y==null?u.delete(f):u.set(f,h(y)),i):u.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),y=f.shift()||0,T=(n>1?f.shift():null)||0,S=(n>2?f.shift():null)||0,M=f.shift()||1/0,b=0,R=e.length,v,w,D,C,N,Q;for(M*=M,b=0;b<R;++b)N=e[b],v=y-N.x,w=T-(N.y||0),D=S-(N.z||0),C=v*v+w*w+D*D,C<M&&(Q=N,M=C);return Q},on:function(f,y){return arguments.length>1?(p.on(f,y),i):p.on(f)}}}function kv(){var e,t,n,i,r,a=vn(-30),o,s=1,l=1/0,u=.81;function d(m){var E,h=e.length,f=(t===1?Oc(e,Kr):t===2?Bc(e,Kr,zs):t===3?Gc(e,Kr,zs,Uv):null).visitAfter(c);for(r=m,E=0;E<h;++E)n=e[E],f.visit(_)}function p(){if(e){var m,E=e.length,h;for(o=new Array(E),m=0;m<E;++m)h=e[m],o[h.index]=+a(h,m,e)}}function c(m){var E=0,h,f,y=0,T,S,M,b,R=m.length;if(R){for(T=S=M=b=0;b<R;++b)(h=m[b])&&(f=Math.abs(h.value))&&(E+=h.value,y+=f,T+=f*(h.x||0),S+=f*(h.y||0),M+=f*(h.z||0));E*=Math.sqrt(4/R),m.x=T/y,t>1&&(m.y=S/y),t>2&&(m.z=M/y)}else{h=m,h.x=h.data.x,t>1&&(h.y=h.data.y),t>2&&(h.z=h.data.z);do E+=o[h.data.index];while(h=h.next)}m.value=E}function _(m,E,h,f,y){if(!m.value)return!0;var T=[h,f,y][t-1],S=m.x-n.x,M=t>1?m.y-n.y:0,b=t>2?m.z-n.z:0,R=T-E,v=S*S+M*M+b*b;if(R*R/u<v)return v<l&&(S===0&&(S=dn(i),v+=S*S),t>1&&M===0&&(M=dn(i),v+=M*M),t>2&&b===0&&(b=dn(i),v+=b*b),v<s&&(v=Math.sqrt(s*v)),n.vx+=S*m.value*r/v,t>1&&(n.vy+=M*m.value*r/v),t>2&&(n.vz+=b*m.value*r/v)),!0;if(m.length||v>=l)return;(m.data!==n||m.next)&&(S===0&&(S=dn(i),v+=S*S),t>1&&M===0&&(M=dn(i),v+=M*M),t>2&&b===0&&(b=dn(i),v+=b*b),v<s&&(v=Math.sqrt(s*v)));do m.data!==n&&(R=o[m.data.index]*r/v,n.vx+=S*R,t>1&&(n.vy+=M*R),t>2&&(n.vz+=b*R));while(m=m.next)}return d.initialize=function(m,...E){e=m,i=E.find(h=>typeof h=="function")||Math.random,t=E.find(h=>[1,2,3].includes(h))||2,p()},d.strength=function(m){return arguments.length?(a=typeof m=="function"?m:vn(+m),p(),d):a},d.distanceMin=function(m){return arguments.length?(s=m*m,d):Math.sqrt(s)},d.distanceMax=function(m){return arguments.length?(l=m*m,d):Math.sqrt(l)},d.theta=function(m){return arguments.length?(u=m*m,d):Math.sqrt(u)},d}function Gv(e,t,n,i){var r,a,o=vn(.1),s,l;typeof e!="function"&&(e=vn(+e)),t==null&&(t=0),n==null&&(n=0),i==null&&(i=0);function u(p){for(var c=0,_=r.length;c<_;++c){var m=r[c],E=m.x-t||1e-6,h=(m.y||0)-n||1e-6,f=(m.z||0)-i||1e-6,y=Math.sqrt(E*E+h*h+f*f),T=(l[c]-y)*s[c]*p/y;m.vx+=E*T,a>1&&(m.vy+=h*T),a>2&&(m.vz+=f*T)}}function d(){if(r){var p,c=r.length;for(s=new Array(c),l=new Array(c),p=0;p<c;++p)l[p]=+e(r[p],p,r),s[p]=isNaN(l[p])?0:+o(r[p],p,r)}}return u.initialize=function(p,...c){r=p,a=c.find(_=>[1,2,3].includes(_))||2,d()},u.strength=function(p){return arguments.length?(o=typeof p=="function"?p:vn(+p),d(),u):o},u.radius=function(p){return arguments.length?(e=typeof p=="function"?p:vn(+p),d(),u):e},u.x=function(p){return arguments.length?(t=+p,u):t},u.y=function(p){return arguments.length?(n=+p,u):n},u.z=function(p){return arguments.length?(i=+p,u):i},u}function Hv(e){zv(e);const t=Vv(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e}function Vv(e){let t=Object.create(null);return{on:function(n,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");let a=t[n];return a||(a=t[n]=[]),a.push({callback:i,ctx:r}),e},off:function(n,i){if(typeof n>"u")return t=Object.create(null),e;if(t[n])if(typeof i!="function")delete t[n];else{const o=t[n];for(let s=0;s<o.length;++s)o[s].callback===i&&o.splice(s,1)}return e},fire:function(n){const i=t[n];if(!i)return e;let r;arguments.length>1&&(r=Array.prototype.slice.call(arguments,1));for(let a=0;a<i.length;++a){const o=i[a];o.callback.apply(o.ctx,r)}return e}}}function zv(e){if(!e)throw new Error("Eventify cannot use falsy object as events subject");const t=["on","fire","off"];for(let n=0;n<t.length;++n)if(e.hasOwnProperty(t[n]))throw new Error("Subject cannot be eventified, since it already has property '"+t[n]+"'")}function Wv(e){if(e=e||{},"uniqueLinkId"in e&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),e.multigraph=e.uniqueLinkId),e.multigraph===void 0&&(e.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var t=new Map,n=new Map,i={},r=0,a=e.multigraph?S:T,o=[],s=P,l=P,u=P,d=P,p={version:20,addNode:E,addLink:y,removeLink:v,removeNode:f,getNode:h,getNodeCount:M,getLinkCount:b,getEdgeCount:b,getLinksCount:b,getNodesCount:M,getLinks:R,forEachNode:ae,forEachLinkedNode:K,forEachLink:Q,beginUpdate:u,endUpdate:d,clear:N,hasLink:D,hasNode:h,getLink:D,getLinkById:C};return Hv(p),c(),p;function c(){var X=p.on;p.on=te;function te(){return p.beginUpdate=u=k,p.endUpdate=d=ee,s=_,l=m,p.on=X,X.apply(p,arguments)}}function _(X,te){o.push({link:X,changeType:te})}function m(X,te){o.push({node:X,changeType:te})}function E(X,te){if(X===void 0)throw new Error("Invalid node identifier");u();var ve=h(X);return ve?(ve.data=te,l(ve,"update")):(ve=new jv(X,te),l(ve,"add")),t.set(X,ve),d(),ve}function h(X){return t.get(X)}function f(X){var te=h(X);if(!te)return!1;u();var ve=te.links;return ve&&(ve.forEach(w),te.links=null),t.delete(X),l(te,"remove"),d(),!0}function y(X,te,ve){u();var Ue=h(X)||E(X),G=h(te)||E(te),L=a(X,te,ve),$=n.has(L.id);return n.set(L.id,L),Ws(Ue,L),X!==te&&Ws(G,L),s(L,$?"update":"add"),d(),L}function T(X,te,ve){var Ue=Fi(X,te),G=n.get(Ue);return G?(G.data=ve,G):new js(X,te,ve,Ue)}function S(X,te,ve){var Ue=Fi(X,te),G=i.hasOwnProperty(Ue);if(G||D(X,te)){G||(i[Ue]=0);var L="@"+ ++i[Ue];Ue=Fi(X+L,te+L)}return new js(X,te,ve,Ue)}function M(){return t.size}function b(){return n.size}function R(X){var te=h(X);return te?te.links:null}function v(X,te){return te!==void 0&&(X=D(X,te)),w(X)}function w(X){if(!X||!n.get(X.id))return!1;u(),n.delete(X.id);var te=h(X.fromId),ve=h(X.toId);return te&&te.links.delete(X),ve&&ve.links.delete(X),s(X,"remove"),d(),!0}function D(X,te){if(!(X===void 0||te===void 0))return n.get(Fi(X,te))}function C(X){if(X!==void 0)return n.get(X)}function N(){u(),ae(function(X){f(X.id)}),d()}function Q(X){if(typeof X=="function")for(var te=n.values(),ve=te.next();!ve.done;){if(X(ve.value))return!0;ve=te.next()}}function K(X,te,ve){var Ue=h(X);if(Ue&&Ue.links&&typeof te=="function")return ve?q(Ue.links,X,te):j(Ue.links,X,te)}function j(X,te,ve){for(var Ue,G=X.values(),L=G.next();!L.done;){var $=L.value,J=$.fromId===te?$.toId:$.fromId;if(Ue=ve(t.get(J),$),Ue)return!0;L=G.next()}}function q(X,te,ve){for(var Ue,G=X.values(),L=G.next();!L.done;){var $=L.value;if($.fromId===te&&(Ue=ve(t.get($.toId),$),Ue))return!0;L=G.next()}}function P(){}function k(){r+=1}function ee(){r-=1,r===0&&o.length>0&&(p.fire("changed",o),o.length=0)}function ae(X){if(typeof X!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+X);for(var te=t.values(),ve=te.next();!ve.done;){if(X(ve.value))return!0;ve=te.next()}}}function jv(e,t){this.id=e,this.links=null,this.data=t}function Ws(e,t){e.links?e.links.add(t):e.links=new Set([t])}function js(e,t,n,i){this.fromId=e,this.toId=t,this.data=n,this.id=i}function Fi(e,t){return e.toString()+"👉 "+t.toString()}var Bi={exports:{}},Wn={exports:{}},Yr,Xs;function Hc(){return Xs||(Xs=1,Yr=function(t){return t===0?"x":t===1?"y":t===2?"z":"c"+(t+1)}),Yr}var Zr,$s;function oi(){if($s)return Zr;$s=1;const e=Hc();return Zr=function(n){return i;function i(r,a){let o=a&&a.indent||0,s=a&&a.join!==void 0?a.join:`
`,l=Array(o+1).join(" "),u=[];for(let d=0;d<n;++d){let p=e(d),c=d===0?"":l;u.push(c+r.replace(/{var}/g,p))}return u.join(s)}},Zr}var qs;function Xv(){if(qs)return Wn.exports;qs=1;const e=oi();Wn.exports=t,Wn.exports.generateCreateBodyFunctionBody=n,Wn.exports.getVectorCode=r,Wn.exports.getBodyCode=i;function t(a,o){let s=n(a,o),{Body:l}=new Function(s)();return l}function n(a,o){return`
${r(a,o)}
${i(a)}
return {Body: Body, Vector: Vector};
`}function i(a){let o=e(a),s=o("{var}",{join:", "});return`
function Body(${s}) {
  this.isPinned = false;
  this.pos = new Vector(${s});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${s}) {
  ${o("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function r(a,o){let s=e(a),l="";return o&&(l=`${s(`
	   var v{var};
	Object.defineProperty(this, '{var}', {
	  set: function(v) { 
	    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
	    v{var} = v; 
	  },
	  get: function() { return v{var}; }
	});`)}`),`function Vector(${s("{var}",{join:", "})}) {
  ${l}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${s('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${s("this.{var} = v.{var};",{indent:4})}
    } else {
      ${s('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${s("this.{var} = ",{join:""})}0;
  };`}return Wn.exports}var cn={exports:{}},Ks;function $v(){if(Ks)return cn.exports;Ks=1;const e=oi(),t=Hc();cn.exports=n,cn.exports.generateQuadTreeFunctionBody=i,cn.exports.getInsertStackCode=l,cn.exports.getQuadNodeCode=s,cn.exports.isSamePosition=r,cn.exports.getChildBodyCode=o,cn.exports.setChildBodyCode=a;function n(u){let d=i(u);return new Function(d)()}function i(u){let d=e(u),p=Math.pow(2,u);return`
${l()}
${s(u)}
${r(u)}
${o(u)}
${a(u)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${E("      node.")}
      node.body = null;
      node.mass = ${d("node.mass_{var} = ",{join:""})}0;
      ${d("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${d("var d{var};",{indent:4})}
    var r; 
    ${d("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${d("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${d("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${d("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${d("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${d("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${d("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${d("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${d("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${d("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${t(0)} - node.min_${t(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${d("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${m()}
        }
      }
    }

    ${d("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${d("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${d("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${d("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${d("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${d("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${d("root.min_{var} = {var}min;",{indent:4})}
    ${d("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${d("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${d("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${d("var min_{var} = node.min_{var};",{indent:8})}
        ${d("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${_(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${d("child.min_{var} = min_{var};",{indent:10})}
          ${d("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${d("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${d("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function _(h){let f=[],y=Array(h+1).join(" ");for(let T=0;T<u;++T)f.push(y+`if (${t(T)} > max_${t(T)}) {`),f.push(y+`  quadIdx = quadIdx + ${Math.pow(2,T)};`),f.push(y+`  min_${t(T)} = max_${t(T)};`),f.push(y+`  max_${t(T)} = node.max_${t(T)};`),f.push(y+"}");return f.join(`
`)}function m(){let h=Array(11).join(" "),f=[];for(let y=0;y<p;++y)f.push(h+`if (node.quad${y}) {`),f.push(h+`  queue[pushIdx] = node.quad${y};`),f.push(h+"  queueLength += 1;"),f.push(h+"  pushIdx += 1;"),f.push(h+"}");return f.join(`
`)}function E(h){let f=[];for(let y=0;y<p;++y)f.push(`${h}quad${y} = null;`);return f.join(`
`)}}function r(u){let d=e(u);return`
  function isSamePosition(point1, point2) {
    ${d("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${d("d{var} < 1e-8",{join:" && "})};
  }  
`}function a(u){var d=Math.pow(2,u);return`
function setChild(node, idx, child) {
  ${p()}
}`;function p(){let c=[];for(let _=0;_<d;++_){let m=_===0?"  ":"  else ";c.push(`${m}if (idx === ${_}) node.quad${_} = child;`)}return c.join(`
`)}}function o(u){return`function getChild(node, idx) {
${d()}
  return null;
}`;function d(){let p=[],c=Math.pow(2,u);for(let _=0;_<c;++_)p.push(`  if (idx === ${_}) return node.quad${_};`);return p.join(`
`)}}function s(u){let d=e(u),p=Math.pow(2,u);var c=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${_("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${d("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${d("this.min_{var} = 0;",{indent:2})}
  ${d("this.max_{var} = 0;",{indent:2})}
}
`;return c;function _(m){let E=[];for(let h=0;h<p;++h)E.push(`${m}quad${h} = null;`);return E.join(`
`)}}function l(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}return cn.exports}var ki={exports:{}},Ys;function qv(){if(Ys)return ki.exports;Ys=1,ki.exports=t,ki.exports.generateFunctionBody=n;const e=oi();function t(i){let r=n(i);return new Function("bodies","settings","random",r)}function n(i){let r=e(i);return`
  var boundingBox = {
    ${r("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${r("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${r("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${r("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${r("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${r("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${r("var max_{var} = -Infinity;",{indent:4})}
    ${r("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${r("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${r("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${r("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${r("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${r("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}return ki.exports}var Gi={exports:{}},Zs;function Kv(){if(Zs)return Gi.exports;Zs=1;const e=oi();Gi.exports=t,Gi.exports.generateCreateDragForceFunctionBody=n;function t(i){let r=n(i);return new Function("options",r)}function n(i){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${e(i)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}return Gi.exports}var Hi={exports:{}},Qs;function Yv(){if(Qs)return Hi.exports;Qs=1;const e=oi();Hi.exports=t,Hi.exports.generateCreateSpringForceFunctionBody=n;function t(i){let r=n(i);return new Function("options","random",r)}function n(i){let r=e(i);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${r("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${r("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${r("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${r("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${r("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${r("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}return Hi.exports}var Vi={exports:{}},Js;function Zv(){if(Js)return Vi.exports;Js=1;const e=oi();Vi.exports=t,Vi.exports.generateIntegratorFunctionBody=n;function t(i){let r=n(i);return new Function("bodies","timeStep","adaptiveTimeStepWeight",r)}function n(i){let r=e(i);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${r("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${r("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${r("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${r("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${r("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${r("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${r("body.pos.{var} += d{var};",{indent:4})}

    ${r("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${r("t{var} * t{var}",{join:" + "})})/length;
`}return Vi.exports}var Qr,el;function Qv(){if(el)return Qr;el=1,Qr=e;function e(t,n,i,r){this.from=t,this.to=n,this.length=i,this.coefficient=r}return Qr}var Jr,tl;function Jv(){if(tl)return Jr;tl=1,Jr=e;function e(t,n){var i;if(t||(t={}),n){for(i in n)if(n.hasOwnProperty(i)){var r=t.hasOwnProperty(i),a=typeof n[i],o=!r||typeof t[i]!==a;o?t[i]=n[i]:a==="object"&&(t[i]=e(t[i],n[i]))}}return t}return Jr}var ea,nl;function Vc(){if(nl)return ea;nl=1;function e(i){n(i);const r=t(i);return i.on=r.on,i.off=r.off,i.fire=r.fire,i}function t(i){let r=Object.create(null);return{on:function(a,o,s){if(typeof o!="function")throw new Error("callback is expected to be a function");let l=r[a];return l||(l=r[a]=[]),l.push({callback:o,ctx:s}),i},off:function(a,o){if(typeof a>"u")return r=Object.create(null),i;if(r[a])if(typeof o!="function")delete r[a];else{const s=r[a];for(let l=0;l<s.length;++l)s[l].callback===o&&s.splice(l,1)}return i},fire:function(a){const o=r[a];if(!o)return i;let s;arguments.length>1&&(s=Array.prototype.slice.call(arguments,1));for(let l=0;l<o.length;++l){const u=o[l];u.callback.apply(u.ctx,s)}return i}}}function n(i){if(!i)throw new Error("Eventify cannot use falsy object as events subject");const r=["on","fire","off"];for(let a=0;a<r.length;++a)if(i.hasOwnProperty(r[a]))throw new Error("Subject cannot be eventified, since it already has property '"+r[a]+"'")}return ea=e,ea}var ui={exports:{}},il;function e0(){if(il)return ui.exports;il=1,ui.exports=e,ui.exports.random=e,ui.exports.randomIterator=s;function e(l){var u=typeof l=="number"?l:+new Date;return new t(u)}function t(l){this.seed=l}t.prototype.next=o,t.prototype.nextDouble=a,t.prototype.uniform=a,t.prototype.gaussian=n,t.prototype.random=a;function n(){var l,u,d;do u=this.nextDouble()*2-1,d=this.nextDouble()*2-1,l=u*u+d*d;while(l>=1||l===0);return u*Math.sqrt(-2*Math.log(l)/l)}t.prototype.levy=i;function i(){var l=1.5,u=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function a(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function o(l){return Math.floor(this.nextDouble()*l)}function s(l,u){var d=u||e();if(typeof d.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:c,shuffle:p};function p(){var _,m,E;for(_=l.length-1;_>0;--_)m=d.next(_+1),E=l[m],l[m]=l[_],l[_]=E;return l}function c(_){var m,E,h;for(m=l.length-1;m>0;--m)E=d.next(m+1),h=l[E],l[E]=l[m],l[m]=h,_(h);l.length&&_(l[0])}}return ui.exports}var ta,rl;function al(){if(rl)return ta;rl=1,ta=s;var e=Xv(),t=$v(),n=qv(),i=Kv(),r=Yv(),a=Zv(),o={};function s(d){var p=Qv(),c=Jv(),_=Vc();if(d){if(d.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(d.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}d=c(d,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var m=o[d.dimensions];if(!m){var E=d.dimensions;m={Body:e(E,d.debug),createQuadTree:t(E),createBounds:n(E),createDragForce:i(E),createSpringForce:r(E),integrate:a(E)},o[E]=m}var h=m.Body,f=m.createQuadTree,y=m.createBounds,T=m.createDragForce,S=m.createSpringForce,M=m.integrate,b=G=>new h(G),R=e0().random(42),v=[],w=[],D=f(d,R),C=y(v,d,R),N=S(d,R),Q=T(d),K=0,j=[],q=new Map,P=0;ae("nbody",ve),ae("spring",Ue);var k={bodies:v,quadTree:D,springs:w,settings:d,addForce:ae,removeForce:X,getForces:te,step:function(){for(var G=0;G<j.length;++G)j[G](P);var L=M(v,d.timeStep,d.adaptiveTimeStepWeight);return P+=1,L},addBody:function(G){if(!G)throw new Error("Body is required");return v.push(G),G},addBodyAt:function(G){if(!G)throw new Error("Body position is required");var L=b(G);return v.push(L),L},removeBody:function(G){if(G){var L=v.indexOf(G);if(!(L<0))return v.splice(L,1),v.length===0&&C.reset(),!0}},addSpring:function(G,L,$,J){if(!G||!L)throw new Error("Cannot add null spring to force simulator");typeof $!="number"&&($=-1);var be=new p(G,L,$,J>=0?J:-1);return w.push(be),be},getTotalMovement:function(){return K},removeSpring:function(G){if(G){var L=w.indexOf(G);if(L>-1)return w.splice(L,1),!0}},getBestNewBodyPosition:function(G){return C.getBestNewPosition(G)},getBBox:ee,getBoundingBox:ee,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(G){return G!==void 0?(d.gravity=G,D.options({gravity:G}),this):d.gravity},theta:function(G){return G!==void 0?(d.theta=G,D.options({theta:G}),this):d.theta},random:R};return l(d,k),_(k),k;function ee(){return C.update(),C.box}function ae(G,L){if(q.has(G))throw new Error("Force "+G+" is already added");q.set(G,L),j.push(L)}function X(G){var L=j.indexOf(q.get(G));L<0||(j.splice(L,1),q.delete(G))}function te(){return q}function ve(){if(v.length!==0){D.insertBodies(v);for(var G=v.length;G--;){var L=v[G];L.isPinned||(L.reset(),D.updateBodyForce(L),Q.update(L))}}}function Ue(){for(var G=w.length;G--;)N.update(w[G])}}function l(d,p){for(var c in d)u(d,p,c)}function u(d,p,c){if(d.hasOwnProperty(c)&&typeof p[c]!="function"){var _=Number.isFinite(d[c]);_?p[c]=function(m){if(m!==void 0){if(!Number.isFinite(m))throw new Error("Value of "+c+" should be a valid number.");return d[c]=m,p}return d[c]}:p[c]=function(m){return m!==void 0?(d[c]=m,p):d[c]}}}return ta}var ol;function t0(){if(ol)return Bi.exports;ol=1,Bi.exports=t,Bi.exports.simulator=al();var e=Vc();function t(i,r){if(!i)throw new Error("Graph structure cannot be undefined");var a=r&&r.createSimulator||al(),o=a(r);if(Array.isArray(r))throw new Error("Physics settings is expected to be an object");var s=i.version>19?q:j;r&&typeof r.nodeMass=="function"&&(s=r.nodeMass);var l=new Map,u={},d=0,p=o.settings.springTransform||n;b(),T();var c=!1,_={step:function(){if(d===0)return m(!0),!0;var P=o.step();_.lastMove=P,_.fire("step");var k=P/d,ee=k<=.01;return m(ee),ee},getNodePosition:function(P){return K(P).pos},setNodePosition:function(P){var k=K(P);k.setPosition.apply(k,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(P){var k=u[P];if(k)return{from:k.from.pos,to:k.to.pos}},getGraphRect:function(){return o.getBBox()},forEachBody:E,pinNode:function(P,k){var ee=K(P.id);ee.isPinned=!!k},isNodePinned:function(P){return K(P.id).isPinned},dispose:function(){i.off("changed",M),_.fire("disposed")},getBody:y,getSpring:f,getForceVectorLength:h,simulator:o,graph:i,lastMove:0};return e(_),_;function m(P){c!==P&&(c=P,S(P))}function E(P){l.forEach(P)}function h(){var P=0,k=0;return E(function(ee){P+=Math.abs(ee.force.x),k+=Math.abs(ee.force.y)}),Math.sqrt(P*P+k*k)}function f(P,k){var ee;if(k===void 0)typeof P!="object"?ee=P:ee=P.id;else{var ae=i.hasLink(P,k);if(!ae)return;ee=ae.id}return u[ee]}function y(P){return l.get(P)}function T(){i.on("changed",M)}function S(P){_.fire("stable",P)}function M(P){for(var k=0;k<P.length;++k){var ee=P[k];ee.changeType==="add"?(ee.node&&R(ee.node.id),ee.link&&w(ee.link)):ee.changeType==="remove"&&(ee.node&&v(ee.node),ee.link&&D(ee.link))}d=i.getNodesCount()}function b(){d=0,i.forEachNode(function(P){R(P.id),d+=1}),i.forEachLink(w)}function R(P){var k=l.get(P);if(!k){var ee=i.getNode(P);if(!ee)throw new Error("initBody() was called with unknown node id");var ae=ee.position;if(!ae){var X=C(ee);ae=o.getBestNewBodyPosition(X)}k=o.addBodyAt(ae),k.id=P,l.set(P,k),N(P),Q(ee)&&(k.isPinned=!0)}}function v(P){var k=P.id,ee=l.get(k);ee&&(l.delete(k),o.removeBody(ee))}function w(P){N(P.fromId),N(P.toId);var k=l.get(P.fromId),ee=l.get(P.toId),ae=o.addSpring(k,ee,P.length);p(P,ae),u[P.id]=ae}function D(P){var k=u[P.id];if(k){var ee=i.getNode(P.fromId),ae=i.getNode(P.toId);ee&&N(ee.id),ae&&N(ae.id),delete u[P.id],o.removeSpring(k)}}function C(P){var k=[];if(!P.links)return k;for(var ee=Math.min(P.links.length,2),ae=0;ae<ee;++ae){var X=P.links[ae],te=X.fromId!==P.id?l.get(X.fromId):l.get(X.toId);te&&te.pos&&k.push(te)}return k}function N(P){var k=l.get(P);if(k.mass=s(P),Number.isNaN(k.mass))throw new Error("Node mass should be a number")}function Q(P){return P&&(P.isPinned||P.data&&P.data.isPinned)}function K(P){var k=l.get(P);return k||(R(P),k=l.get(P)),k}function j(P){var k=i.getLinks(P);return k?1+k.length/3:1}function q(P){var k=i.getLinks(P);return k?1+k.size/3:1}}function n(){}return Bi.exports}var n0=t0();const i0=mc(n0);function La(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var r0=typeof global=="object"&&global&&global.Object===Object&&global,a0=typeof self=="object"&&self&&self.Object===Object&&self,zc=r0||a0||Function("return this")(),na=function(){return zc.Date.now()},o0=/\s/;function s0(e){for(var t=e.length;t--&&o0.test(e.charAt(t)););return t}var l0=/^\s+/;function c0(e){return e&&e.slice(0,s0(e)+1).replace(l0,"")}var ur=zc.Symbol,Wc=Object.prototype,f0=Wc.hasOwnProperty,u0=Wc.toString,di=ur?ur.toStringTag:void 0;function d0(e){var t=f0.call(e,di),n=e[di];try{e[di]=void 0;var i=!0}catch{}var r=u0.call(e);return i&&(t?e[di]=n:delete e[di]),r}var h0=Object.prototype,p0=h0.toString;function _0(e){return p0.call(e)}var m0="[object Null]",g0="[object Undefined]",sl=ur?ur.toStringTag:void 0;function v0(e){return e==null?e===void 0?g0:m0:sl&&sl in Object(e)?d0(e):_0(e)}function b0(e){return e!=null&&typeof e=="object"}var x0="[object Symbol]";function S0(e){return typeof e=="symbol"||b0(e)&&v0(e)==x0}var ll=NaN,E0=/^[-+]0x[0-9a-f]+$/i,y0=/^0b[01]+$/i,M0=/^0o[0-7]+$/i,T0=parseInt;function cl(e){if(typeof e=="number")return e;if(S0(e))return ll;if(La(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=La(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=c0(e);var n=y0.test(e);return n||M0.test(e)?T0(e.slice(2),n?2:8):E0.test(e)?ll:+e}var A0="Expected a function",w0=Math.max,R0=Math.min;function C0(e,t,n){var i,r,a,o,s,l,u=0,d=!1,p=!1,c=!0;if(typeof e!="function")throw new TypeError(A0);t=cl(t)||0,La(n)&&(d=!!n.leading,p="maxWait"in n,a=p?w0(cl(n.maxWait)||0,t):a,c="trailing"in n?!!n.trailing:c);function _(b){var R=i,v=r;return i=r=void 0,u=b,o=e.apply(v,R),o}function m(b){return u=b,s=setTimeout(f,t),d?_(b):o}function E(b){var R=b-l,v=b-u,w=t-R;return p?R0(w,a-v):w}function h(b){var R=b-l,v=b-u;return l===void 0||R>=t||R<0||p&&v>=a}function f(){var b=na();if(h(b))return y(b);s=setTimeout(f,E(b))}function y(b){return s=void 0,c&&i?_(b):(i=r=void 0,o)}function T(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function S(){return s===void 0?o:y(na())}function M(){var b=na(),R=h(b);if(i=arguments,r=this,l=b,R){if(s===void 0)return m(l);if(p)return clearTimeout(s),s=setTimeout(f,t),_(l)}return s===void 0&&(s=setTimeout(f,t)),o}return M.cancel=T,M.flush=S,M}function fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function P0(e){if(Array.isArray(e))return e}function D0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L0(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function I0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function U0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N0(e,t){return P0(e)||I0(e,t)||O0(e,t)||U0()}function O0(e,t){if(e){if(typeof e=="string")return fl(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fl(e,t):void 0}}var F0=L0(function e(t,n){var i=n.default,r=i===void 0?null:i,a=n.triggerUpdate,o=a===void 0?!0:a,s=n.onChange,l=s===void 0?function(u,d){}:s;D0(this,e),this.name=t,this.defaultVal=r,this.triggerUpdate=o,this.onChange=l});function Er(e){var t=e.stateInit,n=t===void 0?function(){return{}}:t,i=e.props,r=i===void 0?{}:i,a=e.methods,o=a===void 0?{}:a,s=e.aliases,l=s===void 0?{}:s,u=e.init,d=u===void 0?function(){}:u,p=e.update,c=p===void 0?function(){}:p,_=Object.keys(r).map(function(m){return new F0(m,r[m])});return function m(){for(var E=arguments.length,h=new Array(E),f=0;f<E;f++)h[f]=arguments[f];var y=!!(this instanceof m&&this.constructor),T=y?h.shift():void 0,S=h[0],M=S===void 0?{}:S,b=Object.assign({},n instanceof Function?n(M):n,{initialised:!1}),R={};function v(C){return w(C,M),D(),v}var w=function(N,Q){d.call(v,N,b,Q),b.initialised=!0},D=C0(function(){b.initialised&&(c.call(v,b,R),R={})},1);return _.forEach(function(C){v[C.name]=N(C);function N(Q){var K=Q.name,j=Q.triggerUpdate,q=j===void 0?!1:j,P=Q.onChange,k=P===void 0?function(X,te){}:P,ee=Q.defaultVal,ae=ee===void 0?null:ee;return function(X){var te=b[K];if(!arguments.length)return te;var ve=X===void 0?ae:X;return b[K]=ve,k.call(v,ve,b,te),!R.hasOwnProperty(K)&&(R[K]=te),q&&D(),v}}}),Object.keys(o).forEach(function(C){v[C]=function(){for(var N,Q=arguments.length,K=new Array(Q),j=0;j<Q;j++)K[j]=arguments[j];return(N=o[C]).call.apply(N,[v,b].concat(K))}}),Object.entries(l).forEach(function(C){var N=N0(C,2),Q=N[0],K=N[1];return v[Q]=v[K]}),v.resetProps=function(){return _.forEach(function(C){v[C.name](C.defaultVal)}),v},v.resetProps(),b._rerender=D,y&&T&&v(T),v}}var ze=(function(e){return typeof e=="function"?e:typeof e=="string"?function(t){return t[e]}:function(t){return e}});class ul extends Map{constructor(t,n=G0){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[i,r]of t)this.set(i,r)}get(t){return super.get(dl(this,t))}has(t){return super.has(dl(this,t))}set(t,n){return super.set(B0(this,t),n)}delete(t){return super.delete(k0(this,t))}}function dl({_intern:e,_key:t},n){const i=t(n);return e.has(i)?e.get(i):n}function B0({_intern:e,_key:t},n){const i=t(n);return e.has(i)?e.get(i):(e.set(i,n),n)}function k0({_intern:e,_key:t},n){const i=t(n);return e.has(i)&&(n=e.get(i),e.delete(i)),n}function G0(e){return e!==null&&typeof e=="object"?e.valueOf():e}function H0(e,t){let n;if(t===void 0)for(const i of e)i!=null&&(n<i||n===void 0&&i>=i)&&(n=i);else{let i=-1;for(let r of e)(r=t(r,++i,e))!=null&&(n<r||n===void 0&&r>=r)&&(n=r)}return n}function V0(e,t){let n;if(t===void 0)for(const i of e)i!=null&&(n>i||n===void 0&&i>=i)&&(n=i);else{let i=-1;for(let r of e)(r=t(r,++i,e))!=null&&(n>r||n===void 0&&r>=r)&&(n=r)}return n}function Ia(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function z0(e){if(Array.isArray(e))return e}function W0(e){if(Array.isArray(e))return Ia(e)}function jc(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function j0(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function X0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rt(e,t){return e.get(jc(e,t))}function jn(e,t,n){j0(e,t),t.set(e,n)}function zi(e,t,n){return e.set(jc(e,t),n),n}function $0(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,nb(i.key),i)}}function q0(e,t,n){return t&&$0(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function K0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Z0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J0(e,t){return z0(e)||Y0(e,t)||Xc(e,t)||Z0()}function eb(e){return W0(e)||K0(e)||Xc(e)||Q0()}function tb(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function nb(e){var t=tb(e,"string");return typeof t=="symbol"?t:t+""}function Xc(e,t){if(e){if(typeof e=="string")return Ia(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ia(e,t):void 0}}var Xn=new WeakMap,hi=new WeakMap,$n=new WeakMap,ia=new WeakMap,ra=new WeakMap,aa=new WeakMap,ib=(function(){function e(){X0(this,e),jn(this,Xn,new Map),jn(this,hi,new Map),jn(this,$n,function(t){return t}),jn(this,ia,function(){return{}}),jn(this,ra,function(){}),jn(this,aa,function(){})}return q0(e,[{key:"getObj",value:function(n){return Rt(Xn,this).get(Rt($n,this).call(this,n))}},{key:"getData",value:function(n){return Rt(hi,this).get(n)}},{key:"entries",value:function(){return eb(Rt(hi,this).entries()).map(function(n){var i=J0(n,2),r=i[0],a=i[1];return[a,r]})}},{key:"id",value:function(n){return zi($n,this,ze(n)),this}},{key:"onCreateObj",value:function(n){return zi(ia,this,n),this}},{key:"onUpdateObj",value:function(n){return zi(ra,this,n),this}},{key:"onRemoveObj",value:function(n){return zi(aa,this,n),this}},{key:"digest",value:function(n){var i=this;n.filter(function(a){return!Rt(Xn,i).has(Rt($n,i).call(i,a))}).forEach(function(a){var o=Rt(ia,i).call(i,a);Rt(Xn,i).set(Rt($n,i).call(i,a),o),Rt(hi,i).set(o,a)});var r=new Map(n.map(function(a){return[Rt($n,i).call(i,a),a]}));return Rt(Xn,this).forEach(function(a,o){r.has(o)?Rt(ra,i).call(i,a,r.get(o)):(Rt(aa,i).call(i,a,o),Rt(Xn,i).delete(o),Rt(hi,i).delete(a))}),this}},{key:"clear",value:function(){return this.digest([]),this}}])})();function rb(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}const hl=Symbol("implicit");function $c(){var e=new ul,t=[],n=[],i=hl;function r(a){let o=e.get(a);if(o===void 0){if(i!==hl)return i;e.set(a,o=t.push(a)-1)}return n[o%n.length]}return r.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new ul;for(const o of a)e.has(o)||e.set(o,t.push(o)-1);return r},r.range=function(a){return arguments.length?(n=Array.from(a),r):n.slice()},r.unknown=function(a){return arguments.length?(i=a,r):i},r.copy=function(){return $c(t,n).unknown(i)},rb.apply(r,arguments),r}function ab(e){for(var t=e.length/6|0,n=new Array(t),i=0;i<t;)n[i]="#"+e.slice(i*6,++i*6);return n}const ob=ab("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function dr(e){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}var sb=/^\s+/,lb=/\s+$/;function we(e,t){if(e=e||"",t=t||{},e instanceof we)return e;if(!(this instanceof we))return new we(e,t);var n=cb(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}we.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,i,r,a,o,s;return n=t.r/255,i=t.g/255,r=t.b/255,n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),.2126*a+.7152*o+.0722*s},setAlpha:function(t){return this._a=qc(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=_l(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=_l(this._r,this._g,this._b),n=Math.round(t.h*360),i=Math.round(t.s*100),r=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+i+"%, "+r+"%)":"hsva("+n+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=pl(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=pl(this._r,this._g,this._b),n=Math.round(t.h*360),i=Math.round(t.s*100),r=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+i+"%, "+r+"%)":"hsla("+n+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return ml(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return hb(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(ft(this._r,255)*100)+"%",g:Math.round(ft(this._g,255)*100)+"%",b:Math.round(ft(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(ft(this._r,255)*100)+"%, "+Math.round(ft(this._g,255)*100)+"%, "+Math.round(ft(this._b,255)*100)+"%)":"rgba("+Math.round(ft(this._r,255)*100)+"%, "+Math.round(ft(this._g,255)*100)+"%, "+Math.round(ft(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Tb[ml(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+gl(this._r,this._g,this._b,this._a),i=n,r=this._gradientType?"GradientType = 1, ":"";if(t){var a=we(t);i="#"+gl(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+i+")"},toString:function(t){var n=!!t;t=t||this._format;var i=!1,r=this._a<1&&this._a>=0,a=!n&&r&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return a?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return we(this.toString())},_applyModification:function(t,n){var i=t.apply(null,[this].concat([].slice.call(n)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(gb,arguments)},brighten:function(){return this._applyModification(vb,arguments)},darken:function(){return this._applyModification(bb,arguments)},desaturate:function(){return this._applyModification(pb,arguments)},saturate:function(){return this._applyModification(_b,arguments)},greyscale:function(){return this._applyModification(mb,arguments)},spin:function(){return this._applyModification(xb,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(yb,arguments)},complement:function(){return this._applyCombination(Sb,arguments)},monochromatic:function(){return this._applyCombination(Mb,arguments)},splitcomplement:function(){return this._applyCombination(Eb,arguments)},triad:function(){return this._applyCombination(vl,[3])},tetrad:function(){return this._applyCombination(vl,[4])}};we.fromRatio=function(e,t){if(dr(e)=="object"){var n={};for(var i in e)e.hasOwnProperty(i)&&(i==="a"?n[i]=e[i]:n[i]=vi(e[i]));e=n}return we(e,t)};function cb(e){var t={r:0,g:0,b:0},n=1,i=null,r=null,a=null,o=!1,s=!1;return typeof e=="string"&&(e=Cb(e)),dr(e)=="object"&&(fn(e.r)&&fn(e.g)&&fn(e.b)?(t=fb(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):fn(e.h)&&fn(e.s)&&fn(e.v)?(i=vi(e.s),r=vi(e.v),t=db(e.h,i,r),o=!0,s="hsv"):fn(e.h)&&fn(e.s)&&fn(e.l)&&(i=vi(e.s),a=vi(e.l),t=ub(e.h,i,a),o=!0,s="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=qc(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function fb(e,t,n){return{r:ft(e,255)*255,g:ft(t,255)*255,b:ft(n,255)*255}}function pl(e,t,n){e=ft(e,255),t=ft(t,255),n=ft(n,255);var i=Math.max(e,t,n),r=Math.min(e,t,n),a,o,s=(i+r)/2;if(i==r)a=o=0;else{var l=i-r;switch(o=s>.5?l/(2-i-r):l/(i+r),i){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4;break}a/=6}return{h:a,s:o,l:s}}function ub(e,t,n){var i,r,a;e=ft(e,360),t=ft(t,100),n=ft(n,100);function o(u,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?u+(d-u)*6*p:p<1/2?d:p<2/3?u+(d-u)*(2/3-p)*6:u}if(t===0)i=r=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=o(l,s,e+1/3),r=o(l,s,e),a=o(l,s,e-1/3)}return{r:i*255,g:r*255,b:a*255}}function _l(e,t,n){e=ft(e,255),t=ft(t,255),n=ft(n,255);var i=Math.max(e,t,n),r=Math.min(e,t,n),a,o,s=i,l=i-r;if(o=i===0?0:l/i,i==r)a=0;else{switch(i){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4;break}a/=6}return{h:a,s:o,v:s}}function db(e,t,n){e=ft(e,360)*6,t=ft(t,100),n=ft(n,100);var i=Math.floor(e),r=e-i,a=n*(1-t),o=n*(1-r*t),s=n*(1-(1-r)*t),l=i%6,u=[n,o,a,a,s,n][l],d=[s,n,n,o,a,a][l],p=[a,a,s,n,n,o][l];return{r:u*255,g:d*255,b:p*255}}function ml(e,t,n,i){var r=[$t(Math.round(e).toString(16)),$t(Math.round(t).toString(16)),$t(Math.round(n).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function hb(e,t,n,i,r){var a=[$t(Math.round(e).toString(16)),$t(Math.round(t).toString(16)),$t(Math.round(n).toString(16)),$t(Kc(i))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function gl(e,t,n,i){var r=[$t(Kc(i)),$t(Math.round(e).toString(16)),$t(Math.round(t).toString(16)),$t(Math.round(n).toString(16))];return r.join("")}we.equals=function(e,t){return!e||!t?!1:we(e).toRgbString()==we(t).toRgbString()};we.random=function(){return we.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function pb(e,t){t=t===0?0:t||10;var n=we(e).toHsl();return n.s-=t/100,n.s=yr(n.s),we(n)}function _b(e,t){t=t===0?0:t||10;var n=we(e).toHsl();return n.s+=t/100,n.s=yr(n.s),we(n)}function mb(e){return we(e).desaturate(100)}function gb(e,t){t=t===0?0:t||10;var n=we(e).toHsl();return n.l+=t/100,n.l=yr(n.l),we(n)}function vb(e,t){t=t===0?0:t||10;var n=we(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),we(n)}function bb(e,t){t=t===0?0:t||10;var n=we(e).toHsl();return n.l-=t/100,n.l=yr(n.l),we(n)}function xb(e,t){var n=we(e).toHsl(),i=(n.h+t)%360;return n.h=i<0?360+i:i,we(n)}function Sb(e){var t=we(e).toHsl();return t.h=(t.h+180)%360,we(t)}function vl(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=we(e).toHsl(),i=[we(e)],r=360/t,a=1;a<t;a++)i.push(we({h:(n.h+a*r)%360,s:n.s,l:n.l}));return i}function Eb(e){var t=we(e).toHsl(),n=t.h;return[we(e),we({h:(n+72)%360,s:t.s,l:t.l}),we({h:(n+216)%360,s:t.s,l:t.l})]}function yb(e,t,n){t=t||6,n=n||30;var i=we(e).toHsl(),r=360/n,a=[we(e)];for(i.h=(i.h-(r*t>>1)+720)%360;--t;)i.h=(i.h+r)%360,a.push(we(i));return a}function Mb(e,t){t=t||6;for(var n=we(e).toHsv(),i=n.h,r=n.s,a=n.v,o=[],s=1/t;t--;)o.push(we({h:i,s:r,v:a})),a=(a+s)%1;return o}we.mix=function(e,t,n){n=n===0?0:n||50;var i=we(e).toRgb(),r=we(t).toRgb(),a=n/100,o={r:(r.r-i.r)*a+i.r,g:(r.g-i.g)*a+i.g,b:(r.b-i.b)*a+i.b,a:(r.a-i.a)*a+i.a};return we(o)};we.readability=function(e,t){var n=we(e),i=we(t);return(Math.max(n.getLuminance(),i.getLuminance())+.05)/(Math.min(n.getLuminance(),i.getLuminance())+.05)};we.isReadable=function(e,t,n){var i=we.readability(e,t),r,a;switch(a=!1,r=Pb(n),r.level+r.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7;break}return a};we.mostReadable=function(e,t,n){var i=null,r=0,a,o,s,l;n=n||{},o=n.includeFallbackColors,s=n.level,l=n.size;for(var u=0;u<t.length;u++)a=we.readability(e,t[u]),a>r&&(r=a,i=we(t[u]));return we.isReadable(e,i,{level:s,size:l})||!o?i:(n.includeFallbackColors=!1,we.mostReadable(e,["#fff","#000"],n))};var Ua=we.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Tb=we.hexNames=Ab(Ua);function Ab(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function qc(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ft(e,t){wb(e)&&(e="100%");var n=Rb(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function yr(e){return Math.min(1,Math.max(0,e))}function Ht(e){return parseInt(e,16)}function wb(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function Rb(e){return typeof e=="string"&&e.indexOf("%")!=-1}function $t(e){return e.length==1?"0"+e:""+e}function vi(e){return e<=1&&(e=e*100+"%"),e}function Kc(e){return Math.round(parseFloat(e)*255).toString(16)}function bl(e){return Ht(e)/255}var jt=(function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",i="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}})();function fn(e){return!!jt.CSS_UNIT.exec(e)}function Cb(e){e=e.replace(sb,"").replace(lb,"").toLowerCase();var t=!1;if(Ua[e])e=Ua[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=jt.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=jt.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=jt.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=jt.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=jt.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=jt.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=jt.hex8.exec(e))?{r:Ht(n[1]),g:Ht(n[2]),b:Ht(n[3]),a:bl(n[4]),format:t?"name":"hex8"}:(n=jt.hex6.exec(e))?{r:Ht(n[1]),g:Ht(n[2]),b:Ht(n[3]),format:t?"name":"hex"}:(n=jt.hex4.exec(e))?{r:Ht(n[1]+""+n[1]),g:Ht(n[2]+""+n[2]),b:Ht(n[3]+""+n[3]),a:bl(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=jt.hex3.exec(e))?{r:Ht(n[1]+""+n[1]),g:Ht(n[2]+""+n[2]),b:Ht(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function Pb(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}function Na(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Db(e){if(Array.isArray(e))return e}function Lb(e){if(Array.isArray(e))return Na(e)}function Yc(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function Ib(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zc(e,t,n){return t=ii(t),Hb(e,ro()?Reflect.construct(t,n||[],ii(e).constructor):t.apply(e,n))}function Ub(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Qc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oa(e,t){return e.get(Yc(e,t))}function xl(e,t,n){Ub(e,t),t.set(e,n)}function Sl(e,t,n){return e.set(Yc(e,t),n),n}function Jc(e,t,n){if(ro())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,t);var r=new(e.bind.apply(e,i));return r}function Nb(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,nf(i.key),i)}}function ef(e,t,n){return t&&Nb(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mr(e,t,n){return(t=nf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(){return Oa=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=Vb(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},Oa.apply(null,arguments)}function ii(e){return ii=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ii(e)}function tf(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fa(e,t)}function ro(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ro=function(){return!!e})()}function Ob(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Bb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function El(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function Gb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?El(Object(n),!0).forEach(function(i){Mr(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):El(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Hb(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ib(e)}function Fa(e,t){return Fa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Fa(e,t)}function Si(e,t){return Db(e)||Fb(e,t)||rf(e,t)||Bb()}function Vb(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=ii(e))!==null;);return e}function sa(e,t,n,i){var r=Oa(ii(e.prototype),t,n);return typeof r=="function"?function(a){return r.apply(n,a)}:r}function Xt(e){return Lb(e)||Ob(e)||rf(e)||kb()}function zb(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nf(e){var t=zb(e,"string");return typeof t=="symbol"?t:t+""}function Ba(e){"@babel/helpers - typeof";return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ba(e)}function rf(e,t){if(e){if(typeof e=="string")return Na(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Na(e,t):void 0}}var af=function(t){t instanceof Array?t.forEach(af):(t.map&&t.map.dispose(),t.dispose())},ao=function(t){t.geometry&&t.geometry.dispose(),t.material&&af(t.material),t.texture&&t.texture.dispose(),t.children&&t.children.forEach(ao)},yl=function(t){for(;t.children.length;){var n=t.children[0];t.remove(n),ao(n)}},la=new WeakMap,Wi=new WeakMap,pi=(function(e){function t(n){var i,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.dataBindAttr,o=a===void 0?"__data":a,s=r.objBindAttr,l=s===void 0?"__threeObj":s;return Qc(this,t),i=Zc(this,t),Mr(i,"scene",void 0),xl(i,la,void 0),xl(i,Wi,void 0),i.scene=n,Sl(la,i,o),Sl(Wi,i,l),i.onRemoveObj(function(){}),i}return tf(t,e),ef(t,[{key:"onCreateObj",value:function(i){var r=this;return sa(t,"onCreateObj",this)([function(a){var o=i(a);return a[oa(Wi,r)]=o,o[oa(la,r)]=a,r.scene.add(o),o}]),this}},{key:"onRemoveObj",value:function(i){var r=this;return sa(t,"onRemoveObj",this)([function(a,o){var s=sa(t,"getData",r)([a]);i(a,o),r.scene.remove(a),ao(a),delete s[oa(Wi,r)]}]),this}}])})(ib),_i=function(t){return isNaN(t)?parseInt(we(t).toHex(),16):t},ca=function(t){return isNaN(t)?we(t).getAlpha():1},Wb=$c(ob);function Ml(e,t,n){!t||typeof n!="string"||e.filter(function(i){return!i[n]}).forEach(function(i){i[n]=Wb(t(i))})}function jb(e,t){var n=e.nodes,i=e.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=r.nodeFilter,o=a===void 0?function(){return!0}:a,s=r.onLoopError,l=s===void 0?function(_){throw"Invalid DAG structure! Found cycle in node path: ".concat(_.join(" -> "),".")}:s,u={};n.forEach(function(_){return u[t(_)]={data:_,out:[],depth:-1,skip:!o(_)}}),i.forEach(function(_){var m=_.source,E=_.target,h=S(m),f=S(E);if(!u.hasOwnProperty(h))throw"Missing source node with id: ".concat(h);if(!u.hasOwnProperty(f))throw"Missing target node with id: ".concat(f);var y=u[h],T=u[f];y.out.push(T);function S(M){return Ba(M)==="object"?t(M):M}});var d=[];c(Object.values(u));var p=Object.assign.apply(Object,[{}].concat(Xt(Object.entries(u).filter(function(_){var m=Si(_,2),E=m[1];return!E.skip}).map(function(_){var m=Si(_,2),E=m[0],h=m[1];return Mr({},E,h.depth)}))));return p;function c(_){for(var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,h=function(){var S=_[f];if(m.indexOf(S)!==-1){var M=[].concat(Xt(m.slice(m.indexOf(S))),[S]).map(function(b){return t(b.data)});return d.some(function(b){return b.length===M.length&&b.every(function(R,v){return R===M[v]})})||(d.push(M),l(M)),1}E>S.depth&&(S.depth=E,c(S.out,[].concat(Xt(m),[S]),E+(S.skip?0:1)))},f=0,y=_.length;f<y;f++)h()}}var Ie=window.THREE?window.THREE:{Group:eo,Mesh:Ft,MeshLambertMaterial:od,Color:Qe,BufferGeometry:Gn,BufferAttribute:Qn,Matrix4:Cn,Vector3:Ee,SphereGeometry:cr,CylinderGeometry:sd,TubeGeometry:ud,ConeGeometry:fd,Line:gc,LineBasicMaterial:bc,QuadraticBezierCurve3:cd,CubicBezierCurve3:ld,Box3:vc},Tl={graph:Wv,forcelayout:i0},Xb=2,fa=new Ie.BufferGeometry().setAttribute?"setAttribute":"addAttribute",ji=new Ie.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",$b=Er({props:{jsonUrl:{onChange:function(t,n){var i=this;t&&!n.fetchingJson&&(n.fetchingJson=!0,n.onLoading(),fetch(t).then(function(r){return r.json()}).then(function(r){n.fetchingJson=!1,n.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(t,n){n.engineRunning=!1}},numDimensions:{default:3,onChange:function(t,n){var i=n.d3ForceLayout.force("charge");i&&i.strength(t>2?-60:-30),t<3&&r(n.graphData.nodes,"z"),t<2&&r(n.graphData.nodes,"y");function r(a,o){a.forEach(function(s){delete s[o],delete s["v".concat(o)]})}}},dagMode:{onChange:function(t,n){!t&&n.forceEngine==="d3"&&(n.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(t){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleOffset:{default:0,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},linkDirectionalParticleThreeObject:{},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(t,n){n.d3ForceLayout.alphaDecay(t)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(t,n){n.d3ForceLayout.alphaTarget(t)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(t,n){n.d3ForceLayout.velocityDecay(t)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(t){return t._flushObjects=!0,t._rerender(),this},d3Force:function(t,n,i){return i===void 0?t.d3ForceLayout.force(n):(t.d3ForceLayout.force(n,i),this)},d3ReheatSimulation:function(t){return t.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(t){return t.cntTicks=0,t.startTickTime=new Date,t.engineRunning=!0,this},tickFrame:function(t){var n=t.forceEngine!=="ngraph";return t.engineRunning&&i(),r(),a(),this;function i(){++t.cntTicks>t.cooldownTicks||new Date-t.startTickTime>t.cooldownTime||n&&t.d3AlphaMin>0&&t.d3ForceLayout.alpha()<t.d3AlphaMin?(t.engineRunning=!1,t.onEngineStop()):(t.layout[n?"tick":"step"](),t.onEngineTick());var o=ze(t.nodeThreeObjectExtend);t.nodeDataMapper.entries().forEach(function(c){var _=Si(c,2),m=_[0],E=_[1];if(E){var h=n?m:t.layout.getNodePosition(m[t.nodeId]),f=o(m);(!t.nodePositionUpdate||!t.nodePositionUpdate(f?E.children[0]:E,{x:h.x,y:h.y,z:h.z},m)||f)&&(E.position.x=h.x,E.position.y=h.y||0,E.position.z=h.z||0)}});var s=ze(t.linkWidth),l=ze(t.linkCurvature),u=ze(t.linkCurveRotation),d=ze(t.linkThreeObjectExtend);t.linkDataMapper.entries().forEach(function(c){var _=Si(c,2),m=_[0],E=_[1];if(E){var h=n?m:t.layout.getLinkPosition(t.layout.graph.getLink(m.source,m.target).id),f=h[n?"source":"from"],y=h[n?"target":"to"];if(!(!f||!y||!f.hasOwnProperty("x")||!y.hasOwnProperty("x"))){p(m);var T=d(m);if(!(t.linkPositionUpdate&&t.linkPositionUpdate(T?E.children[1]:E,{start:{x:f.x,y:f.y,z:f.z},end:{x:y.x,y:y.y,z:y.z}},m)&&!T)){var S=30,M=m.__curve,b=E.children.length?E.children[0]:E;if(b.type==="Line"){if(M){var v=M.getPoints(S);b.geometry.getAttribute("position").array.length!==v.length*3&&b.geometry[fa]("position",new Ie.BufferAttribute(new Float32Array(v.length*3),3)),b.geometry.setFromPoints(v)}else{var R=b.geometry.getAttribute("position");(!R||!R.array||R.array.length!==6)&&b.geometry[fa]("position",R=new Ie.BufferAttribute(new Float32Array(6),3)),R.array[0]=f.x,R.array[1]=f.y||0,R.array[2]=f.z||0,R.array[3]=y.x,R.array[4]=y.y||0,R.array[5]=y.z||0,R.needsUpdate=!0}b.geometry.computeBoundingSphere()}else if(b.type==="Mesh")if(M){b.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(b.position.set(0,0,0),b.rotation.set(0,0,0),b.scale.set(1,1,1));var j=Math.ceil(s(m)*10)/10,q=j/2,P=new Ie.TubeGeometry(M,S,q,t.linkResolution,!1);b.geometry.dispose(),b.geometry=P}else{if(!b.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var w=Math.ceil(s(m)*10)/10,D=w/2,C=new Ie.CylinderGeometry(D,D,1,t.linkResolution,1,!1);C[ji](new Ie.Matrix4().makeTranslation(0,1/2,0)),C[ji](new Ie.Matrix4().makeRotationX(Math.PI/2)),b.geometry.dispose(),b.geometry=C}var N=new Ie.Vector3(f.x,f.y||0,f.z||0),Q=new Ie.Vector3(y.x,y.y||0,y.z||0),K=N.distanceTo(Q);b.position.x=N.x,b.position.y=N.y,b.position.z=N.z,b.scale.z=K,b.parent.localToWorld(Q),b.lookAt(Q)}}}}});function p(c){var _=n?c:t.layout.getLinkPosition(t.layout.graph.getLink(c.source,c.target).id),m=_[n?"source":"from"],E=_[n?"target":"to"];if(!(!m||!E||!m.hasOwnProperty("x")||!E.hasOwnProperty("x"))){var h=l(c);if(!h)c.__curve=null;else{var f=new Ie.Vector3(m.x,m.y||0,m.z||0),y=new Ie.Vector3(E.x,E.y||0,E.z||0),T=f.distanceTo(y),S,M=u(c);if(T>0){var b=E.x-m.x,R=E.y-m.y||0,v=new Ie.Vector3().subVectors(y,f),w=v.clone().multiplyScalar(h).cross(b!==0||R!==0?new Ie.Vector3(0,0,1):new Ie.Vector3(0,1,0)).applyAxisAngle(v.normalize(),M).add(new Ie.Vector3().addVectors(f,y).divideScalar(2));S=new Ie.QuadraticBezierCurve3(f,w,y)}else{var D=h*70,C=-M,N=C+Math.PI/2;S=new Ie.CubicBezierCurve3(f,new Ie.Vector3(D*Math.cos(N),D*Math.sin(N),0).add(f),new Ie.Vector3(D*Math.cos(C),D*Math.sin(C),0).add(f),y)}c.__curve=S}}}}function r(){var o=ze(t.linkDirectionalArrowRelPos),s=ze(t.linkDirectionalArrowLength),l=ze(t.nodeVal);t.arrowDataMapper.entries().forEach(function(u){var d=Si(u,2),p=d[0],c=d[1];if(c){var _=n?p:t.layout.getLinkPosition(t.layout.graph.getLink(p.source,p.target).id),m=_[n?"source":"from"],E=_[n?"target":"to"];if(!(!m||!E||!m.hasOwnProperty("x")||!E.hasOwnProperty("x"))){var h=Math.cbrt(Math.max(0,l(m)||1))*t.nodeRelSize,f=Math.cbrt(Math.max(0,l(E)||1))*t.nodeRelSize,y=s(p),T=o(p),S=p.__curve?function(D){return p.__curve.getPoint(D)}:function(D){var C=function(Q,K,j,q){return K[Q]+(j[Q]-K[Q])*q||0};return{x:C("x",m,E,D),y:C("y",m,E,D),z:C("z",m,E,D)}},M=p.__curve?p.__curve.getLength():Math.sqrt(["x","y","z"].map(function(D){return Math.pow((E[D]||0)-(m[D]||0),2)}).reduce(function(D,C){return D+C},0)),b=h+y+(M-h-f-y)*T,R=S(b/M),v=S((b-y)/M);["x","y","z"].forEach(function(D){return c.position[D]=v[D]});var w=Jc(Ie.Vector3,Xt(["x","y","z"].map(function(D){return R[D]})));c.parent.localToWorld(w),c.lookAt(w)}}})}function a(){var o=ze(t.linkDirectionalParticleSpeed),s=ze(t.linkDirectionalParticleOffset);t.graphData.links.forEach(function(l){var u=t.particlesDataMapper.getObj(l),d=u&&u.children,p=l.__singleHopPhotonsObj&&l.__singleHopPhotonsObj.children;if(!((!p||!p.length)&&(!d||!d.length))){var c=n?l:t.layout.getLinkPosition(t.layout.graph.getLink(l.source,l.target).id),_=c[n?"source":"from"],m=c[n?"target":"to"];if(!(!_||!m||!_.hasOwnProperty("x")||!m.hasOwnProperty("x"))){var E=o(l),h=Math.abs(s(l)),f=l.__curve?function(T){return l.__curve.getPoint(T)}:function(T){var S=function(b,R,v,w){return R[b]+(v[b]-R[b])*w||0};return{x:S("x",_,m,T),y:S("y",_,m,T),z:S("z",_,m,T)}},y=[].concat(Xt(d||[]),Xt(p||[]));y.forEach(function(T,S){var M=T.parent.__linkThreeObjType==="singleHopPhotons";if(T.hasOwnProperty("__progressRatio")||(T.__progressRatio=M?E<0?1:0:(S+h)/d.length),T.__progressRatio+=E,T.__progressRatio>=1||T.__progressRatio<0)if(!M)T.__progressRatio=T.__progressRatio%1,T.__progressRatio<0&&T.__progressRatio++;else{T.parent.remove(T),yl(T);return}var b=T.__progressRatio,R=f(b);T.geometry.type!=="SphereGeometry"&&T.lookAt(R.x,R.y,R.z),["x","y","z"].forEach(function(v){return T.position[v]=R[v]})})}}})}},emitParticle:function(t,n){if(n&&t.graphData.links.includes(n)){if(!n.__singleHopPhotonsObj){var i=new Ie.Group;i.__linkThreeObjType="singleHopPhotons",n.__singleHopPhotonsObj=i,t.graphScene.add(i)}var r=ze(t.linkDirectionalParticleThreeObject)(n);if(r&&t.linkDirectionalParticleThreeObject===r&&(r=r.clone()),!r){var a=ze(t.linkDirectionalParticleWidth),o=Math.ceil(a(n)*10)/10/2,s=t.linkDirectionalParticleResolution,l=new Ie.SphereGeometry(o,s,s),u=ze(t.linkColor),d=ze(t.linkDirectionalParticleColor),p=d(n)||u(n)||"#f0f0f0",c=new Ie.Color(_i(p)),_=t.linkOpacity*3,m=new Ie.MeshLambertMaterial({color:c,transparent:!0,opacity:_});r=new Ie.Mesh(l,m)}n.__singleHopPhotonsObj.add(r)}return this},getGraphBbox:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!t.initialised)return null;var i=(function r(a){var o=[];if(a.geometry){a.geometry.computeBoundingBox();var s=new Ie.Box3;s.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),o.push(s)}return o.concat.apply(o,Xt((a.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&n(l.__data)}).map(r)))})(t.graphScene);return i.length?Object.assign.apply(Object,Xt(["x","y","z"].map(function(r){return Mr({},r,[V0(i,function(a){return a.min[r]}),H0(i,function(a){return a.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:Bv().force("link",Pv()).force("charge",kv()).force("center",Lg()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(t,n){n.graphScene=t,n.nodeDataMapper=new pi(t,{objBindAttr:"__threeObj"}),n.linkDataMapper=new pi(t,{objBindAttr:"__lineObj"}),n.arrowDataMapper=new pi(t,{objBindAttr:"__arrowObj"}),n.particlesDataMapper=new pi(t,{objBindAttr:"__photonsObj"})},update:function(t,n){var i=function(L){return L.some(function($){return n.hasOwnProperty($)})};if(t.engineRunning=!1,typeof t.onUpdate=="function"&&t.onUpdate(),t.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&Ml(t.graphData.nodes,ze(t.nodeAutoColorBy),t.nodeColor),t.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&Ml(t.graphData.links,ze(t.linkAutoColorBy),t.linkColor),t._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=ze(t.nodeThreeObject),a=ze(t.nodeThreeObjectExtend),o=ze(t.nodeVal),s=ze(t.nodeColor),l=ze(t.nodeVisibility),u={},d={};(t._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]))&&t.nodeDataMapper.clear(),t.nodeDataMapper.onCreateObj(function(G){var L=r(G),$=a(G);L&&t.nodeThreeObject===L&&(L=L.clone());var J;return L&&!$?J=L:(J=new Ie.Mesh,J.__graphDefaultObj=!0,L&&$&&J.add(L)),J.__graphObjType="node",J}).onUpdateObj(function(G,L){if(G.__graphDefaultObj){var $=o(L)||1,J=Math.cbrt($)*t.nodeRelSize,be=t.nodeResolution;(!G.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||G.geometry.parameters.radius!==J||G.geometry.parameters.widthSegments!==be)&&(u.hasOwnProperty($)||(u[$]=new Ie.SphereGeometry(J,be,be)),G.geometry.dispose(),G.geometry=u[$]);var ye=s(L),_e=new Ie.Color(_i(ye||"#ffffaa")),$e=t.nodeOpacity*ca(ye);(G.material.type!=="MeshLambertMaterial"||!G.material.color.equals(_e)||G.material.opacity!==$e)&&(d.hasOwnProperty(ye)||(d[ye]=new Ie.MeshLambertMaterial({color:_e,transparent:!0,opacity:$e})),G.material.dispose(),G.material=d[ye])}}).digest(t.graphData.nodes.filter(l))}if(t._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","linkDirectionalParticleThreeObject"])){var p=ze(t.linkThreeObject),c=ze(t.linkThreeObjectExtend),_=ze(t.linkMaterial),m=ze(t.linkVisibility),E=ze(t.linkColor),h=ze(t.linkWidth),f={},y={},T={},S=t.graphData.links.filter(m);if((t._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]))&&t.linkDataMapper.clear(),t.linkDataMapper.onRemoveObj(function(G){var L=G.__data&&G.__data.__singleHopPhotonsObj;L&&(L.parent.remove(L),yl(L),delete G.__data.__singleHopPhotonsObj)}).onCreateObj(function(G){var L=p(G),$=c(G);L&&t.linkThreeObject===L&&(L=L.clone());var J;if(!L||$){var be=!!h(G);if(be)J=new Ie.Mesh;else{var ye=new Ie.BufferGeometry;ye[fa]("position",new Ie.BufferAttribute(new Float32Array(6),3)),J=new Ie.Line(ye)}}var _e;return L?$?(_e=new Ie.Group,_e.__graphDefaultObj=!0,_e.add(J),_e.add(L)):_e=L:(_e=J,_e.__graphDefaultObj=!0),_e.renderOrder=10,_e.__graphObjType="link",_e}).onUpdateObj(function(G,L){if(G.__graphDefaultObj){var $=G.children.length?G.children[0]:G,J=Math.ceil(h(L)*10)/10,be=!!J;if(be){var ye=J/2,_e=t.linkResolution;if(!$.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||$.geometry.parameters.radiusTop!==ye||$.geometry.parameters.radialSegments!==_e){if(!f.hasOwnProperty(J)){var $e=new Ie.CylinderGeometry(ye,ye,1,_e,1,!1);$e[ji](new Ie.Matrix4().makeTranslation(0,1/2,0)),$e[ji](new Ie.Matrix4().makeRotationX(Math.PI/2)),f[J]=$e}$.geometry.dispose(),$.geometry=f[J]}}var Ne=_(L);if(Ne)$.material=Ne;else{var We=E(L),Ve=new Ie.Color(_i(We||"#f0f0f0")),Be=t.linkOpacity*ca(We),Ye=be?"MeshLambertMaterial":"LineBasicMaterial";if($.material.type!==Ye||!$.material.color.equals(Ve)||$.material.opacity!==Be){var lt=be?y:T;lt.hasOwnProperty(We)||(lt[We]=new Ie[Ye]({color:Ve,transparent:Be<1,opacity:Be,depthWrite:Be>=1})),$.material.dispose(),$.material=lt[We]}}}}).digest(S),t.linkDirectionalArrowLength||n.hasOwnProperty("linkDirectionalArrowLength")){var M=ze(t.linkDirectionalArrowLength),b=ze(t.linkDirectionalArrowColor);t.arrowDataMapper.onCreateObj(function(){var G=new Ie.Mesh(void 0,new Ie.MeshLambertMaterial({transparent:!0}));return G.__linkThreeObjType="arrow",G}).onUpdateObj(function(G,L){var $=M(L),J=t.linkDirectionalArrowResolution;if(!G.geometry.type.match(/^Cone(Buffer)?Geometry$/)||G.geometry.parameters.height!==$||G.geometry.parameters.radialSegments!==J){var be=new Ie.ConeGeometry($*.25,$,J);be.translate(0,$/2,0),be.rotateX(Math.PI/2),G.geometry.dispose(),G.geometry=be}var ye=b(L)||E(L)||"#f0f0f0";G.material.color=new Ie.Color(_i(ye)),G.material.opacity=t.linkOpacity*3*ca(ye)}).digest(S.filter(M))}if(t.linkDirectionalParticles||n.hasOwnProperty("linkDirectionalParticles")){var R=ze(t.linkDirectionalParticles),v=ze(t.linkDirectionalParticleWidth),w=ze(t.linkDirectionalParticleColor),D=ze(t.linkDirectionalParticleThreeObject),C={},N={};t.particlesDataMapper.onCreateObj(function(){var G=new Ie.Group;return G.__linkThreeObjType="photons",G.__photonDataMapper=new pi(G),G}).onUpdateObj(function(G,L){var $=!!G.children.length&&G.children[0],J=D(L),be,ye;if(J)be=J.geometry,ye=J.material;else{var _e=Math.ceil(v(L)*10)/10/2,$e=t.linkDirectionalParticleResolution;$&&$.geometry.parameters.radius===_e&&$.geometry.parameters.widthSegments===$e?be=$.geometry:(N.hasOwnProperty(_e)||(N[_e]=new Ie.SphereGeometry(_e,$e,$e)),be=N[_e]);var Ne=w(L)||E(L)||"#f0f0f0",We=new Ie.Color(_i(Ne)),Ve=t.linkOpacity*3;$&&$.material.color.equals(We)&&$.material.opacity===Ve?ye=$.material:(C.hasOwnProperty(Ne)||(C[Ne]=new Ie.MeshLambertMaterial({color:We,transparent:!0,opacity:Ve})),ye=C[Ne])}$&&($.geometry!==be&&$.geometry.dispose(),$.material!==ye&&$.material.dispose());var Be=Math.round(Math.abs(R(L)));G.__photonDataMapper.id(function(Ye){return Ye.idx}).onCreateObj(function(){return new Ie.Mesh(be,ye)}).onUpdateObj(function(Ye){Ye.geometry=be,Ye.material=ye}).digest(Xt(new Array(Be)).map(function(Ye,lt){return{idx:lt}}))}).digest(S.filter(R))}}if(t._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){t.engineRunning=!1,t.graphData.links.forEach(function(G){G.source=G[t.linkSource],G.target=G[t.linkTarget]});var Q=t.forceEngine!=="ngraph",K;if(Q){(K=t.d3ForceLayout).stop().alpha(1).numDimensions(t.numDimensions).nodes(t.graphData.nodes);var j=t.d3ForceLayout.force("link");j&&j.id(function(G){return G[t.nodeId]}).links(t.graphData.links);var q=t.dagMode&&jb(t.graphData,function(G){return G[t.nodeId]},{nodeFilter:t.dagNodeFilter,onLoopError:t.onDagError||void 0}),P=Math.max.apply(Math,Xt(Object.values(q||[]))),k=t.dagLevelDistance||t.graphData.nodes.length/(P||1)*Xb*(["radialin","radialout"].indexOf(t.dagMode)!==-1?.7:1);if(["lr","rl","td","bu","zin","zout"].includes(n.dagMode)){var ee=["lr","rl"].includes(n.dagMode)?"fx":["td","bu"].includes(n.dagMode)?"fy":"fz";t.graphData.nodes.filter(t.dagNodeFilter).forEach(function(G){return delete G[ee]})}if(["lr","rl","td","bu","zin","zout"].includes(t.dagMode)){var ae=["rl","td","zout"].includes(t.dagMode),X=function(L){return(q[L[t.nodeId]]-P/2)*k*(ae?-1:1)},te=["lr","rl"].includes(t.dagMode)?"fx":["td","bu"].includes(t.dagMode)?"fy":"fz";t.graphData.nodes.filter(t.dagNodeFilter).forEach(function(G){return G[te]=X(G)})}t.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(t.dagMode)!==-1?Gv(function(G){var L=q[G[t.nodeId]]||-1;return(t.dagMode==="radialin"?P-L:L)*k}).strength(function(G){return t.dagNodeFilter(G)?1:0}):null)}else{var ve=Tl.graph();t.graphData.nodes.forEach(function(G){ve.addNode(G[t.nodeId])}),t.graphData.links.forEach(function(G){ve.addLink(G.source,G.target)}),K=Tl.forcelayout(ve,Gb({dimensions:t.numDimensions},t.ngraphPhysics)),K.graph=ve}for(var Ue=0;Ue<t.warmupTicks&&!(Q&&t.d3AlphaMin>0&&t.d3ForceLayout.alpha()<t.d3AlphaMin);Ue++)K[Q?"tick":"step"]();t.layout=K,this.resetCountdown()}t.engineRunning=!0,t.onFinishUpdate()}});function qb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=(function(r){function a(){var o;Qc(this,a);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return o=Zc(this,a,[].concat(l)),o.__kapsuleInstance=Jc(e,[].concat(Xt(n?[o]:[]),l)),o}return tf(a,r),ef(a)})(t);return Object.keys(e()).forEach(function(r){return i.prototype[r]=function(){var a,o=(a=this.__kapsuleInstance)[r].apply(a,arguments);return o===this.__kapsuleInstance?this:o}}),i}var Kb=window.THREE?window.THREE:{Group:eo},of=qb($b,Kb.Group,!0);const ua={type:"change"},oo={type:"start"},so={type:"end"},Al=1e-6,qe={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Xi=new Ge,Mn=new Ge,Yb=new Ee,$i=new Ee,da=new Ee,qn=new Ri,wl=new Ee,qi=new Ee,ha=new Ee,Ki=new Ee;class Zb extends br{constructor(t,n=null){super(t,n),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Tt.ROTATE,MIDDLE:Tt.DOLLY,RIGHT:Tt.PAN},this.target=new Ee,this.state=qe.NONE,this.keyState=qe.NONE,this._lastPosition=new Ee,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new Ee,this._movePrev=new Ge,this._moveCurr=new Ge,this._lastAxis=new Ee,this._zoomStart=new Ge,this._zoomEnd=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._pointers=[],this._pointerPositions={},this._onPointerMove=Jb.bind(this),this._onPointerDown=Qb.bind(this),this._onPointerUp=ex.bind(this),this._onPointerCancel=tx.bind(this),this._onContextMenu=lx.bind(this),this._onMouseWheel=sx.bind(this),this._onKeyDown=ix.bind(this),this._onKeyUp=nx.bind(this),this._onTouchStart=cx.bind(this),this._onTouchMove=fx.bind(this),this._onTouchEnd=ux.bind(this),this._onMouseDown=rx.bind(this),this._onMouseMove=ax.bind(this),this._onMouseUp=ox.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,n!==null&&(this.connect(n),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction=""}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),n=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-n.clientLeft,this.screen.top=t.top+window.pageYOffset-n.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Al&&(this.dispatchEvent(ua),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Al||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(ua),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=qe.NONE,this.keyState=qe.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(ua),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Mn.copy(this._panEnd).sub(this._panStart),Mn.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,n=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Mn.x*=t,Mn.y*=n}Mn.multiplyScalar(this._eye.length()*this.panSpeed),$i.copy(this._eye).cross(this.object.up).setLength(Mn.x),$i.add(Yb.copy(this.object.up).setLength(Mn.y)),this.object.position.add($i),this.target.add($i),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Mn.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Ki.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=Ki.length();t?(this._eye.copy(this.object.position).sub(this.target),wl.copy(this._eye).normalize(),qi.copy(this.object.up).normalize(),ha.crossVectors(qi,wl).normalize(),qi.setLength(this._moveCurr.y-this._movePrev.y),ha.setLength(this._moveCurr.x-this._movePrev.x),Ki.copy(qi.add(ha)),da.crossVectors(Ki,this._eye).normalize(),t*=this.rotateSpeed,qn.setFromAxisAngle(da,t),this._eye.applyQuaternion(qn),this.object.up.applyQuaternion(qn),this._lastAxis.copy(da),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),qn.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(qn),this.object.up.applyQuaternion(qn)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===qe.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=wa.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=wa.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,n){return Xi.set((t-this.screen.left)/this.screen.width,(n-this.screen.top)/this.screen.height),Xi}_getMouseOnCircle(t,n){return Xi.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-n))/this.screen.width),Xi}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==t.pointerId){this._pointers.splice(n,1);return}}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ge,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function Qb(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e))}function Jb(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function ex(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchEnd(e):this._onMouseUp(),this._removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function tx(e){this._removePointer(e)}function nx(){this.enabled!==!1&&(this.keyState=qe.NONE,window.addEventListener("keydown",this._onKeyDown))}function ix(e){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===qe.NONE&&(e.code===this.keys[qe.ROTATE]&&!this.noRotate?this.keyState=qe.ROTATE:e.code===this.keys[qe.ZOOM]&&!this.noZoom?this.keyState=qe.ZOOM:e.code===this.keys[qe.PAN]&&!this.noPan&&(this.keyState=qe.PAN)))}function rx(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tt.DOLLY:this.state=qe.ZOOM;break;case Tt.ROTATE:this.state=qe.ROTATE;break;case Tt.PAN:this.state=qe.PAN;break;default:this.state=qe.NONE}const n=this.keyState!==qe.NONE?this.keyState:this.state;n===qe.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):n===qe.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):n===qe.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(oo)}function ax(e){const t=this.keyState!==qe.NONE?this.keyState:this.state;t===qe.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY))):t===qe.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(e.pageX,e.pageY)):t===qe.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(e.pageX,e.pageY))}function ox(){this.state=qe.NONE,this.dispatchEvent(so)}function sx(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.dispatchEvent(oo),this.dispatchEvent(so)}}function lx(e){this.enabled!==!1&&e.preventDefault()}function cx(e){if(this._trackPointer(e),this._pointers.length===1)this.state=qe.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);else{this.state=qe.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,n=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+n*n);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,r=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,r)),this._panEnd.copy(this._panStart)}this.dispatchEvent(oo)}function fx(e){if(this._trackPointer(e),this._pointers.length===1)this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY));else{const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(n*n+i*i);const r=(e.pageX+t.x)/2,a=(e.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(r,a))}}function ux(e){switch(this._pointers.length){case 0:this.state=qe.NONE;break;case 1:this.state=qe.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=qe.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==e.pointerId){const n=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(n.x,n.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(so)}const Rl={type:"change"},lo={type:"start"},sf={type:"end"},Yi=new dd,Cl=new Qa,dx=Math.cos(70*wa.DEG2RAD),bt=new Ee,It=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pa=1e-6;class hx extends br{constructor(t,n=null){super(t,n),this.state=et.NONE,this.target=new Ee,this.cursor=new Ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tt.ROTATE,MIDDLE:Tt.DOLLY,RIGHT:Tt.PAN},this.touches={ONE:gn.ROTATE,TWO:gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Ee,this._lastQuaternion=new Ri,this._lastTargetPosition=new Ee,this._quat=new Ri().setFromUnitVectors(t.up,new Ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new us,this._sphericalDelta=new us,this._scale=1,this._panOffset=new Ee,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new Ee,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_x.bind(this),this._onPointerDown=px.bind(this),this._onPointerUp=mx.bind(this),this._onContextMenu=yx.bind(this),this._onMouseWheel=bx.bind(this),this._onKeyDown=xx.bind(this),this._onTouchStart=Sx.bind(this),this._onTouchMove=Ex.bind(this),this._onMouseDown=gx.bind(this),this._onMouseMove=vx.bind(this),this._interceptControlDown=Mx.bind(this),this._interceptControlUp=Tx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rl),this.update(),this.state=et.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;bt.copy(n).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=It:i>Math.PI&&(i-=It),r<-Math.PI?r+=It:r>Math.PI&&(r-=It),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=bt.length();o=this._clampDistance(s*this._scale);const l=s-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const s=new Ee(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const u=new Ee(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(s),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yi.origin.copy(this.object.position),Yi.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yi.direction))<dx?this.object.lookAt(this.target):(Cl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yi.intersectPlane(Cl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pa||this._lastTargetPosition.distanceToSquared(this.target)>pa?(this.dispatchEvent(Rl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?It/60*this.autoRotateSpeed*t:It/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){bt.setFromMatrixColumn(n,0),bt.multiplyScalar(-t),this._panOffset.add(bt)}_panUp(t,n){this.screenSpacePanning===!0?bt.setFromMatrixColumn(n,1):(bt.setFromMatrixColumn(n,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(t),this._panOffset.add(bt)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let a=bt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,a=n-i.top,o=i.width,s=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(It*this._rotateDelta.x/n.clientHeight),this._rotateUp(It*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(It*this._rotateDelta.x/n.clientHeight),this._rotateUp(It*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,s=(t.pageY+n.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ge,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function px(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _x(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function mx(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function gx(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=et.DOLLY;break;case Tt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=et.ROTATE}break;case Tt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(lo)}function vx(e){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function bx(e){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(e.preventDefault(),this.dispatchEvent(lo),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(sf))}function xx(e){this.enabled!==!1&&this._handleKeyDown(e)}function Sx(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case gn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=et.TOUCH_ROTATE;break;case gn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case gn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=et.TOUCH_DOLLY_PAN;break;case gn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(lo)}function Ex(e){switch(this._trackPointer(e),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=et.NONE}}function yx(e){this.enabled!==!1&&e.preventDefault()}function Mx(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tx(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ax={type:"change"},Pl=1e-6,Dl=new Ri;class wx extends br{constructor(t,n=null){super(t,n),this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1,this._moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this._moveVector=new Ee(0,0,0),this._rotationVector=new Ee(0,0,0),this._lastQuaternion=new Ri,this._lastPosition=new Ee,this._status=0,this._onKeyDown=Rx.bind(this),this._onKeyUp=Cx.bind(this),this._onPointerMove=Dx.bind(this),this._onPointerDown=Px.bind(this),this._onPointerUp=Lx.bind(this),this._onPointerCancel=Ix.bind(this),this._onContextMenu=Ux.bind(this),n!==null&&this.connect(n)}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction=""}dispose(){this.disconnect()}update(t){if(this.enabled===!1)return;const n=this.object,i=t*this.movementSpeed,r=t*this.rollSpeed;n.translateX(this._moveVector.x*i),n.translateY(this._moveVector.y*i),n.translateZ(this._moveVector.z*i),Dl.set(this._rotationVector.x*r,this._rotationVector.y*r,this._rotationVector.z*r,1).normalize(),n.quaternion.multiply(Dl),(this._lastPosition.distanceToSquared(n.position)>Pl||8*(1-this._lastQuaternion.dot(n.quaternion))>Pl)&&(this.dispatchEvent(Ax),this._lastQuaternion.copy(n.quaternion),this._lastPosition.copy(n.position))}_updateMovementVector(){const t=this._moveState.forward||this.autoForward&&!this._moveState.back?1:0;this._moveVector.x=-this._moveState.left+this._moveState.right,this._moveVector.y=-this._moveState.down+this._moveState.up,this._moveVector.z=-t+this._moveState.back}_updateRotationVector(){this._rotationVector.x=-this._moveState.pitchDown+this._moveState.pitchUp,this._rotationVector.y=-this._moveState.yawRight+this._moveState.yawLeft,this._rotationVector.z=-this._moveState.rollRight+this._moveState.rollLeft}_getContainerDimensions(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}}}function Rx(e){if(!(e.altKey||this.enabled===!1)){switch(e.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this._moveState.forward=1;break;case"KeyS":this._moveState.back=1;break;case"KeyA":this._moveState.left=1;break;case"KeyD":this._moveState.right=1;break;case"KeyR":this._moveState.up=1;break;case"KeyF":this._moveState.down=1;break;case"ArrowUp":this._moveState.pitchUp=1;break;case"ArrowDown":this._moveState.pitchDown=1;break;case"ArrowLeft":this._moveState.yawLeft=1;break;case"ArrowRight":this._moveState.yawRight=1;break;case"KeyQ":this._moveState.rollLeft=1;break;case"KeyE":this._moveState.rollRight=1;break}this._updateMovementVector(),this._updateRotationVector()}}function Cx(e){if(this.enabled!==!1){switch(e.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this._moveState.forward=0;break;case"KeyS":this._moveState.back=0;break;case"KeyA":this._moveState.left=0;break;case"KeyD":this._moveState.right=0;break;case"KeyR":this._moveState.up=0;break;case"KeyF":this._moveState.down=0;break;case"ArrowUp":this._moveState.pitchUp=0;break;case"ArrowDown":this._moveState.pitchDown=0;break;case"ArrowLeft":this._moveState.yawLeft=0;break;case"ArrowRight":this._moveState.yawRight=0;break;case"KeyQ":this._moveState.rollLeft=0;break;case"KeyE":this._moveState.rollRight=0;break}this._updateMovementVector(),this._updateRotationVector()}}function Px(e){if(this.enabled!==!1)if(this.dragToLook)this._status++;else{switch(e.button){case 0:this._moveState.forward=1;break;case 2:this._moveState.back=1;break}this._updateMovementVector()}}function Dx(e){if(this.enabled!==!1&&(!this.dragToLook||this._status>0)){const t=this._getContainerDimensions(),n=t.size[0]/2,i=t.size[1]/2;this._moveState.yawLeft=-(e.pageX-t.offset[0]-n)/n,this._moveState.pitchDown=(e.pageY-t.offset[1]-i)/i,this._updateRotationVector()}}function Lx(e){if(this.enabled!==!1){if(this.dragToLook)this._status--,this._moveState.yawLeft=this._moveState.pitchDown=0;else{switch(e.button){case 0:this._moveState.forward=0;break;case 2:this._moveState.back=0;break}this._updateMovementVector()}this._updateRotationVector()}}function Ix(){this.enabled!==!1&&(this.dragToLook?(this._status=0,this._moveState.yawLeft=this._moveState.pitchDown=0):(this._moveState.forward=0,this._moveState.back=0,this._updateMovementVector()),this._updateRotationVector())}function Ux(e){this.enabled!==!1&&e.preventDefault()}const Nx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ox=new Ka(-1,1,1,-1,0,1);class Fx extends Gn{constructor(){super(),this.setAttribute("position",new or([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new or([0,2,0,0,2,0],2))}}const Bx=new Fx;class kx{constructor(t){this._mesh=new Ft(Bx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ox)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Gx extends Tr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Kt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ic.clone(t.uniforms),this.material=new Kt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new kx(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ll extends Tr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const r=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Hx extends Tr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vx{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new Ge);this._width=i.width,this._height=i.height,n=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gx(Nx),this.copyPass.material.blending=sn,this.timer=new xc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ll!==void 0&&(o instanceof Ll?i=!0:o instanceof Hx&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zx extends Tr{constructor(t,n,i=null,r=null,a=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(t,n,i){const r=t.autoClear;t.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}function Bt(){return Bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Bt.apply(null,arguments)}function Wx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ci(e,t){return Ci=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Ci(e,t)}function jx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ci(e,t)}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ka(e)}function Xx(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function lf(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lf=function(){return!!e})()}function $x(e,t,n){if(lf())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,t);var r=new(e.bind.apply(e,i));return n&&Ci(r,n.prototype),r}function Ga(e){var t=typeof Map=="function"?new Map:void 0;return Ga=function(i){if(i===null||!Xx(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(i))return t.get(i);t.set(i,r)}function r(){return $x(i,arguments,ka(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ci(r,i)},Ga(e)}var rn=(function(e){jx(t,e);function t(n){var i;return i=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,Wx(i)}return t})(Ga(Error));function _a(e){return Math.round(e*255)}function qx(e,t,n){return _a(e)+","+_a(t)+","+_a(n)}function hr(e,t,n,i){if(i===void 0&&(i=qx),t===0)return i(n,n,n);var r=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(r%2-1)),s=0,l=0,u=0;r>=0&&r<1?(s=a,l=o):r>=1&&r<2?(s=o,l=a):r>=2&&r<3?(l=a,u=o):r>=3&&r<4?(l=o,u=a):r>=4&&r<5?(s=o,u=a):r>=5&&r<6&&(s=a,u=o);var d=n-a/2,p=s+d,c=l+d,_=u+d;return i(p,c,_)}var Il={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Kx(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Il[t]?"#"+Il[t]:e}var Yx=/^#[a-fA-F0-9]{6}$/,Zx=/^#[a-fA-F0-9]{8}$/,Qx=/^#[a-fA-F0-9]{3}$/,Jx=/^#[a-fA-F0-9]{4}$/,ma=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,eS=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,tS=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,nS=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function ri(e){if(typeof e!="string")throw new rn(3);var t=Kx(e);if(t.match(Yx))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Zx)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(Qx))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Jx)){var i=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:i}}var r=ma.exec(t);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var a=eS.exec(t.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var o=tS.exec(t);if(o){var s=parseInt(""+o[1],10),l=parseInt(""+o[2],10)/100,u=parseInt(""+o[3],10)/100,d="rgb("+hr(s,l,u)+")",p=ma.exec(d);if(!p)throw new rn(4,t,d);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10)}}var c=nS.exec(t.substring(0,50));if(c){var _=parseInt(""+c[1],10),m=parseInt(""+c[2],10)/100,E=parseInt(""+c[3],10)/100,h="rgb("+hr(_,m,E)+")",f=ma.exec(h);if(!f)throw new rn(4,t,h);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new rn(5)}function iS(e){var t=e.red/255,n=e.green/255,i=e.blue/255,r=Math.max(t,n,i),a=Math.min(t,n,i),o=(r+a)/2;if(r===a)return e.alpha!==void 0?{hue:0,saturation:0,lightness:o,alpha:e.alpha}:{hue:0,saturation:0,lightness:o};var s,l=r-a,u=o>.5?l/(2-r-a):l/(r+a);switch(r){case t:s=(n-i)/l+(n<i?6:0);break;case n:s=(i-t)/l+2;break;default:s=(t-n)/l+4;break}return s*=60,e.alpha!==void 0?{hue:s,saturation:u,lightness:o,alpha:e.alpha}:{hue:s,saturation:u,lightness:o}}function Pn(e){return iS(ri(e))}var rS=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},Ha=rS;function Un(e){var t=e.toString(16);return t.length===1?"0"+t:t}function ga(e){return Un(Math.round(e*255))}function aS(e,t,n){return Ha("#"+ga(e)+ga(t)+ga(n))}function cf(e,t,n){return hr(e,t,n,aS)}function oS(e,t,n){if(typeof e=="object"&&t===void 0&&n===void 0)return cf(e.hue,e.saturation,e.lightness);throw new rn(1)}function sS(e,t,n,i){if(typeof e=="object"&&t===void 0&&n===void 0&&i===void 0)return e.alpha>=1?cf(e.hue,e.saturation,e.lightness):"rgba("+hr(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new rn(2)}function ff(e,t,n){if(typeof e=="number"&&typeof t=="number"&&typeof n=="number")return Ha("#"+Un(e)+Un(t)+Un(n));if(typeof e=="object"&&t===void 0&&n===void 0)return Ha("#"+Un(e.red)+Un(e.green)+Un(e.blue));throw new rn(6)}function Ar(e,t,n,i){if(typeof e=="object"&&t===void 0&&n===void 0&&i===void 0)return e.alpha>=1?ff(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new rn(7)}var lS=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},cS=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&typeof t.alpha=="number"},fS=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},uS=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&typeof t.alpha=="number"};function Dn(e){if(typeof e!="object")throw new rn(8);if(cS(e))return Ar(e);if(lS(e))return ff(e);if(uS(e))return sS(e);if(fS(e))return oS(e);throw new rn(8)}function uf(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):uf(e,t,r)}}function zt(e){return uf(e,e.length,[])}function dS(e,t){if(t==="transparent")return t;var n=Pn(t);return Dn(Bt({},n,{hue:n.hue+parseFloat(e)}))}zt(dS);function si(e,t,n){return Math.max(e,Math.min(t,n))}function hS(e,t){if(t==="transparent")return t;var n=Pn(t);return Dn(Bt({},n,{lightness:si(0,1,n.lightness-parseFloat(e))}))}zt(hS);function pS(e,t){if(t==="transparent")return t;var n=Pn(t);return Dn(Bt({},n,{saturation:si(0,1,n.saturation-parseFloat(e))}))}zt(pS);function _S(e,t){if(t==="transparent")return t;var n=Pn(t);return Dn(Bt({},n,{lightness:si(0,1,n.lightness+parseFloat(e))}))}zt(_S);function mS(e,t,n){if(t==="transparent")return n;if(n==="transparent")return t;if(e===0)return n;var i=ri(t),r=Bt({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),a=ri(n),o=Bt({},a,{alpha:typeof a.alpha=="number"?a.alpha:1}),s=r.alpha-o.alpha,l=parseFloat(e)*2-1,u=l*s===-1?l:l+s,d=1+l*s,p=(u/d+1)/2,c=1-p,_={red:Math.floor(r.red*p+o.red*c),green:Math.floor(r.green*p+o.green*c),blue:Math.floor(r.blue*p+o.blue*c),alpha:r.alpha*parseFloat(e)+o.alpha*(1-parseFloat(e))};return Ar(_)}var gS=zt(mS),df=gS;function vS(e,t){if(t==="transparent")return t;var n=ri(t),i=typeof n.alpha=="number"?n.alpha:1,r=Bt({},n,{alpha:si(0,1,(i*100+parseFloat(e)*100)/100)});return Ar(r)}var bS=zt(vS),xS=bS;function SS(e,t){if(t==="transparent")return t;var n=Pn(t);return Dn(Bt({},n,{saturation:si(0,1,n.saturation+parseFloat(e))}))}zt(SS);function ES(e,t){return t==="transparent"?t:Dn(Bt({},Pn(t),{hue:parseFloat(e)}))}zt(ES);function yS(e,t){return t==="transparent"?t:Dn(Bt({},Pn(t),{lightness:parseFloat(e)}))}zt(yS);function MS(e,t){return t==="transparent"?t:Dn(Bt({},Pn(t),{saturation:parseFloat(e)}))}zt(MS);function TS(e,t){return t==="transparent"?t:df(parseFloat(e),"rgb(0, 0, 0)",t)}zt(TS);function AS(e,t){return t==="transparent"?t:df(parseFloat(e),"rgb(255, 255, 255)",t)}zt(AS);function wS(e,t){if(t==="transparent")return t;var n=ri(t),i=typeof n.alpha=="number"?n.alpha:1,r=Bt({},n,{alpha:si(0,1,+(i*100-parseFloat(e)*100).toFixed(2)/100)});return Ar(r)}zt(wS);var Fn=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return e},Out:function(e){return e},InOut:function(e){return e}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(e){var t=1.70158;return e===1?1:e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return e===0?0:--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}}),Bounce:Object.freeze({In:function(e){return 1-Fn.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?Fn.Bounce.In(e*2)*.5:Fn.Bounce.Out(e*2-1)*.5+.5}}),generatePow:function(e){return e===void 0&&(e=4),e=e<Number.EPSILON?Number.EPSILON:e,e=e>1e4?1e4:e,{In:function(t){return Math.pow(t,e)},Out:function(t){return 1-Math.pow(1-t,e)},InOut:function(t){return t<.5?Math.pow(t*2,e)/2:(1-Math.pow(2-t*2,e))/2+.5}}}}),bi=function(){return performance.now()},hf=(function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(n){return t._tweens[n]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,n){t===void 0&&(t=bi()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var a=this._tweens[i[r]],o=!n;a&&a.update(t,o)===!1&&!n&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},e})(),Va={Linear:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),a=Va.Utils.Linear;return t<0?a(e[0],e[1],i):t>1?a(e[n],e[n-1],n-i):a(e[r],e[r+1>n?n:r+1],i-r)},Utils:{Linear:function(e,t,n){return(t-e)*n+e}}},pf=(function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e})(),za=new hf,Ul=(function(){function e(t,n){n===void 0&&(n=za),this._object=t,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Fn.Linear.None,this._interpolationFunction=Va.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=pf.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.getDuration=function(){return this._duration},e.prototype.to=function(t,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=n<0?0:n,this},e.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},e.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},e.prototype.start=function(t,n){if(t===void 0&&(t=bi()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var a in this._valuesEnd)r[a]=this._valuesEnd[a];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},e.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},e.prototype._setupProperties=function(t,n,i,r,a){for(var o in i){var s=t[o],l=Array.isArray(s),u=l?"array":typeof s,d=!l&&Array.isArray(i[o]);if(!(u==="undefined"||u==="function")){if(d){var p=i[o];if(p.length===0)continue;for(var c=[s],_=0,m=p.length;_<m;_+=1){var E=this._handleRelativeValue(s,p[_]);if(isNaN(E)){d=!1,console.warn("Found invalid interpolation list. Skipping.");break}c.push(E)}d&&(i[o]=c)}if((u==="object"||l)&&s&&!d){n[o]=l?[]:{};var h=s;for(var f in h)n[o][f]=h[f];r[o]=l?[]:{};var p=i[o];if(!this._isDynamic){var y={};for(var f in p)y[f]=p[f];i[o]=p=y}this._setupProperties(h,n[o],p,r[o],a)}else(typeof n[o]>"u"||a)&&(n[o]=s),l||(n[o]*=1),d?r[o]=i[o].slice().reverse():r[o]=n[o]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=bi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=bi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return t===void 0&&(t=za),this._group=t,this},e.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},e.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},e.prototype.easing=function(t){return t===void 0&&(t=Fn.Linear.None),this._easingFunction=t,this},e.prototype.interpolation=function(t){return t===void 0&&(t=Va.Linear),this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,n){var i=this,r;if(t===void 0&&(t=bi()),n===void 0&&(n=!0),this._isPaused)return!0;var a,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;n&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var s=t-this._startTime,l=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),u=this._duration+this._repeat*l,d=function(){if(i._duration===0||s>u)return 1;var h=Math.trunc(s/l),f=s-h*l,y=Math.min(f/i._duration,1);return y===0&&s===i._duration?1:y},p=d(),c=this._easingFunction(p);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,c),this._onUpdateCallback&&this._onUpdateCallback(this._object,p),this._duration===0||s>=this._duration)if(this._repeat>0){var _=Math.min(Math.trunc((s-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=_);for(a in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[a]=="string"&&(this._valuesStartRepeat[a]=this._valuesStartRepeat[a]+parseFloat(this._valuesEnd[a])),this._yoyo&&this._swapEndStartRepeatValues(a),this._valuesStart[a]=this._valuesStartRepeat[a];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*_,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,E=this._chainedTweens.length;m<E;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,n,i,r){for(var a in i)if(n[a]!==void 0){var o=n[a]||0,s=i[a],l=Array.isArray(t[a]),u=Array.isArray(s),d=!l&&u;d?t[a]=this._interpolationFunction(s,r):typeof s=="object"&&s?this._updateProperties(t[a],o,s,r):(s=this._handleRelativeValue(o,s),typeof s=="number"&&(t[a]=o+(s-o)*r))}},e.prototype._handleRelativeValue=function(t,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?t+parseFloat(n):parseFloat(n)},e.prototype._swapEndStartRepeatValues=function(t){var n=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=n},e})();pf.nextId;var ln=za;ln.getAll.bind(ln);ln.removeAll.bind(ln);ln.add.bind(ln);ln.remove.bind(ln);ln.update.bind(ln);var Pi,ut,_f,mf,Tn,Nl,gf,vf,va,ir,Ei,bf,co,Wa,ja,pr={},_r=[],RS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,wr=Array.isArray;function an(e,t){for(var n in t)e[n]=t[n];return e}function fo(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function CS(e,t,n){var i,r,a,o={};for(a in t)a=="key"?i=t[a]:a=="ref"?r=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Pi.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return yi(e,o,i,r,null)}function yi(e,t,n,i,r){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++_f,__i:-1,__u:0};return r==null&&ut.vnode!=null&&ut.vnode(a),a}function Rr(e){return e.children}function rr(e,t){this.props=e,this.context=t}function kn(e,t){if(t==null)return e.__?kn(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?kn(e):null}function PS(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,i=[],r=[],a=an({},t);a.__v=t.__v+1,ut.vnode&&ut.vnode(a),uo(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,i,n??kn(t),!!(32&t.__u),r),a.__v=t.__v,a.__.__k[a.__i]=a,Mf(i,a,r),t.__e=t.__=null,a.__e!=n&&xf(a)}}function xf(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),xf(e)}function Ol(e){(!e.__d&&(e.__d=!0)&&Tn.push(e)&&!mr.__r++||Nl!=ut.debounceRendering)&&((Nl=ut.debounceRendering)||gf)(mr)}function mr(){try{for(var e,t=1;Tn.length;)Tn.length>t&&Tn.sort(vf),e=Tn.shift(),t=Tn.length,PS(e)}finally{Tn.length=mr.__r=0}}function Sf(e,t,n,i,r,a,o,s,l,u,d){var p,c,_,m,E,h,f=i&&i.__k||_r,y=t.length;for(l=DS(n,t,f,l,y),p=0;p<y;p++)(_=n.__k[p])!=null&&(c=_.__i!=-1&&f[_.__i]||pr,_.__i=p,h=uo(e,_,c,r,a,o,s,l,u,d),m=_.__e,_.ref&&c.ref!=_.ref&&(c.ref&&ho(c.ref,null,_),d.push(_.ref,_.__c||m,_)),E==null&&m!=null&&(E=m),4&_.__u?(l=Ef(_,l,e),c.__e&&(c.__e=null)):typeof _.type=="function"&&h!==void 0?l=h:m&&(l=m.nextSibling),_.__u&=-7);return n.__e=E,l}function DS(e,t,n,i,r){var a,o,s,l,u,d=n.length,p=d,c=0;for(e.__k=new Array(r),a=0;a<r;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=yi(null,o,null,null,null):wr(o)?o=e.__k[a]=yi(Rr,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=yi(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,l=a+c,o.__=e,o.__b=e.__b+1,s=null,(u=o.__i=LS(o,n,l,p))!=-1&&(p--,(s=n[u])&&(s.__u|=2)),s==null||s.__v==null?(u==-1&&(r>d?c--:r<d&&c++),typeof o.type!="function"&&(o.__u|=4)):u!=l&&(u==l-1?c--:u==l+1?c++:(u>l?c--:c++,o.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==i&&(i=kn(s)),Af(s,s));return i}function Ef(e,t,n){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Ef(i[r],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=kn(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function LS(e,t,n,i){var r,a,o,s=e.key,l=e.type,u=t[n],d=u!=null&&(2&u.__u)==0;if(u===null&&s==null||d&&s==u.key&&l==u.type)return n;if(i>(d?1:0)){for(r=n-1,a=n+1;r>=0||a<t.length;)if((u=t[o=r>=0?r--:a++])!=null&&(2&u.__u)==0&&s==u.key&&l==u.type)return o}return-1}function Fl(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||RS.test(t)?n:n+"px"}function Zi(e,t,n,i,r){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Fl(e.style,t,"");if(n)for(t in n)i&&n[t]==i[t]||Fl(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(bf,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i?n[Ei]=i[Ei]:(n[Ei]=co,e.addEventListener(t,a?ja:Wa,a)):e.removeEventListener(t,a?ja:Wa,a);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Bl(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[ir]==null)t[ir]=co++;else if(t[ir]<n[Ei])return;return n(ut.event?ut.event(t):t)}}}function uo(e,t,n,i,r,a,o,s,l,u){var d,p,c,_,m,E,h,f,y,T,S,M,b,R,v,w,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=ut.__b)&&d(t);e:if(typeof D=="function"){p=o.length;try{if(y=t.props,T=D.prototype&&D.prototype.render,S=(d=D.contextType)&&i[d.__c],M=d?S?S.props.value:d.__:i,n.__c?f=(c=t.__c=n.__c).__=c.__E:(T?t.__c=c=new D(y,M):(t.__c=c=new rr(y,M),c.constructor=D,c.render=US),S&&S.sub(c),c.state||(c.state={}),c.__n=i,_=c.__d=!0,c.__h=[],c._sb=[]),T&&c.__s==null&&(c.__s=c.state),T&&D.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=an({},c.__s)),an(c.__s,D.getDerivedStateFromProps(y,c.__s))),m=c.props,E=c.state,c.__v=t,_)T&&D.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),T&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(T&&D.getDerivedStateFromProps==null&&y!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,M),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,M)===!1){t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(C){C&&(C.__=t)}),_r.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&o.push(c),s=kn(n);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,M),T&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,E,h)})}if(c.context=M,c.props=y,c.__P=e,c.__e=!1,b=ut.__r,R=0,T)c.state=c.__s,c.__d=!1,b&&b(t),d=c.render(c.props,c.state,c.context),_r.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,b&&b(t),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++R<25);c.state=c.__s,c.getChildContext!=null&&(i=an(an({},i),c.getChildContext())),T&&!_&&c.getSnapshotBeforeUpdate!=null&&(h=c.getSnapshotBeforeUpdate(m,E)),v=d!=null&&d.type===Rr&&d.key==null?Tf(d.props.children):d,s=Sf(e,wr(v)?v:[v],t,n,i,r,a,o,s,l,u),c.base=t.__e,t.__u&=-161,c.__h.length&&o.push(c),f&&(c.__E=c.__=null)}catch(C){if(o.length=p,t.__v=null,l||a!=null){if(C.then){for(t.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(w=a.length;w--;)fo(a[w])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),C.then||yf(t),ut.__e(C,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=IS(n.__e,t,n,i,r,a,o,l,u);return(d=ut.diffed)&&d(t),128&t.__u?void 0:s}function yf(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(yf))}function Mf(e,t,n){for(var i=0;i<n.length;i++)ho(n[i],n[++i],n[++i]);ut.__c&&ut.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){ut.__e(a,r.__v)}})}function Tf(e){return typeof e!="object"||e==null||e.__b>0?e:wr(e)?e.map(Tf):e.constructor!==void 0?null:an({},e)}function IS(e,t,n,i,r,a,o,s,l){var u,d,p,c,_,m,E,h=n.props||pr,f=t.props,y=t.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((_=a[u])&&"setAttribute"in _==!!y&&(y?_.localName==y:_.nodeType==3)){e=_,a[u]=null;break}}if(e==null){if(y==null)return document.createTextNode(f);e=document.createElementNS(r,y,f.is&&f),s&&(ut.__m&&ut.__m(t,a),s=!1),a=null}if(y==null)h===f||s&&e.data==f||(e.data=f);else{if(a=y=="textarea"&&f.defaultValue!=null?null:a&&Pi.call(e.childNodes),!s&&a!=null)for(h={},u=0;u<e.attributes.length;u++)h[(_=e.attributes[u]).name]=_.value;for(u in h)_=h[u],u=="dangerouslySetInnerHTML"?p=_:u=="children"||u in f||u=="value"&&"defaultValue"in f||u=="checked"&&"defaultChecked"in f||Zi(e,u,null,_,r);for(u in f)_=f[u],u=="children"?c=_:u=="dangerouslySetInnerHTML"?d=_:u=="value"?m=_:u=="checked"?E=_:s&&typeof _!="function"||h[u]===_||Zi(e,u,_,h[u],r);if(d)s||p&&(d.__html==p.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(p&&(e.innerHTML=""),Sf(t.type=="template"?e.content:e,wr(c)?c:[c],t,n,i,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,o,a?a[0]:n.__k&&kn(n,0),s,l),a!=null)for(u=a.length;u--;)fo(a[u]);s&&y!="textarea"||(u="value",y=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[u]||y=="progress"&&!m||y=="option"&&m!=h[u])&&Zi(e,u,m,h[u],r),u="checked",E!=null&&E!=e[u]&&Zi(e,u,E,h[u],r))}return e}function ho(e,t,n){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(r){ut.__e(r,n)}}function Af(e,t,n){var i,r;if(ut.unmount&&ut.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||ho(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){ut.__e(a,t)}i.base=i.__P=i.__n=null}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&Af(i[r],t,n||typeof e.type!="function");n||fo(e.__e),e.__c=e.__=e.__e=void 0}function US(e,t,n){return this.constructor(e,n)}function NS(e,t,n){var i,r,a,o;t==document&&(t=document.documentElement),ut.__&&ut.__(e,t),r=(i=!1)?null:t.__k,a=[],o=[],uo(t,e=t.__k=CS(Rr,null,[e]),r||pr,pr,t.namespaceURI,r?null:t.firstChild?Pi.call(t.childNodes):null,a,r?r.__e:t.firstChild,i,o),Mf(a,e,o),e.props.children=null}function wf(e,t,n){var i,r,a,o,s=an({},e.props);for(a in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)a=="key"?i=t[a]:a=="ref"?r=t[a]:s[a]=t[a]===void 0&&o!=null?o[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?Pi.call(arguments,2):n),yi(e.type,s,i||e.key,r||e.ref,null)}Pi=_r.slice,ut={__e:function(e,t,n,i){for(var r,a,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,i||{}),o=r.__d),o)return r.__E=r}catch(s){e=s}throw e}},_f=0,mf=function(e){return e!=null&&e.constructor===void 0},rr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=an({},this.state),typeof e=="function"&&(e=e(an({},n),this.props)),e&&an(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ol(this))},rr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ol(this))},rr.prototype.render=Rr,Tn=[],gf=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,vf=function(e,t){return e.__v.__b-t.__v.__b},mr.__r=0,va=Math.random().toString(8),ir="__d"+va,Ei="__a"+va,bf=/(PointerCapture)$|Capture$/i,co=0,Wa=Bl(!1),ja=Bl(!0);function kl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function OS(e){if(Array.isArray(e))return e}function FS(e,t,n){return(t=zS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function kS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function GS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gl(Object(n),!0).forEach(function(i){FS(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gl(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function HS(e,t){return OS(e)||BS(e,t)||WS(e,t)||kS()}function VS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zS(e){var t=VS(e,"string");return typeof t=="symbol"?t:t+""}function gr(e){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(e)}function WS(e,t){if(e){if(typeof e=="string")return kl(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kl(e,t):void 0}}var Xa=function(t){if(gr(t)!=="object")return t;var n=wf(t);if(n.props){var i;n.props=GS({},n.props),n!=null&&(i=n.props)!==null&&i!==void 0&&i.children&&(n.props.children=Array.isArray(n.props.children)?n.props.children.map(Xa):Xa(n.props.children))}return n},jS=function(t){return mf(wf(t))},XS=function(t,n){delete n.__k,NS(Xa(t),n)};function $S(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var qS=`.float-tooltip-kap {
  position: absolute;
  width: max-content; /* prevent shrinking near right edge */
  max-width: max(50%, 150px);
  padding: 3px 5px;
  border-radius: 3px;
  font: 12px sans-serif;
  color: #eee;
  background: rgba(0,0,0,0.6);
  pointer-events: none;
}
`;$S(qS);var KS=Er({props:{content:{default:!1},offsetX:{triggerUpdate:!1},offsetY:{triggerUpdate:!1}},init:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.style,a=r===void 0?{}:r,o=!!t&&gr(t)==="object"&&!!t.node&&typeof t.node=="function",s=hd(o?t.node():t);s.style("position")==="static"&&s.style("position","relative"),n.tooltipEl=s.append("div").attr("class","float-tooltip-kap"),Object.entries(a).forEach(function(u){var d=HS(u,2),p=d[0],c=d[1];return n.tooltipEl.style(p,c)}),n.tooltipEl.style("left","-10000px").style("display","none");var l="tooltip-".concat(Math.round(Math.random()*1e12));n.mouseInside=!1,s.on("mousemove.".concat(l),function(u){n.mouseInside=!0;var d=pd(u),p=s.node(),c=p.offsetWidth,_=p.offsetHeight,m=[n.offsetX===null||n.offsetX===void 0?"-".concat(d[0]/c*100,"%"):typeof n.offsetX=="number"?"calc(-50% + ".concat(n.offsetX,"px)"):n.offsetX,n.offsetY===null||n.offsetY===void 0?_>130&&_-d[1]<100?"calc(-100% - 6px)":"21px":typeof n.offsetY=="number"?n.offsetY<0?"calc(-100% - ".concat(Math.abs(n.offsetY),"px)"):"".concat(n.offsetY,"px"):n.offsetY];n.tooltipEl.style("left",d[0]+"px").style("top",d[1]+"px").style("transform","translate(".concat(m.join(","),")")),n.content&&n.tooltipEl.style("display","inline")}),s.on("mouseover.".concat(l),function(){n.mouseInside=!0,n.content&&n.tooltipEl.style("display","inline")}),s.on("mouseout.".concat(l),function(){n.mouseInside=!1,n.tooltipEl.style("display","none")})},update:function(t){t.tooltipEl.style("display",t.content&&t.mouseInside?"inline":"none"),t.content?t.content instanceof HTMLElement?(t.tooltipEl.text(""),t.tooltipEl.append(function(){return t.content})):typeof t.content=="string"?t.tooltipEl.html(t.content):jS(t.content)?(t.tooltipEl.text(""),XS(t.content,t.tooltipEl.node())):(t.tooltipEl.style("display","none"),console.warn("Tooltip content is invalid, skipping.",t.content,t.content.toString())):t.tooltipEl.text("")}});function YS(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ZS=`.scene-nav-info {
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;YS(ZS);function $a(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function QS(e){if(Array.isArray(e))return e}function JS(e){if(Array.isArray(e))return $a(e)}function eE(e,t,n){return(t=sE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function iE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aE(e,t){return QS(e)||nE(e,t)||Rf(e,t)||iE()}function In(e){return JS(e)||tE(e)||Rf(e)||rE()}function oE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sE(e){var t=oE(e,"string");return typeof t=="symbol"?t:t+""}function Rf(e,t){if(e){if(typeof e=="string")return $a(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$a(e,t):void 0}}var Cf=function(t){t instanceof Array?t.forEach(Cf):(t.map&&t.map.dispose(),t.dispose())},Pf=function(t){t.geometry&&t.geometry.dispose(),t.material&&Cf(t.material),t.texture&&t.texture.dispose(),t.children&&t.children.forEach(Pf)},lE=function(t){for(;t.children.length;){var n=t.children[0];t.remove(n),Pf(n)}},ct=window.THREE?window.THREE:{WebGLRenderer:Ag,Scene:gd,PerspectiveCamera:xi,Raycaster:_c,SRGBColorSpace:jl,TextureLoader:_d,Vector2:Ge,Vector3:Ee,Box3:vc,Color:Qe,Mesh:Ft,SphereGeometry:cr,MeshBasicMaterial:lr,BackSide:Ot,Timer:xc},Df=Er({props:{width:{default:window.innerWidth,onChange:function(t,n,i){isNaN(t)&&(n.width=i)}},height:{default:window.innerHeight,onChange:function(t,n,i){isNaN(t)&&(n.height=i)}},viewOffset:{default:[0,0]},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(t,n){n.hoverObj=null,n.tooltip&&n.tooltip.content(null)},triggerUpdate:!1},pointerRaycasterThrottleMs:{default:50,triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},pointsHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(t){if(t.initialised){t.controls.enabled&&t.controls.update&&t.controls.update(Math.min(1,t.timer.update().getDelta())),t.postProcessingComposer?t.postProcessingComposer.render():t.renderer.render(t.scene,t.camera),t.extraRenderers.forEach(function(o){return o.render(t.scene,t.camera)});var n=+new Date;if(t.enablePointerInteraction&&n-t.lastRaycasterCheck>=t.pointerRaycasterThrottleMs){t.lastRaycasterCheck=n;var i=null;if(t.hoverDuringDrag||!t.isPointerDragging){var r=this.intersectingObjects(t.pointerPos.x,t.pointerPos.y);t.hoverOrderComparator&&r.sort(function(o,s){return t.hoverOrderComparator(o.object,s.object)});var a=r.find(function(o){return t.hoverFilter(o.object)})||null;i=a?a.object:null,t.intersection=a||null}i!==t.hoverObj&&(t.onHover(i,t.hoverObj,t.intersection),t.tooltip.content(i&&ze(t.tooltipContent)(i,t.intersection)||null),t.hoverObj=i)}t.tweenGroup.update()}return this},getPointerPos:function(t){var n=t.pointerPos,i=n.x,r=n.y;return{x:i,y:r}},cameraPosition:function(t,n,i,r){var a=t.camera;if(n&&t.initialised){var o,s,l=n,u=i||{x:0,y:0,z:0};if((o=t.povPosTween)===null||o===void 0||o.end(),(s=t.povTgtTween)===null||s===void 0||s.end(),!r)c(l),_(u);else{var d=Object.assign({},a.position),p=m();t.tweenGroup.add(t.povPosTween=new Ul(d).to(l,r).easing(Fn.Quadratic.Out).onUpdate(c).onComplete(function(){t.povPosTween=void 0,t.tweenGroup.remove(this)}).start()),t.tweenGroup.add(t.povTgtTween=new Ul(p).to(u,r/3).easing(Fn.Quadratic.Out).onUpdate(_).onComplete(function(){t.povTgtTween=void 0,t.tweenGroup.remove(this)}).start())}return this}return Object.assign({},a.position,{lookAt:m()});function c(E){var h=E.x,f=E.y,y=E.z;h!==void 0&&(a.position.x=h),f!==void 0&&(a.position.y=f),y!==void 0&&(a.position.z=y)}function _(E){var h=new ct.Vector3(E.x,E.y,E.z);t.controls.enabled&&t.controls.target?t.controls.target=h:a.lookAt(h)}function m(){return Object.assign(new ct.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(t){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,a),n,i)},fitToBbox:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=t.camera;if(n){var o=new ct.Vector3(0,0,0),s=Math.max.apply(Math,In(Object.entries(n).map(function(_){var m=aE(_,2),E=m[0],h=m[1];return Math.max.apply(Math,In(h.map(function(f){return Math.abs(o[E]-f)})))})))*2,l=(1-r*2/t.height)*a.fov,u=s/Math.atan(l*Math.PI/180),d=u/a.aspect,p=Math.max(u,d);if(p>0){var c=o.clone().sub(a.position).normalize().multiplyScalar(-p);this.cameraPosition(c,o,i)}}return this},getBbox:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new ct.Box3(new ct.Vector3(0,0,0),new ct.Vector3(0,0,0)),r=t.objects.filter(n);return r.length?(r.forEach(function(a){return i.expandByObject(a)}),Object.assign.apply(Object,In(["x","y","z"].map(function(a){return eE({},a,[i.min[a],i.max[a]])})))):null},getScreenCoords:function(t,n,i,r){var a=new ct.Vector3(n,i,r);return a.project(this.camera()),{x:(a.x+1)*t.width/2,y:-(a.y-1)*t.height/2}},getSceneCoords:function(t,n,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new ct.Vector2(n/t.width*2-1,-(i/t.height)*2+1),o=new ct.Raycaster;return o.setFromCamera(a,t.camera),Object.assign({},o.ray.at(r,new ct.Vector3))},intersectingObjects:function(t,n,i){var r=new ct.Vector2(n/t.width*2-1,-(i/t.height)*2+1),a=new ct.Raycaster;return a.params.Line.threshold=t.lineHoverPrecision,a.params.Points.threshold=t.pointsHoverPrecision,a.setFromCamera(r,t.camera),a.intersectObjects(t.objects,!0)},renderer:function(t){return t.renderer},scene:function(t){return t.scene},camera:function(t){return t.camera},postProcessingComposer:function(t){return t.postProcessingComposer},controls:function(t){return t.controls},tbControls:function(t){return t.controls},_destructor:function(t){var n,i,r;lE(t.scene),(n=t.controls)===null||n===void 0||n.dispose(),(i=t.renderer)===null||i===void 0||i.dispose(),(r=t.postProcessingComposer)===null||r===void 0||r.dispose()}},stateInit:function(){return{scene:new ct.Scene,camera:new ct.PerspectiveCamera,timer:new ct.Timer,tweenGroup:new hf,lastRaycasterCheck:0}},init:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,a=r===void 0?"trackball":r,o=i.useWebGPU,s=o===void 0?!1:o,l=i.rendererConfig,u=l===void 0?{}:l,d=i.extraRenderers,p=d===void 0?[]:d,c=i.waitForLoadComplete,_=c===void 0?!0:c;t.innerHTML="",t.appendChild(n.container=document.createElement("div")),n.container.className="scene-container",n.container.style.position="relative",n.container.appendChild(n.navInfo=document.createElement("div")),n.navInfo.className="scene-nav-info",n.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",n.navInfo.style.display=n.showNavInfo?null:"none",n.tooltip=new KS(n.container),n.pointerPos=new ct.Vector2,n.pointerPos.x=-2,n.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(m){return n.container.addEventListener(m,function(E){if(m==="pointerdown"&&(n.isPointerPressed=!0),!n.isPointerDragging&&E.type==="pointermove"&&(E.pressure>0||n.isPointerPressed)&&(E.pointerType==="mouse"||E.movementX===void 0||[E.movementX,E.movementY].some(function(y){return Math.abs(y)>1}))&&(n.isPointerDragging=!0),n.enablePointerInteraction){var h=f(n.container);n.pointerPos.x=E.pageX-h.left,n.pointerPos.y=E.pageY-h.top}function f(y){var T=y.getBoundingClientRect(),S=window.pageXOffset||document.documentElement.scrollLeft,M=window.pageYOffset||document.documentElement.scrollTop;return{top:T.top+M,left:T.left+S}}},{passive:!0})}),n.container.addEventListener("pointerup",function(m){n.isPointerPressed&&(n.isPointerPressed=!1,!(n.isPointerDragging&&(n.isPointerDragging=!1,!n.clickAfterDrag))&&requestAnimationFrame(function(){m.button===0&&n.onClick(n.hoverObj||null,m,n.intersection),m.button===2&&n.onRightClick&&n.onRightClick(n.hoverObj||null,m,n.intersection)}))},{passive:!0,capture:!0}),n.container.addEventListener("contextmenu",function(m){n.onRightClick&&m.preventDefault()}),n.renderer=new(s?md:ct.WebGLRenderer)(Object.assign({antialias:!0,alpha:!0},u)),n.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),n.container.appendChild(n.renderer.domElement),n.extraRenderers=p,n.extraRenderers.forEach(function(m){m.domElement.style.position="absolute",m.domElement.style.top="0px",m.domElement.style.pointerEvents="none",n.container.appendChild(m.domElement)}),n.postProcessingComposer=new Vx(n.renderer),n.postProcessingComposer.addPass(new zx(n.scene,n.camera)),n.controls=new{trackball:Zb,orbit:hx,fly:wx}[a](n.camera,n.renderer.domElement),a==="fly"&&(n.controls.movementSpeed=300,n.controls.rollSpeed=Math.PI/6,n.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(n.controls.minDistance=.1,n.controls.maxDistance=n.skyRadius,n.controls.addEventListener("start",function(){n.controlsEngaged=!0}),n.controls.addEventListener("change",function(){n.controlsEngaged&&(n.controlsDragging=!0)}),n.controls.addEventListener("end",function(){n.controlsEngaged=!1,n.controlsDragging=!1})),[n.renderer,n.postProcessingComposer].concat(In(n.extraRenderers)).forEach(function(m){return m.setSize(n.width,n.height)}),n.camera.aspect=n.width/n.height,n.camera.updateProjectionMatrix(),n.camera.position.z=1e3,n.scene.add(n.skysphere=new ct.Mesh),n.skysphere.visible=!1,n.loadComplete=n.scene.visible=!_,window.scene=n.scene},update:function(t,n){if(t.width&&t.height&&(n.hasOwnProperty("width")||n.hasOwnProperty("height"))){var i,r=t.width,a=t.height;t.container.style.width="".concat(r,"px"),t.container.style.height="".concat(a,"px"),[t.renderer,t.postProcessingComposer].concat(In(t.extraRenderers)).forEach(function(_){return _.setSize(r,a)}),t.camera.aspect=r/a;var o=t.viewOffset.slice(0,2);o.some(function(_){return _})&&(i=t.camera).setViewOffset.apply(i,[r,a].concat(In(o),[r,a])),t.camera.updateProjectionMatrix()}if(n.hasOwnProperty("viewOffset")){var s,l=t.width,u=t.height,d=t.viewOffset.slice(0,2);d.some(function(_){return _})?(s=t.camera).setViewOffset.apply(s,[l,u].concat(In(d),[l,u])):t.camera.clearViewOffset()}if(n.hasOwnProperty("skyRadius")&&t.skyRadius&&(t.controls.hasOwnProperty("maxDistance")&&n.skyRadius&&(t.controls.maxDistance=Math.min(t.controls.maxDistance,t.skyRadius)),t.camera.far=t.skyRadius*2.5,t.camera.updateProjectionMatrix(),t.skysphere.geometry=new ct.SphereGeometry(t.skyRadius)),n.hasOwnProperty("backgroundColor")){var p=ri(t.backgroundColor).alpha;p===void 0&&(p=1),t.renderer.setClearColor(new ct.Color(xS(1,t.backgroundColor)),p)}n.hasOwnProperty("backgroundImageUrl")&&(t.backgroundImageUrl?new ct.TextureLoader().load(t.backgroundImageUrl,function(_){_.colorSpace=ct.SRGBColorSpace,t.skysphere.material=new ct.MeshBasicMaterial({map:_,side:ct.BackSide}),t.skysphere.visible=!0,t.onBackgroundImageLoaded&&setTimeout(t.onBackgroundImageLoaded),!t.loadComplete&&c()}):(t.skysphere.visible=!1,t.skysphere.material.map=null,!t.loadComplete&&c())),n.hasOwnProperty("showNavInfo")&&(t.navInfo.style.display=t.showNavInfo?null:"none"),n.hasOwnProperty("lights")&&((n.lights||[]).forEach(function(_){return t.scene.remove(_)}),t.lights.forEach(function(_){return t.scene.add(_)})),n.hasOwnProperty("objects")&&((n.objects||[]).forEach(function(_){return t.scene.remove(_)}),t.objects.forEach(function(_){return t.scene.add(_)}));function c(){t.loadComplete=t.scene.visible=!0}}});function cE(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var fE=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;cE(fE);function qa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function uE(e){if(Array.isArray(e))return qa(e)}function Di(e,t,n){return(t=_E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function Qi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hl(Object(n),!0).forEach(function(i){Di(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hl(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Cr(e){return uE(e)||dE(e)||mE(e)||hE()}function pE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _E(e){var t=pE(e,"string");return typeof t=="symbol"?t:t+""}function mE(e,t){if(e){if(typeof e=="string")return qa(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qa(e,t):void 0}}function Lf(e,t){var n=new t;return n._destructor&&n._destructor(),{linkProp:function(r){return{default:n[r](),onChange:function(o,s){s[e][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(a){for(var o=a[e],s=arguments.length,l=new Array(s>1?s-1:0),u=1;u<s;u++)l[u-1]=arguments[u];var d=o[r].apply(o,l);return d===o?this:d}}}}var ba=window.THREE?window.THREE:{AmbientLight:vd,DirectionalLight:bd,REVISION:Xl},gE=170,If=Lf("forceGraph",of),vE=Object.assign.apply(Object,Cr(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","nodePositionUpdate","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleOffset","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","linkDirectionalParticleThreeObject","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(e){return Di({},e,If.linkProp(e))}))),bE=Object.assign.apply(Object,Cr(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(e){return Di({},e,If.linkMethod(e))}))),ar=Lf("renderObjs",Df),xE=Object.assign.apply(Object,Cr(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(e){return Di({},e,ar.linkProp(e))}))),SE=Object.assign.apply(Object,Cr(["lights","cameraPosition","postProcessingComposer"].map(function(e){return Di({},e,ar.linkMethod(e))})).concat([{graph2ScreenCoords:ar.linkMethod("getScreenCoords"),screen2GraphCoords:ar.linkMethod("getSceneCoords")}])),EE=Er({props:Qi(Qi({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(t,n){return n.renderObjs.lineHoverPrecision(t)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(t,n){var i=n.renderObjs.controls();i&&(i.enabled=t,t&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1},showPointerCursor:{default:!0,triggerUpdate:!1}},vE),xE),methods:Qi(Qi({zoomToFit:function(t,n,i){for(var r,a=arguments.length,o=new Array(a>3?a-3:0),s=3;s<a;s++)o[s-3]=arguments[s];return t.renderObjs.fitToBbox((r=t.forceGraph).getGraphBbox.apply(r,o),n,i),this},pauseAnimation:function(t){return t.animationFrameRequestId!==null&&(cancelAnimationFrame(t.animationFrameRequestId),t.animationFrameRequestId=null),this},resumeAnimation:function(t){return t.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(t){t.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),t.forceGraph.tickFrame(),t.renderObjs.tick(),t.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(t){return t.renderObjs.scene()},camera:function(t){return t.renderObjs.camera()},renderer:function(t){return t.renderObjs.renderer()},controls:function(t){return t.renderObjs.controls()},_destructor:function(t){var n,i;this.pauseAnimation(),this.graphData({nodes:[],links:[]}),(n=(i=t.forceGraph)._destructor)===null||n===void 0||n.call(i),t.renderObjs._destructor()}},bE),SE),stateInit:function(t){var n=t.controlType,i=t.rendererConfig,r=t.extraRenderers,a=new of;return{forceGraph:a,renderObjs:Df({controlType:n,rendererConfig:i,extraRenderers:r}).objects([a]).lights([new ba.AmbientLight(13421772,Math.PI),new ba.DirectionalLight(16777215,.6*Math.PI)])}},init:function(t,n){t.innerHTML="",t.appendChild(n.container=document.createElement("div")),n.container.style.position="relative";var i=document.createElement("div");n.container.appendChild(i),n.renderObjs(i);var r=n.renderObjs.camera(),a=n.renderObjs.renderer(),o=n.renderObjs.controls();o.enabled=!!n.enableNavigationControls,n.lastSetCameraZ=r.position.z;var s;n.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",n.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){n.graphData=n.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===n.lastSetCameraZ&&n.graphData.nodes.length&&(r.lookAt(n.forceGraph.position),n.lastSetCameraZ=r.position.z=Math.cbrt(n.graphData.nodes.length)*gE)}).onFinishUpdate(function(){if(n._dragControls){var l=n.graphData.nodes.find(function(d){return d.__initialFixedPos&&!d.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:n._dragControls.dispose(),n._dragControls=void 0}if(n.enableNodeDrag&&n.enablePointerInteraction&&n.forceEngine==="d3"){var u=n._dragControls=new wg(n.graphData.nodes.map(function(d){return d.__threeObj}).filter(function(d){return d}),r,a.domElement);u.addEventListener("dragstart",function(d){var p=un(d.object);if(p){o.enabled=!1,d.object.__initialPos=d.object.position.clone(),d.object.__prevPos=d.object.position.clone();var c=p.__data;!c.__initialFixedPos&&(c.__initialFixedPos={fx:c.fx,fy:c.fy,fz:c.fz}),!c.__initialPos&&(c.__initialPos={x:c.x,y:c.y,z:c.z}),["x","y","z"].forEach(function(_){return c["f".concat(_)]=c[_]}),a.domElement.classList.add("grabbable")}}),u.addEventListener("drag",function(d){var p=un(d.object);if(p){if(!d.object.hasOwnProperty("__graphObjType")){var c=d.object.__initialPos,_=d.object.__prevPos,m=d.object.position;p.position.add(m.clone().sub(_)),_.copy(m),m.copy(c)}var E=p.__data,h=p.position,f={x:h.x-E.x,y:h.y-E.y,z:h.z-E.z};["x","y","z"].forEach(function(y){return E["f".concat(y)]=E[y]=h[y]}),n.forceGraph.d3AlphaTarget(.3).resetCountdown(),E.__dragged=!0,n.onNodeDrag(E,f)}}),u.addEventListener("dragend",function(d){var p=un(d.object);if(p){delete d.object.__initialPos,delete d.object.__prevPos;var c=p.__data;c.__disposeControlsAfterDrag&&(u.dispose(),delete c.__disposeControlsAfterDrag);var _=c.__initialFixedPos,m=c.__initialPos,E={x:m.x-c.x,y:m.y-c.y,z:m.z-c.z};if(_&&(["x","y","z"].forEach(function(f){var y="f".concat(f);_[y]===void 0&&delete c[y]}),delete c.__initialFixedPos,delete c.__initialPos,c.__dragged&&(delete c.__dragged,n.onNodeDragEnd(c,E))),n.forceGraph.d3AlphaTarget(0).resetCountdown(),n.enableNavigationControls){var h;o.enabled=!0,o._status&&((h=o._onPointerCancel)===null||h===void 0||h.call(o)),o.domElement&&o.domElement.ownerDocument&&o.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))}a.domElement.classList.remove("grabbable")}})}}),ba.REVISION<155&&(n.renderObjs.renderer().useLegacyLights=!1),n.renderObjs.hoverOrderComparator(function(l,u){var d=un(l);if(!d)return 1;var p=un(u);if(!p)return-1;var c=function(m){return m.__graphObjType==="node"};return c(p)-c(d)}).tooltipContent(function(l){var u=un(l);return u&&ze(n["".concat(u.__graphObjType,"Label")])(u.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var u=un(l);if(u!==n.hoverObj){var d=n.hoverObj?n.hoverObj.__graphObjType:null,p=n.hoverObj?n.hoverObj.__data:null,c=u?u.__graphObjType:null,_=u?u.__data:null;if(d&&d!==c){var m=n["on".concat(d==="node"?"Node":"Link","Hover")];m&&m(null,p)}if(c){var E=n["on".concat(c==="node"?"Node":"Link","Hover")];E&&E(_,d===c?p:null)}a.domElement.classList[(u&&n["on".concat(c==="node"?"Node":"Link","Click")]||!u&&n.onBackgroundClick)&&ze(n.showPointerCursor)(_)?"add":"remove"]("clickable"),n.hoverObj=u}}).clickAfterDrag(!1).onClick(function(l,u){var d=un(l);if(d){var p=n["on".concat(d.__graphObjType==="node"?"Node":"Link","Click")];p&&p(d.__data,u)}else n.onBackgroundClick&&n.onBackgroundClick(u)}).onRightClick(function(l,u){var d=un(l);if(d){var p=n["on".concat(d.__graphObjType==="node"?"Node":"Link","RightClick")];p&&p(d.__data,u)}else n.onBackgroundRightClick&&n.onBackgroundRightClick(u)}),this._animationCycle()}});function un(e){for(var t=e;t&&!t.hasOwnProperty("__graphObjType");)t=t.parent;return t}var xa={exports:{}},Sa,Vl;function yE(){if(Vl)return Sa;Vl=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sa=e,Sa}var Ea,zl;function ME(){if(zl)return Ea;zl=1;var e=yE();function t(){}function n(){}return n.resetWarningCache=t,Ea=function(){function i(o,s,l,u,d,p){if(p!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}i.isRequired=i;function r(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},Ea}var Wl;function TE(){return Wl||(Wl=1,xa.exports=ME()()),xa.exports}var AE=TE();const I=mc(AE),Pr={width:I.number,height:I.number,graphData:I.shape({nodes:I.arrayOf(I.object).isRequired,links:I.arrayOf(I.object).isRequired}),backgroundColor:I.string,nodeRelSize:I.number,nodeId:I.string,nodeLabel:I.oneOfType([I.string,I.func]),nodeVal:I.oneOfType([I.number,I.string,I.func]),nodeVisibility:I.oneOfType([I.bool,I.string,I.func]),nodeColor:I.oneOfType([I.string,I.func]),nodeAutoColorBy:I.oneOfType([I.string,I.func]),onNodeHover:I.func,onNodeClick:I.func,linkSource:I.string,linkTarget:I.string,linkLabel:I.oneOfType([I.string,I.func]),linkVisibility:I.oneOfType([I.bool,I.string,I.func]),linkColor:I.oneOfType([I.string,I.func]),linkAutoColorBy:I.oneOfType([I.string,I.func]),linkWidth:I.oneOfType([I.number,I.string,I.func]),linkCurvature:I.oneOfType([I.number,I.string,I.func]),linkDirectionalArrowLength:I.oneOfType([I.number,I.string,I.func]),linkDirectionalArrowColor:I.oneOfType([I.string,I.func]),linkDirectionalArrowRelPos:I.oneOfType([I.number,I.string,I.func]),linkDirectionalParticles:I.oneOfType([I.number,I.string,I.func]),linkDirectionalParticleSpeed:I.oneOfType([I.number,I.string,I.func]),linkDirectionalParticleOffset:I.oneOfType([I.number,I.string,I.func]),linkDirectionalParticleWidth:I.oneOfType([I.number,I.string,I.func]),linkDirectionalParticleColor:I.oneOfType([I.string,I.func]),onLinkHover:I.func,onLinkClick:I.func,dagMode:I.oneOf(["td","bu","lr","rl","zin","zout","radialin","radialout"]),dagLevelDistance:I.number,dagNodeFilter:I.func,onDagError:I.func,d3AlphaMin:I.number,d3AlphaDecay:I.number,d3VelocityDecay:I.number,warmupTicks:I.number,cooldownTicks:I.number,cooldownTime:I.number,onEngineTick:I.func,onEngineStop:I.func,getGraphBbox:I.func},Uf={zoomToFit:I.func,onNodeRightClick:I.func,onNodeDrag:I.func,onNodeDragEnd:I.func,onLinkRightClick:I.func,linkHoverPrecision:I.number,onBackgroundClick:I.func,onBackgroundRightClick:I.func,showPointerCursor:I.oneOfType([I.bool,I.func]),enablePointerInteraction:I.bool,enableNodeDrag:I.bool},po={showNavInfo:I.bool,nodeOpacity:I.number,nodeResolution:I.number,nodeThreeObject:I.oneOfType([I.object,I.string,I.func]),nodeThreeObjectExtend:I.oneOfType([I.bool,I.string,I.func]),nodePositionUpdate:I.func,linkOpacity:I.number,linkResolution:I.number,linkCurveRotation:I.oneOfType([I.number,I.string,I.func]),linkMaterial:I.oneOfType([I.object,I.string,I.func]),linkThreeObject:I.oneOfType([I.object,I.string,I.func]),linkThreeObjectExtend:I.oneOfType([I.bool,I.string,I.func]),linkPositionUpdate:I.func,linkDirectionalArrowResolution:I.number,linkDirectionalParticleResolution:I.number,linkDirectionalParticleThreeObject:I.oneOfType([I.object,I.string,I.func]),forceEngine:I.oneOf(["d3","ngraph"]),ngraphPhysics:I.object,numDimensions:I.oneOf([1,2,3])};Object.assign({},Pr,Uf,{linkLineDash:I.oneOfType([I.arrayOf(I.number),I.string,I.func]),nodeCanvasObjectMode:I.oneOfType([I.string,I.func]),nodeCanvasObject:I.func,nodePointerAreaPaint:I.func,linkCanvasObjectMode:I.oneOfType([I.string,I.func]),linkCanvasObject:I.func,linkPointerAreaPaint:I.func,linkDirectionalParticleCanvasObject:I.func,autoPauseRedraw:I.bool,minZoom:I.number,maxZoom:I.number,enableZoomInteraction:I.oneOfType([I.bool,I.func]),enablePanInteraction:I.oneOfType([I.bool,I.func]),onZoom:I.func,onZoomEnd:I.func,onRenderFramePre:I.func,onRenderFramePost:I.func});const wE=Object.assign({},Pr,Uf,po,{enableNavigationControls:I.bool,controlType:I.oneOf(["trackball","orbit","fly"]),rendererConfig:I.object,extraRenderers:I.arrayOf(I.shape({render:I.func.isRequired}))});Object.assign({},Pr,po,{nodeDesc:I.oneOfType([I.string,I.func]),linkDesc:I.oneOfType([I.string,I.func])});Object.assign({},Pr,po,{markerAttrs:I.object,yOffset:I.number,glScale:I.number});const _o=Dd(EE,{methodNames:["emitParticle","d3Force","d3ReheatSimulation","stopAnimation","pauseAnimation","resumeAnimation","cameraPosition","zoomToFit","getGraphBbox","screen2GraphCoords","graph2ScreenCoords","postProcessingComposer","lights","scene","camera","renderer","controls","refresh"],initPropNames:["controlType","rendererConfig","extraRenderers"]});_o.displayName="ForceGraph3D";_o.propTypes=wE;function CE({graphData:e,inView:t}){const n=yt.useRef(null),i=yt.useMemo(()=>o=>{const s=new eo,l=new cr(.6+o.val*.3,16,16),u=new lr({color:new Qe(o.color),transparent:!0,opacity:.85}),d=new Ft(l,u);s.add(d);const p=new cr(1.2+o.val*.5,16,16),c=new lr({color:new Qe(o.color),transparent:!0,opacity:.12}),_=new Ft(p,c);return s.add(_),s},[]),r=yt.useMemo(()=>()=>{const o=new Gn,s=new bc({color:13625087,transparent:!0,opacity:.15,linewidth:1});return new gc(o,s)},[]),a=yt.useMemo(()=>(o,s)=>{const l=o.geometry,u=new Float32Array([s.start.x,s.start.y,s.start.z,s.end.x,s.end.y,s.end.z]);l.setAttribute("position",new Qn(u,3))},[]);return yt.useEffect(()=>{const o=n.current;o&&(o.graphData(e),o.d3Force("charge")?.strength(-30),o.d3Force("link")?.distance(20),o.d3Force("center")?.strength(.6))},[e]),yt.useEffect(()=>{const o=n.current;o&&t&&o.cameraPosition({z:280})},[t]),t?Hr.jsx("div",{className:"sg-canvas-wrap",children:Hr.jsx(_o,{ref:n,graphData:e,backgroundColor:"#0a0a0f",showNavInfo:!1,width:void 0,height:void 0,nodeThreeObject:i,linkThreeObject:r,linkPositionUpdate:a,linkDirectionalParticles:2,linkDirectionalParticleWidth:1.5,linkDirectionalParticleSpeed:.005,linkDirectionalParticleColor:()=>"#5eead4",linkOpacity:.2,nodeOpacity:.9,d3VelocityDecay:.3,warmupTicks:20,cooldownTicks:100,enablePointerInteraction:!0,enableNavigationControls:!0})}):Hr.jsx("div",{className:"sg-canvas-placeholder"})}export{CE as default};
