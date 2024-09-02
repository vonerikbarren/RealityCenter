// 01_Basics/Spacial_Movement_Function_Basic01.js

export default function Spacial_Movement_Function_Basic01(
    timeline,
    object,
    position,
    rotation,
    scale,
    durationData,
    delayData,
    easeData,
    opacityData
) {
    timeline.to(object.position, {
        duration: durationData,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: position.x,
        y: position.y,
        z: position.z,
    });

    timeline.to(object.rotation, {
        duration: durationData,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: rotation.x,
        y: rotation.y,
        z: rotation.z,
    });

    timeline.to(object.scale, {
        duration: durationData,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: scale.x,
        y: scale.y,
        z: scale.z,
    });
}
