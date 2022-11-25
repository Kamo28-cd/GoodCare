
//******************* Open Dialogs Start *******************

function openSmallDialogText(type) {
	type = type || ''
	$('#mymodal-bg').fadeIn('slow');
	$('#small-dialog-text').fadeIn('slow');
	if (type == '') {
		
	document.querySelector('#small-dialog-text').innerHTML = `
		<div class="small-dialog-header">
			<h4>New Post</h4>
			<div id="close-croppie-text">
				<i class="icon2x fa fa-times" style="color:coral; margin-right: 20px" ></i>
			</div>
			
			<!--<div class="text-dialog dialog-btns">
				
				<div class="dialog-btn-croppie" id="close-croppie-text" style="width:fit-content">
					<i class="icon2x fa fa-times" style="color:coral; margin-top:20px; margin-right: 20px" ></i>
				</div>
			</div>-->
		</div>
			
			
		<div class="textbox-container">
			
			<div class="textbox-form">
				<form class="new-post" onsubmit="return false" action="" method="post">
					<div class="col-md-10 post-description">
						<fieldset>
							<input class="title-area" type="text" id="newposttitle" placeholder="Add your blog post title..." value="" required/>
						
					
					
						
						</fieldset>
						<fieldset>
							<select class="description-area" id="newposttopic">
									<option value="none" selected="" disabled="">Select Topic...</option>
                        			<option value="Clip Ins">Clip Ins</option>
									<option value="Hair Care">Hair Care</option>
                        			<option value="Women Empowerment">Women Empowerment</option>
                        			<option value="Combs & Brushes">Combs & Brushes</option>
                        					
                    		</select>
						</fieldset>
					</div>
					<div class="textarea">
						<fieldset>
							<textarea id="newpostbody" name="newpostbody" cols="30" rows="4" placeholder="Write a new blog post..." value="" required></textarea>
						</fieldset>	
					</div>
					<div class="textbox-btn">
						<button type="submit" class="cms-imgUpload" id="add_image" data-u="blogpost">
							Next
							<i class=" las la-arrow-right icon1-5x text-lightened-blue" style=""></i>
						</button>
					</div>
				
					
				</form>
			</div>
			
			
		</div>`;
  		//CKEDITOR.replace( 'newpostbody' );
	} else if (type == 'add-product') {
		document.querySelector('#small-dialog-text').innerHTML = `
		<div class="small-dialog-header">
			<h4>Add New Product</h4>
			<div id="close-croppie-text">
				<i class="icon2x fa fa-times" style="color:coral; margin-right: 20px" ></i>
			</div>
			
			
		</div>
			
			
		<div class="textbox-container">
			
			<div class="textbox-form">
				<form class="new-post" onsubmit="return false" action="" method="post">
					<div class="col-md-10 post-description add-product-description">
						<fieldset>
							<input class="title-area" type="text" id="newproductname" placeholder="Product Name..." value="" required/>
						
						</fieldset>
						
						<fieldset>
							<select class="description-area" id="newvariation" name="newvariation" required>
								<option value="">Select an Option...</option>
                        		<option value="size">Size</option>
								<option value="color">Colour</option>
                        					
                        					
                    		</select>
							<div class="view-variation" id="view-variation" style="display:none">
								<p>Please enter a size and its price below...</p> 
								<div class="variation-container">
									
								</div>
								<div class="change-btn">
									<p class="change-size" id="add-size">+</p>
									<p class="change-size" id="remove-size">-</p>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<select class="description-area" id="newinstock" required>
								<option value="none" selected="" disabled="">In Stock?...</option>
                        		<option value="yes">Yes</option>
								<option value="no">No</option>
                        					
                        					
                    		</select>
							
						</fieldset>

						<div class="col-md-10 post-description">
						<fieldset>
							<input class="title-area" type="number" id="newprice" placeholder="Product Price..." value="" required/>
						
						</fieldset>
						<fieldset>
							<input class="title-area" type="number" id="newshipping" placeholder="Shipping Price..." value="" required/>
						</fieldset>
					</div>
					</div>
					<div class="textarea">
						<fieldset>
							<textarea id="newproductdescription" name="newproductdescription" cols="30" rows="4" placeholder="Product Description..." value="" required></textarea>
						</fieldset>	
					</div>
					<div class="textbox-btn">
						<button type="submit" class="cms-imgUpload" id="add_image" data-u="add-product">
							Next
							<i class=" las la-arrow-right icon1-5x text-lightened-blue" style=""></i>
						</button>
					</div>
				
					
				</form>
			</div>
			
			
		</div>`;
	}
	
}



