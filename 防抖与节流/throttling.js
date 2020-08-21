// 简单版： 定时器期间，只执行最后一次操作
var throttling = (fn, wait) => {
  let timer;
  let context, args;

  let run = () => {
    timer=setTimeout(()=>{
      fn.apply(context,args);
      clearTimeout(timer);
      timer=null;
    },wait);
  }

  return function () {
    context=this;
    args=arguments;
    if(!timer){
      console.log("throttle, set");
      run();
    }else{
      console.log("throttle, ignore");
    }
  }
}

/// 增加前缘
var throttling = (fn, wait, immediate) => {
  let timer, timeStamp=0;
  let context, args;

  let run = () => {
    timer=setTimeout(()=>{
      if(!immediate){
        fn.apply(context,args);
      }
      clearTimeout(timer);
      timer=null;
    },wait);
  }

  return function () {
    context=this;
    args=arguments;
    if(!timer){
      console.log("throttle, set");
      if(immediate){
        fn.apply(context,args);
      }
      run();
    }else{
      console.log("throttle, ignore");
    }
  }

}
