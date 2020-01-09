$( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
    $.MCustomLoader(false);

    if( jqxhr.responseText != '' && jqxhr.responseText != null )
        alert(jqxhr.responseText);
});

$.extend({
    MCustomLoader: function(show)
    {
        if( show )
            $('.b-spinner').css('display','flex');
        else
            $('.b-spinner').delay(1000).fadeOut();   
    },
    passwordGenerator: function (length) 
    {
        var password = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$#*%{]";

        for( var i=0; i < length; i++ )
            password += possible.charAt(Math.floor(Math.random() * possible.length));
            
        return password;
    },
    MStringToVariable: function (string) {
        if( string != '' )
            return eval(string);
        else
            return false;
    },
    bytesToSize: function( bytes ){
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    getExtName: function( name ){
        var lastDot = name.lastIndexOf('.');
        return name.substring(lastDot + 1).toUpperCase();
    }
});

$(document).ready(function(){
    var openedAnyModalCB = function(){
        $('html, body').addClass('y-hidden')
        $('.pressClose').addClass('pressClose--active')
    }
    
    $(document).on('submit', 'form[data-form="ajax"]', function(e) {
        var _this = $(this);
        var id = 'options_' + _this.attr('id').replace(/-/g,"_");
        var options = $.MStringToVariable( id.toLowerCase() );
    
        var myStaticOptions = {
            beforeSubmit: function(arr, $form, options) {
                if( id.toLowerCase() != 'options_login_form' )
                    arr.push({ name: 'ajax', value: 'submit' });
            },
            beforeSend: function(){
                $.MCustomLoader(true); 
            }
        };
        
        var newObj = $.extend({}, myStaticOptions, options);
        $(this).ajaxSubmit( newObj );

       return false;  
    });

    $(document).on('click', 'button[data-href], .dec-file-link', function(){
        location.href = $(this).data('href');

        return false;
    });
    
    $(document).on('change', '#procedure-form #Orders_cat_id', function(){
        var _this = $(this);
        var _s = $('#Orders_scat_id');
        var _v = _this.val();

        _s.find('option[value!=""]').hide();
        _s.find('option[data-id="'+_v+'"]').show();
    });

    $(document).on('blur', '#procedure-form #Orders_link', function(){
        var _this = $(this);
        var _data = {
            'image': '#Orders_img',
            'price': '#Orders_price',
            'total': '#Orders_total_price'
        };
        var _p = _this.attr('data-percent');
        var _c = $('#Orders_count');
        _cv = ( _c.val() > 0 ) ? parseInt( _c.val() ) : 1;
        
        if( _this.val().trim() != '' )
        {
            $.ajax({
                type: 'POST',
                data: 'ajax=click&url='+encodeURIComponent( _this.val().trim() )+'&count='+_cv,
                url: _this.data('load'),
                cache: false,
                processData: false,
                beforeSend: function(){
                    $.MCustomLoader(true);
                    $.each(_data, function(i, val) {
                        $( '#procedure-form '+val ).val('');
                    });
                    
                    $( '#procedure-form '+_data['price'] ).removeAttr('data-one');
                },     
                success: function(data){
                    $.MCustomLoader(false);
                    if( data != '' )
                    {
                        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                        
                        $.each(obj, function(i, val) {
                            var _o = $( '#procedure-form '+_data[ i ] );
                            if( _o.length > 0 )
                            {
                                _o.val( val );
                            }
                        });
                        
                        $( '#procedure-form '+_data['price'] ).attr('data-one', obj.priceOne);

                        if( typeof(obj.price) != 'undefined' && obj.price != '' )
                            $( '#procedure-form '+_data.price ).trigger('keyup');
                    }
                }
            });
        }
        else
        {
            $.each(_data, function(i, val) {
                $( '#procedure-form '+val ).val('');
            });
            
            $( '#procedure-form '+_data['price'] ).removeAttr('data-one');
        }
    });

    $(document).on('keyup', '#procedure-form #Orders_price', function(){
        var _this = $(this);
        var _p = $('#procedure-form #Orders_link').attr('data-percent');
        var _t = $('#procedure-form #Orders_total_price');
        var _c = parseInt( $('#Orders_count').val() );
        var _pOne = _this.attr('data-one');
        
        var _v = parseFloat( _this.val() );

        if( _v != '' && $.isNumeric(_v) )
        {
            var totalVal = ( _v * ( parseFloat( _p ) / 100 ) ) + _v;
        
            _t.val( totalVal.toFixed(2) );
        }
        else
        {
            _t.val( '' );
        }
    });

    $(document).on('click', '#addNewLink', function(){
        var _this = $(this);
        var _form = _this.closest('form');

        _form.attr('data-type', 'addLink');
        _form.trigger('submit');

        return false;
    });

    $(document).on('click', '.go2Order', function(){
        var _this = $(this);
        var _form = _this.closest('form');
        var _modal = _this.closest('#procedureModal');

        _form.removeAttr('data-type');
        if( _modal.length > 0 )
            _form.trigger('submit');
    });

    $(document).on('click', '.link-thumbnail[data-do], button[data-do]', function(){
        var _this = $(this);
        var _href = _this.data('do');

        if( typeof _href != 'undefined' && _href.trim() != '' )
        {
            $.ajax({
                type: 'POST',
                data: 'ajax=click',
                url: _href,
                cache: false,
                processData: false,
                beforeSend: function(){
                    $.MCustomLoader(true);
                },     
                success: function(data){
                    $.MCustomLoader(false);
                    if( data != '' )
                    {
                        var _form = $('#procedure-form');
                        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                        if( typeof(obj.header) != "undefined" && obj.header !== null )
                        {
                            $('.total-price-form').remove();
                            $('.cart-content-form').remove();
                            $( obj.header ).insertBefore( _form );
                        }

                        if( typeof(obj.cart) != "undefined" && obj.cart !== null )
                        {
                            $( '.inputs-wrapper--shopping' ).replaceWith( obj.cart );
                            if( !_this.hasClass('link-thumbnail') )
                                $('.inputs-wrapper--shopping').show();

                            $('.shopping-card--icon .notification-circle').html( obj.cartCount )
                        }  
                    }
                }
            });
        }
    });
    $(document).on('click', '.inputs-wrapper--shopping button[data-url]', function(){
        var _this = $(this)
        var url = _this.data('url');
        var urgent_order = $('#urgent-order').is(':checked');
        $.ajax({
            type: 'POST',
            data: 'ajax=click&urgent='+urgent_order,
            url: url,
            xhrFields: { withCredentials: true }, 
            cache: false,
            processData: false,
            beforeSend: function(xhr){
                
                $.MCustomLoader(true);
            },     
            success: function(data){

                $.MCustomLoader(false);
                var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                if( typeof(obj.isGuest) != "undefined" && obj.isGuest !== null )
                {

                    $('.hamburger').trigger('click');
                    $('.b-nav__tab.b-nav__tab--second a').trigger('click');
                }
                if( obj.redirect )
                {

                    // alert('test' + obj.redirect)
                    setTimeout(function(){document.location.href = obj.redirect},250);
                    // window.location.href = obj.redirect;
                }
            }
        });

        return false;
    });

    $(document).on('click', 'button.orders-tab__button[data-type]', function(){
        var _this = $(this);
        var type = _this.data('type');

        $('#OrdersGroups_position').val( type );
        $('#user-filter-form').trigger('submit');
        
        return false;
    });

    $(document).on('change', 'form#procedure-form #Orders_c_id', function(){
        var _this = $( this );
        var _p = _this.find('option:selected');
        var _l1 = $('[for="Orders_price"]');
        var _l2 = $('[for="Orders_total_price"]');
        var _l1d = _p.data('curr-label1')+'<span class="required">*</span>';
        var _l2d = _p.data('curr-label2')+'<span class="required">*</span>';

        _l1.html( _l1d );
        _l2.html( _l2d );
        
        $( 'form#procedure-form .corrier-price' ).html( '+'+_p.data('percent') +'%' );
        $( 'form#procedure-form #Orders_link' ).attr('data-percent', _p.data('percent'));

        $('form#procedure-form #Orders_price').trigger('keyup');
    });

    $(document).on('click', '.createOrderModal', function(){
        var _this = $(this);

        $.ajax({
            type: 'POST',
            data: 'ajax=click',
            url: _this.data('url'),
            cache: false,
            processData: false,
            beforeSend: function(){
                $.MCustomLoader(true);
                $('#procedureModal').remove();
            },     
            success: function(data){
                $.MCustomLoader(false);

                setTimeout(function(){
                    $('body').append(data);
                    $('.blurry-background').addClass('blurry-background--active');
                    $('#procedureModal').addClass('b-popup--active');
                    openedAnyModalCB();
                    $('#Orders_c_id').trigger('change');
                    $('#procedureModal .selectpicker').selectpicker();
                }, 1100);
            }
        });
        
        return false;
    });

    $(document).on('change', '#countryFilterField', function(){
        var _this = $( this );
        $('#OrdersGroups_c_id').val( _this.val() );
        $('#user-filter-form').trigger('submit');

       return false; 
    });

    $(document).on('change', '#countryFilterFieldType', function(){
        var _this = $( this );
        $('#OrdersGroups_type').val( _this.val() );
        $('#user-filter-form').trigger('submit');

       return false; 
    });

    $(document).on('click', '.order-pager li a', function(){
        var _this = $(this);
        var _forum = $('#user-filter-form');

        $.ajax({
            type: 'POST',
            data: 'ajax=click',
            url: _this.attr('href'),
            cache: false,
            processData: false,
            beforeSend: function(){
                $.MCustomLoader(true);
            },     
            success: function(data){
                $.MCustomLoader(false);

                //console.log( $( data ) );
                //if( typeof $( data )[2] != 'undefined' )
                //{
                    $('.content').replaceWith( data );
                    //$('.orders-content-main').find('.selectpicker').selectpicker();
                //}
            }
        });

        return false;
    });

    $(document).on('click', '.news-pager li a', function(){
        var _this = $(this);
        $.ajax({
            type: 'POST',
            data: 'ajax=click',
            url: _this.attr('href'),
            cache: false,
            processData: false,
            beforeSend: function(){
                $.MCustomLoader(true);
            },     
            success: function(data){
                $.MCustomLoader(false);

                if( typeof $( data )[0] != 'undefined' )
                {
                    $('.new-content').replaceWith( $( data )[0] );
                }
            }
        });

        return false;
    });

    $(document).on('click', '.showTracking, .receivingPerson', function(){
        var _this = $(this);

        $.ajax({
            type: 'POST',
            data: 'ajax=click',
            url: _this.attr('href'),
            cache: false,
            processData: false,
            beforeSend: function(){
                $.MCustomLoader(true);
                $('#trackingModal').remove();
            },     
            success: function(data){
                $.MCustomLoader(false);

                setTimeout(function(){
                    $('body').append(data);
                    $('.blurry-background').addClass('blurry-background--active');
                    $('#trackingModal').addClass('b-popup--active');
                    openedAnyModalCB()
                }, 1100);
            }
        });
        return false; 
    });

    $(document).on('click', '.addBalanceButton[data-url]', function(){
       var _this = $(this);

        $.ajax({
            type: 'POST',
            data: 'ajax=click',
            url: _this.data('url'),
            cache: false,
            processData: false,
            beforeSend: function(){
                $.MCustomLoader(true);
                $('#addBalanceModal').remove();
            },     
            success: function(data){
                $.MCustomLoader(false);

                setTimeout(function(){
                    $('body').append(data);
                    $('.blurry-background').addClass('blurry-background--active');
                    $('#addBalanceModal').addClass('b-popup--active');
                    openedAnyModalCB()
                }, 1100);
            }
        });
        
       return false; 
    });

    $(document).on('click', '.payment-radiogroup-row label', function(){
        var _this = $(this);
        var _p = _this.closest('.payment-radiogroup-row');

        if( _p.hasClass('showAmountInput') )
            $('.amountInput').show();
        else
            $('.amountInput').hide();

        $('.amountInput input').val('');
    });

    $(document).on('click', '.close-additional-item', function(){
        var _items = $('[data-repeat-id="item"]');

        _items.each(function(i, v){
            var e = $(this).find('.errorText');

            e.each(function(ii, vv){
                $(this).attr('data-error', $(this).data('default')+'_'+i);
            });
        }); 
    });

    $(document).on('click', 'button[data-repeat-target="item"]', function(){
        var _items = $('[data-repeat-id="item"]');

        _items.each(function(i, v){
            var e = $(this).find('.errorText');

            e.each(function(ii, vv){
                $(this).attr('data-error', $(this).data('default')+'_'+i);
            });
        });
    });

    $(document).on('change', '#Declarations_link_id', function(e) {
        var _this = $(this);
        if( _this.val() != '' )
            $('#Declarations_name').val( _this.find('option:selected').html() );
        else
            $('#Declarations_name').val( '' );
    });

    $(document).on('change', '.uploadDeclarationsFiles', function(e) {
        var _this = $(this);
        var data = new FormData();
        var files = _this[0].files;

        if( files.length <= 0 )
            return;

        for(var i = 0; i < files.length; i++)
        {
            data.append(_this.attr('name'), files[i]);
            data.append('ajax', 'change');  
        }

        swal({   
            title: _this.data('title'),
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30AB29',
            confirmButtonText: _this.data('confirm'),
            cancelButtonText: _this.data('cancel'),
        },
        function(isConfirm){
            if (isConfirm) {
                $.ajax({
                    type: 'POST',
                    data: data,
                    url: _this.data('url'),
                    cache: false,
                    contentType: false,
                    processData: false,
                    beforeSend: function(){
                        $.MCustomLoader(true);
                    },     
                    success: function(data){
                        $.MCustomLoader(false);
                        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                        if( typeof(obj.error) != "undefined" && obj.error !== null )
                        {
                            swal({    
                                title: obj.title,
                                text: obj.error,
                                html: true,
                                timer: 3000,
                                type: "error",
                                showCancelButton: false,
                                confirmButtonText: obj.close
                            });
                        }
                        else
                        {
                            swal({
                              title :obj.success, 
                              text : "", 
                              type : "success",
                              timer: 3000,   
                              showConfirmButton: false 
                            });

                            window.setTimeout(function() {
                                location.reload();
                            }, 3200);
                        } 
                    }
                });
            }
            else {
                _this.val('')
            }
        }); 
    });

    $(document).on('click', '.calculateButton', function(e) {
        var _this = $(this);
        var _c = $('#countriesSelect');
        var _currency = _this.data('currency');
        
        if( _c.val() == '' )
            return;
        
        var _f = $('#formuleJson').html();
        if( _f.trim() == '' )
            return;

        _f = $.parseJSON( _f );
        _f = _f[ _c.val() ];

        var obj = $('#pricesJson').html();
        if( obj.trim() == '' )
            return;

        obj = $.parseJSON( obj );
        obj = obj[ _c.find('option:selected').data('id') ];

        if( typeof obj == 'undefined' )
            return;

        obj = obj['prices'];

        var _weight = parseFloat( $('#cargo_weight_input').val() );
        var _w = $('#cargo_w_input').val();
        var _h = $('#cargo_h_input').val();
        var _l = $('#cargo_l_input').val();
        var _label = $('.calculateLabel');
        var _p = 0;

        //if( _w >= 1 || _h >= 1 || _l >= 1)
        if( _w != '' && _h != '' && _l != '' )
        {
            //var replaced = _f.replace('{price}', 1).replace('{width}', ( _w * 100 )).replace('{height}', ( _h * 100 )).replace('{length}', ( _l * 100 ));
            var replaced = _f.replace('{price}', 1).replace('{width}', ( _w )).replace('{height}', ( _h )).replace('{length}', ( _l ));
            var result = ( eval( replaced ) ).toFixed(2);
            if( result > _weight )
                _weight = result;
            
            
        }
        
        obj = Object.keys(obj).map(function (key) { return obj[key]; });
        var prices = $.grep(obj, function( n, i ){
            return ( _weight > parseFloat(n.min_weight) && _weight <= parseFloat(n.max_weight) );

        });

        if( prices.length > 0 )
        {
            var _pResult = prices[0].price.replace('{weight}', _weight).replace('{width}', _w).replace('{height}', _h).replace('{length}', _l);
            _p = eval( _pResult );
        }
        
        //_label.find('span').html(' '+_p.toFixed(2) + ' AZN');
        _label.find('span').html(' '+  ( _p / _currency ).toFixed(1) + ' USD');
        _label.show();

        return false;
    });

    $(document).on('keyup', '#currencyTL, #currencyUSD', function(e) {
        var _this = $(this);
        var _c = _this.data('coef');
        var _t = '0 AZN';
        var _obj = ( _this.attr('id') == 'currencyTL' ) ? 'tl' : 'usd';

        if( !isNaN( parseFloat( _this.val() ) ) )
            _t = ( parseFloat( _this.val() ) * parseFloat( _c ) ).toFixed(2)+' AZN';

        $('#'+_obj).html( _t );
    });

    $(document).on('submit', '#trackingSearch', function(e) {
        var _this = $(this);   
        var _i = _this.find('input#search').val();

        //if( _i.trim().length > 5 )
        //{
            $.ajax({
                type: 'POST',
                data: 'ajax=click&'+_this.serialize(),
                url: _this.attr('action'),
                cache: false,
                processData: false,
                beforeSend: function(){
                    $.MCustomLoader(true);
                    $('#trackingModal').remove();
                },     
                success: function(data){
                    $.MCustomLoader(false);

                    var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                    if( typeof(obj.error) != "undefined" && obj.error !== null )
                    {
                        swal({
                          title : obj.error, 
                          text : "", 
                          type : "error",
                          timer: 3000,   
                          showConfirmButton: false 
                        });
                    }
                    if( typeof(obj.content) != "undefined" && obj.content !== null )
                    {
                        setTimeout(function(){
                            $('body').append(obj.content);
                            $('.blurry-background').addClass('blurry-background--active');
                            $('#trackingModal').addClass('b-popup--active');
                            openedAnyModalCB()
                        }, 1100);
                    }
                }
            });
        //}

        return false;
    });

    $(document).on('click', '.fag-data', function(e) {
       var _this = $(this);
       var _title = _this.find('p').html();
       var _text = _this.find('div').html();
       if( $('#faqModal').length > 0 )
            $('#faqModal').remove();

       var _modal = '<div id="faqModal" class="b-popup">'
                        +'<div class="b-popup__inner px-5 py-4">'
                            +'<a href="#" class="close-b-popup text-right f-25"> &times; </a>'
                            +'<h1 class="text-center mb-4">'+_title+'</h1>'
                            +'<p class="text-center">'+_text+'</p>'
                        +'</div>'
                    +'</div>';

        $('body').append(_modal);
        $('.blurry-background').addClass('blurry-background--active');
        $('#faqModal').addClass('b-popup--active');
        openedAnyModalCB()

       return false; 
    });

    $(document).on('click', '.orderPaymentCheckbox', function(e) {
        var _this = $(this);
        var _b = $('.pay-button');

        if( $('.orderPaymentCheckbox:checked').length > 0 )
            _b.removeAttr('disabled');
        else
            _b.attr('disabled','disabled');
    });

    $(document).on('click', '.og-pay', function(e) {
        var _this = $(this);
        var _b = $('.og-total-pay');

        if( $('.og-pay:checked').length > 0 )
            _b.show();
        else
            _b.hide();
    });

    $(document).on('click', '.og-total-pay', function(e) {
        var _this = $(this);
        var _c = $('.og-pay:checked');
        var label = _this.data('label');
        var _p = 0;

        if( _c.length > 0 )
        {
            label = label.replace('{count}', _c.length);
            _c.each(function(i, v){
                _p += parseFloat( $(this).data('price') );
            });
            
            label = label.replace('{price}', _p.toFixed(2) );

            swal({   
                title: label,
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#30AB29',
                confirmButtonText: _this.data('conf'),
                cancelButtonText: _this.data('cancel'),
            },
            function(isConfirm){
                if (isConfirm) {
                    $.ajax({
                        type: 'POST',
                        data: 'ajax=click',
                        url: _this.data('url')+'?'+$('.og-pay').serialize(),
                        cache: false,
                        contentType: false,
                        processData: false,
                        beforeSend: function(){
                            $.MCustomLoader(true);
                        },     
                        success: function(data){
                            $.MCustomLoader(false);
                            if( data != '' )
                            {
                                var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                                if( typeof(obj.redirect) != "undefined" && obj.redirect !== null )
                                    setTimeout(function(){document.location.href = obj.redirect},250);
                                    // window.location.href = obj.redirect;
                                /*
                                swal({
                                  title : data, 
                                  text : "", 
                                  type : "success",
                                  timer: 3000,   
                                  showConfirmButton: false 
                                });

                                window.setTimeout(function() {
                                    location.reload();
                                }, 3100);*/
                            }
                        }
                    });
                }
                else
                {
                    $('.og-pay').prop( 'checked', false );
                    _this.hide();
                }
            }); 
        }

        return false;
    });

    $(document).on('click', '.pay-button', function(e) {
        var _this = $(this);
        var _c = $('.orderPaymentCheckbox:checked');
        var label = _this.data('label');
        var _p = 0;
        if( _c.length > 0 )
        {
            label = label.replace('{count}', _c.length);
            _c.each(function(i, v){
                _p += parseFloat( $(this).data('price') );
            });

            label = label.replace('{price}', _p);
            swal({   
                title: label,
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#30AB29',
                confirmButtonText: _this.data('conf'),
                cancelButtonText: _this.data('cancel'),
            },
            function(isConfirm){
                if (isConfirm) {
                    $.ajax({
                        type: 'POST',
                        data: 'ajax=click',
                        url: _this.data('url')+'?'+$('.orderPaymentCheckbox').serialize(),
                        cache: false,
                        contentType: false,
                        processData: false,
                        beforeSend: function(){
                            $.MCustomLoader(true);
                        },     
                        success: function(data){
                            $.MCustomLoader(false);
                            if( data != '' )
                            {
                                var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                                if( typeof(obj.redirect) != "undefined" && obj.redirect !== null )
                                    setTimeout(function(){document.location.href = obj.redirect},250);
                                    // window.location.href = obj.redirect;
                                /*
                                swal({
                                  title : data, 
                                  text : "", 
                                  type : "success",
                                  timer: 3000,   
                                  showConfirmButton: false 
                                });

                                window.setTimeout(function() {
                                    location.reload();
                                }, 3100);*/
                            }
                        }
                    });
                }
                else
                {
                    $('.orderPaymentCheckbox').prop( 'checked', false );
                    _this.attr('disabled','disabled');
                }
            }); 
        }

        return false;
    });

    $(document).on('keypress', '[name="amount"]', function(e){
        if(e.which == 13){//Enter key pressed
            $('.add2balance').click();//Trigger search button click event
        }
    });

    $(document).on('click', '.add2balance', function(e) {
        var _this = $(this);
        var _input = $('.amountInput');
        var _val = _input.find('[name="amount"]').val();

        if( !_input.is(':hidden') && $.isNumeric( _val ) && _val > 0 )
        {
            $.ajax({
                type: 'POST',
                data: 'ajax=click&amount='+_val,
                url: _this.data('url'),
                cache: false,
                processData: false,
                beforeSend: function(){
                    $.MCustomLoader(true);
                },     
                success: function(data){
                    $.MCustomLoader(false);
                    var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;

                    if( typeof(obj.redirect) != "undefined" && obj.redirect !== null )
                        setTimeout(function(){document.location.href = obj.redirect},250);
                        // window.location.href = obj.redirect;
                }
            });
        }

      return false;  
    });
    
    $(document).on('change', '#OrdersGroups_link_id', function(e) {
        var _this = $(this);
        $('#OrdersGroups_new_name').val('');
        if( _this.val() == 'other' )
            $('.new-link-name').show();
        else
            $('.new-link-name').hide();
    });
    
    $(document).on('click', '.verificationButton', function(e) {
        var _this = $(this);
        var _i = $('.b-verification__input').val();
        
        if( _i > 0 )
        {
            $.ajax({
                type: 'POST',
                data: 'ajax=click&code='+_i,
                url: location.href,
                cache: false,
                processData: false,
                beforeSend: function(){
                    $.MCustomLoader(true);
                },     
                success: function(data){
                    $.MCustomLoader(false);
                    if( data != '' )
                    {
                        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
                        if( typeof(obj.error) != "undefined" && obj.error !== null )
                        {
                            swal({
                              title : obj.error, 
                              text : "", 
                              type : "error",
                              timer: 3000,   
                              showConfirmButton: false 
                            });
                        }
                        else
                            setTimeout(function(){document.location.href = obj.redirect},250);
                            // window.location.href = obj.redirect;
                    }
                }
            });
        }
        
        return false;
    });
    
    $(document).on('change', '#OrdersGroups_c_id', function(e) {
       var _this = $( this );
       var _s = $('#OrdersGroups_link_id');
       _s.find('option[data-cid]').hide();
       _s.find('option[value="other"]').hide();
       
       _s.find('option[data-cid="'+_this.val()+'"]').show();
       if( _this.val() != '' )
            _s.find('option[value="other"]').show(); 
        
    });
    
    /*
    $(document).on('blur', '#procedure-form #Orders_count', function(){
        var _pOne = $('#Orders_price').attr('data-one');

        
        if( typeof _pOne != 'undefined' )
            $('#procedure-form #Orders_link').trigger('blur');
        else
            $('#procedure-form #Orders_price').trigger('keyup');
    });*/
    
    $(document).on('click', '.delete-og-button', function(){
        var _this = $(this);
    
        swal({   
            title: _this.data('label'),
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30AB29',
            confirmButtonText: _this.data('confirm'),
            cancelButtonText: _this.data('cancel'),
        },
        function(isConfirm){
            if (isConfirm) {
                location.href = _this.attr('href');
            }
        });
        return false;
    });
    
    $(document).on('change', '#OrdersGroupsFiles_file[data-new]', function(e){
        var _this = $(this);
        var data = new FormData();
        var files = _this[0].files;
        var isNewRecord = _this.data('new');

        if( files.length <= 0 )
            return;
        
        $('.b-invoice__fileinfo.notSaved').remove();
        
        var len = $('.b-invoice__fileinfo').length;
        
        for(var i = 0; i < files.length; i++)
        {
            var _file = '<div class="b-invoice__fileinfo d-flex justify-content-between pr-2 notSaved" data-row-label="Fayl">'
            	+'<div>'
                    +'<span class="b-invoice__file-type mr-2">'+$.getExtName( files[i].name )+'</span>'
            	    +'<div class="b-invoice__about flex-column">'
            			+'<span class="b-invoice__file-name">Fayl '+ ( i + 1 + len ) +'</span>'
            			+'<span class="b-invoice__file-size">'+ $.bytesToSize( files[i].size ) +'</span>'
            		+'</div>'
            	+'</div>'
            +'</div>';
            
            $( '.b-invoice__fileinfos' ).append( _file );
        }
        
        
    });
    
});