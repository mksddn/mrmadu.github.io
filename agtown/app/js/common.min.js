// БИБЛИОТЕКИ ДЛЯ ЛК

// IEDIT

$(document).ready(function(){

  function windowOffset(elem){
    var iTop = elem.offset().top;
    var iLeft = elem.offset().left;
    var res = {
      top: iTop - $(window).scrollTop(),
      left: iLeft - $(window).scrollLeft()
    }
    return res;
  } 


  //Inserting required elements.
  var iEditHTML = '<div class="iEdit-img-edit"><canvas class="iEdit-img-edit-can"></canvas><canvas class="iEdit-img-edit-process-can"></canvas><div class="iEdit-img-edit-select"><div class="iEdit-img-edit-select-resize"></div></div><div class="iEdit-img-edit-act iEdit-img-edit-save"> Готово </div><div class="iEdit-img-edit-act iEdit-img-edit-cancel"> Отмена </div></div>';
  $("body").append(iEditHTML);
  
  
  //Main Image Editor Object
  window.iEdit = {

    //Caching Selectors
    can: $('.iEdit-img-edit-can')[0],
    processCan: $('.iEdit-img-edit-process-can')[0],
    selectionBox: $('.iEdit-img-edit-select'),
    container: $('.iEdit-img-edit'),
    saveBtn: $(".iEdit-img-edit-save"),
    cancelBtn: $('.iEdit-img-edit-cancel'),

    //Internal Properties
    drag: false,
    resize: false,
    square: true,
    status: false,
    grcx: null,
    grcy: null,
    callback: null,
    imageType: null,
    imageQuality: 1,

    //Open the Image Editor with appropriate settings
    open: function(imgObj, square, callback, imageType, imageQuality){

      if(imgObj.constructor !== File || !imgObj.type.match('image.*')){
        return false;
      }

      this.drag = false;
      this.resize = false;
      
      //Using the supplied settings or using defaults in case of invalid settings

      this.square = (square === true) ? true : false;
      this.imageQuality = (Number(imageQuality) > 0 && Number(imageQuality) <= 1) ? Number(imageQuality) : 1;

      if(imageType == "jpeg" || imageType == "png" || imageType == "gif" || imageType == "bmp"){ //JPG and any other would default to JPEG//
        this.imageType = imageType;
      }else{
        this.imageType = "jpeg";  
      }

      //false: Not In Use
      this.grcx = false;
      this.grcy = false;
      
      //Checking if callback is a valid function
      var getType = {};
      this.callback = (callback && getType.toString.call(callback) === '[object Function]') ? callback : false;

      this.status = true;

      var ctx = this.can.getContext("2d");

      //Shwoing the conatiner on screen
      iEdit.container.css("display","block").stop().animate({"opacity":"1"});

      var img = new Image();
      var that =  this;

      //Draw the image on the visible canvas depending on the aspect ratio of the image.
      $(img).on("load", function(){

        if(img.width > img.height){
          that.can.width = img.width;
          that.can.height = img.height;

          that.can.style.width = ($(window).width()/2*1)+"px"; 
          that.can.style.height = (img.height*(($(window).width()/2*1)/img.width))+"px";

          
          ctx.fillStyle = '#fff'; 
          ctx.fillRect(0, 0, that.can.width, that.can.height);

          ctx.drawImage(img, 0, 0, that.can.width, that.can.height);

          iEdit.selectionBox.height($(that.can).height()-20);
          iEdit.selectionBox.width($(that.can).height()-20);

          iEdit.selectionBox.css({'left': (($(window).width()/2) - $(that.can).height()/2) + 10  + 'px' ,'top': $(window).height()/2 - $(that.can).height()/2 - 15 + 'px' });

        }else if(img.width < img.height){

          that.can.width = img.width;
          that.can.height = img.height;

          that.can.style.width = (img.width*(($(window).height()/3*2)/img.height)) + "px";
          that.can.style.height = ($(window).height()/3*2) + "px"; 

          ctx.fillStyle = '#fff'; 
          ctx.fillRect(0, 0, that.can.width, that.can.height);

          ctx.drawImage(img, 0, 0, that.can.width, that.can.height);

          iEdit.selectionBox.height($(that.can).width()-20);
          iEdit.selectionBox.width($(that.can).width()-20);

          iEdit.selectionBox.css({'left': (($(window).width()/2) - $(that.can).width()/2) + 10  + 'px' ,'top': $(window).height()/2 - $(that.can).width()/2 - 15 + 'px' });


        }else{

          that.can.width = img.width;
          that.can.height = img.height;

          that.can.style.width = ($(window).height()/4.8*3.3) + "px";
          that.can.style.height = ($(window).height()/4.8*3.3) + "px";          


          ctx.fillStyle = '#fff'; 
          ctx.fillRect(0, 0, that.can.width, that.can.height);

          ctx.drawImage(img, 0, 0, that.can.width, that.can.height);

          iEdit.selectionBox.height($(that.can).width()-20);
          iEdit.selectionBox.width($(that.can).width()-20);

          iEdit.selectionBox.css({'left': (($(window).width()/2) - $(that.can).width()/2) + 10  + 'px' ,'top': $(window).height()/2 - $(that.can).width()/2 - 15 + 'px' });
        }

      });
      
      img.src = URL.createObjectURL(imgObj);
      return true;
    },

    //Close the image editor and reset the settings.
    close: function(){
      this.drag = false;
      this.resize = false;
      this.square = true;
      this.status = false;
      this.grcx = undefined;
      this.grcy = undefined;
      this.callback = undefined;

      this.can.height = 0;
      this.can.width = 0;

      this.processCan.height = 0;
      this.processCan.width = 0;

      var pCtx = this.processCan.getContext("2d");      
      var ctx = this.can.getContext("2d");

      ctx.clearRect(0, 0, 0, 0);
      pCtx.clearRect(0, 0, 0, 0);

      iEdit.selectionBox.css({
        "height":'0px',
        "width":'0px',        
      });   

      iEdit.container.stop().animate({
        "opacity":"0"
      }, 300);

      setTimeout(function(){
        iEdit.container.css({"display":"none"});
      }, 300);

    }
  }

  //Set flags to stop tracking mouse movement.
  $(document).on("mouseup",function(){
    iEdit.drag = false;
    iEdit.resize = false; 

    iEdit.grcx = false;
    iEdit.grcy = false;
  });


  //Set flags to start trachong mouse movement.
  iEdit.selectionBox.on("mousedown",function(e){
    var that = $(this);

    var rcx = e.clientX - windowOffset(that).left;
    var rcy = e.clientY - windowOffset(that).top;

    iEdit.grcx = false;
    iEdit.grcy = false;

    if( (iEdit.selectionBox.width() - rcx <= 28) && (iEdit.selectionBox.height() - rcy <= 28)){
      iEdit.drag = false;
      iEdit.resize = true;
    }else{
      iEdit.drag = true;
      iEdit.resize = false;
    }


  });


  //Track mouse movements when the flags are set.
  $(document).on('mousemove', function(e){

    var rcx = e.clientX - windowOffset(iEdit.selectionBox).left;
    var rcy = e.clientY - windowOffset(iEdit.selectionBox).top;

    if(iEdit.drag === true && iEdit.status){

      if(iEdit.grcx === false){
        iEdit.grcx = rcx;
      }

      if(iEdit.grcy === false){
        iEdit.grcy = rcy;
      }

      var xMove = e.clientX - iEdit.grcx;
      var yMove = e.clientY - iEdit.grcy;


      if( (xMove + iEdit.selectionBox.width() >= $(iEdit.can).width() + windowOffset($(iEdit.can)).left) || xMove <= windowOffset($(iEdit.can)).left){
        if(xMove <= windowOffset($(iEdit.can)).left){
          iEdit.selectionBox.css({"left":windowOffset($(iEdit.can)).left+"px"});
        }else{
          iEdit.selectionBox.css({"left":windowOffset($(iEdit.can)).left + $(iEdit.can).width() - iEdit.selectionBox.width() + "px"});            
        }
      }else{
        iEdit.selectionBox.css({"left":xMove+"px"});
      }


      if((yMove + iEdit.selectionBox.height() >= $(iEdit.can).height() + windowOffset($(iEdit.can)).top) || (yMove <= windowOffset($(iEdit.can)).top) ){
        if(yMove <= windowOffset($(iEdit.can)).top){
          iEdit.selectionBox.css({"top":windowOffset($(iEdit.can)).top+"px"});
        }else{
          iEdit.selectionBox.css({"top":windowOffset($(iEdit.can)).top + $(iEdit.can).height() - iEdit.selectionBox.height() + "px"});
        }
      }else{
        iEdit.selectionBox.css({"top":yMove+"px"});
      }

    }else if(iEdit.resize === true && iEdit.status){

      var nWidth = rcx;
      var nHeight = rcy;

      if(iEdit.square){
        if(nWidth >= nHeight){//Width is the dominating dimension; 
          nHeight = nWidth;
          if(nWidth < 100){
            nWidth = 100;
            nHeight = 100;            
          }
        }else{//Height is the dominating dimension; 
          nWidth = nHeight;
          if(nHeight < 100){
            nWidth = 100;
            nHeight = 100;
          }
        }       

        if((nWidth + windowOffset(iEdit.selectionBox).left) >= $(iEdit.can).width() + windowOffset($(iEdit.can)).left){
          nWidth = (windowOffset($(iEdit.can)).left + $(iEdit.can).width()) - (windowOffset(iEdit.selectionBox).left);
          if(windowOffset(iEdit.selectionBox).top + nWidth > $(iEdit.can).height() + windowOffset($(iEdit.can)).top){
            nWidth = (windowOffset($(iEdit.can)).top + $(iEdit.can).height()) - (windowOffset(iEdit.selectionBox).top);
          }
          nHeight = nWidth;
        }else if((nHeight + windowOffset(iEdit.selectionBox).top) >= $(iEdit.can).height() + windowOffset($(iEdit.can)).top){
          nHeight = (windowOffset($(iEdit.can)).top + $(iEdit.can).height()) - (windowOffset(iEdit.selectionBox).top);
          if(windowOffset(iEdit.selectionBox).left + nHeight > $(iEdit.can).width() + windowOffset($(iEdit.can)).left){
            nHeight = (windowOffset($(iEdit.can)).left + $(iEdit.can).width()) - (windowOffset(iEdit.selectionBox).left);
          }
          nWidth = nHeight;
        }


      }else{

        if(nWidth <= 100){
          nWidth = 100;
        }
        if(nHeight <= 100){
          nHeight = 100;
        }     
        if(e.clientX >= $(iEdit.can).width() + windowOffset($(iEdit.can)).left){    //REASON: nWidth + windowOffset(iEdit.selectionBox).left = e.clientX;
          nWidth = (windowOffset($(iEdit.can)).left + $(iEdit.can).width()) - (windowOffset(iEdit.selectionBox).left);
        }
        if(e.clientY >= $(iEdit.can).height() + windowOffset($(iEdit.can)).top){  //REASON: Same logic as nWidth
          nHeight = (windowOffset($(iEdit.can)).top + $(iEdit.can).height()) - (windowOffset(iEdit.selectionBox).top);
        }
      }
      
      iEdit.selectionBox.css({
        "width":nWidth+"px",
        "height":nHeight+"px",        
      });

    }

  });

  //Process the selected region and return it as an image to the user defined callback.
  iEdit.saveBtn.on("click", function(){

    if(!iEdit.callback){
      iEdit.close();
      return;
    }

    var ratio = iEdit.can.width/$(iEdit.can).width();

    var h = iEdit.selectionBox.height() * ratio;
    var w = iEdit.selectionBox.width() * ratio;   
    var x = (windowOffset(iEdit.selectionBox).left - windowOffset($(iEdit.can)).left) * ratio;
    var y = (windowOffset(iEdit.selectionBox).top - windowOffset($(iEdit.can)).top) * ratio;    

    iEdit.processCan.height = h;
    iEdit.processCan.width = w;   
    
    var pCtx = iEdit.processCan.getContext("2d");

    pCtx.drawImage(iEdit.can, x, y, w, h, 0, 0, w, h);


    iEdit.callback(iEdit.processCan.toDataURL("image/"+iEdit.imageType, iEdit.imageQuality));
    iEdit.close();

  });

  //Close the canvas without processing the image on cancel.
  iEdit.cancelBtn.on("click", function(){
    iEdit.close();
  });

  //Setup canvas when window is resized. 
  $(window).on("resize", function(){
    if(iEdit.status){
      iEdit.selectionBox.css({'left': (($(window).width()/2) - $(iEdit.can).height()/2) + 10  + 'px' ,'top': $(window).height()/2 - $(iEdit.can).height()/2 + 10 + 'px' });
    }
  }); 
});


