// 01_Basics/OrbitCamera.js

export default function OrbitCamera(
    timeline,
    OrbitCenterNode, OrbitPanNode, FocusPointNode,
    OrbitEnvNode, OrbitParticlesNode, OrbitGridNode,
    px, py, pz,
    rx, ry, rz,
    sx, sy, sz,
    durationData, delayData, easeData, opacityData
) {
    // Calculate the orbit path
    const orbitRadius = Math.sqrt(px * px + py * py + pz * pz);
    const orbitDuration = durationData;

    // Animate the OrbitPanNode around the OrbitCenterNode
    timeline.to(OrbitPanNode.position, {
        duration: orbitDuration,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: px + orbitRadius * Math.cos(0),
        y: py,
        z: pz + orbitRadius * Math.sin(0),
        repeat: -1,
        yoyo: true,
    });

    timeline.to(OrbitPanNode.position, {
        duration: orbitDuration,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: px + orbitRadius * Math.cos(Math.PI),
        y: py,
        z: pz + orbitRadius * Math.sin(Math.PI),
        repeat: -1,
        yoyo: true,
    });

    // Animate the rotation and scale if needed
    timeline.to(OrbitPanNode.rotation, {
        duration: durationData,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: rx,
        y: ry,
        z: rz,
    });

    timeline.to(OrbitPanNode.scale, {
        duration: durationData,
        delay: delayData,
        opacity: opacityData,
        ease: easeData,
        x: sx,
        y: sy,
        z: sz,
    });
}
