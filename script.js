var wrapperEle = document.body.querySelector(".wrapper");
var data = ["dog", "fish", "cat", "shark","cat","dog"];

for(var I=0; I<data.length; I++){
  createHomework(data[I]);
}

function createHomework(str){
  var ele=document.createElement("div");
  if(str==="dog"){
  ele.innerHTML="Borf Borf";
}else if(str==="cat"){
  ele.innerHTML="I am a cat"
}else if(str!=="dog"){
  ele.innerHTML="I'm an animal"
  }
  wrapperEle.appendChild(ele);
}