window.onload = document.write(decode());
  
function decode () {
  const hash = location.hash;
  let result;
  strs = hash.match(/\\u.{4}/ig);
  if (!strs) return 'error';
  for (let i = 0, len = strs.length; i < len; i++) {
		result += String.fromCharCode(strs[i].replace('\\u', '0x'));
  }
  return result;
}