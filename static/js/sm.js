const layPop = {//일반팝업
    on:function(id){
        $('#'+id).show();
        $('body').addClass('fixbody');
    },
    off:function(id){
        $('#'+id).hide();
        $('body').removeClass('fixbody');
    }
}

const layPop2 = {//하단 슬라이드업 팝업
    on:function(id){
        $('#'+id).addClass('open');
        $('body').addClass('fixbody');
    },
    off:function(id){
        $('#'+id).addClass('close');
        setTimeout(function(){
            $('#'+id).removeClass('open').removeClass('close');
        },1.0*300)
        $('body').removeClass('fixbody');
    }
}

const ulSel = {
    on:function(i,id){
        var opt1 = $(i).find('[data-opt=1]').text();
        var opt2 = $(i).find('[data-opt=2]').text();
        var selOpt1 =  $('#'+id).find('[data-sel-opt=1]');
        var selOpt2 =  $('#'+id).find('[data-sel-opt=2]');
        selOpt1.text(opt1);
        selOpt2.text(opt2);       
        $(i).parent().addClass('on').siblings().removeClass('on');
    }
}

const tooltip = {
    on:function(i){
        $(i).parent('.tipA').toggleClass('active')
    }
}

const inputDelCtr = {
    on:function(i){
        if(i==null){i='.hasDelete'}
        const textField = $(i+'>input');
        const deleteText = textField.siblings('.ico_x');
        textField.on('click',function(){
            if($(this).val().length >= 1){
                $(this).addClass('on').siblings('.ico_x').show();
            }
            $(this).on('blur',function(){
                const me = $(this);
                setTimeout(function(){
                    me.removeClass('on').siblings('.ico_x').hide();
                },100);
            });
            $(this).on('keyup',function(){
                $(this).addClass('on').siblings('.ico_x').show();
                if($(this).val().length == 0){
                    $(this).removeClass('on').siblings('.ico_x').hide();
                }
            });
        });
    },
    textDel:function(i,textField){
        $(i).siblings(textField).val("");
        $(i).hide();
    }
}