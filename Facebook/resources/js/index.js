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
function headerClick(){
    var extendBox = document.getElementById('account-header');
    extendBox.style.display = 'inline';
}
function headerMouseOver(){
    var extendBox = document.getElementById('account-header');
    extendBox.style.display = 'none';
}
