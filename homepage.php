<?php
/**
* Template Name: Home Page Dublicate
*
* @package WordPress
* @subpackage vuniks_theme
* 
*/
 ?>
<?php

$email = $_POST['email-address'];
$subject = "Enquiry : Received Mail from '".$email."'";
$to = "isagani.webdev@gmail.com";
$message = $email;
// $headers = 'MIME-Version: 1.0'."\r\n";
// $headers .=  "Content-type:text/html;charrset=UTF-8"."\r\n";
$headers = 'From: VuNiks <wordpress@vuniks.com>'."\r\n";

if( $subject & $message) {
    wp_mail($to, $subject, $message, $headers );
}
?>

 <?php get_header();?>


<div class="">
    <section class="scroll-effect" id="slide-1">
        <video autoplay loop autobuffer muted playsinline id="video_slider">
          <source src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/Vunik-main-video.mp4" type="video/mp4">
          <source src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/Vunik-main-video.webm" type="video/webm">
          <source src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/Vunik-main-video.m4v">
        </video>
        <div id="pol">
            <h1>True beauty is the beauty from within</h1>
            <hr class="small">
            <h3>100% Natural Ingredients</h3>
            <a href="#science-vuniks" class="btn-link">Explore</a>
        </div>
        <a class="scroll" href="#our-products" ><span></span></a>
    </section>
