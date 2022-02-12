let day;

for(let i = new Date().getDate(); i < 32; i++) {
    if (i > 0 && i < 4) {
        day = 4;
    }
    if (i > 3 && i < 7) { day = 7; }
    if (i > 6 && i < 10) { day = 10; }
    if (i > 9 && i < 13) { day = 13; }
    if (i > 12 && i < 16) { day = 16; }
    if (i > 15 && i < 19) { day = 19; }
    if (i > 18 && i < 22) { day = 22; }
    if (i > 21 && i < 25) { day = 25; }
    if (i > 24 && i < 28) { day = 28; }
    if (i > 27 && i < 31) { day = 31; }
}



    switch(new Date().getDate()) {
        case 1: day = 4; break;
        case 2: day = 4; break;
        case 3: day = 4; break;
        case 4: day = 7; break;
        case 5: day = 7; break;
        case 6: day = 7; break;
        case 7: day = 10; break;
        case 8: day = 10; break;
        case 9: day = 10; break;
        case 10: day = 13; break;
        case 11: day = 13; break;
        case 12: day = 13; break;
        case 13: day = 16; break;
        case 14: day = 16; break;
        case 15: day = 16; break;
        case 16: day = 19; break;
        case 17: day = 19; break;
        case 18: day = 19; break;
        case 19: day = 22; break;
        case 20: day = 22; break;
        case 21: day = 22; break;
        case 22: day = 25; break;
        case 23: day = 25; break;
        case 24: day = 25; break;
        case 25: day = 28; break;
        case 26: day = 28; break;
        case 27: day = 28; break;
        case 28: day = 31; break;
        case 29: day = 31; break;
        case 30: day = 31; break;
        case 31: day = 2; break;
    }


    console.log(new Date().getDate());