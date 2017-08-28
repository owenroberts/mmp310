var books = [];

/* populate HTML data */
var addBook = function(book) {
	var div = $('<div>').addClass('book')
		.append( $('<h2>').text(book.title) )
		.append( $('<label>').text("Page:") )
		.append( 
			$('<input type="text">')
			.val(book.page)
			.on('change', function() {
				changePage(book.title, this.value);
			})
		);
	$('#container').append(div);
};

/* update page number */
var changePage = function(title, page) {
	console.log(title, page);
	for (var i = 0; i < books.length; i++) {
		if (books[i].title == title) {
			books[i].page = page;	
		}
	}
	localStorage.books = JSON.stringify(books);
};

/* read localStorage */
if (!localStorage.books) {
	$('#container').append( 
		$('<p>').text("No books yet :(") 
	);
} else {
	books = JSON.parse(localStorage.books);
	for (var i = 0; i < books.length; i++) {
		addBook(books[i]);	
	}
}


