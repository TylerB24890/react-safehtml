/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

/**
 * Internal dependencies
 */
import { Sanitize } from './src/sanitize';

/**
 * Output SafeHtml component
 * @return Sanitized and Parsed HTML into Gutenberg Blocks
 */
const SafeHTML = ( { html, allowedTags, allowedAtts } ) => {
	return parse( Sanitize( html, allowedTags, allowedAtts ) );
};

SafeHTML.propTypes = {
	html: PropTypes.string.isRequired,
	allowedTags: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.bool,
	] ),
	allowedAtts: PropTypes.oneOfType( [
		PropTypes.object,
		PropTypes.bool,
	] ),
};

export default SafeHTML;
