jQuery(function($) {
    function detectWebm () {
        var element = $('#video');
        if (!element) {
            return;
        }
        return true;
        return element.get(0).canPlayType('video/webm; codecs="vp8, vorbis"') === "probably";
    }

    function selectVideo(width) {
        var path = '/videos/';
        var resolution = 1920;
        var ext =  detectWebm() ? '.webm' : '.mp4';
        if (width < 660) {
            resolution = 660;
        } else if (width <= 1024) {
            resolution = 1024;
        } else if (width <= 1440) {
            resolution = 1440;
        } else {
            resolution = 1920;
        }
        return path + resolution + ext;
    }

    function handleResize () {
        var element = $('#video');

        if (element) {
            const videoSrc = selectVideo($(window).width());
            console.log(videoSrc);
            element.attr('src', videoSrc);
        }
    }
    
    $(window).resize(handleResize);

    handleResize();
});