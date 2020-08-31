/** Handle click in 'cart-continue-shopping-button.liquid' **/
function openProductsMegaNav(event) {
  event.preventDefault();
  event.stopPropagation();
  var $productsMenu = $($('a.navmenu-link[href="/products"')[0]);
  $productsMenu.trigger('mousedown.navmenu');
}