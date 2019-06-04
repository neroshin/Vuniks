<?php

function custom_enqueue_custom_stylesheets() {
    wp_enqueue_script( 'jquery' ,'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js' ,true );
    wp_enqueue_script( 'jquery-1' ,'https://code.jquery.com/jquery-3.1.1.min.js' ,true );
    wp_enqueue_script( 'sidebar' ,get_template_directory_uri().'/js/sidebar-menu.js' ,true);
    // wp_enqueue_script( 'easy-autocomplete-js' ,get_template_directory_uri().'/js/jquery.easy-autocomplete.js' ,true);
    wp_enqueue_script( 'swiper-js' ,get_template_directory_uri().'/js/swiper.js' ,true);
    wp_enqueue_script( 'popup-js' ,get_template_directory_uri().'/js/popup.js' ,true);
    wp_enqueue_script( 'stacked-pagejs' ,get_template_directory_uri().'/js/jquery.stacked-strips.js' ,true);
    wp_enqueue_script( 'mobile-responsive-js' ,get_template_directory_uri().'/js/mobile-responsive-js.js' ,true);
    wp_enqueue_script( 'demo-js' ,get_template_directory_uri().'/js/demo.js' ,true);
    wp_enqueue_script( 'custom-script-vurniks', get_template_directory_uri().'/js/script.js' ,true , 1);
    wp_localize_script('custom-script-vurniks', 'myScript_ajax', array(
   'ajaxurl' => admin_url( 'admin-ajax.php' )
    ));
    wp_enqueue_style( 'custom-style-vurniks', get_template_directory_uri().'/css/style.css' ,true);
    wp_enqueue_style( 'swiper', get_template_directory_uri().'/css/swiper.css' ,true);
    wp_enqueue_style( 'sidebar', get_template_directory_uri().'/css/sidebar-menu.css' ,true);
    // wp_enqueue_style( 'icons', get_template_directory_uri().'/css/iconoo.min.css' ,true);
    wp_enqueue_style( 'popup-css' ,get_template_directory_uri().'/css/popup.css' ,true);
    // wp_enqueue_style( 'easy-autocomplete', get_template_directory_uri().'/css/easy-autocomplete.css' ,true);
    // wp_enqueue_style( 'easy-autocomplete-theme', get_template_directory_uri().'/css/easy-autocomplete-theme.css' ,true);
    wp_enqueue_style( 'stacked-page', get_template_directory_uri().'/css/stack-page.css' ,true);
    wp_enqueue_style( 'normalize','https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css' ,true);
    wp_enqueue_style( 'line-awesome','https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css' ,true);
    $bool = is_woocommerce();
	
	
	if($bool ){
		wp_enqueue_style( 'woo-style', get_template_directory_uri().'/css/woo-style.css' ,true);
	}
}
add_action( 'wp_enqueue_scripts', 'custom_enqueue_custom_stylesheets');


add_action( 'after_setup_theme', 'register_my_menu' );
function register_my_menu() {
  register_nav_menu( 'primary', __( 'Primary Menu', 'theme-slug' ) );
}

function wp_nav_menu_attributes_filter($var) {
    return is_array($var) ? array_intersect($var, array('current-menu-item')) : '';
}
add_filter('nav_menu_css_class', 'wp_nav_menu_attributes_filter', 100, 1);
add_filter('nav_menu_item_id', 'wp_nav_menu_attributes_filter', 100, 1);
add_filter('page_css_class', 'wp_nav_menu_attributes_filter', 100, 1);



// function enquiry_contact_admin(){
//     if (isset($_POST['btn-submit'])) {
//         echo $_POST['btn-submit'];
//         $sample= $_POST['email-address'];
//         $to = 'hasamu@heximail.com';
//         $message = $sample.'has enquire to your website';
//         $subject = 'Sample Subject';
//         $headers = 'From: VuNiks <wordpress@vuniks.com>'."\r\n";

//         //if( $subject & $message) {
//             wp_mail($to, $subject, $message, $headers );
//        // }
//     }
    

//     die();
// }

