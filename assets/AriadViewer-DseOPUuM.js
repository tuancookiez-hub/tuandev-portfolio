import{r as Kt,j as vt}from"./index-BsCqh7P-.js";import{ae as Dt,aO as Ka,N as Nt,S as nn,b as He,e as Ft,aN as qa,f as je,w as Ve,i as Et,cm as yi,d as ea,W as Fi,c$ as yt,g as Qe,aS as Yt,H as jt,D as It,B as Mt,j as pn,a4 as Ce,d0 as Ya,U as Cn,cq as wn,cr as Oi,d1 as Za,ab as Ot,ac as xi,O as $e,aw as $a,ay as un,az as ja,aG as Yn,V as _t,h as Gt,an as ln,am as hn,at as Pn,ai as rn,cs as Qa,a9 as Ja,$ as mn,L as mt,aa as Hn,a as eo,a0 as cn,bq as Bi,b2 as to,b3 as no,aC as vn,d2 as io,d3 as ro,d4 as ao,d5 as oo,b4 as so,b5 as co,b6 as lo,b7 as fo,b8 as uo,b9 as po,ba as ho,bb as mo,bc as _o,bd as go,aD as vo,aQ as ta,aR as Vn,aT as yn,aU as Tn,aV as na,_ as Ht,aW as So,aX as Eo,X as Mi,aY as xo,Y as Ti,aZ as Mo,a_ as To,a$ as Ao,Q as ye,aM as Ro,d6 as bo,d7 as Co,d8 as kt,cp as tn,P as Fn,Z as Po,a7 as Vt,k as An,a5 as Zt,a2 as Lo,bu as ia,ao as ra,al as aa,ag as kn,ar as oa,as as sa,d9 as ca,aA as la,au as wo,av as Uo,ad as Do,af as Io,ah as fa,aj as No,ap as yo,ak as Fo,bv as Zn,bw as $n,bx as jn,by as Qn,bz as Gi,bA as Hi,bB as Vi,bC as ki,bD as Wi,bE as zi,bF as Xi,bG as Ki,bH as qi,bI as ui,bJ as Yi,bK as Zi,bL as $i,bM as ji,bN as Qi,bO as Ji,bP as er,bQ as tr,bR as nr,bS as ir,bT as rr,bU as ar,bV as or,bW as sr,bX as cr,bY as lr,bZ as fr,b_ as ur,b$ as dr,c0 as pr,c1 as di,c2 as hr,bm as Oo,bn as Bo,bo as Go,bp as Ho,br as Vo,bs as ko,bt as Wo,be as zo,bf as mr,bg as Xo,bl as On,aB as Ko,bi as _r,bj as gr,bk as vr,cZ as ua,da as qo,aJ as Wn,cU as Sr,cX as Yo,db as da,cQ as Ai,dc as pi,C as pa,cR as Zo,dd as ha,E as ma,z as _a,x as ga,v as va,u as Sa,t as Ea,b1 as Er,b0 as xa,aH as Jn,aI as ei,ct as $o,cu as jo,de as xr,df as St,dg as Qo,cT as Rt,cn as Ln,co as _n,M as fn,dh as Jo,di as es,I as ts,J as ns,K as is,T as hi,cN as rs,cM as as,cL as os,dj as ss,dk as mi,dl as Ma,dm as cs,dn as bn,dp as Ta,c5 as Bt,q as ls,n as fs,o as _i,dq as us,aF as Aa,cl as ds,ci as Ra,dr as ps,ds as hs,cS as ms,cc as _s,G as ti,ca as gs,c4 as Ri,dt as vs,du as Ss,dv as Es,dw as xs,dx as Ms,dy as Ts,dz as Bn,cg as As,dA as Rs,dB as bs,dC as Cs,dD as Ps,dE as ba,cP as Ls,dF as Mr,dG as Tr,dH as Ar,dI as ws,dJ as Ca,ck as Us,c as Ds,dK as Is,r as Ns}from"./three.core-CUlrJvXu.js";function Pa(){let e=null,n=!1,t=null,i=null;function r(a,o){t(a,o),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function ys(e){const n=new WeakMap;function t(c,f){const d=c.array,g=c.usage,_=d.byteLength,h=e.createBuffer();e.bindBuffer(f,h),e.bufferData(f,d,g),c.onUploadCallback();let v;if(d instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=e.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=e.SHORT;else if(d instanceof Uint32Array)v=e.UNSIGNED_INT;else if(d instanceof Int32Array)v=e.INT;else if(d instanceof Int8Array)v=e.BYTE;else if(d instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function i(c,f,d){const g=f.array,_=f.updateRanges;if(e.bindBuffer(d,c),_.length===0)e.bufferSubData(d,0,g);else{_.sort((v,T)=>v.start-T.start);let h=0;for(let v=1;v<_.length;v++){const T=_[h],I=_[v];I.start<=T.start+T.count+1?T.count=Math.max(T.count,I.start+I.count-T.start):(++h,_[h]=I)}_.length=h+1;for(let v=0,T=_.length;v<T;v++){const I=_[v];e.bufferSubData(d,I.start*g.BYTES_PER_ELEMENT,g,I.start,I.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(e.deleteBuffer(f.buffer),n.delete(c))}function o(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=n.get(c);(!g||g.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=n.get(c);if(d===void 0)n.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,f),d.version=c.version}}return{get:r,remove:a,update:o}}var Fs=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Os=`#ifdef USE_ALPHAHASH
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
#endif`,Bs=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hs=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ks=`#ifdef USE_AOMAP
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
#endif`,Ws=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zs=`#ifdef USE_BATCHING
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
#endif`,Xs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ks=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ys=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zs=`#ifdef USE_IRIDESCENCE
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
#endif`,$s=`#ifdef USE_BUMPMAP
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
#endif`,js=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Js=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ic=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ac=`#define PI 3.141592653589793
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
} // validated`,oc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sc=`vec3 transformedNormal = objectNormal;
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
#endif`,cc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",pc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hc=`#ifdef USE_ENVMAP
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
#endif`,mc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_c=`#ifdef USE_ENVMAP
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
#endif`,gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vc=`#ifdef USE_ENVMAP
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
#endif`,Sc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ec=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tc=`#ifdef USE_GRADIENTMAP
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
}`,Ac=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cc=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ic=`PhysicalMaterial material;
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
#endif`,Nc=`uniform sampler2D dfgLUT;
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
}`,yc=`
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
#endif`,Fc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Oc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bc=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kc=`#if defined( USE_POINTS_UV )
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
#endif`,qc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$c=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qc=`#ifdef USE_MORPHTARGETS
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
#endif`,Jc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,el=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,il=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,al=`#ifdef USE_NORMALMAP
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
#endif`,ol=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ll=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ul=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ml=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_l=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,El=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xl=`float getShadowMask() {
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
}`,Ml=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tl=`#ifdef USE_SKINNING
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
#endif`,Al=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rl=`#ifdef USE_SKINNING
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
#endif`,bl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ll=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wl=`#ifdef USE_TRANSMISSION
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
#endif`,Ul=`#ifdef USE_TRANSMISSION
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
#endif`,Dl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Il=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ol=`uniform sampler2D t2D;
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
}`,Bl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kl=`#include <common>
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
}`,Wl=`#if DEPTH_PACKING == 3200
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
}`,zl=`#define DISTANCE
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
}`,Xl=`#define DISTANCE
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
}`,Kl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ql=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yl=`uniform float scale;
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
}`,Zl=`uniform vec3 diffuse;
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
}`,$l=`#include <common>
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
}`,jl=`uniform vec3 diffuse;
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
}`,Ql=`#define LAMBERT
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
}`,Jl=`#define LAMBERT
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
}`,ef=`#define MATCAP
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
}`,tf=`#define MATCAP
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
}`,nf=`#define NORMAL
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
}`,rf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,sf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,lf=`#define TOON
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
}`,ff=`#define TOON
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
}`,uf=`uniform float size;
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
}`,df=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,hf=`uniform vec3 color;
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
}`,mf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Fs,alphahash_pars_fragment:Os,alphamap_fragment:Bs,alphamap_pars_fragment:Gs,alphatest_fragment:Hs,alphatest_pars_fragment:Vs,aomap_fragment:ks,aomap_pars_fragment:Ws,batching_pars_vertex:zs,batching_vertex:Xs,begin_vertex:Ks,beginnormal_vertex:qs,bsdfs:Ys,iridescence_fragment:Zs,bumpmap_pars_fragment:$s,clipping_planes_fragment:js,clipping_planes_pars_fragment:Qs,clipping_planes_pars_vertex:Js,clipping_planes_vertex:ec,color_fragment:tc,color_pars_fragment:nc,color_pars_vertex:ic,color_vertex:rc,common:ac,cube_uv_reflection_fragment:oc,defaultnormal_vertex:sc,displacementmap_pars_vertex:cc,displacementmap_vertex:lc,emissivemap_fragment:fc,emissivemap_pars_fragment:uc,colorspace_fragment:dc,colorspace_pars_fragment:pc,envmap_fragment:hc,envmap_common_pars_fragment:mc,envmap_pars_fragment:_c,envmap_pars_vertex:gc,envmap_physical_pars_fragment:Pc,envmap_vertex:vc,fog_vertex:Sc,fog_pars_vertex:Ec,fog_fragment:xc,fog_pars_fragment:Mc,gradientmap_pars_fragment:Tc,lightmap_pars_fragment:Ac,lights_lambert_fragment:Rc,lights_lambert_pars_fragment:bc,lights_pars_begin:Cc,lights_toon_fragment:Lc,lights_toon_pars_fragment:wc,lights_phong_fragment:Uc,lights_phong_pars_fragment:Dc,lights_physical_fragment:Ic,lights_physical_pars_fragment:Nc,lights_fragment_begin:yc,lights_fragment_maps:Fc,lights_fragment_end:Oc,lightprobes_pars_fragment:Bc,logdepthbuf_fragment:Gc,logdepthbuf_pars_fragment:Hc,logdepthbuf_pars_vertex:Vc,logdepthbuf_vertex:kc,map_fragment:Wc,map_pars_fragment:zc,map_particle_fragment:Xc,map_particle_pars_fragment:Kc,metalnessmap_fragment:qc,metalnessmap_pars_fragment:Yc,morphinstance_vertex:Zc,morphcolor_vertex:$c,morphnormal_vertex:jc,morphtarget_pars_vertex:Qc,morphtarget_vertex:Jc,normal_fragment_begin:el,normal_fragment_maps:tl,normal_pars_fragment:nl,normal_pars_vertex:il,normal_vertex:rl,normalmap_pars_fragment:al,clearcoat_normal_fragment_begin:ol,clearcoat_normal_fragment_maps:sl,clearcoat_pars_fragment:cl,iridescence_pars_fragment:ll,opaque_fragment:fl,packing:ul,premultiplied_alpha_fragment:dl,project_vertex:pl,dithering_fragment:hl,dithering_pars_fragment:ml,roughnessmap_fragment:_l,roughnessmap_pars_fragment:gl,shadowmap_pars_fragment:vl,shadowmap_pars_vertex:Sl,shadowmap_vertex:El,shadowmask_pars_fragment:xl,skinbase_vertex:Ml,skinning_pars_vertex:Tl,skinning_vertex:Al,skinnormal_vertex:Rl,specularmap_fragment:bl,specularmap_pars_fragment:Cl,tonemapping_fragment:Pl,tonemapping_pars_fragment:Ll,transmission_fragment:wl,transmission_pars_fragment:Ul,uv_pars_fragment:Dl,uv_pars_vertex:Il,uv_vertex:Nl,worldpos_vertex:yl,background_vert:Fl,background_frag:Ol,backgroundCube_vert:Bl,backgroundCube_frag:Gl,cube_vert:Hl,cube_frag:Vl,depth_vert:kl,depth_frag:Wl,distance_vert:zl,distance_frag:Xl,equirect_vert:Kl,equirect_frag:ql,linedashed_vert:Yl,linedashed_frag:Zl,meshbasic_vert:$l,meshbasic_frag:jl,meshlambert_vert:Ql,meshlambert_frag:Jl,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:rf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:sf,meshphysical_frag:cf,meshtoon_vert:lf,meshtoon_frag:ff,points_vert:uf,points_frag:df,shadow_vert:pf,shadow_frag:hf,sprite_vert:mf,sprite_frag:_f},ce={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ce},probesMax:{value:new Ce},probesResolution:{value:new Ce}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},Ut={basic:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:St([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:St([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:St([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:St([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:St([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:St([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:St([ce.common,ce.displacementmap,{referencePosition:{value:new Ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:St([ce.lights,ce.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ut.physical={uniforms:St([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const In={r:0,b:0,g:0},gf=new Ft,La=new ye;La.set(-1,0,0,0,1,0,0,0,1);function vf(e,n,t,i,r,a){const o=new He(0);let c=r===!0?0:1,f,d,g=null,_=0,h=null;function v(U){let P=U.isScene===!0?U.background:null;if(P&&P.isTexture){const E=U.backgroundBlurriness>0;P=n.get(P,E)}return P}function T(U){let P=!1;const E=v(U);E===null?p(o,c):E&&E.isColor&&(p(E,1),P=!0);const b=e.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(e.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function I(U,P){const E=v(P);E&&(E.isCubeTexture||E.mapping===Wn)?(d===void 0&&(d=new Ot(new Ai(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:pi(Ut.backgroundCube.uniforms),vertexShader:Ut.backgroundCube.vertexShader,fragmentShader:Ut.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,M,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(P.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(La),d.material.toneMapped=Qe.getTransfer(E.colorSpace)!==$e,(g!==E||_!==E.version||h!==e.toneMapping)&&(d.material.needsUpdate=!0,g=E,_=E.version,h=e.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new Ot(new la(2,2),new kt({name:"BackgroundMaterial",uniforms:pi(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Qe.getTransfer(E.colorSpace)!==$e,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||_!==E.version||h!==e.toneMapping)&&(f.material.needsUpdate=!0,g=E,_=E.version,h=e.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function p(U,P){U.getRGB(In,da(e)),t.buffers.color.setClear(In.r,In.g,In.b,P,a)}function l(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(U,P=1){o.set(U),c=P,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(U){c=U,p(o,c)},render:T,addToRenderList:I,dispose:l}}function Sf(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,o=!1;function c(L,G,J,Z,W){let K=!1;const H=_(L,Z,J,G);a!==H&&(a=H,d(a.object)),K=v(L,Z,J,W),K&&T(L,Z,J,W),W!==null&&n.update(W,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(L,G,J,Z),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function f(){return e.createVertexArray()}function d(L){return e.bindVertexArray(L)}function g(L){return e.deleteVertexArray(L)}function _(L,G,J,Z){const W=Z.wireframe===!0;let K=i[G.id];K===void 0&&(K={},i[G.id]=K);const H=L.isInstancedMesh===!0?L.id:0;let $=K[H];$===void 0&&($={},K[H]=$);let oe=$[J.id];oe===void 0&&(oe={},$[J.id]=oe);let _e=oe[W];return _e===void 0&&(_e=h(f()),oe[W]=_e),_e}function h(L){const G=[],J=[],Z=[];for(let W=0;W<t;W++)G[W]=0,J[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:Z,object:L,attributes:{},index:null}}function v(L,G,J,Z){const W=a.attributes,K=G.attributes;let H=0;const $=J.getAttributes();for(const oe in $)if($[oe].location>=0){const he=W[oe];let ve=K[oe];if(ve===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;H++}return a.attributesNum!==H||a.index!==Z}function T(L,G,J,Z){const W={},K=G.attributes;let H=0;const $=J.getAttributes();for(const oe in $)if($[oe].location>=0){let he=K[oe];he===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(he=L.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),W[oe]=ve,H++}a.attributes=W,a.attributesNum=H,a.index=Z}function I(){const L=a.newAttributes;for(let G=0,J=L.length;G<J;G++)L[G]=0}function p(L){l(L,0)}function l(L,G){const J=a.newAttributes,Z=a.enabledAttributes,W=a.attributeDivisors;J[L]=1,Z[L]===0&&(e.enableVertexAttribArray(L),Z[L]=1),W[L]!==G&&(e.vertexAttribDivisor(L,G),W[L]=G)}function U(){const L=a.newAttributes,G=a.enabledAttributes;for(let J=0,Z=G.length;J<Z;J++)G[J]!==L[J]&&(e.disableVertexAttribArray(J),G[J]=0)}function P(L,G,J,Z,W,K,H){H===!0?e.vertexAttribIPointer(L,G,J,W,K):e.vertexAttribPointer(L,G,J,Z,W,K)}function E(L,G,J,Z){I();const W=Z.attributes,K=J.getAttributes(),H=G.defaultAttributeValues;for(const $ in K){const oe=K[$];if(oe.location>=0){let _e=W[$];if(_e===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),_e!==void 0){const he=_e.normalized,ve=_e.itemSize,ke=n.get(_e);if(ke===void 0)continue;const Je=ke.buffer,Fe=ke.type,z=ke.bytesPerElement,j=Fe===e.INT||Fe===e.UNSIGNED_INT||_e.gpuType===fa;if(_e.isInterleavedBufferAttribute){const Q=_e.data,be=Q.stride,Pe=_e.offset;if(Q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<oe.locationSize;Ae++)l(oe.location+Ae,Q.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<oe.locationSize;Ae++)p(oe.location+Ae);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let Ae=0;Ae<oe.locationSize;Ae++)P(oe.location+Ae,ve/oe.locationSize,Fe,he,be*z,(Pe+ve/oe.locationSize*Ae)*z,j)}else{if(_e.isInstancedBufferAttribute){for(let Q=0;Q<oe.locationSize;Q++)l(oe.location+Q,_e.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Q=0;Q<oe.locationSize;Q++)p(oe.location+Q);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let Q=0;Q<oe.locationSize;Q++)P(oe.location+Q,ve/oe.locationSize,Fe,he,ve*z,ve/oe.locationSize*Q*z,j)}}else if(H!==void 0){const he=H[$];if(he!==void 0)switch(he.length){case 2:e.vertexAttrib2fv(oe.location,he);break;case 3:e.vertexAttrib3fv(oe.location,he);break;case 4:e.vertexAttrib4fv(oe.location,he);break;default:e.vertexAttrib1fv(oe.location,he)}}}}U()}function b(){x();for(const L in i){const G=i[L];for(const J in G){const Z=G[J];for(const W in Z){const K=Z[W];for(const H in K)g(K[H].object),delete K[H];delete Z[W]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const G=i[L.id];for(const J in G){const Z=G[J];for(const W in Z){const K=Z[W];for(const H in K)g(K[H].object),delete K[H];delete Z[W]}}delete i[L.id]}function D(L){for(const G in i){const J=i[G];for(const Z in J){const W=J[Z];if(W[L.id]===void 0)continue;const K=W[L.id];for(const H in K)g(K[H].object),delete K[H];delete W[L.id]}}}function m(L){for(const G in i){const J=i[G],Z=L.isInstancedMesh===!0?L.id:0,W=J[Z];if(W!==void 0){for(const K in W){const H=W[K];for(const $ in H)g(H[$].object),delete H[$];delete W[K]}delete J[Z],Object.keys(J).length===0&&delete i[G]}}}function x(){N(),o=!0,a!==r&&(a=r,d(a.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:x,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:m,releaseStatesOfProgram:D,initAttributes:I,enableAttribute:p,disableUnusedAttributes:U}}function Ef(e,n,t){let i;function r(f){i=f}function a(f,d){e.drawArrays(i,f,d),t.update(d,i,1)}function o(f,d,g){g!==0&&(e.drawArraysInstanced(i,f,d,g),t.update(d,i,g))}function c(f,d,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,g);let h=0;for(let v=0;v<g;v++)h+=d[v];t.update(h,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c}function xf(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const D=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Gt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const m=D===jt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(D!==Dt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zt&&!m)}function f(D){if(D==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=f(d);g!==d&&(Ve("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),U=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),P=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),M=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:o,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:h,maxTextures:v,maxVertexTextures:T,maxTextureSize:I,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:E,maxSamples:b,samples:M}}function Mf(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new Ro,c=new ye,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,h){const v=_.length!==0||h||i!==0||r;return r=h,i=_.length,v},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,h){t=g(_,h,0)},this.setState=function(_,h,v){const T=_.clippingPlanes,I=_.clipIntersection,p=_.clipShadows,l=e.get(_);if(!r||T===null||T.length===0||a&&!p)a?g(null):d();else{const U=a?0:i,P=U*4;let E=l.clippingState||null;f.value=E,E=g(T,h,P,v);for(let b=0;b!==P;++b)E[b]=t[b];l.clippingState=E,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=U}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function g(_,h,v,T){const I=_!==null?_.length:0;let p=null;if(I!==0){if(p=f.value,T!==!0||p===null){const l=v+I*4,U=h.matrixWorldInverse;c.getNormalMatrix(U),(p===null||p.length<l)&&(p=new Float32Array(l));for(let P=0,E=v;P!==I;++P,E+=4)o.copy(_[P]).applyMatrix4(U,c),o.normal.toArray(p,E),p[E+3]=o.constant}f.value=p,f.needsUpdate=!0}return n.numPlanes=I,n.numIntersection=0,p}}const $t=4,Rr=[.125,.215,.35,.446,.526,.582],en=20,Tf=256,Sn=new xi,br=new He;let ni=null,ii=0,ri=0,ai=!1;const Af=new Ce;class Cr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:c=Af}=a;ni=this._renderer.getRenderTarget(),ii=this._renderer.getActiveCubeFace(),ri=this._renderer.getActiveMipmapLevel(),ai=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(n,i,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(ni,ii,ri),this._renderer.xr.enabled=ai,n.scissorTest=!1,sn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Ln||n.mapping===_n?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ni=this._renderer.getRenderTarget(),ii=this._renderer.getActiveCubeFace(),ri=this._renderer.getActiveMipmapLevel(),ai=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:jt,format:Gt,colorSpace:Rt,depthBuffer:!1},r=Pr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pr(n,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rf(a)),this._blurMaterial=Cf(a,n,t),this._ggxMaterial=bf(a,n,t)}return r}_compileMaterial(n){const t=new Ot(new wn,n);this._renderer.compile(t,Sn)}_sceneToCubeUV(n,t,i,r,a){const f=new un(90,1,t,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,h=_.autoClear,v=_.toneMapping;_.getClearColor(br),_.toneMapping=Nt,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Ai,new fn({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,p=I.material;let l=!1;const U=n.background;U?U.isColor&&(p.color.copy(U),n.background=null,l=!0):(p.color.copy(br),l=!0);for(let P=0;P<6;P++){const E=P%3;E===0?(f.up.set(0,d[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+g[P],a.y,a.z)):E===1?(f.up.set(0,0,d[P]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+g[P],a.z)):(f.up.set(0,d[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+g[P]));const b=this._cubeSize;sn(r,E*b,P>2?b:0,b,b),_.setRenderTarget(r),l&&_.render(I,f),_.render(n,f)}_.toneMapping=v,_.autoClear=h,n.background=U}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Ln||n.mapping===_n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lr());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const c=a.uniforms;c.envMap.value=n;const f=this._cubeSize;sn(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(o,Sn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(n,a-1,a);t.autoClear=i}_applyGGXFilter(n,t,i){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[i];c.material=o;const f=o.uniforms,d=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),h=0+d*1.25,v=_*h,{_lodMax:T}=this,I=this._sizeLods[i],p=3*I*(i>T-$t?i-T+$t:0),l=4*(this._cubeSize-I);f.envMap.value=n.texture,f.roughness.value=v,f.mipInt.value=T-t,sn(a,p,l,3*I,2*I),r.setRenderTarget(a),r.render(c,Sn),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=T-i,sn(n,p,l,3*I,2*I),r.setRenderTarget(n),r.render(c,Sn)}_blur(n,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(n,o,t,i,r,"latitudinal",a),this._halfBlur(o,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,o,c){const f=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=d;const h=d.uniforms,v=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*en-1),I=a/T,p=isFinite(a)?1+Math.floor(g*I):en;p>en&&Ve(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${en}`);const l=[];let U=0;for(let D=0;D<en;++D){const m=D/I,x=Math.exp(-m*m/2);l.push(x),D===0?U+=x:D<p&&(U+=2*x)}for(let D=0;D<l.length;D++)l[D]=l[D]/U;h.envMap.value=n.texture,h.samples.value=p,h.weights.value=l,h.latitudinal.value=o==="latitudinal",c&&(h.poleAxis.value=c);const{_lodMax:P}=this;h.dTheta.value=T,h.mipInt.value=P-i;const E=this._sizeLods[r],b=3*E*(r>P-$t?r-P+$t:0),M=4*(this._cubeSize-E);sn(t,b,M,3*E,2*E),f.setRenderTarget(t),f.render(_,Sn)}}function Rf(e){const n=[],t=[],i=[];let r=e;const a=e-$t+1+Rr.length;for(let o=0;o<a;o++){const c=Math.pow(2,r);n.push(c);let f=1/c;o>e-$t?f=Rr[o-e+$t-1]:o===0&&(f=0),t.push(f);const d=1/(c-2),g=-d,_=1+d,h=[g,g,_,g,_,_,g,g,_,_,g,_],v=6,T=6,I=3,p=2,l=1,U=new Float32Array(I*T*v),P=new Float32Array(p*T*v),E=new Float32Array(l*T*v);for(let M=0;M<v;M++){const D=M%3*2/3-1,m=M>2?0:-1,x=[D,m,0,D+2/3,m,0,D+2/3,m+1,0,D,m,0,D+2/3,m+1,0,D,m+1,0];U.set(x,I*T*M),P.set(h,p*T*M);const N=[M,M,M,M,M,M];E.set(N,l*T*M)}const b=new wn;b.setAttribute("position",new tn(U,I)),b.setAttribute("uv",new tn(P,p)),b.setAttribute("faceIndex",new tn(E,l)),i.push(new Ot(b,null)),r>$t&&r--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function Pr(e,n,t){const i=new yt(e,n,t);return i.texture.mapping=Wn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sn(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function bf(e,n,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tf,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zn(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Cf(e,n,t){const i=new Float32Array(en),r=new Ce(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:en,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zn(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Lr(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zn(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function wr(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function zn(){return`

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
	`}class wa extends yt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},r=[i,i,i,i,i,i];this.texture=new pa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ai(5,5,5),a=new kt({name:"CubemapFromEquirect",uniforms:pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mt,blending:Vt});a.uniforms.tEquirect.value=t;const o=new Ot(r,a),c=t.minFilter;return t.minFilter===Yt&&(t.minFilter=mt),new Zo(1,10,this).update(n,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(n,t=!0,i=!0,r=!0){const a=n.getRenderTarget();for(let o=0;o<6;o++)n.setRenderTarget(this,o),n.clear(t,i,r);n.setRenderTarget(a)}}function Pf(e){let n=new WeakMap,t=new WeakMap,i=null;function r(h,v=!1){return h==null?null:v?o(h):a(h)}function a(h){if(h&&h.isTexture){const v=h.mapping;if(v===Jn||v===ei)if(n.has(h)){const T=n.get(h).texture;return c(T,h.mapping)}else{const T=h.image;if(T&&T.height>0){const I=new wa(T.height);return I.fromEquirectangularTexture(e,h),n.set(h,I),h.addEventListener("dispose",d),c(I.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const v=h.mapping,T=v===Jn||v===ei,I=v===Ln||v===_n;if(T||I){let p=t.get(h);const l=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==l)return i===null&&(i=new Cr(e)),p=T?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const U=h.image;return T&&U&&U.height>0||I&&U&&f(U)?(i===null&&(i=new Cr(e)),p=T?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",g),p.texture):null}}}return h}function c(h,v){return v===Jn?h.mapping=Ln:v===ei&&(h.mapping=_n),h}function f(h){let v=0;const T=6;for(let I=0;I<T;I++)h[I]!==void 0&&v++;return v===T}function d(h){const v=h.target;v.removeEventListener("dispose",d);const T=n.get(v);T!==void 0&&(n.delete(v),T.dispose())}function g(h){const v=h.target;v.removeEventListener("dispose",g);const T=t.get(v);T!==void 0&&(t.delete(v),T.dispose())}function _(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:_}}function Lf(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const r=e.getExtension(i);return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&eo("WebGLRenderer: "+i+" extension not supported."),r}}}function wf(e,n,t,i){const r={},a=new WeakMap;function o(_){const h=_.target;h.index!==null&&n.remove(h.index);for(const T in h.attributes)n.remove(h.attributes[T]);h.removeEventListener("dispose",o),delete r[h.id];const v=a.get(h);v&&(n.remove(v),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function c(_,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function f(_){const h=_.attributes;for(const v in h)n.update(h[v],e.ARRAY_BUFFER)}function d(_){const h=[],v=_.index,T=_.attributes.position;let I=0;if(T===void 0)return;if(v!==null){const U=v.array;I=v.version;for(let P=0,E=U.length;P<E;P+=3){const b=U[P+0],M=U[P+1],D=U[P+2];h.push(b,M,M,D,D,b)}}else{const U=T.array;I=T.version;for(let P=0,E=U.length/3-1;P<E;P+=3){const b=P+0,M=P+1,D=P+2;h.push(b,M,M,D,D,b)}}const p=new(T.count>=65535?$o:jo)(h,1);p.version=I;const l=a.get(_);l&&n.remove(l),a.set(_,p)}function g(_){const h=a.get(_);if(h){const v=_.index;v!==null&&h.version<v.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:g}}function Uf(e,n,t){let i;function r(_){i=_}let a,o;function c(_){a=_.type,o=_.bytesPerElement}function f(_,h){e.drawElements(i,h,a,_*o),t.update(h,i,1)}function d(_,h,v){v!==0&&(e.drawElementsInstanced(i,h,a,_*o,v),t.update(h,i,v))}function g(_,h,v){if(v===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,_,0,v);let I=0;for(let p=0;p<v;p++)I+=h[p];t.update(I,i,1)}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=g}function Df(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,c){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=c*(a/3);break;case e.LINES:t.lines+=c*(a/2);break;case e.LINE_STRIP:t.lines+=c*(a-1);break;case e.LINE_LOOP:t.lines+=c*a;break;case e.POINTS:t.points+=c*a;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function If(e,n,t){const i=new WeakMap,r=new Et;function a(o,c,f){const d=o.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let h=i.get(c);if(h===void 0||h.count!==_){let x=function(){D.dispose(),i.delete(c),c.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();const v=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,I=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],l=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let P=0;v===!0&&(P=1),T===!0&&(P=2),I===!0&&(P=3);let E=c.attributes.position.count*P,b=1;E>n.maxTextureSize&&(b=Math.ceil(E/n.maxTextureSize),E=n.maxTextureSize);const M=new Float32Array(E*b*4*_),D=new ua(M,E,b,_);D.type=Zt,D.needsUpdate=!0;const m=P*4;for(let N=0;N<_;N++){const L=p[N],G=l[N],J=U[N],Z=E*b*4*N;for(let W=0;W<L.count;W++){const K=W*m;v===!0&&(r.fromBufferAttribute(L,W),M[Z+K+0]=r.x,M[Z+K+1]=r.y,M[Z+K+2]=r.z,M[Z+K+3]=0),T===!0&&(r.fromBufferAttribute(G,W),M[Z+K+4]=r.x,M[Z+K+5]=r.y,M[Z+K+6]=r.z,M[Z+K+7]=0),I===!0&&(r.fromBufferAttribute(J,W),M[Z+K+8]=r.x,M[Z+K+9]=r.y,M[Z+K+10]=r.z,M[Z+K+11]=J.itemSize===4?r.w:1)}}h={count:_,texture:D,size:new _t(E,b)},i.set(c,h),c.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)f.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let v=0;for(let I=0;I<d.length;I++)v+=d[I];const T=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(e,"morphTargetBaseInfluence",T),f.getUniforms().setValue(e,"morphTargetInfluences",d)}f.getUniforms().setValue(e,"morphTargetsTexture",h.texture,t),f.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function Nf(e,n,t,i,r){let a=new WeakMap;function o(d){const g=r.render.frame,_=d.geometry,h=n.get(d,_);if(a.get(h)!==g&&(n.update(h),a.set(h,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==g&&(t.update(d.instanceMatrix,e.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,e.ARRAY_BUFFER),a.set(d,g))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==g&&(v.update(),a.set(v,g))}return h}function c(){a=new WeakMap}function f(d){const g=d.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:c}}const yf={[Ea]:"LINEAR_TONE_MAPPING",[Sa]:"REINHARD_TONE_MAPPING",[va]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[_a]:"AGX_TONE_MAPPING",[ma]:"NEUTRAL_TONE_MAPPING",[ha]:"CUSTOM_TONE_MAPPING"};function Ff(e,n,t,i,r,a){const o=new yt(n,t,{type:e,depthBuffer:r,stencilBuffer:a,samples:i?4:0,depthTexture:r?new Cn(n,t):void 0}),c=new yt(n,t,{type:jt,depthBuffer:!1,stencilBuffer:!1}),f=new wn;f.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Oi([0,2,0,0,2,0],2));const d=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ot(f,d),_=new xi(-1,1,1,-1,0,1);let h=null,v=null,T=!1,I,p=null,l=[],U=!1;this.setSize=function(P,E){o.setSize(P,E),c.setSize(P,E);for(let b=0;b<l.length;b++){const M=l[b];M.setSize&&M.setSize(P,E)}},this.setEffects=function(P){l=P,U=l.length>0&&l[0].isRenderPass===!0;const E=o.width,b=o.height;for(let M=0;M<l.length;M++){const D=l[M];D.setSize&&D.setSize(E,b)}},this.begin=function(P,E){if(T||P.toneMapping===Nt&&l.length===0)return!1;if(p=E,E!==null){const b=E.width,M=E.height;(o.width!==b||o.height!==M)&&this.setSize(b,M)}return U===!1&&P.setRenderTarget(o),I=P.toneMapping,P.toneMapping=Nt,!0},this.hasRenderPass=function(){return U},this.end=function(P,E){P.toneMapping=I,T=!0;let b=o,M=c;for(let D=0;D<l.length;D++){const m=l[D];if(m.enabled!==!1&&(m.render(P,M,b,E),m.needsSwap!==!1)){const x=b;b=M,M=x}}if(h!==P.outputColorSpace||v!==P.toneMapping){h=P.outputColorSpace,v=P.toneMapping,d.defines={},Qe.getTransfer(h)===$e&&(d.defines.SRGB_TRANSFER="");const D=yf[v];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,P.setRenderTarget(p),P.render(g,_),p=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),f.dispose(),d.dispose()}}const Ua=new hi,gi=new Cn(1,1),Da=new ua,Ia=new Jo,Na=new pa,Ur=[],Dr=[],Ir=new Float32Array(16),Nr=new Float32Array(9),yr=new Float32Array(4);function gn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Ur[r];if(a===void 0&&(a=new Float32Array(r),Ur[r]=a),n!==0){i.toArray(a,0);for(let o=1,c=0;o!==n;++o)c+=t,e[o].toArray(a,c)}return a}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Xn(e,n){let t=Dr[n];t===void 0&&(t=new Int32Array(n),Dr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Of(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Bf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function Gf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function Hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function Vf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;yr.set(i),e.uniformMatrix2fv(this.addr,!1,yr),ut(t,i)}}function kf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Nr.set(i),e.uniformMatrix3fv(this.addr,!1,Nr),ut(t,i)}}function Wf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Ir.set(i),e.uniformMatrix4fv(this.addr,!1,Ir),ut(t,i)}}function zf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Xf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function Kf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function qf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function Yf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Zf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function $f(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function jf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function Qf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(gi.compareFunction=t.isReversedDepthBuffer()?Mi:Ti,a=gi):a=Ua,t.setTexture2D(n||a,r)}function Jf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Ia,r)}function eu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Na,r)}function tu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Da,r)}function nu(e){switch(e){case 5126:return Of;case 35664:return Bf;case 35665:return Gf;case 35666:return Hf;case 35674:return Vf;case 35675:return kf;case 35676:return Wf;case 5124:case 35670:return zf;case 35667:case 35671:return Xf;case 35668:case 35672:return Kf;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return Zf;case 36295:return $f;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return eu;case 36289:case 36303:case 36311:case 36292:return tu}}function iu(e,n){e.uniform1fv(this.addr,n)}function ru(e,n){const t=gn(n,this.size,2);e.uniform2fv(this.addr,t)}function au(e,n){const t=gn(n,this.size,3);e.uniform3fv(this.addr,t)}function ou(e,n){const t=gn(n,this.size,4);e.uniform4fv(this.addr,t)}function su(e,n){const t=gn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function cu(e,n){const t=gn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function lu(e,n){const t=gn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function fu(e,n){e.uniform1iv(this.addr,n)}function uu(e,n){e.uniform2iv(this.addr,n)}function du(e,n){e.uniform3iv(this.addr,n)}function pu(e,n){e.uniform4iv(this.addr,n)}function hu(e,n){e.uniform1uiv(this.addr,n)}function mu(e,n){e.uniform2uiv(this.addr,n)}function _u(e,n){e.uniform3uiv(this.addr,n)}function gu(e,n){e.uniform4uiv(this.addr,n)}function vu(e,n,t){const i=this.cache,r=n.length,a=Xn(t,r);ft(i,a)||(e.uniform1iv(this.addr,a),ut(i,a));let o;this.type===e.SAMPLER_2D_SHADOW?o=gi:o=Ua;for(let c=0;c!==r;++c)t.setTexture2D(n[c]||o,a[c])}function Su(e,n,t){const i=this.cache,r=n.length,a=Xn(t,r);ft(i,a)||(e.uniform1iv(this.addr,a),ut(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||Ia,a[o])}function Eu(e,n,t){const i=this.cache,r=n.length,a=Xn(t,r);ft(i,a)||(e.uniform1iv(this.addr,a),ut(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||Na,a[o])}function xu(e,n,t){const i=this.cache,r=n.length,a=Xn(t,r);ft(i,a)||(e.uniform1iv(this.addr,a),ut(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||Da,a[o])}function Mu(e){switch(e){case 5126:return iu;case 35664:return ru;case 35665:return au;case 35666:return ou;case 35674:return su;case 35675:return cu;case 35676:return lu;case 5124:case 35670:return fu;case 35667:case 35671:return uu;case 35668:case 35672:return du;case 35669:case 35673:return pu;case 5125:return hu;case 36294:return mu;case 36295:return _u;case 36296:return gu;case 35678:case 36198:case 36298:case 36306:case 35682:return vu;case 35679:case 36299:case 36307:return Su;case 35680:case 36300:case 36308:case 36293:return Eu;case 36289:case 36303:case 36311:case 36292:return xu}}class Tu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nu(t.type)}}class Au{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mu(t.type)}}class Ru{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const c=r[a];c.setValue(n,t[c.id],i)}}}const oi=/(\w+)(\])?(\[|\.)?/g;function Fr(e,n){e.seq.push(n),e.map[n.id]=n}function bu(e,n,t){const i=e.name,r=i.length;for(oi.lastIndex=0;;){const a=oi.exec(i),o=oi.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&o+2===r){Fr(t,d===void 0?new Tu(c,e,n):new Au(c,e,n));break}else{let _=t.map[c];_===void 0&&(_=new Ru(c),Fr(t,_)),t=_}}}class Gn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const c=n.getActiveUniform(t,o),f=n.getUniformLocation(t,c.name);bu(c,f,this)}const r=[],a=[];for(const o of this.seq)o.type===n.SAMPLER_2D_SHADOW||o.type===n.SAMPLER_CUBE_SHADOW||o.type===n.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(n,f.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function Or(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Cu=37297;let Pu=0;function Lu(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const c=o+1;i.push(`${c===n?">":" "} ${c}: ${t[o]}`)}return i.join(`
`)}const Br=new ye;function wu(e){Qe._getMatrix(Br,Qe.workingColorSpace,e);const n=`mat3( ${Br.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(e)){case xa:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Gr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Lu(e.getShaderSource(n),c)}else return a}function Uu(e,n){const t=wu(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Du={[Ea]:"Linear",[Sa]:"Reinhard",[va]:"Cineon",[ga]:"ACESFilmic",[_a]:"AgX",[ma]:"Neutral",[ha]:"Custom"};function Iu(e,n){const t=Du[n];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nn=new Ce;function Nu(){Qe.getLuminanceCoefficients(Nn);const e=Nn.x.toFixed(4),n=Nn.y.toFixed(4),t=Nn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yu(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rn).join(`
`)}function Fu(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Ou(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let c=1;a.type===e.FLOAT_MAT2&&(c=2),a.type===e.FLOAT_MAT3&&(c=3),a.type===e.FLOAT_MAT4&&(c=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:c}}return t}function Rn(e){return e!==""}function Hr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Vr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Bu=/^[ \t]*#include +<([\w\d./]+)>/gm;function vi(e){return e.replace(Bu,Hu)}const Gu=new Map;function Hu(e,n){let t=Ue[n];if(t===void 0){const i=Gu.get(n);if(i!==void 0)t=Ue[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return vi(t)}const Vu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kr(e){return e.replace(Vu,ku)}function ku(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Wr(e){let n=`precision ${e.precision} float;
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
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Wu={[Fn]:"SHADOWMAP_TYPE_PCF",[An]:"SHADOWMAP_TYPE_VSM"};function zu(e){return Wu[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xu={[Ln]:"ENVMAP_TYPE_CUBE",[_n]:"ENVMAP_TYPE_CUBE",[Wn]:"ENVMAP_TYPE_CUBE_UV"};function Ku(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Xu[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const qu={[_n]:"ENVMAP_MODE_REFRACTION"};function Yu(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":qu[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zu={[is]:"ENVMAP_BLENDING_MULTIPLY",[ns]:"ENVMAP_BLENDING_MIX",[ts]:"ENVMAP_BLENDING_ADD"};function $u(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Zu[e.combine]||"ENVMAP_BLENDING_NONE"}function ju(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Qu(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,c=t.fragmentShader;const f=zu(t),d=Ku(t),g=Yu(t),_=$u(t),h=ju(t),v=yu(t),T=Fu(a),I=r.createProgram();let p,l,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Rn).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Rn).join(`
`),l.length>0&&(l+=`
`)):(p=[Wr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rn).join(`
`),l=[Wr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nt?"#define TONE_MAPPING":"",t.toneMapping!==Nt?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Nt?Iu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Uu("linearToOutputTexel",t.outputColorSpace),Nu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rn).join(`
`)),o=vi(o),o=Hr(o,t),o=Vr(o,t),c=vi(c),c=Hr(c,t),c=Vr(c,t),o=kr(o),c=kr(c),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,p=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===xr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const P=U+p+o,E=U+l+c,b=Or(r,r.VERTEX_SHADER,P),M=Or(r,r.FRAGMENT_SHADER,E);r.attachShader(I,b),r.attachShader(I,M),t.index0AttributeName!==void 0?r.bindAttribLocation(I,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(I,0,"position"),r.linkProgram(I);function D(L){if(e.debug.checkShaderErrors){const G=r.getProgramInfoLog(I)||"",J=r.getShaderInfoLog(b)||"",Z=r.getShaderInfoLog(M)||"",W=G.trim(),K=J.trim(),H=Z.trim();let $=!0,oe=!0;if(r.getProgramParameter(I,r.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,I,b,M);else{const _e=Gr(r,b,"vertex"),he=Gr(r,M,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(I,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+_e+`
`+he)}else W!==""?Ve("WebGLProgram: Program Info Log:",W):(K===""||H==="")&&(oe=!1);oe&&(L.diagnostics={runnable:$,programLog:W,vertexShader:{log:K,prefix:p},fragmentShader:{log:H,prefix:l}})}r.deleteShader(b),r.deleteShader(M),m=new Gn(r,I),x=Ou(r,I)}let m;this.getUniforms=function(){return m===void 0&&D(this),m};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(I,Cu)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pu++,this.cacheKey=n,this.usedTimes=1,this.program=I,this.vertexShader=b,this.fragmentShader=M,this}let Ju=0;class ed{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const r=this._getShaderCacheForMaterial(n);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new td(n),t.set(n,i)),i}}class td{constructor(n){this.id=Ju++,this.code=n,this.usedTimes=0}}function nd(e){return e===mn||e===ui||e===di}function id(e,n,t,i,r,a){const o=new Qo,c=new ed,f=new Set,d=[],g=new Map,_=i.logarithmicDepthBuffer;let h=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(m){return f.add(m),m===0?"uv":`uv${m}`}function I(m,x,N,L,G,J){const Z=L.fog,W=G.geometry,K=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?L.environment:null,H=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,$=n.get(m.envMap||K,H),oe=$&&$.mapping===Wn?$.image.height:null,_e=v[m.type];m.precision!==null&&(h=i.getMaxPrecision(m.precision),h!==m.precision&&Ve("WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=he!==void 0?he.length:0;let ke=0;W.morphAttributes.position!==void 0&&(ke=1),W.morphAttributes.normal!==void 0&&(ke=2),W.morphAttributes.color!==void 0&&(ke=3);let Je,Fe,z,j;if(_e){const me=Ut[_e];Je=me.vertexShader,Fe=me.fragmentShader}else{Je=m.vertexShader,Fe=m.fragmentShader;const me=c.getVertexShaderStage(m),tt=c.getFragmentShaderStage(m);c.update(m,me,tt),z=me.id,j=tt.id}const Q=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),Pe=G.isInstancedMesh===!0,Ae=G.isBatchedMesh===!0,it=!!m.map,Ne=!!m.matcap,Xe=!!$,Ge=!!m.aoMap,Oe=!!m.lightMap,st=!!m.bumpMap&&m.wireframe===!1,lt=!!m.normalMap,dt=!!m.displacementMap,pt=!!m.emissiveMap,et=!!m.metalnessMap,ct=!!m.roughnessMap,R=m.anisotropy>0,gt=m.clearcoat>0,We=m.dispersion>0,S=m.iridescence>0,s=m.sheen>0,w=m.transmission>0,O=R&&!!m.anisotropyMap,V=gt&&!!m.clearcoatMap,ee=gt&&!!m.clearcoatNormalMap,ne=gt&&!!m.clearcoatRoughnessMap,k=S&&!!m.iridescenceMap,q=S&&!!m.iridescenceThicknessMap,ie=s&&!!m.sheenColorMap,Ee=s&&!!m.sheenRoughnessMap,se=!!m.specularMap,re=!!m.specularColorMap,Te=!!m.specularIntensityMap,Re=w&&!!m.transmissionMap,Le=w&&!!m.thicknessMap,A=!!m.gradientMap,te=!!m.alphaMap,X=m.alphaTest>0,ae=!!m.alphaHash,ue=!!m.extensions;let Y=Nt;m.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Y=e.toneMapping);const Se={shaderID:_e,shaderType:m.type,shaderName:m.name,vertexShader:Je,fragmentShader:Fe,defines:m.defines,customVertexShaderID:z,customFragmentShaderID:j,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&G._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,instancingMorph:Pe&&G.morphTexture!==null,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:it,matcap:Ne,envMap:Xe,envMapMode:Xe&&$.mapping,envMapCubeUVHeight:oe,aoMap:Ge,lightMap:Oe,bumpMap:st,normalMap:lt,displacementMap:dt,emissiveMap:pt,normalMapObjectSpace:lt&&m.normalMapType===Yo,normalMapTangentSpace:lt&&m.normalMapType===Sr,packedNormalMap:lt&&m.normalMapType===Sr&&nd(m.normalMap.format),metalnessMap:et,roughnessMap:ct,anisotropy:R,anisotropyMap:O,clearcoat:gt,clearcoatMap:V,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,dispersion:We,iridescence:S,iridescenceMap:k,iridescenceThicknessMap:q,sheen:s,sheenColorMap:ie,sheenRoughnessMap:Ee,specularMap:se,specularColorMap:re,specularIntensityMap:Te,transmission:w,transmissionMap:Re,thicknessMap:Le,gradientMap:A,opaque:m.transparent===!1&&m.blending===On&&m.alphaToCoverage===!1,alphaMap:te,alphaTest:X,alphaHash:ae,combine:m.combine,mapUv:it&&T(m.map.channel),aoMapUv:Ge&&T(m.aoMap.channel),lightMapUv:Oe&&T(m.lightMap.channel),bumpMapUv:st&&T(m.bumpMap.channel),normalMapUv:lt&&T(m.normalMap.channel),displacementMapUv:dt&&T(m.displacementMap.channel),emissiveMapUv:pt&&T(m.emissiveMap.channel),metalnessMapUv:et&&T(m.metalnessMap.channel),roughnessMapUv:ct&&T(m.roughnessMap.channel),anisotropyMapUv:O&&T(m.anisotropyMap.channel),clearcoatMapUv:V&&T(m.clearcoatMap.channel),clearcoatNormalMapUv:ee&&T(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&T(m.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&T(m.iridescenceMap.channel),iridescenceThicknessMapUv:q&&T(m.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&T(m.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&T(m.sheenRoughnessMap.channel),specularMapUv:se&&T(m.specularMap.channel),specularColorMapUv:re&&T(m.specularColorMap.channel),specularIntensityMapUv:Te&&T(m.specularIntensityMap.channel),transmissionMapUv:Re&&T(m.transmissionMap.channel),thicknessMapUv:Le&&T(m.thicknessMap.channel),alphaMapUv:te&&T(m.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||R),vertexNormals:!!W.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(it||te),fog:!!Z,useFog:m.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||W.attributes.normal===void 0&&lt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:be,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Y,decodeVideoTexture:it&&m.map.isVideoTexture===!0&&Qe.getTransfer(m.map.colorSpace)===$e,decodeVideoTextureEmissive:pt&&m.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(m.emissiveMap.colorSpace)===$e,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===It,flipSided:m.side===Mt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ue&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&m.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Se.vertexUv1s=f.has(1),Se.vertexUv2s=f.has(2),Se.vertexUv3s=f.has(3),f.clear(),Se}function p(m){const x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(const N in m.defines)x.push(N),x.push(m.defines[N]);return m.isRawShaderMaterial===!1&&(l(x,m),U(x,m),x.push(e.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()}function l(m,x){m.push(x.precision),m.push(x.outputColorSpace),m.push(x.envMapMode),m.push(x.envMapCubeUVHeight),m.push(x.mapUv),m.push(x.alphaMapUv),m.push(x.lightMapUv),m.push(x.aoMapUv),m.push(x.bumpMapUv),m.push(x.normalMapUv),m.push(x.displacementMapUv),m.push(x.emissiveMapUv),m.push(x.metalnessMapUv),m.push(x.roughnessMapUv),m.push(x.anisotropyMapUv),m.push(x.clearcoatMapUv),m.push(x.clearcoatNormalMapUv),m.push(x.clearcoatRoughnessMapUv),m.push(x.iridescenceMapUv),m.push(x.iridescenceThicknessMapUv),m.push(x.sheenColorMapUv),m.push(x.sheenRoughnessMapUv),m.push(x.specularMapUv),m.push(x.specularColorMapUv),m.push(x.specularIntensityMapUv),m.push(x.transmissionMapUv),m.push(x.thicknessMapUv),m.push(x.combine),m.push(x.fogExp2),m.push(x.sizeAttenuation),m.push(x.morphTargetsCount),m.push(x.morphAttributeCount),m.push(x.numDirLights),m.push(x.numPointLights),m.push(x.numSpotLights),m.push(x.numSpotLightMaps),m.push(x.numHemiLights),m.push(x.numRectAreaLights),m.push(x.numDirLightShadows),m.push(x.numPointLightShadows),m.push(x.numSpotLightShadows),m.push(x.numSpotLightShadowsWithMaps),m.push(x.numLightProbes),m.push(x.shadowMapType),m.push(x.toneMapping),m.push(x.numClippingPlanes),m.push(x.numClipIntersection),m.push(x.depthPacking)}function U(m,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),x.packedNormalMap&&o.enable(22),x.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),x.numLightProbeGrids>0&&o.enable(22),x.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function P(m){const x=v[m.type];let N;if(x){const L=Ut[x];N=qo.clone(L.uniforms)}else N=m.uniforms;return N}function E(m,x){let N=g.get(x);return N!==void 0?++N.usedTimes:(N=new Qu(e,x,m,r),d.push(N),g.set(x,N)),N}function b(m){if(--m.usedTimes===0){const x=d.indexOf(m);d[x]=d[d.length-1],d.pop(),g.delete(m.cacheKey),m.destroy()}}function M(m){c.remove(m)}function D(){c.dispose()}return{getParameters:I,getProgramCacheKey:p,getUniforms:P,acquireProgram:E,releaseProgram:b,releaseShaderCache:M,programs:d,dispose:D}}function rd(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let c=e.get(o);return c===void 0&&(c={},e.set(o,c)),c}function i(o){e.delete(o)}function r(o,c,f){e.get(o)[c]=f}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function ad(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function zr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Xr(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(h){let v=0;return h.isInstancedMesh&&(v+=2),h.isSkinnedMesh&&(v+=1),v}function c(h,v,T,I,p,l){let U=e[n];return U===void 0?(U={id:h.id,object:h,geometry:v,material:T,materialVariant:o(h),groupOrder:I,renderOrder:h.renderOrder,z:p,group:l},e[n]=U):(U.id=h.id,U.object=h,U.geometry=v,U.material=T,U.materialVariant=o(h),U.groupOrder=I,U.renderOrder=h.renderOrder,U.z=p,U.group=l),n++,U}function f(h,v,T,I,p,l){const U=c(h,v,T,I,p,l);T.transmission>0?i.push(U):T.transparent===!0?r.push(U):t.push(U)}function d(h,v,T,I,p,l){const U=c(h,v,T,I,p,l);T.transmission>0?i.unshift(U):T.transparent===!0?r.unshift(U):t.unshift(U)}function g(h,v,T){t.length>1&&t.sort(h||ad),i.length>1&&i.sort(v||zr),r.length>1&&r.sort(v||zr),T&&(t.reverse(),i.reverse(),r.reverse())}function _(){for(let h=n,v=e.length;h<v;h++){const T=e[h];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:f,unshift:d,finish:_,sort:g}}function od(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Xr,e.set(i,[o])):r>=a.length?(o=new Xr,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function sd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Ce,color:new He};break;case"SpotLight":t={position:new Ce,direction:new Ce,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ce,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ce,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new Ce,halfWidth:new Ce,halfHeight:new Ce};break}return e[n.id]=t,t}}}function cd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let ld=0;function fd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function ud(e){const n=new sd,t=cd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Ce);const r=new Ce,a=new Ft,o=new Ft;function c(d){let g=0,_=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let v=0,T=0,I=0,p=0,l=0,U=0,P=0,E=0,b=0,M=0,D=0;d.sort(fd);for(let x=0,N=d.length;x<N;x++){const L=d[x],G=L.color,J=L.intensity,Z=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===mn?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)g+=G.r*J,_+=G.g*J,h+=G.b*J;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],J);D++}else if(L.isDirectionalLight){const K=n.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,$=t.get(L);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=W,i.directionalShadowMatrix[v]=L.shadow.matrix,U++}i.directional[v]=K,v++}else if(L.isSpotLight){const K=n.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(G).multiplyScalar(J),K.distance=Z,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[I]=K;const H=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,H.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[I]=H.matrix,L.castShadow){const $=t.get(L);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.spotShadow[I]=$,i.spotShadowMap[I]=W,E++}I++}else if(L.isRectAreaLight){const K=n.get(L);K.color.copy(G).multiplyScalar(J),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=K,p++}else if(L.isPointLight){const K=n.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const H=L.shadow,$=t.get(L);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,i.pointShadow[T]=$,i.pointShadowMap[T]=W,i.pointShadowMatrix[T]=L.shadow.matrix,P++}i.point[T]=K,T++}else if(L.isHemisphereLight){const K=n.get(L);K.skyColor.copy(L.color).multiplyScalar(J),K.groundColor.copy(L.groundColor).multiplyScalar(J),i.hemi[l]=K,l++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=h;const m=i.hash;(m.directionalLength!==v||m.pointLength!==T||m.spotLength!==I||m.rectAreaLength!==p||m.hemiLength!==l||m.numDirectionalShadows!==U||m.numPointShadows!==P||m.numSpotShadows!==E||m.numSpotMaps!==b||m.numLightProbes!==D)&&(i.directional.length=v,i.spot.length=I,i.rectArea.length=p,i.point.length=T,i.hemi.length=l,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=E+b-M,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=D,m.directionalLength=v,m.pointLength=T,m.spotLength=I,m.rectAreaLength=p,m.hemiLength=l,m.numDirectionalShadows=U,m.numPointShadows=P,m.numSpotShadows=E,m.numSpotMaps=b,m.numLightProbes=D,i.version=ld++)}function f(d,g){let _=0,h=0,v=0,T=0,I=0;const p=g.matrixWorldInverse;for(let l=0,U=d.length;l<U;l++){const P=d[l];if(P.isDirectionalLight){const E=i.directional[_];E.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),_++}else if(P.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(P.isRectAreaLight){const E=i.rectArea[T];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(P.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(P.width*.5,0,0),E.halfHeight.set(0,P.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),T++}else if(P.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(p),h++}else if(P.isHemisphereLight){const E=i.hemi[I];E.direction.setFromMatrixPosition(P.matrixWorld),E.direction.transformDirection(p),I++}}}return{setup:c,setupView:f,state:i}}function Kr(e){const n=new ud(e),t=[],i=[],r=[];function a(h){_.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function c(h){i.push(h)}function f(h){r.push(h)}function d(){n.setup(t)}function g(h){n.setupView(t,h)}const _={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:_,setupLights:d,setupLightsView:g,pushLight:o,pushShadow:c,pushLightProbeGrid:f}}function dd(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let c;return o===void 0?(c=new Kr(e),n.set(r,[c])):a>=o.length?(c=new Kr(e),o.push(c)):c=o[a],c}function i(){n=new WeakMap}return{get:t,dispose:i}}const pd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hd=`uniform sampler2D shadow_pass;
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
}`,md=[new Ce(1,0,0),new Ce(-1,0,0),new Ce(0,1,0),new Ce(0,-1,0),new Ce(0,0,1),new Ce(0,0,-1)],_d=[new Ce(0,-1,0),new Ce(0,-1,0),new Ce(0,0,1),new Ce(0,0,-1),new Ce(0,-1,0),new Ce(0,-1,0)],qr=new Ft,En=new Ce,si=new Ce;function gd(e,n,t){let i=new ea;const r=new _t,a=new _t,o=new Et,c=new bo,f=new Co,d={},g=t.maxTextureSize,_={[pn]:Mt,[Mt]:pn,[It]:It},h=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:pd,fragmentShader:hd}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const T=new wn;T.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new Ot(T,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fn;let l=this.type;this.render=function(M,D,m){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Po&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fn);const x=e.getRenderTarget(),N=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),G=e.state;G.setBlending(Vt),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=l!==this.type;J&&D.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(W=>W.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,W=M.length;Z<W;Z++){const K=M[Z],H=K.shadow;if(H===void 0){Ve("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const $=H.getFrameExtents();r.multiply($),a.copy(H.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/$.x),r.x=a.x*$.x,H.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/$.y),r.y=a.y*$.y,H.mapSize.y=a.y));const oe=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=oe,H.map===null||J===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===An){if(K.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new yt(r.x,r.y,{format:mn,type:jt,minFilter:mt,magFilter:mt,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new Cn(r.x,r.y,Zt),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=hn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht}else K.isPointLight?(H.map=new wa(r.x),H.map.depthTexture=new Lo(r.x,rn)):(H.map=new yt(r.x,r.y),H.map.depthTexture=new Cn(r.x,r.y,rn)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=hn,this.type===Fn?(H.map.depthTexture.compareFunction=oe?Mi:Ti,H.map.depthTexture.minFilter=mt,H.map.depthTexture.magFilter=mt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht);H.camera.updateProjectionMatrix()}const _e=H.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<_e;he++){if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,he),e.clear();else{he===0&&(e.setRenderTarget(H.map),e.clear());const ve=H.getViewport(he);o.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),G.viewport(o)}if(K.isPointLight){const ve=H.camera,ke=H.matrix,Je=K.distance||ve.far;Je!==ve.far&&(ve.far=Je,ve.updateProjectionMatrix()),En.setFromMatrixPosition(K.matrixWorld),ve.position.copy(En),si.copy(ve.position),si.add(md[he]),ve.up.copy(_d[he]),ve.lookAt(si),ve.updateMatrixWorld(),ke.makeTranslation(-En.x,-En.y,-En.z),qr.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qr,ve.coordinateSystem,ve.reversedDepth)}else H.updateMatrices(K);i=H.getFrustum(),E(D,m,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===An&&U(H,m),H.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(x,N,L)};function U(M,D){const m=n.update(I);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,v.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new yt(r.x,r.y,{format:mn,type:jt})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(D,null,m,h,I,null),v.uniforms.shadow_pass.value=M.mapPass.texture,v.uniforms.resolution.value=M.mapSize,v.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(D,null,m,v,I,null)}function P(M,D,m,x){let N=null;const L=m.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)N=L;else if(N=m.isPointLight===!0?f:c,e.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const G=N.uuid,J=D.uuid;let Z=d[G];Z===void 0&&(Z={},d[G]=Z);let W=Z[J];W===void 0&&(W=N.clone(),Z[J]=W,D.addEventListener("dispose",b)),N=W}if(N.visible=D.visible,N.wireframe=D.wireframe,x===An?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:_[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,m.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const G=e.properties.get(N);G.light=m}return N}function E(M,D,m,x,N){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===An)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld);const J=n.update(M),Z=M.material;if(Array.isArray(Z)){const W=J.groups;for(let K=0,H=W.length;K<H;K++){const $=W[K],oe=Z[$.materialIndex];if(oe&&oe.visible){const _e=P(M,oe,x,N);M.onBeforeShadow(e,M,D,m,J,_e,$),e.renderBufferDirect(m,null,J,_e,M,$),M.onAfterShadow(e,M,D,m,J,_e,$)}}}else if(Z.visible){const W=P(M,Z,x,N);M.onBeforeShadow(e,M,D,m,J,W,null),e.renderBufferDirect(m,null,J,W,M,null),M.onAfterShadow(e,M,D,m,J,W,null)}}const G=M.children;for(let J=0,Z=G.length;J<Z;J++)E(G[J],D,m,x,N)}function b(M){M.target.removeEventListener("dispose",b);for(const m in d){const x=d[m],N=M.target.uuid;N in x&&(x[N].dispose(),delete x[N])}}}function vd(e,n){function t(){let A=!1;const te=new Et;let X=null;const ae=new Et(0,0,0,0);return{setMask:function(ue){X!==ue&&!A&&(e.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){A=ue},setClear:function(ue,Y,Se,me,tt){tt===!0&&(ue*=me,Y*=me,Se*=me),te.set(ue,Y,Se,me),ae.equals(te)===!1&&(e.clearColor(ue,Y,Se,me),ae.copy(te))},reset:function(){A=!1,X=null,ae.set(-1,0,0,0)}}}function i(){let A=!1,te=!1,X=null,ae=null,ue=null;return{setReversed:function(Y){if(te!==Y){const Se=n.get("EXT_clip_control");Y?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),te=Y;const me=ue;ue=null,this.setClear(me)}},getReversed:function(){return te},setTest:function(Y){Y?Q(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(Y){X!==Y&&!A&&(e.depthMask(Y),X=Y)},setFunc:function(Y){if(te&&(Y=rs[Y]),ae!==Y){switch(Y){case Wo:e.depthFunc(e.NEVER);break;case ko:e.depthFunc(e.ALWAYS);break;case Vo:e.depthFunc(e.LESS);break;case Bi:e.depthFunc(e.LEQUAL);break;case Ho:e.depthFunc(e.EQUAL);break;case Go:e.depthFunc(e.GEQUAL);break;case Bo:e.depthFunc(e.GREATER);break;case Oo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ae=Y}},setLocked:function(Y){A=Y},setClear:function(Y){ue!==Y&&(ue=Y,te&&(Y=1-Y),e.clearDepth(Y))},reset:function(){A=!1,X=null,ae=null,ue=null,te=!1}}}function r(){let A=!1,te=null,X=null,ae=null,ue=null,Y=null,Se=null,me=null,tt=null;return{setTest:function(Ye){A||(Ye?Q(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(Ye){te!==Ye&&!A&&(e.stencilMask(Ye),te=Ye)},setFunc:function(Ye,bt,Ct){(X!==Ye||ae!==bt||ue!==Ct)&&(e.stencilFunc(Ye,bt,Ct),X=Ye,ae=bt,ue=Ct)},setOp:function(Ye,bt,Ct){(Y!==Ye||Se!==bt||me!==Ct)&&(e.stencilOp(Ye,bt,Ct),Y=Ye,Se=bt,me=Ct)},setLocked:function(Ye){A=Ye},setClear:function(Ye){tt!==Ye&&(e.clearStencil(Ye),tt=Ye)},reset:function(){A=!1,te=null,X=null,ae=null,ue=null,Y=null,Se=null,me=null,tt=null}}}const a=new t,o=new i,c=new r,f=new WeakMap,d=new WeakMap;let g={},_={},h={},v=new WeakMap,T=[],I=null,p=!1,l=null,U=null,P=null,E=null,b=null,M=null,D=null,m=new He(0,0,0),x=0,N=!1,L=null,G=null,J=null,Z=null,W=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const oe=e.getParameter(e.VERSION);oe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(oe)[1]),H=$>=1):oe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),H=$>=2);let _e=null,he={};const ve=e.getParameter(e.SCISSOR_BOX),ke=e.getParameter(e.VIEWPORT),Je=new Et().fromArray(ve),Fe=new Et().fromArray(ke);function z(A,te,X,ae){const ue=new Uint8Array(4),Y=e.createTexture();e.bindTexture(A,Y),e.texParameteri(A,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(A,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Se=0;Se<X;Se++)A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,ae,0,e.RGBA,e.UNSIGNED_BYTE,ue):e.texImage2D(te+Se,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ue);return Y}const j={};j[e.TEXTURE_2D]=z(e.TEXTURE_2D,e.TEXTURE_2D,1),j[e.TEXTURE_CUBE_MAP]=z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[e.TEXTURE_2D_ARRAY]=z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),j[e.TEXTURE_3D]=z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),Q(e.DEPTH_TEST),o.setFunc(Bi),st(!1),lt(mr),Q(e.CULL_FACE),Ge(Vt);function Q(A){g[A]!==!0&&(e.enable(A),g[A]=!0)}function be(A){g[A]!==!1&&(e.disable(A),g[A]=!1)}function Pe(A,te){return h[A]!==te?(e.bindFramebuffer(A,te),h[A]=te,A===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=te),A===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Ae(A,te){let X=T,ae=!1;if(A){X=v.get(te),X===void 0&&(X=[],v.set(te,X));const ue=A.textures;if(X.length!==ue.length||X[0]!==e.COLOR_ATTACHMENT0){for(let Y=0,Se=ue.length;Y<Se;Y++)X[Y]=e.COLOR_ATTACHMENT0+Y;X.length=ue.length,ae=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,ae=!0);ae&&e.drawBuffers(X)}function it(A){return I!==A?(e.useProgram(A),I=A,!0):!1}const Ne={[vn]:e.FUNC_ADD,[no]:e.FUNC_SUBTRACT,[to]:e.FUNC_REVERSE_SUBTRACT};Ne[as]=e.MIN,Ne[os]=e.MAX;const Xe={[vo]:e.ZERO,[go]:e.ONE,[_o]:e.SRC_COLOR,[mo]:e.SRC_ALPHA,[ho]:e.SRC_ALPHA_SATURATE,[po]:e.DST_COLOR,[uo]:e.DST_ALPHA,[fo]:e.ONE_MINUS_SRC_COLOR,[lo]:e.ONE_MINUS_SRC_ALPHA,[co]:e.ONE_MINUS_DST_COLOR,[so]:e.ONE_MINUS_DST_ALPHA,[oo]:e.CONSTANT_COLOR,[ao]:e.ONE_MINUS_CONSTANT_COLOR,[ro]:e.CONSTANT_ALPHA,[io]:e.ONE_MINUS_CONSTANT_ALPHA};function Ge(A,te,X,ae,ue,Y,Se,me,tt,Ye){if(A===Vt){p===!0&&(be(e.BLEND),p=!1);return}if(p===!1&&(Q(e.BLEND),p=!0),A!==Ko){if(A!==l||Ye!==N){if((U!==vn||b!==vn)&&(e.blendEquation(e.FUNC_ADD),U=vn,b=vn),Ye)switch(A){case On:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vr:e.blendFunc(e.ONE,e.ONE);break;case gr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _r:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:je("WebGLState: Invalid blending: ",A);break}else switch(A){case On:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case gr:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _r:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",A);break}P=null,E=null,M=null,D=null,m.set(0,0,0),x=0,l=A,N=Ye}return}ue=ue||te,Y=Y||X,Se=Se||ae,(te!==U||ue!==b)&&(e.blendEquationSeparate(Ne[te],Ne[ue]),U=te,b=ue),(X!==P||ae!==E||Y!==M||Se!==D)&&(e.blendFuncSeparate(Xe[X],Xe[ae],Xe[Y],Xe[Se]),P=X,E=ae,M=Y,D=Se),(me.equals(m)===!1||tt!==x)&&(e.blendColor(me.r,me.g,me.b,tt),m.copy(me),x=tt),l=A,N=!1}function Oe(A,te){A.side===It?be(e.CULL_FACE):Q(e.CULL_FACE);let X=A.side===Mt;te&&(X=!X),st(X),A.blending===On&&A.transparent===!1?Ge(Vt):Ge(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),a.setMask(A.colorWrite);const ae=A.stencilWrite;c.setTest(ae),ae&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),pt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function st(A){L!==A&&(A?e.frontFace(e.CW):e.frontFace(e.CCW),L=A)}function lt(A){A!==zo?(Q(e.CULL_FACE),A!==G&&(A===mr?e.cullFace(e.BACK):A===Xo?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),G=A}function dt(A){A!==J&&(H&&e.lineWidth(A),J=A)}function pt(A,te,X){A?(Q(e.POLYGON_OFFSET_FILL),(Z!==te||W!==X)&&(Z=te,W=X,o.getReversed()&&(te=-te),e.polygonOffset(te,X))):be(e.POLYGON_OFFSET_FILL)}function et(A){A?Q(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function ct(A){A===void 0&&(A=e.TEXTURE0+K-1),_e!==A&&(e.activeTexture(A),_e=A)}function R(A,te,X){X===void 0&&(_e===null?X=e.TEXTURE0+K-1:X=_e);let ae=he[X];ae===void 0&&(ae={type:void 0,texture:void 0},he[X]=ae),(ae.type!==A||ae.texture!==te)&&(_e!==X&&(e.activeTexture(X),_e=X),e.bindTexture(A,te||j[A]),ae.type=A,ae.texture=te)}function gt(){const A=he[_e];A!==void 0&&A.type!==void 0&&(e.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function We(){try{e.compressedTexImage2D(...arguments)}catch(A){je("WebGLState:",A)}}function S(){try{e.compressedTexImage3D(...arguments)}catch(A){je("WebGLState:",A)}}function s(){try{e.texSubImage2D(...arguments)}catch(A){je("WebGLState:",A)}}function w(){try{e.texSubImage3D(...arguments)}catch(A){je("WebGLState:",A)}}function O(){try{e.compressedTexSubImage2D(...arguments)}catch(A){je("WebGLState:",A)}}function V(){try{e.compressedTexSubImage3D(...arguments)}catch(A){je("WebGLState:",A)}}function ee(){try{e.texStorage2D(...arguments)}catch(A){je("WebGLState:",A)}}function ne(){try{e.texStorage3D(...arguments)}catch(A){je("WebGLState:",A)}}function k(){try{e.texImage2D(...arguments)}catch(A){je("WebGLState:",A)}}function q(){try{e.texImage3D(...arguments)}catch(A){je("WebGLState:",A)}}function ie(A){return _[A]!==void 0?_[A]:e.getParameter(A)}function Ee(A,te){_[A]!==te&&(e.pixelStorei(A,te),_[A]=te)}function se(A){Je.equals(A)===!1&&(e.scissor(A.x,A.y,A.z,A.w),Je.copy(A))}function re(A){Fe.equals(A)===!1&&(e.viewport(A.x,A.y,A.z,A.w),Fe.copy(A))}function Te(A,te){let X=d.get(te);X===void 0&&(X=new WeakMap,d.set(te,X));let ae=X.get(A);ae===void 0&&(ae=e.getUniformBlockIndex(te,A.name),X.set(A,ae))}function Re(A,te){const ae=d.get(te).get(A);f.get(te)!==ae&&(e.uniformBlockBinding(te,ae,A.__bindingPointIndex),f.set(te,ae))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),g={},_={},_e=null,he={},h={},v=new WeakMap,T=[],I=null,p=!1,l=null,U=null,P=null,E=null,b=null,M=null,D=null,m=new He(0,0,0),x=0,N=!1,L=null,G=null,J=null,Z=null,W=null,Je.set(0,0,e.canvas.width,e.canvas.height),Fe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:Q,disable:be,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:it,setBlending:Ge,setMaterial:Oe,setFlipSided:st,setCullFace:lt,setLineWidth:dt,setPolygonOffset:pt,setScissorTest:et,activeTexture:ct,bindTexture:R,unbindTexture:gt,compressedTexImage2D:We,compressedTexImage3D:S,texImage2D:k,texImage3D:q,pixelStorei:Ee,getParameter:ie,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:ee,texStorage3D:ne,texSubImage2D:s,texSubImage3D:w,compressedTexSubImage2D:O,compressedTexSubImage3D:V,scissor:se,viewport:re,reset:Le}}function Sd(e,n,t,i,r,a,o){const c=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new _t,g=new WeakMap,_=new Set;let h;const v=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(S,s){return T?new OffscreenCanvas(S,s):es("canvas")}function p(S,s,w){let O=1;const V=We(S);if((V.width>w||V.height>w)&&(O=w/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const ee=Math.floor(O*V.width),ne=Math.floor(O*V.height);h===void 0&&(h=I(ee,ne));const k=s?I(ee,ne):h;return k.width=ee,k.height=ne,k.getContext("2d").drawImage(S,0,0,ee,ne),Ve("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+ee+"x"+ne+")."),k}else return"data"in S&&Ve("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),S;return S}function l(S){return S.generateMipmaps}function U(S){e.generateMipmap(S)}function P(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(S,s,w,O,V,ee=!1){if(S!==null){if(e[S]!==void 0)return e[S];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ne;O&&(ne=n.get("EXT_texture_norm16"),ne||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=s;if(s===e.RED&&(w===e.FLOAT&&(k=e.R32F),w===e.HALF_FLOAT&&(k=e.R16F),w===e.UNSIGNED_BYTE&&(k=e.R8),w===e.UNSIGNED_SHORT&&ne&&(k=ne.R16_EXT),w===e.SHORT&&ne&&(k=ne.R16_SNORM_EXT)),s===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.R8UI),w===e.UNSIGNED_SHORT&&(k=e.R16UI),w===e.UNSIGNED_INT&&(k=e.R32UI),w===e.BYTE&&(k=e.R8I),w===e.SHORT&&(k=e.R16I),w===e.INT&&(k=e.R32I)),s===e.RG&&(w===e.FLOAT&&(k=e.RG32F),w===e.HALF_FLOAT&&(k=e.RG16F),w===e.UNSIGNED_BYTE&&(k=e.RG8),w===e.UNSIGNED_SHORT&&ne&&(k=ne.RG16_EXT),w===e.SHORT&&ne&&(k=ne.RG16_SNORM_EXT)),s===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RG8UI),w===e.UNSIGNED_SHORT&&(k=e.RG16UI),w===e.UNSIGNED_INT&&(k=e.RG32UI),w===e.BYTE&&(k=e.RG8I),w===e.SHORT&&(k=e.RG16I),w===e.INT&&(k=e.RG32I)),s===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RGB8UI),w===e.UNSIGNED_SHORT&&(k=e.RGB16UI),w===e.UNSIGNED_INT&&(k=e.RGB32UI),w===e.BYTE&&(k=e.RGB8I),w===e.SHORT&&(k=e.RGB16I),w===e.INT&&(k=e.RGB32I)),s===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),w===e.UNSIGNED_INT&&(k=e.RGBA32UI),w===e.BYTE&&(k=e.RGBA8I),w===e.SHORT&&(k=e.RGBA16I),w===e.INT&&(k=e.RGBA32I)),s===e.RGB&&(w===e.UNSIGNED_SHORT&&ne&&(k=ne.RGB16_EXT),w===e.SHORT&&ne&&(k=ne.RGB16_SNORM_EXT),w===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),w===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),s===e.RGBA){const q=ee?xa:Qe.getTransfer(V);w===e.FLOAT&&(k=e.RGBA32F),w===e.HALF_FLOAT&&(k=e.RGBA16F),w===e.UNSIGNED_BYTE&&(k=q===$e?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT&&ne&&(k=ne.RGBA16_EXT),w===e.SHORT&&ne&&(k=ne.RGBA16_SNORM_EXT),w===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&n.get("EXT_color_buffer_float"),k}function b(S,s){let w;return S?s===null||s===rn||s===Pn?w=e.DEPTH24_STENCIL8:s===Zt?w=e.DEPTH32F_STENCIL8:s===kn&&(w=e.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===rn||s===Pn?w=e.DEPTH_COMPONENT24:s===Zt?w=e.DEPTH_COMPONENT32F:s===kn&&(w=e.DEPTH_COMPONENT16),w}function M(S,s){return l(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ht&&S.minFilter!==mt?Math.log2(Math.max(s.width,s.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?s.mipmaps.length:1}function D(S){const s=S.target;s.removeEventListener("dispose",D),x(s),s.isVideoTexture&&g.delete(s),s.isHTMLTexture&&_.delete(s)}function m(S){const s=S.target;s.removeEventListener("dispose",m),L(s)}function x(S){const s=i.get(S);if(s.__webglInit===void 0)return;const w=S.source,O=v.get(w);if(O){const V=O[s.__cacheKey];V.usedTimes--,V.usedTimes===0&&N(S),Object.keys(O).length===0&&v.delete(w)}i.remove(S)}function N(S){const s=i.get(S);e.deleteTexture(s.__webglTexture);const w=S.source,O=v.get(w);delete O[s.__cacheKey],o.memory.textures--}function L(S){const s=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(s.__webglFramebuffer[O]))for(let V=0;V<s.__webglFramebuffer[O].length;V++)e.deleteFramebuffer(s.__webglFramebuffer[O][V]);else e.deleteFramebuffer(s.__webglFramebuffer[O]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[O])}else{if(Array.isArray(s.__webglFramebuffer))for(let O=0;O<s.__webglFramebuffer.length;O++)e.deleteFramebuffer(s.__webglFramebuffer[O]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let O=0;O<s.__webglColorRenderbuffer.length;O++)s.__webglColorRenderbuffer[O]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[O]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const w=S.textures;for(let O=0,V=w.length;O<V;O++){const ee=i.get(w[O]);ee.__webglTexture&&(e.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(w[O])}i.remove(S)}let G=0;function J(){G=0}function Z(){return G}function W(S){G=S}function K(){const S=G;return S>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),G+=1,S}function H(S){const s=[];return s.push(S.wrapS),s.push(S.wrapT),s.push(S.wrapR||0),s.push(S.magFilter),s.push(S.minFilter),s.push(S.anisotropy),s.push(S.internalFormat),s.push(S.format),s.push(S.type),s.push(S.generateMipmaps),s.push(S.premultiplyAlpha),s.push(S.flipY),s.push(S.unpackAlignment),s.push(S.colorSpace),s.join()}function $(S,s){const w=i.get(S);if(S.isVideoTexture&&R(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&w.__version!==S.version){const O=S.image;if(O===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{be(w,S,s);return}}else S.isExternalTexture&&(w.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+s)}function oe(S,s){const w=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&w.__version!==S.version){be(w,S,s);return}else S.isExternalTexture&&(w.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+s)}function _e(S,s){const w=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&w.__version!==S.version){be(w,S,s);return}t.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+s)}function he(S,s){const w=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&w.__version!==S.version){Pe(w,S,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+s)}const ve={[Vn]:e.REPEAT,[Hn]:e.CLAMP_TO_EDGE,[ta]:e.MIRRORED_REPEAT},ke={[Ht]:e.NEAREST,[na]:e.NEAREST_MIPMAP_NEAREST,[Tn]:e.NEAREST_MIPMAP_LINEAR,[mt]:e.LINEAR,[yn]:e.LINEAR_MIPMAP_NEAREST,[Yt]:e.LINEAR_MIPMAP_LINEAR},Je={[Ao]:e.NEVER,[To]:e.ALWAYS,[Mo]:e.LESS,[Ti]:e.LEQUAL,[xo]:e.EQUAL,[Mi]:e.GEQUAL,[Eo]:e.GREATER,[So]:e.NOTEQUAL};function Fe(S,s){if(s.type===Zt&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===mt||s.magFilter===yn||s.magFilter===Tn||s.magFilter===Yt||s.minFilter===mt||s.minFilter===yn||s.minFilter===Tn||s.minFilter===Yt)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,ve[s.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,ve[s.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,ve[s.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,ke[s.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,ke[s.minFilter]),s.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,Je[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===Ht||s.minFilter!==Tn&&s.minFilter!==Yt||s.type===Zt&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const w=n.get("EXT_texture_filter_anisotropic");e.texParameterf(S,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function z(S,s){let w=!1;S.__webglInit===void 0&&(S.__webglInit=!0,s.addEventListener("dispose",D));const O=s.source;let V=v.get(O);V===void 0&&(V={},v.set(O,V));const ee=H(s);if(ee!==S.__cacheKey){V[ee]===void 0&&(V[ee]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,w=!0),V[ee].usedTimes++;const ne=V[S.__cacheKey];ne!==void 0&&(V[S.__cacheKey].usedTimes--,ne.usedTimes===0&&N(s)),S.__cacheKey=ee,S.__webglTexture=V[ee].texture}return w}function j(S,s,w){return Math.floor(Math.floor(S/w)/s)}function Q(S,s,w,O){const ee=S.updateRanges;if(ee.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,w,O,s.data);else{ee.sort((Ee,se)=>Ee.start-se.start);let ne=0;for(let Ee=1;Ee<ee.length;Ee++){const se=ee[ne],re=ee[Ee],Te=se.start+se.count,Re=j(re.start,s.width,4),Le=j(se.start,s.width,4);re.start<=Te+1&&Re===Le&&j(re.start+re.count-1,s.width,4)===Re?se.count=Math.max(se.count,re.start+re.count-se.start):(++ne,ee[ne]=re)}ee.length=ne+1;const k=t.getParameter(e.UNPACK_ROW_LENGTH),q=t.getParameter(e.UNPACK_SKIP_PIXELS),ie=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let Ee=0,se=ee.length;Ee<se;Ee++){const re=ee[Ee],Te=Math.floor(re.start/4),Re=Math.ceil(re.count/4),Le=Te%s.width,A=Math.floor(Te/s.width),te=Re,X=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(e.UNPACK_SKIP_ROWS,A),t.texSubImage2D(e.TEXTURE_2D,0,Le,A,te,X,w,O,s.data)}S.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,k),t.pixelStorei(e.UNPACK_SKIP_PIXELS,q),t.pixelStorei(e.UNPACK_SKIP_ROWS,ie)}}function be(S,s,w){let O=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(O=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(O=e.TEXTURE_3D);const V=z(S,s),ee=s.source;t.bindTexture(O,S.__webglTexture,e.TEXTURE0+w);const ne=i.get(ee);if(ee.version!==ne.__version||V===!0){if(t.activeTexture(e.TEXTURE0+w),(typeof ImageBitmap<"u"&&s.image instanceof ImageBitmap)===!1){const X=Qe.getPrimaries(Qe.workingColorSpace),ae=s.colorSpace===cn?null:Qe.getPrimaries(s.colorSpace),ue=s.colorSpace===cn||X===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let q=p(s.image,!1,r.maxTextureSize);q=gt(s,q);const ie=a.convert(s.format,s.colorSpace),Ee=a.convert(s.type);let se=E(s.internalFormat,ie,Ee,s.normalized,s.colorSpace,s.isVideoTexture);Fe(O,s);let re;const Te=s.mipmaps,Re=s.isVideoTexture!==!0,Le=ne.__version===void 0||V===!0,A=ee.dataReady,te=M(s,q);if(s.isDepthTexture)se=b(s.format===ln,s.type),Le&&(Re?t.texStorage2D(e.TEXTURE_2D,1,se,q.width,q.height):t.texImage2D(e.TEXTURE_2D,0,se,q.width,q.height,0,ie,Ee,null));else if(s.isDataTexture)if(Te.length>0){Re&&Le&&t.texStorage2D(e.TEXTURE_2D,te,se,Te[0].width,Te[0].height);for(let X=0,ae=Te.length;X<ae;X++)re=Te[X],Re?A&&t.texSubImage2D(e.TEXTURE_2D,X,0,0,re.width,re.height,ie,Ee,re.data):t.texImage2D(e.TEXTURE_2D,X,se,re.width,re.height,0,ie,Ee,re.data);s.generateMipmaps=!1}else Re?(Le&&t.texStorage2D(e.TEXTURE_2D,te,se,q.width,q.height),A&&Q(s,q,ie,Ee)):t.texImage2D(e.TEXTURE_2D,0,se,q.width,q.height,0,ie,Ee,q.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){Re&&Le&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,se,Te[0].width,Te[0].height,q.depth);for(let X=0,ae=Te.length;X<ae;X++)if(re=Te[X],s.format!==Gt)if(ie!==null)if(Re){if(A)if(s.layerUpdates.size>0){const ue=Er(re.width,re.height,s.format,s.type);for(const Y of s.layerUpdates){const Se=re.data.subarray(Y*ue/re.data.BYTES_PER_ELEMENT,(Y+1)*ue/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,Y,re.width,re.height,1,ie,Se)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,re.width,re.height,q.depth,ie,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,se,re.width,re.height,q.depth,0,re.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?A&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,re.width,re.height,q.depth,ie,Ee,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,X,se,re.width,re.height,q.depth,0,ie,Ee,re.data)}else{Re&&Le&&t.texStorage2D(e.TEXTURE_2D,te,se,Te[0].width,Te[0].height);for(let X=0,ae=Te.length;X<ae;X++)re=Te[X],s.format!==Gt?ie!==null?Re?A&&t.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,re.width,re.height,ie,re.data):t.compressedTexImage2D(e.TEXTURE_2D,X,se,re.width,re.height,0,re.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?A&&t.texSubImage2D(e.TEXTURE_2D,X,0,0,re.width,re.height,ie,Ee,re.data):t.texImage2D(e.TEXTURE_2D,X,se,re.width,re.height,0,ie,Ee,re.data)}else if(s.isDataArrayTexture)if(Re){if(Le&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,se,q.width,q.height,q.depth),A)if(s.layerUpdates.size>0){const X=Er(q.width,q.height,s.format,s.type);for(const ae of s.layerUpdates){const ue=q.data.subarray(ae*X/q.data.BYTES_PER_ELEMENT,(ae+1)*X/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,q.width,q.height,1,ie,Ee,ue)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ie,Ee,q.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,se,q.width,q.height,q.depth,0,ie,Ee,q.data);else if(s.isData3DTexture)Re?(Le&&t.texStorage3D(e.TEXTURE_3D,te,se,q.width,q.height,q.depth),A&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ie,Ee,q.data)):t.texImage3D(e.TEXTURE_3D,0,se,q.width,q.height,q.depth,0,ie,Ee,q.data);else if(s.isFramebufferTexture){if(Le)if(Re)t.texStorage2D(e.TEXTURE_2D,te,se,q.width,q.height);else{let X=q.width,ae=q.height;for(let ue=0;ue<te;ue++)t.texImage2D(e.TEXTURE_2D,ue,se,X,ae,0,ie,Ee,null),X>>=1,ae>>=1}}else if(s.isHTMLTexture){if("texElementImage2D"in e){const X=e.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),q.parentNode!==X){X.appendChild(q),_.add(s),X.onpaint=ae=>{const ue=ae.changedElements;for(const Y of _)ue.includes(Y.image)&&(Y.needsUpdate=!0)},X.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,q);else{const ue=e.RGBA,Y=e.RGBA,Se=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ue,Y,Se,q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&Le){const X=We(Te[0]);t.texStorage2D(e.TEXTURE_2D,te,se,X.width,X.height)}for(let X=0,ae=Te.length;X<ae;X++)re=Te[X],Re?A&&t.texSubImage2D(e.TEXTURE_2D,X,0,0,ie,Ee,re):t.texImage2D(e.TEXTURE_2D,X,se,ie,Ee,re);s.generateMipmaps=!1}else if(Re){if(Le){const X=We(q);t.texStorage2D(e.TEXTURE_2D,te,se,X.width,X.height)}A&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,Ee,q)}else t.texImage2D(e.TEXTURE_2D,0,se,ie,Ee,q);l(s)&&U(O),ne.__version=ee.version,s.onUpdate&&s.onUpdate(s)}S.__version=s.version}function Pe(S,s,w){if(s.image.length!==6)return;const O=z(S,s),V=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+w);const ee=i.get(V);if(V.version!==ee.__version||O===!0){t.activeTexture(e.TEXTURE0+w);const ne=Qe.getPrimaries(Qe.workingColorSpace),k=s.colorSpace===cn?null:Qe.getPrimaries(s.colorSpace),q=s.colorSpace===cn||ne===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const ie=s.isCompressedTexture||s.image[0].isCompressedTexture,Ee=s.image[0]&&s.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!ie&&!Ee?se[Y]=p(s.image[Y],!0,r.maxCubemapSize):se[Y]=Ee?s.image[Y].image:s.image[Y],se[Y]=gt(s,se[Y]);const re=se[0],Te=a.convert(s.format,s.colorSpace),Re=a.convert(s.type),Le=E(s.internalFormat,Te,Re,s.normalized,s.colorSpace),A=s.isVideoTexture!==!0,te=ee.__version===void 0||O===!0,X=V.dataReady;let ae=M(s,re);Fe(e.TEXTURE_CUBE_MAP,s);let ue;if(ie){A&&te&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ae,Le,re.width,re.height);for(let Y=0;Y<6;Y++){ue=se[Y].mipmaps;for(let Se=0;Se<ue.length;Se++){const me=ue[Se];s.format!==Gt?Te!==null?A?X&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,me.width,me.height,Te,me.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,Le,me.width,me.height,0,me.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?X&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,me.width,me.height,Te,Re,me.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,Le,me.width,me.height,0,Te,Re,me.data)}}}else{if(ue=s.mipmaps,A&&te){ue.length>0&&ae++;const Y=We(se[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ae,Le,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Ee){A?X&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,Te,Re,se[Y].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,se[Y].width,se[Y].height,0,Te,Re,se[Y].data);for(let Se=0;Se<ue.length;Se++){const tt=ue[Se].image[Y].image;A?X&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,tt.width,tt.height,Te,Re,tt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,Le,tt.width,tt.height,0,Te,Re,tt.data)}}else{A?X&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,Re,se[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,Te,Re,se[Y]);for(let Se=0;Se<ue.length;Se++){const me=ue[Se];A?X&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,Te,Re,me.image[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,Le,Te,Re,me.image[Y])}}}l(s)&&U(e.TEXTURE_CUBE_MAP),ee.__version=V.version,s.onUpdate&&s.onUpdate(s)}S.__version=s.version}function Ae(S,s,w,O,V,ee){const ne=a.convert(w.format,w.colorSpace),k=a.convert(w.type),q=E(w.internalFormat,ne,k,w.normalized,w.colorSpace),ie=i.get(s),Ee=i.get(w);if(Ee.__renderTarget=s,!ie.__hasExternalTextures){const se=Math.max(1,s.width>>ee),re=Math.max(1,s.height>>ee);V===e.TEXTURE_3D||V===e.TEXTURE_2D_ARRAY?t.texImage3D(V,ee,q,se,re,s.depth,0,ne,k,null):t.texImage2D(V,ee,q,se,re,0,ne,k,null)}t.bindFramebuffer(e.FRAMEBUFFER,S),ct(s)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,O,V,Ee.__webglTexture,0,et(s)):(V===e.TEXTURE_2D||V>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,O,V,Ee.__webglTexture,ee),t.bindFramebuffer(e.FRAMEBUFFER,null)}function it(S,s,w){if(e.bindRenderbuffer(e.RENDERBUFFER,S),s.depthBuffer){const O=s.depthTexture,V=O&&O.isDepthTexture?O.type:null,ee=b(s.stencilBuffer,V),ne=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ct(s)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,et(s),ee,s.width,s.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,et(s),ee,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,ee,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,S)}else{const O=s.textures;for(let V=0;V<O.length;V++){const ee=O[V],ne=a.convert(ee.format,ee.colorSpace),k=a.convert(ee.type),q=E(ee.internalFormat,ne,k,ee.normalized,ee.colorSpace);ct(s)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,et(s),q,s.width,s.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,et(s),q,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,q,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ne(S,s,w){const O=s.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,S),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=i.get(s.depthTexture);if(V.__renderTarget=s,(!V.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),O){if(V.__webglInit===void 0&&(V.__webglInit=!0,s.depthTexture.addEventListener("dispose",D)),V.__webglTexture===void 0){V.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(e.TEXTURE_CUBE_MAP,s.depthTexture);const ie=a.convert(s.depthTexture.format),Ee=a.convert(s.depthTexture.type);let se;s.depthTexture.format===hn?se=e.DEPTH_COMPONENT24:s.depthTexture.format===ln&&(se=e.DEPTH24_STENCIL8);for(let re=0;re<6;re++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,se,s.width,s.height,0,ie,Ee,null)}}else $(s.depthTexture,0);const ee=V.__webglTexture,ne=et(s),k=O?e.TEXTURE_CUBE_MAP_POSITIVE_X+w:e.TEXTURE_2D,q=s.depthTexture.format===ln?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(s.depthTexture.format===hn)ct(s)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,k,ee,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,q,k,ee,0);else if(s.depthTexture.format===ln)ct(s)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,k,ee,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,q,k,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(S){const s=i.get(S),w=S.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==S.depthTexture){const O=S.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),O){const V=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,O.removeEventListener("dispose",V)};O.addEventListener("dispose",V),s.__depthDisposeCallback=V}s.__boundDepthTexture=O}if(S.depthTexture&&!s.__autoAllocateDepthBuffer)if(w)for(let O=0;O<6;O++)Ne(s.__webglFramebuffer[O],S,O);else{const O=S.texture.mipmaps;O&&O.length>0?Ne(s.__webglFramebuffer[0],S,0):Ne(s.__webglFramebuffer,S,0)}else if(w){s.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[O]),s.__webglDepthbuffer[O]===void 0)s.__webglDepthbuffer[O]=e.createRenderbuffer(),it(s.__webglDepthbuffer[O],S,!1);else{const V=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=s.__webglDepthbuffer[O];e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,V,e.RENDERBUFFER,ee)}}else{const O=S.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),it(s.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,V,e.RENDERBUFFER,ee)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(S,s,w){const O=i.get(S);s!==void 0&&Ae(O.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&Xe(S)}function Oe(S){const s=S.texture,w=i.get(S),O=i.get(s);S.addEventListener("dispose",m);const V=S.textures,ee=S.isWebGLCubeRenderTarget===!0,ne=V.length>1;if(ne||(O.__webglTexture===void 0&&(O.__webglTexture=e.createTexture()),O.__version=s.version,o.memory.textures++),ee){w.__webglFramebuffer=[];for(let k=0;k<6;k++)if(s.mipmaps&&s.mipmaps.length>0){w.__webglFramebuffer[k]=[];for(let q=0;q<s.mipmaps.length;q++)w.__webglFramebuffer[k][q]=e.createFramebuffer()}else w.__webglFramebuffer[k]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){w.__webglFramebuffer=[];for(let k=0;k<s.mipmaps.length;k++)w.__webglFramebuffer[k]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(ne)for(let k=0,q=V.length;k<q;k++){const ie=i.get(V[k]);ie.__webglTexture===void 0&&(ie.__webglTexture=e.createTexture(),o.memory.textures++)}if(S.samples>0&&ct(S)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let k=0;k<V.length;k++){const q=V[k];w.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[k]);const ie=a.convert(q.format,q.colorSpace),Ee=a.convert(q.type),se=E(q.internalFormat,ie,Ee,q.normalized,q.colorSpace,S.isXRRenderTarget===!0),re=et(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,se,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,w.__webglColorRenderbuffer[k])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),it(w.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ee){t.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture),Fe(e.TEXTURE_CUBE_MAP,s);for(let k=0;k<6;k++)if(s.mipmaps&&s.mipmaps.length>0)for(let q=0;q<s.mipmaps.length;q++)Ae(w.__webglFramebuffer[k][q],S,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,q);else Ae(w.__webglFramebuffer[k],S,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);l(s)&&U(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let k=0,q=V.length;k<q;k++){const ie=V[k],Ee=i.get(ie);let se=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(se,Ee.__webglTexture),Fe(se,ie),Ae(w.__webglFramebuffer,S,ie,e.COLOR_ATTACHMENT0+k,se,0),l(ie)&&U(se)}t.unbindTexture()}else{let k=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(k=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(k,O.__webglTexture),Fe(k,s),s.mipmaps&&s.mipmaps.length>0)for(let q=0;q<s.mipmaps.length;q++)Ae(w.__webglFramebuffer[q],S,s,e.COLOR_ATTACHMENT0,k,q);else Ae(w.__webglFramebuffer,S,s,e.COLOR_ATTACHMENT0,k,0);l(s)&&U(k),t.unbindTexture()}S.depthBuffer&&Xe(S)}function st(S){const s=S.textures;for(let w=0,O=s.length;w<O;w++){const V=s[w];if(l(V)){const ee=P(S),ne=i.get(V).__webglTexture;t.bindTexture(ee,ne),U(ee),t.unbindTexture()}}}const lt=[],dt=[];function pt(S){if(S.samples>0){if(ct(S)===!1){const s=S.textures,w=S.width,O=S.height;let V=e.COLOR_BUFFER_BIT;const ee=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=i.get(S),k=s.length>1;if(k)for(let ie=0;ie<s.length;ie++)t.bindFramebuffer(e.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ne.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);const q=S.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ie=0;ie<s.length;ie++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(V|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(V|=e.STENCIL_BUFFER_BIT)),k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ne.__webglColorRenderbuffer[ie]);const Ee=i.get(s[ie]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ee,0)}e.blitFramebuffer(0,0,w,O,0,0,w,O,V,e.NEAREST),f===!0&&(lt.length=0,dt.length=0,lt.push(e.COLOR_ATTACHMENT0+ie),S.depthBuffer&&S.resolveDepthBuffer===!1&&(lt.push(ee),dt.push(ee),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let ie=0;ie<s.length;ie++){t.bindFramebuffer(e.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,ne.__webglColorRenderbuffer[ie]);const Ee=i.get(s[ie]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ne.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,Ee,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&f){const s=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function et(S){return Math.min(r.maxSamples,S.samples)}function ct(S){const s=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function R(S){const s=o.render.frame;g.get(S)!==s&&(g.set(S,s),S.update())}function gt(S,s){const w=S.colorSpace,O=S.format,V=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||w!==Rt&&w!==cn&&(Qe.getTransfer(w)===$e?(O!==Gt||V!==Dt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",w)),s}function We(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(d.width=S.naturalWidth||S.width,d.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(d.width=S.displayWidth,d.height=S.displayHeight):(d.width=S.width,d.height=S.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=J,this.getTextureUnits=Z,this.setTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=oe,this.setTexture3D=_e,this.setTextureCube=he,this.rebindTextures=Ge,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ed(e,n){function t(i,r=cn){let a;const o=Qe.getTransfer(r);if(i===Dt)return e.UNSIGNED_BYTE;if(i===oa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===sa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===wo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Uo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Do)return e.BYTE;if(i===Io)return e.SHORT;if(i===kn)return e.UNSIGNED_SHORT;if(i===fa)return e.INT;if(i===rn)return e.UNSIGNED_INT;if(i===Zt)return e.FLOAT;if(i===jt)return e.HALF_FLOAT;if(i===No)return e.ALPHA;if(i===yo)return e.RGB;if(i===Gt)return e.RGBA;if(i===hn)return e.DEPTH_COMPONENT;if(i===ln)return e.DEPTH_STENCIL;if(i===Fo)return e.RED;if(i===aa)return e.RED_INTEGER;if(i===mn)return e.RG;if(i===ra)return e.RG_INTEGER;if(i===ia)return e.RGBA_INTEGER;if(i===Zn||i===$n||i===jn||i===Qn)if(o===$e)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Zn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$n)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Zn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$n)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gi||i===Hi||i===Vi||i===ki)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Gi)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vi)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ki)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wi||i===zi||i===Xi||i===Ki||i===qi||i===ui||i===Yi)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Wi||i===zi)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Xi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ki)return a.COMPRESSED_R11_EAC;if(i===qi)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ui)return a.COMPRESSED_RG11_EAC;if(i===Yi)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zi||i===$i||i===ji||i===Qi||i===Ji||i===er||i===tr||i===nr||i===ir||i===rr||i===ar||i===or||i===sr||i===cr)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Zi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$i)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ji)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ji)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===er)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ir)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ar)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===or)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lr||i===fr||i===ur)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===lr)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ur)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dr||i===pr||i===di||i===hr)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===dr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===pr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===di)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const xd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Md=`
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

}`;class Td{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new ca(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new kt({vertexShader:xd,fragmentShader:Md,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new la(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ad extends $a{constructor(n,t){super();const i=this;let r=null,a=1,o=null,c="local-floor",f=1,d=null,g=null,_=null,h=null,v=null,T=null;const I=typeof XRWebGLBinding<"u",p=new Td,l={},U=t.getContextAttributes();let P=null,E=null;const b=[],M=[],D=new _t;let m=null;const x=new un;x.viewport=new Et;const N=new un;N.viewport=new Et;const L=[x,N],G=new ja;let J=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=b[z];return j===void 0&&(j=new Yn,b[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=b[z];return j===void 0&&(j=new Yn,b[z]=j),j.getGripSpace()},this.getHand=function(z){let j=b[z];return j===void 0&&(j=new Yn,b[z]=j),j.getHandSpace()};function W(z){const j=M.indexOf(z.inputSource);if(j===-1)return;const Q=b[j];Q!==void 0&&(Q.update(z.inputSource,z.frame,d||o),Q.dispatchEvent({type:z.type,data:z.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",H);for(let z=0;z<b.length;z++){const j=M[z];j!==null&&(M[z]=null,b[z].disconnect(j))}J=null,Z=null,p.reset();for(const z in l)delete l[z];n.setRenderTarget(P),v=null,h=null,_=null,r=null,E=null,Fe.stop(),i.isPresenting=!1,n.setPixelRatio(m),n.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){c=z,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(z){d=z},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return _===null&&I&&(_=new XRWebGLBinding(r,t)),_},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(P=n.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",H),U.xrCompatible!==!0&&await t.makeXRCompatible(),m=n.getPixelRatio(),n.getSize(D),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,be=null,Pe=null;U.depth&&(Pe=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=U.stencil?ln:hn,be=U.stencil?Pn:rn);const Ae={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};_=this.getBinding(),h=_.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),n.setPixelRatio(1),n.setSize(h.textureWidth,h.textureHeight,!1),E=new yt(h.textureWidth,h.textureHeight,{format:Gt,type:Dt,depthTexture:new Cn(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:U.stencil,colorSpace:n.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Q={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new yt(v.framebufferWidth,v.framebufferHeight,{format:Gt,type:Dt,colorSpace:n.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(f),d=null,o=await r.requestReferenceSpace(c),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(z){for(let j=0;j<z.removed.length;j++){const Q=z.removed[j],be=M.indexOf(Q);be>=0&&(M[be]=null,b[be].disconnect(Q))}for(let j=0;j<z.added.length;j++){const Q=z.added[j];let be=M.indexOf(Q);if(be===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=M.length){M.push(Q),be=Ae;break}else if(M[Ae]===null){M[Ae]=Q,be=Ae;break}if(be===-1)break}const Pe=b[be];Pe&&Pe.connect(Q)}}const $=new Ce,oe=new Ce;function _e(z,j,Q){$.setFromMatrixPosition(j.matrixWorld),oe.setFromMatrixPosition(Q.matrixWorld);const be=$.distanceTo(oe),Pe=j.projectionMatrix.elements,Ae=Q.projectionMatrix.elements,it=Pe[14]/(Pe[10]-1),Ne=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],Ge=(Pe[9]-1)/Pe[5],Oe=(Pe[8]-1)/Pe[0],st=(Ae[8]+1)/Ae[0],lt=it*Oe,dt=it*st,pt=be/(-Oe+st),et=pt*-Oe;if(j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(et),z.translateZ(pt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Pe[10]===-1)z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ct=it+pt,R=Ne+pt,gt=lt-et,We=dt+(be-et),S=Xe*Ne/R*ct,s=Ge*Ne/R*ct;z.projectionMatrix.makePerspective(gt,We,S,s,ct,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function he(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let j=z.near,Q=z.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(Q=p.depthFar)),G.near=N.near=x.near=j,G.far=N.far=x.far=Q,(J!==G.near||Z!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),J=G.near,Z=G.far),G.layers.mask=z.layers.mask|6,x.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const be=z.parent,Pe=G.cameras;he(G,be);for(let Ae=0;Ae<Pe.length;Ae++)he(Pe[Ae],be);Pe.length===2?_e(G,x,N):G.projectionMatrix.copy(x.projectionMatrix),ve(z,G,be)};function ve(z,j,Q){Q===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(Q.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Qa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&v===null))return f},this.setFoveation=function(z){f=z,h!==null&&(h.fixedFoveation=z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(z){return l[z]};let ke=null;function Je(z,j){if(g=j.getViewerPose(d||o),T=j,g!==null){const Q=g.views;v!==null&&(n.setRenderTargetFramebuffer(E,v.framebuffer),n.setRenderTarget(E));let be=!1;Q.length!==G.cameras.length&&(G.cameras.length=0,be=!0);for(let Ne=0;Ne<Q.length;Ne++){const Xe=Q[Ne];let Ge=null;if(v!==null)Ge=v.getViewport(Xe);else{const st=_.getViewSubImage(h,Xe);Ge=st.viewport,Ne===0&&(n.setRenderTargetTextures(E,st.colorTexture,st.depthStencilTexture),n.setRenderTarget(E))}let Oe=L[Ne];Oe===void 0&&(Oe=new un,Oe.layers.enable(Ne),Oe.viewport=new Et,L[Ne]=Oe),Oe.matrix.fromArray(Xe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Xe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ne===0&&(G.matrix.copy(Oe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),be===!0&&G.cameras.push(Oe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&I){_=i.getBinding();const Ne=_.getDepthInformation(Q[0]);Ne&&Ne.isValid&&Ne.texture&&p.init(Ne,r.renderState)}if(Pe&&Pe.includes("camera-access")&&I){n.state.unbindTexture(),_=i.getBinding();for(let Ne=0;Ne<Q.length;Ne++){const Xe=Q[Ne].camera;if(Xe){let Ge=l[Xe];Ge||(Ge=new ca,l[Xe]=Ge);const Oe=_.getCameraImage(Xe);Ge.sourceTexture=Oe}}}}for(let Q=0;Q<b.length;Q++){const be=M[Q],Pe=b[Q];be!==null&&Pe!==void 0&&Pe.update(be,j,d||o)}ke&&ke(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),T=null}const Fe=new Pa;Fe.setAnimationLoop(Je),this.setAnimationLoop=function(z){ke=z},this.dispose=function(){}}}const Rd=new Ft,ya=new ye;ya.set(-1,0,0,0,1,0,0,0,1);function bd(e,n){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,da(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,U,P,E){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?a(p,l):l.isMeshLambertMaterial?(a(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(a(p,l),_(p,l)):l.isMeshPhongMaterial?(a(p,l),g(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(a(p,l),h(p,l),l.isMeshPhysicalMaterial&&v(p,l,E)):l.isMeshMatcapMaterial?(a(p,l),T(p,l)):l.isMeshDepthMaterial?a(p,l):l.isMeshDistanceMaterial?(a(p,l),I(p,l)):l.isMeshNormalMaterial?a(p,l):l.isLineBasicMaterial?(o(p,l),l.isLineDashedMaterial&&c(p,l)):l.isPointsMaterial?f(p,l,U,P):l.isSpriteMaterial?d(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===Mt&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===Mt&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const U=n.get(l),P=U.envMap,E=U.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(E)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ya),p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function c(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function f(p,l,U,P){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*U,p.scale.value=P*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function d(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function g(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function _(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function h(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function v(p,l,U){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Mt&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=U.texture,p.transmissionSamplerSize.value.set(U.width,U.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function T(p,l){l.matcap&&(p.matcap.value=l.matcap)}function I(p,l){const U=n.get(l).light;p.referencePosition.value.setFromMatrixPosition(U.matrixWorld),p.nearDistance.value=U.shadow.camera.near,p.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cd(e,n,t,i){let r={},a={},o=[];const c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function f(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function d(E,b){let M=r[E.id];M===void 0&&(p(E),M=g(E),r[E.id]=M,E.addEventListener("dispose",U));const D=b.program;i.updateUBOMapping(E,D);const m=n.render.frame;a[E.id]!==m&&(h(E),a[E.id]=m)}function g(E){const b=_();E.__bindingPointIndex=b;const M=e.createBuffer(),D=E.__size,m=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,D,m),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,M),M}function _(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const b=r[E.id],M=E.uniforms,D=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let m=0,x=M.length;m<x;m++){const N=M[m];if(Array.isArray(N))for(let L=0,G=N.length;L<G;L++)v(N[L],m,L,D);else v(N,m,0,D)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(E,b,M,D){if(I(E,b,M,D)===!0){const m=E.__offset,x=E.value;if(Array.isArray(x)){let N=0;for(let L=0;L<x.length;L++){const G=x[L],J=l(G);T(G,E.__data,N),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(x,E.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,m,E.__data)}}function T(E,b,M){typeof E=="number"||typeof E=="boolean"?b[0]=E:E.isMatrix3?(b[0]=E.elements[0],b[1]=E.elements[1],b[2]=E.elements[2],b[3]=0,b[4]=E.elements[3],b[5]=E.elements[4],b[6]=E.elements[5],b[7]=0,b[8]=E.elements[6],b[9]=E.elements[7],b[10]=E.elements[8],b[11]=0):ArrayBuffer.isView(E)?b.set(new E.constructor(E.buffer,E.byteOffset,b.length)):E.toArray(b,M)}function I(E,b,M,D){const m=E.value,x=b+"_"+M;if(D[x]===void 0)return typeof m=="number"||typeof m=="boolean"?D[x]=m:ArrayBuffer.isView(m)?D[x]=m.slice():D[x]=m.clone(),!0;{const N=D[x];if(typeof m=="number"||typeof m=="boolean"){if(N!==m)return D[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(N.equals(m)===!1)return N.copy(m),!0}}return!1}function p(E){const b=E.uniforms;let M=0;const D=16;for(let x=0,N=b.length;x<N;x++){const L=Array.isArray(b[x])?b[x]:[b[x]];for(let G=0,J=L.length;G<J;G++){const Z=L[G],W=Array.isArray(Z.value)?Z.value:[Z.value];for(let K=0,H=W.length;K<H;K++){const $=W[K],oe=l($),_e=M%D,he=_e%oe.boundary,ve=_e+he;M+=he,ve!==0&&D-ve<oe.storage&&(M+=D-ve),Z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=oe.storage}}}const m=M%D;return m>0&&(M+=D-m),E.__size=M,E.__cache={},this}function l(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(b.boundary=16,b.storage=E.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",E),b}function U(E){const b=E.target;b.removeEventListener("dispose",U);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),e.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function P(){for(const E in r)e.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:f,update:d,dispose:P}}const Pd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Lt=null;function Ld(){return Lt===null&&(Lt=new Ja(Pd,16,16,mn,jt),Lt.name="DFG_LUT",Lt.minFilter=mt,Lt.magFilter=mt,Lt.wrapS=Hn,Lt.wrapT=Hn,Lt.generateMipmaps=!1,Lt.needsUpdate=!0),Lt}class wd{constructor(n={}){const{canvas:t=Ka(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:h=!1,outputBufferType:v=Dt}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=o;const I=v,p=new Set([ia,ra,aa]),l=new Set([Dt,rn,kn,Pn,oa,sa]),U=new Uint32Array(4),P=new Int32Array(4),E=new Ce;let b=null,M=null;const D=[],m=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,G=null,J=null,Z=null,W=null;this._outputColorSpace=nn;let K=0,H=0,$=null,oe=-1,_e=null;const he=new Et,ve=new Et;let ke=null;const Je=new He(0);let Fe=0,z=t.width,j=t.height,Q=1,be=null,Pe=null;const Ae=new Et(0,0,z,j),it=new Et(0,0,z,j);let Ne=!1;const Xe=new ea;let Ge=!1,Oe=!1;const st=new Ft,lt=new Ce,dt=new Et,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function ct(){return $===null?Q:1}let R=i;function gt(u,C){return t.getContext(u,C)}try{const u={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",bt,!1),R===null){const C="webgl2";if(R=gt(C,u),R===null)throw gt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(u){throw je("WebGLRenderer: "+u.message),u}let We,S,s,w,O,V,ee,ne,k,q,ie,Ee,se,re,Te,Re,Le,A,te,X,ae,ue,Y;function Se(){We=new Lf(R),We.init(),ae=new Ed(R,We),S=new xf(R,We,n,ae),s=new vd(R,We),S.reversedDepthBuffer&&h&&s.buffers.depth.setReversed(!0),J=R.createFramebuffer(),Z=R.createFramebuffer(),W=R.createFramebuffer(),w=new Df(R),O=new rd,V=new Sd(R,We,s,O,S,ae,w),ee=new Pf(N),ne=new ys(R),ue=new Sf(R,ne),k=new wf(R,ne,w,ue),q=new Nf(R,k,ne,ue,w),A=new If(R,S,V),Te=new Mf(O),ie=new id(N,ee,We,S,ue,Te),Ee=new bd(N,O),se=new od,re=new dd(We),Le=new vf(N,ee,s,q,T,f),Re=new gd(N,q,S),Y=new Cd(R,w,S,s),te=new Ef(R,We,w),X=new Uf(R,We,w),w.programs=ie.programs,N.capabilities=S,N.extensions=We,N.properties=O,N.renderLists=se,N.shadowMap=Re,N.state=s,N.info=w}Se(),I!==Dt&&(x=new Ff(I,t.width,t.height,c,r,a));const me=new Ad(N,R);this.xr=me,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const u=We.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=We.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(u){u!==void 0&&(Q=u,this.setSize(z,j,!1))},this.getSize=function(u){return u.set(z,j)},this.setSize=function(u,C,B=!0){if(me.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}z=u,j=C,t.width=Math.floor(u*Q),t.height=Math.floor(C*Q),B===!0&&(t.style.width=u+"px",t.style.height=C+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,u,C)},this.getDrawingBufferSize=function(u){return u.set(z*Q,j*Q).floor()},this.setDrawingBufferSize=function(u,C,B){z=u,j=C,Q=B,t.width=Math.floor(u*B),t.height=Math.floor(C*B),this.setViewport(0,0,u,C)},this.setEffects=function(u){if(I===Dt){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(u){for(let C=0;C<u.length;C++)if(u[C].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(u||[])},this.getCurrentViewport=function(u){return u.copy(he)},this.getViewport=function(u){return u.copy(Ae)},this.setViewport=function(u,C,B,y){u.isVector4?Ae.set(u.x,u.y,u.z,u.w):Ae.set(u,C,B,y),s.viewport(he.copy(Ae).multiplyScalar(Q).round())},this.getScissor=function(u){return u.copy(it)},this.setScissor=function(u,C,B,y){u.isVector4?it.set(u.x,u.y,u.z,u.w):it.set(u,C,B,y),s.scissor(ve.copy(it).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(u){s.setScissorTest(Ne=u)},this.setOpaqueSort=function(u){be=u},this.setTransparentSort=function(u){Pe=u},this.getClearColor=function(u){return u.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(u=!0,C=!0,B=!0){let y=0;if(u){let F=!1;if($!==null){const fe=$.texture.format;F=p.has(fe)}if(F){const fe=$.texture.type,pe=l.has(fe),le=Le.getClearColor(),ge=Le.getClearAlpha(),xe=le.r,we=le.g,De=le.b;pe?(U[0]=xe,U[1]=we,U[2]=De,U[3]=ge,R.clearBufferuiv(R.COLOR,0,U)):(P[0]=xe,P[1]=we,P[2]=De,P[3]=ge,R.clearBufferiv(R.COLOR,0,P))}else y|=R.COLOR_BUFFER_BIT}C&&(y|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y!==0&&R.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),G=u},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Le.dispose(),se.dispose(),re.dispose(),O.dispose(),ee.dispose(),q.dispose(),ue.dispose(),Y.dispose(),ie.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ci),me.removeEventListener("sessionend",Pi),Qt.stop()};function tt(u){u.preventDefault(),yi("WebGLRenderer: Context Lost."),L=!0}function Ye(){yi("WebGLRenderer: Context Restored."),L=!1;const u=w.autoReset,C=Re.enabled,B=Re.autoUpdate,y=Re.needsUpdate,F=Re.type;Se(),w.autoReset=u,Re.enabled=C,Re.autoUpdate=B,Re.needsUpdate=y,Re.type=F}function bt(u){je("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Ct(u){const C=u.target;C.removeEventListener("dispose",Ct),Ga(C)}function Ga(u){Ha(u),O.remove(u)}function Ha(u){const C=O.get(u).programs;C!==void 0&&(C.forEach(function(B){ie.releaseProgram(B)}),u.isShaderMaterial&&ie.releaseShaderCache(u))}this.renderBufferDirect=function(u,C,B,y,F,fe){C===null&&(C=pt);const pe=F.isMesh&&F.matrixWorld.determinantAffine()<0,le=Wa(u,C,B,y,F);s.setMaterial(y,pe);let ge=B.index,xe=1;if(y.wireframe===!0){if(ge=k.getWireframeAttribute(B),ge===void 0)return;xe=2}const we=B.drawRange,De=B.attributes.position;let Me=we.start*xe,ze=(we.start+we.count)*xe;fe!==null&&(Me=Math.max(Me,fe.start*xe),ze=Math.min(ze,(fe.start+fe.count)*xe)),ge!==null?(Me=Math.max(Me,0),ze=Math.min(ze,ge.count)):De!=null&&(Me=Math.max(Me,0),ze=Math.min(ze,De.count));const rt=ze-Me;if(rt<0||rt===1/0)return;ue.setup(F,y,le,B,ge);let nt,Ke=te;if(ge!==null&&(nt=ne.get(ge),Ke=X,Ke.setIndex(nt)),F.isMesh)y.wireframe===!0?(s.setLineWidth(y.wireframeLinewidth*ct()),Ke.setMode(R.LINES)):Ke.setMode(R.TRIANGLES);else if(F.isLine){let ht=y.linewidth;ht===void 0&&(ht=1),s.setLineWidth(ht*ct()),F.isLineSegments?Ke.setMode(R.LINES):F.isLineLoop?Ke.setMode(R.LINE_LOOP):Ke.setMode(R.LINE_STRIP)}else F.isPoints?Ke.setMode(R.POINTS):F.isSprite&&Ke.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ht=F._multiDrawStarts,de=F._multiDrawCounts,xt=F._multiDrawCount,Be=ge?ne.get(ge).bytesPerElement:1,Tt=O.get(y).currentProgram.getUniforms();for(let Pt=0;Pt<xt;Pt++)Tt.setValue(R,"_gl_DrawID",Pt),Ke.render(ht[Pt]/Be,de[Pt])}else if(F.isInstancedMesh)Ke.renderInstances(Me,rt,F.count);else if(B.isInstancedBufferGeometry){const ht=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,de=Math.min(B.instanceCount,ht);Ke.renderInstances(Me,rt,de)}else Ke.render(Me,rt)};function bi(u,C,B){u.transparent===!0&&u.side===It&&u.forceSinglePass===!1?(u.side=Mt,u.needsUpdate=!0,Dn(u,C,B),u.side=pn,u.needsUpdate=!0,Dn(u,C,B),u.side=It):Dn(u,C,B)}this.compile=function(u,C,B=null){B===null&&(B=u),M=re.get(B),M.init(C),m.push(M),B.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(M.pushLight(F),F.castShadow&&M.pushShadow(F))}),u!==B&&u.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(M.pushLight(F),F.castShadow&&M.pushShadow(F))}),M.setupLights();const y=new Set;return u.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const fe=F.material;if(fe)if(Array.isArray(fe))for(let pe=0;pe<fe.length;pe++){const le=fe[pe];bi(le,B,F),y.add(le)}else bi(fe,B,F),y.add(fe)}),M=m.pop(),y},this.compileAsync=function(u,C,B=null){const y=this.compile(u,C,B);return new Promise(F=>{function fe(){if(y.forEach(function(pe){O.get(pe).currentProgram.isReady()&&y.delete(pe)}),y.size===0){F(u);return}setTimeout(fe,10)}We.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Kn=null;function Va(u){Kn&&Kn(u)}function Ci(){Qt.stop()}function Pi(){Qt.start()}const Qt=new Pa;Qt.setAnimationLoop(Va),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(u){Kn=u,me.setAnimationLoop(u),u===null?Qt.stop():Qt.start()},me.addEventListener("sessionstart",Ci),me.addEventListener("sessionend",Pi),this.render=function(u,C){if(C!==void 0&&C.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;G!==null&&G.renderStart(u,C);const B=me.enabled===!0&&me.isPresenting===!0,y=x!==null&&($===null||B)&&x.begin(N,$);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(C),C=me.getCamera()),u.isScene===!0&&u.onBeforeRender(N,u,C,$),M=re.get(u,m.length),M.init(C),M.state.textureUnits=V.getTextureUnits(),m.push(M),st.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Xe.setFromProjectionMatrix(st,Fi,C.reversedDepth),Oe=this.localClippingEnabled,Ge=Te.init(this.clippingPlanes,Oe),b=se.get(u,D.length),b.init(),D.push(b),me.enabled===!0&&me.isPresenting===!0){const pe=N.xr.getDepthSensingMesh();pe!==null&&qn(pe,C,-1/0,N.sortObjects)}qn(u,C,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(be,Pe,C.reversedDepth),et=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,et&&Le.addToRenderList(b,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&Te.beginShadows();const F=M.state.shadowsArray;if(Re.render(F,u,C),Ge===!0&&Te.endShadows(),(y&&x.hasRenderPass())===!1){const pe=b.opaque,le=b.transmissive;if(M.setupLights(),C.isArrayCamera){const ge=C.cameras;if(le.length>0)for(let xe=0,we=ge.length;xe<we;xe++){const De=ge[xe];wi(pe,le,u,De)}et&&Le.render(u);for(let xe=0,we=ge.length;xe<we;xe++){const De=ge[xe];Li(b,u,De,De.viewport)}}else le.length>0&&wi(pe,le,u,C),et&&Le.render(u),Li(b,u,C)}$!==null&&H===0&&(V.updateMultisampleRenderTarget($),V.updateRenderTargetMipmap($)),y&&x.end(N),u.isScene===!0&&u.onAfterRender(N,u,C),ue.resetDefaultState(),oe=-1,_e=null,m.pop(),m.length>0?(M=m[m.length-1],V.setTextureUnits(M.state.textureUnits),Ge===!0&&Te.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,D.pop(),D.length>0?b=D[D.length-1]:b=null,G!==null&&G.renderEnd()};function qn(u,C,B,y){if(u.visible===!1)return;if(u.layers.test(C.layers)){if(u.isGroup)B=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(C);else if(u.isLightProbeGrid)M.pushLightProbeGrid(u);else if(u.isLight)M.pushLight(u),u.castShadow&&M.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||Xe.intersectsSprite(u)){y&&dt.setFromMatrixPosition(u.matrixWorld).applyMatrix4(st);const pe=q.update(u),le=u.material;le.visible&&b.push(u,pe,le,B,dt.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||Xe.intersectsObject(u))){const pe=q.update(u),le=u.material;if(y&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),dt.copy(u.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),dt.copy(pe.boundingSphere.center)),dt.applyMatrix4(u.matrixWorld).applyMatrix4(st)),Array.isArray(le)){const ge=pe.groups;for(let xe=0,we=ge.length;xe<we;xe++){const De=ge[xe],Me=le[De.materialIndex];Me&&Me.visible&&b.push(u,pe,Me,B,dt.z,De)}}else le.visible&&b.push(u,pe,le,B,dt.z,null)}}const fe=u.children;for(let pe=0,le=fe.length;pe<le;pe++)qn(fe[pe],C,B,y)}function Li(u,C,B,y){const{opaque:F,transmissive:fe,transparent:pe}=u;M.setupLightsView(B),Ge===!0&&Te.setGlobalState(N.clippingPlanes,B),y&&s.viewport(he.copy(y)),F.length>0&&Un(F,C,B),fe.length>0&&Un(fe,C,B),pe.length>0&&Un(pe,C,B),s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),s.setPolygonOffset(!1)}function wi(u,C,B,y){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[y.id]===void 0){const Me=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[y.id]=new yt(1,1,{generateMipmaps:!0,type:Me?jt:Dt,minFilter:Yt,samples:Math.max(4,S.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const fe=M.state.transmissionRenderTarget[y.id],pe=y.viewport||he;fe.setSize(pe.z*N.transmissionResolutionScale,pe.w*N.transmissionResolutionScale);const le=N.getRenderTarget(),ge=N.getActiveCubeFace(),xe=N.getActiveMipmapLevel();N.setRenderTarget(fe),N.getClearColor(Je),Fe=N.getClearAlpha(),Fe<1&&N.setClearColor(16777215,.5),N.clear(),et&&Le.render(B);const we=N.toneMapping;N.toneMapping=Nt;const De=y.viewport;if(y.viewport!==void 0&&(y.viewport=void 0),M.setupLightsView(y),Ge===!0&&Te.setGlobalState(N.clippingPlanes,y),Un(u,B,y),V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe),We.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let ze=0,rt=C.length;ze<rt;ze++){const nt=C[ze],{object:Ke,geometry:ht,material:de,group:xt}=nt;if(de.side===It&&Ke.layers.test(y.layers)){const Be=de.side;de.side=Mt,de.needsUpdate=!0,Ui(Ke,B,y,ht,de,xt),de.side=Be,de.needsUpdate=!0,Me=!0}}Me===!0&&(V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe))}N.setRenderTarget(le,ge,xe),N.setClearColor(Je,Fe),De!==void 0&&(y.viewport=De),N.toneMapping=we}function Un(u,C,B){const y=C.isScene===!0?C.overrideMaterial:null;for(let F=0,fe=u.length;F<fe;F++){const pe=u[F],{object:le,geometry:ge,group:xe}=pe;let we=pe.material;we.allowOverride===!0&&y!==null&&(we=y),le.layers.test(B.layers)&&Ui(le,C,B,ge,we,xe)}}function Ui(u,C,B,y,F,fe){u.onBeforeRender(N,C,B,y,F,fe),u.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),F.onBeforeRender(N,C,B,y,u,fe),F.transparent===!0&&F.side===It&&F.forceSinglePass===!1?(F.side=Mt,F.needsUpdate=!0,N.renderBufferDirect(B,C,y,F,u,fe),F.side=pn,F.needsUpdate=!0,N.renderBufferDirect(B,C,y,F,u,fe),F.side=It):N.renderBufferDirect(B,C,y,F,u,fe),u.onAfterRender(N,C,B,y,F,fe)}function Dn(u,C,B){C.isScene!==!0&&(C=pt);const y=O.get(u),F=M.state.lights,fe=M.state.shadowsArray,pe=F.state.version,le=ie.getParameters(u,F.state,fe,C,B,M.state.lightProbeGridArray),ge=ie.getProgramCacheKey(le);let xe=y.programs;y.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?C.environment:null,y.fog=C.fog;const we=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;y.envMap=ee.get(u.envMap||y.environment,we),y.envMapRotation=y.environment!==null&&u.envMap===null?C.environmentRotation:u.envMapRotation,xe===void 0&&(u.addEventListener("dispose",Ct),xe=new Map,y.programs=xe);let De=xe.get(ge);if(De!==void 0){if(y.currentProgram===De&&y.lightsStateVersion===pe)return Ii(u,le),De}else le.uniforms=ie.getUniforms(u),G!==null&&u.isNodeMaterial&&G.build(u,B,le),u.onBeforeCompile(le,N),De=ie.acquireProgram(le,ge),xe.set(ge,De),y.uniforms=le.uniforms;const Me=y.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(Me.clippingPlanes=Te.uniform),Ii(u,le),y.needsLights=Xa(u),y.lightsStateVersion=pe,y.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),y.lightProbeGrid=M.state.lightProbeGridArray.length>0,y.currentProgram=De,y.uniformsList=null,De}function Di(u){if(u.uniformsList===null){const C=u.currentProgram.getUniforms();u.uniformsList=Gn.seqWithValue(C.seq,u.uniforms)}return u.uniformsList}function Ii(u,C){const B=O.get(u);B.outputColorSpace=C.outputColorSpace,B.batching=C.batching,B.batchingColor=C.batchingColor,B.instancing=C.instancing,B.instancingColor=C.instancingColor,B.instancingMorph=C.instancingMorph,B.skinning=C.skinning,B.morphTargets=C.morphTargets,B.morphNormals=C.morphNormals,B.morphColors=C.morphColors,B.morphTargetsCount=C.morphTargetsCount,B.numClippingPlanes=C.numClippingPlanes,B.numIntersection=C.numClipIntersection,B.vertexAlphas=C.vertexAlphas,B.vertexTangents=C.vertexTangents,B.toneMapping=C.toneMapping}function ka(u,C){if(u.length===0)return null;if(u.length===1)return u[0].texture!==null?u[0]:null;E.setFromMatrixPosition(C.matrixWorld);for(let B=0,y=u.length;B<y;B++){const F=u[B];if(F.texture!==null&&F.boundingBox.containsPoint(E))return F}return null}function Wa(u,C,B,y,F){C.isScene!==!0&&(C=pt),V.resetTextureUnits();const fe=C.fog,pe=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,le=$===null?N.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Qe.workingColorSpace,ge=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,xe=ee.get(y.envMap||pe,ge),we=y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),Me=!!B.morphAttributes.position,ze=!!B.morphAttributes.normal,rt=!!B.morphAttributes.color;let nt=Nt;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(nt=N.toneMapping);const Ke=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ht=Ke!==void 0?Ke.length:0,de=O.get(y),xt=M.state.lights;if(Ge===!0&&(Oe===!0||u!==_e)){const Ze=u===_e&&y.id===oe;Te.setState(y,u,Ze)}let Be=!1;y.version===de.__version?(de.needsLights&&de.lightsStateVersion!==xt.state.version||de.outputColorSpace!==le||F.isBatchedMesh&&de.batching===!1||!F.isBatchedMesh&&de.batching===!0||F.isBatchedMesh&&de.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&de.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&de.instancing===!1||!F.isInstancedMesh&&de.instancing===!0||F.isSkinnedMesh&&de.skinning===!1||!F.isSkinnedMesh&&de.skinning===!0||F.isInstancedMesh&&de.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&de.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&de.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&de.instancingMorph===!1&&F.morphTexture!==null||de.envMap!==xe||y.fog===!0&&de.fog!==fe||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Te.numPlanes||de.numIntersection!==Te.numIntersection)||de.vertexAlphas!==we||de.vertexTangents!==De||de.morphTargets!==Me||de.morphNormals!==ze||de.morphColors!==rt||de.toneMapping!==nt||de.morphTargetsCount!==ht||!!de.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,de.__version=y.version);let Tt=de.currentProgram;Be===!0&&(Tt=Dn(y,C,F),G&&y.isNodeMaterial&&G.onUpdateProgram(y,Tt,de));let Pt=!1,Wt=!1,an=!1;const qe=Tt.getUniforms(),at=de.uniforms;if(s.useProgram(Tt.program)&&(Pt=!0,Wt=!0,an=!0),y.id!==oe&&(oe=y.id,Wt=!0),de.needsLights){const Ze=ka(M.state.lightProbeGridArray,F);de.lightProbeGrid!==Ze&&(de.lightProbeGrid=Ze,Wt=!0)}if(Pt||_e!==u){s.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),qe.setValue(R,"projectionMatrix",u.projectionMatrix),qe.setValue(R,"viewMatrix",u.matrixWorldInverse);const Xt=qe.map.cameraPosition;Xt!==void 0&&Xt.setValue(R,lt.setFromMatrixPosition(u.matrixWorld)),S.logarithmicDepthBuffer&&qe.setValue(R,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)&&qe.setValue(R,"isOrthographic",u.isOrthographicCamera===!0),_e!==u&&(_e=u,Wt=!0,an=!0)}if(de.needsLights&&(xt.state.directionalShadowMap.length>0&&qe.setValue(R,"directionalShadowMap",xt.state.directionalShadowMap,V),xt.state.spotShadowMap.length>0&&qe.setValue(R,"spotShadowMap",xt.state.spotShadowMap,V),xt.state.pointShadowMap.length>0&&qe.setValue(R,"pointShadowMap",xt.state.pointShadowMap,V)),F.isSkinnedMesh){qe.setOptional(R,F,"bindMatrix"),qe.setOptional(R,F,"bindMatrixInverse");const Ze=F.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),qe.setValue(R,"boneTexture",Ze.boneTexture,V))}F.isBatchedMesh&&(qe.setOptional(R,F,"batchingTexture"),qe.setValue(R,"batchingTexture",F._matricesTexture,V),qe.setOptional(R,F,"batchingIdTexture"),qe.setValue(R,"batchingIdTexture",F._indirectTexture,V),qe.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&qe.setValue(R,"batchingColorTexture",F._colorsTexture,V));const zt=B.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&A.update(F,B,Tt),(Wt||de.receiveShadow!==F.receiveShadow)&&(de.receiveShadow=F.receiveShadow,qe.setValue(R,"receiveShadow",F.receiveShadow)),(y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial)&&y.envMap===null&&C.environment!==null&&(at.envMapIntensity.value=C.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=Ld()),Wt){if(qe.setValue(R,"toneMappingExposure",N.toneMappingExposure),de.needsLights&&za(at,an),fe&&y.fog===!0&&Ee.refreshFogUniforms(at,fe),Ee.refreshMaterialUniforms(at,y,Q,j,M.state.transmissionRenderTarget[u.id]),de.needsLights&&de.lightProbeGrid){const Ze=de.lightProbeGrid;at.probesSH.value=Ze.texture,at.probesMin.value.copy(Ze.boundingBox.min),at.probesMax.value.copy(Ze.boundingBox.max),at.probesResolution.value.copy(Ze.resolution)}Gn.upload(R,Di(de),at,V)}if(y.isShaderMaterial&&y.uniformsNeedUpdate===!0&&(Gn.upload(R,Di(de),at,V),y.uniformsNeedUpdate=!1),y.isSpriteMaterial&&qe.setValue(R,"center",F.center),qe.setValue(R,"modelViewMatrix",F.modelViewMatrix),qe.setValue(R,"normalMatrix",F.normalMatrix),qe.setValue(R,"modelMatrix",F.matrixWorld),y.uniformsGroups!==void 0){const Ze=y.uniformsGroups;for(let Xt=0,on=Ze.length;Xt<on;Xt++){const Ni=Ze[Xt];Y.update(Ni,Tt),Y.bind(Ni,Tt)}}return Tt}function za(u,C){u.ambientLightColor.needsUpdate=C,u.lightProbe.needsUpdate=C,u.directionalLights.needsUpdate=C,u.directionalLightShadows.needsUpdate=C,u.pointLights.needsUpdate=C,u.pointLightShadows.needsUpdate=C,u.spotLights.needsUpdate=C,u.spotLightShadows.needsUpdate=C,u.rectAreaLights.needsUpdate=C,u.hemisphereLights.needsUpdate=C}function Xa(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(u,C,B){const y=O.get(u);y.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1&&(y.__useRenderToTexture=!1),O.get(u.texture).__webglTexture=C,O.get(u.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:B,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,C){const B=O.get(u);B.__webglFramebuffer=C,B.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(u,C=0,B=0){$=u,K=C,H=B;let y=null,F=!1,fe=!1;if(u){const le=O.get(u);if(le.__useDefaultFramebuffer!==void 0){s.bindFramebuffer(R.FRAMEBUFFER,le.__webglFramebuffer),he.copy(u.viewport),ve.copy(u.scissor),ke=u.scissorTest,s.viewport(he),s.scissor(ve),s.setScissorTest(ke),oe=-1;return}else if(le.__webglFramebuffer===void 0)V.setupRenderTarget(u);else if(le.__hasExternalTextures)V.rebindTextures(u,O.get(u.texture).__webglTexture,O.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const we=u.depthTexture;if(le.__boundDepthTexture!==we){if(we!==null&&O.has(we)&&(u.width!==we.image.width||u.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(u)}}const ge=u.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(fe=!0);const xe=O.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(xe[C])?y=xe[C][B]:y=xe[C],F=!0):u.samples>0&&V.useMultisampledRTT(u)===!1?y=O.get(u).__webglMultisampledFramebuffer:Array.isArray(xe)?y=xe[B]:y=xe,he.copy(u.viewport),ve.copy(u.scissor),ke=u.scissorTest}else he.copy(Ae).multiplyScalar(Q).floor(),ve.copy(it).multiplyScalar(Q).floor(),ke=Ne;if(B!==0&&(y=J),s.bindFramebuffer(R.FRAMEBUFFER,y)&&s.drawBuffers(u,y),s.viewport(he),s.scissor(ve),s.setScissorTest(ke),F){const le=O.get(u.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,B)}else if(fe){const le=C;for(let ge=0;ge<u.textures.length;ge++){const xe=O.get(u.textures[ge]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ge,xe.__webglTexture,B,le)}}else if(u!==null&&B!==0){const le=O.get(u.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,le.__webglTexture,B)}oe=-1},this.readRenderTargetPixels=function(u,C,B,y,F,fe,pe,le=0){if(!(u&&u.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=O.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){s.bindFramebuffer(R.FRAMEBUFFER,ge);try{const xe=u.textures[le],we=xe.format,De=xe.type;if(u.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+le),!S.textureFormatReadable(we)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(De)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=u.width-y&&B>=0&&B<=u.height-F&&R.readPixels(C,B,y,F,ae.convert(we),ae.convert(De),fe)}finally{const xe=$!==null?O.get($).__webglFramebuffer:null;s.bindFramebuffer(R.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(u,C,B,y,F,fe,pe,le=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=O.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge)if(C>=0&&C<=u.width-y&&B>=0&&B<=u.height-F){s.bindFramebuffer(R.FRAMEBUFFER,ge);const xe=u.textures[le],we=xe.format,De=xe.type;if(u.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+le),!S.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.bufferData(R.PIXEL_PACK_BUFFER,fe.byteLength,R.STREAM_READ),R.readPixels(C,B,y,F,ae.convert(we),ae.convert(De),0);const ze=$!==null?O.get($).__webglFramebuffer:null;s.bindFramebuffer(R.FRAMEBUFFER,ze);const rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ya(R,rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,fe),R.deleteBuffer(Me),R.deleteSync(rt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,C=null,B=0){const y=Math.pow(2,-B),F=Math.floor(u.image.width*y),fe=Math.floor(u.image.height*y),pe=C!==null?C.x:0,le=C!==null?C.y:0;V.setTexture2D(u,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,pe,le,F,fe),s.unbindTexture()},this.copyTextureToTexture=function(u,C,B=null,y=null,F=0,fe=0){let pe,le,ge,xe,we,De,Me,ze,rt;const nt=u.isCompressedTexture?u.mipmaps[fe]:u.image;if(B!==null)pe=B.max.x-B.min.x,le=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,xe=B.min.x,we=B.min.y,De=B.isBox3?B.min.z:0;else{const at=Math.pow(2,-F);pe=Math.floor(nt.width*at),le=Math.floor(nt.height*at),u.isDataArrayTexture?ge=nt.depth:u.isData3DTexture?ge=Math.floor(nt.depth*at):ge=1,xe=0,we=0,De=0}y!==null?(Me=y.x,ze=y.y,rt=y.z):(Me=0,ze=0,rt=0);const Ke=ae.convert(C.format),ht=ae.convert(C.type);let de;C.isData3DTexture?(V.setTexture3D(C,0),de=R.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(V.setTexture2DArray(C,0),de=R.TEXTURE_2D_ARRAY):(V.setTexture2D(C,0),de=R.TEXTURE_2D),s.activeTexture(R.TEXTURE0),s.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(R.UNPACK_ALIGNMENT,C.unpackAlignment);const xt=s.getParameter(R.UNPACK_ROW_LENGTH),Be=s.getParameter(R.UNPACK_IMAGE_HEIGHT),Tt=s.getParameter(R.UNPACK_SKIP_PIXELS),Pt=s.getParameter(R.UNPACK_SKIP_ROWS),Wt=s.getParameter(R.UNPACK_SKIP_IMAGES);s.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),s.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),s.pixelStorei(R.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(R.UNPACK_SKIP_ROWS,we),s.pixelStorei(R.UNPACK_SKIP_IMAGES,De);const an=u.isDataArrayTexture||u.isData3DTexture,qe=C.isDataArrayTexture||C.isData3DTexture;if(u.isDepthTexture){const at=O.get(u),zt=O.get(C),Ze=O.get(at.__renderTarget),Xt=O.get(zt.__renderTarget);s.bindFramebuffer(R.READ_FRAMEBUFFER,Ze.__webglFramebuffer),s.bindFramebuffer(R.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let on=0;on<ge;on++)an&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,O.get(u).__webglTexture,F,De+on),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,O.get(C).__webglTexture,fe,rt+on)),R.blitFramebuffer(xe,we,pe,le,Me,ze,pe,le,R.DEPTH_BUFFER_BIT,R.NEAREST);s.bindFramebuffer(R.READ_FRAMEBUFFER,null),s.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||u.isRenderTargetTexture||O.has(u)){const at=O.get(u),zt=O.get(C);s.bindFramebuffer(R.READ_FRAMEBUFFER,Z),s.bindFramebuffer(R.DRAW_FRAMEBUFFER,W);for(let Ze=0;Ze<ge;Ze++)an?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,at.__webglTexture,F,De+Ze):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,at.__webglTexture,F),qe?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,fe,rt+Ze):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,fe),F!==0?R.blitFramebuffer(xe,we,pe,le,Me,ze,pe,le,R.COLOR_BUFFER_BIT,R.NEAREST):qe?R.copyTexSubImage3D(de,fe,Me,ze,rt+Ze,xe,we,pe,le):R.copyTexSubImage2D(de,fe,Me,ze,xe,we,pe,le);s.bindFramebuffer(R.READ_FRAMEBUFFER,null),s.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qe?u.isDataTexture||u.isData3DTexture?R.texSubImage3D(de,fe,Me,ze,rt,pe,le,ge,Ke,ht,nt.data):C.isCompressedArrayTexture?R.compressedTexSubImage3D(de,fe,Me,ze,rt,pe,le,ge,Ke,nt.data):R.texSubImage3D(de,fe,Me,ze,rt,pe,le,ge,Ke,ht,nt):u.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,fe,Me,ze,pe,le,Ke,ht,nt.data):u.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,fe,Me,ze,nt.width,nt.height,Ke,nt.data):R.texSubImage2D(R.TEXTURE_2D,fe,Me,ze,pe,le,Ke,ht,nt);s.pixelStorei(R.UNPACK_ROW_LENGTH,xt),s.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Be),s.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),s.pixelStorei(R.UNPACK_SKIP_ROWS,Pt),s.pixelStorei(R.UNPACK_SKIP_IMAGES,Wt),fe===0&&C.generateMipmaps&&R.generateMipmap(de),s.unbindTexture()},this.initRenderTarget=function(u){O.get(u).__webglFramebuffer===void 0&&V.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?V.setTextureCube(u,0):u.isData3DTexture?V.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?V.setTexture2DArray(u,0):V.setTexture2D(u,0),s.unbindTexture()},this.resetState=function(){K=0,H=0,$=null,s.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(n),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Yr(e,n){if(n===ss)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(n===mi||n===Ma){let t=e.getIndex();if(t===null){const o=[],c=e.getAttribute("position");if(c!==void 0){for(let f=0;f<c.count;f++)o.push(f);e.setIndex(o),t=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=t.count-2,r=[];if(n===mi)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=e.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),e}function Ud(e){const n=new Map,t=new Map,i=e.clone();return Fa(e,i,function(r,a){n.set(a,r),t.set(r,a)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const a=r,o=n.get(r),c=o.skeleton.bones;a.skeleton=o.skeleton.clone(),a.bindMatrix.copy(o.bindMatrix),a.skeleton.bones=c.map(function(f){return t.get(f)}),a.bind(a.skeleton,a.bindMatrix)}),i}function Fa(e,n,t){t(e,n);for(let i=0;i<e.children.length;i++)Fa(e.children[i],n.children[i],t)}class Dd extends cs{constructor(n){super(n),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Od(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Zr(t,Ie.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zr(t,Ie.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $d(t)})}load(n,t,i,r){const a=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const d=bn.extractUrlBase(n);o=bn.resolveURL(d,this.path)}else o=bn.extractUrlBase(n);this.manager.itemStart(n);const c=function(d){r?r(d):console.error(d),a.manager.itemError(n),a.manager.itemEnd(n)},f=new Ta(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(n,function(d){try{a.parse(d,o,function(g){t(g),a.manager.itemEnd(n)},c)}catch(g){c(g)}},i,c)}setDRACOLoader(n){return this.dracoLoader=n,this}setKTX2Loader(n){return this.ktx2Loader=n,this}setMeshoptDecoder(n){return this.meshoptDecoder=n,this}register(n){return this.pluginCallbacks.indexOf(n)===-1&&this.pluginCallbacks.push(n),this}unregister(n){return this.pluginCallbacks.indexOf(n)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n),1),this}parse(n,t,i,r){let a;const o={},c={},f=new TextDecoder;if(typeof n=="string")a=JSON.parse(n);else if(n instanceof ArrayBuffer)if(f.decode(new Uint8Array(n,0,4))===Oa){try{o[Ie.KHR_BINARY_GLTF]=new jd(n)}catch(_){r&&r(_);return}a=JSON.parse(o[Ie.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(n));else a=n;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new fp(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[_.name]=_,o[_.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const _=a.extensionsUsed[g],h=a.extensionsRequired||[];switch(_){case Ie.KHR_MATERIALS_UNLIT:o[_]=new yd;break;case Ie.KHR_DRACO_MESH_COMPRESSION:o[_]=new Qd(a,this.dracoLoader);break;case Ie.KHR_TEXTURE_TRANSFORM:o[_]=new Jd;break;case Ie.KHR_MESH_QUANTIZATION:o[_]=new ep;break;default:h.indexOf(_)>=0&&c[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(o),d.setPlugins(c),d.parse(i,r)}parseAsync(n,t){const i=this;return new Promise(function(r,a){i.parse(n,t,r,a)})}}function Id(){let e={};return{get:function(n){return e[n]},add:function(n,t){e[n]=t},remove:function(n){delete e[n]},removeAll:function(){e={}}}}function ot(e,n,t){const i=e.json.materials[n];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Nd{constructor(n){this.parser=n,this.name=Ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const n=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&n._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(n){const t=this.parser,i="light:"+n;let r=t.cache.get(i);if(r)return r;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[n];let d;const g=new He(16777215);f.color!==void 0&&g.setRGB(f.color[0],f.color[1],f.color[2],Rt);const _=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new _i(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new fs(g),d.distance=_;break;case"spot":d=new ls(g),d.distance=_,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),wt(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+n),r=Promise.resolve(d),t.cache.add(i,r),r}getDependency(n,t){if(n==="light")return this._loadLight(t)}createNodeAttachment(n){const t=this,i=this.parser,a=i.json.nodes[n],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(f){return i._getNodeRef(t.cache,c,f)})}}class yd{constructor(){this.name=Ie.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(n,t,i){const r=[];n.color=new He(1,1,1),n.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const o=a.baseColorFactor;n.color.setRGB(o[0],o[1],o[2],Rt),n.opacity=o[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(n,"map",a.baseColorTexture,nn))}return Promise.all(r)}}class Fd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class Od{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _t(a,a)}return Promise.all(r)}}class Bd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_DISPERSION}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class Gd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class Hd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_SHEEN}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Rt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,nn)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class Vd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class kd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_VOLUME}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],Rt),Promise.all(r)}}class Wd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_IOR}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class zd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_SPECULAR}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],Rt),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,nn)),Promise.all(r)}}class Xd{constructor(n){this.parser=n,this.name=Ie.EXT_MATERIALS_BUMP}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class Kd{constructor(n){this.parser=n,this.name=Ie.KHR_MATERIALS_ANISOTROPY}getMaterialType(n){return ot(this.parser,n,this.name)!==null?Bt:null}extendMaterialParams(n,t){const i=ot(this.parser,n,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class qd{constructor(n){this.parser=n,this.name=Ie.KHR_TEXTURE_BASISU}loadTexture(n){const t=this.parser,i=t.json,r=i.textures[n];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(n,a.source,o)}}class Yd{constructor(n){this.parser=n,this.name=Ie.EXT_TEXTURE_WEBP}loadTexture(n){const t=this.name,i=this.parser,r=i.json,a=r.textures[n];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],c=r.images[o.source];let f=i.textureLoader;if(c.uri){const d=i.options.manager.getHandler(c.uri);d!==null&&(f=d)}return i.loadTextureImage(n,o.source,f)}}class Zd{constructor(n){this.parser=n,this.name=Ie.EXT_TEXTURE_AVIF}loadTexture(n){const t=this.name,i=this.parser,r=i.json,a=r.textures[n];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],c=r.images[o.source];let f=i.textureLoader;if(c.uri){const d=i.options.manager.getHandler(c.uri);d!==null&&(f=d)}return i.loadTextureImage(n,o.source,f)}}class Zr{constructor(n,t){this.name=t,this.parser=n}loadBufferView(n){const t=this.parser.json,i=t.bufferViews[n];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const f=r.byteOffset||0,d=r.byteLength||0,g=r.count,_=r.byteStride,h=new Uint8Array(c,f,d);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(g,_,h,r.mode,r.filter).then(function(v){return v.buffer}):o.ready.then(function(){const v=new ArrayBuffer(g*_);return o.decodeGltfBuffer(new Uint8Array(v),g,_,h,r.mode,r.filter),v})})}else return null}}class $d{constructor(n){this.name=Ie.EXT_MESH_GPU_INSTANCING,this.parser=n}createNodeMesh(n){const t=this.parser.json,i=t.nodes[n];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const d of r.primitives)if(d.mode!==At.TRIANGLES&&d.mode!==At.TRIANGLE_STRIP&&d.mode!==At.TRIANGLE_FAN&&d.mode!==void 0)return null;const o=i.extensions[this.name].attributes,c=[],f={};for(const d in o)c.push(this.parser.getDependency("accessor",o[d]).then(g=>(f[d]=g,f[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(n)),Promise.all(c).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],h=d[0].count,v=[];for(const T of _){const I=new Ft,p=new Ce,l=new Aa,U=new Ce(1,1,1),P=new us(T.geometry,T.material,h);for(let E=0;E<h;E++)f.TRANSLATION&&p.fromBufferAttribute(f.TRANSLATION,E),f.ROTATION&&l.fromBufferAttribute(f.ROTATION,E),f.SCALE&&U.fromBufferAttribute(f.SCALE,E),P.setMatrixAt(E,I.compose(p,l,U));for(const E in f)if(E==="_COLOR_0"){const b=f[E];P.instanceColor=new ds(b.array,b.itemSize,b.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&T.geometry.setAttribute(E,f[E]);Ra.prototype.copy.call(P,T),this.parser.assignFinalMaterial(P),v.push(P)}return g.isGroup?(g.clear(),g.add(...v),g):v[0]}))}}const Oa="glTF",xn=12,$r={JSON:1313821514,BIN:5130562};class jd{constructor(n){this.name=Ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(n,0,xn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(n.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Oa)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-xn,a=new DataView(n,xn);let o=0;for(;o<r;){const c=a.getUint32(o,!0);o+=4;const f=a.getUint32(o,!0);if(o+=4,f===$r.JSON){const d=new Uint8Array(n,xn+o,c);this.content=i.decode(d)}else if(f===$r.BIN){const d=xn+o;this.body=n.slice(d,d+c)}o+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qd{constructor(n,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ie.KHR_DRACO_MESH_COMPRESSION,this.json=n,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(n,t){const i=this.json,r=this.dracoLoader,a=n.extensions[this.name].bufferView,o=n.extensions[this.name].attributes,c={},f={},d={};for(const g in o){const _=Si[g]||g.toLowerCase();c[_]=o[g]}for(const g in n.attributes){const _=Si[g]||g.toLowerCase();if(o[g]!==void 0){const h=i.accessors[n.attributes[g]],v=dn[h.componentType];d[_]=v.name,f[_]=h.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(_,h){r.decodeDracoFile(g,function(v){for(const T in v.attributes){const I=v.attributes[T],p=f[T];p!==void 0&&(I.normalized=p)}_(v)},c,d,Rt,h)})})}}class Jd{constructor(){this.name=Ie.KHR_TEXTURE_TRANSFORM}extendTexture(n,t){return(t.texCoord===void 0||t.texCoord===n.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(n=n.clone(),t.texCoord!==void 0&&(n.channel=t.texCoord),t.offset!==void 0&&n.offset.fromArray(t.offset),t.rotation!==void 0&&(n.rotation=t.rotation),t.scale!==void 0&&n.repeat.fromArray(t.scale),n.needsUpdate=!0),n}}class ep{constructor(){this.name=Ie.KHR_MESH_QUANTIZATION}}class Ba extends ws{constructor(n,t,i,r){super(n,t,i,r)}copySampleValue_(n){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=n*r*3+r;for(let o=0;o!==r;o++)t[o]=i[a+o];return t}interpolate_(n,t,i,r){const a=this.resultBuffer,o=this.sampleValues,c=this.valueSize,f=c*2,d=c*3,g=r-t,_=(i-t)/g,h=_*_,v=h*_,T=n*d,I=T-d,p=-2*v+3*h,l=v-h,U=1-p,P=l-h+_;for(let E=0;E!==c;E++){const b=o[I+E+c],M=o[I+E+f]*g,D=o[T+E+c],m=o[T+E]*g;a[E]=U*b+P*M+p*D+l*m}return a}}const tp=new Aa;class np extends Ba{interpolate_(n,t,i,r){const a=super.interpolate_(n,t,i,r);return tp.fromArray(a).normalize().toArray(a),a}}const At={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},dn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jr={9728:Ht,9729:mt,9984:na,9985:yn,9986:Tn,9987:Yt},Qr={33071:Hn,33648:ta,10497:Vn},ci={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Si={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ip={CUBICSPLINE:void 0,LINEAR:ba,STEP:Ps},li={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rp(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Ri({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),e.DefaultMaterial}function Jt(e,n,t){for(const i in t.extensions)e[i]===void 0&&(n.userData.gltfExtensions=n.userData.gltfExtensions||{},n.userData.gltfExtensions[i]=t.extensions[i])}function wt(e,n){n.extras!==void 0&&(typeof n.extras=="object"?Object.assign(e.userData,n.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+n.extras))}function ap(e,n,t){let i=!1,r=!1,a=!1;for(let d=0,g=n.length;d<g;d++){const _=n[d];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(a=!0),i&&r&&a)break}if(!i&&!r&&!a)return Promise.resolve(e);const o=[],c=[],f=[];for(let d=0,g=n.length;d<g;d++){const _=n[d];if(i){const h=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):e.attributes.position;o.push(h)}if(r){const h=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):e.attributes.normal;c.push(h)}if(a){const h=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):e.attributes.color;f.push(h)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(f)]).then(function(d){const g=d[0],_=d[1],h=d[2];return i&&(e.morphAttributes.position=g),r&&(e.morphAttributes.normal=_),a&&(e.morphAttributes.color=h),e.morphTargetsRelative=!0,e})}function op(e,n){if(e.updateMorphTargets(),n.weights!==void 0)for(let t=0,i=n.weights.length;t<i;t++)e.morphTargetInfluences[t]=n.weights[t];if(n.extras&&Array.isArray(n.extras.targetNames)){const t=n.extras.targetNames;if(e.morphTargetInfluences.length===t.length){e.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)e.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sp(e){let n;const t=e.extensions&&e.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];if(t?n="draco:"+t.bufferView+":"+t.indices+":"+fi(t.attributes):n=e.indices+":"+fi(e.attributes)+":"+e.mode,e.targets!==void 0)for(let i=0,r=e.targets.length;i<r;i++)n+=":"+fi(e.targets[i]);return n}function fi(e){let n="";const t=Object.keys(e).sort();for(let i=0,r=t.length;i<r;i++)n+=t[i]+":"+e[t[i]]+";";return n}function Ei(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cp(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lp=new Ft;class fp{constructor(n={},t={}){this.json=n,this.extensions={},this.plugins={},this.options=t,this.cache=new Id,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const f=c.match(/Version\/(\d+)/);r=i&&f?parseInt(f[1],10):-1,a=c.indexOf("Firefox")>-1,o=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||a&&o<98?this.textureLoader=new ps(this.options.manager):this.textureLoader=new hs(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(n){this.extensions=n}setPlugins(n){this.plugins=n}parse(n,t){const i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const c={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Jt(a,c,r),wt(c,r),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(c)})).then(function(){for(const f of c.scenes)f.updateMatrixWorld();n(c)})}).catch(t)}_markDefs(){const n=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const o=t[r].joints;for(let c=0,f=o.length;c<f;c++)n[o[c]].isBone=!0}for(let r=0,a=n.length;r<a;r++){const o=n[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(n,t){t!==void 0&&(n.refs[t]===void 0&&(n.refs[t]=n.uses[t]=0),n.refs[t]++)}_getNodeRef(n,t,i){if(n.refs[t]<=1)return i;const r=i.clone(),a=(o,c)=>{const f=this.associations.get(o);f!=null&&this.associations.set(c,f);for(const[d,g]of o.children.entries())a(g,c.children[d])};return a(i,r),r.name+="_instance_"+n.uses[t]++,r}_invokeOne(n){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=n(t[i]);if(r)return r}return null}_invokeAll(n){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const a=n(t[r]);a&&i.push(a)}return i}getDependency(n,t){const i=n+":"+t;let r=this.cache.get(i);if(!r){switch(n){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(n,t)}),!r)throw new Error("Unknown type: "+n);break}this.cache.add(i,r)}return r}getDependencies(n){let t=this.cache.get(n);if(!t){const i=this,r=this.json[n+(n==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,o){return i.getDependency(n,o)})),this.cache.add(n,t)}return t}loadBuffer(n){const t=this.json.buffers[n],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&n===0)return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,o){i.load(bn.resolveURL(t.uri,r.path),a,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(n){const t=this.json.bufferViews[n];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(n){const t=this,i=this.json,r=this.json.accessors[n];if(r.bufferView===void 0&&r.sparse===void 0){const o=ci[r.type],c=dn[r.componentType],f=r.normalized===!0,d=new c(r.count*o);return Promise.resolve(new tn(d,o,f))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(o){const c=o[0],f=ci[r.type],d=dn[r.componentType],g=d.BYTES_PER_ELEMENT,_=g*f,h=r.byteOffset||0,v=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,T=r.normalized===!0;let I,p;if(v&&v!==_){const l=Math.floor(h/v),U="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+l+":"+r.count;let P=t.cache.get(U);P||(I=new d(c,l*v,r.count*v/g),P=new ms(I,v/g),t.cache.add(U,P)),p=new Ls(P,f,h%v/g,T)}else c===null?I=new d(r.count*f):I=new d(c,h,r.count*f),p=new tn(I,f,T);if(r.sparse!==void 0){const l=ci.SCALAR,U=dn[r.sparse.indices.componentType],P=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,b=new U(o[1],P,r.sparse.count*l),M=new d(o[2],E,r.sparse.count*f);c!==null&&(p=new tn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let D=0,m=b.length;D<m;D++){const x=b[D];if(p.setX(x,M[D*f]),f>=2&&p.setY(x,M[D*f+1]),f>=3&&p.setZ(x,M[D*f+2]),f>=4&&p.setW(x,M[D*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=T}return p})}loadTexture(n){const t=this.json,i=this.options,a=t.textures[n].source,o=t.images[a];let c=this.textureLoader;if(o.uri){const f=i.manager.getHandler(o.uri);f!==null&&(c=f)}return this.loadTextureImage(n,a,c)}loadTextureImage(n,t,i){const r=this,a=this.json,o=a.textures[n],c=a.images[t],f=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=o.name||c.name||"",g.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(g.name=c.uri);const h=(a.samplers||{})[o.sampler]||{};return g.magFilter=jr[h.magFilter]||mt,g.minFilter=jr[h.minFilter]||Yt,g.wrapS=Qr[h.wrapS]||Vn,g.wrapT=Qr[h.wrapT]||Vn,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Ht&&g.minFilter!==mt,r.associations.set(g,{textures:n}),g}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(n,t){const i=this,r=this.json,a=this.options;if(this.sourceCache[n]!==void 0)return this.sourceCache[n].then(_=>_.clone());const o=r.images[n],c=self.URL||self.webkitURL;let f=o.uri||"",d=!1;if(o.bufferView!==void 0)f=i.getDependency("bufferView",o.bufferView).then(function(_){d=!0;const h=new Blob([_],{type:o.mimeType});return f=c.createObjectURL(h),f});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+n+" is missing URI and bufferView");const g=Promise.resolve(f).then(function(_){return new Promise(function(h,v){let T=h;t.isImageBitmapLoader===!0&&(T=function(I){const p=new hi(I);p.needsUpdate=!0,h(p)}),t.load(bn.resolveURL(_,a.path),T,void 0,v)})}).then(function(_){return d===!0&&c.revokeObjectURL(f),wt(_,o),_.userData.mimeType=o.mimeType||cp(o.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),_});return this.sourceCache[n]=g,g}assignTexture(n,t,i,r){const a=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),a.extensions[Ie.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[Ie.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const f=a.associations.get(o);o=a.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),a.associations.set(o,f)}}return r!==void 0&&(o.colorSpace=r),n[t]=o,o})}assignFinalMaterial(n){const t=n.geometry;let i=n.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(n.isPoints){const c="PointsMaterial:"+i.uuid;let f=this.cache.get(c);f||(f=new _s,ti.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(c,f)),i=f}else if(n.isLine){const c="LineBasicMaterial:"+i.uuid;let f=this.cache.get(c);f||(f=new gs,ti.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(c,f)),i=f}if(r||a||o){let c="ClonedMaterial:"+i.uuid+":";r&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let f=this.cache.get(c);f||(f=i.clone(),a&&(f.vertexColors=!0),o&&(f.flatShading=!0),r&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(c,f),this.associations.set(f,this.associations.get(i))),i=f}n.material=i}getMaterialType(){return Ri}loadMaterial(n){const t=this,i=this.json,r=this.extensions,a=i.materials[n];let o;const c={},f=a.extensions||{},d=[];if(f[Ie.KHR_MATERIALS_UNLIT]){const _=r[Ie.KHR_MATERIALS_UNLIT];o=_.getMaterialType(),d.push(_.extendParams(c,a,t))}else{const _=a.pbrMetallicRoughness||{};if(c.color=new He(1,1,1),c.opacity=1,Array.isArray(_.baseColorFactor)){const h=_.baseColorFactor;c.color.setRGB(h[0],h[1],h[2],Rt),c.opacity=h[3]}_.baseColorTexture!==void 0&&d.push(t.assignTexture(c,"map",_.baseColorTexture,nn)),c.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,c.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(c,"metalnessMap",_.metallicRoughnessTexture)),d.push(t.assignTexture(c,"roughnessMap",_.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(n)}),d.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(n,c)})))}a.doubleSided===!0&&(c.side=It);const g=a.alphaMode||li.OPAQUE;if(g===li.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,g===li.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&o!==fn&&(d.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new _t(1,1),a.normalTexture.scale!==void 0)){const _=a.normalTexture.scale;c.normalScale.set(_,_)}if(a.occlusionTexture!==void 0&&o!==fn&&(d.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==fn){const _=a.emissiveFactor;c.emissive=new He().setRGB(_[0],_[1],_[2],Rt)}return a.emissiveTexture!==void 0&&o!==fn&&d.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,nn)),Promise.all(d).then(function(){const _=new o(c);return a.name&&(_.name=a.name),wt(_,a),t.associations.set(_,{materials:n}),a.extensions&&Jt(r,_,a),_})}createUniqueName(n){const t=vs.sanitizeNodeName(n||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(n){const t=this,i=this.extensions,r=this.primitiveCache;function a(c){return i[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(f){return Jr(f,c,t)})}const o=[];for(let c=0,f=n.length;c<f;c++){const d=n[c],g=sp(d),_=r[g];if(_)o.push(_.promise);else{let h;d.extensions&&d.extensions[Ie.KHR_DRACO_MESH_COMPRESSION]?h=a(d):h=Jr(new wn,d,t),r[g]={primitive:d,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(n){const t=this,i=this.json,r=this.extensions,a=i.meshes[n],o=a.primitives,c=[];for(let f=0,d=o.length;f<d;f++){const g=o[f].material===void 0?rp(this.cache):this.getDependency("material",o[f].material);c.push(g)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(f){const d=f.slice(0,f.length-1),g=f[f.length-1],_=[];for(let v=0,T=g.length;v<T;v++){const I=g[v],p=o[v];let l;const U=d[v];if(p.mode===At.TRIANGLES||p.mode===At.TRIANGLE_STRIP||p.mode===At.TRIANGLE_FAN||p.mode===void 0)l=a.isSkinnedMesh===!0?new Ss(I,U):new Ot(I,U),l.isSkinnedMesh===!0&&l.normalizeSkinWeights(),p.mode===At.TRIANGLE_STRIP?l.geometry=Yr(l.geometry,Ma):p.mode===At.TRIANGLE_FAN&&(l.geometry=Yr(l.geometry,mi));else if(p.mode===At.LINES)l=new Es(I,U);else if(p.mode===At.LINE_STRIP)l=new xs(I,U);else if(p.mode===At.LINE_LOOP)l=new Ms(I,U);else if(p.mode===At.POINTS)l=new Ts(I,U);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(l.geometry.morphAttributes).length>0&&op(l,a),l.name=t.createUniqueName(a.name||"mesh_"+n),wt(l,a),p.extensions&&Jt(r,l,p),t.assignFinalMaterial(l),_.push(l)}for(let v=0,T=_.length;v<T;v++)t.associations.set(_[v],{meshes:n,primitives:v});if(_.length===1)return a.extensions&&Jt(r,_[0],a),_[0];const h=new Bn;a.extensions&&Jt(r,h,a),t.associations.set(h,{meshes:n});for(let v=0,T=_.length;v<T;v++)h.add(_[v]);return h})}loadCamera(n){let t;const i=this.json.cameras[n],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(As.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new xi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),wt(t,i),Promise.resolve(t)}loadSkin(n){const t=this.json.skins[n],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const a=r.pop(),o=r,c=[],f=[];for(let d=0,g=o.length;d<g;d++){const _=o[d];if(_){c.push(_);const h=new Ft;a!==null&&h.fromArray(a.array,d*16),f.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Rs(c,f)})}loadAnimation(n){const t=this.json,i=this,r=t.animations[n],a=r.name?r.name:"animation_"+n,o=[],c=[],f=[],d=[],g=[];for(let _=0,h=r.channels.length;_<h;_++){const v=r.channels[_],T=r.samplers[v.sampler],I=v.target,p=I.node,l=r.parameters!==void 0?r.parameters[T.input]:T.input,U=r.parameters!==void 0?r.parameters[T.output]:T.output;I.node!==void 0&&(o.push(this.getDependency("node",p)),c.push(this.getDependency("accessor",l)),f.push(this.getDependency("accessor",U)),d.push(T),g.push(I))}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(g)]).then(function(_){const h=_[0],v=_[1],T=_[2],I=_[3],p=_[4],l=[];for(let P=0,E=h.length;P<E;P++){const b=h[P],M=v[P],D=T[P],m=I[P],x=p[P];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const N=i._createAnimationTracks(b,M,D,m,x);if(N)for(let L=0;L<N.length;L++)l.push(N[L])}const U=new bs(a,void 0,l);return wt(U,r),U})}createNodeMesh(n){const t=this.json,i=this,r=t.nodes[n];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){const o=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let f=0,d=r.weights.length;f<d;f++)c.morphTargetInfluences[f]=r.weights[f]}),o})}loadNode(n){const t=this.json,i=this,r=t.nodes[n],a=i._loadNodeShallow(n),o=[],c=r.children||[];for(let d=0,g=c.length;d<g;d++)o.push(i.getDependency("node",c[d]));const f=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(o),f]).then(function(d){const g=d[0],_=d[1],h=d[2];h!==null&&g.traverse(function(v){v.isSkinnedMesh&&v.bind(h,lp)});for(let v=0,T=_.length;v<T;v++)g.add(_[v]);if(g.userData.pivot!==void 0&&_.length>0){const v=g.userData.pivot,T=_[0];g.pivot=new Ce().fromArray(v),g.position.x-=v[0],g.position.y-=v[1],g.position.z-=v[2],T.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(n){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[n]!==void 0)return this.nodeCache[n];const a=t.nodes[n],o=a.name?r.createUniqueName(a.name):"",c=[],f=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(n)});return f&&c.push(f),a.camera!==void 0&&c.push(r.getDependency("camera",a.camera).then(function(d){return r._getNodeRef(r.cameraCache,a.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(n)}).forEach(function(d){c.push(d)}),this.nodeCache[n]=Promise.all(c).then(function(d){let g;if(a.isBone===!0?g=new Cs:d.length>1?g=new Bn:d.length===1?g=d[0]:g=new Ra,g!==d[0])for(let _=0,h=d.length;_<h;_++)g.add(d[_]);if(a.name&&(g.userData.name=a.name,g.name=o),wt(g,a),a.extensions&&Jt(i,g,a),a.matrix!==void 0){const _=new Ft;_.fromArray(a.matrix),g.applyMatrix4(_)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(a.mesh!==void 0&&r.meshCache.refs[a.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=n,g}),this.nodeCache[n]}loadScene(n){const t=this.extensions,i=this.json.scenes[n],r=this,a=new Bn;i.name&&(a.name=r.createUniqueName(i.name)),wt(a,i),i.extensions&&Jt(t,a,i);const o=i.nodes||[],c=[];for(let f=0,d=o.length;f<d;f++)c.push(r.getDependency("node",o[f]));return Promise.all(c).then(function(f){for(let g=0,_=f.length;g<_;g++){const h=f[g];h.parent!==null?a.add(Ud(h)):a.add(h)}const d=g=>{const _=new Map;for(const[h,v]of r.associations)(h instanceof ti||h instanceof hi)&&_.set(h,v);return g.traverse(h=>{const v=r.associations.get(h);v!=null&&_.set(h,v)}),_};return r.associations=d(a),a})}_createAnimationTracks(n,t,i,r,a){const o=[],c=n.name?n.name:n.uuid,f=[];function d(v){v.morphTargetInfluences&&f.push(v.name?v.name:v.uuid)}qt[a.path]===qt.weights?(d(n),n.isGroup&&n.children.forEach(d)):f.push(c);let g;switch(qt[a.path]){case qt.weights:g=Tr;break;case qt.rotation:g=Ar;break;case qt.translation:case qt.scale:g=Mr;break;default:i.itemSize===1?g=Tr:g=Mr;break}const _=r.interpolation!==void 0?ip[r.interpolation]:ba,h=this._getArrayFromAccessor(i);for(let v=0,T=f.length;v<T;v++){const I=new g(f[v]+"."+qt[a.path],t.array,h,_);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(I),o.push(I)}return o}_getArrayFromAccessor(n){let t=n.array;if(n.normalized){const i=Ei(t.constructor),r=new Float32Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(n){n.createInterpolant=function(i){const r=this instanceof Ar?np:Ba;return new r(this.times,this.values,this.getValueSize()/3,i)},n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function up(e,n,t){const i=n.attributes,r=new Ca;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],f=c.min,d=c.max;if(f!==void 0&&d!==void 0){if(r.set(new Ce(f[0],f[1],f[2]),new Ce(d[0],d[1],d[2])),c.normalized){const g=Ei(dn[c.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=n.targets;if(a!==void 0){const c=new Ce,f=new Ce;for(let d=0,g=a.length;d<g;d++){const _=a[d];if(_.POSITION!==void 0){const h=t.json.accessors[_.POSITION],v=h.min,T=h.max;if(v!==void 0&&T!==void 0){if(f.setX(Math.max(Math.abs(v[0]),Math.abs(T[0]))),f.setY(Math.max(Math.abs(v[1]),Math.abs(T[1]))),f.setZ(Math.max(Math.abs(v[2]),Math.abs(T[2]))),h.normalized){const I=Ei(dn[h.componentType]);f.multiplyScalar(I)}c.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}e.boundingBox=r;const o=new Us;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function Jr(e,n,t){const i=n.attributes,r=[];function a(o,c){return t.getDependency("accessor",o).then(function(f){e.setAttribute(c,f)})}for(const o in i){const c=Si[o]||o.toLowerCase();c in e.attributes||r.push(a(i[o],c))}if(n.indices!==void 0&&!e.index){const o=t.getDependency("accessor",n.indices).then(function(c){e.setIndex(c)});r.push(o)}return Qe.workingColorSpace!==Rt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),wt(e,n),up(e,n,t),Promise.all(r).then(function(){return n.targets!==void 0?ap(e,n.targets,t):e})}const dp="./assets/ariad/",Mn=[{id:"layout",label:"Layout",glb:"component_layout.glb",dims:"components in position",vol:0,tri:48,asm:"Manufacturer envelopes plus a supplier-dependent camera reservation."},{id:"front_shell",label:"Front shell",glb:"front_shell.glb",dims:"120 × 92 × 58 mm",vol:92,tri:4212,asm:"Receives the snap-latched tray, slide-lock panel, and press-fit camera bezel."},{id:"electronics_tray",label:"Electronics tray",glb:"electronics_tray.glb",dims:"107 × 49 × 21 mm",vol:17,tri:748,asm:"Slides into the shell, locks with two releasable planar snap arms, carries two SCS0009 servo cradles."},{id:"service_panel",label:"Service panel",glb:"service_panel.glb",dims:"107 × 85 × 3 mm",vol:22,tri:540,asm:"Slides down guide channels and closes with one hand-releasable flex latch."},{id:"left_limb",label:"Left limb",glb:"left_limb.glb",dims:"105 × 24 × 14 mm",vol:33,tri:792,asm:"Receives a keyed split-stem adapter; printed flat for stronger in-plane layers."},{id:"right_limb",label:"Right limb",glb:"right_limb.glb",dims:"105 × 24 × 14 mm",vol:33,tri:792,asm:"Receives a keyed split-stem adapter; printed flat for stronger in-plane layers."},{id:"left_servo_adapter",label:"Servo adapter L",glb:"left_servo_adapter.glb",dims:"18 × 18 × 17 mm",vol:1,tri:1632,asm:"Keys into the limb with a split retention stem; the purchased-servo interface remains provisional."},{id:"right_servo_adapter",label:"Servo adapter R",glb:"right_servo_adapter.glb",dims:"18 × 18 × 17 mm",vol:1,tri:1632,asm:"Keys into the limb with a split retention stem; the purchased-servo interface remains provisional."},{id:"camera_bezel",label:"Camera bezel",glb:"camera_bezel.glb",dims:"29 × 28 × 7 mm",vol:2,tri:1316,asm:"Presses into the front opening and extends into a 25 × 24 mm camera-board locating frame."},{id:"electronics_carrier",label:"Pi carrier",glb:"electronics_carrier.glb",dims:"68 × 32 × 8 mm",vol:8,tri:3852,asm:"Slides onto the tray and provides the Pi Zero 2 W 58 × 23 mm M2.5 mounting pattern."}];function mp(){const e=Kt.useRef(null),n=Kt.useRef(null),[t,i]=Kt.useState("layout"),[r,a]=Kt.useState(!0),[o,c]=Kt.useState(""),[f,d]=Kt.useState(!1);Kt.useEffect(()=>{const _=e.current;if(!_)return;const h=Mn.find(m=>m.id===t)??Mn[0];let v=!1,T=0,I=Math.PI*.25,p=Math.PI*.36,l=200,U=!1,P=!1,E=0,b=0,M=[];return a(!0),c(""),new Dd().load(dp+h.glb,m=>{if(v)return void m.scene.traverse(x=>{const N=x;N.geometry&&N.geometry.dispose()});try{const x=new Ds,N=new un(38,1,.1,4e3),L=new wd({antialias:!0,alpha:!0});L.setPixelRatio(Math.min(devicePixelRatio,2)),L.outputColorSpace=nn,_.appendChild(L.domElement);const G=new Ri({color:13620954,metalness:.2,roughness:.55});m.scene.traverse(j=>{const Q=j;Q.isMesh&&(Q.material=G)});const J=new Bn;J.add(m.scene),x.add(J);const Z=new Ca().setFromObject(J),W=Z.getSize(new Ce),K=Z.getCenter(new Ce);J.position.sub(K);const H=Math.max(W.x,W.y,W.z)||100;l=H*2.1;const $=new Is(H*4,12,2765628,1844010);$.position.y=-W.y/2-H*.06,x.add($),x.add(new Ns(16771276,1712166,1.1));const oe=new _i(16761193,1.4);oe.position.set(1.2,1.8,1.1),x.add(oe);const _e=new _i(10474751,.45);_e.position.set(-1.4,-.5,-1),x.add(_e);const he=()=>{const j=_.clientWidth,Q=_.clientHeight;L.setSize(j,Q,!1),N.aspect=j/Math.max(Q,1),N.updateProjectionMatrix()};he();const ve=()=>{T=requestAnimationFrame(ve),U&&(I+=.004);const j=Math.sin(p);N.position.set(l*j*Math.sin(I),l*Math.cos(p),l*j*Math.cos(I)),N.lookAt(0,0,0),L.render(x,N)};ve();const ke=j=>{P=!0,E=j.clientX,b=j.clientY,_.setPointerCapture(j.pointerId)},Je=j=>{P&&(I-=(j.clientX-E)*.006,p=Math.min(Math.PI-.15,Math.max(.15,p-(j.clientY-b)*.006)),E=j.clientX,b=j.clientY)},Fe=()=>{P=!1};_.addEventListener("pointerdown",ke),_.addEventListener("pointermove",Je),_.addEventListener("pointerup",Fe),_.addEventListener("pointercancel",Fe);const z=new ResizeObserver(he);z.observe(_),M=[()=>cancelAnimationFrame(T),()=>{_.removeEventListener("pointerdown",ke),_.removeEventListener("pointermove",Je),_.removeEventListener("pointerup",Fe),_.removeEventListener("pointercancel",Fe)},()=>z.disconnect(),()=>{x.traverse(j=>{const Q=j;Q.geometry&&Q.geometry.dispose()}),G.dispose()},()=>L.dispose(),()=>L.domElement.remove()],n.current={stop:()=>{M.forEach(j=>j()),M=[]},size:he,spin:j=>{U=j}},a(!1)}catch{v||(a(!1),c("3D viewer unavailable on this device — the spec sheet above still holds."))}},void 0,()=>{v||(a(!1),c("Model failed to load — the GLB ships with the site, so a hard refresh usually clears it."))}),()=>{v=!0,M.forEach(m=>m()),n.current=null}},[t]),Kt.useEffect(()=>{n.current?.spin(f)},[f]);const g=Mn.find(_=>_.id===t)??Mn[0];return vt.jsxs("div",{className:"bot-view-wrap",children:[vt.jsx("div",{className:"bot-view-chips",role:"tablist","aria-label":"Ariad parts",children:Mn.map(_=>vt.jsx("button",{className:`bot-chip${_.id===t?" on":""}`,onClick:()=>i(_.id),children:_.label},_.id))}),vt.jsxs("div",{className:"bot-view",ref:e,"data-busy":r||void 0,children:[r&&vt.jsx("span",{className:"bot-view-note",children:"loading mesh…"}),o&&vt.jsx("span",{className:"bot-view-note",children:o})]}),vt.jsxs("div",{className:"bot-view-meta",children:[vt.jsx("strong",{children:g.label}),vt.jsx("span",{children:g.dims}),g.vol>0&&vt.jsxs("span",{children:[g.vol," cm³ solid"]}),vt.jsxs("span",{children:[g.tri.toLocaleString()," triangles"]}),vt.jsx("button",{className:"bot-turn",onClick:()=>d(!f),children:f?"◼ stop turn":"▶ turn"})]}),vt.jsx("p",{className:"bot-view-asm",children:g.asm}),vt.jsx("p",{className:"bot-view-hint",children:"drag to orbit · every part kernel-valid, SHA-256 recorded in the run manifest"})]})}export{mp as AriadViewer};