// UPLOAD-PREVIEW

(function($) {
  defaults = {
    formDataKey: "files",
    buttonText: "Добавить",
    buttonClass: "file-preview-button",
    shadowClass: "file-preview-shadow",
    tableCss: "file-preview-table",
    tableRowClass: "file-preview-row",
    placeholderClass: "file-preview-placeholder",
    loadingCss: "file-preview-loading",
    tableTemplate: function() {
      return "<table class='table table-striped file-preview-table' id='file-preview-table'>" +
      "<tbody></tbody>" +
      "</table>";
    },
    rowTemplate: function(options) {
      return "<tr class='" + config.tableRowClass + "'>" +
      "<td>" + "<img src='" + options.src + "' class='" + options.placeholderCssClass + "' />" + "</td>" +
      "<td class='filename'>" + options.name + "</td>" +
      "<td class='filesize'>" + options.size + "</td>" +
      "<td class='remove-file'><button>&times;</button></td>" +
      "</tr>";
    },
    loadingTemplate: function() {
      return "<div id='file-preview-loading-container'>" +
      "<div id='"+config.loadingCss+"' class='loader-inner ball-clip-rotate-pulse no-show'>" +
      "<div></div>" +
      "<div></div>" +
      "</div>" +
      "</div>";
    }
  }

  //NOTE: Depends on Humanize-plus (humanize.js)
  if(typeof Humanize == 'undefined' || typeof Humanize.filesize != 'function'){
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/humanize-plus/1.5.0/humanize.min.js")
  }

  var getFileSize = function(filesize) {
    return Humanize.fileSize(filesize);
  };

  // NOTE: Ensure a required filetype is matching a MIME type
  // (partial match is fine) and not matching against file extensions.
  //
  // Quick ref:  http://www.sitepoint.com/web-foundations/mime-types-complete-list/
  //
  // NOTE: For extended support of mime types, we should use https://github.com/broofa/node-mime
  var getFileTypeCssClass = function(filetype) {
    var fileTypeCssClass;
    fileTypeCssClass = (function() {
      switch (true) {
        case /video/.test(filetype):
        return 'video';
        case /audio/.test(filetype):
        return 'audio';
        case /pdf/.test(filetype):
        return 'pdf';
        case /csv|excel/.test(filetype):
        return 'spreadsheet';
        case /powerpoint/.test(filetype):
        return 'powerpoint';
        case /msword|text/.test(filetype):
        return 'document';
        case /zip/.test(filetype):
        return 'zip';
        case /rar/.test(filetype):
        return 'rar';
        default:
        return 'default-filetype';
      }
    })();
    return defaults.placeholderClass + " " + fileTypeCssClass;
  };

  $.fn.uploadPreviewer = function(options, callback) {
    var that = this;

    if (!options) {
      options = {};
    }
    config = $.extend({}, defaults, options);
    var buttonText,
    previewRowTemplate,
    previewTable,
    previewTableBody,
    previewTableIdentifier,
    currentFileList = [];

    if (window.File && window.FileReader && window.FileList && window.Blob) {

      this.wrap("<span class='" + config.shadowClass + "'></span>");
      buttonText = this.parent("." + config.shadowClass);
      buttonText.prepend("<span>" + config.buttonText + "</span>");
      buttonText.wrap("<span class='" + config.buttonClass + "'></span>");

      previewTableIdentifier = options.preview_table;
      if (!previewTableIdentifier) {
        $("span." + config.buttonClass).after(config.tableTemplate());
        previewTableIdentifier = "table." + config.tableCss;
      }

      previewTable = $(previewTableIdentifier);
      previewTable.addClass(config.tableCss);
      previewTableBody = previewTable.find("tbody");

      previewRowTemplate = options.preview_row_template || config.rowTemplate;

      previewTable.after(config.loadingTemplate());

      previewTable.on("click", ".remove-file", function() {
        var parentRow = $(this).parent("tr");
        var filename = parentRow.find(".filename").text();
        for (var i = 0; i < currentFileList.length; i++) {
          if (currentFileList[i].name == filename) {
            currentFileList.splice(i, 1);
            break;
          }
        }
        parentRow.remove();
        $.event.trigger({ type: 'file-preview:changed', files: currentFileList });
      });

      this.on('change', function(e) {
        var loadingSpinner = $("#" + config.loadingCss);
        loadingSpinner.show();

        var reader;
        var filesCount = e.currentTarget.files.length;
        $.each(e.currentTarget.files, function(index, file) {
          currentFileList.push(file);

          reader = new FileReader();
          reader.onload = function(fileReaderEvent) {
            var filesize, filetype, imagePreviewRow, placeholderCssClass, source;
            if (previewTableBody) {
              filetype = file.type;
              if (/image/.test(filetype)) {
                source = fileReaderEvent.target.result;
                placeholderCssClass = config.placeholderClass + " image";
              } else {
                source = "";
                placeholderCssClass = getFileTypeCssClass(filetype);
              }
              filesize = getFileSize(file.size);
              imagePreviewRow = previewRowTemplate({
                src: source,
                name: file.name,
                placeholderCssClass: placeholderCssClass,
                size: filesize
              });

              previewTableBody.append(imagePreviewRow);

              if (index == filesCount - 1) {
                loadingSpinner.hide();
              }
            }
            if (callback) {
              callback(fileReaderEvent);
            }
          };
          reader.readAsDataURL(file);
        });

        $.event.trigger({ type: 'file-preview:changed', files: currentFileList });
      });

      this.fileList = function() {
        return currentFileList;
      }

      this.clearFileList = function() {
        $('.remove-file').click();
      }

      this.url = function(url) {
        if (url != undefined) {
          config.url = url;
        } else {
          return config.url;
        }
      }

      this._onComplete = function(eventData) {
        eventData['type'] = 'file-preview:submit:complete'
        $.event.trigger(eventData);
      }

      this.submit = function(successCallback, errorCallback) {
        if (config.url == undefined) throw('Please set the URL to which I shall post the files');

        if (currentFileList.length > 0) {
          var filesFormData = new FormData();
          currentFileList.forEach(function(file) {
            filesFormData.append(options.formDataKey + "[]", file);
          });

          $.ajax({
            type: "POST",
            url: config.url,
            data: filesFormData,
            contentType: false,
            processData: false,
            xhr: function() {
              var xhr = new window.XMLHttpRequest();
              xhr.upload.addEventListener("progress", function(evt) {
                if (evt.lengthComputable &&
                  options != null &&
                  options.uploadProgress != null
                  && typeof options.uploadProgress == "function") {
                  options.uploadProgress(evt.loaded / evt.total);
              }
            }, false);
              return xhr;
            },
            success: function(data, status, jqXHR) {
              if (typeof successCallback == "function") {
                successCallback(data, status, jqXHR);
              }
              that._onComplete({ data: data, status: status, jqXHR: jqXHR });
            },
            error: function(jqXHR, status, error) {
              if (typeof errorCallback == "function") {
                errorCallback(jqXHR, status, error);
              }
              that._onComplete({ error: error, status: status, jqXHR: jqXHR });
            }
          });
        } else {
          console.log("There are no selected files, please select at least one file before submitting.");
          that._onComplete({ status: 'no-files' });
        }
      }

      return this;

    } else {
      throw "The File APIs are not fully supported in this browser.";
    }
  };
})(jQuery);



