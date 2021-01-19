function searchFocus(){
    var searchIcon = document.getElementsByClassName('search-icon')[0];
    searchIcon.style.display = 'none';

    var facebookIcon = document.getElementsByClassName('facebook-icon-link')[0];
    facebookIcon.style.display = 'none';

    var searchCancel = document.getElementsByClassName('search-cancel')[0];
    searchCancel.style.display = 'inline';

    var searchArea = document.getElementsByClassName('search-area')[0];
    searchArea.classList.add('specified-search-area');

    var searchArea = document.getElementsByClassName('search-area-extend')[0];
    searchArea.style.display = 'block';
    searchArea.style.marginLeft = '0px';
}
function searchBlur(){
    var searchIcon = document.getElementsByClassName('search-icon')[0];
    searchIcon.style.display = 'inline';

    var facebookIcon = document.getElementsByClassName('facebook-icon-link')[0];
    facebookIcon.style.display = 'flex';

    var searchCancel = document.getElementsByClassName('search-cancel')[0];
    searchCancel.style.display = 'none';

    var searchArea = document.getElementsByClassName('search-area')[0];
    searchArea.classList.remove('specified-search-area');

    var searchArea = document.getElementsByClassName('search-area-extend')[0];
    searchArea.style.display = 'none';
    searchArea.style.marginLeft = '10px';
}
$(document).click(function(event){
    var target = $(event.target);
    if(target.is('#accounts') || target.is('.fa-user-circle-o'))
        $('#account-header').css('display', 'inline');
    else $('#account-header').css('display', 'none');
})
$('.common-item').click(function(event){
    var target = $(event.target);
    if(!target.attr('class').split(/\s+/).includes('dropdown-item')){
        var currentActive = $('.active');
        currentActive.removeClass('active');
        currentActive.addClass('item');
        
        target.addClass('active');
        target.removeClass('item');
    }
})
$('.dropdown-item').click(function(){
    
})
