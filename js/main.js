var FourLeafCloverZCVar;

function topMove(){         //置顶按钮
    FourLeafCloverZCVar=setInterval(FourLeafCloverZCEachScrollBy,10);    
}

function FourLeafCloverZCEachScrollBy(eachHeight){
    if(document.documentElement && document.documentElement.scrollTop) 
        {
            if(document.documentElement.scrollTop<=0){
                clearInterval(FourLeafCloverZCVar);
            }else{
                window.scrollBy(0,-30);
            }
        }
        else{         //Chrome不支持documentElement.scrollTop
            if(document.body.scrollTop<=0){
                clearInterval(FourLeafCloverZCVar);
        }
        else{
                window.scrollBy(0,-30);
        }
    }
}