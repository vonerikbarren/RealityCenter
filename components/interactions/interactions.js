export function handleInteractions(scene, camera, cubes, initialPositions) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let selectedCube = null;
    let holdTimeout = null;

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('contextmenu', onRightClick, false);
    window.addEventListener('dblclick', onDoubleClick, false);
    window.addEventListener('touchstart', onTouchStart, false);
    window.addEventListener('touchend', onTouchEnd, false);

    function onMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        for (let i = 0; i < intersects.length; i++) {
            const intersect = intersects[i];
            if (intersect.object.userData.clickable) {
                gsap.to(intersect.object.scale, { duration: 0.2, x: 1.1, y: 1.1, z: 1.1 });
            }
        }
    }

    function onMouseDown(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        for (let i = 0; i < intersects.length; i++) {
            const intersect = intersects[i];
            if (intersect.object.userData.clickable) {
                selectedCube = intersect.object.parent;
                holdTimeout = setTimeout(() => {
                    gsap.to(selectedCube.scale, { duration: 0.2, x: 1.5, y: 1.5, z: 1.5 });
                }, 500); // Hold for 500ms to trigger the hold action
            }
        }
    }

    function onMouseUp(event) {
        event.preventDefault();
        if (holdTimeout) {
            clearTimeout(holdTimeout);
            holdTimeout = null;
        }
        if (selectedCube) {
            const initialPosition = initialPositions.get(selectedCube);
            gsap.to(selectedCube.position, { duration: 0.5, x: initialPosition.x, y: initialPosition.y, z: initialPosition.z });
            gsap.to(selectedCube.scale, { duration: 0.5, x: 1, y: 1, z: 1 });
            selectedCube = null;
        }
    }

    function onRightClick(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        for (let i = 0; i < intersects.length; i++) {
            const intersect = intersects[i];
            if (intersect.object.userData.clickable) {
                // Show a small menu with options (undefined for now)
                console.log('Right-clicked on a clickable side');
            }
        }
    }

    function onDoubleClick(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        for (let i = 0; i < intersects.length; i++) {
            const intersect = intersects[i];
            if (intersect.object.userData.clickable) {
                gsap.to(intersect.object.parent.scale, { duration: 0.2, x: 0.5, y: 0.5, z: 0.5 });
            }
        }
    }

    function onTouchStart(event) {
        event.preventDefault();
        mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        for (let i = 0; i < intersects.length; i++) {
            const intersect = intersects[i];
            if (intersect.object.userData.clickable) {
                selectedCube = intersect.object.parent;
                holdTimeout = setTimeout(() => {
                    gsap.to(selectedCube.scale, { duration: 0.2, x: 1.5, y: 1.5, z: 1.5 });
                }, 500); // Hold for 500ms to trigger the hold action
            }
        }
    }

    function onTouchEnd(event) {
        event.preventDefault();
        if (holdTimeout) {
            clearTimeout(holdTimeout);
            holdTimeout = null;
        }
        if (selectedCube) {
            const initialPosition = initialPositions.get(selectedCube);
            gsap.to(selectedCube.position, { duration: 0.5, x: initialPosition.x, y: initialPosition.y, z: initialPosition.z });
            gsap.to(selectedCube.scale, { duration: 0.5, x: 1, y: 1, z: 1 });
            selectedCube = null;
        }
    }
}