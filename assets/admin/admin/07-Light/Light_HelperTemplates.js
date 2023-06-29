// |- # Directions
// Before using these be sure that the light that these are 'helping' is 
// already defined first. If you need help go to ThreeJourney/Lights Lesson 
// for the file there. 


// |- # Hemisphere Light Helper Template
// To use, simply instatiate the class. Use the corresponding light as the 
// parameter, and add them to the scene.
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
scene.add(hemisphereLightHelper)


// |- # Directional Light Helper Tempalte
// To use, simply instatiate the class. Use the corresponding light as the 
// parameter, and add them to the scene.
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)


// |- # Point Light Helper Template
// To use, simply instatiate the class. Use the corresponding light as the 
// parameter, and add them to the scene.
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
scene.add(pointLightHelper)


// |- # Spot Light Helper
// To use, simply instatiate the class. Use the corresponding light as the 
// parameter, and add them to the scene.
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)
window.requestAnimationFrame(() =>
{
    spotLightHelper.update()
})


// |- # Hemisphere Light Helper Template
// For this helper you need the file from:
// three/examples/jsm/helpers/RectAreaLightHelper.js
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
scene.add(rectAreaLightHelper)