const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// const main = document.getElementById("main");

// const body = document.querySelector("body");
// const header = `
// <header>
// <img src="images/logo.png" class="logo" />
// <img
//   src="images/user-avatar.png"
//   class="user-avatar"
//   alt="photo of user"
// />
// </header>
// `;

const artistInfoSection = document.getElementById("artist-info");
// const artistWorkSection = document.getElementById("artist-work");
// console.log(artistWorkSection);
// const socialSection = document.getElementById("social");
// console.log(socialSection);

let artistInfoMarkUp = "";
let artistWorkMarkUp = "";
let socialMarkUp = "";
let markUp = ``;
// const artistWorkContainer = document.getElementById("artist-work");
// console.log(artistWorkContainer);

// const header = `
// <header>
// <img src="images/logo.png" class="logo" />
// <img
//   src="images/user-avatar.png"
//   class="user-avatar"
//   alt="photo of user"
// />
// </header>
// `;

let postMarkUp = ``;

for (let i = 0; i < posts.length; i++) {
  artistInfoMarkUp = `
  
  <section class="artist-info" id="artist-info">
    <img
      src="${posts[i].avatar}"
      class="artist-avatar"
      alt="photo of artist"
    />
    <div>
      <h4 class="artist-name">${posts[i].name}</h4>
      <p class="artist-birthplace">${posts[i].location}</p>
    </div>
    </section> `;

  artistWorkMarkUp = `
  <section id="artist-work" class="artist-work">
    <img
      src="${posts[i].post}"
      class="image-main image${i}"
      id="image-main${i}"
      alt="artist's work"
    />
    </section>
    `;

  socialMarkUp = `
  <section class="social" id="social">
  <div class="icons">
      <img
        src="images/icon-heart.png"
        class="icon icon-heart"
        alt="heart icon"
      />
      <img
        src="images/icon-comment.png"
        class="icon icon-comment"
        alt="comment icon"
      />
      <img
        src="images/icon-dm.png"
        class="icon icon-dm"
        alt="direct message icon"
      />
    </div>
    <p class="likes like{i}">${posts[i].likes} likes</p>
    <p class="post">
      <span class="post-author">${posts[i].username}</span> ${posts[i].comment}
    </p>
    </section>
  `;
  markUp += `
<div class="container">
  
  ${artistInfoMarkUp}
  ${artistWorkMarkUp}
  ${socialMarkUp}
</div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  main.innerHTML = markUp;
});

document.body.addEventListener("dblclick", function (e) {
  console.log(e.target.id);
  if (e.target.classList.contains("image-main")) {
    console.log("clicked");
    // console.log(posts[i].likes);
    console.log(e.target);
    console.log(e.target.className.includes(e.target.id));
    // const imageMain = document.getElementById("image-main");
    // console.log(imageMain.src);
    // const socialSection = document.getElementById("social");
    // console.log(socialSection);
    // let newLikes = "";
    for (let i = 0; i < posts.length; i++) {
      if (e.target.className === `image-main image${i}`) {
        // let presentLike = document.querySelector(".likes");
        // console.log(presentLike);
        // let newLikes = document.querySelectorAll(".likes");
        // let newLikes = document.querySelector(".likes");
        // console.log(newLikes);
        // for (let a = 0; a < newLikes.length; a++) {
        // posts[i].likes++;
        // newLikes.innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
        // console.log("item: ", newLikes[a]);
        // if (newLikes[a].innerHTML === presentLike.innerHTML) {
        // posts[i].likes++;
        // }
        // }
        // [...newLikes].forEach((item) => {
        //   console.log(newLikes);
        //   console.log("item: ", newLikes[i]);
        // });
        posts[i].likes++;
        // console.log(posts[i].likes);
        // let newLike = newLikes.item(2);
        // console.log(newLike);
        // newLikes.innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
        // for (let i = 0; i < newLikes.length; i++) {
        //   // posts[i].likes++;

        //     let newLike = newLikes[i];
        //     // console.log(newLike);
        //     newLike.innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;

        //     console.log(newLike);

        // }
      }
    }
    let newLikes = document.querySelectorAll(".likes");
    for (let i = 0; i < newLikes.length; i++) {
      // posts[i].likes++;

      let newLike = newLikes[i];
      console.log(newLikes[i].className);
      // if (newLikes[i].className === `likes like${i}`) {
      //   newLikes[i].innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
      // }
      // if (newLike[i].contains("${like(i)}")) {
      // }
      // if (newLike.contains(likes${i})) {
      //   newLike.innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;

      //   console.log(newLike);
      // }
      newLike.innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
      // e.stopPropagation();

      // console.log(newLike);
    }

    // console.log(posts[i].likes);
    // newLikes.innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
  }
});

// const artistWorkContainer = document.getElementById("main");

// artistWorkContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("artist-work")) {
//     console.log("clicked");
//   }
// });

// const imageMain = document.getElementById("image-main");

// imageMain.addEventListener("dblclick", function () {
//   console.log("clicked");
// });