<section class="scroll-effect" id="our-products">
        <div class="pol-bg">
			<div id="main-content-slider" class="class_grid">
				<div id="pol-left">
					<h1>Our Products</h1>
					<p>Most women would dream for a flawless complexion, and natural beauty would also require the use of skin care products and health supplements for maintenance. The hectic lifestyle nowadays calls for lesser time spent on facial treatments as well as nutritional diets.</p>
					<p>VuNiks DermaComplex brings out outer beauty through the promotion of inner health. VuNiks DermaComplex keeps skin moist and protected, while helping to build new healthy skin from the inside out. This product regulates the body’s immune system, lowers the incidence of inflammation, has strong antioxidant properties, and provides the building blocks for a flawless complexion.  It has a unique key feature of UVA, and UVB protection against the harmful rays of the Sunlight.</p>
					<a href="" class="btn-link-page">Read More</a>
					
				
				
			  
				
				</div>
            </div>
			
			
			
			
			<div id="more-content" class="hide_slider_right" >
			
           <div >
			<div class="content-slideup">	
				<i class="fa fa-angle-double-up" aria-hidden="true"></i>
			</div >
			<p>
			VuNiks is made from a unique proprietory combination of VuNiks Dermacomplex and Lycopene, Hyaluronic Acid, Buffered Vitamin C, L-Glutathione, Polypodium Extract. The applications of this unique and novel ingredient includes both topical and oral.<br><br>
			
			VuNiks Dermacomplex keeps skin moist and protected, while helping to build new healthy skin from the inside out.<br><br>

			VuNiks Dermacomplex are exceptional biological response modifiers which beneficially affect the body on the skin, which is the body's largest organ. <br><br>
			
			VuNiks Dermacomplex is a unique active composition of ingredients with physical, chemical and biological properties that make it an excellent "cosmeceutical" compound for a variety of skin care and cosmetic applications. The most notable of these properties are skin protective and moisturizing effects, photo protective effects, and a significant skin penetration and immune stimulation effect, which accelerates healing and skin repair at the cellular level.
			</p>
            </div>
			
			<h1 style="text-align: center;padding-top: 50px;color: #3c3c3c;">VuNiks Dermacomplex</h1>
			
			<ul id="flow-effect">
				<li> <span>affect on skin upon oral consumtion </span></li>
				<li> <span>Delivery of VuNiks Dermacomplex from skin surface to epidermal and dermal layers </span></li>
				<li> <span>Langerhans cells realease active intermediates, including cytokines </span></li>
				<li> <span>Fibroblast are stimulated to produce procollagen </span></li>
				<li> <span>New collagen is synthesized and bundled</span> </li>
			</ul>
			
            </div>
			
          </div>
        <!-- <a class="scroll" href="#science-vuniks"><span></span></a> -->
    </section>
	 <section class="scroll-effect" id="science-vuniks">
        <div class="pol-bg">
		<div id="main-content-slider" class="class_flow_root">
              <div id="pol-right"> 
                <h1>The Science of VuNiks</h1>
                <p>In Febrmaius and VuNiks, we invest in products developed and formulated with premium quality ingredients based on scientific research and evidence and where possible, to undertake, or commission, trial and research programmes on our products.</p>
                <p>Innovation and Science are the cornerstones of our product development.</p>
                <p>In order to effect the unique nutraceutical or cosmeceutical applications, VuNiks worked with its scientific partners in New Zealand, Norway and the United Kingdom to source and extract the highly precious and effectual active ingredients that are</p>
                <a href="" class="btn-link-page">Read More</a>
            </div>
            </div>
			
			<div id="more-content"  >
				
				<div>
				  	<div class="content-slideup">	
						<i class="fa fa-angle-double-up" aria-hidden="true"></i>
					</div >
					<p>
				VuNiks active components are scientifically and synergistically formulated to increase Bio-Availability. <br><br>
				Each particle of the powder micro-encapsulated to protect the Active Components from the Acidic Environment of the Gastro Intestinal Tract, the active components are therefore 100% present within the small intestinal tract whereby the Valli's of the small intestine absorb the active components of VuNiks's active components <br><br>
				
				Pharmacological studies show that Lycopene has strong anti-oxidant benefits, VuNiks's DermaComplex Chewables TU is currently one of the highest concentrated Tomato Extract based product in the World Market, The finished product is Individually Micro-Encapsulated DermaComplex ChewablesTM, L-Glutathione and Buffered Vitamin C, contained in a chewables.<br><br>

				VuNiks's group of Scientific Research Team insisted on rather than Tablets. The Scientific Rationale is because of the Bio-Availability of the components and the ease of swallowing and increased efficacy for the consumers.<br><br>

				Other Tomato Based Extract Whitening Oral Products produced in Tablets, contains A lot of Tableting Aids and Fillers, which therefore contains Artificial contents.<br>
				VuNikSs Philosophy in its Products are based on the following criteria:
				 
				</p>	
				</div>	
				
				<ul class="criteria_product animate">
					<li>
						<img src="http://vuniks.com/vuniks//wp-content/uploads/2019/04/efficency.png">
					<span>Efficacy</span>
					</li>
					<li>
						<img src="http://vuniks.com/vuniks//wp-content/uploads/2019/04/Natural-.png">
					<span>100% Natural</span>
					</li>
					<li>
						<img src="http://vuniks.com/vuniks//wp-content/uploads/2019/04/no_artificial_ingridient.png">
					<span>No Artificial Components, Ingredients</span>
					</li>
				</ul>				
            </div>
        </div>  
		
        <!-- <a class="scroll" href="#item-products"><span></span></a> -->
    </section>
    <section class="scroll-effect " id="philosophy">
        <div class="pol-bg">
			<div id="main-content-slider" class="class_grid">
					 <div id="pol-left">
						<h1>Our Philosophy</h1>
						<p>In VuNiks, we believe in improving and enhancing wellness and health of people and in turn making them happier and live with self-confidence.  We believe that true beauty is the beauty from within.</p>
						<p>The ethos of the company is to develop and formulate products with safe and premium quality ingredients based on scientific evidence and research.  Wherever possible, clinical or consumer trials will be carried out on the products offered or developed. In addition, research will be carried out and ingredients used in products will have scientific validity.</p>
						<a href="" class="btn-link-page">Discover Video</a>
					 </div>  
			</div>  
			<div id="more-content" style="width: 100%;margin-bottom: 130px;" >
				<div >
					<div class="content-slideup">	
						<i class="fa fa-angle-double-up" aria-hidden="true"></i>
					</div >
					
					<iframe class="fulvideo_vuniks" width="100%"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>  
			</div>  
        </div>  
        <!-- <a class="scroll" href="#about"><span></span></a> -->
    </section>

    <section class="scroll-effect" id="about">
        <div class="pol-bg">
            <div id="pol-right">
				<div id="main-content-slider" class="class_grid">
					<h1>About Us</h1>
					<p>VuNiks<sup>TM</sup> is a brand of Febrmaius Inc. Private Limited. The beginning of VuNiks<sup>TM</sup> brand and its first product “VuNiks<sup>TM</sup> DermaComplex” are a result of collaboration between Febrmaius and a group of Doctors in the areas of scientific research and health and wellness industry in Singapore, New Zealand and other countries.</p>
					<p>What is the meaning of VuNiks? it means Skin UV by reading the words in reverse order. It means VuNiks is a brand that develop products that is for the benefits of the skin, such as anti-UV, anti-wrinkle, skin firming and more.</p>
					<p>Today, Febrmaius has companies in Singapore, Malaysia and China and has agents and distributors in other countries.</p>
					<a href="" class="btn-link-page" style="width: max-content;">Discover Video</a>
				</div>
            </div>
            <div id="more-content" style="width: 100%;margin-bottom: 130px;" >
				<div >
				<div class="content-slideup">	
						<i class="fa fa-angle-double-up" aria-hidden="true"></i>
					</div >
				<ul id="video-list-group" class="animate_video">
		
			<li>
				
				 
				
				<iframe class="list-video"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				
				<!--div id="text_video">
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<p class="">Video 1</p>
				</div-->
			</li>
			<li>
				 
				 
				<iframe class="list-video"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<!--div id="text_video">
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<p class="">Video 2</p>
				</div-->
			</li>
			<li>
				 
				 
				<iframe class="list-video"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<!--div id="text_video">
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<p class="">Video 3</p>
				</div-->
			</li>
			<li>
				 
				 
				<iframe class="list-video"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<!--div id="text_video">
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<p class="">Video 4</p>
				</div-->
			</li>
			<li>
				 
				 
				<iframe class="list-video"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<!--div id="text_video">
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<p class="">Video 5</p>
				</div-->
			</li>
			<li>
				 
				 
				<iframe class="list-video"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<!--div id="text_video">
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<span class="dot_video"></span>
					<p class="">Video 6</p>
				</div-->
			</li>
		</ul>
					
				</div>  
			</div>  
        </div>  
        <!-- <a class="scroll" href="#our-products"><span></span></a> -->
    </section>

    

   
   <!--  <section class="scroll-effect" id="slide-6">
        <div id="pol">
            <h1>sample heading</h1>
            <hr class="small">
            <h3>subtile heading</h3>
            <a href="" class="btn-link">Explore</a>
        </div>
        <a class="scroll" href="#slide-7"><span></span></a>
    </section>

    <section class="scroll-effect" id="slide-7">
        <div id="pol">
            <h1>sample heading</h1>
            <hr class="small">
            <h3>subtile heading</h3>
            <a href="" class="btn-link">Explore</a>
        </div>
        <a class="scroll" href="#item-products"><span></span></a>
    </section> -->
	<div id="next-arrow"> 
		
		<i class="fa fa-angle-down" aria-hidden="true"></i>
	</div>
	
	
