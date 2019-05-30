<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

 ?>
<?php
global $post;
$postID = $post->ID;
?>

 <?php get_header();?>


<?php 
	$lead_text 	=  get_post_meta( $postID, 'custom_editor', true ) ;
	if(!empty($lead_text)){
?>
<div class="product-list" id="product-list">
   <!-- Swiper -->
   <div class="container">
        <div class="container-inner">
          
            <div class="row vuniks-product">
                <div class="column">
                  
                </div>
                <div class="column">
                    <?php 
						
					
						
					  	echo $lead_text;
					?>
                </div>
            </div>
			<div id="more-content" class="nosection" style="width: 100%;margin-bottom: 130px;" >
					
			</div >
           
        </div>
    </div>

</div>
<?php } ?>
<?php 
	$image_back = get_post_meta(get_the_ID() , "background-image-page", true);

?>

<div class="page-content-section" style='<?=!empty($lead_text)?"":"margin-top:4%;"; ?><?=$image_back==""?"":"background:url(".$image_back.");"; ?>' >
    <div class="row">
        <div class="column">
		
		
          <?php 
		
				$content_post = get_post($postID);
				$content = $content_post->post_content;
				$content = apply_filters('the_content', $content);
				$content = str_replace(']]>', ']]&gt;', $content);
				echo $content;
					
					?>
        </div>
        
    </div>
</div>


<?php get_footer();?>
