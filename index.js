$(document).ready(function() {


	var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
	$.getJSON(url, function(data) {
		var currentQoute = '';
		var Allqoute = data.hits;
		// console.log(Allqoute[0].title);
		

		$('.check').on('click', function(){
			
			 currentQoute = Allqoute[Math.ceil(Math.random()*  Allqoute.length)];
			console.log(currentQoute);
			$('.qouteBody').hide();
			$('.qouteBodyLink').html('currentQoute.title').attr('a', currentQoute.url).attr('href', '_blank');
			$('.qouteAuthor').html(currentQoute.author).addClass('animated shake');
			$('.date').html(currentQoute.created_at).addClass('animated shake');
			$('.tweetQoute').attr('disabled', false).attr('href', currentQoute.url);
			



		});
	})

	
}) 

