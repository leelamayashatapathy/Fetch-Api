// //fetch api
// fetch('https://jsonplaceholder.typicode.com/posts')

//   .then(response => response.json())
//   .then((data) =>{
//       let data1='';
//       data.map((values)=>{
//         data1+=`<div class="row mb-2 px-5" >
//                     <div class="justify-content-center ">
//                     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//                     <div class="col p-4 d-flex flex-column position-static">
//                     <strong class="d-inline-block mb-2 text-primary">${values.title}</strong>
//                     <h3 class="mb-0">${values.userId}</h3>
//                     <div class="mb-1 text-muted">Nov 12</div>
//                     <p class="card-text mb-auto">${values.body}</p>
//                     <a href="#" class="stretched-link">${values.id}</a>
//                 </div>
//                 <div class="col-auto d-none d-lg-block">
//                     <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
//                         aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
//                     <title>Placeholder</title>
//                     <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
//                     dy=".3em">Thumbnail</text>
//                     </svg>

//                 </div>
//                 </div>
//                 </div>

//       </div>`
//       })
//       document.getElementById("card").innerHTML=data1
//   })

var arry1=[]
async function fetchApi(){
    console.log("inside async func")
    const a=await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(a)
    // console.log("Wait first")
    const res=await a.json();
    // console.log(res)
    return res
}
// console.log("Before calling api")
let v= fetchApi()
// console.log("after calling unction")
v.then((res)=>{
    // console.log(res)
    let data1='';
      res.forEach((values,ind)=>{
        data1+=`
      <div class="row mb-2 justify-content-center " >
                    <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                    <strong class="mb-0 text-danger">U.Name:${values.username}</strong>
                    <strong class="d-inline-block mb-2 text-primary">Name:${values.name}</strong>
                    <div class="mb-1 text-active"><b>Mail Id:</b>${values.email}</div>
                    <p class="card-text mb-auto"><b>Phone:</b>${values.phone}</p>
                    <p class="card-text mb-auto"><b>Web:</b>${values.website}</p>
                    <p class="card-text mb-auto"><b>Address:</b>${values.address.street},${values.address.suite},${values.address.city}</p>
                    <input type="hidden" id="inputval1" value="">
                    <div clss="d-flex">
                    <button id="btn1" class="btn btn-danger"  onclick="myFunction(${values.id});">Post</button>
                    <button id="btn1"class="btn btn-primary"  onclick="photoFunction(${values.id});">Photo</button>
                    <button id="btn1"class="btn btn-warning"  onclick="todoFunction(${values.id});">Todo</button>
                    </div>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg" class="bd-placeholder-img" width="200" height="250"  role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em"></text>
                    </img>

                </div>
                </div>
                </div>

      </div>`
      arry1.push(values.id)
      })

    document.getElementById("card").innerHTML= data1

})
// let linkval=document.getElementById("btn1")
// linkval.addEventListener("click",myFunc);
// function myFunc(){
//     console.log("Clicked")
// }
// console.log(arry1)

//Users to post
function myFunction(idd){
    console.log("Clicked")
    console.log(idd)
    async function fetchAPipost(){//Fetching Post Api
    let postapi= await fetch("https://jsonplaceholder.typicode.com/posts")
    let respost=postapi.json();
    return respost
}

    v1=fetchAPipost()
    v1.then((respost)=>{
        console.log(respost)
        //filtering data
        let PostId = respost.filter(function(data) {
            return data.userId ==idd;
        });
        // console.log(PostId)
        // let data8="";
        // data8=`<input class="form-control me-2" type="search" placeholder="Search" id="ser" onKeyPress="searchFunction(${idd})" aria-label="Search">`
        let data2='';
        PostId.forEach((values,ind)=>{
            data2+=`<div class="row mb-2 justify-content-center " >
                    <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                    <strong class="justify-content-center">Post</strong>
                    <strong class="mb-0 text-danger">Title:${values.title}</strong>
                    <strong class="mb-0 text-primary">Comment:${values.body}</strong>
                    <button id="btn1" class="btn btn-success"  onclick="cmntFunction(${values.id});">Comment</button>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg" class="bd-placeholder-img" width="200" height="250"  role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em"></text>
                    </img>
                </div>
                </div>
                </div>

      </div>`
      arry1.push(values.id)

      })

    document.getElementById("card").innerHTML= data2
    // document.getElementById("search").innerHTML=data8
    // document.getElementById("card").innerText="All"
    })
}



