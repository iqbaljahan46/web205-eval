let btn = document.querySelector('button');
btn.addEventListener("click", (event)=>{
    document.createElement("p");
   let detailInfo = window.fetch("https://drive.google.com/file/d/1PAZRLdCFtv0HD2kp2LHY_eS7a2T6IwKG/views")
   
    .then((response)=>{
        document.querySelector("#parent").appendChild("p");
        let p=document.querySelector("p");
        p.append=detailInfo.json;
    })
})