// add_action('wp_ajax_nopriv_enquiry_contact_admin', 'enquiry_contact_admin');
// add_action('wp_ajax_enquiry_contact_admin', 'enquiry_contact_admin');


/*function enquiry_contact_person(){
     if(isset($_POST['btn-submit'])) :
       $to = $_POST['email-address'];
    endif;
    $message = 'To go futher , Please click this link to enquiry form';
    $subject = 'Enquiry Form';
    $headers = 'From: VuNiks <wordpress@vuniks.com>'."\r\n";

    if( $subject & $message) {
        wp_mail($to, $subject, $message, $headers );
    }

      die();
}
add_action('wp_ajax_nopriv_enquiry_contact_person', 'enquiry_contact_person');
add_action('wp_ajax_enquiry_contact_person', 'enquiry_contact_person');*/
function arphabet_widgets_init() {

    register_sidebar( array(
        'name' => 'Home right sidebar',
        'id' => 'home_right_1',
        'before_widget' => '<div>',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="rounded">',
        'after_title' => '</h2>',
    ) );
}
add_action( 'widgets_init', 'arphabet_widgets_init' );

add_action( 'add_meta_boxes', 'page_lead_text_metabox' );
//Lead Text Metabox
function page_lead_text_metabox(){
	add_meta_box(
			'page_lead_text', //Unique ID
			esc_html__( 'Head Title and Description', 'I11L' ), //Title
			'page_lead_text_caption_metaboxes', //Callback function
			'page', //for pages
			'normal', //Context
			'default' //priority
			);
	add_meta_box(
		
			
			'background_image_page',
		esc_html__( 'Background Image Page', 'I11L' ),
		'func_setting_body_background',
		'page',
		'side'
			);
}

function page_lead_text_caption_metaboxes( $object, $box ) {

	wp_nonce_field( basename( __FILE__ ), 'page_lead_text_caption_metaboxes' );

	$lead_text 	= esc_attr( get_post_meta( $object->ID, 'custom_editor', true ) );
	
	wp_editor ( 
          	$lead_text  , 
          	'custom_editor', 
          	array ( "media_buttons" => true ) 
      );
	
}



function func_setting_body_background( $object, $box ) {

	wp_nonce_field( plugin_basename(__FILE__), 'wp_custom_attachment_nonce' );
	 wp_nonce_field(basename(__FILE__), "meta-box-nonce");

    ?>
 
		<label for="background-image-page">URL:</label>
		<input name="background-image-page" type="text" value="<?php echo get_post_meta($object->ID, "background-image-page", true); ?>">
	<?php
	
}

//This function saves the data you put in the meta box
 function custom_editor_save_postdata($post_id) {
        
    if( isset( $_POST['custom_editor_nonce'] ) && isset( $_POST['portfolio'] ) ) {

        //Not save if the user hasn't submitted changes
        if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
        } 

        // Verifying whether input is coming from the proper form
        if ( ! wp_verify_nonce ( $_POST['custom_editor_nonce'] ) ) {
        return;
        } 

        // Making sure the user has permission
        if( 'post' == $_POST['portfolio'] ) {
               if( ! current_user_can( 'edit_post', $post_id ) ) {
                    return;
               }
        } 
    } 

    if (!empty($_POST['custom_editor'])) {
    
        $data = $_POST['custom_editor'];
        update_post_meta($post_id, 'custom_editor', $data);
        
    }
	 if (!empty($_POST['background-image-page'])) {
    
        $data = $_POST['background-image-page'];
        update_post_meta($post_id, 'background-image-page', $data);
        
    }
 }
 
add_action('save_post', 'custom_editor_save_postdata');


add_shortcode( 'wc_login_form_bbloomer', 'bbloomer_separate_login_form' );
  