</div> 
<div class="item-products" id="item-products">
   <!-- Swiper -->
   <div class="container">
        <div class="container-inner">
            <h1>A gift from nature</h1>
            <div class="row vuniks-product">
                <div class="column">
                    <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/picturemessage_y3czniam.1sk.png" alt="">
                </div>
                <div class="column">
                    <a href="#" class="product-link">VuNiks<sup>TM</sup> DermaComplex</a>
                    <!-- <a href="#" class="category-link">Sample Category Product</a> -->
                    <!-- <p>50 mg</p> -->
                    <p>VuNiks<sup>TM</sup> DermaComplex is an exceptional biological response modifier which beneficially affects the body on the skin, which is the body’s largest organ.</p>
                    <p>VuNiks<sup>TM</sup> is made from a unique proprietary combination of VuNiks<sup>TM</sup> DermaComplex and Lycopene, Hyaluronic Acid, Buffered Vitamin C,   L-Glutathione, Polypodium Extract.</p>
                    <p>VuNiks<sup>TM</sup> is a chewable functional food. It is designed to be dissolved under our tongue.  The active components will be directly absorbed through our tongue which is part of our mucosal membrane, the active components will thus directly bypass our GI Tract and be transported directly through our blood brain membrane barrier into our blood stream <i>(Blood Brain Membrane Barrier (B2M) Delivery)</i></p>
                    <p class="comming-soon">Online purchase will be available soon</p>
					<a href="" class="btn-link-page gift_nature" style="width: max-content;">Discover Video</a>
                    <!-- <a href="#" class="btn-item-link">Add to Bag</a> -->
                </div>
            </div>
			<div id="more-content" class="nosection" style="width: 100%;margin-bottom: 130px;" >
			<div class="content-slideup">	
						<i class="fa fa-angle-double-up" aria-hidden="true"></i>
			</div >
			<iframe class="fulvideo_vuniks" width="100%"  src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div >
            <!-- <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="item-details">
                            <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/medicine.png" alt="">
                            <a href="#">Sample Title Product</a>
                            <a href="#" class="category-link">Sample Category Product</a>
                            <p>50 mg.</p>
                            <a href="#" class="btn-item-link">Add to Bag</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item-details">
                            <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/medicine.png" alt="">
                            <a href="#">Sample Title Product</a>
                            <a href="#" class="category-link">Sample Category Product</a>
                            <p>20 mg</p>
                            <a href="#" class="btn-item-link">Add to Bag</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item-details">
                            <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/medicine.png" alt="">
                            <a href="#">Sample Title Product</a>
                            <a href="#" class="category-link">Sample Category Product</a>
                            <p>150 mg</p>
                            <a href="#" class="btn-item-link">Add to Bag</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item-details">
                            <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/medicine.png" alt="">
                            <a href="#">Sample Title Product</a>
                            <a href="#" class="category-link">Sample Category Product</a>
                            <p>60 mg</p>
                            <a href="#" class="btn-item-link">Add to Bag</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                       <div class="item-details">
                            <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/medicine.png" alt="">
                            <a href="#">Sample Title Product</a>
                            <a href="#" class="category-link">Sample Category Product</a>
                            <p>30 mg</p>
                            .<a href="#" class="btn-item-link">Add to Bag</a>
                        </div>
                    </div>
                     <div class="swiper-slide">
                       <div class="item-details">
                            <img src="http://vuniks.com/vuniks/wp-content/uploads/2019/01/medicine.png" alt="">
                            <a href="#">Sample Title Product</a>
                            <a href="#" class="category-link">Sample Category Product</a>
                            <p>30 mg</p>
                            .<a href="#" class="btn-item-link">Add to Bag</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next swiper-button-white"></div>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-pagination"></div>
            </div> -->
        </div>
    </div>

