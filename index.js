var marker = document.querySelector('#marker');
var item = document.querySelectorAll(".leftSide a");
function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target)
    })
})

const toggleFormBtn = document.getElementById('toggleForm');
const myForm = document.getElementById('my-form');
const formBackLayer = document.getElementById('formBackLayer')
const signinform = document.getElementById('signin-form')
const signButton = document.getElementById('signButton')
const backToCreate = document.getElementById('backToCreate')
const mobo_ToggleForm = document.getElementById('mobo_ToggleForm')
const mobo_SwitchToSignIn = document.getElementById('mobo_SwitchToSignIn')
const mobo_SwitchToSignUp = document.getElementById('mobo_SwitchToSignUp')
const MoboSignIn = document.getElementById('MoboSign-In')
const MoboSignUp = document.getElementById('MoboSign-up')
const close = document.querySelectorAll('.close')


close.forEach((e) => {
    e.addEventListener('click', () => {
        formBackLayer.classList.add('hidden');
        MoboSignUp.classList.add('hidden');
        MoboSignUp.classList.remove('moboSignup__Form');
        MoboSignIn.classList.add('hidden');
        MoboSignIn.classList.remove('moboSignup__Form');
        document.body.style.overflowY = "visible";
    })
})


toggleFormBtn.addEventListener('click', () => {
    myForm.classList.remove('hidden');
    myForm.classList.add('View');
    formBackLayer.classList.remove('hidden')
    document.body.style.overflowY = "hidden";
});
formBackLayer.addEventListener('click', () => {
    formBackLayer.classList.add('hidden')
    myForm.classList.add('hidden');
    myForm.classList.remove('View');
    signinform.classList.add('hidden');
    signinform.classList.remove('SiginupView');
    MoboSignUp.classList.add('hidden');
    MoboSignUp.classList.remove('moboSignup__Form');
    MoboSignIn.classList.add('hidden');
    MoboSignIn.classList.remove('moboSignup__Form');
    document.body.style.overflowY = "visible";
})
signButton.addEventListener('click', () => {
    myForm.classList.add('hidden');
    myForm.classList.remove('View');
    signinform.classList.remove('hidden');
    signinform.classList.add('SiginupView');

})
backToCreate.addEventListener('click', () => {
    myForm.classList.remove('hidden');
    myForm.classList.add('View');
    signinform.classList.add('hidden');
    signinform.classList.remove('SiginupView');
})
mobo_ToggleForm.addEventListener('click', () => {
    formBackLayer.classList.remove('hidden');
    MoboSignUp.classList.remove('hidden');
    MoboSignUp.classList.add('moboSignup__Form');
    document.body.style.overflowY = "hidden";
})
mobo_SwitchToSignIn.addEventListener('click', () => {
    MoboSignUp.classList.remove('moboSignup__Form')
    MoboSignUp.classList.add('hidden')
    MoboSignIn.classList.remove('hidden')
    MoboSignIn.classList.add('moboSignup__Form')
})
mobo_SwitchToSignUp.addEventListener('click', () => {
    MoboSignIn.classList.remove('moboSignup__Form')
    MoboSignIn.classList.add('hidden')
    MoboSignUp.classList.remove('hidden')
    MoboSignUp.classList.add('moboSignup__Form')
})