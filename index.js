/// Resize if the width changes
old_width = window.innerWidth;
window.onresize = function() { 
    new_width = window.innerWidth;
    if(Math.abs(old_width - new_width) >= 10) {
        old_width = new_width;
        setTimeout(function(){
            window.location.reload();
        });
    }
}

// Here is the loader that appears before the page si loaded completly 
document.onreadystatechange = function () {
    if(document.readyState === "complete"){
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.width = "0";
        document.getElementsByTagName("main")[0].style.opacity = "1";
    }
}


// ============== Smooth Scrolling ============== // 
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});


/// Get the current width 
current_width = document.getElementsByTagName("body")[0].offsetWidth;


/// Make the landing carousel 
var counter_landing_page = 1;
var number_landing_images = 3;
setInterval (function() {
    if (counter_landing_page == number_landing_images)counter_landing_page = 0;

    document.getElementById("first_counter").innerHTML = "0" + (counter_landing_page + 1) + ".";

    for(i = 1; i <= number_landing_images; i++) {
        document.getElementById("landing_image" + i).style.opacity = (((counter_landing_page + 1) == i) ? 1 : 0);
    }

    document.getElementById("square1").style.borderLeftColor = (((counter_landing_page + 1) == 1) ? "#df3f5f" : "#ffffff");
    document.getElementById("square2").style.borderLeftColor = (((counter_landing_page + 1) == 2) ? "#df3f5f" : "#ffffff");
    document.getElementById("square2").style.borderBottomColor = (((counter_landing_page + 1) == 2) ? "#df3f5f" : "#ffffff");
    document.getElementById("square3").style.borderBottomColor = (((counter_landing_page + 1) == 3) ? "#df3f5f" : "#ffffff");

    document.getElementById("square1").style.opacity = (((counter_landing_page + 1) == 1) ? 1 : 0.4);
    document.getElementById("square2").style.opacity = (((counter_landing_page + 1) == 2) ? 1 : 0.4);
    document.getElementById("square2").style.opacity = (((counter_landing_page + 1) == 2) ? 1 : 0.4);
    document.getElementById("square3").style.opacity = (((counter_landing_page + 1) == 3) ? 1 : 0.4);

    counter_landing_page ++;
}, 12000);


/// Make the landing corner square 
var counter_random_text_inside = 1;
setInterval(function(){ 
    if (counter_random_text_inside == 3)counter_random_text_inside = 0;
    for(i = 1; i <= 3; i++) {
        document.getElementById("random_text_inside" + i).style.opacity = (((counter_random_text_inside + 1) == i) ? 1 : 0);
    }
    counter_random_text_inside ++;
}, 4000);


/// Check the scrolling button 
window.onscroll = function() {
    document.getElementById("go_up").style.display = "block";
}

var scroll;
window.addEventListener('scroll', function ( event ) {
    window.clearTimeout(scroll);

    scroll = setTimeout(function() {
        document.getElementById("go_up").style.display = "none";
    }, 1000);

}, false);


