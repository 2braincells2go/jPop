# jPop

A very basic, to the point jQuery popup plugin.
Support for keyboard action:
	arrow keys: left and right
	ESC: close the popup window

Gallery and Youtube/Vimeo support is included.


Code preview:

$('.popup').jPop({
	type: "img",
	gallery: true,
	onClick: open,
	onClose: close
}); 

$('.popup-iframe').jPop({
	type: "iframe",
	gallery: true
});