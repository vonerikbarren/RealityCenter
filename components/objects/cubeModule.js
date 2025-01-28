export function createCustomCubes(scene, imageTextures, clickableSides, numCubes, positions, rotations, scales, spinningConfigs) {
    const textureLoader = new THREE.TextureLoader();
    const cubes = [];
    const initialPositions = new Map();

    for (let i = 0; i < numCubes; i++) {
        const cubeGroup = new THREE.Group();

        // Create six planes for the cube
        const planes = [];
        for (let j = 0; j < 6; j++) {
            const texture = textureLoader.load(imageTextures[j]);
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
            const plane = new THREE.Mesh(geometry, material);

            // Set plane positions and rotations to form a cube
            switch (j) {
                case 0: plane.position.set(0, 0, 0.5); break; // Front
                case 1: plane.position.set(0, 0, -0.5); plane.rotation.y = Math.PI; break; // Back
                case 2: plane.position.set(0, 0.5, 0); plane.rotation.x = -Math.PI / 2; break; // Top
                case 3: plane.position.set(0, -0.5, 0); plane.rotation.x = Math.PI / 2; break; // Bottom
                case 4: plane.position.set(0.5, 0, 0); plane.rotation.y = -Math.PI / 2; break; // Right
                case 5: plane.position.set(-0.5, 0, 0); plane.rotation.y = Math.PI / 2; break; // Left
            }

            // Make the plane clickable if specified
            if (clickableSides[j]) {
                plane.userData.clickable = true;
                plane.userData.index = i;
                plane.userData.side = j;
            }

            cubeGroup.add(plane);
            planes.push(plane);
        }

        // Set cube position, rotation, and scale
        if (positions[i]) {
            cubeGroup.position.set(positions[i][0], positions[i][1], positions[i][2]);
        }
        if (rotations[i]) {
            cubeGroup.rotation.set(rotations[i][0], rotations[i][1], rotations[i][2]);
        }
        if (scales[i]) {
            cubeGroup.scale.set(scales[i][0], scales[i][1], scales[i][2]);
        }

        // Store initial position
        initialPositions.set(cubeGroup, cubeGroup.position.clone());

        // Add spinning animation if specified
        if (spinningConfigs[i] && spinningConfigs[i].spinning) {
            gsap.to(cubeGroup.rotation, {
                y: "+=" + Math.PI * 2,
                duration: spinningConfigs[i].speed || 1,
                repeat: -1,
                ease: "linear"
            });
        }

        scene.add(cubeGroup);
        cubes.push(cubeGroup); // Store reference to the cube group
    }

    return { cubes, initialPositions };
}