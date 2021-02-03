let activityIndexCount = 0;
let newActivities = [
    {
        index: 0,
        ssCount: 1,
    },
];
function displayCreateForm() {
    document.getElementById('main').hidden = true;
    document.getElementById('content-box').hidden = false;   
    window.scrollTo(0,0);
    // ___________________________________________________________
    activityIndexCount = 0;
    newActivities = [
        {
            index: 0,
            ssCount: 1,
        },
    ];
    document.getElementById('content-box').innerHTML =
        `<div id='create-update-form'>
        <div style="margin: 0px 0px;">
            <h1 style="text-align: center; margin-bottom: 5px;" id="form-function">CREATE POST</h1>
            <!-- class: create-update -->
            <div class='create-update'>
            <div>Note: Please use single line breaks only for Introduction & Activity descriptions</div>

                <h3 style="margin-bottom: 5px;">Name</h3>
                <div><span id="content-name-box" class="textarea" role="textbox" contenteditable></span></div>

                <h3 style="margin-bottom: 5px;">Introduction Image Source</h3>
                <div><span id="content-img-box" class="textarea" role="textbox" contenteditable></span></div>

                <h3 style="margin-bottom: 5px;">Introduction</h3>
                <!-- các đoạn là phần tử trong mảng nên .insertAdjacentHTML("beforebegin",'') in từng doạn, thêm bêb trong thẻ div-->
                <div>
                    <!-- thêm vào đây -->

                    <!-- Đây là mẫu thêm content -->
                    <span id="intro-content-box" class="textarea" role="textbox" contenteditable></span>
                </div>

                <h3 style="margin-bottom: 5px;">Activities</h3>
                <div id="activity-insert">
                <br>
                <!-- ______________________________ACTIVITIES_________________________ -->
                <div id="act0" style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(50, 6, 245);">
                    <!-- NEW ACTIVITY -->
                    <h3 style="margin-bottom: 5px; margin-top: 0px">Name</h3>
                    <div><span id="act0-activity-name" class="textarea" role="textbox" contenteditable></span></div>

                    <h3 style="margin-bottom: 5px;">Activity Image Source</h3>
                    <div><span id="act0-activity-img" class="textarea" role="textbox" contenteditable></span></div>

                    <h3 style="margin-bottom: 5px;">Activity Description</h3>
                    <div><span id="act0-activity-desc" class="textarea" role="textbox" contenteditable></span></div>

                    <h3 style="margin-bottom: 5px;">Activity Sub-sections</h3>
                    <div id='act0-sub-content-insert'>
                        <!-- ______________________________SUB_CONTENT_________________________ -->
                        <div id="act0-ss0"
                            style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(245, 22, 6);">

                            <!-- _______________INSERT SUB_CONTENT_______________ -->

                            <h3 style="margin-bottom: 5px; margin-top: 0px;">Sub-section Title</h3>
                            <div><span id="act0-ss0i0" class="textarea" role="textbox" contenteditable></span>
                            </div>

                            <h3 style="margin-bottom: 5px;">Sub-section Description</h3>
                            <div><span id="act0-ss0i1" class="textarea" role="textbox" contenteditable></span>
                            </div>

                            <h3 style="margin-bottom: 5px;">Sub-section Image Source</h3>
                            <div><span id="act0-ss0i2" class="textarea" role="textbox" contenteditable></span>
                            </div>

                            <h3 style="margin-bottom: 5px;">Sub-section Image Description</h3>
                            <div><span id="act0-ss0i3" class="textarea" role="textbox" contenteditable></span>
                            </div>
                        </div>
                    </div>
                    <h3>Display Title:</h3>
                    <select name="" id="act0-title-status">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <br>
                    <button style="margin-top: 5px;" onclick="addSubSection(0)">Add Sub-section</button>
                </div>
                </div>
                <button style="margin-top: 5px;" onclick="addActivity()">Add Activity</button>
            </div>
            <br>
            <button id='btn' style="display: block; margin:auto;" onclick="createPost()">Confirm</button>
        </div>
    </div>`;
    closeAdminPanel()
}
function addActivity() {
    activityIndexCount++;
    let newActivity = {
        index: activityIndexCount,
        ssCount: 1,
    }
    newActivities.push(newActivity);
    document.getElementById('activity-insert').insertAdjacentHTML('beforeend',
        `
    <br>
    <!-- ______________________________ACTIVITIES_________________________ -->
    <div id="act${activityIndexCount}" style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(50, 6, 245);">
        <!-- NEW ACTIVITY -->
        <h3 style="margin-bottom: 5px; margin-top: 0px">Name</h3>
        <div><span id="act${activityIndexCount}-activity-name" class="textarea" role="textbox" contenteditable></span></div>

        <h3 style="margin-bottom: 5px;">Activity Image Source</h3>
        <div><span id="act${activityIndexCount}-activity-img" class="textarea" role="textbox" contenteditable></span></div>

        <h3 style="margin-bottom: 5px;">Activity Description</h3>
        <div><span id="act${activityIndexCount}-activity-desc" class="textarea" role="textbox" contenteditable></span></div>

        <h3 style="margin-bottom: 5px;">Activity Sub-sections</h3>
        <div id='act${activityIndexCount}-sub-content-insert'>
            <!-- ______________________________SUB_CONTENT_________________________ -->
            <div id="act${activityIndexCount}-ss0"
                style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(245, 22, 6);">

                <!-- _______________INSERT SUB_CONTENT_______________ -->

                <h3 style="margin-bottom: 5px; margin-top: 0px;">Sub-section Title</h3>
                <div><span id="act${activityIndexCount}-ss0i0" class="textarea" role="textbox" contenteditable></span>
                </div>

                <h3 style="margin-bottom: 5px;">Sub-section Description</h3>
                <div><span id="act${activityIndexCount}-ss0i1" class="textarea" role="textbox" contenteditable></span>
                </div>

                <h3 style="margin-bottom: 5px;">Sub-section Image Source</h3>
                <div><span id="act${activityIndexCount}-ss0i2" class="textarea" role="textbox" contenteditable></span>
                </div>

                <h3 style="margin-bottom: 5px;">Sub-section Image Description</h3>
                <div><span id="act${activityIndexCount}-ss0i3" class="textarea" role="textbox" contenteditable></span>
                </div>
            </div>        
        </div>
        <h3>Display Title?</h3>
        <select name="" id="act${activityIndexCount}-title-status">
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
        </select>
        <br>
        <button style="margin-top: 5px;" onclick="addSubSection(${activityIndexCount})">Add Sub-section</button>
    `)
}
function addSubSection(activityIndex) {
    newActivities[activityIndex].ssCount++;
    document.getElementById(`act${newActivities[activityIndex].index}-sub-content-insert`).insertAdjacentHTML('beforeend', `
    <br>
    <div id="act${newActivities[activityIndex].index}-ss${newActivities[activityIndex].ssCount - 1}"
    style="margin: 0% 2% 0; padding: 5px; border: 1px solid rgb(245, 22, 6);">

    <!-- _______________INSERT SUB_CONTENT_______________ -->

    <h3 style="margin-bottom: 5px; margin-top: 0px;">Sub-section Title</h3>
    <div><span id="act${newActivities[activityIndex].index}-ss${newActivities[activityIndex].ssCount - 1}i0" class="textarea" role="textbox" contenteditable></span>
    </div>

    <h3 style="margin-bottom: 5px;">Sub-section Description</h3>
    <div><span id="act${newActivities[activityIndex].index}-ss${newActivities[activityIndex].ssCount - 1}i1" class="textarea" role="textbox" contenteditable></span>
    </div>

    <h3 style="margin-bottom: 5px;">Sub-section Image Source</h3>
    <div><span id="act${newActivities[activityIndex].index}-ss${newActivities[activityIndex].ssCount - 1}i2" class="textarea" role="textbox" contenteditable></span>
    </div>

    <h3 style="margin-bottom: 5px;">Sub-section Image Description</h3>
    <div><span id="act${newActivities[activityIndex].index}-ss${newActivities[activityIndex].ssCount - 1}i3" class="textarea" role="textbox" contenteditable></span>
    </div>
    <br>
    </div>
    `)
};
function createPost() {
    let newPost = {
        id: post.length + 1,
        name: document.getElementById('content-name-box').innerText,
        img: document.getElementById('content-img-box').innerText,
        content: String(document.getElementById('intro-content-box').innerText).split(/\r?\n/),
    };
    newPost.activities = [];
    {
        for (i = 0; i <= activityIndexCount; i++) {
            let wipActivity = {
                name: document.getElementById(`act${i}-activity-name`).innerText,
                img: document.getElementById(`act${i}-activity-img`).innerText,
                des: String(document.getElementById(`act${i}-activity-desc`).innerText).split(/\r?\n/),
                sub_content: {},
            }
            for (j = 0; j < newActivities[i].ssCount; j++) {
                wipActivity.sub_content[`${document.getElementById(`act${i}-ss${j}i0`).textContent}`] = 
                [`${document.getElementById(`act${i}-ss${j}i1`).textContent}`,
                `${document.getElementById(`act${i}-ss${j}i2`).textContent}`,
                `${document.getElementById(`act${i}-ss${j}i3`).textContent}`]
            }
            if (document.getElementById(`act${i}-title-status`).value == 'yes') {
                wipActivity['subcontentTitle'] = true;
            } else {
                wipActivity['subcontentTitle'] = false;
            }
            newPost.activities.push(wipActivity);
        }
    }
    activityIndexCount = 0;
    newActivities = [
        {
            index: 0,
            ssCount: 1,
        },
    ];
    post.push(newPost);
    console.log(newPost);
    resetPostIndex();
    alert('New post created successfully!');
}
