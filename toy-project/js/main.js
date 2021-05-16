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
                container: window.document.querySelector('#scroll-section-0'),
                messageA: window.document.querySelector('#scroll-section-0 .main-message-a'),
                messageB: window.document.querySelector('#scroll-section-0 .main-message-b'),
                messageC: window.document.querySelector('#scroll-section-0 .main-message-c'),
                messageD: window.document.querySelector('#scroll-section-0 .main-message-d')
            },
            values: {
                messageA_opacity: [0, 1]
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

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    function calcValues(values, currentYOffset) {

    }

    function playAnimation() {
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = yOffset - prevScrollHeight;

        console.log(currentScene, currentYOffset )

        switch (currentScene) {
            case 0:
                // console.log('0 play');
                let messageA_opacity_0 = values.messageA_opacity[0];
                let messageA_opacity_1 = values.messageA_opacity[1];
                break;
            case 1:
                // console.log('1 play');
                break;
            case 2:
                // console.log('2 play');
                break;
            case 3:
                // console.log('3 play');
                break;
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
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return;  // 브라우저 바운스 효과로 인해 마이너스가 되는 부분을 방지
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
        
        playAnimation();
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;  // 스크롤의 위치
        scrollLoop();
    })
    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
})();