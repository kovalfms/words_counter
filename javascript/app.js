let result = document.querySelector('.words_out');

document.querySelector('.btn-success').onclick = () => {
    let article = document.getElementById('txt').value;
    let count = article.replace(/\.|\,/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').split(/[\s]+/).length;
    result.lastChild.innerHTML = count;
}
document.querySelector('.btn-danger').onclick = () => {
    document.getElementById('txt').value  = '';
    result.lastChild.innerHTML = 0;
}
