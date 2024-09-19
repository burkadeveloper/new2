import { productData } from "../data/products.js"










let html = ` `

      productData.forEach((product)=>{
        html +=`<div class="product-card-container">
       
        <div class="produt-card-header">
            <img class="product-image"  src="${product.image}">
          </div>
       
        <div class="product-card-body">
           <h4 class="product-name">${product.name}</h4>
             <span class="categories">${product.categories}</span><br>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
          <p class="product-price">$${product.price} <span class="over-price">$${product.overprice}</span></p>
          
      </div>
      <div class="add_button">
          <button class="btn btn-primary btn-shop">shop</button>
        </div>
      </div>`
      })
    document.querySelector('.products-grid').innerHTML += html

    $('i.hmb-menu-i').on('click',()=>{
      let togleDiv = $('div.right-section')
       if(togleDiv.hasClass('right-section-menu')){
        togleDiv.removeClass('right-section-menu')
       
       }
      else if(togleDiv.hasClass('right-section-menu')==false){
       togleDiv.addClass('right-section-menu')
      
      }
      
      
    })
  
    