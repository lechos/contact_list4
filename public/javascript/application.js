$(function() {
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  
   $('#showall').on('click', function() {

    $.get("/contacts", function(contacts) {
        contacts.forEach(function(contact) {
          $("#first_name").append(contact.first_name);
          $("#last_name").append(contact.last_name);
          $("#phone").append(contact.phone);
          $("#email").append(contact.email);
          //console.log(contact.first_name, contact.last_name, contact.phone, contact.email);
    //     var body = $("#all_contacts").find('tbody');
    //     var row = $('<tr>');
    //     var column = $('<td>');

    //     column.append(contact.first_name);
    //     row.append(column);
    //     body.append(row);
      
      // data has the list of contacts
      // Iterate through contacts and append in a table of contacts
      });
    });
  });
});
