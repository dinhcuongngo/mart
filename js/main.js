window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var menu = document.getElementsByClassName("menu");
    var service = document.getElementsByClassName("service");
    var service_itenms  = document.getElementsByClassName("service__items");
    var collection = document.getElementById("collection");
    var featured = document.getElementById("featured");
    var sale_items = document.getElementById("sale_items");
    var seller = document.getElementById("seller");
    var review = document.getElementById("review");
    var newsletter = document.getElementById("newsletter");
    var newsletter_title = document.getElementById("newsletter_title");
    var partner = document.getElementById("partner");
    var news = document.getElementById("news");
    var contact = document.getElementById("contact");
    //var test  = document.getElementsByClassName("contact");
    //alert(test[0].offsetTop);
    
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        //document.getElementById("myBtn").style.display = "block";
        menu[0].style.position = "fixed";
        menu[0].style.top = "0";
        //document.getElementById("header_section").style.top = "0";
        menu[0].style.padding = "10px 0px";
        menu[0].style.transition = "all 1s";
        menu[0].style.borderBottom  = "solid 1px #1abc9c";
    } else {
        menu[0].style.position = "relative";
        menu[0].style.padding = "20px 0px";
        menu[0].style.borderBottom  = "0";
    }

    //SERVICE
    var serviceTop = service[0].offsetTop;
    var serviceHeight = service[0].clientHeight;
    var serviceDistance = serviceTop - serviceHeight;
    if (document.documentElement.scrollTop >= serviceDistance){
        service[0].style.visibility = "visible";
        for (var i=0; i < service_itenms.length; i++){
            service_itenms[i].classList.add("slide-in");
        }        
    }

    //COLLECTION
    var collectionTop = collection.offsetTop;
    var collectionHeight = collection.clientHeight;
    var collectionDistance = collectionTop - collectionHeight - 400;
    if (document.documentElement.scrollTop >= collectionDistance){
        collection.style.visibility = "visible";
        collection.classList.add("slide-top");       
    }

    //FEATURED PRODUCTS
    var featuredTop = featured.offsetTop;
    var featuredHeight = featured.clientHeight;
    var featuredDistance = featuredTop - featuredHeight - 400;
    if (document.documentElement.scrollTop >= featuredDistance){        
        featured.style.visibility = "visible";
        featured.classList.add("slide-top"); 
    }

    //SALE
    var sale = document.getElementsByClassName("sale");
    var saleTop = sale[0].offsetTop;
    var saleHeight = sale[0].clientHeight;
    var saleDistance = saleTop - saleHeight + 400;
    if (document.documentElement.scrollTop >= saleDistance){        
        sale_items.style.visibility = "visible";
        sale_items.classList.add("slide-top"); 
    }

    //BEST SELLERS
    var sellerTop = seller.offsetTop;
    var sellerHeight = seller.clientHeight;
    var sellerDistance = sellerTop - sellerHeight - 400;
    if (document.documentElement.scrollTop >= sellerDistance){
        seller.style.visibility = "visible";
        seller.classList.add("slide-top"); 
    }

    //CUSTOMER REVIEW
    var reviewTop = review.offsetTop;
    var reviewHeight = review.clientHeight;
    var reviewDistance = reviewTop - reviewHeight - 400;
    if (document.documentElement.scrollTop >= reviewDistance){        
        review.style.visibility = "visible";
        review.classList.add("slide-top"); 
    }

    //NEWSLETTER
    var newsletterTop = newsletter.offsetTop;
    var newsletterHeight = newsletter.clientHeight;
    var newsletterDistance = newsletterTop - newsletterHeight;
    if (document.documentElement.scrollTop >= newsletterDistance){
        newsletter_title.style.visibility = "visible";
        newsletter_title.classList.add("slide-top"); 
    }

    //OUR PARTNER
    var partnerTop = partner.offsetTop;
    var partnerHeight = partner.clientHeight;
    var partnerDistance = partnerTop - partnerHeight - 400;
    if (document.documentElement.scrollTop >= partnerDistance){
        partner.style.visibility = "visible";
        partner.classList.add("slide-top"); 
    }

    //LATEST NEWS
    var newsTop = news.offsetTop;
    var newsHeight = news.clientHeight;
    var newsDistance = newsTop - newsHeight - 400;
    if (document.documentElement.scrollTop >= newsDistance){
        news.style.visibility = "visible";
        news.classList.add("slide-top"); 
    }

    //GET IN TOUCH
    var contactTop = contact.offsetTop;
    var contactHeight = contact.clientHeight;
    var contactDistance = contactTop - contactHeight - 400;
    if (document.documentElement.scrollTop >= contactDistance){
        contact.style.visibility = "visible";
        contact.classList.add("slide-top"); 
    }
}