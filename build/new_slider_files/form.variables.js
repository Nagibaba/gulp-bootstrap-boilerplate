var options_reg_form = {
    success: function(data, statusText, xhr, $form)
    {
        $.MCustomLoader(false);
        $form.find('input').removeClass('is-invalid').addClass('valid');
        $form.find('.errorText').hide().html('');
        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
        if( typeof(obj.errors) != "undefined" && obj.errors !== null )
        {   
            $.each(obj.errors, function(i, val) {
                $form.find('.errorText[data-error="'+i+'"]').html(val[0]).show();
                $form.find('.errorText[data-error="'+i+'"]').closest('form-group').find('input').removeClass('valid').addClass('is-invalid');
            });
        }
        else
        {
            var timer = 1000;
            
            if( typeof(obj.success) != "undefined" && obj.success !== null )
            {
                swal({
                  title :obj.success, 
                  text : obj.desc, 
                  type : "success",
                  //timer: 3000,   
                  html: true,
                  showConfirmButton: true 
                }, function(){
                    if( typeof(obj.redirect) != "undefined" && obj.redirect !== null )
                    {
                        window.location.href = obj.redirect;
                    }
                });
            }
            
            //if( $form.attr('id') == 'login-form' )
                window.location.href = obj.redirect;
        }
    }
};

var options_login_form = options_reg_form;

var options_procedure_form = {
    beforeSubmit: function(arr, $form, options) {
        var urgent_order = $form.find('.form-check #urgent-order');
        if( urgent_order.length <= 0 )
            urgent_order = $form.find('.form-check #urgent-order-main');
        
        if( typeof $form.attr('data-type') != 'undefined' )
            arr.push({ name : 'type', value : $form.attr('data-type') });
        
        arr.push({ name : 'urgent', value : urgent_order.is(':checked') });
    },
    success: function(data, statusText, xhr, $form)
    {   
        $.MCustomLoader(false);
        $form.find('input').removeClass('is-invalid').addClass('valid');
        $form.find('.errorText').hide().html('');
        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
        if( typeof(obj.errors) != "undefined" && obj.errors !== null )
        {   
            $.each(obj.errors, function(i, val) {
                $form.find('.errorText[data-error="'+i+'"]').html(val[0]).show();
                $form.find('.errorText[data-error="'+i+'"]').closest('form-group').find('input').removeClass('valid').addClass('is-invalid');
            });
        }
        else
        {
            if( typeof(obj.header) != "undefined" && obj.header !== null )
            {
                $('.total-price-form').remove();
                $('.cart-content-form').remove();
                
                $( obj.header ).insertBefore( $form );
                $form[0].reset();
            }
            
            if( typeof(obj.cart) != "undefined" && obj.cart !== null )
            {
                $( '.inputs-wrapper--shopping' ).replaceWith( obj.cart );
                $('.shopping-card--icon .notification-circle').html( obj.cartCount )
            }
            
            if( typeof(obj.isGuest) != "undefined" && obj.isGuest !== null )
            {
                $('.hamburger').trigger('click');
                $('.b-nav__tab.b-nav__tab--second a').trigger('click');
            }
            
            if( typeof(obj.redirect) != "undefined" && obj.redirect !== null )
            {
                window.location.href = obj.redirect;
            }
        }
    }
};

var options_user_filter_form = {
    success: function(data, statusText, xhr, $form)
    {
        $.MCustomLoader(false);
        $('.content').replaceWith( data );
        
        /*
        if( typeof $( data )[2] != 'undefined' )
        {
            $('.orders-content-main').replaceWith( $( data )[2] );
            
            $('.orders-content-main').find('.selectpicker').selectpicker();
        }*/
    }
};

var options_declaration_form = {
    success: function(data, statusText, xhr, $form)
    {
        $.MCustomLoader(false);
        $form.find('input').removeClass('is-invalid').addClass('valid');
        $form.find('.errorText').hide().html('');
        
        var obj = ( typeof(data) != 'object' ) ? $.parseJSON(data) : data ;
        if( typeof(obj.errors) != "undefined" && obj.errors !== null )
        {   
            var errors = ( typeof obj.errors == 'string' ) ? $.parseJSON( obj.errors ) : obj.errors;
            $.each(errors, function(i, val) {
                $form.find('.errorText[data-error="'+i+'"]').html(val[0]).show();
                $form.find('.errorText[data-error="'+i+'"]').closest('form-group').find('input').removeClass('valid').addClass('is-invalid');
            });
        }
        else
        {
            if( typeof( obj.success ) != "undefined" && obj.success !== null )
            {
                swal({
                  title :obj.success, 
                  text : "", 
                  type : "success",
                  timer: 3000,   
                  showConfirmButton: false 
                });
            }
            
            if( typeof( obj.redirect ) != "undefined" && obj.redirect !== null )
                window.setTimeout(function() {
                    window.location.href = obj.redirect;
                }, 4100);
        }
    }
};