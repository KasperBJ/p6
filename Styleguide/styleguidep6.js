

const copyBtn = document.getElementById('copyBtn')
const copyText = document.getElementById('copyText')

copyBtn.onclick = () => {
  copyText.select();
  document.execCommand('copy');
}
