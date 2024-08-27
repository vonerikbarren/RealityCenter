export default function makePDF_Viewer (
    px, py, pz, 
    rx, ry, rz,
    sx, sy, sz,
    pdfID,
    fileRef,
    fileWidth, fileHeight,
) {
     // |- # Create Root Div
     const pdfDiv = document.createElement("div");
     pdfDiv.id = pdfID
     pdfDiv.width = fileWidth
     pdfDiv.height = fileHeight

     // |- ## Create Component
     const pdfComponent = document.createElement("embed")
     pdfComponent.setAttribute("src", fileRef)
     pdfComponent.setAttribute("width", fileWidth)
     pdfComponent.setAttribute("height", fileHeight)
     pdfComponent.style.display = "default"
     pdfComponent.style.border = "3px dotted rgba(255, 255, 255, 0.75)"
     pdfComponent.style.borderWidth = "15px"
     pdfComponent.style.borderRadius = "10px"
     pdfComponent.style.borderStyle = "double",
     pdfComponent.style.borderStyle = "double",
     pdfComponent.style.boxShadow = "2px 2px 5px, 2px 2px 2px white"
     
     pdfDiv.appendChild(pdfComponent)			

     // Pushing Function Out
     const pdfComponentData = new CSS3DObject(pdfDiv)
     pdfComponentData.position.set(px, py, pz)
     pdfComponentData.rotation.set(rx, ry, rz)
     pdfComponentData.scale.set(sx, sy, sz)

     return pdfComponentData
}