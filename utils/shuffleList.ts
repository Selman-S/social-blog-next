export function shuffleList(inputList: any[]) {
 const list = [...inputList]; // Create a copy of the original list to avoid modifying it directly

 for (let i = list.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [list[i], list[j]] = [list[j], list[i]]; // Swap elements at positions i and j
 }

 return list;
}