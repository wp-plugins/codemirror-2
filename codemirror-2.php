<?php
/*
Plugin Name: Codemirror 2 editor
Version: 0.1
Author: Björn Ali Göransson
Author URI: http://www.bedr.se/
*/

add_action('admin_enqueue_scripts', function(){
	wp_enqueue_script("codemirror_1", "/wp-content/plugins/codemirror-2/scripts/codemirror-compressed.js", array("jquery"));
	wp_enqueue_script("codemirror_2", "/wp-content/plugins/codemirror-2/scripts/main.js", array("jquery"));
	wp_enqueue_style("codemirror_1", "/wp-content/plugins/codemirror-2/styles/codemirror.css");
	wp_enqueue_style("codemirror_2", "/wp-content/plugins/codemirror-2/styles/main.css");
});