/// The shop / models section 

    /// Edit the visual problems in "Shop" section
    /// Set the shop height 
    var shop_height;
    window.addEventListener("load", event => {
        var image = document.getElementById("shop_img1");
        var isLoaded = image.complete && image.naturalHeight !== 0;
        shop_height = document.getElementById("shop_img1").scrollHeight;
        console.log(shop_height);
        if(window.innerWidth > 600)document.getElementById("shop").style.height = "calc(30rem + " + shop_height + "px)";
        else if(window.innerWidth <= 600)document.getElementById("shop").style.height = "calc(22rem + " + shop_height + "px)";
        document.getElementById("images_shop").style.height = shop_height + "px";
    });

    /// Adjust the behind image big transparent text 
    var shop_width = document.getElementById("shop_img1").offsetWidth;
    var ratio = shop_width / 1200;
    document.getElementById("under_image_title_header").style.fontSize = 16*ratio + "rem";

    /// Set the length of the lines from the bottom part 
    if (document.getElementById("next_product")) width_next_btn = document.getElementById("next_product").offsetWidth;
        else width_next_btn = 0;
    if (document.getElementById("curved_square")) width_square = document.getElementById("curved_square").offsetWidth;
        else width_square = 0;

    var width_title = document.getElementById("yacht_name").clientWidth;
    document.getElementsByClassName("shop_bottom_text_line")[0].style.width = "calc(50% - 2rem - " + (width_square + width_title/2) + "px)";
    document.getElementsByClassName("shop_bottom_text_line")[0].style.right = "calc(50% + 2rem + " + (width_title/2) + "px)";
    document.getElementsByClassName("shop_bottom_text_line")[1].style.width = "calc(50% - 2rem - " + (width_next_btn + width_title/2) + "px)";
    document.getElementsByClassName("shop_bottom_text_line")[1].style.left = "calc(50% + 1rem + " + (width_title/2) + "px)";

    document.getElementsByClassName("responsive_shop_bottom_text_line")[0].style.left = "calc(0.5rem + " + width_title + "px)";
    document.getElementsByClassName("responsive_shop_bottom_text_line")[0].style.width = "calc(100% - 1rem - " + (width_next_btn + width_title) + "px)";

    /// Set the height of the side line
    var side_height = document.getElementById("shop").offsetHeight;
    document.getElementById("curved_suqare_line_up").style.height = "calc(" + side_height/2 + "px - 10rem)";

/// Make the responsive_main_specs buttons 
function activate_spec (spec_index) {
    for(i = 1; i <= 3; i++) {
        document.getElementById("responsive_main_specs_img_container" + i).style.opacity = ((spec_index == i) ? 1 : 0.4);
        document.getElementById("spec" + i).style.display = ((spec_index == i) ? "flex" : "none");
    }
}

/// Activate the next button 
var product_contor = 1,number_of_products = 4, number_of_spans = 4;
var yacht_name_h1 = ["BumbleBee", "Ilona", "Octopus", "Squadron"];
var yacht_name_h2 = ["- Fast, but Graceful -", "- Elegant and Luxurious -", "- Fierce and Splendid -", "- Compact and Cosy -"];
var under_image_title_header = ["BUMBL$EBEE", "ILL$$$$|ONA", "OCTO$$$PUS", "SQUE$EDEON"];
var spec_span = [
    [30, 60, 5, 3],
    [25, 120, 20, 8],
    [30, 100, 15, 6],
    [27, 50, 5, 2]
];

function nextProduct() {
    product_contor ++;
    if(product_contor > 4)product_contor = 1;

    document.getElementById("yacht_name_h1").innerHTML = yacht_name_h1[product_contor-1];
    document.getElementById("yacht_name_h2").innerHTML = yacht_name_h2[product_contor-1];
    document.getElementById("under_image_title_header").innerHTML = under_image_title_header[product_contor-1];
    
    for(i = 0; i < number_of_spans; i++) {
        document.getElementById("spec" + (i+1) + "_span").innerHTML = spec_span[product_contor-1][i]; 
    }

    for(i = 1; i <= number_of_products; i++) {
        document.getElementById("shop_img" + i).style.display = ((product_contor == i) ? "block" : "none");
    }
}


/// Set the height of the sea_transition background 
var sea_ratio = 3000 / 876; /// 876 is the image height if the image width = 3000 
var sea_width = document.getElementById("sea_transition").offsetWidth;
var sea_height = sea_width / sea_ratio;
document.getElementById("sea_transition").style.height = sea_height + "px";


/// Testimonials 
document.getElementById("thank_you").style.left = -(current_width - 1000)/2 + "px";
var customer_counter = 1, customers = 3;
var info_person = ["Zavier Howells, Australia", "Della Byers, Netherlands", "Jamal Parker, United States"];
var review_text = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam excepturi sapiente blanditiis quam ducimus aliquam similique, odit ullam unde in iste accusamus eum. In eveniet tempore et fuga. Facilis cupiditate delectus, incidunt magnam nemo ex, unde id porro, nostrum veniam vel. Corporis repellat iste doloribus deserunt illum, doloremque dolorum vel.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.", 
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem"
];

