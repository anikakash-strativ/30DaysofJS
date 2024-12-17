const paragraphs = document.querySelectorAll('p');



paragraphs.forEach((tag, idx) => {
    tag.style.color  = 'blue';
    tag.style.fontSize  = '20px';

    if(idx==0 || idx==2){
        tag.style.color  = 'green';
    }else if(idx=1 || idx==3){
        tag.style.color = 'red'
    }


    tag.setAttribute('id', 'id'+(idx+1));
    tag.setAttribute('class', 'class'+(idx+1));

    tag.textContent = `This is the paragraph ${idx+1}`
})