//  1misol
// function yegindi(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum ;
// }

// console.log(yegindi([1,2,3,4,5,]));

// 2 misol

// function eng_katta_elimetni_toping(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(engkataelementinitoping([1,2,3,]));

// 3 misol

// function eng_kichik_elemetni_toping(arr) {
//   return Math.min.apply(null,arr);

// }
// let numbers = [1,5,8,];
// console.log(eng_kichik_elemetni_toping(numbers));

// 4 misol

// function manfida_musbatga_aylatrihs(arr) {
//   return Math.abs(arr);
// }

// console.log(manfida_musbatga_aylatrihs(-1));
// console.log(manfida_musbatga_aylatrihs(-2));
// console.log(manfida_musbatga_aylatrihs(-5));

// 5misol
// function ikkiga_kopaytrilganda(arg) {
//   let kopaytma = [];
//   for (let i = 0; i < arg.length; i++) {
//       kopaytma.push(arg[i] * 2);
//   }
//   return kopaytma;
// }

// let misoluchun = [1, 2, 3,];
// let ikkigaKopaytirilganda = ikkiga_kopaytrilganda(misoluchun);
// console.log(ikkigaKopaytirilganda);

// 6 misol

// function juftlarnichiqarish(arg) {
//   let juftSonlar = [];
//   for (let i = 0; i < arg.length; i++) {
//       if (arg[i] % 2 === 0) {
//           juftSonlar.push(arg[i]);
//       }
//   }
//   return juftSonlar;
// }
// let arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let juftSonlar = juftlarnichiqarish(arg);
// console.log(juftSonlar);

// 7 misol
// function toqlarnichiqarish(arg) {
//   let toqSonlar = [];
//   for (let i = 0; i < arg.length; i++) {
//       if (arg[i] % 2 === 1) {
//          toqSonlar.push(arg[i]);
//       }
//   }
//   return toqSonlar;
// }
// let arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let toqSonlar = toqlarnichiqarish(arg);
// console.log(toqSonlar);

// 8 misol

//  8-misolni shumadim

// 9 misol

// function teskarshakildachiqarish(arg) {
//   let teskarshakilda = [];
//   for (let i = arg.length - 1; i >= 0; i--) {
//       teskarshakilda.push(arg[i]);
//   }
//   return teskarshakilda;
// }

// let misoluchun = [1, 2, 3, 4, 5,6,7,8,9,10];
// let teskar = teskarshakildachiqarish(misoluchun);
// console.log(teskar);

// 10 misol

// function a(arr, threshold) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > threshold) {
//       count++;
//     }
//   }
//   return count;
// }
// const myarray = [1,5,8,3,10,6,12,2,];

// const threshold = 5;
// const result = a(myarray);
// console.log(result);

// 11 misol
// function a(arr) {
//     return arr.map(a => a +1 );

// }

// const myarray = [1,2,3,4,5];
// const result = a(myarray);
// console.log(result);
// 12 misol
// 13 misol
// 14 misol
// function a(arr) {
//     return arr.filter(a => a > 0);

    
// }
// const myarray = [5,9,4,-8,-7];
// const result = (a(myarray));
// console.log(result);

// 15 misol
//  function a(arr) {
//     return arr.filter(a => a < 0);

    
// }
// const myarray = [5,9,4,-8,-7];
// const result = (a(myarray));
// console.log(result);
// 16 misol

// function arrmattn(arg) {
//   return array.join(', ');
// }

// const array = [1, 2, 3, 4, 5, 'salom','hayr'];

// const arg = arrmattn(array);
// console.log(arg);

// 17 misol
//  function a(arr) {
//     return arr.map(a => a * a);

    
// }
// const myarray = [2,8,10,5];
// const result = (a(myarray));
// console.log(result);