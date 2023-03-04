//turn off popup&locker
function hideModal() {
    $('#modal-create-shop').hide()
    $('#lock-window').hide()
}
//turn on popup&locker
function showModal() {
    $('#modal-create-shop').show()
    $('#lock-window').show()
}
//locker window to hide all popup on click
function lock_window_onclick() {
    $('#lock-window').click(()=>{
        hideModal()
        if (window.innerWidth<=1410) {$('#menu').hide()}
        if (window.innerWidth<=1024) {
            $('#header-btn').show()
            $('.header').css('visibility','hidden')
        }
    })
}
//
function dropdownValueChanger(parent,button,list) {
    parent.querySelectorAll('li').forEach(el => el.addEventListener('click',()=>{
        button.value = el.value
        button.innerText = list[button.value]
    }))

}
const getElement = (id) => {
    return document.getElementById(id)
}

$(function (){
    //left menu to show 1280- px
    $('#menu-btn').click(()=>{
        $('#lock-window').show()
        $('#menu').show()
    })
    //header to show 1024- px
    $('#header-btn').click(()=>{
        $('.header').css({'visibility': 'visible','z-index': 2})
        $('#header-btn').hide()
        $('#lock-window').show()
    })
    //popup window
    $('#create-shop-btn').click(showModal)
    $('#close-btn1').click(hideModal)
    $('#close-btn2').click(hideModal)
    //locker window
    lock_window_onclick()
    //popup input
    $('#popup-input').keyup(()=>{
        if ($('#popup-input').val()!=='') {
            $('#input-cover').hide()
        } else {$('#input-cover').show()}
    })
    //popup window dropdown choose
    dropdownValueChanger(getElement('dropdownmenu1'),getElement('dropdownMenuButton1'),['Стандартный',2,3])
    dropdownValueChanger(getElement('dropdownmenu2'),getElement('dropdownMenuButton2'),['Классическая',2,3])
})