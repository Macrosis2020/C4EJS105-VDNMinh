// console.log(Object.keys(post[0].activities[0].sub_content));
function displayTextFromArray(arr) {
    arr = Array(arr);
    let resultText = '';
    for (i = 0; i < arr.length; i++) {
        resultText = resultText + `${arr[i]}\n`;
    }
    return resultText;
}
let activeUpdateIndex;
function displayUpdateForm(i) {
    document.getElementById('main').hidden = true;
    document.getElementById('content-box').hidden = false;   
    window.scrollTo(0,0);
    // ___________________________________________________________
    newActivities = [];
    activityIndexCount = 0;
    document.getElementById('content-box').innerHTML =
        `<div id='create-update-form'>
        <div style="margin: 0px 0px;">
            <h1 style="text-align: center; margin-bottom: 5px;" id="form-function">UPDATE POST</h1>
            <!-- class: create-update -->
            <div class='create-update'>
            <div>Note: Please use single line breaks only for Introduction & Activity descriptions</div>

                <h3 style="margin-bottom: 5px;">Name</h3>
                <div><span id="content-name-box" class="textarea" role="textbox" contenteditable>${post[i].name}</span></div>

                <h3 style="margin-bottom: 5px;">Introduction Image Source</h3>
                <div><span id="content-img-box" class="textarea" role="textbox" contenteditable>${post[i].img}</span></div>

                <h3 style="margin-bottom: 5px;">Introduction</h3>
                <!-- các đoạn là phần tử trong mảng nên .insertAdjacentHTML("beforebegin",'') in từng doạn, thêm bêb trong thẻ div-->
                <div>
                    <!-- thêm vào đây -->

                    <!-- Đây là mẫu thêm content -->
                    <span id="intro-content-box" class="textarea" role="textbox" contenteditable>${displayTextFromArray(post[i].content)}</span>
                </div>

                <h3 style="margin-bottom: 5px;">Activities</h3>
                <div id="activity-insert">
                </div>
                </div>
                <button style="margin-top: 5px;" onclick="addActivity()">Add Activity</button>
            </div>
            <br>
            <button id='btn' style="display: block; margin:auto;" onclick="updatePost(${i})">Confirm</button>
        </div>
    </div>`;
    for (j = 0; j < post[i].activities.length; j++) {
        let wipActivity = {
            index: j,
            ssCount: 0,
        }
        document.getElementById('activity-insert').insertAdjacentHTML('beforeend',
            `<br>
        <!-- ______________________________ACTIVITIES_________________________ -->
        <div id="act${j}" style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(50, 6, 245);">
            <!-- NEW ACTIVITY -->
            <h3 style="margin-bottom: 5px; margin-top: 0px">Name</h3>
            <div><span id="act${j}-activity-name" class="textarea" role="textbox" contenteditable>${post[i].activities[j].name}</span></div>
    
            <h3 style="margin-bottom: 5px;">Activity Image Source</h3>
            <div><span id="act${j}-activity-img" class="textarea" role="textbox" contenteditable>${post[i].activities[j].img}</span></div>
    
            <h3 style="margin-bottom: 5px;">Activity Description</h3>
            <div><span id="act${j}-activity-desc" class="textarea" role="textbox" contenteditable>${displayTextFromArray(post[i].activities[j].des)}</span></div>
    
            <h3 style="margin-bottom: 5px;">Activity Sub-sections</h3>
            <div id='act${j}-sub-content-insert'>
            ${getSubcontentText(post[i].activities[j])}     
            </div>
            <h3>Display Title?</h3>
            <select name="" id="act${j}-title-status">
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>
            <br>
            <button style="margin-top: 5px;" onclick="addSubSection(${activityIndexCount})">Add Sub-section</button>`
        )
        function getSubcontentText(actIndex) {
            let wipSubContentHTML = '';
            for (k = 0; k < Object.keys(actIndex.sub_content).length; k++) {
                wipActivity.ssCount++;
                wipSubContentHTML = wipSubContentHTML + `
                <div id="act${j}-ss${k}"
                style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(245, 22, 6);">

                <!-- _______________INSERT SUB_CONTENT_______________ -->

                <h3 style="margin-bottom: 5px; margin-top: 0px;">Sub-section Title</h3>
                <div><span id="act${j}-ss${k}i0" class="textarea" role="textbox" contenteditable>${Object.keys(actIndex.sub_content)[k]}</span>
                </div>

                <h3 style="margin-bottom: 5px;">Sub-section Description</h3>
                <div><span id="act${j}-ss${k}i1" class="textarea" role="textbox" contenteditable>${actIndex.sub_content[Object.keys(actIndex.sub_content)[k]][0]}</span>
                </div>

                <h3 style="margin-bottom: 5px;">Sub-section Image Source</h3>
                <div><span id="act${j}-ss${k}i2" class="textarea" role="textbox" contenteditable>${actIndex.sub_content[Object.keys(actIndex.sub_content)[k]][1]}</span>
                </div>

                <h3 style="margin-bottom: 5px;">Sub-section Image Description</h3>
                <div><span id="act${j}-ss${k}i3" class="textarea" role="textbox" contenteditable>${actIndex.sub_content[Object.keys(actIndex.sub_content)[k]][2]}</span>
                </div>
                </div>
                <br>
                `
            }
            return wipSubContentHTML;
        }
        newActivities.push(wipActivity);
        console.log(newActivities);
    }
    closeAdminPanel();
}
function updatePost(i) {
    post[i].name = document.getElementById('content-name-box').innerText;
    post[i].img = document.getElementById('content-img-box').innerText;
    post[i].content = String(document.getElementById('intro-content-box').innerText).split(/\r?\n/);
    for (j = 0; j < newActivities.length; j++) {
        let wipActivity = {
            name: document.getElementById(`act${j}-activity-name`).innerText,
            img: document.getElementById(`act${j}-activity-img`).innerText,
            des: String(document.getElementById(`act${j}-activity-desc`).innerText).split(/\r?\n/),
            sub_content: {},
        }
        if (document.getElementById(`act${j}-title-status`).value == 'yes') {
            wipActivity['subcontentTitle'] = true;
        } else {
            wipActivity['subcontentTitle'] = false;
        }
        for (k = 0; k < newActivities[j].ssCount; k++) {
            wipActivity.sub_content[`${document.getElementById(`act${j}-ss${k}i0`).textContent}`] = 
            [`${document.getElementById(`act${j}-ss${k}i1`).textContent}`,
            `${document.getElementById(`act${j}-ss${k}i2`).textContent}`,
            `${document.getElementById(`act${j}-ss${k}i3`).textContent}`]
        }
        post[i].activities[j] = wipActivity;
    }
    console.log(post[i]);
    resetPostIndex();
    alert('Post updated successfully!');
}