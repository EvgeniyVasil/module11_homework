let arr = [1, null, null, 4, "island", 0, 236, "dog", NaN];

function countTypesArrayItems(arr) {
	let count_Odd = 0;
	let count_Even = 0;
	let count_Null = 0;
	let count_NaN = 0;
	let count_Other = 0;

	for (let i = 0; i < arr.length; i++) {
	  let item = arr[i];
        switch (typeof item) {
          case "number":
            if (isNaN(item)) {
              count_NaN += 1;
            } else {
              if (item % 2 === 0) {
                count_Even += 1;
              } else {
                count_Odd += 1;
              }
              break;        
            }
          case "object":
            if (item === null) {
              count_Null += 1;
            }
            break;
          default:
            count_Other += 1;
        }
      }

  console.log('Null: ' + count_Null);
  console.log('NaN: ' + count_NaN);
  console.log('Odd: ' + count_Odd);
  console.log('Even: ' + count_Even);
  console.log('Other: ' + count_Other);
  
}

countTypesArrayItems(arr);