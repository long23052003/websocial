var a=localStorage.getItem("signincheck");
//       if(!a){
//         window.location="sigin.html"
//       }
// // đăng ảnh
const reader = new FileReader();
const fileUploader = document.getElementById('file-uploader');
const imageGrid = document.getElementById('image-grid');
const dangtai=document.getElementById("dangtai");
const cancle=document.getElementById("cancle");
var anhup="";
fileUploader.addEventListener('change', (event) => {
    const files = event.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => {
        const img = document.createElement('img');
        dangtai.innerHTML=`<button onclick="hienthibai()" id="nutdangtai" class="nut">Đăng tải</button>`
        cancle.innerHTML=`<button id="nutcancle" class="nut">Cancle</button>`
        imageGrid.appendChild(img);
        img.src = event.target.result;
        img.alt = file.name;
        anhup=file.name;
        imageGrid.append(dangtai);
        imageGrid.append(cancle);
        cancle.onclick=function () {
            imageGrid.remove(imageGrid);
            window.location="index.html";
        }
    });
});
// comment
var ndcmt=document.querySelector(".ndcmt");
var cmtthuc=document.querySelector(".cmtthuc");
const cmt=[
    {
        avatar: "avt.jpg",
        namet: "",
        ndcmtt: ndcmt.value,
    },
];
function taocmt(){
    return `
    <div class="headerpost cmtpost">
          <img class="avtp" src="avt.jpg" alt="">
          <div class="namep namet">
            <span><b>${localStorage.getItem("username")}</b></span>
            <span id="ndcmt1">${ndcmt.value}</span>
          </div>
        </div>`;
}
function huycmt(){
    return `
    <div class="headerpost cmtpost">
          <img class="avtp" src="avt.jpg" alt="">
          <div class="namep namet">
            <span><b>${localStorage.getItem("username")}</b></span>
            <span id="ndcmt1"></span>
          </div>
        </div>`;
}
var button=document.getElementById("post");
button.onclick=function() {
    for (let i = 0; i < cmt.length; i++) {
        cmtthuc.innerHTML += taocmt(cmt[i]);
    }
}
//   nhận đăng ảnh
const img=document.getElementById("anhup")
const post2=document.getElementById("postclone");
var nutdangtai=document.getElementById("nutdangtai");
var today= new Date();
var time =today.getHours()+":"+today.getMinutes();
const Post=[
    {
        avatarp: "avt.jpg",
        namep:"",
        post: "",
    }
]
function taobai(){
    return `
    <div class="post1 post4">
        <div class="headerpost">
          <img class="avtp" src="avt.jpg" alt="">
          <div class="namet">
            <span><b>${localStorage.getItem("username")}</b></span>
            <span class="time">Đã đăng vào ${time}</span>
          </div>
        </div>
        <div class="bodypost">
          <img src="${anhup}" style="width: 760px" alt="">
        </div>
        <div class="react">
          <div class="tym">
            <img src="/images/i-love-you.png" alt="" style="width: 25px" title="Thả tym">
            <span>0</span>
          </div>
          <div class="tym">
            <img src="/images/lol.png" alt="" style="width: 25px" title="Hahahaa">
            <span>0</span>
          </div>
          <div class="tym">
            <img src="/images/sad.png" alt="" style="width: 25px" title="Saddd">
            <span>0</span>
          </div>
          <div class="tym">
            <img src="/images/angry.png" alt="" style="width: 25px" title="Gruuuuzz">
            <span>0</span>
          </div>
        </div>
        <div class="cmtthuc3 cmtthuc"></div>
          <div class="cmtclone">
            <div class="avtcmt"><img class="avtp" src="avt.jpg"><textarea class="ndcmt3 ndcmt"></textarea></div>
            <div class="buttoncmt"><button onclick="hienthicmt3()" id="post3" class="Post" type="button">Post comment</button><button class="Cancle" type="button">Cancel</button></div>
        </div>
    </div>`
}
function hienthibai() {
    post2.innerHTML+=taobai(Post);
    console.log(anhup);
}
//cmt 2
var ndcmt2=document.querySelector(".ndcmt2");
var cmtthuc2=document.querySelector(".cmtthuc2");
const cmt2=[
    {
        avatar2: "avt.jpg",
        name2: "",
        ndcmt2: ndcmt2.value,
    },
];
function taocmt2(){
    return `
    <div class="headerpost cmtpost">
          <img class="avtp" src="avt.jpg" alt="">
          <div class="namep namet">
            <span><b>${localStorage.getItem("username")}</b></span>
            <span>${ndcmt2.value}</span>
          </div>
        </div>`;
}
var button2=document.getElementById("post2");
button2.onclick=function() {
    for (let i=0; i<cmt2.length;i++){
        cmtthuc2.innerHTML+=taocmt2(cmt2[i]);
    }
}
//react
var today= new Date();
var time =today.getHours()+":"+today.getMinutes();
var tucgian=document.getElementById("tucgian");
var vuive=document.getElementById("vuive");
var hp=document.getElementById("hp");
var buonba=document.getElementById("buonba");
const postreact=document.querySelector(".postreaction");
const reactp=document.querySelector(".reactp");
function taorec(i){
    return `
    <div class="post1" id="postreac">
        <div class="headerpost">
          <img class="avtp" src="avt.jpg" alt="">
          <div class="namet">
            <span><b>${localStorage.getItem("username")}</b></span>
            <span class="time">Đã đăng vào ${time}</span>
          </div>
        </div>
        <div class="bodypost">
        <div class="reactionnd">
        Đang cảm thấy ${i.value}
        </div>
        </div>
        <div class="react">
          <div class="tym">
            <img src="/images/i-love-you.png" alt="" style="width: 25px" title="Thả tym">
            <span>0</span>
          </div>
          <div class="tym">
            <img src="/images/lol.png" alt="" style="width: 25px" title="Hahahaa">
            <span>0</span>
          </div>
          <div class="tym">
            <img src="/images/sad.png" alt="" style="width: 25px" title="Saddd">
            <span>0</span>
          </div>
          <div class="tym">
            <img src="/images/angry.png" alt="" style="width: 25px" title="Gruuuuzz">
            <span>0</span>
          </div>
        </div>
        <div class="cmt">
        </div>
        <div class="cmtthuc2">
        </div>
          <div class="cmtclone cmtclone2">
            <div class="avtcmt"><img class="avtp" src="avt.jpg"><textarea class="ndcmt2 ndcmt"></textarea></div>
            <div class="buttoncmt"><button id="post2" class="Post" type="button">Post comment</button><button class="Cancle" type="button">Cancel</button></div>
        </div>
    </div>
    `}
function hienthireact(){
    postreact.innerHTML=taorec(tucgian);
}
function hienthireact1(){
    postreact.innerHTML=taorec(vuive);
}
function hienthireact2(){
    postreact.innerHTML=taorec(hp);
}
function hienthireact3(){
    postreact.innerHTML=taorec(buonba);
}
var search=document.getElementById("search");
function timkiem(){
    alert("Không có bài viết "+search.value+" nào")
}