function openSmallDialog(newPostBody) {
	newPostBody = newPostBody || ''
	$('#mymodal-bg').fadeIn('slow');
	$('#small-dialog-images').fadeIn('slow');
	document.querySelector('#small-dialog-images').innerHTML = `
		<div class="dialog-btns">
			<div class="dialog-btn-croppie" id="change-croppie" style="width:fit-content">
				<i class="icon2x fa fa-trash" style="color:coral; margin-top:20px; margin-right: 20px" ></i>
			</div>
			<div class="dialog-btn-croppie" id="close-croppie" style="width:fit-content">
				<i class="icon2x fa fa-times" style="color:coral; margin-top:20px; margin-right: 20px" ></i>
			</div>
		</div>
			
		<div class="uploaded_border">
			<img class="post-img-graphic" src="assets/img/post.svg" alt="Upload Blog Post" />
		</div>	
		<div id="uploaded_image">
				
			<!-- Demo of image after it has been uploaded-->
			<div id="image_demo" style="width:250px;height:250px; margin:0 auto; display:none;"></div>
			
		</div>

			
			
		<div class="croppie-Btns">
			<div class="var_input" style="display:none;"><input type="text" placeholder="https://www.example.com" name="var_input" data-worklink="" /></div>
			<div class="upload-Btn" style=""><div class="toggleSave"><label for="upload_image"><i class=" las la-image icon1-5x text-lightened-blue" style=""></i> <span>Upload</span></label></div><input name="upload_image" style="display:none" type="file" accept="image/*" id="upload_image"></div>
				<!-- Crop icon used to crop image after it has been loaded into the demo-->
		
				
		</div>`;
			
		
}

//******************* Open Dialog End *******************

//******************* Crop Image Start *******************

