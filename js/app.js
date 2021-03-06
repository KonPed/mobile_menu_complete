//Problem: it looks groos in smaller browser width and small devices.
//Solution: To hide thr text links and swap them out with more appropriate navugation.

//1. Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function() {
  var href = $(this).attr("href");
  var text = $(this).text();
  //Create an option
  var $option = $("<option></option>");
  //append option to select
  $select.append($option);
  //option's text is the text of the link
  $option.text(text);
  //option's value is the href
  $option.val(href);
  //Deal with selected options depending on current page.
  if ($(this).parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
});

//Bind change listener to the select
$select.change(function() {
  //Go to the select's location
  window.location = $select.val();
});
//Modify CSS to hide links on small widths and show button and select
  //Also hides select and button on larger width and show's links
