# balloonmark


Make sure you have at least Node 8 installed.
### One-Time Git Command


git remote add origin <url>
---
### Changing Files


git checkout -b <branchname>
git add .
git status
git commit -m "Blah comment"
(do this until you have something working, then)
git push origin <branchname>
---
### PLEASE CHECK WITH ALSTEN: Adding Files to Remote Repo


(DO NOT USE UNLESS APPROVED) (Prepare for diff issues)
git checkout master
git merge <branchname>
git push origin master
---
### Checklist for Setup


[Everyone] Pull from master branch to update code (git pull)
[Everyone] Navigate to folder containingsrc in VSCode terminal. 
[Everyone] Download 
[Everyone] (npm install) in terminal
[Everyone](npm run build) in terminal
[Everyone] Visit chrome://extensions in a Chrome browser
[Everyone] flip developer mode to "on"
[Everyone] "load unpacked" the directory that the manifest is located in(select 'build' folder)

(To make changes)
Edit files in the 'src' folder

(After making changes)
[Everyone] npm run build
[Everyone] Hit the refresh button on the extension at chrome://extensions
[Everyone] Click the little extension button!