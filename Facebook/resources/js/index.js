function searchFocus(){
    var searchIcon = document.getElementsByClassName('search-icon')[0];
    searchIcon.style.display = 'none';

    var facebookIcon = document.getElementsByClassName('facebook-icon-link')[0];
    facebookIcon.style.display = 'none';

    var searchCancel = document.getElementsByClassName('search-cancel')[0];
    searchCancel.style.display = 'inline';

    var searchArea = document.getElementsByClassName('search-area')[0];
    searchArea.classList.add('specified-search-area');

    var searchArea = document.getElementsByClassName('search-area')[0];
    searchArea.style.display = 'inline';
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

    var searchArea = document.getElementsByClassName('search-area')[0];
    searchArea.classList.add('specified-search-area');
}
