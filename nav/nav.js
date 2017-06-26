( function() {
    function Nav() {
        this.navbar = $( '.navbar.nav-response' );
        this.mobileMenu = this.navbar.find( '.mobile-menu' );
        this.menu = this.navbar.find( '.menu' );
        this.on = false;
        this.lis = this.navbar.find( '.menu>ul>li' ).has( 'ul' ); // 包含下级菜单的li
        this.ison = false;
    }
    Nav.prototype = {
        'init' : function() {
            this.evenInit( this );
        },
        'evenInit' : function( _this ) {
            _this.mobileMenu.click( function() {
                _this.showHide();
            } );
            _this.lis.click( function() {
                _this.dropDown( $( this ) );
            } )
        },
        // 移动端菜单栏显示隐藏
        'showHide' : function() {
            if( !this.on ) {
                this.mobileMenu.addClass( 'active' );
                this.menu.addClass( 'show' );
                this.menu.hasClass( 'effect-4' ) && $('body').addClass( 'e-4' );
                this.on = true;
            } else {
                this.mobileMenu.removeClass( 'active' );
                this.menu.removeClass( 'show' );
                this.menu.hasClass( 'effect-4' ) && $('body').removeClass( 'e-4' );
                this.on = false;
            }
        },
        'dropDown' : function( $this ) {
            if( !this.ison ) {
                $this.find( 'ul' ).addClass( 'drop-down' );
                this.ison = true;
            } else {
                $this.find( 'ul' ).removeClass( 'drop-down' );
                this.ison = false;
            }
        }
    };
    var comlib_nav = new Nav();
    comlib_nav.init();
} )();
