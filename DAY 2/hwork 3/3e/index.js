let c = prompt('Enter c');
c = Number(c);
let n = prompt('Enter n');
n = Number(n); 
//Vì 1 lý do nào đấy nếu e ko chuyển var thành Number thì nó chạy rất dị ra 1 đống số to đùng và suýt sập máy, bài 3d ko khác gì ngoài c++ thay vì c=c+3 nhưng ko cần 2 dòng chuyển đổi vẫn chạy bình thường. Nếu được thầy giải thích hộ em với ạ
for (c; c<n; c=c+3) {
  console.log(c);
}