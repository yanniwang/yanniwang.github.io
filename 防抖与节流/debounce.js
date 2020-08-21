// 暴力版： 定时器期间，有新操作时，清空旧定时器，重设新定时器
var debounce = (fn, wait) => {
  let timer, timeStamp = 0
  let context, args

  let run = () => {
    timer = setTimeout(() => {
      fn.apply(context, args)
    })
  }

  let clean = () => {
    clearTimeout(timer)
  }

  return function () {
    context = this
    args = arguments

    let now = (new Date()).getTime()
    if (now - timeStamp < wait) {
      clean()
      run()
    } else {
      run()
    }

    timeStamp = now
  }
}

/*周期内有新事件触发时，重置定时器开始时间撮，定时器执行时，判断开始时间撮，若开始时间撮被推后，重新设定延时定时器。*/
var debounce = (fn, wait) => {
  let timer, startTimeStamp=0;
  let context, args;

  let run = (timerInterval)=>{
    timer= setTimeout(()=>{
      let now = (new Date()).getTime();
      let interval=now-startTimeStamp
      if(interval<timerInterval){ // the timer start time has been reset, so the interval is less than timerInterval
        console.log('debounce reset',timerInterval-interval);
        startTimeStamp=now;
        run(wait-interval);  // reset timer for left time
      }else{
        fn.apply(context,args);
        clearTimeout(timer);
        timer=null;
      }

    },timerInterval);
  }

  return function(){
    context=this;
    args=arguments;
    let now = (new Date()).getTime();
    startTimeStamp=now;

    if(!timer){
      console.log('debounce set',wait);
      run(wait);    // last timer alreay executed, set a new timer
    }

  }

}

// 增加前缘触发功能
var debounce = (fn, wait, immediate=false) => {
  let timer, startTimeStamp=0;
  let context, args;

  let run = (timerInterval)=>{
    timer= setTimeout(()=>{
      let now = (new Date()).getTime();
      let interval=now-startTimeStamp
      if(interval<timerInterval){ // the timer start time has been reset，so the interval is less than timerInterval
        console.log('debounce reset',timerInterval-interval);
        startTimeStamp=now;
        run(wait-interval);  // reset timer for left time
      }else{
        if(!immediate){
          fn.apply(context,args);
        }
        clearTimeout(timer);
        timer=null;
      }

    },timerInterval);
  }

  return function(){
    context=this;
    args=arguments;
    let now = (new Date()).getTime();
    startTimeStamp=now; // set timer start time

    if(!timer){
      console.log('debounce set',wait);
      if(immediate) {
        fn.apply(context,args);
      }
      run(wait);    // last timer alreay executed, set a new timer
    }

  }

}

