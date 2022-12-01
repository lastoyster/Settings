function show() {
    var p = document.getElementById('code');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('code');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
				document.getElementById("eye").classList.add("fa-eye-slash");
				document.getElementById("eye").classList.remove("fa-eye");
        show();
    } else {
        pwShown = 0;
			  document.getElementById("eye").classList.add("fa-eye");
				document.getElementById("eye").classList.remove("fa-eye-slash");
        hide();
    }
}, false);


      const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#pword");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);

            // toggle the label
            this.classList.toggle("hide");
        });



      function Toggle() {
                  var temp = document.getElementById("pass");
                  if (temp.type === "password") {
                      temp.type = "text";
                  }
                  else {
                      temp.type = "password";
                  }
              }


     var inputPass = document.getElementById('password'),
     inputChk  = document.getElementById('chk'),
     label = document.getElementById('showhide');

    inputChk.onclick = function () {

     if(inputChk.checked) {
          inputPass.setAttribute('type', 'text');
          label.textContent = 'hide';
      } else {
          inputPass.setAttribute('type', 'password');
          label.textContent = 'show';
      }
    }

/*===== SHOW NAVBAR  =====*/
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')


/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

// ====== chart ====== //

const data = {
    labels: [
        'Product 1',
        'Product 2',
        'Product 3'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [250, 100, 50],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
}
const myChart = new Chart(
    document.getElementById('mychart').getContext("2d"),
    config
);
