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
        id="img-heart${i}"
        class="icon icon-heart"
        alt="heart icon"
        ondblclick = "likeCount(${i})"
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
    <p class="likes" id="like${i}">${posts[i].likes} likes</p>
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

function likeCount(id) {
  // making a new key - newLikes and assigning the value to it of posts[id].likes
  if (posts[id].newLikes == undefined) {
    posts[id].newLikes = posts[id].likes;
  }
  // creating a new variable - originalLikes and assigning the value of posts[id].likes to it
  let originalLikes = posts[id].likes;
  // creating a new variable - postClickedLikes and assiging the value of the new key posts[id].newLikes to it
  let postClickedLikes = posts[id].newLikes;
  // selecting the image heart element
  const imgHeart = document.getElementById(`img-heart${id}`);

  if (originalLikes === postClickedLikes) {
    // if likes count are equal increase tne newLikes by 1
    posts[id].newLikes = originalLikes + 1;
    // change imgHeart to red background image
    imgHeart.src = "images/red-heart-icon.png";
  } else {
    // if likes are not equal decrease the key newLikes by 1
    posts[id].newLikes = originalLikes;
    // change the imageHeart to plain background image
    imgHeart.src = "images/icon-heart.png";
  }
  // Assign the value of newLikes in dom by getting the id
  document.getElementById(
    `like${id}`
  ).innerHTML = `${posts[id].newLikes} likes`;
}
// document.body.addEventListener("dblclick", function (e) {
//   for (let i = 0; i < posts.length; i++) {
//     if (e.target.className === `image-main image${i}`) {
//       posts[i].likes++;
//     }
//   }
//   let newLikes = document.querySelectorAll(".likes");
//   for (let i = 0; i < newLikes.length; i++) {
//     newLikes[i].innerHTML = `<p class='likes'>${posts[i].likes} likes</p>`;
//   }
// });
