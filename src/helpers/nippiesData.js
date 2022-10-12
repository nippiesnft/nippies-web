import NippiesData from '../nippiesData.json';
import { addOffsetsToNippies } from './randomNumberGenerator';
import { shuffleArray } from './shuffle';

export const getNippies = (sortMethod = null) => {
    const enrichedNippies = addOffsetsToNippies(NippiesData);

    switch (sortMethod) {
        case "Alphabetize":
            return(handleSortByName(enrichedNippies));
        case "Shuffle":
            return(handleRandomSort(enrichedNippies))
        default:
            return (enrichedNippies);
    }
}

const handleSortByName = (enrichedNippies) => {
    return enrichedNippies.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
};

const handleRandomSort = (enrichedNippies) => {
  return shuffleArray(enrichedNippies);
};
