
$().ready(function () {
            $("#alert").click(function () {
                Swal.fire({
                    title: '<span style="font-size:70px">설명</span>',
                    width: '70%',
                    html: '<span style="font-size: 40px;">후보 2번 <b>윤시호</b>의 4번 공약 예시입니다.<br><br><font color=green><b>점수 얻기</b></font>를 통해 <font color=blue><b>점수</b></font>를 얻고,<br><u>우리 반</u>의 <font color=blue><b>점수</b></font>를 올리세요!</span>',
                });
            });
        });