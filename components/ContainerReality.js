// Steps for Container Reality

/**
 * # PseudoCode
 * |- []-Create Container Group
 */


class ContainerReality {
   constructor(RealityLevel, NumOfContainers) {
      this.RealityLevel = RealityLevel
      this.NumOfContainers = NumOfContainers
   }
}


const ContainerReality = new THREE.Group()

// Width, Height, Depth
				const geo_mainPlatform_L01 = new THREE.BoxGeometry(5000, 1000, 5000, 64, 64, 64)
				const mat_mainPlatform_L01 = new THREE.MeshBasicMaterial({ map: testImg05, side: THREE.DoubleSide });
				mesh_mainPlatform_L01 = new THREE.Mesh(geo_mainPlatform_L01, mat_mainPlatform_L01);
				mat_mainPlatform_L01.transparent = false;
				mat_mainPlatform_L01.alphaMap = testImg05;
				mesh_mainPlatform_L01.position.set(0, 10917, 0);
				mesh_mainPlatform_L01.scale.set(3, 2, 3)
				CommandCenter.add(mesh_mainPlatform_L01);
				objects.push(mesh_mainPlatform_L01)