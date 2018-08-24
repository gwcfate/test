(function(window){
    //1.1食物的构造函数属性
    function Food(options){
        options = options || {}
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.bgColor = options.bgColor || 'blue';
        this.x = 0;
        this.y = 0;
    }

    //2.  食物的原型方法（渲染）
    Food.prototype.render = function(target){
        // 2.1  创建一个食物标签
        var div = document.createElement('div');

        // 2.2  设置食物标签的样式
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.background = this.bgColor;

        //定位  子绝
        div.style.position = 'absolute';
        this.x = parseInt(Math.random()*target.offsetWidth/this.width);
        this.y = parseInt(Math.random()*target.offsetHeight/this.height);
        div.style.left = this.x*this.width + 'px';
        div.style.top = this.y*this.height + 'px';
        
        //3.  把食物标签添加到地图上
        target.appendChild(div);
    }

    //4  暴露Food给window
    window.Food = Food;
    

    })(window);