$(function() {

// ВКЛАДКИ В ЛК

$('.lk-tabs').delegate('li:not(.current)', 'click', function () {
  $(this).addClass('current').siblings().removeClass('current')
  .parents('.page-wrapper').find('.lk-tab').eq($(this).index())
  .show().siblings('.lk-tab').hide();
});


// АДРЕС В ЛК


// ВЫБОР ВЫХОДНЫХ

jQuery.fn.multiselect = function() {
  $(this).each(function() {
    var checkboxes = $(this).find("input:checkbox");
    checkboxes.each(function() {
      var checkbox = $(this);
      if (checkbox.prop("checked"))
        checkbox.parent().addClass("multiselect-on");
      checkbox.click(function() {
        if (checkbox.prop("checked"))
          checkbox.parent().addClass("multiselect-on");
        else
          checkbox.parent().removeClass("multiselect-on");
      });
    });
  });
};

$(function() {
 $(".compHolidays").multiselect();
});



// ЗАГРУЗКА МИНИАТЮРЫ

$("#compThumb").change(function(e){
  var img = e.target.files[0];
  if(!img.type.match('image.*')){
    alert("Упс! Кажется, это совсем не картинка.");
    return;
  }
  iEdit.open(img, true, function(res){
    $("#compThumbResult").attr("src", res);
  });
});

$("#shopThumb").change(function(e){
  var img = e.target.files[0];
  if(!img.type.match('image.*')){
    alert("Упс! Кажется, это совсем не картинка.");
    return;
  }
  iEdit.open(img, true, function(res){
    $("#shopThumbResult").attr("src", res);
  });
});



// ФОТО НА СЛАЙДЕР

myUploadInput = $(".slider-add input[type=file]").uploadPreviewer();
$( ".slider-add tbody" ).sortable();



// ДОБАВЛЕНИЕ ПОЛЕЙ

// ВИДЕО

$(document).ready(function() {
  var max_fields      = 10;
  var wrapper         = $(".compVideo-wrapper");
  var add_button      = $(".compVideoAdd");
  var x = 1;
  $(add_button).click(function(e){
    e.preventDefault();
    if(x < max_fields){
      x++;
      $(wrapper).append('<div class="link-icon-wrapper youtube"><input type="url" name="compVideo[]" placeholder="Вставьте ссылку"/><span class="fieldRemove compVideoRemove link">Удалить</span></div>');
    }
  });
  $(wrapper).on("click",".compVideoRemove", function(e){
    e.preventDefault(); $(this).parent('div').remove(); x--;
  })
});

// ТОВАРЫ

$(document).ready(function() {
  var max_fields      = 100;
  var wrapper         = $(".compShop-wrapper");
  var add_button      = $(".compShopAdd");
  var x = 1;
  $(add_button).click(function(e){
    e.preventDefault();
    if(x < max_fields){
      x++;
      $(wrapper).append(
        '<div class="config-row"> <div class="row"> <div class="col-sm-6"> <p>Наименование товара (до 30 символов)</p> <input id="shopName" type="text" maxlength="30"> </div> <div class="col-sm-6"> <p>Цена за шт. (в рублях)</p> <input type="number" id="shopPrice"> </div> </div> <div class="row"> <div class="col-sm-6"> <p>Изображение товара</p> <input id="shopThumb" type="file" > <img id="shopThumbResult"> </div> <div class="col-sm-6"> <p>Описание товара (до 140 символов)</p> <textarea id="shopDesc" name="shopDesc" maxlength="140"></textarea> </div> </div> <br> <span class="fieldRemove compShopRemove link">Удалить</span> </div>'
        );
    }
  });
  $(wrapper).on("click",".compShopRemove", function(e){
    e.preventDefault(); $(this).parent('div').remove(); x--;
  })
});



// ПОДСЧЕТ КОЛИЧЕСТВА СИМВОЛОВ

// $(function () {
//   var target = $('[data-field="target"]');
//   $(document).on('input', '[data-field="item"]', function () {
//     var item = $(this);
//     target.html(item.val().length);
//   });
// });

// НАЗВАНИЕ КОМПАНИИ
$('.check-length.compTitle input').keyup(function() {
 var characterCount = $(this).val().length,
 current = $('.check-length.compTitle .current'),
 maximum = $('.check-length.compTitle .maximum'),
 theCount = $('.check-length.compTitle .input-count');
 current.text(characterCount);
 if (characterCount < 10) {
   current.css('color', '#555');
 }
 if (characterCount > 20 && characterCount < 29) {
   current.css('color', 'rgb(147, 182, 88)');
 }
 if (characterCount > 30 && characterCount < 39) {
   current.css('color', '#e95054');
 }
 if (characterCount > 40 && characterCount < 999) {
   current.css('color', '#e00');
   maximum.css('color', '#e00');
   current.css('color', '#e00');
   theCount.css('font-weight','bold');
 } else {
   maximum.css('color','#666');
   theCount.css('font-weight','normal');
 }
});

// О КОМПАНИИ
$('.check-length.compDesc textarea').keyup(function() {
 var characterCount = $(this).val().length,
 current = $('.check-length.compDesc .current'),
 maximum = $('.check-length.compDesc .maximum'),
 theCount = $('.check-length.compDesc .input-count');
 current.text(characterCount);
 if (characterCount < 20) {
   current.css('color', '#555');
 }
 if (characterCount > 20 && characterCount < 139) {
   current.css('color', 'rgb(147, 182, 88)');
 }
 if (characterCount > 140 && characterCount < 159) {
   current.css('color', '#e95054');
 }
 if (characterCount > 160 && characterCount < 999) {
   current.css('color', '#e00');
   maximum.css('color', '#e00');
   current.css('color', '#e00');
   theCount.css('font-weight','bold');
 } else {
   maximum.css('color','#666');
   theCount.css('font-weight','normal');
 }
});

// СЛОГАН
$('.check-length.compSlogan input').keyup(function() {
 var characterCount = $(this).val().length,
 current = $('.check-length.compSlogan .current'),
 maximum = $('.check-length.compSlogan .maximum'),
 theCount = $('.check-length.compSlogan .input-count');
 current.text(characterCount);
 if (characterCount < 10) {
   current.css('color', '#555');
 }
 if (characterCount > 20 && characterCount < 29) {
   current.css('color', 'rgb(147, 182, 88)');
 }
 if (characterCount > 30 && characterCount < 49) {
   current.css('color', '#e95054');
 }
 if (characterCount > 50 && characterCount < 999) {
   current.css('color', '#e00');
   maximum.css('color', '#e00');
   current.css('color', '#e00');
   theCount.css('font-weight','bold');
 } else {
   maximum.css('color','#666');
   theCount.css('font-weight','normal');
 }
});

// // НАИМЕНОВАНИЕ ТОВАРА
// $('.check-length.shopName input').keyup(function() {
//  var characterCount = $(this).val().length,
//  current = $('.check-length.shopName .current'),
//  maximum = $('.check-length.shopName .maximum'),
//  theCount = $('.check-length.shopName .input-count');
//  current.text(characterCount);
// });
// // ОПИСАНИЕ ТОВАРА
// $('.check-length.shopDesc textarea').keyup(function() {
//  var characterCount = $(this).val().length,
//  current = $('.check-length.shopDesc .current'),
//  maximum = $('.check-length.shopDesc .maximum'),
//  theCount = $('.check-length.shopDesc .input-count');
//  current.text(characterCount);
// });



// МАСКИ

$("input[type=tel]").mask("+7 (999) 999-99-99");




});





