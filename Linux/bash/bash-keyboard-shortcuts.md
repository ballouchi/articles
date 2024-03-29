
## Screen Output

   - Ctrl+S: Stop all output to the screen. This is particularly useful when running commands with a lot of long, verbose output, but you don't want to stop the command itself with Ctrl+C.
   - Ctrl+Q: Resume output to the screen after stopping it with Ctrl+S.

## Moving the Cursor

Use the following shortcuts to quickly move the cursor around the current line while typing a command.

   - Ctrl+A or Home: Go to the beginning of the line.
   - Ctrl+E or End: Go to the end of the line.
   - Alt+B: Go left (back) one word.
   - Ctrl+B: Go left (back) one character.
   - Alt+F: Go right (forward) one word.
   - Ctrl+F: Go right (forward) one character.
   - Ctrl+XX: Move between the beginning of the line and the current position of the cursor. This allows you to press Ctrl+XX to return to the start of the line, change something, and then press Ctrl+XX to go back to your original cursor position. To use this shortcut, hold the Ctrl key and tap the X key twice.

## Deleting Text

Use the following shortcuts to quickly delete characters:

   - Ctrl+D or Delete: Delete the character under the cursor.
   - Alt+D: Delete all characters after the cursor on the current line.
   - Ctrl+H or Backspace: Delete the character before the cursor.

## Fixing Typos

These shortcuts allow you to fix typos and undo your key presses.

   - Alt+T: Swap the current word with the previous word.
   - Ctrl+T: Swap the last two characters before the cursor with each other. You can use this to quickly fix typos when you type two characters in the wrong order.
   - Ctrl+_: Undo your last key press. You can repeat this to undo multiple times.

## Cutting and Pasting

Bash includes some basic cut-and-paste features.

   - Ctrl+W: Cut the word before the cursor, adding it to the clipboard.
   - Ctrl+K: Cut the part of the line after the cursor, adding it to the clipboard.
   - Ctrl+U: Cut the part of the line before the cursor, adding it to the clipboard.
   - Ctrl+Y: Paste the last thing you cut from the clipboard. The y here stands for "yank".

Capitalizing Characters

The bash shell can quickly convert characters to upper or lower case:

   - Alt+U: Capitalize every character from the cursor to the end of the current word, converting the characters to upper case.
   - Alt+L: Uncapitalize every character from the cursor to the end of the current word, converting the characters to lower case.
   - Alt+C: Capitalize the character under the cursor. Your cursor will move to the end of the current word.
