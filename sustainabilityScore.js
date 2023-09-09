
function mapValuesToRange(arr, minRange, maxRange) {
    const minArrValue = Math.min(...arr);
    const maxArrValue = Math.max(...arr);
  
    const mappedValues = arr.map((value) => {
      const mappedValue = ((value - minArrValue) / (maxArrValue - minArrValue)) * (maxRange - minRange) + minRange;
      return Math.round(mappedValue); // Round the result to the nearest integer
    });
  
    return mappedValues;
  }

function calculateTransportationScore(carDist, carTime, transitDist, transitTime, walkingDist, walkingTime, bikeDist, bikeTime) {
    dists = [carDist, transitDist,walkingDist,bikeDist]
    times = [carTime, transitTime, walkingTime, bikeTime]


    
    dists = mapValuesToRange(dists, 0, 25)

    carDist = dists[0]
    transitDist = dists[1]
    walkingDist = dists[2]
    bikeDist = dists[3]

    times = mapValuesToRange(times, 0, 25)

    carTime = times[0]
    transitTime = times[1]
    walkingTime = times[2]
    bikeTime = times[3]

    carScore = 100 - carDist - carTime
    transitScore = 100 - transitDist - transitTime
    walkingScore = 100 - walkingDist - walkingTime
    bikeScore = 100 - bikeDist - bikeTime







    // Determine the best mode of transportation
    let bestTransportationMode = "Car";
    let highestScore = carScore;

    if (transitScore > highestScore) {
        bestTransportationMode = "Transit";
        highestScore = transitScore;
    }

    if (walkingScore > highestScore) {
        bestTransportationMode = "Walking";
        highestScore = walkingScore;
    }

    if (bikeScore > highestScore) {
        bestTransportationMode = "Bike";
        highestScore = bikeScore;
    }

    return {
        bestTransportationMode: bestTransportationMode,
        carScore: carScore,
        transitScore: transitScore,
        walkingScore: walkingScore,
        bikeScore: bikeScore,
    };
}

// Example usage:
const carEnvImpact = 20; // Example values, replace with real data
const transitEnvImpact = 10;
const walkingEnvImpact = 1;
const bikeEnvImpact = 5;

const carDist = 50;
const carTime = 60;
const transitDist = 30;
const transitTime = 45;
const walkingDist = 0;
const walkingTime = 30;
const bikeDist = 10;
const bikeTime = 20;

const result = calculateTransportationScore(
    carDist,
    carTime,
    transitDist,
    transitTime,
    walkingDist,
    walkingTime,
    bikeDist,
    bikeTime
);

console.log(result);
