
// Template for materials
const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()
const itemColorTexture = textureLoader.load('./')
const itemAlphaTexture = textureLoader.load('./')
const itemAmbientOcclusionTexture = textureLoader.load('./')
const itemHeightTexture = textureLoader.load('./')
const itemNormalTexture = textureLoader.load('./')
const itemMetalnessTexture = textureLoader.load('./')
const itemRoughnessTexture = textureLoader.load('./')
const itemMatCapTexture = textureLoader.load('./')
const itemGradientTexture = textureLoader.load('./')
const itemEnvironmentMapTexture = textureLoader.load(['./'])

// # MeshStandardMaterial || THREE.MeshStandardMaterial()
const itemMaterial = new THREE.MeshStandardMaterial()
itemMaterial.wireframe = true
itemMaterial.transparent = true
itemMaterial.side = THREE.DoubleSide
itemMaterial.map = doorColorTexture
itemMaterial.alphaMap = doorAlphaTexture
itemMaterial.aoMap = doorAmbientOcclusionTexture
itemMaterial.aoMapIntensity = 1
itemMaterial.displacementMap = doorHeightTexture
itemMaterial.displacementScale = 0.05
itemMaterial.metalnessMap = doorMetalnessTexture
itemMaterial.metalness = 0
itemMaterial.roughnessMap = doorRoughnessTexture
itemMaterial.roughness = 1
itemMaterial.normalMap = doorNormalTexture
itemMaterial.normalScale.set(0.5, 0.5)
itemMaterial.transparent = false
gui.add(itemMaterial, 'metalness').min(0).max(1).step(0.0001)
gui.add(itemMaterial, 'roughness').min(0).max(1).step(0.0001)