//user to photo
function photoFunction(idd){
    console.log("Clicked")
    console.log(idd)
    async function fetchAPipost(){//Fetching Post Api
    let postapi= await fetch("https://jsonplaceholder.typicode.com/photos")
    let respost=postapi.json();
    return respost
}

    v1=fetchAPipost()
    v1.then((respost)=>{
        console.log(respost)
        //filtering data
        let PostId = respost.filter(function(data) {
            return data.albumId ==idd;
        });
        // console.log(PostId)

        let data2='';
        PostId.forEach((values,ind)=>{
            data2+=`<div class="row mb-2 justify-content-center " >
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="justify-content-center">Photo</strong>
            <strong class="mb-0 text-danger">Title:${values.title}</strong>
        </div>
                <div class="col-auto d-none d-lg-block">
                    <img src=${values.url} class="bd-placeholder-img" width="200" height="250"  role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em"></text>
                    </img>

                </div>
                </div>
                </div>

      </div>`
      arry1.push(values.id)
      })

    document.getElementById("card").innerHTML= data2

    // document.getElementById("card").innerText="All"
    })

}


//fetch todo and render

function todoFunction(idd){
    console.log("Clicked")
    console.log(idd)
    async function fetchAPipost(){//Fetching Post Api
    let postapi= await fetch("https://jsonplaceholder.typicode.com/todos")
    let respost=postapi.json();
    return respost
}

    v1=fetchAPipost()
    v1.then((respost)=>{
        console.log(respost)
        //filtering data
        let PostId = respost.filter(function(data) {
            return data.userId ==idd;


        });
        // console.log(PostId)
        let data2='';
        PostId.forEach((values,ind)=>{
            data2+=`<div class="row mb-2 justify-content-center " >
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="justify-content-center">Todo</strong>
            <strong class="mb-0 text-danger">Title:${values.title}</strong>
            <strong class="mb-0 text-danger">Completed:${values.completed}</strong>

        </div>

                </div>
                </div>

      </div>`
      arry1.push(values.id)
      })

    document.getElementById("card").innerHTML= data2
    // document.getElementById("card").innerText="All"


    })

}






//POst comment button to cmnt

const filteredcmnt = []
function cmntFunction(idd){
    console.log("Clicked")
    console.log(idd)
    async function fetchAPipost(){//Fetching Post Api
    let postapi= await fetch("https://jsonplaceholder.typicode.com/comments")
    let respost=postapi.json();
    return respost
}

v1=fetchAPipost()
v1.then((respost)=>{

    // console.log(respost)
    //filtering data
    let PostId = respost.filter(function(data) {
        let vm= data.postId==idd;
        if (data.postId == idd){
            // console.log(data.body)
            let filteredbody=data
            filteredcmnt.push(filteredbody)//filter comment body
            // console.log(filteredbody)
        }
        return vm//all filter comment


        // }



    });
    // filteredcmnt.push(PostId)
    // console.log(filteredcmnt)

    // console.log(PostId)
    let data8="";
        data8=`<input class="form-control me-2" type="search" placeholder="Search by Name" id="ser" onKeyPress="searchFunction(${idd})" aria-label="Search">`
    let data3='';
    PostId.forEach((values,ind)=>{
        data3+=`<div class="row mb-2 justify-content-center " >
                <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                <strong class="justify-content-center">Comment Body</strong>
                <strong class="mb-0 text-danger">Name:${values.name}</strong>
                
                <strong class="mb-0 text-primary">Email:${values.email}</strong
                <strong class="mb-0 text-primary"><b>Comment:</b>${values.body}</strong>

            </div>
            <div class="col-auto d-none d-lg-block">
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg" class="bd-placeholder-img" width="200" height="250"  role="img"
                    aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                dy=".3em"></text>
                </img>

            </div>
            </div>
            </div>

  </div>`
  arry1.push(values.id)
  })

document.getElementById("card").innerHTML= data3
document.getElementById("search").innerHTML=data8
})
}





//search 

function searchFunction(idd){
    let sv = document.getElementById("ser").value;
    console.log(sv)
    console.log("getting..",filteredcmnt)
    const namevalue=[]
    filteredcmnt.forEach((ele)=>{
        namevalue.push(ele)
        
        // namevalue.push({"id":ele.id,"body":ele.body,"name":ele.name ,"email":ele.email,"postId":ele.postId})

    })
    // console.log("getting 5",namevalue)
    console.log(namevalue)
    function filterByValue(array, value){
        return array.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1)
      }
    
      const fv =filterByValue(namevalue,sv)
        let data3='';
        fv.forEach((ele)=>{
            data3=`<div class="row mb-2 justify-content-center " >
                <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                <strong class="justify-content-center">Comment Body</strong>
                <strong class="mb-0 text-danger">Name:${ele.name}</strong>
                
                <strong class="mb-0 text-primary">Email:${ele.email}</strong>
                <strong class="mb-0 text-primary">Body:${ele.body}</strong>
                
                

            </div>
            <div class="col-auto d-none d-lg-block">
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg" class="bd-placeholder-img" width="200" height="250"  role="img"
                    aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                dy=".3em"></text>
                </img>

            </div>
            </div>
            </div>

  </div>`
  


document.getElementById("card").innerHTML= data3

    }
        )}


    

function myHome(){
    return fetchApi()
}
    
    
  