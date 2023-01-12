// var treehead = document.querySelector(".treehead");
// treehead.addEventListener("click", function(){
//     document.querySelector("body").classList.toggle("active");
// });

var isLogin = false;
    
    function clickLogin() {
        if (!isLogin){
            isLogin = true;
            document.getElementById("login-logout").innerHTML = "LOGOUT"
        } else {
            isLogin = false;
            document.getElementById("login-logout").innerHTML = "LOGIN"
        }
        console.log(isLogin)
    }


    const menuBtns = document.querySelectorAll('.menu-btn');
    const Items = document.querySelectorAll('.item');   
    
    let activeBtn = "featured";
    
    showFoodMenu(activeBtn);
    
    menuBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            resetActiveBtn();
            showFoodMenu(btn.id);
            btn.classList.add('active-btn');
        });
    });
    
    function resetActiveBtn(){
        menuBtns.forEach((btn) => {
            btn.classList.remove('active-btn');
        });
    }
    
    function showFoodMenu(newMenuBtn){
        activeBtn = newMenuBtn;
        Items.forEach((item) => {
            if(item.classList.contains(activeBtn)){
                item.style.display = "grid";
            } else {
                item.style.display = "none";
            }
        });
    }