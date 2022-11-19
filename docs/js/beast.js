/**
 *
 * Use Case
 * - encode('123456', '嗷呜啊~')
 * - decode( encode('123456', '嗷呜啊~') )
 *
 * Description
 *   encode(str, dict) & decode(decodeStr)
 * - str: any string
 * - dict: only 4 different characters
 * - decodeStr: return value of encode(...)
 *
 * Reference
 * - https://github.com/sgdrg15rdg/beast_js
 * - https://github.com/SycAlright/beast_sdk
 *
 */
function encode(rawStr, dictArr) {
    let charArr = rawStr.split("")
    let unicodeHexStr = ""
    for (let i = 0; i < charArr.length; i++) {
        let charHexStr = charArr[i].charCodeAt(0).toString(16)
        while (charHexStr.length < 4) {
            charHexStr = "0" + charHexStr
        }
        unicodeHexStr += charHexStr
    }
    let k = 0
    let unicodeHexStrArr = unicodeHexStr.split("")
    let beastStr = ""
    for (let i = 0; i < unicodeHexStrArr.length; i++) {
        let unicodeHexCharValue = parseInt("0x" + unicodeHexStrArr[i])
        k = unicodeHexCharValue + (i % 0x10)
        if (k >= 0x10) {
            k = k - 0x10;
        }
        beastStr += dictArr[parseInt(k / 4)] + dictArr[(k % 4)]
    }
    return dictArr[3] + dictArr[1] + dictArr[0] + beastStr + dictArr[2]
}

function decode(decodedStr) {
    let dictArr = [decodedStr[2], decodedStr[1], decodedStr[decodedStr.length - 1], decodedStr[0]]
    let beastStr = decodedStr.substring(3, decodedStr.length - 1);
    let unicodeHexStr = ""
    let beastStrArr = beastStr.split("")
    for (let i = 0; i <= (beastStr.length - 2); i += 2) {
        let beastCharStr = ""
        let pos1 = 0
        beastCharStr = beastStrArr[i];
        for (; pos1 <= 3; pos1++) {
            if (beastCharStr == dictArr[pos1]) {
                break
            }
        }
        let pos2 = 0
        beastCharStr = beastStrArr[i + 1]
        for (; pos2 <= 3; pos2++) {
            if (beastCharStr == dictArr[pos2]) {
                break;
            }
        }
        let k = (pos1 * 4) + pos2;
        let unicodeHexCharValue = k - (parseInt(i / 2) % 0x10);
        if (unicodeHexCharValue < 0) {
            unicodeHexCharValue += 0x10;
        }
        unicodeHexStr += unicodeHexCharValue.toString(16)
    }
    let rawStr = ""
    let start = 0
    let end = 4
    while (end <= unicodeHexStr.length) {
        let charHexStr = unicodeHexStr.substring(start, end);
        let charStr = String.fromCharCode(parseInt("0x" + charHexStr))
        rawStr += charStr
        start += 4
        end += 4
    }
    return rawStr
}
