module.exports = function check(str, bracketsConfig) {
  const pair = {};
  for (let i = 0; i < bracketsConfig.length; ++i) {
    pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  let st = [];
  for (let i = 0; i < str.length; ++i) {
    if (st.length === 0) st.push(str[i]);
    else {
      if (pair[st[st.length - 1]] === str[i]) st.pop();
      else st.push(str[i]);
    }
  }
  return (st.length === 0);
}
