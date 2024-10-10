


    $('#footer .title').click(function(e){
        e.preventDefault();


        const children = $(this).children('.title svg')


        if($(this).hasClass('on')){
            $(this).removeClass('on').siblings('.sub').slideUp();
            
        }else{
            $('.title').removeClass('on').siblings('.sub').slideUp();
            $(this).addClass('on').siblings('.sub').slideDown();
           
        }
        children.toggleClass('on');
    
    })


    $('.fix-btn .btn-all').click(function(){
        $('.fix-btn .gender').addClass('on');
    })




    $('.btn-top').click(function(){
        window.scrollTo({top:0});
    })


    fetch('./asset/data/product.json')
    .then(res=>res.json())
    .then(json=>{
        prdList1Arr = json.prdList1;
        prdList2Arr = json.prdList2;
        prdList3Arr = json.prdList3;
        prdList4Arr = json.prdList4;

        let list1List = ``;
        let list2List = ``;
        let list3List = ``;
        let list4List = ``;

        prdList1Arr.forEach(element => {

            percentEl = `<p class="percent">${element.price.sale}%</p>`;
            
            isPercent = (element.price.sale)?percentEl:'';

             list1List +=`<li class="prd-item">
             <div class="img-area">
                 <a href="">
                     <img src="${element.thumb}">
                 </a>
             </div>
             <div class="desc-area">
                 <a href="">
                    <strong class="top">${element.title}</strong>
                    <div class="bottom">
                        ${isPercent}
                        <p class="won">${element.price.curr.toLocaleString()}원</p>
                    </div>
                </a>
           </div>
                         </li>`
    });
        prdList2Arr.forEach(element => {

            percentEl = `<p class="percent">${element.price.sale}%</p>`;
            
            isPercent = (element.price.sale)?percentEl:'';

             list2List +=`<li class="prd-item">
             <div class="img-area">
                 <a href="">
                     <img src="${element.thumb}">
                 </a>
             </div>
             <div class="desc-area">
                 <a href="">
                    <strong class="top">${element.title}</strong>
                    <div class="bottom">
                        ${isPercent}
                        <p class="won">${element.price.curr.toLocaleString()}원</p>
                    </div>
                </a>
           </div>
                         </li>`
    });
        prdList3Arr.forEach(element => {

            percentEl = `<p class="percent">${element.price.sale}%</p>`;
            
            isPercent = (element.price.sale)?percentEl:'';

             list3List +=`<li class="brand-item">
             <div class="img-area">
                 <a href="">
                     <img src="${element.thumb}">
                 </a>
             </div>
             <div class="desc-area">
                 <a href="">
                    <strong class="top">${element.title}</strong>
                    <div class="bottom">
                        ${isPercent}
                        <p class="won">${element.price.curr.toLocaleString()}원</p>
                    </div>
                </a>
           </div>
                         </li>`
    });
        prdList4Arr.forEach(element => {

            percentEl = `<p class="percent">${element.price.sale}%</p>`;
            
            isPercent = (element.price.sale)?percentEl:'';

             list4List +=`<li class="prd-item">
             <div class="img-area">
                 <a href="">
                     <img src="${element.thumb}">
                 </a>
             </div>
             <div class="desc-area">
                 <a href="">
                    <strong class="top">${element.title}</strong>
                    <div class="bottom">
                        ${isPercent}
                        <p class="won">${element.price.curr.toLocaleString()}원</p>
                    </div>
                </a>
           </div>
                         </li>`
    });

     $('#list1').html(list1List);
     $('#list2').html(list2List);
     $('#list3').html(list3List);
     $('#list4').html(list4List);
     


     DraggList1();
     DraggList2();

    });


    function DraggList1(){
    $('.promo-group').each(function(i,el){

        let w = $(this).find('.prd-item').width();
        let cnt = $(this).find('.prd-item').length;
        let gap = 0;
        if (cnt % 2 === 0) {
            cnt -= 1;
        }
        let oddIndexes = []; 
        for (let i = 0; i < cnt; i += 2) {
            oddIndexes.push(i);
        }
        oddIndexes.forEach((value, index) => {
            gap = index;
        });
        total = gap+1;
    
        Draggable.create($(this).find('.prd-list'), {
            type: "x",
            bounds: {
                minX: 0,
                maxX: -(total*w)+$('.wrapper').width()-(gap*5)-32,
            }
        });
        
    });
    
     };

    function DraggList2(){ 
    $('.brand-group').each(function(i,el){

        let w = $(this).find('.brand-item').width();
        let cnt = $(this).find('.brand-item').length;
        let totalWidth = cnt * w;
        let gap = 0;
    
        Draggable.create($(this).find('.brand-list'), {
            type: "x",
            bounds: {
                minX: 0,
                maxX: -(total*w)+$('.wrapper').width()-(gap*5)-32,
            }
        });


    });
};




   

       

    //하이라이트 슬라이드
    const brandlSlide = new Swiper('.brand-swiper',{
        loop:true,
        pagination:{
            el:".pagination",
            type: 'progressbar',
        },
        autoplay:{
          delay:4000
        },
      })
   
      //검색창
      $('#header .util-area .search').click(function(e){
        e.preventDefault(); 
        $('html').addClass('hidden')
        $('.search-group').addClass('show');
      })
      $('.search-group .close').click(function(){
        $('.search-group').removeClass('show');
      })


   









