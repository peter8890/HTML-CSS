function fun(x, y, z) {
    var output = "";

    if (x % y === 0 && x % z === 0) {
      output = x + " is divisible by both " + y + " and " + z + ".";
    } else if (x % y === 0) {
      output = x + " is divisible by " + y + " only.";
    } else if (x % z === 0) {
      output = x + " is divisible by " + z + " only.";
    } else {
      output = x + " is not divisible by either " + y + " or " + z + ".";
    }

    return output;
  }