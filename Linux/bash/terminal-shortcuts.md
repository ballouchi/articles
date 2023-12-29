## Terminal keyboard shortcuts

- Ctrl+A: Move to the start of the line. Same as Home.
- Ctrl+E: Move to the end of the line. Same as End.
- Alt+F: Move forward through the line one word at a time. Same as Ctrl+Right Arrow.
- Alt+B: Move backward through the line one word at a time. Same as Ctrl+Left Arrow.
- Ctrl+F: Move forward through the line one letter at a time. Same as Right Arrow.
- Ctrl+B: Move backward through the line one letter at a time. Same as Left Arrow.

These shortcuts delete text:

- Ctrl+U: Delete from the cursor position to the start of the line.
- Ctrl+K: Delete from the cursor position to the end of the line.
- Ctrl+W: Delete a word to the left. Same as Alt+Backspace.
- Alt+D: Delete a word to the right.
- Ctrl+/: Undo. Yes, the command line has an undo option.

A quick “Ctrl+U, Ctrl+K” will delete the entire line.

- Ctrl+l: Clears the terminal window. Same as the clear command, but doesn’t clog up your history.
- Ctrl+d: Closes the terminal window. Same as the exit command, but doesn’t clog up your history.

## History

- `!123`
- `!nano` the shell will execute the last command you used that started with "nano"
- `!nano:p` (print) modifier. This prints the command but doesn’t execute it
- `!!` last command
- `!$` last argument
- **Ctrl+R** search **Ctrl+G** exit search

## shortcuts

- `cd -` Jumps back and forth between your two most recent directories