function nextCustomer_simple() {
    customer_counter ++;
    if(customer_counter > customers)customer_counter = 1;

    document.getElementById("info_person").innerHTML = info_person[customer_counter - 1];
    document.getElementById("review_text").innerHTML = review_text[customer_counter - 1];
    document.getElementById("box_counter").innerHTML = "0" + customer_counter + "/03";
    document.getElementById("person_image").style.background = "url('images/person"+ customer_counter +".png')";
    document.getElementById("person_image").style.backgroundPosition = "center";
    document.getElementById("person_image").style.backgroundSize = "cover";
    document.getElementById("person_image").style.backgroundRepeat = "no-repeat";
}
var customers_reviews = setInterval(nextCustomer_simple, 10000);
function nextCustomer() {
    clearInterval(customers_reviews);
    nextCustomer_simple();
    customers_reviews = setInterval(nextCustomer_simple, 10000);
}


/// Partners  
var logo_box_width = 330;
var number_of_logos = 7;
var number_of_logos_on_page = parseInt(((current_width - 164) / 330));
    if(number_of_logos_on_page == 0) {
        number_of_logos_on_page = 1;
        logo_box_width = 270;
    }
var maximum_scroll = (number_of_logos - number_of_logos_on_page);

document.getElementById("partners_images").style.width = (number_of_logos_on_page * logo_box_width) + "px";

var scrolling = 0;
function scroll_logos(scroll_sign) {
    scrolling = scrolling + scroll_sign * logo_box_width;

    if(scrolling >= 0) {
        document.getElementById("ant_next_btn_1").style.opacity = 0;
        scrolling = 0;
    }
    else document.getElementById("ant_next_btn_1").style.opacity = 1;

    if(scrolling <= -logo_box_width*maximum_scroll) {
        scrolling = -logo_box_width*maximum_scroll;
        document.getElementById("ant_next_btn_2").style.opacity = 0;
    }
    else document.getElementById("ant_next_btn_2").style.opacity = 1;

    for(i = 0; i < 7;i++)document.getElementsByClassName("partners_img_box")[i].style.transform = "translateX(" + scrolling + "px)";
}

/// More Details About the product 
var phone_number = false, number_of_photos = 6, photos_slideshow_counter = 1; 

