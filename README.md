# react-safehtml
A React component for rendering HTML safely. An alternative to dangerouslySetInnerHTML.  

The allowed HTML elements and attributes is a direct port of the WordPress `wp_kses_post()` attributes found here: https://core.trac.wordpress.org/browser/trunk/src/wp-includes/kses.php

## Usage

Instead of using the unsanitized `dangerouslySetInnerHTML`:
```javascript
export default function SinglePost({ post }) {
  const { title, content } = post;

  return (
    <article className="blog-post">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
```

Use `safeHTML` in it's place:
```javascript
import SafeHTML from 'react-safehtml';

export default function SinglePost({ post }) {
  const { title, content } = post;

  return (
    <article className="blog-post">
      <h1>{title}</h1>
      <div>
        {SafeHTML(content)}
      </div>
    </article>
  );
}
```

## Arguments
- `content {string}` - The HTML content to be sanitized.
- `allowedTags {array}` - Array of allowed HTML tags.
- `allowedAtts {object}` - Object containing arrays of allowed attributes for each tag.

 ```javascript
 // Allow only anchor links
 const allowedTags = [ 'a' ];
 
 // Allow only href and target attributes
 const allowedAtts = { a: [ 'href', 'target' ] };
 
 return SafeHTML( content, allowedTags, allowedAtts );
 ```
