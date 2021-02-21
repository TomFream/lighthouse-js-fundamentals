for (let i = 100; i <= 200; i++){
  if (i % 3 == 0){
    if (i % 4 == 0){
      console.log('Loopy Lighthouse');
    }else{
      console.log('Loopy');
    }
  }else if (i % 4 == 0){
    console.log('lighthouse');
  }else{
    console.log(i);
  }
}