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
                des : 'Hua Hin là thiên đường mua sắm xinh đẹp ở Thái Lan. Ấn tượng ở các khu chợ ở Hua Hin là phong cách vintage, cổ kính và tinh tế. Cùng khám phá nét đẹp quyến rũ của 5 khu chợ đêm Hua Hin nổi tiếng sau đây!',
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
                img :['https://www.tourthailan.net.vn/images/diadiem/diadiem-2/Koh-Talu-1.jpg'],
                des :['Khi du lịch đến Hua Hin, một trong những hoạt động bạn không nên bỏ lỡ là tham quan đảo Koh Talu và tham gia lặn biển ở đảo này. Hãy thử trải nghiệm một thiên đường ngay ở dưới hạ giới với cảnh sắc thiên nhiên từ trên cạn đến dưới nước ở Koh Talu. Nếu bạn đang ở thị trấn Bangsaphan, chỉ mất 30 phút đi thuyền, bạn đã đặt chân đến được Koh Talu.', 'Koh Talu có những bãi biển với hàng cọ rì rào và những rạn san hô đẹp tuyệt. Ngoài thế giới đại dương phong phú, sự yên tĩnh tuyệt đối của nơi đây cũng là điểm thu hút du khách khi đến đảo. Với sự riêng tư của nó, bạn sẽ trải nghiệm được nhiều điều thú vị bất ngờ. Thưởng thức bữa trưa ngay tại đảo sẽ cho bạn một cảm giác khác biệt chưa từng có khi ăn một bữa ăn trên một vùng đất yên tĩnh hiền hòa này.', 'Và, khi bạn đến Koh Talu, ngoài việc được tự do khám phá đảo và tham gia các hoạt động dưới nước, hãy dành thời gian cho việc lặn biển. Lặn biển ở Koh Talu là một hoạt động thú vị bạn đừng nên bỏ qua khi đến đây. Đây là một nơi lý tưởng cho việc lặn biển, bạn sẽ khám phá được thế giới đại dương bao la và đa dạng ở Koh Talu. Và với những ai mới tập tành với môn lặn biển này, hãy yên tâm bởi bạn sẽ được lặn ở những vùng nước cạn, ở đó, bạn cũng sẽ chiêm ngưỡng được hệ sinh thái đa dạng ở biển trong xanh này.'],
                sub_content :{},
            },
            
        ],
        type: ['ThaiLan'],
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
                des :'Seoul – thành phố năng động, hiện đại bậc nhất thế giới với nhịp sống nhộn nhịp nhưng đâu đó vẫn lưu giữ vẹn nguyên những nét tinh túy của nền văn hóa truyền thống vô cùng đặc sắc. Cũng bởi nguyên do đó nên nhiều du khách đã lựa chọn Seoul làm điểm đến lý tưởng cho các hành trình khám phá của mình. ',
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
                des: 'Khám phá những điều độc đáo về Lotte World Tower ở xứ sở kim chi. Nếu Landmak 81 là tòa nhà cao nhất ở Việt Nam với 81 tầng thì Lotte World Tower cũng là tòa nhà cao nhất Hàn Quốc với 123 tầng. Tòa nhà này cũng được xem là một trong những biểu tượng của Hàn Quốc. Gần như tất cả khách du lịch Hàn Quốc đều không thể bỏ qua tòa tháp này.',
                sub_content:{
                    'Những điều đặc biệt của Lotte Tower ':['Công trình được lấy cảm hứng từ nét văn hóa truyền thống xen lẫn hiện đại của Hàn Quốc. Hình dáng của Lotte World Tower là sự hòa quyện hài hòa giữa chiếc bình gốm và chiếc bút lông thời xưa của đất nước Hàn Quốc. Đây là hai hiện vật làm nên chủ đề và thiết kế cho tòa nhà với đường cong đơn giản, mềm mại đại diện cho vẻ đẹp truyền thống lâu đời của Hàn Quốc. Phía đỉnh tháp có hình dáng hai đường chữ V soi ánh sáng hướng về sông Hàn, Tháp Namsan và khu trung tâm cổ của Seoul. Đây được xem là một ý tưởng rất đặc biệt và có một không hai của Lotte World Tower.', 'https://www.zila.com.vn/wp-content/uploads/2020/06/Lotte-Word-Tower-e1601342134222.jpg','Lotte Tower Hàn Quốc'],
                },
                subcontentTitle: true,
            }   
        ],
        type :['HanQuoc'],
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
                des :'Công viên Fuji-Q Highland là một trong những công viên giải trí nổi tiếng nhất Nhật Bản. Nếu bạn là một người ưa thích sự mạo hiểm thì chắc chắn không thể bỏ qua địa điểm này.',
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
                des :'Di qua những khu trung tâm du lịch nhộn nhịp của Nhật và đến vài nơi yên bình nhất với chuyến đi 1 chiều này. Chuyến đi bạn được sắp xếp đến núi Fuji, hồ Suwa, đồi Shinshu, và Takayama trong 1 ngày. Với 2 chuyến đưa đón có ở Tokyo, chuyến đi này đảm bảo di chuyển nhanh chóng và dễ dàng đến nơi. Bắt đầu một ngày của bạn với chuyến đến trạm số 5 line Fuji Subaru, phát triển nhất trong tất cả 4 trạm Fuji thứ 5. Chuẩn bị máy ảnh cho cảnh đẹp ngoạn mục của 5 hồ Fuji đang chờ đón bạn. Kế tiếp, đến nhà hàng gần Fuji-Q Highland cho bữa trưa. Nhà hàng có thể phục vụ món chay, nên để chắc chắn cho thực đơn mong muốn của bạn hãy báo cho biết khi thanh toán nhé. Sau bữa ăn no nê, đến đài quan sát cho cảnh trên cao của hồ Suwa và đồi Shinshu. Mãn nhãn với chuyến dừng chân cuối cùng của bạn - Takayama, một thành phố được bao quanh bởi núi và cây xanh um tùm. Hòa mình vào văn hóa nơi này khi bạn đi dọc những con phố cổ, nơi kết thúc chuyến đi của bạn.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Mặt trời mọc':['Những người tham gia leo núi Phú Sĩ hẳn đều mong muốn được nhìn thấy cảnh mặt trời mọc từ đỉnh ngọn núi này. Cảnh những tia sáng mặt trời dần dần ló rạng sau những đám mây và bầu trời đêm quả là một khung cảnh tuyệt đẹp.','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/827/original/pixta_16625807_M_s.jpg?1556265232&d=750x750',''],
                     'Kim cương Phú Sĩ':['Thời điểm mặt trời mọc và lặn, mặt trời dường như đậu ngay trên đỉnh núi Phú Sĩ, nhìn từ xa trông giống như một viên kiêm cương đang tỏa sáng lấp lánh trên đỉnh núi, hiện tượng này được gọi là "Kim cương Phú Sĩ". Đối với người Nhật đây là một cảnh tượng vô cùng đắt giá, vì không phải lúc nào nó cũng xảy ra, nó phụ thuộc vào rất nhiều yếu tố như vị trí đứng của bạn là ở hướng đông hay hướng tây, phụ thuộc vào thời gian và điều kiện thời tiết lúc đó.','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/828/original/pixta_43070826_M_s.jpg?1556265254&d=750x750',''],
                     'Phú Sĩ đỏ':['Đúng như tên gọi, bạn sẽ nhìn thấy ngọn núi có màu đỏ do ánh nắng chiếu vào lúc hoàng hôn hoặc bình mình trong suốt mùa leo núi, khi mà ngọn núi không bị bao phủ bởi tuyết. Ngoài ra, vào mùa đông khi tuyết bao phủ ngọn núi, núi Phú Sĩ trông như có màu đỏ đậm','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/829/original/pixta_46835072_M_s.jpg?1556265269&d=750x750',''],
                },
                subcontentTitle: true,
            },
           
        ],
        type :['NhatBan'],
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
                des :'Dành thời gian nhàn nhã thăm Hồ Meihua để tận hưởng quang cảnh tự nhiên tuyệt đẹp. Bạn sẽ được chào đón với cây cỏ tươi tốt và không khí trong lành, nơi bạn có thể dành thời gian đi bộ, đi xe đạp và đi du thuyền trên hồ. Điểm nổi bật khác là Đền Sanqing - nằm trên sườn phía nam của hồ Meihua, kiến trúc của ngôi đền giống như các tòa án kiểu triều đình truyền thống và rất đáng xem. Hoàn thành buổi chiều của bạn với một bữa tiệc trà ngon miệng tại quán cà phê Salex khi bạn ngắm nhìn những khung cảnh hồ tuyệt đẹp.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'a':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/7b4311f2-Meihua-Lake-Tour/Chuy%E1%BA%BFndul%E1%BB%8Bchh%E1%BB%93Meihua.webp','Đạp xe, đi bộ và đi thuyền trong chuyến đi nửa ngày'],
                    'b':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/b9fbfca1-Meihua-Lake-Tour/Chuy%E1%BA%BFndul%E1%BB%8Bchh%E1%BB%93Meihua.webp','Tham quan các thắng cảnh địa phương và ngất ngây trước kiến trúc của Đền Sanqing'],
                },
                subcontentTitle: false,
            },
            {
                name :'Ngắm khinh khí cầu ở Đài Đông',
                img :'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fbd6ba4e-Taitung-Hot-Air-Balloon-Tour---Klook.webp',
                des :'Bay cao trên khinh khí cầu trải nghiệm không giống bất cứ ai. Tận hưởng khung cảnh tuyệt vời của những dòng sông và khe thung lũng xung quanh Đài Đông, tận hưởng nét đẹp của thiên nhiên qua nhiều góc nhìn khác nhau khi đứng giữa không. Khi bạn lướt nhẹ trên bầu trời và bay xuyên qua những đám mây tự hỏi khung cảnh xung quanh bên dưới bạn thế nào. Sau đó, đáp xuống và uống mừng với ly sâm banh, và nhận chứng nhận cho chuyến đi đáng nhớ cũng như trải nghiệm tuyệt vời đã đến với bạn.',
            },
        ],
        type :['DaiLoan']
    },
]