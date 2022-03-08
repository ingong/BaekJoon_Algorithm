const str = "zzaczza";
const log = console.log;
const stack = [str[0]];

for (let i = 1; i < str.length; i++){
  if (stack[stack.length - 1] <= str[i]) stack.push(str[i]);
  else {
    if (stack.length === 1 || stack[stack.length - 2] <= str[i]) {
      stack.pop();
      stack.push(str[i]);
    }
  }
  log(stack);
}

log(str.length - stack.length);

// for (let i = 1; i < str.length; i++){
//   if (stack[stack.length - 1][VALUE] <= str[i]) 
//   else {
//     for (let j = 0; j < stack.length; j++){
//       const [value, index] = stack[stack.length - 1 - j];
//       if (value <= str[i]) {
//         log(dp[index] + j + 1, dp[stack[stack.length - 1 - j][INDEX] + 1]);
//         if (dp[index] + j + 1 <= dp[stack[stack.length - 1 - j][INDEX] + 1]) {
//           dp[i] = dp[index] + j + 1;
//           while (j !== -1) {
//             stack.pop();
//             j--;
//           }
//           stack.push(value);
//         }
//         break;
//       }
//     }
//   }
// }

// log(stack);
