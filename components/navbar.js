const navbar = ()=>{
    return `
    <div style="display: flex; height: 2.5rem;padding-top: 0.5rem;background: url(https://adn-static1.nykaa.com/media/wysiwyg/2021/topstrips18.jpg);" class="header-top">


            <div style="flex: 1;text-align: center;"  class="auto-link"><a style="text-align: center; font-weight: 600;" href="https://www.nykaa.com/offers.html?intcmp=hdr,top_strip,1,nykaa-sale">BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</a></div>


            <div style="flex: 1;flex-direction: row; text-align: center;" class="app-link">
                <ul style="list-style: none; display: flex; justify-content:center;">
                    <li style=" margin: 0 1rem;"> <a href="https://www.nykaa.com/installApp"><span><i   class="fa-solid fa-mobile"></i>Get App</span></a> </li>
                    <li style=" margin: 0 1rem;"> <a text-decoration: none;" href=""><span> <i class="fa-solid fa-location-dot"></i>Store & Events</span></a> </li>
                    <li style=" margin: 0 1rem;"> <a href=""><span> <i  class="fa-solid fa-gift"></i> Gift Card</span></a> </li>
                    <li style=" margin: 0 1rem;"> <a href=""><span> <i  class="fa-solid fa-circle-question"></i>Help</span></a> </li>
                </ul>
               
            </div>


        </div>

        

        <div style="display: flex;" class="header-mid">
            <div style="flex:1;text-align: right;" class="logo"><svg style="height: 2.5rem;max: width 2rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 250"><path xmlns="http://www.w3.org/2000/svg" d="M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z" fill="#fc2779"></path></svg></div>
            <div style="flex: 2;" class="header-mid-links"> 
                <ul style="display: flex;list-style: none;justify-content:space-evenly;padding-top: 1rem;font-weight: 600;font-size: 0.9rem;">
                  
                    <li> <a  href="./skin.html">CATEGORIES</a> </li>
                    <li> <a  href="./skin.html">BRANDS</a> </li>
                    <li> <a  href="./skin.html"> NYKAA FASHION</a></li>
                    <li> <a  href="./skin.html">BEAUTY ADVICE</a> </li>
                    <li> <a  href="./skin.html">NYKAA NETWORK</a> </li>
                </ul>
            </div>  

            <div style="flex: 1; text-align: center; padding:0.5rem 1rem 0 1rem;" class="header-mid-search">
                <div style="border: 1px solid rgba(174,174,174,255); border-radius: 0.5rem;"> <i style="color: rgba(174,174,174,255);font-size: 1.2rem;" class="fa-solid fa-magnifying-glass"></i><input style="padding:0.5rem ;outline: none;border: none;" type="text" name="" id="search" placeholder="Search on Nykaa"></div>
               
            </div>
            <div style="flex: 1; display: flex;text-align: left;padding-top: 1rem;" class="header-mid-acoount">
                <div style="margin: 0 1rem;" id="accountdetails"  class="user"><span>  <a href="./redirectAccount.html"><i class="fa-solid fa-user"></i> <span class="acc">Account</a>
                     </span>  </span></div>
                <div style="margin: 0 1rem; position:relative" id="cartdetails" class="user"><span> <div style="position:absolute; bottom:1rem; left:0.8rem;color:rgba(251, 55, 130, 255);font-weight:700" class="cartnumber"></div> <i class="fa-solid fa-bag-shopping">
                 </i></span></div>
            </div>

        </div>



        <div style="display: flex; border: 1px solid rgba(174,174,174,0.5);justify-content: space-evenly;min-height: 2rem;padding: 1rem;" class="header-bottom">
           
                <ul style="display: flex;list-style: none;min-width: 70vw;justify-content: space-evenly;color: #949090;">
                    <li onmouseover="show1()"  onmouseleave="hide1()"><a href="./skin.html">Makeup</a></li>
                    <li onmouseover="show2()" onmouseleave="hide2()"><a href="./skin.html">Skin</a></li>
                    <li onmouseover="show3()" onmouseleave="hide3()"><a href="./skin.html">Hair</a></li>
                    <li onmouseover="show4()" onmouseleave="hide4()"><a href="./skin.html">Appliances</a></li>
                    <li onmouseover="show5()" onmouseleave="hide5()"><a href="./skin.html">Personal Care</a></li>
                    <li onmouseover="show6()" onmouseleave="hide6()"><a href="./skin.html">Natural</a></li>
                    <li onmouseover="show7()" onmouseleave="hide7()"><a href="./skin.html">Mom & Baby</a></li>
                    <li onmouseover="show8()" onmouseleave="hide8()"><a href="./skin.html">Health & Wellness</a></li>
                    <li onmouseover="show9()" onmouseleave="hide9()"><a href="./skin.html">Men</a></li>
                    <li onmouseover="show10()" onmouseleave="hide10()"><a href="./skin.html">Fragrance</a></li>
                    <li onmouseover="show11()" onmouseleave="hide11()"><a href="./skin.html">LUXE</a></li>
                    <li > <a href=""><img src="./images/menusprite.png" alt=""></a> </li>
                </ul>
            </div>
            <div onmouseover="show1()" onmouseleave="hide1()" class="head-btm-pop1">
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Foundation</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Losse Powder</a></li>
                    <li><a href="">Blush</a></li>
                    <li><a href="">Bronzer</a></li>
                    <li><a href="">BB & CC Cream</a></li>
                    <li><a href="">Highlighters</a></li>
                    <li><a href="">Setting Spray</a></li>
                    <li><a href="">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show2()" onmouseleave="hide2()" class="head-btm-pop2">
                <div>
                    <h5>CLEARNERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show3()" onmouseleave="hide3()" class="head-btm-pop3">
                <div>
                    <h5>HAIR CARE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>TOOLS & ACCESSORIES</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show4()" onmouseleave="hide4()" class="head-btm-pop4">
                <div>
                    <h5>HAIR STYLING TOOLS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>HAIR REMOVAL TOOLS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show5()" onmouseleave="hide5()" class="head-btm-pop5">
                <div>
                    <h5>BATH & SHOWERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>HADNS & FEET</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show6()" onmouseleave="hide6()" class="head-btm-pop6">
                <div>
                    <h5>SKIN</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>HAIR</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show7()" onmouseleave="hide7()" class="head-btm-pop7">
                <div>
                    <h5>CLEARNERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show8()" onmouseleave="hide8()" class="head-btm-pop8">
                <div>
                    <h5>CLEARNERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show9()" onmouseleave="hide9()" class="head-btm-pop9">
                <div>
                    <h5>CLEARNERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show10()" onmouseleave="hide10()" class="head-btm-pop10">
                <div>
                    <h5>CLEARNERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>
            <div onmouseover="show11()" onmouseleave="hide11()" class="head-btm-pop11">
                <div>
                    <h5>CLEARNERS</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                <div>
                    <h5>FACE</h5>
                    <ul style="list-style: none;">
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Losse Powder</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                     </ul>
            </div>
                
            </div>


           
        </div>`
}
export default navbar;