</div>
<div class="contact-email overlay-bg" id="contact-message-section">
    <div class="row">
        <div class="column email-details">
            <h2>Stay in touch</h2>
            <p>By sending us inquired, emails <span>sales@vuniks.com</span> and <span>cust_care@vuniks.com</span>  & correspondences, you agree that we could send you reply, newsletters and correspondences related to our products and services.</p>
            <!-- <form id="lead" method="POST">
                <div class="form-group">
	                <input id="form_name2" class="form-control"  type="email" name="email-address"  placeholder="" required>
	                <label for="form_name2" class="form_name2">Email Address<span>*</span></label>
              	</div>
            	<p class="details-right">Fields marked with * are required</p>
                <input type="submit" name="btn-submit" class="btn-submit" value="Next" id="enquiry">
                <?php 
                //if (isset($_POST['btn-submit'])) {
                	//if($subject & $message) {
                		//header('Location: '.$_SERVER['REQUEST_URI']);
                	//}
               // }
                ?>
            </form> -->
            <?php echo do_shortcode('[contact-form-7 id="76" title="Contact"]'); ?>
        	<p class="details-right">Fields marked with * are required</p>
        </div>
        <div class="column"></div>
        <!-- <<div class="column contact-message ">
			<h1>Contact Us</h1>
			<p>We are free what your sugggestion and feedback to us.</p>
			<?php //echo do_shortcode('[contact-form-7 id="76" title="Contact"]'); ?>
		</div> -->
    </div>
</div>

<ul class="slider__nav slider-nav">
		<li class="slider__nav-item js-slide-lnk" >
			<a href="#slide-1" class="slider__nav-lnk">
			Home
			</a> 
		</li>
		<li class="slider__nav-item js-slide-lnk">
			<a href="#our-products" class="slider__nav-lnk">
			OUR PRODUCTS
			</a>
		</li>
		<li class="slider__nav-item js-slide-lnk" >
			<a href="#science-vuniks" class="slider__nav-lnk">
			THE SCIENCE OF VUNIKS
			</a>
		</li>
		<li class="slider__nav-item js-slide-lnk" >
			<a href="#philosophy" class="slider__nav-lnk">
			OUR PHILOSOPHY
			</a>
		</li>
		<li class="slider__nav-item js-slide-lnk">
			<a href="#about" class="slider__nav-lnk">
			ABOUT US
			</a>
		</li>
		
		</ul>
<!-- <div class="image-bg overlay-bg">
    <div class="circle-container">
      <div class="circle">
        <div class="circle__inner">
          <div class="circle__wrapper">
            <div class="circle__content">
                <h1>Your Nearest <span>Store</span></h2>
                <input id="country-item" placeholder="Search you City" />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
 -->
 <!-- <div id="purchases" class="modal"> -->

  <!-- Modal content -->
<!--   <div class="modal-content">
    <span class="close-modal">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div> -->


<?php get_footer();?>