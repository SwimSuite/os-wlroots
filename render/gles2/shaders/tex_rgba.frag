precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;
uniform float alpha;

void main() {
	gl_FragColor = texture2D(tex, v_texcoord) * alpha;
}
