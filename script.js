let output = document.getElementById("output");
let name = document.getElementById("inp_name");
let email = document.getElementById("inp_email");
let img = document.getElementById("inp_img");
let gen = document.getElementsByClassName("gen");
let dob = document.getElementById("inp_dob");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
// let clr_inp = document.querySelectorAll("clr_inp");
let clr_inp = document.getElementsByClassName("clr_inp"); 
let img_src;

img.addEventListener("change",function(){
    let img_reader = new FileReader();
    img_reader.addEventListener("load",function(){
        img_src = img_reader.result;
    })
    img_reader.readAsDataURL(this.files[0]);
})

submit.onclick = function(){
    let flag=1;
    for(i=0;i<document.querySelectorAll("input").length;i++)
    {
        if(document.querySelectorAll("input")[i].value=="")
        {   
            flag=0
            break;
        }
    }
    if(flag==0)
        alert("All fields must be filled");
    else{
        let data = document.createElement("div");
        let image = document.createElement("div");
        let info = document.createElement("div");
        data.className="data";
        image.className="image";
        info.className="info";

        let selected;
        for(i=0;i<gen.length;i++)
        {
            if(gen[i].checked == true)
            {
                selected=gen[i].value;
            }
        } 

        info.innerHTML = "<p>Name : "+name.value+"</p><p>Email : "+email.value+"</p><p>Gender : "+selected+"</p><p>Date of Birth : "+dob.value+"</p>";

        image.innerHTML = '<img src="'+img_src+'">'
        // // console.log(img.src);

        output.appendChild(data);
        data.appendChild(info);
        data.appendChild(image);
    }    
}

clear.onclick = function(){
    for(i=0;i<clr_inp.length;i++)
    {
        clr_inp[i].value = "";
    }
    for(i=0;i<gen.length;i++)
    {
        gen[i].checked = false;
    }
}

// MY BRILLIANT IDEA {hacks}
// let flag=1,f=0;
//     for(i=0;i<clr_inp.length;i++)
//     {
//         if(clr_inp[i].value == "")
//         {
//             flag=0;
//             break;
//         }
//     }
//     for(i=0;i<gen.length;i++)
//     {
//         if(gen[i].checked == false)
//             f++;
//     }
//     if(flag==0 || f==3)
//         alert("All fields must be filled");