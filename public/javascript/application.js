$(function() {
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  
   $('#showall').on('click', function() {

    $.get("/contacts", function(contacts) {
        contacts.forEach(function(contact) {
          $("#contact").append(contact.id).append(". ").append(contact.first_name).append(" ").append(contact.last_name).append(" ");
         // $("#last_name").append(contact.last_name).append("  ");
          // $("#phone").append(contact.phone).append("/");
          // $("#email").append(contact.email).append("/");

          console.log(contact.first_name, contact.last_name, contact.phone, contact.email);
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
