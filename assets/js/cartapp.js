//variables
//const storeName = storename;
//const storeId = storeid;
//const cartBtn = document.querySelector('.cart-btn');
mySizeId = "";
myColorId = "";
const closeCartBtn = document.querySelector('.close-cart');
//const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
//const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.num-cart-items');
const cartItems2 = document.querySelector('.num-cart-items2');
const cartTotal = document.querySelector('.cart-total');
const cart2Total = document.querySelector('.cart2-total');
const cartContent = document.querySelector('.cart-content');
//const productsDOM = document.querySelector('.products-center');
const productsDOM = document.querySelector('.myProducts');
const scrollLinks = document.querySelectorAll('.view-products .btn-product');
function closeNavedit() {document.getElementById("editprofilecv").style.width = "0";
		$('#mymodal-bg').fadeOut('slow');
		$('.cart-content').removeClass('fadeIn');
		}

//cart for local storage
let cart = [];
let buttonsDOM = [];
let myvar = 0;
let myshipping = 0;
let shipStat = '';
let itemid = 0;
let removing = 'no';
let cartLength = cart.length;
let chevQty = 'off';
//getting the products first using prepaired json file then later using server data
class Products{
	async getProducts() {
		try {
			//let result = await fetch('./js/product.json');
			let result = await fetch('./api/all');
			//change from here on for live server data
			let data = await result.json();
			
			let products = data;
			//let products = data.items;
			//for (var i = 0; i<products.length; i++){
				
				
				
				//products = products.map(item =>{
					
					//const {title,checkoutprice,price,description} = item.fields;
					//const {id} = item.sys;
					//const image = item.fields.image.fields.file.url;
					//return {title,checkoutprice,price,description,id,image}
				//})
			
			//}
			return products;
			//return data;
		} catch (error) {
		console.log(error);
		}
	}
}
// display products from local storage
class UI{
	displayProducts(products) {
		let result = '';
		products.forEach(product =>{
			const mycartid = `${product.id}`;

			//trim description start

			
                        var bodystring = `${product.description}`;
                        const stringlength = 90;
                        const trimmedBodyString = bodystring.length > stringlength ?
                        	bodystring.substring(0, stringlength -3) +"...":
                                bodystring;
                        if (bodystring.length >stringlength){
                                bodystring = trimmedBodyString;

                        }
			//trim description end
			//when putting it on server change if statement to if checkoutprice=="null"
			if (mycartid%2 !=0 ){
			//for when the old price doesnt exist we display the current price without an old price striked through
			result +=`
			<tr>
		            <td class="primary email-section" style="padding: 0; width: 100%;">
		            	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
		            		<tr>
                      <td valign="middle" width="50%">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
			    
                            <td class="text-product" style="text-align: left; padding: 20px 30px;">
				<div class="line-dec line-display" style="position:relative; bottom:20px; display:block; background-color:#fff"></div>
                            	<div class="heading-section">
				
                            		<span class="price">R${product.price}</span>
								              	<h2 style="font-size: 17px;">${product.title}</h2>
								              	<p class="productDescription">${bodystring}</p>
								              	<p class="shop-link"  data-slink=${product.id}><a   class="btn btn-black">Shop now</a></p>
								            	</div>
				<div class="line-dec line-display" style="position:relative;top:20px; display:block; background-color:#fff"></div>
                            </td>
			    
                          </tr>
                        </table>
                      </td>
                      <td valign="middle" width="50%">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td class="img-container">
                              <img src=${product.image} class="product-img" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
							  <div class="productBorder" id="imgBorder${product.id}"></div>
							  <button class=" show-detail"  data-addid=${product.id}>
								<i class="icon far fa-eye"></i> view
							</button>

							</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
		            	</table>
		            </td>
		          </tr>`;	
				
			} else {
			
			result +=`
			<tr  >
		            <td class="primary email-section" style="padding: 0; width: 100%;">
		            	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
		            		<tr>
		            			<td valign="middle" width="50%">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td class="img-container">
                              <img src=${product.image} class="product-img" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
							  <div class="productBorder" id="imgBorder${product.id}"></div>
							  <button class="show-detail" data-addid=${product.id}>
								<i class="icon far fa-eye"></i> view
							</button>
							</td>
                          </tr>
                        </table>
                      </td>
                      <td valign="middle" width="50%">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
			    
                            <td class="text-product" style="text-align: left; padding: 20px 30px;">
				<div class="line-dec line-display" style="position:relative; bottom:20px; display:block; background-color:#fff"></div>
                            	<div class="heading-section">
					
                            		<span class="price">R${product.price}</span>
								              	<h2 style="font-size: 17px;">${product.title}</h2>
								              	<p class="productDescription">${bodystring}</p>
								              	<p class="shop-link"  data-slink=${product.id}><a   class="btn btn-black">Shop now</a></p>
								            	</div>
				
				<div class="line-dec line-display" style="position:relative;top:20px; display:block; background-color:#fff"></div>
                            </td>
			    
                          </tr>
                        </table>
                      </td>
                    </tr>
		            	</table>
		            </td>
		          </tr>`;
			}
			
		});
		productsDOM.innerHTML = result;
	}
	getBagButtons(){
		const buttons = [...document.querySelectorAll(".bag-btn")];
		buttonsDOM = buttons;
		
		buttons.forEach(button =>{
			let id = button.dataset.cartid;
			let inCart = cart.find(item=> item.id ===id); //use the find method that you can have on arrays and find the item if it is in the cart then of the item id matches the id variable on the button, do something
			if (inCart){
				//setting up the fact that if a button is clicked the item is added to the cart and you cant click the same button again until you clear the cart
				button.innerText = "in cart";
				button.disabled = true;
			}
			button.addEventListener('click',event =>{
                
                let sizeVar = event.target.getAttribute('data-sizevar')
                if (mySizeId && mySizeId !== 0) {
                    event.target.innerText = "in cart";
                    event.target.disabled = true;
                    //console.log(myColorId)
                    
                    // now  i want to get the item that the button refers to, ill get it from local storage here
                    //get product from products (in local storage)
                    let cartItem = { ...Storage.getProduct(id), amount: 1, color:''+$('[data-colorid="'+myColorId+'"]').val()+'', size:''+$('[data-sizeid="'+mySizeId+'"]').val()+'' };
                    if (sizeVar == 1) {
                        cartItem.price = mySizePrice;
                        cartItem.checkoutprice = mySizePrice;
                    }
                    
                    
                    itemid = id;
                    
                    
                    //then add product to the cart
                    cart = [...cart,cartItem];
                    
                    
                    //save cart in local storage
                    Storage.saveCart(cart);
                    //set cart values
                    this.setCartValues(cart);
                    myvar = 1;
                    //display cart item in nav
                    this.addCartItem(cartItem)
                    //show the cart
                    //this.showCart();
                    mySizeId = 0
                    myColorId = 0
                } else if (myColorId &&  myColorId !== 0) {
                    event.target.innerText = "in cart";
                    event.target.disabled = true;
                    //console.log(myColorId)
                    
                    // now  i want to get the item that the button refers to, ill get it from local storage here
                    //get product from products (in local storage)
                    let cartItem = { ...Storage.getProduct(id), amount: 1, color:''+$('[data-colorid="'+myColorId+'"]').val()+'', size:''+$('[data-sizeid="'+mySizeId+'"]').val()+'' };
                    if (sizeVar == 1) {
                        cartItem.price = mySizePrice;
                        cartItem.checkoutprice = mySizePrice;
                    }
                    
                    
                    itemid = id;
                    
                    
                    //then add product to the cart
                    cart = [...cart,cartItem];
                    
                    
                    //save cart in local storage
                    Storage.saveCart(cart);
                    //set cart values
                    this.setCartValues(cart);
                    myvar = 1;
                    //display cart item in nav
                    this.addCartItem(cartItem)
                    //show the cart
                    //this.showCart();
                    mySizeId = 0
                    myColorId = 0
                } else {
                   
                    if (sizeVar == 1) {
                        $('.button-error-text.hidden').fadeIn().html('<i class="fa fa-exclamation-circle"></i> Please select a size before adding to cart')
                    } else {
                        $('.button-error-text.hidden').fadeIn().html('<i class="fa fa-exclamation-circle"></i> Please select a color before adding to cart')
                    }
                    
                }
       
			});
			
		});
	}
    
