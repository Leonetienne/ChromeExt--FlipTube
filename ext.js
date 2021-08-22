
// Injects the flip button if the player element is already loaded, and the button is not already there
function CheckInjectButton() {
    if (($('#youtube-flipper').length == 0) && ($('#info-strings').length > 0)) {

        // Inject button html
        $('#info-strings').append(`
            <span id="dot" class="style-scope ytd-video-primary-info-renderer"></span>
            <span id="youtube-flipper" style="cursor: pointer;">Flip player<span>
        `);

        // Register click handler for 'flip player' button
        $('#youtube-flipper').click(function() {
            // Fetch the youtube watch felxy
            youtubeFlexy = $('div#columns.style-scope.ytd-watch-flexy');

            // Toggle css attribute 'flex-direction' between 'row' and 'row-reverse'
            if (youtubeFlexy.css('flex-direction') == 'row')
                youtubeFlexy.css('flex-direction', 'row-reverse');
            else
                youtubeFlexy.css('flex-direction', 'row');
        });
    }
}

// Check if the player element has been loaded at a few timepoints
window.setTimeout(CheckInjectButton, 200);
window.setTimeout(CheckInjectButton, 500);
window.setTimeout(CheckInjectButton, 1000);
window.setTimeout(CheckInjectButton, 5000);
window.setTimeout(CheckInjectButton, 10000);
