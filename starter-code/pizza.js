// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
   
    // both actions combined in the same function toggle the .pep class to hide and show the section, and toggleClass active from the button itself
        $(".btn-pepperonni").click( function(){
          $(".pep").toggle();
          $(this).toggleClass("active");
          $(".pep-price").toggle();
          totalPrice();
        });
    
    // whit this it automatic clicks the button when the page is loaded (not needed in this assignment)
        // $(".btn-pepperonni").click()
    
        $(".btn-mushrooms").click(function(){
            $(".mushroom").toggle();
            $(this).toggleClass("active");
            $(".mush-price").toggle();
            totalPrice();
          });
    
        
    
        $(".btn-green-peppers").click(function(){
            $(".green-pepper").toggle();
            $(this).toggleClass("active");
            $(".green-price").toggle();
            totalPrice();
          });
    
        
    
        
    // we remove class sauce white from the default 
        $(".sauce").removeClass("sauce-white");
    // we set the default class of the button (without class active)
        $(".btn-sauce").attr("class","btn btn-sauce");
    
          $(".btn-sauce").click( function() {
            $(".sauce").toggleClass("sauce-white");
            $(this).toggleClass("active");
            $(".hideSaucePrice").toggle();
            totalPrice();
          });
    
    // same as for the sauce, but we start setting class crust as default (just another way)
          $(".crust").attr("class","crust");
          $(".btn-crust").attr("class","btn btn-crust");
    
          $(".btn-crust").click( function() {
            $(".crust").toggleClass("crust-gluten-free");
            $(this).toggleClass("active");
            $(".hideGlutenPrice").toggle();
            totalPrice();
          });

    // Function to calculate total price
    
        //   debugger
        //   $('.sum').each(function(){
        //       debugger
        //     let totalPrice = 13;
        //     debugger
        //      totalPrice = totalPrice += $(this).val();
        //      debugger
        //   });
//-------------
        //   totalPrice()

        //   function totalPrice () {
        //     var sum = document.getElementsByClassName("sum");
        //     var totalPrice = document.getElementById("total-price");
        //     var total = 10;
        //      for (let i =0 ; i < sum.length ; i++) {
        //      total = total + parseInt(sum[i].innerHTML)
        //      }
        //      totalPrice.innerHTML = total;
        //   }

//--------------
          function totalPrice() {
        
        
           
// the (".sum") does not return an Array yet, thats why we need the "..." to convert it into array and make it accessible to "Reduce"

            const allItemsArray = [...$(".cart li" )];
            const totalPrice = allItemsArray.reduce((sum, currentElement) => {
// the .css is used to define the style of the element              
                const displayValue = $(currentElement).css("display");

              if (displayValue !== "none") {
// the .find is finding the span element within the currentElement, and returns an array [<span>1</span>] with only 1 object, thats why we need [0], and the .innertext fish the number
                const price =  $(currentElement).find('span')[0].innerText;
                const currentElementsPrice = parseInt(price);
                return sum + currentElementsPrice;
              } else {
                return sum;
              }
// this 10 is the starting point of the reduce function (it was 0 as defult, but in this case 10 is the basic price of the pizza)
            }, 10);
// here we call the id total-price, 
            $('#total-price').text(totalPrice);
          };

      });
    
    
   
    
    
      