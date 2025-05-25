// 简单雪花飘落效果
(function() {
  let snowflakes = [];

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (5 + Math.random() * 5) + 's'; // 5-10秒
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';
    snowflake.textContent = '❄'; // 雪花符号
    document.body.appendChild(snowflake);
    snowflakes.push(snowflake);

    // 动画结束后移除元素
    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
      snowflakes = snowflakes.filter(s => s !== snowflake);
    });
  }

  setInterval(createSnowflake, 200); // 每200ms生成一个雪花
})();