function cropImage(imgType, inputObj, inputPriceObj) {
				inputObj = inputObj || null
				inputPriceObj = inputPriceObj || ''
//crop image code start
//********************logo
				if (imgType == 'logo') {
				$image_crop = $('#image_demo').croppie({
					enableExif:true,
					viewport: {  //this defines part of cropped image that will be visible after being cropped
						width:200,
						height:140,
						type: 'square' //or can use circle height was 200
						},
					boundary: {  //this defines outer edges that will be cropped out
						width:250,
						height:170,
						},
				
				});
				$('#upload_image').on('change', function(){
					
					var reader = new FileReader();
					reader.onload = function(event) {
						$image_crop.croppie('bind', {
							url:event.target.result
							
						}).then(function(){
							//console.log("jQuery bind complete");
						});	
					}
					reader.readAsDataURL(this.files[0]);
					$('#image_demo').fadeIn('slow');
					if (document.querySelector('.cr-image').style.display == 'none') {
						$('.cr-image').show()
					}
					$('#crop_btn').fadeIn('slow');
					$('.uploaded_border img').fadeOut('slow');
					$('.toggleSave').html('<div class="crop_image crop_save badge2invert fa fa-crop" id="crop_btn" style=""> <span> Crop</span></div>')
					});
				$('#change-croppie').click(function() {
					
					$('#upload_image').val("")
					$('.cr-image').hide()
					
					//$image_crop.croppie('destroy')
					$('.toggleSave').html('<label for="upload_image"><i class=" las la-image icon1-5x text-lightened-blue" style=""></i> <span>Upload</span></label>')
					//console.log('hello')
				})
				var formname = document.getElementById('upload_image').name;
				//height was 600
				
				$(document).on('click', '.crop_image', function(){
				//crop_imageBtn = document.querySelector('.crop_image')
				//crop_imageBtn.addEventListener('click', function() {
					//document.querySelector('.crop_image').stopPropagation();
					
					$('.toggleSave').html('<div class="crop_save badge2invert fa cms_editbg" data-edit="image" style=""> <span> Loading ...</span></div>')

					$('#change-croppie').fadeOut('slow')
						
					$image_crop.croppie('result', {
							type: "canvas",
							size:{width:250,height:170},//canvas, boundary and #image_demo should be the same size
							quality:1,
						}).then(function(response){
							
							$.ajax({
							    	cache:false,
								url:"api/upload?formname="+formname,
								type:"POST",
								data: {"image":response},
								success: function(data) {
									
									$('#uploaded_image').html('<img src="'+data+'"class="upload_img-dialog center"style="" id="upload_img-dialog"/>');
									$('.toggleSave').html('<div class="crop_save badge2invert fa fa-save cms_editlogo" data-edit="image" id="sendnewpost" data-myid="cms-imagelogo" style=""> <span> Save & Upload</span></div>')
									$('#image_demo').hide();
									$('#crop_btn').hide();
									IMAGEDATA = data;
									newimagepostadded = "not yet";
									imageVar = IMAGEDATA;
									

									//change sendnewpost 
									$('#sendnewpost').click(function(event){
										if(IMAGEDATA !="" || IMAGEDATA !=" "){
											$.ajax({
							 
							 					type: "POST",
							 					cache:false,
							 					url: "api/createpost",
							 					processData: false,
							 					contentType:"application/json",
							 					data: '{"title": "'+ $("#newposttitle").val()+'","body": "'+ $("#newpostbody").val()+'", "topic": "'+$("#newposttopic").val()+'", "poster": "'+USERID+'","imgpost":"'+IMAGEDATA+'"}',
							 					success: function(r) {
													//console.log(r) 
													newimagepostadded = "Success: you have posted a new blogpost";
													//location.reload()
													
													$('#mymodal-bg').delay(1000).fadeOut('slow');
													$('#small-dialog-images').delay(1000).fadeOut('slow');
													setTimeout(function() {
														alertFunction("success",newimagepostadded)
														setTimeout(function() {sortFunction($.urlParam('sort'))},1000);
													},1500);
													document.getElementById('newpostbody').value = "";
							 					},
												error: function(r) {
													r = JSON.parse(r.responseText);
													type = 'error';
													response = r.Error;
													//newimagepostadded = "Error: please add an image to your post";
											
													alertFunction(type,'Error:'+response+'');
												}
											});
										} else {
											newimagepostadded = "Error: please add an image to your post";
											//location.reload()
											alertFunction("error",newimagepostadded);
											
										}
									})
									
									}
								
								});
							})
					});

//********************add-product
				} else if (imgType == 'add-product') {
					document.getElementById('image_demo').style.width = '250px';
					document.getElementById('image_demo').style.height = '375px';
					$image_crop = $('#image_demo').croppie({
					enableExif:true,
					viewport: {  //this defines part of cropped image that will be visible after being cropped
						width:200,
						height:300, 
						type: 'square' //or can use circle height was 200
						},
					boundary: {  //this defines outer edges that will be cropped out
						width:250,
						height:375,
						},
				
					});

					$('#upload_image').on('change', function(){
					
					var reader = new FileReader();
					reader.onload = function(event) {
						$image_crop.croppie('bind', {
							url:event.target.result
							
						}).then(function(){
							//console.log("jQuery bind complete");
						});	
					}
					reader.readAsDataURL(this.files[0]);
					$('#image_demo').fadeIn('slow');
					if (document.querySelector('.cr-image').style.display == 'none') {
						$('.cr-image').show()
					}
					$('#crop_btn').fadeIn('slow');
					$('.uploaded_border img').fadeOut('slow');
					$('.toggleSave').html('<div class="crop_image crop_save badge2invert fa fa-crop" id="crop_btn" style=""> <span> Crop</span></div>')
					});
				$('#change-croppie').click(function() {
					
					$('#upload_image').val("")
					$('.cr-image').hide()
					
					//$image_crop.croppie('destroy')
					$('.toggleSave').html('<label for="upload_image"><i class=" las la-image icon1-5x text-lightened-blue" style=""></i> <span>Upload</span></label>')
					//console.log('hello')
				})
				var formname = document.getElementById('upload_image').name;
				
				
				$(document).on('click', '.crop_image', function(){
				//crop_imageBtn = document.querySelector('.crop_image')
				//crop_imageBtn.addEventListener('click', function() {
					//document.querySelector('.crop_image').stopPropagation();
					$('.toggleSave').html('<div class="crop_save badge2invert fa cms_editbg" data-edit="image" style=""> <span> Loading ...</span></div>')

					$('#change-croppie').fadeOut('slow')
						
					$image_crop.croppie('result', {
							type: "canvas",
							size:{width:250,height:375},//canvas, boundary and #image_demo should be the same size
							quality:1,
						}).then(function(response){
							
							$.ajax({
							    cache:false,
								url:"api/upload?formname="+formname,
								type:"POST",
								data: {"image":response},
								success: function(data) {
									
									$('#uploaded_image').html('<img src="'+data+'"class="upload_img-dialog center"style="" id="upload_img-dialog"/>');
									$('.toggleSave').html('<div class="crop_save badge2invert fa fa-save cms_editbg" data-edit="image" id="sendnewpost" data-myid="cms-imagelogo" style=""> <span> Save </span></div>')
									$('#image_demo').hide();
									$('#crop_btn').hide();
									IMAGEDATA = data;
									newimagepostadded = "not yet";
									imageVar = IMAGEDATA;
									

									//change sendnewpost 
									$('#sendnewpost').click(function(event){
										if(IMAGEDATA!=""){
											$.ajax({
							 
							 					type: "POST",
							 					cache:false,
							 					url: "api/addproduct",
							 					processData: false,
							 					contentType:"application/json",
							 					data: '{"name": "'+ $("#newproductname").val()+'","variation_type": "'+ $("#newvariation").val()+'", "variation_input": '+JSON.stringify(inputObj)+', "variation_price": '+JSON.stringify(inputPriceObj)+', "description": "'+$('#newproductdescription').val()+'", "price": '+$('#newprice').val()+', "shipping": '+$('#newshipping').val()+', "instock": "'+$('#newinstock').val()+'", "imgpost":"'+IMAGEDATA+'"}',
							 					success: function(r) {
												
													newimagepostadded = "Success: you have added a new product. Click edit to change its default images";
													
													$('#mymodal-bg').delay(1000).fadeOut('slow');
													$('#small-dialog-images').delay(1000).fadeOut('slow');
													setTimeout(function() {
														alertFunction("success",newimagepostadded)
														
													},1500);
													//console.log(r)
									 			},
												error: function(r) {
													console.log(r)
													//r = JSON.parse(r.responseText);
													//type = 'error';
													//response = r.Error;
													//newimagepostadded = "Error: please add an image to your post";
											
													alertFunction(type,'Error:'+response+'');
												}
											});
										} else {
											newimagepostadded = "Error: please add an image to your post";
										//location.reload()
											alertFunction("error",newimagepostadded);
											
										}
									})
									
									}
								
								});
							})
					});
//********************blogpost
				} else if (imgType == 'blogpost') {
					document.getElementById('image_demo').style.objectFit = 'contain';
					w = $('#small-dialog-images').width()
					h = $('#small-dialog-images').height()
					//console.log(w*0.9)
					//console.log(w*0.6)
					if (w < 495) {
						document.getElementById('image_demo').style.width = ''+w*0.9+'px';
						document.getElementById('image_demo').style.height = ''+w*0.6+'px';
					} else {
						document.getElementById('image_demo').style.width = '445px';
						document.getElementById('image_demo').style.height = '250px';
						w = 445
					}
					$image_crop = $('#image_demo').croppie({
					enableExif:true,
					viewport: {  //this defines part of cropped image that will be visible after being cropped
						width:w*0.6,
						height:w*0.4,
						type: 'square' //or can use circle height was 200
						},
					boundary: {  //this defines outer edges that will be cropped out
						width:w*0.9,
						height:w*0.6,
						},
				
					});

					$('#upload_image').on('change', function(){
					
					var reader = new FileReader();
					reader.onload = function(event) {
						$image_crop.croppie('bind', {
							url:event.target.result
							
						}).then(function(){
							//console.log("jQuery bind complete");
						});	
					}
					reader.readAsDataURL(this.files[0]);
					$('#image_demo').fadeIn('slow');
					if (document.querySelector('.cr-image').style.display == 'none') {
						$('.cr-image').show()
					}
					$('#crop_btn').fadeIn('slow');
					$('.uploaded_border img').fadeOut('slow');
					$('.toggleSave').html('<div class="crop_image crop_save badge2invert fa fa-crop" id="crop_btn" style=""> <span> Crop</span></div>')
					});
				$('#change-croppie').click(function() {
					
					$('#upload_image').val("")
					$('.cr-image').hide()
					
					//$image_crop.croppie('destroy')
					$('.toggleSave').html('<label for="upload_image"><i class=" las la-image icon1-5x text-lightened-blue" style=""></i> <span>Upload</span></label>')
					//console.log('hello')
				})
				var formname = document.getElementById('upload_image').name;
				//height was 600
				
				$(document).on('click', '.crop_image', function(){
				//crop_imageBtn = document.querySelector('.crop_image')
				//crop_imageBtn.addEventListener('click', function() {
					//document.querySelector('.crop_image').stopPropagation();
					
					$('.toggleSave').html('<div class="crop_save badge2invert fa cms_editbg" data-edit="image" style=""> <span> Loading ...</span></div>')

					$('#change-croppie').fadeOut('slow')
						
					$image_crop.croppie('result', {
							type: "canvas",
							size:{width:w*0.9,height:w*0.6},//canvas, boundary and #image_demo should be the same size
							quality:1,
						}).then(function(response){
							
							$.ajax({
							    cache:false,
								url:"api/upload?formname="+formname,
								type:"POST",
								data: {"image":response},
								success: function(data) {
									
									$('#uploaded_image').html('<img src="'+data+'"class="upload_img-dialog center"style="" id="upload_img-dialog"/>');
									$('.toggleSave').html('<div class="crop_save badge2invert fa fa-save cms_editbg" data-edit="image" id="sendnewpost" data-myid="cms-imagelogo" style=""> <span> Save and upload</span></div>')
									$('#image_demo').hide();
									$('#crop_btn').hide();
									IMAGEDATA = data;
									newimagepostadded = "not yet";
									imageVar = IMAGEDATA;
                                  	//be sure to remove the last character from string when using ckeditor by using the slice method below
                                  	//textDATA = $("#newpostbody").val();
                                  	textDATA = CKEDITOR.instances['newpostbody'].getData()
                                  	//textDATA = encodeURIComponent(textDATA)
                                  	textDATA = textDATA.slice(0, -1);
									//console.log('{"body": "'+textDATA+'"}')
                                    //console.log('{"body": "<p>hey</p>"}')
									
									//change sendnewpost 
									$('#sendnewpost').click(function(event){
                                      	//console.log(event.target)
                                      	//
										if(IMAGEDATA!=""){
											$.ajax({
							 
							 					type: "POST",
							 					cache:false,
							 					url: "api/createpost",
							 					processData: true,
							 					
							 					data: JSON.stringify({"title": ""+$("#newposttitle").val()+"", "body": ""+$("#newpostbody").val()+"", "topic": ""+$("#newposttopic").val()+"", "poster": ""+USERID+"","imgpost":""+IMAGEDATA+""}),
							 					success: function(r) {
													
													newimagepostadded = "Success: you have posted a new image";
													
													$('#mymodal-bg').delay(1000).fadeOut('slow');
													$('#small-dialog-images').delay(1000).fadeOut('slow');
													setTimeout(function() {
														alertFunction("success",newimagepostadded)
														
													},1500);
													document.getElementById('newpostbody').value = "";
							 					},
                                              	error: function(r) {
                                                	//console.log(r)
                                                
                                                }
											})
										} else {
											newimagepostadded = "Error: please add an image to your post";
											//location.reload()
											alertFunction("error",newimagepostadded);
											
										}
									})
									
									}
								
								});
							})
					});
				}
				
//crop image code end
}
//******************* Crop Image End *******************