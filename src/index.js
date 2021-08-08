module.exports = function toReadable (number) {
    let arr1=['zero','one','two','three','four','five','six','seven','eight','nine'];
    let arr2=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arr3=['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred'];
    number=number.toString();
    let res='';
    let currentLen=number.length,
        originalLen=number.length;
    let f=false;
    for(let i=0;i<originalLen,currentLen>0;i++,currentLen--)
    {
        res+=' ';
        if(currentLen!=2){
            if(f==true){
                if(number[i]==0) res+=arr3[0];
                else res+=arr2[Number(number[i]-1)];
                break;
            }
            if(number[i]==0 && originalLen!=1) continue;
            res+=arr1[Number(number[i])];
            if(currentLen==3) res+=' '+arr3[9];
        }
        else{
            if(number[i]==1) f=true;
            else {
                if(number[i]==0) continue;
                res+=arr3[Number(number[i]-1)];
            } 
        }
        res+=' ';
    }
    return res.replace(/\s+/g, ' ').trim();
}

