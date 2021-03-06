const lalala = document.getElementById('NavBar');
lalala.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">3D운전게임 로블록스</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  게임 소개
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/introduce/why.html">만들어진 이유</a></li>
                  <li><a class="dropdown-item" href="/introduce/car.html">차량 소개</a></li>
                  <li><a class="dropdown-item" href="/introduce/maker.html">만든 사람들</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  명예의 전당
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/people/people.html">명예의 전당</a></li>
                  <li><a class="dropdown-item" href="/people/gyongjang.html">경쟁자</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/QnA.html">자주 묻는 질문</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  운게시/농운읍 버스 노선
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/bus/9402.html">직행좌석 9402</a></li>
                  <li><a class="dropdown-item" href="/bus/P1143.html">프리미엄 P1143</a></li>
                  <li><a class="dropdown-item" href="/bus/4444.html">심야 4444</a></li>
                  <li><a class="dropdown-item" href="/bus/02B.html">순환 02B</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  바로가기
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="https://web.roblox.com/games/9130252517/3D#!/game-instances" target="_blank">게임으로 바로가기</a></li>
                  <li><a class="dropdown-item" href="https://web.roblox.com/groups/13789649/KOREA#!/about" target="_blank">그룹으로 바로가기</a></li>
                  <li><a class="dropdown-item" href="https://www.youtube.com/user/parkjh1658" target="_blank">누누tv로 이동하기</a></li>
                  <li><a class="dropdown-item" href="https://discord.gg/X5EcGQKJ" target="_blank">디스코드로 이동하기</a></li>
                  <li><a class="dropdown-item" href="https://github.com/siwoo1123/UnGae" target="_blank">홈페이지 소스코드 보러가기</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </nav>
`
function BUS(number, comp, cont ) {
  document.querySelector(".aboutbus").innerHTML = `<h1><b>${number}번 버스</b></h1>
  <img src="/img/${number}.png" class="busimg" alt="${number}번 버스" class="img-fluid">
  <p>${number}번 버스는 ${comp}에서 운영하는 노선으로, ${cont}</p>
  `
}