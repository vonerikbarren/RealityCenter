/**
 * Raycaster
 * |- Refer back to the raycasting notes and match the section to the notes
 * |- either by header or by line number. 
 */

// Header_A.1
const raycaster = new THREE.Raycaster()

// Header_A.2
const rayOrigin = new THREE.Vector3(- 3, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()

raycaster.set(rayOrigin, rayDirection)


// Header_A.3 - Casting a Ray
const intersect = raycaster.intersectObject(object2)
console.log(object2)

const intersects = raycaster.intersectObjects([
  object1, object2, object3
])
console.log(intersects)



// Header_B.1 - Testing on Each Frame (during an animation)

const raycaster = new THREE.Raycaster()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Animate objects
    object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5
    object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5
    object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5

    // ...
    // Cast a ray
    const rayOrigin = new THREE.Vector3(- 3, 0, 0)
    const rayDirection = new THREE.Vector3(1, 0, 0)
    rayDirection.normalize()

    raycaster.set(rayOrigin, rayDirection)

    const objectsToTest = [object1, object2, object3]
    const intersects = raycaster.intersectObjects(objectsToTest)
    console.log(intersects)

    // Header_B.2 - updating the color when the objects interact with the ray.
    // for(const intersect of intersects)
    // {
    //     intersect.object.material.color.set('#0000ff')
    // }

    // OR the Code Below

    for(const object of objectsToTest)
    {
        object.material.color.set('#ff0000')
    }

    for(const intersect of intersects)
    {
        intersect.object.material.color.set('#0000ff')
    }



}


/**
 * # Header_C1 - Mouse Events
 */
 const mouse = new THREE.Vector2()

 window.addEventListener('mousemove', (event) =>
 {
     mouse.x = event.clientX / sizes.width * 2 - 1
     mouse.y = - (event.clientY / sizes.height) * 2 + 1
 
     console.log(mouse)
 })



 const tick = () =>
 {
     // ...
 
     raycaster.setFromCamera(mouse, camera)
 
     const objectsToTest = [object1, object2, object3]
     const intersects = raycaster.intersectObjects(objectsToTest)
 
     for(const intersect of intersects)
     {
         intersect.object.material.color.set('#0000ff')
     }
 
     for(const object of objectsToTest)
     {
         if(!intersects.find(intersect => intersect.object === object))
         {
             object.material.color.set('#ff0000')
         }
     }
 
     // ...
 }



 /**
 * # Header_C2 - Mouse Events - Mouse Enter and Mouse Leave Events
 */

  const tick = () =>
  {
      // ...
      raycaster.setFromCamera(mouse, camera)
      const objectsToTest = [object1, object2, object3]
      const intersects = raycaster.intersectObjects(objectsToTest)
  
      if(intersects.length)
      {
          if(!currentIntersect)
          {
              console.log('mouse enter')
          }
  
          currentIntersect = intersects[0]
      }
      else
      {
          if(currentIntersect)
          {
              console.log('mouse leave')
          }
  
          currentIntersect = null
      }
  
      // ...
  }


/**
* # Header_C3 - Mouse Events - Mouse Click Events
*/
window.addEventListener('click', () =>
{
    if(currentIntersect)
    {
        switch(currentIntersect.object)
        {
            case object1:
                console.log('click on object 1')
                break

            case object2:
                console.log('click on object 2')
                break

            case object3:
                console.log('click on object 3')
                break
        }
    }
})