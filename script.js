let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"]

let h_arr=["Heading-1","Heading-2","Heading-3","Heading-4","Heading-5","Heading-6","Heading-7","Heading-8","Heading-9","Heading-10"]

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > arr.length - 1)
        i = 0

    document.getElementById("img1").src = arr[i]
    document.getElementById("h-1").innerText = h_arr[i]
    document.getElementById("img2").src = arr[(i+1)%arr.length]
    document.getElementById("h-2").innerText = h_arr[(i+1)%h_arr.length]
    document.getElementById("img3").src = arr[(i+2)%arr.length]
    document.getElementById("h-3").innerText = h_arr[(i+2)%h_arr.length]

})

prev.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = arr.length - 1

        document.getElementById("img1").src = arr[i]
        document.getElementById("h-1").innerText = h_arr[i]
        document.getElementById("img2").src = arr[(i+1)%arr.length]
        document.getElementById("h-2").innerText = h_arr[(i+1)%h_arr.length]
        document.getElementById("img3").src = arr[(i+2)%arr.length]
        document.getElementById("h-3").innerText = h_arr[(i+2)%h_arr.length]

})