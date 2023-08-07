export function yukukuru(oneWordFlag: boolean, basisDate?: string): string {
    let today = new Date();
    if (typeof(basisDate) !== 'undefined') {
        today = new Date(basisDate);
    }

    const year         = today.getFullYear();
    const lastYearDays = new Date(year, 12, 0).getTime() - today.getTime()
    const leftDays     = Math.floor(lastYearDays / (24 * 60 * 60 * 1000)) + 1;

    let yearDays = 365;
    if (new Date(year, 2, 0).getDate() === 29) {
        yearDays = 366;
    }

    const progresCurrentPer = 100 - Math.round((leftDays / yearDays) * 100);
    const progresBarCount   = Math.round((progresCurrentPer / 100) * 15);
    const progresBarCurrent = [...Array(progresBarCount)].map(() => '■');
    const progresBarleft    = [...Array(15 - progresBarCount)].map(() => '□');
    const progresMessage    = progresBarCurrent.join("") + progresBarleft.join("") + " " + progresCurrentPer + "%";

    let oneWord = "";
    if (oneWordFlag) {
        switch (leftDays) {
            case 1:
                oneWord = year + "年も本日で終わりです🌄";
                break;
            case 4:
                oneWord = year + "年もあとわずか、良いお年をお過ごしください🍶";
                break;
            case 7:
                oneWord = "メリークリスマス🎅";
                break;
            case 62:
                oneWord = "ハッピーハロウィン🎃";
                break;
            case 365:
            case 366:
                oneWord = year + "年が始まりました、あけましておめでとうございます🌅";
                break;
            default:
                oneWord = year + "年が" + (yearDays - leftDays).toString() + "日経過しました。"
                break;
        }
    }

    let message = progresMessage;
    if (!!oneWord) {
        message = oneWord + "\n" + message;
    }

    return message;
}