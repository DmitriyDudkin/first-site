$(function(){

    $('.tel').mask('7 (999) 999 99 99',
        {placeholder: "x", completed:function(){alert('Вы ввели номер: ' + this.val() + 
        ' Мы Вам обязательно перезвоним');}});

        AOS.init();

        $('.menu-btn').on('click', function(){
            $('.header__top-menu').slideToggle();
        });
        $('.top-menu').on('click', function(){
            $('.header__top-menu').hide();
        });

    });