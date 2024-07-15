
let popUp = document.getElementById('popUp')

function showPopUp(){
    popUp.classList.add('show')   
    
}

let img = document.getElementById('bestImg')
let boxp1 = document.getElementById('boxp1')
let boxp2 = document.getElementById('boxp2')
let boxp3 = document.getElementById('boxp3')
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')

function bestClickFrist(){
    box1.classList.add('click')
    boxp1.classList.add('clickp')
    boxp2.classList.remove('clickp')
    box2.classList.remove('click')
    boxp3.classList.remove('clickp')
    box3.classList.remove('click')
    img.style.opacity = 0; 
    setTimeout(function() {
        img.src="./assets/img/nature1.jpg";
        img.style.opacity = 1; 
    }, 500)

}
function bestClickSecond(){
    box1.classList.remove('click')
    boxp1.classList.remove('clickp')
    boxp2.classList.add('clickp')
    box2.classList.add('click')
    boxp3.classList.remove('clickp')
    box3.classList.remove('click')
    img.style.opacity = 0; 
        setTimeout(function() {
            img.src="./assets/img/image.png";
            img.style.opacity = 1; 
        }, 500)



}
function bestClickThird(){
    box1.classList.remove('click')
    boxp1.classList.remove('clickp')
    boxp2.classList.remove('clickp')
    box2.classList.remove('click')
    boxp3.classList.add('clickp')
    box3.classList.add('click')
    img.style.opacity = 0; 
        setTimeout(function() {
            img.src="./assets/img/nature2.jpg";
            img.style.opacity = 1; 
        }, 500)


}

$("#form").submit(function(e){
  e.preventDefault();
  var email = document.getElementById('email').value;
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  if(email.length<=0){
    document.querySelector('.errorName').innerHTML="E-mail is required";
    
  }
  else{
    document.querySelector('.errorName').innerHTML="";
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
      document.querySelector('.errorName').innerHTML="Enter valid E-mail";
    }
    else{
      document.querySelector('.errorName').innerHTML="";
      if(fname.length<=0){
          document.querySelector('.errorName').innerHTML=" Fristname is required";
        }
      else{
          document.querySelector('.errorName').innerHTML="";
          if(lname.length<=0){
              document.querySelector('.errorName').innerHTML=" Lastname is required";
            }
          else{
              document.querySelector('.errorName').innerHTML="";
              $.ajax({
                type: "POST",
                url: "https://getform.io/f/anlelqoa",
                crossDomain: true,
                data: new FormData(this),
                dataType: "json",
                processData: false,
                contentType: false,
                headers: {
                "Accept": "application/json"
                }
              }).done(function() {
                alert('The form was submitted successfully.')
                document.getElementById('email').value = "";
                document.getElementById('fname').value = "";
                document.getElementById('lname').value = "";  
              }).fail(function() {
                alert('An error occurred! Please try again later.')
              });
            }
    }
    }
  }

});
var swiper = new Swiper(".imgContainer", {
    slidesPerView:4,
    spaceBetween:0,
    slidesPerGroup:4,
    centerSlide: "true",
    grabCursor: "true",
    fade:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });

    
      
      
    
