class Geometries_InfoModel {
  constructor() {
    this.GeometriesListByType = [
      {
        Two_Dimensional_Geometries: [],
        Three_Dimensional_Geometries: [],
      },
    ];
  }

  fxA1_printDimensional_Geometries = (input) => { 
    
    if (input === '2D' || '2d') {
      console.log(this.GeometriesListByType[0].Two_Dimensional_Geometries)
    } else if (input === '3D' || '3d') {
      console.log(this.GeometriesListByType[0].Three_Dimensional_Geometries)
    } else { console.log(Error) }
    
    
  }


  fxA2_addDimensional_Geometries = (name = String, dimensionalType = String, geometryData = Object) => {
    if (dimensionalType === '2d' || '2D') {
      this.GeometriesListByType[0].Two_Dimensional_Geometries.push(name + dimensionalType + geometryData);
    } else if (dimensionalType === '3d' || '3D') {
      this.GeometriesListByType[0].Three_Dimensional_Geometries.push(name + dimensionalType + geometryData);
    } else {
      console.log(Error)
    }
  }


}




module.exports = Geometries_InfoModel


