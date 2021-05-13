(() => {

    let yOffset = 0;  // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0;  // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
    let currentScene = 0;  // 현재 활성화 된 씬(scene, scroll-section)

    const sceneInfo = [
        {
            // index 0
            type: 'sticky',
            heightNum: 5,  // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: window.document.querySelector('#scroll-section-0')
            }
        },
        {
            // index 1
            type: 'normal',
            heightNum: 5,  // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: window.document.querySelector('#scroll-section-1')
            }
        },
        {
            // index 2
            type: 'sticky',
            heightNum: 5,  // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: window.document.querySelector('#scroll-section-2')
            }
        },
        {
            // index 3
            type: 'sticky',
            heightNum: 5,  // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: window.document.querySelector('#scroll-section-3')
            }
        }
    ];

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
    }


    function scrollLoop() {
        prevScrollHeight = 0;  // 초기화하지 않으면 스크롤 값이 계속 더해짐
        for (let i = 0; i < currentScene; i++) {
            // prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
        }

        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return;  // 브라우저 바운스 효과로 인해 마이너스가 되는 부분을 방지
            currentScene--;
        }

    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;  // 스크롤의 위치
        scrollLoop();
    })
    
    setLayout();
})();