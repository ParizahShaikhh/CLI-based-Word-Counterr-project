import inquirer from "inquirer";
async function main() {
    const { paragraph } = await inquirer.prompt([
        {
            type: "input",
            name: "paragraph",
            message: "Enter an English paragraph:",
        }
    ]);
    const charactersCount = countCharacters(paragraph);
    let wordsCount = countWords(paragraph);
    console.log(`The paragraph has ${charactersCount} characters (excluding whitespaces) and ${wordsCount} words.`);
}
function countCharacters(paragraph) {
    // Remove whitespaces and count remaining characters
    const noWhiteSpaces = paragraph.replace(/\s+/g, "");
    return noWhiteSpaces.length;
}
function countWords(paragraph) {
    // Split by one or more whitespace characters and count words
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}
main();
