let winner = ""
let pictureNominees = document.getElementsByClassName('btn-secondary-picture')
console.log(pictureNominees)


let davidWinnersPrediction = ["BPtheShapeOfWater", "OStheShapeOfWater", "AScallMe", "VEapes", "SMdunkirk", "SEdunkirk", "SFLAdekalb", "ASlou", "PDtheShapeOfWater", "SONGrememberMe", "SCOREtheShapeOfWater", "MdarkestHour", "FLtheInsult", "FEdunkirk", "DStrafficStop", "DFaleppo", "Dtoro", "CDphantomThread", "CbladeRunner", "AFcoco", "SACTRESSjanney", "SACTORrockwell", "LACTRESSmcdormand", "LACTORoldman"]
let erinWinnersPrediction = ["BPtheShapeOfWater", "OSladyBird", "AScallMe", "VEbladeRunner", "SMdunkirk", "SEdunkirk", "SFLAdekalb", "ASlou", "PDtheShapeOfWater", "SONGrememberMe", "SCOREtheShapeOfWater", "MdarkestHour", "FLaFantasticWoman", "FEtheShapeOfWater", "DSheroine", "DFicarus", "Dgerwig", "CDtheShapeOfWater", "CtheShapeOfWater", "AFcoco", "SACTRESSjanney", "SACTORrockwell", "LACTRESSronan", "LACTORchalamet"]
let davidWinnersPersonal = ["BPtheShapeOfWater", "OStheShapeOfWater", "ASlogan", "VEbladeRunner", "SMbladeRunner", "SEbabyDriver", "PDbladeRunner", "SONGrememberMe", "SCOREstarWars", "FEtheShapeOfWater", "Dtoro", "CDbeautyAndTheBeast", "CbladeRunner", "AFcoco", "SACTRESSmetcalf", "SACTORjenkins", "LACTRESSronan", "LACTORkaluuya"]
let erinWinnersPersonal = ["BPladyBird", "OStheBigSick", "ASlogan", "VEbladeRunner", "SMbabyDriver","SEtheShapeOfWater", "PDbladeRunner", "SONGrememberMe", "SCOREtheShapeOfWater", "FEtheShapeOfWater", "Dpeele", "CDtheShapeOfWater", "CbladeRunner", "AFcoco", "SACTRESSmetcalf", "SACTORjenkins", "LACTRESShawkins" , "LACTORkaluuya"]


var winnerList = []
function reply_click(clicked_id){

  winnerList.push(clicked_id)

  // return console.log(winnerList, davidWinnersPrediction)
}



function addScore(){
  let davidScore = document.getElementsByClassName('davidScore')
  let erinScore = document.getElementsByClassName('erinScore')
  let davidTotal = 0
  let erinTotal = 0
  let winnerListSorted = winnerList.sort()

  let davidPersonalSorted = davidWinnersPersonal.sort()
  let erinPersonalSorted = erinWinnersPersonal.sort()

  let davidWinnersSorted = davidWinnersPrediction.sort()
  let erinWinnersSorted = erinWinnersPrediction.sort()

    for (i = 0; i < davidWinnersSorted.length; i++) {
      for (j = 0; j < winnerListSorted.length; j++){
      if (davidWinnersSorted[i] == winnerListSorted[j]){
         davidTotal = davidTotal + 2
           }
         }
       }
       for (k = 0; k < davidWinnersSorted.length; k++) {
         for (j = 0; j < winnerListSorted.length; j++){
         if (erinWinnersSorted[k] == winnerListSorted[j]){
            erinTotal = erinTotal + 2
              }
            }
          }
          for (l = 0; l < davidPersonalSorted.length; l++) {
            for (j = 0; j < winnerListSorted.length; j++){
            if (davidPersonalSorted[l] == winnerListSorted[j]){
               davidTotal = davidTotal + 1
                 }
               }
             }
             for (m = 0; m < erinPersonalSorted.length; m++) {
               for (j = 0; j < winnerListSorted.length; j++){
               if (erinPersonalSorted[m] == winnerListSorted[j]){
                  erinTotal = erinTotal + 1
                    }
                  }
                }


return davidScore[0].innerHTML = davidTotal, erinScore[0].innerHTML = erinTotal

}
// console.log(winnerListSorted, davidWinnersSorted, total)
