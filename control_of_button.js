document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("content2").innerHTML =
    document.getElementById("shouye").innerHTML;
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("content2").innerHTML =
    document.getElementById("zhanghao").innerHTML;
});

document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("content2").innerHTML =
    document.getElementById("zuopin").innerHTML;
});

let currentIndex = 0; // 当前显示的图片索引
const images = document.querySelectorAll('.carousel-image'); // 获取所有图片
const totalImages = images.length; // 图片总数

// 显示指定索引的图片
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

// 自动切换图片
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // 更新索引，循环显示
    showImage(currentIndex); // 显示当前索引的图片
}

// 启动自动轮播，每隔3秒切换一次（3000毫秒）
setInterval(autoSlide, 3000);



document.getElementById('nextImageBtn').addEventListener('click', function() {
    const contentDiv = document.getElementById('zuopin');
    
});



// 初始化显示第一张图片
showImage(currentIndex);


// 显示指定索引的图片
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none'; // 设置当前图片可见，其余隐藏
    });
}

// 为“下一张”按钮添加点击事件
document.getElementById('nextImageBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages; // 更新索引，循环显示
    showImage(currentIndex); // 显示当前索引的图片
});

// 初始化显示第一张图片
showImage(currentIndex);
