stockWidget
===========

Ensure you've got jQuery loaded.
Create a div with id "stockWidget" where you'd like this widget.
Generally a good idea to load the script within a ready function.
You can see this in the stocks.html example.

The stockWidget function accepts to properties as an object.

firstly symbol, which must corrilate to a stock symbol, include CASE.

secondly behavior, which corrilates to the Marquee behavior and defaults to 'scroll'.

thirdly are the tags you want to report on. This is an array of Case Sensitive strings for each tagName returned.
tags can accept 'default' which will load a default set of useful tags.
View the comment in the stockWidget.js to see all available tags.