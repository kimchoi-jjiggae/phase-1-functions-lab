// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location >= 42){
        return location - 42;
    }
    else{
        return 42-location;
    }

}

function distanceFromHqInFeet(location){
    let distance = distanceFromHqInBlocks(location);
    return distance *264;
}

function distanceTravelledInFeet(start, destination){
    if (start>= destination){
        return (start - destination)*264;
    }
    else{
        return (destination-start)*264;
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <400){
        return 0;
    }
    if (distance >= 400 && distance <2000){
        return (distance-400) *.02;
    }
    if (distance >2000 && distance <= 2500){
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }

}