jQuery(function($){
	$("form#template").each(function(){
		var form = $(this);
		var filename = form.find("input[name=\"file\"]").val();
		
		var extension = filename.substring(filename.lastIndexOf(".") + 1);
		
		var modes = {
			php: "application/x-httpd-php",
			css: "text/css",
			js: "text/javascript"
		}
		
		var mode = modes[extension];
		
		if(!mode){
			return;
		}
		
		var textarea = $("#newcontent");
		
		var editor = CodeMirror.fromTextArea(textarea[0], {
			lineNumbers: true,
			matchBrackets: true,
			mode: mode,
			indentUnit: 8,
			indentWithTabs: true,
			enterMode: "keep",
			tabMode: "shift"
		});
		
		var wrapperElement = $(editor.getWrapperElement());
		
		wrapperElement.insertBefore(form);
		
		var gutterWidth = wrapperElement.find("div.CodeMirror-gutter").width();
		
		wrapperElement.find("div.CodeMirror-lines").children("div").css("margin-left", gutterWidth + "px");
		
		var scrollElement = wrapperElement.find("div.CodeMirror-scroll");
		
		scrollElement.scrollTop($("#scrollto").val());
		
		textarea.css({
			position:"absolute",
			left:"-9999em",
			lineHeight:"1em",
			fontSize:"inherit",
			height:scrollElement.height() + "px"
		}).show();
		
		$(document).keydown(function(event) {
			if (!(event.which == 83 && event.ctrlKey) && !(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;
			
			textarea.scrollTop(scrollElement.scrollTop()); // wordpress preserves scroll value
			
			form.find("input[type=\"submit\"]").click();
			
			event.preventDefault();
			return false;
		});
	});
});