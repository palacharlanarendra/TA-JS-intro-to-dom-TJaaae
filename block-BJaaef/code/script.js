


got.houses.forEach((element)=>{
   
    element.people.forEach((elem)=>{
        let li = document.createElement("li");
        let div = document.createElement("div");
        let p = document.createElement("p");
        let btn = document.createElement("button");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let span = document.createElement("span");
        span.classList.add("span");
        btn.innerText="Learn More!";
        img.src=elem.image;
        p.innerText = elem.description;
        span.innerText=elem.name;
        div.append(img,span);
        li.append(div,p,btn);
        let ul = document.querySelector("ul");
        ul.append(li); 
    });
});



