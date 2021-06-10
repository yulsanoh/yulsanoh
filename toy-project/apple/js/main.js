(() => {

    let yOffset = 0;  // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0;  // 현재 스크롤 위치보다 이전 스크롤 섹션들 스크롤 높이의 합
    let currentScene = 0;  // 현재 활성화 된 Scene(Scroll-section)
    let enterNewScene = false;  // 새로운 Scene이 시작된 순간 true

    // 객체가 4개인 이유는 scroll-section의 갯수와 동일
    const sceneInfo = [
        {
            // index 0
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {  // HTML 요소들의 객체
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message-a'),
                messageB: document.querySelector('#scroll-section-0 .main-message-b'),
                messageC: document.querySelector('#scroll-section-0 .main-message-c'),
                messageD: document.querySelector('#scroll-section-0 .main-message-d'),
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0').getContext('2d'),
                videoImages: []
            },
            values: {
                videoImageCount: 300,
                imageSequence: [0, 299],
                canvas_opacity: [1, 0, {start: 0.9, end: 1}],
                messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2}],
                messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3}],
                messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2}],
                messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3}],

                messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4}],
                messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5}],
                messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4}],
                messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5}],

                messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6}],
                messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7}],
                messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6}],
                messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7}],

                messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8}],
                messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9}],
                messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8}],
                messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9}]
            }
        },
        {
            // index 1
            type: 'normal',
            // heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            // index 2
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2'),
                messageA: document.querySelector('#scroll-section-2 .main-message-a'),
                messageB: document.querySelector('#scroll-section-2 .desc-message-b'),
                messageC: document.querySelector('#scroll-section-2 .desc-message-c'),
                pinB: document.querySelector('#scroll-section-2 .desc-message-b .pin'),
                pinC: document.querySelector('#scroll-section-2 .desc-message-c .pin'),
                canvas: document.querySelector('#video-canvas-1'),
                context: document.querySelector('#video-canvas-1').getContext('2d'),
                videoImages: []
            },
            values: {
                videoImageCount: 960,
                imageSequence: [0, 959],
                canvas_opacity_in: [0, 1, {start: 0, end: 0.1}],
                canvas_opacity_out: [1, 0, {start: 0.95, end: 1}],
                messageA_opacity_in: [0, 1, {start: 0.15, end: 0.2}],
                messageA_opacity_out: [1, 0, {start: 0.3, end: 0.35}],
                messageA_translateY_in: [20, 0, {start: 0.15, end: 0.2}],
                messageA_translateY_out: [0, -20, {start: 0.3, end: 0.35}],

                messageB_opacity_in: [0, 1, {start: 0.6, end: 0.65}],
                messageB_opacity_out: [1, 0, {start: 0.68, end: 0.73}],
                messageB_translateY_in: [30, 0, {start: 0.6, end: 0.65}],
                messageB_translateY_out: [0, -20, {start: 0.68, end: 0.73}],

                messageC_opacity_in: [0, 1, {start: 0.87, end: 0.92}],
                messageC_opacity_out: [1, 0, {start: 0.95, end: 1}],
                messageC_translateY_in: [30, 0, {start: 0.87, end: 0.92}],
                messageC_translateY_out: [0, -20, {start: 0.95, end: 1}],

                pinB_scaleY: [0.5, 1, {start: 0.6, end: 0.65}],
                pinC_scaleY: [0.5, 1, {start: 0.87, end: 0.92}],
            }
        },
        {
            // index 3
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3'),
                canvasCaption: document.querySelector('.canvas-caption'),
                canvas: document.querySelector('.image-blend-canvas'),
                context: document.querySelector('.image-blend-canvas').getContext('2d'),
                imagesPath: [
                    './images/blend-image-1.jpg',
                    './images/blend-image-2.jpg'
                ],
                images: []
            },
            values: {
                rect1X: [0, 0, {start: 0, end: 0}],
                rect2X: [0, 0, {start: 0, end: 0}]
            }
        },
    ];

    function setCavnasImages() {
        let imageElement;
        for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
            imageElement = new Image();
            imageElement.src = `./video/001/IMG_${6726 + i}.JPG`;
            sceneInfo[0].objs.videoImages.push(imageElement);
        }

        let imageElement2;
        for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
            imageElement2 = new Image();
            imageElement2.src = `./video/002/IMG_${7027 + i}.JPG`;
            sceneInfo[2].objs.videoImages.push(imageElement2);
        }

        let imageElement3;
        for (let i = 0; i < sceneInfo[3].objs.imagesPath.length; i++) {
            imageElement3 = new Image();
            imageElement3.src = sceneInfo[3].objs.imagesPath[i];
            sceneInfo[3].objs.images.push(imageElement3);
        }
        console.log(sceneInfo[3].objs.images);
    }
    setCavnasImages();

    function setLayout() {
        // 각 scroll-section의 height 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            } else if (sceneInfo[i].type ==='normal') {
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            }
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

        const heightRatio = window.innerHeight / 1080;  // canvas 원래 크기 분의 윈도우 창의 크기
        sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
    }

    function calcValues(values, currentYOffset) {
        let rv;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        if (values.length === 3) {
            // Start - End 사이의 애니메이션 실행
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
                rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            } else if (currentYOffset < partScrollStart) {
                rv = values[0];
            } else if (currentYOffset > partScrollEnd) {
                rv = values[1];
            }
        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        return rv;
    }

    function playAnimation(sceneNumber) {
        if (typeof sceneNumber == 'number') currentScene = sceneNumber;

        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = yOffset - prevScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight; 

        console.log(`yOffset: ${yOffset} currentScene: ${currentScene} currentYOffset: ${currentYOffset}`);

        switch (currentScene) {
            case 0:
                // console.log('0 play');
                let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
                objs.context.drawImage(objs.videoImages[sequence], 0, 0);

                if (scrollRatio <= 0.22) {
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;

                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;

                }

                if (scrollRatio <= 0.42) {
                    // in
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.62) {
                    // in
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.82) {
                    // in
                    objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
                    objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    objs.messageD.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
                    objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out, currentYOffset)}%, 0)`;
                }

                objs.canvas.style.opacity = calcValues(values.canvas_opacity, currentYOffset);


                break;
            case 1:
                // console.log('1 play');
                break;
            case 2:
                // console.log('2 play');
                let sequence2 = Math.round(calcValues(values.imageSequence, currentYOffset));
                objs.context.drawImage(objs.videoImages[sequence2], 0, 0);

                if (scrollRatio <= 0.5) {
                    // in
                    objs.canvas.style.opacity = calcValues(values.canvas_opacity_in, currentYOffset);
                } else {
                    // out
                    objs.canvas.style.opacity = calcValues(values.canvas_opacity_out, currentYOffset);
                }

                if (scrollRatio <= 0.32) {
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

				if (scrollRatio <= 0.67) {
					// in
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
					objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
				} else {
					// out
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
					objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
				}

                if (scrollRatio <= 0.93) {
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                    objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
                } else {
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                    objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
                }

                break;
            case 3:
                // console.log('3 play');
                // 가로 / 세로 모두 꽉 차게 하기 위해서 여기서 세팅(계산 필요)
                const widthRatio = window.innerWidth / objs.canvas.width;
                const heightRatio = window.innerHeight / objs.canvas.height;
                let canvasScaleRatio;

                if (widthRatio <= heightRatio) {
                    // 캔버스보다 브라우저 창이 홀쭉한 경우
                    canvasScaleRatio = heightRatio;
                    console.log('heightRatio로 결정');
                } else {
                    // 캔버스보다 브라우저 창이 납작한 경우
                    canvasScaleRatio = widthRatio;
                    console.log('widthRatio로 결정');
                }

                objs.canvas.style.transform = `scale(${canvasScaleRatio})`
                objs.context.drawImage(objs.images[0], 0, 0);

                // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
                const recalculatedInnerWidth = window.innerWidth / canvasScaleRatio;
                const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

                const whiteRectWidth = recalculatedInnerWidth * 0.15;
                values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
                values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
                values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
                values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

                objs.context.fillRect(values.rect1X[0], 0, parseInt(whiteRectWidth), objs.canvas.height);
                objs.context.fillRect(values.rect2X[0], 0, parseInt(whiteRectWidth), objs.canvas.height);

                break;
        }
    }

    function scrollLoop() {
        enterNewScene = false;
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (yOffset < prevScrollHeight) {
            enterNewScene = true;
            if (currentScene === 0) return;
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (enterNewScene) return;

        playAnimation();
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })
    window.addEventListener('load', () => {
		setLayout();
        sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
		for (let i = sceneInfo.length - 1; i >= 0; i--) {
			playAnimation(i);
		}
	});
    window.addEventListener('resize', setLayout);
})();