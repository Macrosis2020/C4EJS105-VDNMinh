// Về cách nhập data:
// Array Event Prompt: Chứa tiêu đề event, tách ra thành từng đoạn có độ dài hợp lý và nhét vào thành từng string nhỏ.
// choice 1-4: Tất cả những phần viết hoa bên trong '[]' từ google docs là text bên trong choice, vứt vào choiceText. Nếu cuối 1 event liệt kê ko tới 4 choice, 
// thì những choice bỏ trống làm tương tự như choice 2-4 phía dưới. Tất cả những phần ngoài ngoặc nhọn (Trừ (Time +X)) tạm thời bỏ qua.
// Đầu mỗi event có mục Priority:. Điền chỉ số tương ứng vào mục priority trong object.
// Sau mỗi choice có thể có phần (Time +X). Điền X vào mục timeProgress của choice đó
// Cách đặt tên event object: "s2e1" = "scenario 2 event 1". Lúc đến phần docs có ghi <Branch>, nghĩa là chia nhánh, 
// Hôm nay, tạm thời chỉ cần điền tất cả các event từ scenario 2 vào database.

var eventDatabase = {
    mainEvents: {
        globalEvents: [

        ],
        scenario1: [],
        scenario2: [
            s2e1 = {
                priority: 2,
                eventPrompt: ["Just when you prepare to leave, you let out an agonizing scream. Suddenly, as if a thousand waves are crashing down on your inner organs, a raging ache like you’ve never experienced courses through your entire body.",
                "When you regain your consciousness, your sights are greeted with a bright, blue glow from your right palm. It’s a peculiar symbol. Somehow, it feels familiar, but you can’t quite place your mind on where you’ve seen it.",
                "You try your best to shake off the pain and walk outside, while the concern feeling lingers."],
                choice1: {
                    clickable: true,
                    timeProgress: 0,
                    choiceText: "PROCEED",
                },
                choice2: {
                    //
                    clickable: false,
                    choiceText: "-",
                },
                choice3: {
                    clickable: false,
                    choiceText: "-",
                },
                choice4: {
                    clickable: false,
                    choiceText: "-",
                },
            },
            s2e2 = {

            }
        ]
    },
    randomEvents: {
        villageDay: [
            event1 = {
                eventPrompt: ["placeholder text"],
                choice1: {
                    clickable: true,
                    timeProgress: 0,
                    choiceText: "PROCEED",
                },
                choice2: {
                    clickable: false,
                    choiceText: "-",
                },
                choice3: {
                    clickable: false,
                    choiceText: "-",
                },
                choice4: {
                    clickable: false,
                    choiceText: "-",
                },
            },
        ],
        villageNight: [],
        seashoresDay: [],
        seashoresNight: [],
        forestDay: [],
        forestNight: [],
    }
};
const activeEvents = [];