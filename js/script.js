document.querySelector('#create-account').onclick = () => {
    document.querySelector('#new-account').classList.add('active');
}
document.querySelector('#close-popup').onclick = () => {
    document.querySelector('#new-account').classList.remove('active');
}
document.querySelector('#close-popup-2').onclick = () => {
    document.querySelector('#new-account').classList.remove('active');
}

document.querySelector('#reset-btn').onclick = () => {
    document.querySelector('#reset-box').classList.add('active');
}
document.querySelector('#close-reset-popup').onclick = () => {
    document.querySelector('#reset-box').classList.remove('active');
}
document.querySelector('#close-reset-popup-2').onclick = () => {
    document.querySelector('#reset-box').classList.remove('active');
}

document.querySelector('#login').onclick = () => {
    document.querySelector('#login-box').classList.add('active');
}
document.querySelector('#close-login-popup').onclick = () => {
    document.querySelector('#login-box').classList.remove('active');
}
document.querySelector('#close-login-popup-2').onclick = () => {
    document.querySelector('#login-box').classList.remove('active');
}
document.querySelector('#yes').onclick = () => {
    document.querySelector('#unique-id').innerHTML = 'Matric. No.';
}
document.querySelector('#no').onclick = () => {
    document.querySelector('#unique-id').innerHTML = 'JAMB Reg. No.';
}