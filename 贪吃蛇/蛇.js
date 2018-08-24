(function(window){
function Snake(options) {
    options = options || {};

    this.width = options.width || 20;
    this.height = options.height || 20;
    this.headColor = options.headColor || 'red';
    this.bodyColor = options.bodyColor || 'blue';

    //方向
    this.direction = 'right';

    //坐标
    this.body = [{x:2,y:0},{x:1,y:0},{x:0,y:0}];
}

    //原型
    Snake.prototype.render = function (target) {
        //根据坐标 根据元素的个数创建蛇快
        //0.遍历坐标
        for(var i = 0;i<this.body.length; i++){
            //1.创建蛇快
            var span = document.createElement('span');
            //2.添加属性样式
            span.style.width = this.width + 'px';
            span.style.height = this.height + 'px';
            span.style.background = i ==0? this.headColor : this.bodyColor;

            //坐标定位  子绝
            span.style.position = 'absolute';
            span.style.left = this.body[i].x*this.width + 'px';
            span.style.top = this.body[i].x*this.height + 'px';

            //添加蛇快
            target.appendChild(span);
        }
        }
        Snake.prototype.move = function(target,food,ib){
            //1.创建一个新的节点  复制第一个头部的
            var newNode = {
                x: this.body[0].x,
                y: this.body[0].y
            }

            //2  索引＋1
            switch(this.direction){
                case 'right':
                    newNode.x++;
                    break;
                case 'left':
                    newNode.x--;
                    break;
                case 'up':
                    newNode.y--;
                    break;
                case 'down':
                    newNode.y++;
                    break;
            }
            this.body.unshift(newNode);
            if(food.x == this.body[0].x && food.y == this.body[0].y){
                var div = target.querySelector('div');
                target.removeChild(div);

                score ++;
                ib.innerText = score;

                food.render(target)

            }else{
                this.body.pop();
            }

            var spans = target.querySelectorAll('span');
            for(var i = 0; i<span.length; i++){
                target.removeChild(spans[i]);
            }
            this.render(target);

        }
        
            window.Snake = Snake ;
        })(window)