function bbloomer_separate_login_form() {
	
	wp_enqueue_style( 'login-style-page', get_template_directory_uri().'/css/login-style.css' ,true);
	
	wp_enqueue_script( 'login-script-custom',  get_template_directory_uri().'/js/login-script.js' ,true);
	
	wp_localize_script( 'login-script-custom', 'ajax_login_object', array( 
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'redirecturl' => home_url()."/my-account/",
			'security' => wp_create_nonce('ajax-login-nonce-vuniks'),
			'loadingmessage' => __('Sending user info, please wait...'),
			
		));
	 
if ( is_admin() ) return;

ob_start();
if ( ! is_user_logged_in() ) {
     
	 
	 
	 
	 get_template_part( 'templates/login-page-template', 'page' );

   // END OF COPIED HTML
   // ------------------
     
}
else{
	 echo '<script type="text/javascript">
           window.location = "'.get_home_url()."/my-account/".'"
      </script>'; 
	header("Location: ".get_home_url()."/my-account/", true, 301);
	exit;
}
return ob_get_clean();
}

function cookiesAfterlogin( $user_login, $user ) {
	
    setcookie("trigger_modalcode", true, time()+3600 ,  "/"); 
}
add_action('wp_login', 'cookiesAfterlogin', 10, 2);

add_action('wp_footer', function(){
	
	if(isset($_COOKIE["trigger_modalcode"]) && is_user_logged_in()){
		
			echo '<script type="text/javascript">setTimeout(function() {if(getCookie("trigger_modalcode") != 0){$(document).ready(function(){$("i.fa.fa-scissors").click();})}},5000);</script>';
		
	}
} , 10);

add_action( 'wp_ajax_nopriv_ajax_login', 'ajax_login' );
function ajax_login(){
	
    // First check the nonce, if it fails the function will break
    check_ajax_referer( 'ajax-login-nonce-vuniks', 'security' );

    // Nonce is checked, get the POST data and sign user on
    $info = array();
    $info['user_login'] = $_POST['username'];
    $info['user_password'] = $_POST['password'];
    $info['remember'] = true;

    $user_signon = wp_signon( $info, false );
    if ( is_wp_error($user_signon) ){
        echo json_encode(array('loggedin'=>false, 'message'=>__('Wrong username or password.')));
    } else {
        echo json_encode(array('loggedin'=>true, 'message'=>__('Login successful, redirecting...')));
    } 

    die();
}

function wpse319485_add_woocommerce_support() {
	$bool = is_woocommerce();
	
	
	 add_theme_support( 'woocommerce' );
    
}
add_action( 'after_setup_theme', 'wpse319485_add_woocommerce_support' );

/**
 * Filter the cart template path to use our cart.php template instead of the theme's
 */
function csp_locate_template( $template, $template_name, $template_path ) {
	 $basename = basename( $template );
	 if( $basename == 'simple.php' ) {
			$template = trailingslashit( plugin_dir_path( __FILE__ ) ) . 'woocommerce/add-to-cart/simple.php';
	 }
	if( $basename == 'single-product.php' ) {
			$template = trailingslashit( plugin_dir_path( __FILE__ ) ) . 'woocommerce/single-product.php';
	 }
	  if( $basename == 'price.php' ) {
			$template = trailingslashit( plugin_dir_path( __FILE__ ) ) . 'woocommerce/single-product/price.php';
	 } 
 return $template;
}
add_filter( 'woocommerce_locate_template', 'csp_locate_template', 10, 3 );


//don't copy above opening tag if pasting into functions.php
//Add in text after price to certain products
function add_message_after_price_page( $price ) {
	if ( ! is_admin() ) {
     global $product;
	$weight_unit = get_post_meta( $product->get_id(), '_unit', true);

		$textafter = number_format($product->get_weight()*1000)." ml / ".number_format($product->get_weight()*35.274)." oz."; //add your text
		return $price . '<br /><span class="price-description">' . $textafter . '</span>';
	} else {
		 
	}
	
	
}
add_filter( 'woocommerce_get_price_html', 'add_message_after_price_page' );


function wc_body_class_page( $c ) {

    global $post;

   if( isset($post->post_content) && has_shortcode( $post->post_content, 'products' ) ) {
        $c[] = 'wc-shortcode-loop';
    }
    return $c;
}
add_filter( 'body_class', 'wc_body_class_page' ); 

