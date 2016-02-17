[JavaScript datatypes](https://owenroberts.github.io/mmp310/week3/index.html)

<h2>Assignment 3: Arrays</h2>
<ul>
	<li>Rewrite your program from Assignment 2 using an array instead of individual variables</li>
	<li>Post your project on GitHub and sumbit a new URL via Blackboard</li>
</ul>

##Setting up GitHub Pages
- Last week, using the GitHub app didn't work that well, so we're going to switch to using a Brackets extension
- Open Brackets, go to **File > Extension Manager...**
- Search for `"brackets git"` and click **Install** (the one by Martin Zagora)
- Leave the default settings and click **Save**
- When it asks to restart Brackets, click **Okay**
- When Brackets restarts you will see a new Git icon in the right hand column
- Click on this to open the Git interface
- If you have your current classwork folder open, you should see some information here, along with a bunch of tools for pushing, pulling and updating your git branches
	- If not, create a new root folder and use the **Clone** button to download your git repo from last week
- In order to publish our work on GitHub pages we need to create a new branch, which is super easy

- There's a button next to the project root folder button that looks like `[master ▼]` -- this is the branch we are on
- Publishing to GitHub pages simply requires creating a branch called `gh-pages`
- Click the master branch and then click **Create a new branch...**
- Once you have created the new branch, you need to press the **Git Push** button on the far right
- Leave the default setup, fill in your username and password and hit **Okay**
- It may take a few minutes, but soon GitHub will publish your work at a new URL, something like: **username**.github.io/**projectname**

- Once you have created this branch you will need to update your workflow to include it.  Generally, it is a good idea to make new changes on the **master** branch and then `rebase` your **gh-pages** branch, which updates it with all of the commits from the master
- Brackets Git does not appear to have a button to rebase, so the easiest way to do this for now is to switch to the **gh-pages** branch and then click the **Terminal console** button on the right
- This will open a terminal window.  Don't panic.
- Just type this line `git rebase master`
- This will fast forward your **gh-pages** branch to match your **master** branch
- You can then push the **gh-pages** branch to update the public site
