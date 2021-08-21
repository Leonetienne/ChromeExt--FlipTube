window.setTimeout(function() {
    // Inject 'flip player' button
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

}, 1000);
