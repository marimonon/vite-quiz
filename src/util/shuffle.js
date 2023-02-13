// 選択肢をシャッフル
function shuffle(arr) {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[j], shuffledArr[i]] = [shuffledArr[i], shuffledArr[j]];
  }
  return shuffledArr;
}

export default shuffle;
