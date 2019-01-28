---
layout: main
title: MMP 310 Public Pad
---
<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
<!-- CodeMirror -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css" />
<!-- Firepad -->
<link rel="stylesheet" href="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.css" />
<script src="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.min.js"></script>
<style>
	html, body { height: 100%; }
	.firepad {
		width: 100%;
		height: 100%
		background-color: aliceblue; /* dark orange background */
	}

	/* Note: CodeMirror applies its own styles which can be customized in the same way.
		To apply a background to the entire editor, we need to also apply it to CodeMirror. */
	.firepad .CodeMirror {
		position: static;
		top: 0;
		padding: 0;
	}
	.powered-by-firepad { display: none; }
	.firepad-toolbar {
		padding: 0;
		height: auto;
		line-height: 2.5;
	}
	a.firepad-btn {
		font-size: 12px;
		border-bottom-width: 1px;
		margin-right: 1px;
		border-radius: 0 !important;
	}
	a.firepad-btn:hover { 
		background-color: #D1E5F7;
		border-color: #9b26ff;
	}
	a.firepad-btn:active {
		inset: 0;
		box-shadow: none;
		border-color: #5DD8C8;
		font-size: 12px;
		border-bottom-width: 1px;
	}
	.firepad-btn-group { margin: 0; }
</style>

<div id="firepad"></div>
<script>

	function init() {
		console.log('init')
		// Initialize Firebase.
		// TODO: replace with your Firebase project configuration.
		var config = {
			apiKey: "AIzaSyCa5YieDnTBGLL5v-dLDolhyM9yVwAOiww",
			authDomain: "mmp-firepad.firebaseapp.com",
			databaseURL: "https://mmp-firepad.firebaseio.com/"
		};
		firebase.initializeApp(config);

		// Get Firebase Database reference.
		var firepadRef = firebase.database().ref('pads').child('310');

		// Create CodeMirror (with lineWrapping on).
		var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true });

		// Create Firepad (with rich text toolbar and shortcuts enabled).
		var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
			richTextShortcuts: true,
			richTextToolbar: true,
			defaultText: 'Hello, World!'
		});

		const colors = ['#f0f', '#ff0', '#00f', '#0f0'];
		// firepad.setUserColor(colors[Math.round(Math.random() * colors.length)]);
	}
	window.addEventListener('load', init);
</script>
