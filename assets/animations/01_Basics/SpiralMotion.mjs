// 01_Basics/SpiralMotion.js

export default function SpiralMotion(
    timeline,
    object,
    spiralRadius,
    spiralPitch,
    durationData,
    delayData,
    easeData,
    opacityData
) {
    // Animate the object along a helical path
    timeline.to(object.position, {
        duration: durationData,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: `+=${spiralRadius * Math.cos(0)}`,
        y: `+=${spiralPitch * 0}`,
        z: `+=${spiralRadius * Math.sin(0)}`,
        repeat: -1,
        yoyo: true,
        modifiers: {
            x: (x, index) => `${parseFloat(x) + spiralRadius * Math.cos(index / spiralPitch)}`,
            y: (y, index) => `${parseFloat(y) + spiralPitch * index}`,
            z: (z, index) => `${parseFloat(z) + spiralRadius * Math.sin(index / spiralPitch)}`,
        },
    });
}
