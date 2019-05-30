<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head();?>
    <title> 
        <?php bloginfo('name'); ?> |
        <?php is_front_page() ? bloginfo('description') : wp_title(); ?>
    </title>
</head>
<?php 
	
?>
	<body <?=body_class();?>>
	<div id="online-purchases" class="modal">
      <div class="modal-content">
         <div id="close" class='close-modal'>&times;</div>
         <div class="body-modal">
             Online purchase will be available soon.
         </div>    
      </div>
    </div>
	<div class="overlay-page"></div>
	<div class="nav-top">
		<!-- <header>
		</header> -->
		<a class="active menu-brand">
			<span class="toggle-button">
		        	<div class="menu-bar menu-bar-top"></div>
		        	<div class="menu-bar menu-bar-middle"></div>
		        	<div class="menu-bar menu-bar-bottom"></div>
	        </span>
    	</a>
    	<div class="center-logo">
    		<a href="" class="link-logo"><img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/logo.png" alt=""></a>
    	</div>
    	<div class="icons-links">
    		<ul >
	    		<li><a href="#"><i class="fa fa-search"></i></a></li>
	    		<li><a href="<?=get_home_url()?>/login"><i class="fa fa-user"></i></a></li>
	    		<li class="link-to-product" ><a href="#online-purchases"><i class="fa fa-shopping-cart"></i></a></li>
				<?php if ( is_user_logged_in() ){?>
	    		<li class="link-to-product" ><a href="<?php echo esc_url( wp_logout_url(get_home_url()."/login") ); ?>">	<i class="fa fa-power-off" aria-hidden="true"></i></a></li>
				<?php } ?>
				
	    	</ul>
    	</div>
		<div class="topnav">
			<div class="menu-wrap">
				<div class="menu-sidebar">
				<?php 
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'container'  => 'nav',
						'container_class' => 'main-nav',
						'menu_class' => 'sidebar-menu',
						'menu_id' => 'vuniks_menu',
					) );
			 	?>
				</div>
			</div>
		</div>	
	</div>
	<div class="wrapper">
		