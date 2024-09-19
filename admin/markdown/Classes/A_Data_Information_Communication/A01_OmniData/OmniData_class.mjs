export default class OmniData{
    constructor(
        groupInit, 
        hiearchyPosition, 
        numOfContext, arrOfAssets, arrOfObjects, 
        px, py, pz,
        rx, ry, rz,
        sx, sy, sz,
        adminData,
    ) {
        this.admin = [adminData]
        this.storage = []

        this.groupInit = groupInit
        this.hiearchyPosition = hiearchyPosition
        this.numOfContext = numOfContext
        this.arrOfAssets = arrOfAssets
        this.arrOfObjects = arrOfObjects

        this.px = px
        this.py = py
        this.pz = pz

        this.rx = rx
        this.ry = ry
        this.rz = rz

        this.sx = sx 
        this.sy = sy
        this.sz = sz
    }
}