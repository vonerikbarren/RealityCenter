import { CSS3DRenderer, CSS3DObject } from '../../libraries/renderers/CSS3DRenderer.js';

export default function hoverObject (
    objectType, 
    tx, ty, tz,
    rx, ry, rz,
    sx, sy, sz,
    theID, theClassName, 
    srcLink, hrefLink,
    HeaderID, HeaderClassName, HeaderName, message,
    action, bgColor
) {
    // Building the root Div
    const panelroot = document.createElement(objectType)
    panelroot.id = theID
    panelroot.className = theClassName
    panelroot.src = srcLink
    panelroot.href = hrefLink
    panelroot.backgroundColor = bgColor
    panelroot.addEventListener('pointerdown', action)
    panelroot.addEventListener('touchdown', action)
    panelroot.textContent = message
    panelroot.style.alignText = "center"
    panelroot.style.position = 'absolute'
    
    
    // const panelHeader = document.createElement('h2')
    // panelHeader.id = HeaderID
    // panelHeader.className = HeaderClassName
    // panelHeader.style.textContent = HeaderName
    // panelHeader.style.textContent = message
    // panelHeader.style.background = "rgba(0, 255, 255)"
    // panelHeader.style.textSize = "120px"
    
    // panelroot.appendChild(panelHeader)


    // Build the object for pushing and placing
    const panelData = new CSS3DObject(panelroot)
    panelData.position.set(tx, ty, tz)
    panelData.rotation.set(rx, ry, rz)
    panelData.scale.set(sx, sy, sz)

    return panelData
}