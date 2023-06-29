				// Test for Grid Cube Size
				// Center Tile Height?= x= -3405.99 y=2561.556 z=-3121.821
				const geo_gridbox3_Tester = new THREE.BoxGeometry(500, 500, 500, 64, 64, 64)
				const mat_gridbox3_Tester = new THREE.MeshBasicMaterial({ map: testImg02, side: THREE.DoubleSide });
				mesh_gridbox3_Tester = new THREE.Mesh(geo_gridbox3_Tester, mat_gridbox3_Tester);
				mat_gridbox3_Tester.transparent = false;
				mat_gridbox3_Tester.alphaMap = testImg04;
				mesh_gridbox3_Tester.position.set(0, 2561.556, -3121.821);
				mesh_gridbox3_Tester.scale.set(13, 13, 13);
				scene.add(mesh_gridbox3_Tester);
				objects.push(mesh_gridbox3_Tester)



const GridContainerData = {

  Grid1x1x1_CubeDimension: "13, 13, 13",
  Grid1x1x2_CubeDimensions: "13, 13, 28",
  Grid1x2x2_CubeDimensions: "13, 26, 28",

  WallGridData: {



    startposition: {
      LeftWall: {
        Center: {
          Low: "-46585.13, 16965.367, -3701.461",
          Mid: "-46585.13, 45898.926, -3701.461",
          High: "-46585.13, 89198, -3701.461",
        },
      },
    },


    Grid1x2x2_CubeDimensions_StartPosition_BackWall_LeftPosition: "-36353, 85323, -36353", 

  },
}