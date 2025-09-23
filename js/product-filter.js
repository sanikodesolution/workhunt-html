howMany = 12;
listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.wrapper');

listButton.on('click',function(){
    
  gridButton.removeClass('on');
  listButton.addClass('on');
  wrapper.removeClass('grid').addClass('list');
  
});

gridButton.on('click',function(){
    
  listButton.removeClass('on');
  gridButton.addClass('on');
  wrapper.removeClass('list').addClass('grid');
  
});

$('#filter-btn').on('click', function() {
    $('#shop-page-area').toggleClass('active');                
    // Update button text
    if ($('#shop-page-area').hasClass('active')) {
        $(this).text('SHOW FILTERS');
    } else {
        $(this).text('HIDE FILTERS');
    }
});

$('#filter-btn2').on('click', function() {
    $('#shop-page-area').toggleClass('active');                
    // Update button text
    if ($('#shop-page-area').hasClass('active')) {
        $(this).text('SHOW FILTERS');
    } else {
        $(this).text('SHOW FILTERS');
    }
});