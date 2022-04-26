$(function(){
    let interval_id = setInterval(slide,3000);
    // 1.팝업 열기 닫기
    // 2. 탭 팝업에 사용된 메소드 재활용
    // 3. 메뉴 (사이트맵)
    // 4. 캐러셀(슬라이드)

    tab(); // 2. 탭기능 함수 호출 (=실행)
    popup(); // 1. 팝업기능 함수 호출 (=실행)
    menu(); // /3.메뉴 기능 함수 호출
    // slide(); // 4. 페이드인 페이드아웃 함수 호출(=실행)
})
function tab(){ // 2.탭기능 함수 정의
    // 클릭하면 active 없다면 추가, 있다면 아무 반응 없음
    // .news <--> .gallary 를 보이기/감추기
    $(".board_title li").click(function(){
        if(!$(this).hasClass("active")){
            // 조건식이 true 일때만 실행
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            var idx = $(this).index(); // 인덱스 번호 알기
            // .board_content 에 있는 2가지 ul의 인덱스 번호와 일치하는 지를 조사
            $(".board_contents ul").eq(idx).removeClass("d_none");
            $(".board_contents ul").eq(idx).siblings().addClass("d_none");
        }
    })
}

function popup(){ // 1.팝업기능 함수 정의
    // 공지사항 첫번째 게시글 클릭하면 .d_none을 가진 popup을 나타나게 하기
    $(".news li:first").click(function(){
        $("#popup").removeClass("d_none")
    });
    $("#popup > button").click(function(){
        $(this).parent().addClass("d_none")
    })
}

function menu(){
        $(".menu > li").mouseenter(function(){ // > : 자식요소 선택(CSS) // 마우스 오버하면 할일
            $(this).css("border","2px solid rgb(0, 74, 103)");
            $(this).children("a").addClass("on"); // tab : .active
            $(this).children(".submenu").stop().slideDown("fast"); // 모든 서브메뉴 선택 // css -> display : block
        });
        
        $(".menu > li").mouseleave(function(){ // > : 자식요소 선택(CSS) // 마우스 아웃하면 할 일
            $(this).css("border","2px solid transparent");
            $(this).children("a").removeClass("on");
            $(this).children(".submenu").stop().slideUp("fast"); // 모든 서브메뉴 선택
        });
            
            // jquery effect
            // 1. hide() / show()
            // 2.fadeIn() / fadeOut()
            // 3. slideDown() / slideUp()
            // 4.animate()
            // .stop : 에니메이션 멈춤 메소드
}
function slide(){
    let curr_item = $("#slide_item li.top")
    let next_item = curr_item.next();
    // console.log(next_item);
    if(!next_item.length) next_item = $("#slide_item li:first");
    curr_item.removeClass("top");
    next_item.addClass("top");
}
