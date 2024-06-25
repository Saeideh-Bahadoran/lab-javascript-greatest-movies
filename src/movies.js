// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((currentMovie) => currentMovie.director);
  return [...new Set(allDirectors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const result = moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  );
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const moviesWithScores = moviesArray.filter(
    (movie) => movie.score !== undefined
  );

  if (moviesWithScores.length === 0) {
    return 0;
  }

  const totalScore = moviesWithScores.reduce(
    (acc, currentMovie) => acc + currentMovie.score,
    0
  );
  const averageScore = totalScore / moviesWithScores.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const sumOfScores = dramaMovies.reduce(
    (acc, currentMovie) => acc + currentMovie.score,
    0
  );
  const averageScore = sumOfScores / dramaMovies.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyMoviesArray = [...moviesArray];
  copyMoviesArray.sort((a, b) => {
    if (a.year != b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return copyMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  titles.sort((a, b) => a.localeCompare(b));
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const convertDuration = (duration) => {
    const timeParts = duration.split(" ");
    let minutes = 0;

    for (const part of timeParts) {
      if (part.includes("h")) {
        minutes += parseInt(part) * 60;
      } else if (part.includes("min")) {
        minutes += parseInt(part);
      }
    }
    return minutes;
  };
  const result = moviesArray.map((movie) => {
    newMovie = { ...movie };
    newMovie.duration = convertDuration(movie.duration);
    return newMovie;
  });
  return result;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  //     if (moviesArray.length === 0) {
  //         return null;
  //       }

  //       // Create an object to store scores by year
  //       const scoresByYear = {};

  //       // Group scores by year
  //       moviesArray.forEach(movie => {
  //         if (movie.score) { // Only consider movies with a score
  //           if (!scoresByYear[movie.year]) {
  //             scoresByYear[movie.year] = [];
  //           }
  //           scoresByYear[movie.year].push(movie.score);
  //         }
  //       });

  //       // Calculate average score for each year
  //       let bestYear = null;
  //       let bestAvgScore = 0;

  //       for (const year in scoresByYear) {
  //         const scores = scoresByYear[year];
  //         const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  //         if (avgScore > bestAvgScore || (avgScore === bestAvgScore && year < bestYear)) {
  //           bestAvgScore = avgScore;
  //           bestYear = year;
  //         }
  //       }

  //       // Return the best year and its average score
  //       return `The best year was ${bestYear} with an average score of ${bestAvgScore.toFixed(1)}`;

  // }
  if (moviesArray.length === 0) {
    return null;
  }

  // Create an object to store scores by year
  const scoresByYear = {};

  // Group scores by year
  moviesArray.forEach(movie => {
    if (typeof movie.score === 'number') { // Only consider movies with a score
      if (!scoresByYear[movie.year]) {
        scoresByYear[movie.year] = [];
      }
      scoresByYear[movie.year].push(movie.score);
    }
  });

  // Calculate average score for each year
  let bestYear = null;
  let bestAvgScore = 0;

  for (const year in scoresByYear) {
    const scores = scoresByYear[year];
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    if (avgScore > bestAvgScore || (avgScore === bestAvgScore && year < bestYear)) {
      bestAvgScore = avgScore;
      bestYear = year;
    }
  }

  // Return the best year and its average score
  return `The best year was ${bestYear} with an average score of ${bestAvgScore.toFixed(1)}`;
}

