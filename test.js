let listProducts=[
    {
        id:1,
        name:"AirPods Pro",
        price: 249,
        img: "./img/1.jpg",
        quantum: 0
    },
    {
        id:2,
        name:"Nintendo Switch",
        price: 299,
        img: "./img/2.jpg",
        quantum: 0
    },
    {
        id:3,
        name:"PS5",
        price: 499,
        img: "./img/3.jpg",
        quantum: 0
    },
    {
        id:4,
        name:"Xbox Series X",
        price:  499,
        img: "./img/4.jpg",
        quantum: 0

    },
    {
        id:5,
        name:"Iphone 14 Pro Max - 1TB",
        price: 1599,
        img: "./img/5.jpg",
        quantum: 0

    },
    {
        id:6,
        name:"Samsung S22 Ultra - 1TB",
        price: 1399,
        img: "./img/6.jpg",
        quantum: 0
    },
    {
        id:7,
        name:"MacBook Pro 14' M1 Max (64GB RAM | 4TB)",
        price: 4699,
        img: "./img/7.jpg",
        quantum: 0

    },
    {
        id:8,
        name:"2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
        price: 6999,
        img: "./img/8.jpg",
        quantum: 0
    },
]
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function renderProduct() {
    let x=document.getElementById("sell")
    let p = document.getElementById("wrapper")
    /* console.log(p); */
    let result = "" 
   
    for (let i = 0; i < listProducts.length; i++) {               
        result += `
            <div id="item">
                <div id="img">
                <img src="${listProducts[i].img}" style="width:100% ;object-fit: cover; height:100%">
                </div>
                <p>${listProducts[i].name}</p>
                <span> $ ${numberWithCommas(listProducts[i].price)}</span>
                <div id="buyAndSell">
                    <button  onclick="sell(${listProducts[i].id})"class="sell" id="sell" style="opacity: ${listProducts[i].quantum==0 ? 0.3 : 1}"> Sell</button>
                    <span id="amout">${listProducts[i].quantum}</span>
                    <button onclick="buy(${listProducts[i].id})" id="buy" >Buy</button>
                </div>
            </div>       
        `
    }
    p.innerHTML = result
}
renderProduct()


function renderRemaining() {
    p1=document.getElementById("totalMoney") 
    p2=document.getElementById("percent")
    let a=0
    let result1
    let result2
    for (let i = 0; i < listProducts.length; i++) {
        a= a + listProducts[i].quantum*listProducts[i].price       
    }
    console.log("tien da mua",a);
    if (a<=217000000000) {
         result1= ` Remaining ${numberWithCommas(217000000000-a)} $`
         let x=(a/217000000000)*100
         result2= ` You only spent ${x.toFixed(4)}% of the total!`
         
    }else{
         result1= ` You ran out of money`
         result2= ` `
         
        

         
    } 
     p1.innerHTML=result1
     p2.innerHTML=result2
}
renderRemaining()

/* function renderPecent(){
    p=document.getElementById("percent")

   console.log(11111); 
    let a=0
    
    for (let i = 0; i < listProducts.length; i++) {
        a= a + listProducts[i].quantum*listProducts[i].price       
    } 
    let x=(a/217000000000)*100
   let result=` You only spent ${x.toFixed(4)}% of the total!`
     p.innerHTML=result
}
 */



function buy(id) {
    /* console.log(id); */
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id===id) {
           /*  console.log(listProducts[i].quantum); */
            listProducts[i].quantum=listProducts[i].quantum +1
            /* console.log(listProducts[i].quantum); */               
            }
       /*  if (listProducts[i].quantum ==0) {
                document.getElementById(`sell${i}`).style.opacity=0.5
        }else{
                document.getElementById(`sell${i}`).style.opacity=1

            }
        
 */
        }
        renderProduct()
        renderRemaining()
        renderPecent()  
    }
   


function sell(id) {
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === id) {
            if (listProducts[i].quantum > 0) {
                listProducts[i].quantum = listProducts[i].quantum - 1
               /*  console.log(listProducts[i].quantum); */

            }
        }
    }
    renderProduct()
    renderRemaining()
    renderPecent()
}
/* function showButtonSell(id) {
    console.log(id);
    for (let i = 0; i < listProducts.length; i++) {
        if(listProducts[i].quantum>0){
            document.getElementById(`sell${id}`).style.opacity=1
            

            
        }else{
            document.getElementById(`sell${id}`).style.opacity=0.5
        }
        
    }
}
showButtonSell() */