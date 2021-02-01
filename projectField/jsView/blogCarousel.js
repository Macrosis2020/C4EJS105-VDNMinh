const data_aos = ['fade-right', 'fade-in', 'fade-left'];
let n = post.length;
for (let i = 0; i < n; i++) {
    let j = 0;
    if(j == 3)
        j = 0;
    document.getElementById('blog-post').insertAdjacentHTML('beforeend', `<div class="blog-content" data-aos=${data_aos[j++]} data-aos-delay="200">
        <img src= ${post[i].img} alt="post-1">
        <div class="blog-title">
            <h3>${post[i].name}</h3>
            <button class="btn btn-blog" onclick="displayContentByIndex(${i})">Learn more</button>
        </div>
        </div>`);
}

