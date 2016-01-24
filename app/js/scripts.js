$(function () {
  $('.Nieuwste_eerst').on('click',function () {
    // $('.news_footer').slideToggle('slow');
    if($('.news_footer').hasClass('news_footer-dark')) {
      $('.news_footer').removeClass('news_footer-dark');
      $('.sidebar').removeClass('sidebar_dark');
    } else {
      $('.sidebar').addClass('sidebar_dark');
      $('.news_footer').addClass('news_footer-dark');
    }
    return false;
  });
  $('.dropdown-menu').on('click',function () {
    // $('.dropdown-menu-inner').slideToggle();
    if($('.dropdown-menu-inner').is(':hidden')) {
      $('.dropdown-menu-inner').slideDown();
      $('.dropdown-menu').removeClass('dropdown-menu--up');
      $('.dropdown-menu').addClass('dropdown-menu--down');
    } else {
      $('.dropdown-menu-inner').slideUp();
      $('.dropdown-menu').removeClass('dropdown-menu--down');
      $('.dropdown-menu').addClass('dropdown-menu--up');
    }
  });
  $('.icon-cancel').on('click',function () {
    if($('.timeline_info-block-delete').is(':hidden')) {
      $('.timeline_info-block-delete').css('display','flex');
    } else {
      $('.timeline_info-block-delete').css('display','none');
    }
    return false;
  });
});
