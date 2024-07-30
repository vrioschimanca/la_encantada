jQuery(function($){
	
	$(document).ready(function() {
		if(cur_page_data.pageid == 1){
			$('.header_lower_row' ).each(function () {
				this.style.setProperty( 'position', 'relative', 'important');
			});			
		}
		jQuery('.counter-item').appear(function() {
			jQuery('.counter-number').countTo();
			jQuery(this).addClass('funcionando');
			console.log('funcionando');
		});
		
	}); 
	
});