	setCartValues(cart) {
		let tempTotal = 0;
		let itemsTotal = 0;
		let temp2Total = 0;
		let cartLength = cart.length;
		
		cart.map(item =>{
			tempTotal += item.price* item.amount;
			itemsTotal += item.amount;
			//console.log(itemsTotal);
			//myshipping =item.shipping* 1 ;
			/*if (itemsTotal  ==1) {
				myshipping =item.shipping* 1 ;
				
			} else if (itemsTotal ==2) {
				//console.log(myshipping)
				if ((item.id ==1) && (shipStat !='deducted')) {
					shipStat = 'deducted'
					myshipping =-myshipping* 1 ;
					//console.log('shipstat: '+shipStat+' myshipping: '+myshipping)
				} else if ((item.id ==5) && (shipStat !='deducted')) {
					shipStat = 'deducted'
					myshipping =-myshipping* 1 ;
				} else {
					myshipping =myshipping* 0 ;
				}
			} else if (itemsTotal >2) {
				if ((item.id ==1) && (shipStat !='deducted')) {
					shipStat = 'deducted'
					myshipping =-myshipping* 0 -100 ;
					//console.log('shipstat: '+shipStat+' myshipping: '+myshipping)
				} else if ((item.id ==5) && (shipStat !='deducted')) {
					shipStat = 'deducted'
					myshipping =-myshipping* 1 -100;
				} else {
					myshipping =myshipping* 0 ;
				}
			}*/
			temp2Total += item.checkoutprice* item.amount;
			if (cart.find(myitem=> myitem.id ==1)) {
                		myshipping =item.shipping* 0 ;
                        //console.log('1 already is inside')
            } else if (cart.find(myitem=> myitem.id ==5)) {
                    	myshipping =item.shipping* 0 ;
                        //console.log('5 already is inside')
            } else if (cart.find(myitem=> myitem.id ==7)) {
                    	myshipping =item.shipping* 0 ;
                        //console.log('7 already is inside')
            } else {
            			//console.log('neither 1, 5 nor 7 are currently inside')
                        if ((itemid == '1') || (itemid == '5') || (itemid == '7')) {
                        	//console.log('currently adding 1 or currently adding 5 or 7')
                            if (cartLength-1 >=1) {
                            	myshipping =item.shipping* 1 -100 ;
                                //myshipping =item.shipping* 1 -50 ;
                                 //console.log('shipping is 0 but subtracting 100 because something other than 1 or 5 or 7 is inside')
                            } else if (cartLength-1 <1) {
                            	myshipping =item.shipping* 1 ; 
                                //console.log('shipping is 0 nothing else is inside')
                            }
                        } else if ((itemid != '1') && (itemid != '5') && (itemid != '7') && (itemid != 0)) {
                        	//console.log('currently not adding 1 or currently not adding 5 or 7')
                            if (chevQty == 'on') {
                                if (cart.find(myitem=> myitem.id).amount <1) {
                                    myshipping =item.shipping* 1 ;
                                   // console.log('nothing in cart adding new item shipping is 100')
                                    chevQty = 'off';
                                } else if (cart.find(myitem=> myitem.id).amount >=1) {
                                    myshipping =item.shipping* 1 ;
                                    //console.log('adding new item something already inside so shipping is 0')
                                    chevQty ='off';
                                }
                            } else if (chevQty == 'off') {
                                if (cartLength-1 <1) {
                                    myshipping =item.shipping* 1 ;
                                    //console.log('nothing in cart adding new item shipping is 100')
                                } else if (cartLength-1 >=1) {
                                    myshipping =item.shipping* 1 ;
                                   // console.log('adding new item something already inside so shipping is current item shipping')
                                }
                            }
                        } else {
                        	//console.log(removing)
                        	if ((!cart.find(myitem=> myitem.id ==1)) && (removing =='yes')) {
                        		myshipping =item.shipping* 1 ;
                                removing ='no';
                                //console.log('removing, 1 is not inside shipping should be 100 (value of the item that is inside)')
                            } else if ((!cart.find(myitem=> myitem.id ==5)) && (removing =='yes')) {
                            	myshipping =item.shipping* 1 ;
                                removing ='no';
                                //console.log('removing, 5 is not inside shipping should be 100 (value of the item that is inside)')
                            } else if ((!cart.find(myitem=> myitem.id ==7)) && (removing =='yes')) {
                            	myshipping =item.shipping* 1 ;
                                removing ='no';
                                //console.log('removing, 5 is not inside shipping should be 100 (value of the item that is inside)')
                            } else {
                            	if (cartLength <1) {
                                	myshipping = 0* 1;
                                    //console.log('refreshing nothing is inside')
                                } else if (cartLength >=1) {
                                	myshipping =item.shipping* 1 ;
                                   // console.log('refreshing something ther than 1 or 5 is inside')
                                }
                            }
                        }
            }
			
			//myvar += 1;
			
			
		});
        
		temp2Total = temp2Total +myshipping;
        //console.log(myshipping)
        myshipping = 0;
        itemid =0;
		cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
		cart2Total.innerText = parseFloat(temp2Total.toFixed(2));
		
		cartItems.innerText = itemsTotal;
		cartItems2.innerText = itemsTotal;
		
	}
	addCartItem(item) {
		const div = document.createElement('div');
		div.classList.add("cart-item");
		//change if statement to checkoutprice=="null" when switching from product.json to phpmyadmin live server
		const checkoutprice2 = `${item.checkoutprice}`;
		if (checkoutprice2 == "") {
		div.innerHTML = `<img src=${item.image} class="product-image"/>
			<div>
				<h4>${item.title}</h4>
				<h5>R${item.price} </h5> 
				
				<span class="remove-items" data-cartid=${item.id}>remove</span>
			</div>
			<div>
				<i class="fas fa-chevron-up" data-cartid=${item.id}></i>
				<p class="item-amount">${item.amount}</p>
				<i class="fas fa-chevron-down" data-cartid=${item.id}></i>
			</div>`;
		} else {
		div.innerHTML = `<img src=${item.image} class="product-image"/>
			<div>
				<h4>${item.title}</h4>
				<h5>R${item.price} </h5> 
				<!--<h5>R${item.checkoutprice} (monthly)</h5>-->
				<span class="remove-items" data-cartid=${item.id}>remove</span>
			</div>
			<div>
				<i class="fas fa-chevron-up" data-cartid=${item.id}></i>
				<p class="item-amount">${item.amount}</p>
				<i class="fas fa-chevron-down" data-cartid=${item.id}></i>
			</div>`;
		}		
		
		
		cartContent.appendChild(div);
		
	}
	//no need since using a different method to show cart
	//showCart(){
		//cartOverlay.classList.add('transparentBcg');
		//cartDOM.classList.add('showCart');
	//}
	
