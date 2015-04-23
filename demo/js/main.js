//DOM ready
$(init);

/**
 * Initialize application
 */
function init()
{
    /**
     * Sample calls for the plugin
     * Note: All available options are shown in the very first call
     */
    $('.popup').jPop({
        type: "img",
        gallery: true,
        onClick: open,
        onClose: close
    });
    
    $('.popup-single').jPop({
        type: "img",
        gallery: false
    });
    
    $('.popup-iframe').jPop({
        type: "iframe",
        gallery: true
    });
}

/**
 * Sample function that is being called when the popup opens
 */
function open()
{
    alert("opened");
}

/**
 * Sample function that is being called when the popup closes
 */
function close()
{
    alert("closed");
}