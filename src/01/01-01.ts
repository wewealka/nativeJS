export function sum(a:number, b:number) {
    return a + b;
}
export function mult(a:number, b:number) {
    return a * b;
}





// export function splitIntoWords(sentence:string) {
//     return sentence
//     .toLowerCase().split(" ")
//     .filter(word => word !== "")
//     .map(word => word.replace("!", ""));
// }

export function splitIntoWords(sentence: string): string[] {
    return sentence
        .toLowerCase()
        .replace(/[!.,?;:-]/g, '')
        .split(/\s+/) // Разделяем по пробелам
        .filter(word => word.length > 0) // Убираем пустые строки
        .map(word => word)
        
}
