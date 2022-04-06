const yourself = {
  dp: [0, 1],
  fibonacci : function(n) {
      if (this.dp[n] !== undefined) return this.dp[n];
      else {
          this.dp[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2)
          return this.dp[n];
      }
  }
};
