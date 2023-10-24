const main = document.querySelector(".main")

let arr=[]

const movieList= fetch(movie_genres_http+"api_key="+api_key+"&page="+(Math.random()*3))
.then((Promisedata)=>Promisedata.json())
.then((rawdata)=>{arr.push(rawdata.results)})

console.log(arr)

let arr1=[]

arr[0].forEach(element => {
    element.forEach((itr)=>{
        arr1.push(itr.original_title)
    })
});