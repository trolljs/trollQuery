# trollQuery

Overrides some common jQuery functions.
For example:

```html
<h1>Important heading</h1>
<script>
    $('h1').text('Updating my important heading');
</script>
```

turns into this...

```html
<h1>Poop Important heading</h1>
```

## Supported functions

- `text()`
- `addClass()`
- `removeClass()`
- `prepend()`
- `append()`
