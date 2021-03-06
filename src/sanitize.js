/**
 * External dependencies
 */
import sanitizeHtml from 'sanitize-html';

/**
 * Sanitize HTML content by the wp_kses_post() requirements
 *
 * @see https://codex.wordpress.org/Function_Reference/wp_kses_post
 * @param {string} content     REQUIRED The content to sanitize
 * @param {array} allowedTags  OPTIONAL The allowed HTML tags for this content
 * @param {Object} allowedAtts OPTIONAL The allowed HTML attributes for this content
 */
export const Sanitize = ( content, allowedTags, allowedAtts ) => {
	if ( ! content ) {
		return;
	}

	if ( 'undefined' === typeof allowedTags ) {
		allowedTags = ksesAllowedTags;
	} else if ( false === allowedTags ) {
		allowedTags = [];
	}

	if ( 'undefined' === typeof allowedAtts ) {
		allowedAtts = ksesAllowedAttributes;
	} else if ( false === allowedAtts ) {
		allowedAtts = {};
	}

	return sanitizeHtml( content, {
		allowedTags,
		allowedAttributes: allowedAtts,
	} );
};

/**
 * Default Allowed HTML Tags (From wp_kses_post)
 *
 * @see https://codex.wordpress.org/Function_Reference/wp_kses_post
 * @type array Array of allowed HTML tags
 */
export const allowedTags = [ 'address', 'a', 'abbr', 'acronym', 'area', 'article', 'aside', 'audio', 'b', 'bdo', 'big', 'blockquote', 'br', 'button', 'caption', 'cite', 'code', 'col', 'colgroup', 'del', 'dd', 'dfn', 'details', 'div', 'dl', 'dt', 'em', 'fieldset', 'figure', 'figcaption', 'font', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'i', 'img', 'ins', 'kbd', 'label', 'legend', 'li', 'map', 'mark', 'menu', 'nav', 'p', 'pre', 'q', 's', 'samp', 'span', 'section', 'small', 'strike', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'ol', 'var', 'video' ];

/**
 * Default Allowed HTML Attributes (from wp_kses_post)
 *
 * @see https://codex.wordpress.org/Function_Reference/wp_kses_post
 * @type Object HTML Element: allowed HTML attributes
 */
export const allowedAttributes = {
	address: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	a: [ 'href', 'rel', 'rev', 'name', 'target', 'download', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	abbr: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	acronym: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	area: [ 'alt', 'coords', 'href', 'nohref', 'shape', 'target', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	article: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	aside: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	audio: [ 'autoplay', 'controls', 'loop', 'muted', 'preload', 'src', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	b: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	bdo: [ 'dir', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	big: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	blockquote: [ 'cite', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	br: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	button: [ 'disabled', 'name', 'type', 'value', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	caption: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	cite: [ 'dir', 'lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	code: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	col: [ 'align', 'char', 'charoff', 'span', 'dir', 'valign', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	colgroup: [ 'align', 'char', 'charoff', 'span', 'valign', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	del: [ 'datetime', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	dd: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	dfn: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	details: [ 'align', 'dir', 'lang', 'open', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	div: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	dl: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	dt: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	em: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	fieldset: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	figure: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	figcaption: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	font: [ 'color', 'face', 'size', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	footer: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	h1: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	h2: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	h3: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	h4: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	h5: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	h6: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	header: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	hgroup: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	hr: [ 'align', 'noshade', 'size', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	i: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	img: [ 'alt', 'align', 'border', 'height', 'hspace', 'longdesc', 'vspace', 'src', 'usemap', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	ins: [ 'datetime', 'cite', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	kbd: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	label: [ 'for', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	legend: [ 'align', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	li: [ 'align', 'value', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	map: [ 'name', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	mark: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	menu: [ 'type', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	nav: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	p: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	pre: [ 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	q: [ 'cite', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	s: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	samp: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	span: [ 'dir', 'align', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	section: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	small: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	strike: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	strong: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	sub: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	summary: [ 'align', 'dir', 'lang', 'xml:lang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	sup: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	table: [ 'align', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'dir', 'rules', 'summary', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	tbody: [ 'align', 'char', 'charoff', 'valign', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	td: [ 'abbr', 'align', 'axis', 'bgcolor', 'char', 'charoff', 'colspan', 'dir', 'headers', 'height', 'nowrap', 'rowspan', 'scope', 'valign', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	textarea: [ 'cols', 'rows', 'disabled', 'name', 'readonly', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	tfoot: [ 'align', 'char', 'charoff', 'valign', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	th: [ 'abbr', 'align', 'axis', 'bgcolor', 'char', 'charoff', 'colspan', 'headers', 'height', 'nowrap', 'rowspan', 'scope', 'valign', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	thead: [ 'align', 'char', 'charoff', 'valign', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	title: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	tr: [ 'align', 'bgcolor', 'char', 'charoff', 'valign', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	track: [ 'default', 'kind', 'label', 'src', 'srclang', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	tt: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	u: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	ul: [ 'type', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	ol: [ 'start', 'type', 'reversed', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	var: [ 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
	video: [ 'autoplay', 'controls', 'height', 'loop', 'muted', 'poster', 'preload', 'src', 'width', 'aria-describedby', 'aria-details', 'aria-label', 'aria-labelledby', 'aria-hidden', 'class', 'id', 'style', 'title', 'role', 'data-*' ],
};
