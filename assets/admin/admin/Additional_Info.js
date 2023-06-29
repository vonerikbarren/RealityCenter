const AdditionalInfo = {
  Info_01: {
    Header: "How to make a diamond in THREE.js",
    WebsiteLink: 'https://stackoverflow.com/questions/32017291/how-to-transform-a-cube-mesh-into-a-diamond-shape',
    Note: [
      L1: ['This is for making the a diamond. It took some debugging but we were able to fix someone elses jsfiddle.'],
      L2: {
        DirectionsHeader: "How to find fiddle",
        Link: 'http://jsfiddle.net/3gxqboer/',
        Note: 'Replace current content with fx01_makeDiamond()',
      }
    ]
  },
}

const fx01_makeDiamond = () => {
  var camera, scene, renderer, geometry, material, mesh, controls;

  init();
  animate();

  function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;
    scene.add(camera);

    geometry = new THREE.BoxGeometry(100, 100, 20);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = Math.PI / 4; // rotate by 45 degrees

    var group = new THREE.Group();
    group.add( mesh );
    group.scale.x = 0.5;

    scene.add( group );

    scene.add( new THREE.AxesHelper( 150 ) );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
  }

  function animate() {

    requestAnimationFrame(animate);

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

    controls.update();
  }

}
