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

let markUp = ``;
const artistWorkContainer = document.getElementById("artist-work");
console.log(artistWorkContainer);

const header = `
<header>
<img src="images/logo.png" class="logo" />
<img
  src="images/user-avatar.png"
  class="user-avatar"
  alt="photo of user"
/>
</header>
`;

let postMarkUp = ``;

for (let i = 0; i < posts.length; i++) {
  postMarkUp += `
  <main>
  <section class="artist-info">
    <img
      src="${posts[i].avatar}"
      class="artist-avatar"
      alt="photo of artist"
    />
    <div>
      <h4 class="artist-name">${posts[i].name}</h4>
      <p class="artist-birthplace">${posts[i].location}</p>
    </div>
  </section>
  <section id="artist-work">
    <img
      src="${posts[i].post}"
      class="image-main"
      id="image-main"
      alt="artist's work"
    />
  </section>
  <section class="social">
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
    <p class="likes">${posts[i].likes} likes</p>
    <p class="post">
      <span class="post-author">${posts[i].username}</span> ${posts[i].comment}
    </p>
  </section>
</main>
   
    `;
}

markUp = `
<div class="container">
  ${header}
  ${postMarkUp}
</div>
  `;

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = markUp;
});

// const imageMain = document.getElementById("image-main");

// imageMain.addEventListener("dblclick", function () {
//   console.log("clicked");
// });
