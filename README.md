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

By default, rows consist of a total of 12 columns (this can be changed within ```_variables.scss```), therefore when defining columns for a row, they should total 12. The basic syntax is *SIZE-#COLS*. The available sizes are small (sm), medium (md), large (lg), and extra large (xl). An example usage is as follows:

```html
<div class="row">
    <div class="sm-6 lg-8 column">
        Column Content Here
    </div>
    <div class="sm-6 lg-4 column">
        Column Content Here
    </div>
</div>
```

The above example has both columns 6 wide on both small and medium screens and 8 and 4 wide respectively on large and extra large screens. The ```column``` class is added to each column to indicate that its a column and if it's the only class defined, it will default to a full row width column.

#### Screen Sizes

The default screen sizes are as follows:
- Small: 0 - 639px
- Medium: 640px - 1023px
- Large: 1024px - 1439px
- Extra Large: 1440px onwards

### Nesting

Rows can also be nested easily by defining another row + column pair within a parent column. For example:

```html
<div class="row">
    <div class="md-6 column">
        md-6 column
    </div>
    <div class="md-6 column">
        <div class="row">
            <div class="md-8 column">
                md-8 column
            </div>
            <div class="md-4 column">
                md-4 column
            </div>
        </div>
    </div>
</div>
```

To see it in action, take a look at the "Nested Grid" section of ```index.html```.

### Offsets

If you don't necessarily need columns taking up the entire row, you can offset columns as well. For example:

```html
<div class="row">
    <div class="sm-4 column">
        sm-4 column
    </div>
    <div class="sm-4 sm-offset-4 column">
        sm-4 sm-offset-4 column
    </div>
</div>
```

The above example has 2 columns, both 4 wide, however the second column offsets by 4 as well, so the end result would be a 4-width column on the left and a 4-width column on the right, with 4 column space in the middle.

To see it in action, take a look at the "Offsets" section of ```index.html```.

### Full-Width Rows

If you don't want a row to be capped by the max-width for whatever reason, you can simply add a ```.full-width``` class to the row to make it fill the width of the viewport. For example:

```html
<div class="row full-width">
    <div class="sm-6 md-4 lg-6 column">
        sm-6 md-4 lg-6 column
    </div>
    <div class="sm-6 md-4 lg-3 column">
        sm-6 md-4 lg-3 column
    </div>
    <div class="md-4 lg-3 column">
        md-4 lg-3 column
    </div>
</div>
```

To see it in action, take a look at the "Full Width" section of ```index.html```.

## Helpers

Construct comes with a number of helper classes to try and make life a little easier. The helpers currently available are:

[TO DO]

## Credits

- [Normalize.css](https://github.com/necolas/normalize.css/) for style normalization
