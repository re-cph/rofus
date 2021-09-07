jQuery(function($) {
    function detectWebm () {
        var element = $('#video');
        if (!element) {
            return;
        }
        var response = element.get(0).canPlayType('video/webm; codecs="vp9, vorbis"');
        console.log(
            response,
            element.get(0).canPlayType('video/webm; codecs="vp8, vorbis"'),
            element.get(0).canPlayType('video/webm; codecs="vp9"'),
            element.get(0).canPlayType('video/webm; codecs="vp8"')
        );
        return response === "probably";
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
            element.attr('src', videoSrc);
        }
    }
    
    $(window).resize(handleResize);

    handleResize();

    // if (
    //     navigator.userAgent.toLowerCase().indexOf("safari") > -1 &&
    //     navigator.userAgent.toLowerCase().indexOf("chrome") < 0
    // ) {
    //     var element = $('#video');
    //     if (!element) {
    //         return;
    //     }
    //     element.get(0).play();
    // }
});