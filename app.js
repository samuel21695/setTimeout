setTimeout(function() {
  console.log('첫번째 소사');
  setTimeout(function() {
    console.log('두번째 문기');
    setTimeout(function() {
      console.log('세번째 민구');
    }, 1000);
  }, 2000);
}, 3000
);
