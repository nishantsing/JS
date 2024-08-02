// Day 19. Regular Expression.

// A1. Basic Regular Expressions

// Write regex to match a simple pattern(e.g., match all occurences of the word "JavaScript in a string"). Log the matches.
const text =
    "I love JavaScript! JavaScript is so versatile. Do you use JavaScript? There are 123 apples and 456 oranges.";

// Regular expression to match the word "JavaScript" globally
const regex = /JavaScript/g;

// Use the match method to get all occurrences
const matches = text.match(regex); // returns array of matches

// Log the matches to the console
console.log(matches.length); // Output: ['JavaScript', 'JavaScript', 'JavaScript']

// Write a regular exp to match all digits in a string. Log the matches.

// Regular expression to match all digits
const digitRegex = /\d+/g;

// Use the match method to get all occurrences of digits
const digitMatches = text.match(digitRegex);
console.log(digitMatches);

// A2. Character classes and Quantifiers

// Write a regex to match all words in a string with a capital letter. Log the matches.
const capitalRegex = /\b[A-Z][a-zA-Z]*\b/g;
const capitalMatch = text.match(capitalRegex);
console.log(capitalMatch);

// Write a regex to match all sequences of one or more digits in a string. Log the matches.
// use /\d+/g;

// A3. Grouping and Capturing

// Write a regex to capture the area code, central office code, and line number from a US phone number format(e.g., (123)456-7890). Log the captures.
const phoneNumber = "My phone number is (123)456-7890.";

// Regular expression to capture the area code, central office code, and line number
const phoneRegex = /\((\d{3})\)(\d{3})-(\d{4})/;

// Use the match method to capture the groups
const phoneMatch = phoneNumber.match(phoneRegex);

console.log("Full Match: ", phoneMatch[0]);
console.log("Area Code: ", phoneMatch[1]);
console.log("Central Office Code: ", phoneMatch[2]);
console.log("Line Number: ", phoneMatch[3]);

/*
/\((\d{3})\)(\d{3})-(\d{4})/:

\( and \) are used to match literal parentheses.
(\d{3}) captures exactly three digits, representing the area code.
(\d{3}) captures the central office code (three digits).
-(\d{4}) captures the line number (four digits) after a hyphen.
Parentheses around \d{3} and \d{4} create capturing groups that allow us to extract these parts individually.


*/

// Write a regex to capture the username and domain from an email address. Log the captures.
const email = "username@example.com";
const emailRegex = /^([^@]+)@([^@.]+\.[^@.]+)$/;
const emailMatch = email.match(emailRegex);
console.log("Full Match: ", emailMatch[0]);
console.log("Username: ", emailMatch[1]);
console.log("Domain: ", emailMatch[2]);

/*
/^([^@]+)@([^@.]+\.[^@.]+)$/:

^ asserts the position at the start of the string.
([^@]+) captures one or more characters that are not @ (the username).
@ matches the literal @ character.
([^@.]+\.[^@.]+) captures the domain:
[^@.]+ matches one or more characters that are neither @ nor . (the domain name).
\. matches the literal . character.
[^@.]+ matches the top-level domain (e.g., com).
$ asserts the position at the end of the string.


*/

// A4. Assertions and Boundaries

//  Write a regex to match a word only if it is at the beginning of a string. Log the matches.

const text1 = "this is me.";

const startRegex = /^this\b/;

/*
^ asserts that the match must occur at the start of the string.
Hello matches the literal word "Hello".
\b is a word boundary anchor. It ensures that "Hello" is matched as a whole word and not as a part of another word (e.g., "Hello123" matches "Hello" but not as part of "Hello123").
*/
const startMatch = text1.match(startRegex);
console.log(startMatch);

// Write a regex to match a word only if it is at the end of a string. Log the matches.
const endRegex = /\bhello\b$/;

/*
\b asserts a word boundary, ensuring that we are matching whole words.
(\w+) - word, captures one or more word characters (letters, digits, and underscores). This is the word we want to match.
\b ensures that the word boundary comes right after the word.
$ asserts the position at the end of the string.

*/

// A5. Practical Applications

// Write a regex to validate a simple password(must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/*
^ asserts the position at the start of the string.
(?=.*[a-z]) is a positive lookahead that ensures at least one lowercase letter is present.
(?=.*[A-Z]) is a positive lookahead that ensures at least one uppercase letter is present.
(?=.*\d) is a positive lookahead that ensures at least one digit is present.
(?=.*[@$!%*?&]) is a positive lookahead that ensures at least one special character from the set [@$!%*?&] is present.
[A-Za-z\d@$!%*?&]{8,} ensures that the password is at least 8 characters long and contains only letters, digits, and allowed special characters.
$ asserts the position at the end of the string.

*/

// Write a regex to validate a URL. Log whether the URL is valid.

const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;

/*
^ asserts the position at the start of the string.
(https?:\/\/)? optionally matches the scheme part of the URL (http or https). s? means the 's' is optional, and \/\/ matches '://'.
([\w-]+\.)+ matches the domain part. It matches one or more word characters or hyphens followed by a dot. This handles subdomains and the main domain.
[\w-]+ matches the top-level domain (TLD). It requires at least one word character or hyphen.
(\/[\w- .\/?%&=]*)? optionally matches the path, query parameters, or fragments. It allows for slashes, word characters, hyphens, dots, and a few special characters (/?%&=).
$ asserts the position at the end of the string.
i flag makes the regex case-insensitive.
*/

// F1. Write a script that uses regex to match simple patterns and log the matches.

// F2. Create a script that uses regular expressions to match words with specific characteristics and log the matches.

// F#. Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses and log the captures.

// F4. Create a script that uses regular expressions to match words at specific positions in a string and log the matches.

// F5. Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.
