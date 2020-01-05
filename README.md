# 301-practice-4

Q1) In an express server application, what does dotenv do
Dotenv is a simple way to allow you to create secret keys that your application needs to function and keep them from going public



Q2) What does the following code do:

function render( item ) {
  let markup = $('#item-template').html();
  let runTemplate = Handlebars.compile(markup);
  $("#list").append( runTemplate(markup) );
};


The function use a handlebars template  first of all it  gives the values to the id=item-template after that it  takes the content of it  and append it to the id=list.


Q3) What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put a rule with positioning?

Relative - the element is positioned relative to its normal position.
Absolute - the element is positioned absolutely to its first positioned parent.

we put this rule inside layouts file