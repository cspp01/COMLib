( function() {
    function Nav() {
        this.navbar = $( '.navbar.nav-response' ); // 导航栏仓库
        this.mobileMenu = this.navbar.find( '.mobile-menu' ); // 移动端菜单按钮
        this.menu = this.navbar.find( '.menu' ); // 菜单
        this.on = false;  // 移动端菜单栏状态是否为显示
        this.lis = this.navbar.find( '.menu>ul>li' ); // 所有菜单项li
        this.liUls = this.lis.has( 'ul' ); // 包含下级菜单的li
        this.BH = $('body,html'); // body html
    }
    Nav.prototype = {
        'init' : function() {
            this.evenInit( this );
            this.domInit();
        },
        'domInit' : function() {
            this.liUls.find( 'a' ).addClass( 'dropDownBtn' )
        },
        'evenInit' : function( _this ) {
            // 绑定移动端菜单按钮点击事件
            _this.mobileMenu.click( function() {
                _this.showHide();
                _this.dropUp( _this.liUls );
            } );
            // 绑定下拉菜单点击事件
            _this.liUls.click( function() {
                _this.dropDown( $( this ) );
            } );
            // 给所有没有子级菜单的菜单项添加隐藏事件
            _this.lis.not( _this.liUls ).click( function() {
                _this.dropUp( _this.liUls );
            } )
        },
        // 移动端菜单栏显示隐藏
        'showHide' : function() {
            if( !this.on ) {
                // 移动端菜单按钮增加active来进行按钮css动画
                this.mobileMenu.addClass( 'active' );
                // 移动端菜单栏增加class.show来显示菜单栏，并且使得通过show来寻找的effect-1|2|3|4|5的动画效果出现
                this.menu.addClass( 'show' );
                // 禁止滚动条
                this.BH.addClass( 'over' );
                // 如果菜单的显示效果为effect-4，则给body加上class,e-4使得body整体向左移动
                this.menu.hasClass( 'effect-4' ) && $('body').addClass( 'e-4' );
                this.navbar.hasClass( 'fixed' ) && this.menu.hasClass( 'effect-4' ) && this.navbar.addClass( 'r-s' );
                // 把菜单栏显示状态变为true,表示显示。
                this.on = true;
            } else {
                this.mobileMenu.removeClass( 'active' );
                this.menu.removeClass( 'show' );
                this.BH.removeClass( 'over' );
                this.menu.hasClass( 'effect-4' ) && $('body').removeClass( 'e-4' );
                this.navbar.hasClass( 'fixed' ) && this.menu.hasClass( 'effect-4' ) && this.navbar.removeClass( 'r-s' );
                this.on = false;
            }
        },
        // 下拉菜单
        'dropDown' : function( $this ) {
            if( $this.attr( 'ison' ) == 'false' || !$this.attr( 'ison' ) ) {
                this.liUls.attr( 'ison', false ).find( 'ul' ).removeClass( 'drop-down' );
                $this.find( 'ul' ).addClass( 'drop-down' );
                $this.find( 'a' ).removeClass( 'dropDownBtn' ).addClass( 'dropUpBtn' );
                $this.attr( 'ison', true );
            } else {
                this.dropUp( $this );
            }
        },
        // 隐藏下拉菜单
        'dropUp' : function( $this ) {
            $this.find( 'ul' ).removeClass( 'drop-down' );
            $this.attr( 'ison', false );
            $this.find( 'a' ).removeClass( 'dropUpBtn' ).addClass( 'dropDownBtn' );
        }
    };
    var comlib_nav = new Nav();
    comlib_nav.init();
} )();
