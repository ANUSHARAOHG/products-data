$(document).ready(function() {
    // AJAX request to fetch the machine data
    $.ajax({
      url: 'machines.json', // Replace 'machines.json' with the path to your JSON file
      dataType: 'json',
      success: function(data) {
        // Iterate over each machine object and create a card
        $.each(data, function(index, machine) {
          var cardHtml = `
            <div class="product">
              <h3>Machine: ${machine.MACHINE}</h3>
              <p>Performance: ${machine.PERFORMANCE}</p>
              <p>Status: ${machine.STATUS}</p>
              <p>Running Since: ${machine['RUNNING SINCE']}</p>
              <p>Stopped Since: ${machine['STOPPED SINCE']}</p>
              <p>Parts Produced: ${machine['PARTS PRODUCED']}</p>
            </div>
          `;
          $('#machine-container').append(cardHtml);
        });
      },
      error: function() {
        alert('Failed to fetch machine data.');
      }
    });
  });
  
