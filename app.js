setTimeout(function() {
  console.log('첫번째 소사');
}, 3000
);

setTimeout(function() {
  console.log('두번째 문기');
}, 2000);

setTimeout(function() {
  console.log('세번째 민구');
}, 1000);

function sosa() {
  setTimeout(function() {
    console.log('소사')
    sosa();
  }, 1000);
};

sosa();