	setupAPP() {
		cart = Storage.getCart();
		this.setCartValues(cart);
		this.populateCart(cart);
		//cartBtn.addEventListener('click', this.showCart);
		//closeCartBtn.addEventListener('click',this.hideCart);
	}
	populateCart(cart) {
		cart.forEach(item => this.addCartItem(item));
	}
	//no need since using a different method to hide cart
	//hideCart(){
		//cartOverlay.classList.remove('transparentBcg');
		//cartDOM.classList.remove('showCart');
	//}
	cartLogic() {
		//clear cart button (removed this temporarily)
		//clearCartBtn.addEventListener('click',()=>{
			//this.clearCart();
		//});
		//cart functionality
		cartContent.addEventListener('click', event=>{
			if (event.target.classList.contains('remove-items')){
            	
				let removeItem = event.target;
				let id = removeItem.dataset.cartid;
				cartContent.removeChild(removeItem.parentElement.parentElement);
				this.removeItem(id);
			} else if (event.target.classList.contains('fa-chevron-up')) {
				let addAmount = event.target;
				let id = addAmount.dataset.cartid;
                itemid = id;
                chevQty = 'on';
				let tempItem = cart.find(item => item.id===id);
				tempItem.amount = tempItem.amount + 1;
				Storage.saveCart(cart);
				this.setCartValues(cart);
				addAmount.nextElementSibling.innerText = tempItem.amount;
			} else if (event.target.classList.contains('fa-chevron-down')) {
				let lowerAmount = event.target;
				let id = lowerAmount.dataset.cartid;
				let tempItem = cart.find(item => item.id===id);
                removing ='yes';
				tempItem.amount = tempItem.amount - 1;
				if(tempItem.amount > 0) {
					Storage.saveCart(cart);
					this.setCartValues(cart);
					lowerAmount.previousElementSibling.innerText = tempItem.amount;

				} else{
                	
					cartContent.removeChild(lowerAmount.parentElement.parentElement);
					this.removeItem(id);
				}
			}
		});
	}
	clearCart(){
		//map used in finding items in arrays
		let cartItems = cart.map(item=> item.id);
		cartItems.forEach(id =>this.removeItem(id));
		while(cartContent.children.length>0){
			cartContent.removeChild(cartContent.children[0]);
		}
		
		closeNavedit()
	}
	removeItem(id){
    	removing = 'yes';
		cart = cart.filter(item =>item.id !==id);
        
        /*if ((id=='1') || (id=='5')) {
        	if(!cart.find(item => item.id ==='1')) {
            	myshipping = 100*1;
            } else if (!cart.find(item => item.id ==='5')) {
            	myshipping = 100*1;
            }
        }*/
        
		this.setCartValues(cart);
		Storage.saveCart(cart);
		let button = this.getSingleButton(id);
		button.disabled = false;
		button.innerHTML = `<i class="icon-sli-handbag"></i>
					<p class="p-unset">add to cart</p>
				`;
	}
	getSingleButton(id) {
		//console.log(buttonsDOM)
		return buttonsDOM.find(button => button.dataset.cartid ===id)
	}
	
}

