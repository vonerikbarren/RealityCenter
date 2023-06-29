/**
 * # Particles
 */


/**
 * # ParticlesGeometry
 */
const particlesGeometry = new THREE.SphereGeometry(1, 32, 32)



/**
 * # Section A1 - PointsMaterial
 */
// Material
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  sizeAttenuation: true
}

// Or Do it this way: 
// What are the costs of doing it this way vs above?

const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.size = 0.02
particlesMaterial.sizeAttenuation = true


/**
 * # Section A2 - Points
 */

const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)


/**
 * # Section B1 - Custom Geometry
 */
// Geometry
const particlesGeometry = new THREE.BufferGeometry()
const count = 500

const positions = new Float32Array(count * 3) // Multiply by 3 because each position is composed of 3 values (x, y, z)

for(let i = 0; i < count * 3; i++) // Multiply by 3 for same reason
{
    positions[i] = (Math.random() - 0.5) * 10 // Math.random() - 0.5 to have a random value between -0.5 and +0.5
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3)) // Create the Three.js BufferAttribute and specify that each information is composed of 3 values

/**
 * # Section B2 - Color, Map, and AlphaMap
 */
 particlesMaterial.color = new THREE.Color('#ff88cc')


 /**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('/textures/particles/2.png')

// ...
// ............................................................
particlesMaterial.map = particleTexture
// or
particlesMaterial.transparent = true
particlesMaterial.alphaMap = particleTexture
// ............................................................

particlesMaterial.alphaTest = 0.001
// or
particlesMaterial.depthTest = false
// or
particlesMaterial.depthWrite = false
particlesMaterial.blending = THREE.AdditiveBlending
// ............................................................


/**
 * # Section B7 - Different Colors
 */

 const positions = new Float32Array(count * 3)
 const colors = new Float32Array(count * 3)
 
 for(let i = 0; i < count * 3; i++)
 {
     positions[i] = (Math.random() - 0.5) * 10
     colors[i] = Math.random()
 }
 
 particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
 particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
 particlesMaterial.vertexColors = true


/**
 * # Section C1 - Animation - By using the points as an object
 */
 const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update particles
    particles.rotation.y = elapsedTime * 0.2

    // ...
}

/**
 * # Section C2 - Animation - By using the points as an object
 * |- The next couple of code pieces are just code pieces and explanation in the notes
 * |- as it progresses. Each part will be header of 'step'.
 */

// Step 01: Comment out old code

// Step 02: Animate the y axis only
const tick = () =>
{
        // ...

    for(let i = 0; i < count; i++)
    {
        const i3 = i * 3
    }

    // ...
}

// Step 03: Animate all vertices on the same frequency
const tick = () =>
{
    // ...

    for(let i = 0; i < count; i++)
    {
        const i3 = i * 3

        particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime)
    }
    particlesGeometry.attributes.position.needsUpdate = true 

    // ...
}

// Step4: Animation + Apply the offset to the sinus.
const tick = () =>
{
    // ...

    for(let i = 0; i < count; i++)
    {
        let i3 = i * 3

        const x = particlesGeometry.attributes.position.array[i3]
        particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x)
    }
    particlesGeometry.attributes.position.needsUpdate = true

    // ...
}