// Create the tooltips only when document ready
 $(document).ready(function()
 {
     // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
     $('#heart').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             },
             position: {
                 my: 'top right',  // Position my top left...
             },
             style: {
                classes: 'qtip-blue qtip-rounded'
              }
         });

     });

     $('#neoplasms').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             },
             position: {
                 my: 'top right',  // Position my top left...
             },
             style: {
                classes: 'qtip-blue qtip-rounded'
              }
         });

     });

     $('#flu').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             },
             position: {
                 my: 'top right',  // Position my top left...
             },
             style: {
                classes: 'qtip-blue qtip-rounded'
              }
         });

     });

     $('#diabetes').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             },
             position: {
                 my: 'top right',  // Position my top left...
             },
             style: {
                classes: 'qtip-blue qtip-rounded'
              }
         });

     });

     $('#respiratory').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             },
             position: {
                 my: 'top right',  // Position my top left...
             },
             style: {
                classes: 'qtip-blue qtip-rounded'
              }
         });
     });

 });
