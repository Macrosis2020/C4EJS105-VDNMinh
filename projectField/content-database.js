function resetPostIndex() {
    for (i = 0; i < post.length; i++) {
        post[i].index = i + 1;
    }
}
post = [
    {
        id :1,
        //  ten tieu de
        name: 'Hua Hin',
        // tieu de anh
        img: 'https://static.asiawebdirect.com/m/bangkok/portals/huahin-bangkok-com/homepage/cha-am/venezia/allParagraphs/BucketComponent/ListingContainer/202/BucketList/03/image1/the-venezia-2.jpg',
        // noi dung bai viet chia thanh cac doan la cac ptu trong mang
        content: ['Cách thủ đô Bangkok khoảng ba giờ đi xe, Hua Hin là điểm đến yêu thích mới nhất của tín đồ du lịch. Không quá đông đúc hay sôi động, điều mà người ta thường nghĩ đến khi  nói về du lịch Thái Lan, Hua Hin là một thành phố khá “hiền lành”.','Này là bãi biển với cát trắng mịn, nắng vàng ấm áp và nước trong vắt! Này là nhà ga xe lửa với lối kiến trúc để lại từ thập niên 60 của thế kỷ trước. Tất cả làm nên một Hua Hin mỹ miều, mang theo phong vị xen lẫn hiện đại và cổ điển. Chắc chắn rằng bạn và “nửa kia” sẽ có được nhiều kỷ niệm đẹp cùng những bức ảnh đậm chất “nghệ” khi đến nơi đây.'],
        // cac hoat dong
        activities:[
            {
                name :'Đi chợ đêm Hua Hin',
                img :'https://divui.com/blog/wp-content/uploads/2016/12/chat-chai.jpg',
                des : ['Hua Hin là thiên đường mua sắm xinh đẹp ở Thái Lan. Ấn tượng ở các khu chợ ở Hua Hin là phong cách vintage, cổ kính và tinh tế. Cùng khám phá nét đẹp quyến rũ của 5 khu chợ đêm Hua Hin nổi tiếng sau đây!'],
                sub_content :{ // nội dung như linh này: https://halotravel.vn/cho-dem-hua-hin/
                    //___________PHẢI TUÂN THỦ THEO MẪU DƯỚI:
                    // tieu de: ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Chợ Cicada':['Chợ Cicada là khu chợ đêm Hua Hin có không gian đẹp nhất. Với phong cách nghệ thuật độc đáo, khu chợ được chia làm 4 khu khác nhau. Chợ buôn bán các mặt hàng truyền thống là chính, bao gồm tranh vẽ, tượng và đồ điêu khắc, đồ trang trí nhà cửa,… Du khách tham quan chợ có thể thưởng thức các buổi biểu diễn âm nhạc miễn phí vào các ngày cuối tuần. Ở gần biển nên chợ Cicada cũng là địa điểm lý tưởng để các cặp đôi tảo bộ đầy lãng mạn.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-01.jpg', 'Cicada là khu chợ truyền thống ở Hua Hin'],
                    'Chợ Chatchai':['Chợ Chatchai nổi tiếng với những món ăn đường phố thơm ngon. Bạn sẽ chìm đắm vào hương vị và màu sắc đa dạng của các món ngon vỉa hè ở Thái Lan. Chợ đêm Hua Hin này còn là nơi bạn có thể thoả thích mua sắm từ trang sức, phụ kiện, đồ điêu khắc, cho tới quần áo, quà lưu niệm,…', 'https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-02.jpg', 'Chợ Chatchai là địa điểm được khách ngoại quốc yêu thích'],
                    'Chợ Plearnwan':['Chợ Plearnwan được mệnh danh là một bảo tàng sống. Bạn sẽ lạc bước vào không gian đời sống của người dân ở Hua Hin vào những năm 1950. Những tòa nhà 2 tầng cổ kính, những phim trường cũ kĩ và các nhà hát mang đậm dấu ấn thập niên 70. Bạn có thể tha hồ sống ảo ở khu chợ này đấy.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-03.jpg', 'Plearnwan có nhiều góc sống ảo cực chất'],
                    'Chợ Cha-Am':['Đây là khu chợ đêm Hua Hin được giới trẻ yêu thích bởi các dãy hàng hoá cực xinh. Những ngày cuối tuần chợ thường tấp nập nên bạn cần cẩn thận chú ý đồ dùng cá nhân mình mang theo nhé. Chợ Cha-Am không chỉ có nhiều món hàng độc đáo mà còn là lãnh địa của nhiều món ăn ngon và giá siêu rẻ.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-04.jpg', 'Cha Am với những gian hàng xinh xắn'],
                    'Chợ đêm Grand':['Chợ Grand là khu chợ lớn nhất ở thành phố này. Với không gian nghệ thuật rộng lớn và các mặt hàng đa dạng, chợ Hua Hin Grand là nơi mà du khách có thể tìm mua bất kỳ thứ gì ở Thái Lan. Ở đây còn có những quán bar sôi động, thích hợp cho các bạn trẻ tìm địa điểm vui chơi vào ban đêm.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-05.jpg', 'Ẩm thực đường phố đặc sắc ở Hua Hin Grand'],
                },
                subcontentTitle: true,
            },
            {
                name :'Lặn biển khám phá Koh Talu',
                img :'https://www.tourthailan.net.vn/images/diadiem/diadiem-2/Koh-Talu-1.jpg',
                des :['Khi du lịch đến Hua Hin, một trong những hoạt động bạn không nên bỏ lỡ là tham quan đảo Koh Talu và tham gia lặn biển ở đảo này. Hãy thử trải nghiệm một thiên đường ngay ở dưới hạ giới với cảnh sắc thiên nhiên từ trên cạn đến dưới nước ở Koh Talu. Nếu bạn đang ở thị trấn Bangsaphan, chỉ mất 30 phút đi thuyền, bạn đã đặt chân đến được Koh Talu.', 'Koh Talu có những bãi biển với hàng cọ rì rào và những rạn san hô đẹp tuyệt. Ngoài thế giới đại dương phong phú, sự yên tĩnh tuyệt đối của nơi đây cũng là điểm thu hút du khách khi đến đảo. Với sự riêng tư của nó, bạn sẽ trải nghiệm được nhiều điều thú vị bất ngờ. Thưởng thức bữa trưa ngay tại đảo sẽ cho bạn một cảm giác khác biệt chưa từng có khi ăn một bữa ăn trên một vùng đất yên tĩnh hiền hòa này.', 'Và, khi bạn đến Koh Talu, ngoài việc được tự do khám phá đảo và tham gia các hoạt động dưới nước, hãy dành thời gian cho việc lặn biển. Lặn biển ở Koh Talu là một hoạt động thú vị bạn đừng nên bỏ qua khi đến đây. Đây là một nơi lý tưởng cho việc lặn biển, bạn sẽ khám phá được thế giới đại dương bao la và đa dạng ở Koh Talu. Và với những ai mới tập tành với môn lặn biển này, hãy yên tâm bởi bạn sẽ được lặn ở những vùng nước cạn, ở đó, bạn cũng sẽ chiêm ngưỡng được hệ sinh thái đa dạng ở biển trong xanh này.'],
                sub_content :{},
            },
            
        ],
        type: ['Thailand'],
    },
    {
        id :2,
        name :'Làng Ihwa Mural',
        img :'https://thongtinhanquoc.com/wp-content/uploads/2019/08/tthq-lang-ihwa03.jpg',
        content :['Toạ lạc tại quận Hyehwa, Seoul, những bậc thang được điểm tô như một bức tranh hoa khổng lồ của làng Ihwa Mural là hình ảnh quá đỗi quen thuộc đối với “mọt” phim Hàn Quốc. Không chỉ sở hữu vẻ đẹp nên thơ, nhịp sống xung quanh làng Ihwa Mural còn tương tự như vừa bước ra từ phim điện ảnh.','Buổi sáng, bạn có thể thư thả đọc sách ở một quán café radio cũ kỹ, viếng thăm bảo tàng nghệ thuật hay dạo quanh công viên Naksan. Khi đêm về, cùng nhau ăn thịt nướng, topokki, bánh cá… ở các cửa hàng gần ga Hyehwa hay đắm chìm trong nhạc Jazz đều là những ý tưởng không tồi.'],
        activities :[
            {
                name :'Khám phá Seoul trong 1 ngày',
                img :'https://www.tugo.com.vn/wp-content/uploads/han-quoc-diem-den-yeu-thich-bac-nhat-cua-du-khach-trong-vai-nam-tro-lai-day.png',
                des :['Seoul – thành phố năng động, hiện đại bậc nhất thế giới với nhịp sống nhộn nhịp nhưng đâu đó vẫn lưu giữ vẹn nguyên những nét tinh túy của nền văn hóa truyền thống vô cùng đặc sắc. Cũng bởi nguyên do đó nên nhiều du khách đã lựa chọn Seoul làm điểm đến lý tưởng cho các hành trình khám phá của mình. '],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Tham quan Bảo tàng Nghệ thuật Seoul': ['Bảo tàng nghệ thuật Seoul là bảo tàng hiện đại nằm trong một tòa nhà rộng lớn có kiến trúc đẹp mắt. Trong khi các triển lãm đặc biệt tại đây có thể khá đông đúc và có thu phí, thì triển lãm thường trực lại hoàn toàn miễn phí và thường không được nhiều người chú ý tới. Tham quan bảo tàng, bạn còn được hiểu rõ hơn về cuộc đời và những thành tựu to lớn của nghệ sĩ  Chun Kyung-ja nổi tiếng đóng góp cho nền nghệ thuật của đất nước Hàn Quốc.','https://www.tugo.com.vn/wp-content/uploads/bao-tang-nghe-thuat-seoul.png','Bảo tàng Nghệ thuật Seoul'],
                     'Khám phá Công viên Văn hóa Tank Oil': ['Nếu bạn còn băn khoăn không biết đi du lịch Hàn Quốc cần bao nhiêu tiền hay muốn tiết kiệm chi phí cho chuyến đi sắp tới thì công viên văn hóa Tank Oil sẽ là lựa chọn không thể nào phù hợp hơn. Nơi đây thường xuyên tổ chức các buổi hòa nhạc, triển lãm, diễn thuyết hoàn toàn miễn phí. Ngoài ra, bạn cũng có thể lưu lại những bức ảnh “cực chất” bởi nơi đây còn sở hữu nhiều cung đường uốn lượn đẹp mắt vô cùng','https://www.tugo.com.vn/wp-content/uploads/cong-vien-van-hoa-tank-oil.png','Công viên Văn hóa Tank Oil'],
                     'Tản bộ qua làng Bukchon Hanok':['Hàng trăm ngôi nhà truyền thống của Hàn Quốc (Hanok) tạo nên một ngôi làng Bukchon Hanok, một khu phố phảng phất đậm nét văn hóa của triều đại thời xưa. Chắc chắn, đây sẽ là một nơi tham quan hấp dẫn dành cho bạn khi đi du lịch Hàn Quốc trong dịp hè này.','https://www.tugo.com.vn/wp-content/uploads/lang-bukchon-hanok.png','Làng Bukchon Hanok'],
                     'Chìm đắm trong thế giới sách tại Thư viện Văn học Cheongun':['Thư viện văn học Cheongun chắc chắn là một trong những bảo tàng đẹp nhất ở Hàn Quốc. Không chỉ có nhiều các loại sách bổ ích mà nơi đây còn có một không gian “xịn sò”, đẹp mắt, rộng rãi và thoáng mát để vừa đọc sách, vừa tận hưởng một không gian đầy yên bình.','https://www.tugo.com.vn/wp-content/uploads/thu-vien-van-hoc-cheongun.png','Thư viện Văn học Cheongun'],
                     'Tham quan Bảo tàng Quốc gia Hàn Quốc':['Hơn 15000 đồ tạo tác trải dài từ tiền sử đến hiện tại được trưng bày tại Bảo tàng Quốc gia Hàn Quốc sẽ giúp bạn có cái nhìn chân thực hơn về đời sống cũng như nền văn hóa đặc sắc chạy dài xuyên suốt từ xưa đến nay của nền văn hóa và con người tại đất nước Hàn Quốc.', 'https://www.tugo.com.vn/wp-content/uploads/bao-tang-quoc-gia-han-quoc.png', 'Bảo tàng Quốc gia Hàn Quốc'],
                },
                subcontentTitle: true,
            },
            {
                name: 'Seoul Sky ở Lotte World',
                img: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ae4biwajhwvfynznhngy/V%C3%A9%20V%C3%A0o%20C%E1%BB%ADa%20Seoul%20Sky%20%E1%BB%9E%20Th%C3%A1p%20Lotte%20World.jpg',
                des: ['Khám phá những điều độc đáo về Lotte World Tower ở xứ sở kim chi. Nếu Landmak 81 là tòa nhà cao nhất ở Việt Nam với 81 tầng thì Lotte World Tower cũng là tòa nhà cao nhất Hàn Quốc với 123 tầng. Tòa nhà này cũng được xem là một trong những biểu tượng của Hàn Quốc. Gần như tất cả khách du lịch Hàn Quốc đều không thể bỏ qua tòa tháp này.'],
                sub_content:{
                    'Những điều đặc biệt của Lotte Tower ':['Công trình được lấy cảm hứng từ nét văn hóa truyền thống xen lẫn hiện đại của Hàn Quốc. Hình dáng của Lotte World Tower là sự hòa quyện hài hòa giữa chiếc bình gốm và chiếc bút lông thời xưa của đất nước Hàn Quốc. Đây là hai hiện vật làm nên chủ đề và thiết kế cho tòa nhà với đường cong đơn giản, mềm mại đại diện cho vẻ đẹp truyền thống lâu đời của Hàn Quốc. Phía đỉnh tháp có hình dáng hai đường chữ V soi ánh sáng hướng về sông Hàn, Tháp Namsan và khu trung tâm cổ của Seoul. Đây được xem là một ý tưởng rất đặc biệt và có một không hai của Lotte World Tower.', 'https://www.zila.com.vn/wp-content/uploads/2020/06/Lotte-Word-Tower-e1601342134222.jpg','Lotte Tower Hàn Quốc'],
                },
                subcontentTitle: true,
            }   
        ],
        type :['South Korea'],
    },
    {

        id :3,
        name :'Hồ Kawaguchi',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/ho-kawakuchi-nhat-ban.webp',
        content :['Không phải ngẫu nhiên mà nhiều du khách chọn hồ Kawaguchi để tỏ tình hay chụp ảnh cưới. Thuộc “Phú Sĩ Ngũ Hồ”, Kawaguchi làm say lòng khách phương xa bởi vẻ đẹp tựa “tiên cảnh nơi hạ giới”. Mặt hồ phẳng lặng, nước trong veo, nằm yên bình giữa rừng cây xanh bát ngát.  Xung quanh hồ đặt nhiều băng ghế đá; du khách có thể ngồi lại nghỉ chân, tán gẫu hay đơn giản là chiêm nghiệm vẻ đẹp hoàn hảo của thiên nhiên. Nếu may mắn đến hồ Kawaguchi vào ngày trời trong, bạn còn được nhìn thấy toàn cảnh núi Phú Sĩ vừa hùng dũng vừa thơ mộng.', 'Có rất nhiều khách sạn, resort, nhà hàng và quán café đẹp ở gần hồ Kawaguchi. Bạn có thể lưu lại đây vài ngày, để tham gia các hoạt động thú vị như đạp xe quanh hồ, trượt ván nước, ngắm hoa hoặc chèo thuyền.'],
        activities :[
            {
                name :'Vui chơi ở công viên Fuji Q',
                img :'https://image.thanhnien.vn/768/uploaded/ngocthanh/2019_07_15/image001_lmtz.jpg',
                des :['Công viên Fuji-Q Highland là một trong những công viên giải trí nổi tiếng nhất Nhật Bản. Nếu bạn là một người ưa thích sự mạo hiểm thì chắc chắn không thể bỏ qua địa điểm này.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Tàu lượn Fujiyama (130km/giờ)': ['Chuyến tàu được xem là Vua của tàu lượn siêu tốc và là tàu lượn siêu tốc cao nhất trong công viên. Trên thế giới, Fujiyama là chiếc tàu lượn cao thứ 8, dài thứ 5 và nhanh thứ 10.Tàu lượn cao gần 80 mét mang lại cho bạn một cái nhìn tuyệt đẹp về núi Phú Sĩ. Tàu lượn có tốc độ hơn 130km/giờ sẽ khiến những người thích cảm giác mạnh mê ly. Đây mới chính là điểm thu hút và thú vị của chiếc tàu lượn siêu tốc này.','https://image.thanhnien.vn/660/uploaded/ngocthanh/2019_07_15/image003_kime.jpg','Fujiyama - vua tàu lượn Nhật Bản'],
                     'Tàu lượn Dodonpa (đạt tốc độ 172 km/giờ trong vài giây)':['Chiếc tàu lượn này có khả năng tăng tốc cao nhất thế giới và lúc khởi động sẽ đưa bạn đi từ 0 đến 172 km/giờ chỉ trong vài giây. Dodonpa nổi tiếng với tốc độ khủng khiếp, độ cao hơn 50m. Bạn sẽ có cảm giác lên và rơi xuống nhanh như được phóng lên không trung.','https://image.thanhnien.vn/660/uploaded/ngocthanh/2019_07_15/image005_eznj.jpg','Trải nghiệm cảm giác rơi tự do từ độ cao hơn 50 mét cùng Dodonpa'],
                     'Tàu lượn Takabisha với đường trượt thẳng đứng':['Bạn có thể hơi bối rối khi lần đầu tiên nhìn thấy chiếc tàu lượn này. Đây là chiếc tàu mới nhất trong bốn chiếc tàu lượn siêu tốc ở Fuji-Q. được thiết kế với đường trượt thẳng đứng có góc 121 độ giúp cho du khách có cảm giác như đang bay trong không gian. Ngoài ra, nó còn có 7 vòng lặp và xoắn suốt quãng đường đi.','https://image.thanhnien.vn/660/uploaded/ngocthanh/2019_07_15/image007_aoyb.jpg','Takabisha thách thức mọi tín đồ đam mê cảm giác mạnh'],
                },
                subcontentTitle: true,
            },
            {
                name :'Thăm núi Phú Sĩ, hồ Suwa & Takayama',
                img :'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/plxajvd3isp7xdniuapo.webp',
                des :['Di qua những khu trung tâm du lịch nhộn nhịp của Nhật và đến vài nơi yên bình nhất với chuyến đi 1 chiều này. Chuyến đi bạn được sắp xếp đến núi Fuji, hồ Suwa, đồi Shinshu, và Takayama trong 1 ngày. Với 2 chuyến đưa đón có ở Tokyo, chuyến đi này đảm bảo di chuyển nhanh chóng và dễ dàng đến nơi. Bắt đầu một ngày của bạn với chuyến đến trạm số 5 line Fuji Subaru, phát triển nhất trong tất cả 4 trạm Fuji thứ 5. Chuẩn bị máy ảnh cho cảnh đẹp ngoạn mục của 5 hồ Fuji đang chờ đón bạn. Kế tiếp, đến nhà hàng gần Fuji-Q Highland cho bữa trưa. Nhà hàng có thể phục vụ món chay, nên để chắc chắn cho thực đơn mong muốn của bạn hãy báo cho biết khi thanh toán nhé. Sau bữa ăn no nê, đến đài quan sát cho cảnh trên cao của hồ Suwa và đồi Shinshu. Mãn nhãn với chuyến dừng chân cuối cùng của bạn - Takayama, một thành phố được bao quanh bởi núi và cây xanh um tùm. Hòa mình vào văn hóa nơi này khi bạn đi dọc những con phố cổ, nơi kết thúc chuyến đi của bạn.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Mặt trời mọc':['Những người tham gia leo núi Phú Sĩ hẳn đều mong muốn được nhìn thấy cảnh mặt trời mọc từ đỉnh ngọn núi này. Cảnh những tia sáng mặt trời dần dần ló rạng sau những đám mây và bầu trời đêm quả là một khung cảnh tuyệt đẹp.','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/827/original/pixta_16625807_M_s.jpg?1556265232&d=750x750',''],
                     'Kim cương Phú Sĩ':['Thời điểm mặt trời mọc và lặn, mặt trời dường như đậu ngay trên đỉnh núi Phú Sĩ, nhìn từ xa trông giống như một viên kiêm cương đang tỏa sáng lấp lánh trên đỉnh núi, hiện tượng này được gọi là "Kim cương Phú Sĩ". Đối với người Nhật đây là một cảnh tượng vô cùng đắt giá, vì không phải lúc nào nó cũng xảy ra, nó phụ thuộc vào rất nhiều yếu tố như vị trí đứng của bạn là ở hướng đông hay hướng tây, phụ thuộc vào thời gian và điều kiện thời tiết lúc đó.','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/828/original/pixta_43070826_M_s.jpg?1556265254&d=750x750',''],
                     'Phú Sĩ đỏ':['Đúng như tên gọi, bạn sẽ nhìn thấy ngọn núi có màu đỏ do ánh nắng chiếu vào lúc hoàng hôn hoặc bình mình trong suốt mùa leo núi, khi mà ngọn núi không bị bao phủ bởi tuyết. Ngoài ra, vào mùa đông khi tuyết bao phủ ngọn núi, núi Phú Sĩ trông như có màu đỏ đậm','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/829/original/pixta_46835072_M_s.jpg?1556265269&d=750x750',''],
                },
                subcontentTitle: true,
            },
           
        ],
        type :['Japan'],
    },
    {

        id : 4,
        name :'Hồ Nhật Nguyệt',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/ho-nhat-nguyet-dai-loan.webp',
        content :['Hồ Nhật Nguyệt (hay Nhật Nguyệt Đàm) nằm ở trung tâm Đài Loan, bao quanh bởi các ngọn núi cao. Thời điểm đến Hồ Nhật Nguyệt đẹp nhất là vào mùa xuân và mùa thu, khi bạn không cần lo lắng về tình trạng quá tải du khách và thong thả chiêm ngưỡng thiên nhiên tuyệt mỹ nơi đây.','Được CNN Travel chọn là một trong những hành trình đẹp nhất thế giới, đường đạp xe quanh hồ Nhật Nguyệt mang đến cho du khách trải nghiệm mới lạ, với khung cảnh hoà hợp giữa núi rừng hùng vĩ và hồ nước trong xanh. Sau khi ngắm cảnh thoả thích, bạn có thể khám phá nét văn hoá độc đáo ở quền Wenwu, nông trường Thanh Cảnh hay làng văn hoá Cửu Tộc.'],
        activities :[
            {
                name :'Thăm thú hồ Meihua',
                img :'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/128def06-Meihua-Lake-Tour/Chuy%E1%BA%BFn%20du%20l%E1%BB%8Bch%20h%E1%BB%93%20Meihua.jpg',
                des :['Dành thời gian nhàn nhã thăm Hồ Meihua để tận hưởng quang cảnh tự nhiên tuyệt đẹp. Bạn sẽ được chào đón với cây cỏ tươi tốt và không khí trong lành, nơi bạn có thể dành thời gian đi bộ, đi xe đạp và đi du thuyền trên hồ. Điểm nổi bật khác là Đền Sanqing - nằm trên sườn phía nam của hồ Meihua, kiến trúc của ngôi đền giống như các tòa án kiểu triều đình truyền thống và rất đáng xem. Hoàn thành buổi chiều của bạn với một bữa tiệc trà ngon miệng tại quán cà phê Salex khi bạn ngắm nhìn những khung cảnh hồ tuyệt đẹp.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'a':['‎','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/7b4311f2-Meihua-Lake-Tour/Chuy%E1%BA%BFndul%E1%BB%8Bchh%E1%BB%93Meihua.webp','Đạp xe, đi bộ và đi thuyền trong chuyến đi nửa ngày'],
                    'b':['‎','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/b9fbfca1-Meihua-Lake-Tour/Chuy%E1%BA%BFndul%E1%BB%8Bchh%E1%BB%93Meihua.webp','Tham quan các thắng cảnh địa phương và ngất ngây trước kiến trúc của Đền Sanqing'],
                },
                subcontentTitle: false,
            },
            {
                name :'Ngắm khinh khí cầu ở Đài Đông',
                img :'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fbd6ba4e-Taitung-Hot-Air-Balloon-Tour---Klook.webp',
                des :['Bay cao trên khinh khí cầu trải nghiệm không giống bất cứ ai. Tận hưởng khung cảnh tuyệt vời của những dòng sông và khe thung lũng xung quanh Đài Đông, tận hưởng nét đẹp của thiên nhiên qua nhiều góc nhìn khác nhau khi đứng giữa không. Khi bạn lướt nhẹ trên bầu trời và bay xuyên qua những đám mây tự hỏi khung cảnh xung quanh bên dưới bạn thế nào. Sau đó, đáp xuống và uống mừng với ly sâm banh, và nhận chứng nhận cho chuyến đi đáng nhớ cũng như trải nghiệm tuyệt vời đã đến với bạn.'],
                sub_content: {},
                subcontentTitle: false,
            },
        ],
        type :['Taiwan']
    },
    {
    id :5,
        name :'Yamagata',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-Yamagata-nhat-ban.webp',
        content :['Yamagata nằm ở Tohoku, được mệnh danh là vùng đất của suối nước nóng (Osen) và hoa anh đào. Có lẽ chỉ cần nghe đến biệt danh này, bạn cũng phần nào mường tượng được vẻ đẹp duy mỹ và thanh bình nơi đây. Đặc sản của Yamagata, bên cạnh hoa hồng, tỳ linh và cá hồi thì còn có những ngôi nhà gỗ nằm san sát nhau, mang theo sắc màu đặc trưng của một Nhật Bản cổ xưa.'],
        activities :[
            {
                name :'Sagano – Chuyến tàu lãng mạn',
                img :'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/3916ca4c-/Chuy%E1%BA%BFnT%C3%A0uSaganoL%C3%A3ngM%E1%BA%A1n(Nh%E1%BA%ADnv%C3%A9%E1%BB%9FTrungT%C3%A2mOsaka).webp',
                des :['Nhận trước vé tàu Sagano của bạn 1 cách tiện lợi ở trung tâm Osaka và chuẩn bị lên chuyến tàu lãng mạn ở gần Kyoto này từ Ga Kameoka. Vé của bạn sẽ có giá trị cho chuyến đi một chiều từ ga Kameoka đến ga Saga, (bạn cũng có thể đặt chuyến về riêng) đây là một trong những tuyến đường đẹp nhất ở Nhật Bản. Trong chuyến đi 25 phút này, bạn sẽ thấy một thiên đường phủ đầy tuyết vào mùa đông, cảnh vật bị che khuất bởi những cây phong màu đỏ thẫm vào mùa thu, quang cảnh xanh mướt mượt vào mùa hè, và tất nhiên, hoa anh đào nở rộ vào mùa xuân.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Công viên Nara':['nơi đây sở hữu và bảo tồn một quần thể kiến trúc cổ độc đáo được UNESCO công nhận di sản Thế Giới: Công viên Nara – với đàn hươu sao hơn 1000 con đi tự do trong công viên (theo Thần Đạo của Nhật Bản thì hươu được xem là sứ giả của thần linh).','https://dulichnhatban.net/static/uploads/images/tynimce/2018/06/20/Saigontourist_Nhat-Ban_Cong-vien-Nara1.jpg', 'chu hou vang ngo ngac'],
                     'Chùa Todaiji (Đông Đại Tự)':['đây là ngôi chùa bằng gỗ lớn nhất Thế Giới, bên trong chùa có pho Đại tượng phật khổng lồ có tên gọi Daibustu cao đến 14,98m và nặng hơn 550 tấn.Quý khách dùng bữa trưa.','https://dulichnhatban.net/static/uploads/images/tynimce/2018/06/20/pixta_19300561_M.jpg',' '],
                     'Thành Osaka':['một trong những thành quách nổi tiếng nhất Nhật Bản, là biểu tượng và niềm tự hào của người dân Osaka, vào mùa thu quý khách có thể trải nghiệm sự kết hợp giữa lá đỏ cùng hàng cây bạch quả.','https://dulichnhatban.net/static/uploads/images/tynimce/2018/06/20/lau-dai-oska3.jpg',' '],
                     
                },
                subcontentTitle: true,
            },
            {
                name :'Tắm suối nước nóng tại Hokkaido',
                img :'https://rlx.jp/relux/img/hotelpictures/RP25766_1042.jpg?1574826965',
                des :['Sau sự vội vã và nhộn nhịp xung quanh thị trấn, còn cách nào tốt hơn để thư giãn hơn là một chuyến đi trong ngày đến một spa và onsen nghỉ dưỡng tự nhiên sang trọng? Bạn sẽ khởi hành từ Ga Sapporo để đến khu nghỉ dưỡng nổi tiếng Jozankei Tsuruga Resort Mori No Uta. Tên gọi của nó, có nghĩa là Bài Thơ Của Khu Rừng, thật hoàn hảo với vị trí tuyệt đẹp nằm trong khu rừng Hokkaido tươi tốt. Khu nghỉ mát spa có các tiện nghi hàng đầu, từ các phòng mát-xa đến phòng xông hơi khô, ăn buffet và thậm chí cả nhà hàng. Nhưng đặc điểm nổi tiếng nhất của khu nghỉ mát spa này là onsen nổi tiếng hoặc suối nước nóng. Onsen truyền thống Nhật Bản ngoài trời được bao quanh bởi những khu rừng rậm rạp của Hokkaido. Đắm chìm trong làn nước nóng tự nhiên của nó và tận hưởng bầu không khí trẻ trung của thiên nhiên và cảm thấy căng thẳng của bạn cứ trôi tuột đi. Sau khi bạn đã tận hưởng cơ sở vật chất của spa, hãy gặp gỡ các thành viên còn lại của nhóm tại trạm xe buýt và trở về Sapporo một cách an toàn và sẵn sàng cho một ngày du lịch khác.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Tận hưởng trải nghiệm onsen độc đáo tại khu nghỉ mát Jozankei Tsuruga Resort Spa nổi tiếng':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/exegdlb0yzfqjmbvsgzx/TourT%E1%BA%AFmSu%E1%BB%91iN%C6%B0%E1%BB%9BcN%C3%B3ng%E1%BB%9FHokkaidoJozankeiResortSpaMoriNoUta.webp',' '],
                     'Thư giãn tại các tiện nghi spa cao cấp trong phạm vi resort':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/x0hvgb4hgo61lj7yapit/TourT%E1%BA%AFmSu%E1%BB%91iN%C6%B0%E1%BB%9BcN%C3%B3ng%E1%BB%9FHokkaidoJozankeiResortSpaMoriNoUta.webp',' '],
                     'Ngâm mình trong suối nước nóng thiên nhiên và tận hưởng bầu không khí của rừng Hokkaido':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/xomicpw59dfayztydjwd/TourT%E1%BA%AFmSu%E1%BB%91iN%C6%B0%E1%BB%9BcN%C3%B3ng%E1%BB%9FHokkaidoJozankeiResortSpaMoriNoUta.webp',' '],
                },
                subcontentTitle: true,
            },
        ],
        type :['Japan'],
    },
    {
        id :6,
        name :'Koh Larn',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-Koh-Larn-Thai-Lan.webp',
        content :['Nếu không thích Pattaya ồn ào, bạn có thể đi tàu khoảng 30 phút để đến Koh Larn – một hòn đảo riêng tư và yên tĩnh. Đảo san hô đặc biệt vắng khách du lịch vào các ngày giữa tuần; bạn có thể tận hưởng trọn vẹn thiên nhiên bình dị và tham gia nhiều hoạt động vui chơi hứng khởi như lặn biển, đi bộ dưới biển, dù lượn, mô tô nước hoặc đi thuyền chuối. Đừng quên mang theo một chiếc camera du lịch có khả năng chống nước để lưu lại những hình ảnh sống động dưới đại dương nghe!'],
        activities :[
            {
                name :'Tận hưởng thể thao mạo hiểm',
                img :'https://dulichcatvang.com/wp-content/uploads/2017/05/den-Pattaya-Thai-Lan-kham-pha-thien-duong-dao-san-ho-koh-larn-ivivu-13.jpg',
                des :[''],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Thám hiểm Pattaya với xe ATV':['Hãy xuống đường, để lại sự hối hả và nhộn nhịp đằng sau và khám phá vùng nông thôn Thái Lan nguyên sơ cách chưa đến nửa giờ đi từ thành phố bận rộn. Nhảy lên xe ATV và lái dọc theo tuyến đường mòn. Tận hưởng ánh nắng mặt trời hoặc lưới qua bùn - chuyến phiêu lưu trên ATV thú vị trong bất kỳ thời tiết nào và chỉ khiến bạn muốn đi thêm. Chưa bao giờ lái ATV? Đừng lo - sẽ không cần kinh nghiệm gì cả đâu, rồi bạn sẽ trở thành 1 tay lái xe ATV nhập Mỹ hàng đầu. Chiếc xe rất dễ để điều khiển và bạn có thể lái nó ngay lập tức. Vậy nên, hãy đạp ga và bắt đầu cuộc vui nào','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/6082fdae-Pattaya-ATV-Adventure-ATV-/Th%C3%A1mHi%E1%BB%83mPattayaV%E1%BB%9BiXeATV.webp','Khám phá Pattaya trên chuyến đi vui vẻ bằng ATV'],
                    'Vé Nhảy Dù Đôi của Thai Sky Adventures':['Nếu nhảy dù luôn nằm trong danh sách bạn muốn thực hiện, hãy biến giấc mơ này thành hiện thực trong chuyến du lịch sắp tới ở Thái Lan. Hãy tham gia hành trình đầy phấn khích này của Thai Sky Adventures và có được đầy đủ những gì cần thiết cho một trải nghiệm nhảy dù an toàn khó quên. Bạn sẽ được hướng dẫn bởi một trong những chuyên gia huấn luyện và còn được hỗ trợ lên máy bay để thực hiện cú nhảy! Nhớ mở mắt để ngắm nhìn khung cảnh tuyệt vời của Pattaya và Vịnh Thái Lan khi bạn rơi tự do với tốc độ 220km/h nhé! Nếu bạn muốn lưu giữ lại trọn vẹn trải nghiệm này, bạn có thể chọn lưu giữ bằng hình ảnh và video. Có cả xe đưa đón khứ hồi để bạn có một chuyến phiêu lưu kích thích trọn vẹn khi ở Thái Lan!','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_971,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/uayat3e8jdf6dal2ivae/V%C3%A9Nh%E1%BA%A3yD%C3%B9%C4%90%C3%B4ic%E1%BB%A7aThaiSkyAdventures.webp','Hãy làm cho giấc mơ nhảy dù thành hiện thực trong chuyến du lịch sắp đến của bạn ở Thái Lan!'],
                    'Human Slingshot Và Nhảy Bungy Tại Công Viên Sanook Pattaya':['Những người tìm kiếm cảm giác mạnh và những người đam mê mạo hiểm sẽ không muốn bỏ lỡ cơ hội thử sức với câu lạc bộ Human Slingshot và nhảy Bungy sôi động tại Sanook Park, Pattaya! Kể từ năm 1989, Sanook Park đã đáp ứng nhu cầu của những người thích phiêu lưu mạo hiểm với cú nhảy bungy cao 60m của mình không chỉ mang đến cho bạn cảm giác chóng mặt rơi tự do mà còn có tầm nhìn tuyệt vời ra hồ ngay bên dưới. Nếu đó là không đủ cho bạn, bạn cũng có thể thử ná bắn đạn người, một máy phóng đưa bạn lên trên 90m cao ở tốc độ 150km/s dựng tóc gáy! Nếu bạn vẫn còn lo lắng về việc có nên thử những chuyến đi bất chấp hiểm nguy, không cần phải lo lắng! Hướng dẫn viên nói tiếng Anh chuyên nghiệp của bạn sẽ ở đó để hướng dẫn bạn về các biện pháp an toàn cơ bản và cổ vũ bạn nếu bạn cần tăng thêm tinh thần. Cho dù đó là nhảy bungy, ná bắn đạn người, hoặc cả hai, bạn chắc chắn sẽ có khoảng thời gian tuyệt nhất trước giờ của cuộc sống của bạn. Thêm vào đó, bạn thậm chí có thể mang về nhà một video HD của bạn để cho tất cả mọi người trở về nhà và làm cho họ muốn họ đã có ở đấy để trải nghiệm nó!','https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/mimxg0abrlurmkt5kxmj.webp','Thử thách chính bản thân nhảy khỏi nền tảng cao 60m và lao xuống thế giới bên dưới!'],
                },
                subcontentTitle: true,
            },
            {
                name :'Vi vu chợ nổi',
                img :'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/chonoi-pattaya-bangkok-thailan-vntrip-e1523608277239.jpg',
                des :['Thái Lan sở hữu cho mình rất nhiều địa điểm hấp dẫn khách du lịch. Trong số đó, không thể không nhắc đến chợ nổi Pattaya, một khu chợ độc đáo của xứ Chùa Vàng. Những mặt hàng được bày bán ở đây rất đa dạng nhưng hấp dẫn nhất vẫn là những món ăn vặt đường phố hấp dẫn cùng những chiếc thuyền đầy ắp hoa quả tươi ngon luôn là những mặt hàng hấp dẫn khách du lịch.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc'
                    'Đôi nét về chợ nổi Pattaya':['Được đưa vào hoạt động năm 2008, khu chợ này có diện tích lên đến 100.000 mét vuông, và có tên gọi đầy đủ là chợ nổi Bốn Miền (Four Regions Floating Market). Nơi đây được quy hoạch và chia thành 4 khu vực riêng biệt, tượng trưng cho bốn miền của Thái Lan bao gồm Bắc, Trung, Nam và vùng Đông Bắc. Mỗi khu vực lại bán những vật dụng, hàng hóa, sản vật đặc trưng của từng vùng miền.','https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/cho-noi-vntrip-e1523607389307.jpg','Khu chợ nổi nổi tiếng của Thái Lan'],
                    'Chợ nổi Bốn Miền Pattaya ở đâu?':['Tọa tạc tại khu Sukhumvit Pattaya, chợ nổi Bốn Miền nằm cách ngã tư South Pattaya Road (Pattaya Tai) chừng 5 km về phía đường cao tốc. Để tới thăm quan khu chợ, bạn có thể di chuyển dễ dàng bằng nhiều phương tiện khác nhau như đi bus, đi xe ôm hoặc nếu kinh phí không hạn hẹp bạn có thể đi taxi là đơn giản và thuận tiện nhất. Khi tới Sukhumvit đi tiếp chừng 2 km nữa bạn sẽ qua Pattaya Underwater World, trên đường đến Sattahip. Từ trung tâm Pattaya đến địa điểm này bạn sẽ phải chi trả khoảng 200-300 baht cho việc di chuyển, giá tiền này sẽ phụ thuộc vào thời điểm và phương tiện bạn lựa chọn. Để vào chợ bạn sẽ phải mua vé, giá vé chợ nổi Pattaya là 200 baht (khoảng 70.000đ). Giá vé khá rẻ nhưng khu chợ này thường rất đông vào những ngày cuối tuần, bạn nên lưu ý điều này.','https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/cho-noi-4mien-Pattaya-vntrip-e1523607633392.jpg','Bạn nên thuê thuyền đi dạo trong khu chợ này'],
                    'Cách đi chợ nổi Pattaya':['Vì đặc thù được xây nổi trên nước nên đến với khu chợ này chắc hẳn sẽ không còn phương tiện nào thích hợp hơn một chiếc thuyền có người lái. Như vậy sẽ thuận tiện hơn rất nhiều cho việc thăm quan khám phá những điều lý thú xung quanh khu chợ. Nếu bạn đi cùng gia đình hoặc bạn bè với nhóm từ 4 đến 6 người thì giá thuê thuyền trong 30 phút khá rẻ. Ngoài ra, bạn hoàn toàn có thể đi bộ dọc theo các dãy nhà gỗ san sát. Qua mỗi khu, các gian nhà lại mang những nét kiến trúc đặc trưng của từng vùng, đem lại cho bạn cảm giác như đang băng qua những khu phố sầm uất trên khắp đất nước Thái Lan.','https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/thamquan-cho-noi-pattaya-vntrip-e1523607968353.jpg','Thuyền lớn trở từ 4-6 người có giá thuê khá rẻ'],
                },
                subcontentTitle: true,
            },
            
        ],
        type :['Thailand'],
    },
    {
        id : 7,
        name :'Krabi',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-krabi-cap-doi.webp',
        content :['Krabi hội tụ mọi nguyên liệu làm nên một kỳ nghỉ trong mơ, dù bạn là người thích nghỉ dưỡng hay ưa mạo hiểm. Buổi sáng, khách du lịch có thể ngắm bình minh từ mỏm đá cao, thư thái chèo thuyền trên mặt biển phẳng lặng và trong vắt đến độ nhìn xuyên thấy đáy. Buổi chiều, khám phá vách núi đá vôi hùng vĩ uốn lượn cạnh bờ biển sẽ là trải nghiệm đáng nhớ. Khi đêm về, hãy sẵn sàng “quẩy cực bốc” ở Krabi Walking Street, với rất nhiều quán café, nhà hàng, quán bar sôi động nhé!'],
        activities :[
            {
                name :'Tham quan đảo James Bond',
                img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-krabi-cap-doi.webp',
                des :['Đảo James Bond là một địa danh nổi tiếng thuộc vịnh Phang Nga, miền Nam Thái Lan. Còn được gọi tên tiếng Thái là Ko Tapu nghĩa là hòn đảo đinh, đồi đinh.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Đôi nét về hòn đảo nổi tiếng James Bond':['Được tìm thấy lần đầu tiên và được đưa vào bản đồ du lịch quốc tế khi xuất hiện trong khung cảnh của bộ phim "Người đàn ông với súng ống vàng" của nam diễn viên nổi tiếng tài năng James Bond. Và tên gọi của hòn đảo cũng xuất phát từ lý do này.','https://tour.dulichvietnam.com.vn/uploads/image/du-lich-thai-lan/Phuket/dao-james-bond/james-bond-island.jpg','James Bond - hòn đảo nổi tiếng nhất thuộc Vịnh Phang Nga'],
                     'Một vài tip cho chuyến thăm James Bond':['Điều cần biết về Đảo James Bond, khu vực này là một điểm đến phổ biến cho thuyền buồm cũng như chèo thuyền kayak. Hầu hết các chuyến du lịch có tổ chức đến đảo James Bond được kết hợp với một chuyến viếng thăm các hòn đảo nổi tiếng khác và bao gồm một điểm dừng cho bữa trưa hải sản tại Koh Panyee quyến rũ - ngôi làng đánh cá của người Hồi giáo gần đó.','https://tour.dulichvietnam.com.vn/uploads/image/du-lich-thai-lan/Phuket/dao-james-bond/dao-james-bond.jpg','Khung cảnh yên bình của James Bond'],
                },
                subcontentTitle: true,
            },
            {
                name :'Tham quan trên đảo Koh Phi Phi',
                img :'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_750,h_1500,f_auto/w_46,x_8,y_8,g_south_west,l_klook_water/activities/jfuitczvc3ir879jkg6r/[SALE]TourNg%C3%A0y%C4%90%E1%BA%A3oPhiPhiT%E1%BB%ABKrabiB%E1%BA%B1ngThuy%E1%BB%81nCaoT%E1%BB%91cho%E1%BA%B7ct%C3%A0uCatamaran(%C4%90i%E1%BB%81uh%C3%A0nhb%E1%BB%9FiTTD).webp',
                des :['Được mệnh danh là hòn ngọc của vùng biển Andaman, Đảo Phi Phi là 1 trong những địa điểm nhất định phải đến ở Thái Lan. Trong chuyến đi đến đảo Phi Phi, bạn sẽ có thể ghé thăm 1 vài địa điểm đặc trưng như Bãi Biển Maya, nơi quay bộ phim phiêu lưu The Beach của tài tử Leonardo DiCaprio năm 2000. Sau bữa ăn trưa thư giãn, bạn sẽ dừng lại ở các khu vườn san hô đầy màu sắc tuyệt đẹp của Vịnh Monkey và lặn để khám phá cuộc sống biển phong phú của nơi này. Thưởng thức một chuyến đi thuyền thư giãn sẽ đưa bạn dọc theo cảnh quan đáng kinh ngạc và dòng nước đổi màu - hãy chụp những bức ảnh hấp dẫn và cảm nhận làn gió biển tươi mát trên làn da của bạn.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Tour sunset và ngắm cá phát sáng plankton trên biển đêm':['Tour được tham quan các đảo như đảo hải tặc Pirate, Maya,( nơi ngắm hoàng hôn tuyệt đẹp, phí vào Maya là 100B), ngắm lagoon nước xanh ngọc và lặn ngắm san hô, cá đủ màu sắc, xem plankton.Tour khởi hành từ 1:30pm đến 7pm.Đa số các tour ở Koh Phi Phi đi bằng long tail với sức chứa 20 người. Nếu bạn đi bằng tàu party thì giá gấp 5 lần và cũng đi những chỗ y hệt.','http://kenh14cdn.com/k:thumb_w/600/Z3WxvDWHkkhwglFfVOnyhzOPBKmr9M/Image/2014/01/blog-01/bio-3-903da/xem-bo-bien-dom-dom-phat-sang-tuyet-dep-o-maldives.jpg',' '],
                    'Scuba Diving (Lặn bằng bình khí)':['Phi Phi là một trong những điểm lặn đẹp nhất Thái Lan. Tour Coach đã từng lặn ở đây, có 2 điểm lặn gọi là Local site gần Phi Phi nằm ở Viking cave và Peleh wall, bạn có thể nhìn thấy nhiều san hô đủ màu sắc, cá Nemo, cá đuối (Sting ray)… Giá 2 lần lặn khoảng 2500bath cho người có bằng lặn bao gồm ăn trưa.','https://static1.squarespace.com/static/549d41a3e4b003c6ce131926/t/5558a507e4b02d69c9aa9ee9/1431872784337/',' '],
                    'Chèo thuyền Kayark khám phá nhiều bãi biển đẹp vắng người ở Phi Phi':['Quanh đảo Phi Phi có vô vàn những bãi biển đẹp, vắng người, còn gì tuyệt vời hơn khi chèo thuyền kayark vừa luyện tập sức khoẻ và tắm ở những bãi biển cát trắng đẹp mê lòng người?','http://4.bp.blogspot.com/-pzcsId3u5ls/VZgWifAWdeI/AAAAAAAACDg/C19wX0Fz5Cg/s1600/main-activities09.jpg',' '],
                    'Ăn uống ở đảo Koh Phi Phi':['Trên trục đường chính dẫn ra biển có rất nhiều streetfood bán giá khá rẻ. Ngoài ra muốn ăn sang hơn thì bạn vào nhà hàng, giá một món trung bình từ 120-200bath.Nhà hàng ngon nhất trên đảo là Cosmic, giá bình dân, nhạc hay, có đủ các món Á, Âu, Tour Coach khuyên bạn nên ăn mỗi ngày ở đây, không cần mắc công tìm các nhà hàng khác.','http://www.thailandtriptour.com/kohphiphi/wp-content/uploads/2011/06/Tonsai-Seafood.jpg','Cosmic restaurant'],
                },
                subcontentTitle: true,
            },
        ],
        type :['Thailand']
    },
    {

        id :8,
        name :'Kyoto',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/geisha-gion-kyoto-japan-501.webp',
        content :['Có không ít phim về tình yêu chọn Kyoto làm bối cảnh chính. Lý do thì cũng thật dễ hiểu. Cố đố hơn 1000 năm tuổi này sở hữu những dãy nhà gỗ cổ kính, được trang hoàng bởi cây xanh và nhiều vườn hoa mùa xuân rạng rỡ sắc màu. Kyoto là địa điểm hoàn hảo để cầu hôn, bày tỏ tình cảm hay tìm kiếm “nửa kia” định mệnh.','Bạn không tin à? Diện ngay bộ Kimono ưng ý và dạo phố xem sao nhé!'],
        activities :[
            {
                name :'Thưởng ngoạn Arashiyama',
                img :'https://resources.matcha-jp.com/resize/720x2000/2019/05/16-77137.jpeg',
                des :['Arashiyama là địa điểm thăm quan nổi tiếng ở cố đô Kyoto với các địa danh thăm quan như chùa Tenryuji, con đường ở rừng trúc và các công trình có bề dày lịch sử. Bài viết này sẽ giới thiệu các địa điểm thăm quan và các thông tin hữu ích cho việc thăm quan.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Con đường ở rừng trúc':['là địa điểm tiêu biểu ở Arashiyama. Chắc chắn có nhiều người đã từng xem những bức ảnh với không gian thần bí và màu xanh phong phú qua SNS. Tuy vậy “trăm nghe không bằng một thấy”. Các bạn hãy thử tản bộ ở đây để cảm nhận không gian như lạc vào một thế giới khác. Ở đây mở cửa suốt 24 giờ.','https://resources.matcha-jp.com/resize/720x2000/2019/05/16-77091.jpeg','Con đường ở rừng trúc'],
                    'Tenryuji: Ngôi chùa thiền đã đăng ký di sản thế giới':['Tenryuji là 1 trong những ngôi chùa thiền tiêu biểu của Nhật, được xây dựng năm 1339. Chùa đã được đăng ký di sản thế giới của UNESCO vì tầm quan trọng mang tính văn hoá và lịch sử. Khách thăm quan đến đền thờ lễ bái có thể thăm quan các toà nhà trong khuôn viên chùa bao gồm cả Pháp đường Hatto (Thuyết Pháp Đường) có vẽ hình rồng nổi tiếng. Các bạn có thể ngắm cảnh tuyệt đẹp quanh năm trong khu vườn Nhật Bản trồng cây quanh hồ nước. Ở đây cũng có thể trải nghiệm ngồi thiền hoặc chép kinh.','https://resources.matcha-jp.com/resize/720x2000/2019/05/16-77096.jpeg','Picture courtesy of Tenryuji'],
                    'Arashiyama Monkey Park Iwatayama: Gặp động vật xinh xắn':['Arashiyama Monkey Park Iwatayama là nơi có thể quan sát loài khỉ Nhật Bản hoang dã sinh sống ở ngọn núi có thể quan sát toàn cảnh thành phố Kyoto.Đây là địa điểm không bao giờ nhàm chán với những người yêu thích động vật và gia đình có trẻ nhỏ, những con khỉ đáng yêu sẽ xoa dịu tâm hồn khách đến đây.','https://resources.matcha-jp.com/resize/720x2000/2019/05/16-77103.jpeg','Picture courtesy of Arashiyama Monkey Park Iwatayama'],
                },
                subcontentTitle: true,
            },
        ],
        type :['Japan'],
    },
    {

        id :9,
        name :'Mũi Né',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-mui-ne.webp',
        content :['Cách thành phố Phan Thiết khoảng 22km về hướng Đông Bắc, Mũi Né sở hữu một trong những đường bờ biển đẹp nhất Việt Nam với nước biển xanh ngắt, không khí trong lành và cát trắng mịn. Nhờ vào thiên nhiên đa dạng, du khách sẽ được tham gia nhiều trải nghiệm du lịch thú vị ở nơi đây, ví dụ như chạy mô-tô nước, lặn biển, lướt ván, trượt cát, leo thác….','Có rất nhiều khu nghỉ dưỡng hiện đại ở Mũi Né, cùng các nhà hàng, quán bar hướng biển độc đáo. Bên cạnh chụp ảnh cưới, các cặp đôi cũng thường đến đây để tạo kỷ niệm đẹp, tận hưởng những tháng ngày độc thân cuối cùng trước hôn lễ.'],
        activities :[
            {
                name :'6 hoạt động không nên bỏ lỡ ở Phan Thiết – Mũi Né',
                img :'https://www.chudu24.com/wp-content/uploads/2018/08/du-lich-mui-ne-phan-thiet.jpg',
                des :['Du lịch hè Phan Thiết – Mũi Né, ghé thăm những làng chài lúc tờ mờ sáng, lướt SUV, hay ngắm hoàng hôn từ ngọn hải đăng… là những hoạt động mà bạn nên tham gia trải nghiệm để cảm nhận về vẻ đẹp của vùng biển Bình Thuận đầy nắng và gió.'],
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Ghé thăm làng chài vào tờ mờ sáng':['Dạo chợ Mũi Né và những làng chài ven biển vào lúc bình minh, bạn vừa có  dịp ngắm Mặt trời mọc vừa được xem bức tranh chân thật nhất về cuộc sống của ngư dân Việt Nam. Những bong thuyền cặp bờ đầy ắp cá tôm, các loại hải sản cua, ghẹ… để trao đổi với chủ nhà hàng, thương lái. Những  mẻ lưới, rổ rá đầy ắp hải sản tươi, những giọt mồ hôi đọng lại trên nụ cười các thành viên trong gia đình sau mỗi cuộc mưu sinh sẽ cho các bạn những cảm nhận mới về cuộc sống.','https://photo2.tinhte.vn/data/attachment-files/2020/11/5220874_collage_3.jpg',' '],
                    'Ngắm hoàng hôn từ hải đăng Mũi Kê Gà':['Ngọn hải đăng Mũi Kê Gà nằm dọc bờ biển phía nam Phan Thiết cách trung tâm thành phố 30km với những bãi đá hình thù đa dạng, đầy màu sắc. Đây sẽ là điểm đến lãng mạn để các cặp tình nhân thỏa sức ngắm hoàng hôn. Mũi Kê Gà là ngọn hải đăng cao nhất Việt Nam và đẹp nhất Đông Nam Á được xây từ cách đây 120 năm. Chinh phục 183 bậc thang xoáy, phóng tầm nhìn từ ngọn Hải Đăng vào buổi hoàng hôn, bạn sẽ chiêm ngưỡng bức tranh huyền ảo của vùng biển Hàm Thuận Nam nguyên sơ và thanh bình.','https://wiki-travel.com.vn/Uploads/picture/camnhi-200227040251-hai-dang-mui-ke-ga.jpg','Ngọn hải đăng Mũi Kê Gà lúc hoàng hôn'],
                    'Môn Lướt Ván Diều':['Tại bãi biển dài hàng chục km ở Mũi Né, vào buổi sáng không khí thường yên tĩnh, còn buổi chiều bắt đầu náo nhiệt hơn với những hoạt động nhộn nhịp. Đây là thời điểm thích hợp dành cho những người yêu thích lướt ván diều, lướt ván buồm, lướt ván bằng cano. Những môn thể thao này không chỉ giúp rèn luyện sức khỏe mà còn mang đến trải nghiệm mới lạ cho bạn.','https://www.luotvandieu.com/wp-content/uploads/2019/06/luot-van-mn.jpg','Chơi Diều tại Mũi né'],
                },
                subcontentTitle: true,
            },
           
        ],
        type :['Vietnam']
    },
]