//local storage
class Storage{
	static saveProducts(products) {
		//here you can just go to phpmyadmin and get just the one product that you will need to add to cart (better when you have many stored items)
		localStorage.setItem("products", JSON.stringify(products))
	}
	static getProduct(id) {
		let products = JSON.parse(localStorage.getItem("products"));
		return products.find(product => product.id ===id)
	}
	static saveCart(cart) {
		localStorage.setItem("cart", JSON.stringify(cart))
	}
	static getCart() {
		return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
	}

}

document.addEventListener("DOMContentLoaded",()=>{
const ui = new UI();
const products = new Products();
//setup app
ui.setupAPP();

//get all products
products.getProducts().then(products => {
		ui.displayProducts(products);
		scrollLinks.forEach(scrollLink => {
			//scrollLink.setAttribute('data-id','add-to-cart');
		});
		//maybe just delete the Storage.save because you could go to the server and get the one product instead
		Storage.saveProducts(products);
		checkoutCart = Storage.getCart();
	}).then(()=>{
		ui.getBagButtons();
		ui.cartLogic();	
	});

});

function startCartApp() {
	const ui = new UI();
const products = new Products();
//setup app
ui.setupAPP();

//get all products
products.getProducts().then(products => {
		ui.displayProducts(products);
		
		//maybe just delete the Storage.save because you could go to the server and get the one product instead
		Storage.saveProducts(products);
	}).then(()=>{
		ui.getBagButtons();
		ui.cartLogic();	
	});
}