var description1 = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!'
];
var description2 = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam quibusdam beatae eveniet earum vel in molestias quia cum unde ratione velit, perspiciatis, odit numquam. Sint ipsam quibusdam animi reprehenderit voluptatibus! Ad quisquam odio voluptate, aspernatur eaque consequuntur tempore obcaecati ex quod? Velit blanditiis quidem tenetur? Laudantium nihil fugit dolore corrupti magnam molestiae perferendis adipisci iste minima numquam! Eius non harum id natus odio. Sapiente molestiae atque velit praesentium doloremque debitis error architecto voluptatem ratione iste laborum reprehenderit magnam nisi vitae, perspiciatis minima voluptas odit saepe obcaecati nobis deserunt in aliquam? Ullam incidunt quia at accusamus a id tempora excepturi deserunt enim! Maiores totam iste modi repellat. Accusantium sit fugit veniam voluptatum esse possimus laborum fuga, ab molestiae est qui facilis aspernatur eveniet nam natus nostrum quam omnis laudantium voluptates voluptate. Porro accusamus minus adipisci quos doloribus nam! Voluptatem aspernatur quibusdam consectetur velit accusantium blanditiis veniam illum corporis consequuntur totam!'
];

    /// Open the "more specs" page 
    function openDetails() {
        document.getElementById("product_page").style.transform = "translateX(0)";
        document.getElementById("product_page").style.visibility = "visible";
        document.getElementById("actual_info_product").style.display = "block";

        /// Chang the details's text 
        document.getElementById("text_presenation_para1").innerHTML = description1[product_contor-1];
        document.getElementById("text_presenation_para1").innerHTML = description2[product_contor-1];
        document.getElementById("product_name").innerHTML = yacht_name_h1[product_contor-1];

        /// Set the background and the counter 
        var image_url = "images/yacht" + product_contor + "_0.jpg";
        document.getElementById("big_image").style.background = "url(" + image_url + ") center center no-repeat";
        document.getElementById("big_image").style.backgroundSize = "cover";
        document.getElementById("slideshow_counter").innerHTML = "01/0" + number_of_photos;

        /// Set the height of the image according with its width 
        var big_image_height = (document.getElementById("actual_info_product").offsetWidth - 64) * 1980 / 3000;
        document.getElementById("big_image").style.height = big_image_height + "px";
        document.getElementById("image_slideshow").style.height = big_image_height + "px";
    }

    /// For the Next photo in slideshow 
    function next_slideshow_image() {
        photos_slideshow_counter ++;
        if(photos_slideshow_counter > number_of_photos) photos_slideshow_counter = 1;
        
        var image_url = "images/yacht" + product_contor + "_" + (photos_slideshow_counter - 1) + ".jpg";
        document.getElementById("big_image_error").src = image_url; 
        document.getElementById("big_image").style.background = "url(" + image_url + ") center center no-repeat";
        document.getElementById("big_image").style.backgroundSize = "cover";
        document.getElementById("slideshow_counter").innerHTML = "0" + photos_slideshow_counter + "/0" + number_of_photos; 
    }

    /// If the img dose not exists
    function putBasicImg() {
        var image_url = "images/no_image.jpg";
        document.getElementById("big_image").style.background = "url(" + image_url + ") center center no-repeat";
        document.getElementById("big_image").style.backgroundSize = "cover";
        document.getElementById("slideshow_counter").innerHTML = "0" + photos_slideshow_counter + "/0" + number_of_photos;
    }

    /// Chech the clicks to close the "more specs"
    document.addEventListener('click', function (event) {
        if(event.target == document.getElementById("page_over_background")) { // If the click happened on the black background, close it 
            document.getElementById("actual_info_product").style.display = "none";
            document.getElementById("product_page").style.transform = "translateX(-100%)";
            document.getElementById("product_page").style.visibility = "hidden";
  
            /// The Contact us Button
            document.getElementById("contact_us").style.display = "block";
            document.getElementById("phone_number").style.display = "none";
            document.getElementById("contact_us_btn").style.border = "2px solid #df3f5f";
            phone_number = false;
            photos_slideshow_counter = 1;
        }
        else if(event.target == document.getElementById("close_btn") || event.target == document.getElementById("close_btn_img") || event.target == document.getElementById("close_btn_header")) { // If the click happened on the X button
            document.getElementById("product_page").style.transform = "translateX(-100%)";
            document.getElementById("product_page").style.visibility = "hidden";
            document.getElementById("actual_info_product").style.display = "none";
            
            /// The Contact us Button
            document.getElementById("contact_us").style.display = "block";
            document.getElementById("phone_number").style.display = "none";
            document.getElementById("contact_us_btn").style.border = "2px solid #df3f5f";
            phone_number = false;
            photos_slideshow_counter = 1;
        }
    });

    /// Check the Show Phone Number Button 
    function showPhone() {
        if (phone_number == false) {
            document.getElementById("contact_us").style.display = "none";
            document.getElementById("phone_number").style.display = "block";
            document.getElementById("contact_us_btn").style.border = "none";
            document.getElementById("contact_us_btn").style.borderBottom = "2px solid #df3f5f";
            phone_number = true;    
        }
    }


/// Make the responsive navigation bar 
function openNav() {
    document.getElementById("navbar_responsive").style.width = "100%";
}

function closeNav() {
    document.getElementById("navbar_responsive").style.width = 0;
}