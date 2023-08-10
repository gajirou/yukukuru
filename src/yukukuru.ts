export function yukukuru(oneWordFlag: boolean, basisDate?: string): string {
    let today = new Date();
    if (typeof(basisDate) !== 'undefined') {
        today = new Date(basisDate);
    }

    const year         = today.getFullYear();
    const lastYearDays = new Date(year, 12, 0).getTime() - today.getTime()
    const leftDays     = Math.floor(lastYearDays / (24 * 60 * 60 * 1000));

    let yearDays = 365;
    if (new Date(year, 2, 0).getDate() === 29) {
        yearDays = 366;
    }

    const progresCurrentPer = 100 - Math.round((leftDays / yearDays) * 100);
    const displayCurrentPer = (100 - (leftDays / yearDays) * 100).toFixed(1);
    const progresBarCount   = Math.round((progresCurrentPer / 100) * 15);
    const progresBarCurrent = [...Array(progresBarCount)].map(() => '■');
    const progresBarLeft    = [...Array(15 - progresBarCount)].map(() => '□');
    const progresMessage    = progresBarCurrent.join("") + progresBarLeft.join("") + " " + displayCurrentPer + "%";

    let oneWord = year + "年の" + (yearDays - leftDays).toString() + "日目になりました。";
    if (oneWordFlag) {
        switch (leftDays) {
            case 0:
                oneWord = year + "年も本日で終わりです、1年お疲れ様でした🌄";
                break;
            case 3:
                oneWord = year + "年もあとわずかです、良いお年をお過ごしください🍶";
                break;
            case 6:
                oneWord = "メリークリスマス🎅";
                break;
            case 61:
                oneWord = "ハッピーハロウィン🎃";
                break;
            case 364:
                if (366 !== yearDays) {
                    oneWord = year + "年が始まりました、あけましておめでとうございます🌅";
                }
                break;
            case 365:
                oneWord = year + "年が始まりました、あけましておめでとうございます🌅";
                break;
            default:
                break;
        }
    }

    let message = progresMessage;
    if (!!oneWord) {
        message = oneWord + "\n" + message;
    }

    return message;
}