// ОСНОВНЫЕ СКРИПТЫ




$(function() {

// МОБИЛЬНОЕ МЕНЮ

$(".menu-toggle").click(function() {
  $(".category-nav").slideToggle(500);
});


// СЛАЙДЕР БАННЕР

$('.banner .slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});


// ВЫПАДАЮЩИЕ СПИСКИ

$( '.lk-menu .title, .lk-menu .dropdown a' ).click( function() {
  if ( $( '.lk-menu ul' ).is( ':hidden' ) ) {
    $( '.lk-menu ul' ).slideDown('fast');
  } else {
    $( '.lk-menu ul' ).slideUp('fast');
  }
});
$(document).mouseup(function (e) {
  var container = $('.dropdown ul');
  if (container.has(e.target).length === 0){
    container.slideUp('fast');
  }
});


$('.category-nav li ul').hide ();
$('li li:has(li)').find('a:first').addClass ('arrow');
$('li').hover (
  function () {
    $(this).addClass('active');
    $('ul:first', this).fadeIn ('fast'); 
  },
  function () {
    $(this).removeClass('active');
    $('ul:first', this).fadeOut ('fast'); 
  }
  );


// КНОПКА ВВЕРХ

$('body').append('<div id="toTop" class="btn"><i class="fa fa-angle-up"></i></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
}); 
$('#toTop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});


// МОДАЛЬНЫЕ ОКНА

$('.popup-link').magnificPopup({
  type: 'inline',
  fixedContentPos: false,
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});



});