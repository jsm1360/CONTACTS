function getNo() {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get('no');
}

function fetchContact(no) {
  const 요청주소 = `https://sample.bmaster.kro.kr/contacts/${no}`;

  // HTTP 상태코드 : 서버의 작업상태가 숫자로 응답에 포함되어 있다
  // 200 - 성공 -> 성공의 의미는 "작업 결과가 개발자가 원하는것이다"가 아니라 
  //               "오류가 발생하지 않았다"는 의미
  axios.get(요청주소).then(res=>{
    if(res.data.status==='fail') {
      alert('연락처를 찾을 수 없습니다');
      location.href = 'list.html';
    } else {
      const {name, tel, address, photo} = res.data;
      document.getElementById('photo').src = photo;
      document.getElementById('tel').innerHTML = tel;
      document.getElementById('address').innerHTML = address;
      document.getElementById('name').innerHTML = name;
    }
  }).catch(res=>console.log(res));
}