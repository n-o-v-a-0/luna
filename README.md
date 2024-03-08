# Luna
Luna discord client modification originally created by Awsomedog7, and now being maintained by me.

## Weird import bug
If you have a css link that you are putting in the loader and it doesnt work, first check: does it have an import? Example: `@import url(https://clearvision.github.io/ClearVision-v6/main.css);`. If it does have an import, go to the import URL. Keep it in a tab for now. You are going to want to open notepad, or some other text editor and copy everything from your css link (not the import!) into your text editor. Now, go back to your import tab and copy everything there, and replace the import line on the text editor with that copied text. Now host that somewhere, and put that in the CSS loader.
