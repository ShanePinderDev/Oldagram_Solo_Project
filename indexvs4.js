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

let artistInfoMarkUp = "";
let artistWorkMarkUp = "";
let socialMarkUp = "";
let markUp = ``;

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
  for (let i = 0; i < posts.length; i++) {
    if (e.target.className === `image-main image${i}`) {
      posts[i].likes++;
    }
  }
  let newLikes = document.querySelectorAll(".likes");
  for (let i = 0; i < newLikes.length; i++) {
    newLikes[i].innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
  }
});
