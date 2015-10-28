// Create the tooltips only when document ready
 $(document).ready(function()
 {
     // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
     $('#heart').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             }
         });
     });
     $('#neoplasms').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             }
         });
     });
     $('#flu').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             }
         });
     });
     $('#diabetes').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             }
         });
     });
     $('#respiratory').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             }
         });
     });
 });
