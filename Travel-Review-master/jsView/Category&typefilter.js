let typeObj = {};
let filtered_post = {};
for (_post of post) {
    for (type of _post.type) {
        console.log(type);
        if (typeObj[type]){
            typeObj[type] += 1;
            filtered_post[type].push(post.indexOf(_post));
        }
        else{
            typeObj[type] = 1;
            filtered_post[type] = [];
            filtered_post[type].push(post.indexOf(_post));
        }
    }
}
console.log(filtered_post);

function filterByType(type_name)
{
    document.getElementById('filteredPosts').innerHTML = "";
    for(index of filtered_post[type_name])
    {
        document.getElementById('filteredPosts').insertAdjacentHTML('afterbegin',`<div class="post-content" data-aos="zoom-in" data-aos-delay="200">
        <div class="post-image">
            <div>
                <img src=${post[index].activities[0].img} class="img" alt="blog1">
            </div>
            <div class="post-info flex-row">
                <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 32, 2021</span>
                <span>9 billions Comments</span>
            </div>
        </div>
        <div class="post-title">
            <a >${post[index].activities[0].name}</a>
            <p>${post[index].activities[0].des+""}</p>
            <button class="btn post-btn" onclick="displayContentByIndex(${index})" href="#">Read More &nbsp; <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    <hr>`);
    }
}

let aos_delay = 50;
for(let i in typeObj)
{
    document.getElementById('cate-list').insertAdjacentHTML('beforeend', `<li class="list-items" onclick="filterByType('${i}')" data-aos="fade-left" data-aos-delay=${aos_delay += 50}><a >${i}</a><span>${typeObj[i]}</span></li>`);
}
