$(function()
{
	$('.add_back').on("click",function(){
		history.go(-1);
	});
	$("input.search__field").on("keyup focus",function(){
		var curVal = $(this).val();
			if (curVal.length>2){
				var form = $(this).parents("form");
				var formUrl = "/ajax/search.php";
				var formMETHOD = $(form).attr('method');
				var dataTYPE = "json";
				var formID = "#"+$(form).attr('id');
				$.ajax({
				type: formMETHOD,
				url: formUrl,
				data: $(form).serialize(),
				dataType:dataTYPE,
				success: function(data){
					err = false;

				        if (data.show_dop == 1){
							$('.search__all').html(data.count);
				        }else{
				        	$('.search__hidden').css("display","none");
				        	$('.search__all').html(" ");
				        }
				        if (data.select){
				        	$('#from_ajax').html(data.select);
				        	$('.search__hidden').css("display","block");
				        }

			    }
			});
		}else{
			$('.search__hidden').css("display","none");
			$('.search__all').html(" ");
		}
	});

	$("body").on('click','.form__button',function(e)
	{
		e.preventDefault();
		var form = $(this).parents("form");
		var formUrl = $(form).attr('action');
		var formMETHOD = $(form).attr('method');
		var dataTYPE = "json";
		var formID = "#"+$(form).attr('id');
		$.ajax({
			type: formMETHOD,
			url: formUrl,
			data: $(form).serialize(),
			dataType:dataTYPE,
			success: function(data){
				err = false;
				if (data.err){
		           $(formID + " .form__disabled").removeClass("none");
		           $.each(data.err,function(n,val){
						err = true;
						$(formID +' [name='+ val + ']').addClass('state-error');
					});
		            if (data.suc){
		                $.each(data.suc,function(n,val){
						    //console.log(val);
							err = false;
							$(formID+' [name='+ val + ']').removeClass('state-error');
						});
		            }
		        }else if (data.link){
		            window.location.href=data.link;
		        }else{
		            $('.form__message').css("display","block");
		        }
		    }
		});
	return false;
	});

});