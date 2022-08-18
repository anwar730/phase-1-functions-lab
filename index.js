function distanceFromHqInBlocks(someValue){
    if(someValue===43){
        return 1
    }
    else if(someValue===50){
        return 8
    }
    else if(someValue<42){
        return 8
    }

}
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue)
    if(someValue===43){
        return (43-42)*264
    }
    else if (someValue===50){
        return(50-42)*264
    }
    else if (someValue<42){
        return 8*264
    }
        

}
function distanceTravelledInFeet(start,destination){
    
        if (destination>=start){
            return (destination-start)*264
    
}
else if (start>destination){
    return (start-destination)*264

}

}
function calculatesFarePrice(start,destination){
    distanceTravelledInFeet(start,destination)
    if((destination-start)*264<=400){
        return 0
    }
    else  if ((start-destination)*264>400 && (start-destination)*264<=2000){
        return (264*(start-destination) -400 )*0.02
    }
    else if((destination-start)*264>2000){
        return 25

    }
    else if((start-destination)*264>2500){
        return "cannot travel that far"
    }
}
function calculatesFarePrice(start, destination) {
    
    let totalDistance = distanceTravelledInFeet(start , destination);

    if (totalDistance <= 400) {
        return 0;
    }
    else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25;
    }
 
     else if (totalDistance > 2500); {
        return 'cannot travel that far'
    }
}
  