// calculate the speed of the car
let speed = 130;
let speedLimit = 70;
let aboveSpeed = 5;
let overSpeed = 1;
// if the speed is less than 70 it's ok 
// else your licences suspend
if (speed <= speedLimit) {
    console.log("Ok");
} else {
    let aboveLimit = speed - speedLimit;
    let demeritPoints = (aboveLimit / aboveSpeed) * overSpeed;
    console.log(`Demerit points: ${demeritPoints}`);

    while(demeritPoints >= 12){
        console.log(`License suspended: ${demeritPoints}`);
    }
}
