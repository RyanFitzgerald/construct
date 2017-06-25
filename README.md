# Construct

Construct is an ultra-simple, Sass-based grid boilerplate system that is mobile first (~7KB Minified). The goal is to only provide the absolute necessities and stay out of your way for the rest. Construct provides style normalization, a simple grid system, and a small number of helper classes to make life a little easier. Construct doesn't make any changes to page colours, fonts (except base size), backgrounds, form elements, or anything of the sort.

![Grid](https://user-images.githubusercontent.com/9112801/27518314-f93f9760-59aa-11e7-9cb1-12cee2b6e41b.png)

## Installation

Clone this repo or simply pull the compiled CSS file into any project you're working on.

```html
<link rel="stylesheet" type="text/css" href="path/to/construct.css">
```

## Usage

Construct works in terms of rows and columns, meaning each row has a series of nested columns that indicate their relative widths (more on the grid below). For example, the basic structure is as follows:

```html
<div class="row">
    <div class="sm-6 column">
        Column Content Here
    </div>
    <div class="sm-6 column">
        Column Content Here
    </div>
</div>
```

For more extensive examples on how to use the grid, take a look at the ```index.html``` within the project repo.

## Grid

The grid system works in terms of small, medium, large, and extra large screen sizes (defined within ```_variables.scss```). The grid works mobile-first, meaning if you apply a class at a smaller screen size, it will ripple up to larger screen sizes unless any of the larger screen sizes have their own class applied.

### Basic

[TO DO]

### Nesting

[TO DO]

### Offsets

[TO DO]

### Full-Width Rows

[TO DO]

## Helpers

Construct comes with a number of helper classes to try and make life a little easier. The helpers currently available are:

[TO DO]

## Credits

- [Normalize.css](https://github.com/necolas/normalize.css/) for style normalization
