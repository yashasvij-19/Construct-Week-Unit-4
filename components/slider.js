function slider(){
    return `
        <div class="rectangleMain">
        
        <div class="images fade">
          <div class="theImage"></div>
          <img src="https://images-static.nykaa.com/uploads/831b1fd8-6558-4588-bcdb-7271efadeacc.jpg?tr=w-1200,cm-pad_resize" style="width:100%">
        </div>
        
        <div class="images fade">
          <div class="theImage"></div>
          <img src="https://images-static.nykaa.com/uploads/7252f111-5163-4a57-95e0-f3de1d5250e5.jpg?tr=w-1200,cm-pad_resize"style="width:100%">
        </div>
        
        <div class="images fade">
          <div class="theImage"></div>
          <img src="https://images-static.nykaa.com/uploads/66ce6cfa-9ce4-4198-b9d7-571732d5a374.jpg?tr=w-1200,cm-pad_resize" style="width:100%">
        </div>

        <div class="images fade">
            <div class="theImage"></div>
            <img src="https://images-static.nykaa.com/uploads/fcf41727-3334-4373-890b-8417ec100563.jpg?tr=w-1200,cm-pad_resize" style="width:100%">
          </div>
        
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        
        </div>
        <br>
        
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span> 
          <span class="dot" onclick="currentSlide(2)"></span> 
          <span class="dot" onclick="currentSlide(3)"></span> 
          <span class="dot" onclick="currentSlide(4)"></span> 
        </div>`
}
export default slider