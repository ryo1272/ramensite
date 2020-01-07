function mappin(img){
    var str=img.id;
    if(str=="naritake")
    {
        str=0;
    }else if(str=="hissyou")
    {
        str=1;
    }else if(str=="suzukisan")
    {
        str=2;
    }else if(str=="tukumo")
    {
        str=3;
    }else if(str=="mugendai")
    {
        str=4;
    }else
    {
        str=5;
    }
    $("#tabs1").tabs('option','active',str);
    scrollTo(0,880);
}

