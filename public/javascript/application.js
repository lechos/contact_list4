$(function() {
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  
   $('#showall').on('click', function() {

    $.get("/contacts", function(contacts) {
        contacts.forEach(function(contact) {
          console.log(contact.first_name);
          

      // data has the list of contacts
      // Iterate through contacts and append in a table of contacts
      });
    });
  });
});
