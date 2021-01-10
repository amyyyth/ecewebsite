# NITC ECE Website React

Setup guide

1. Fork this repository.
2. Install git on your system then run the following commands in command prompt or terminal
```
git clone <replace_this_with_your_git_repo_url>
cd ecewebsite
git remote add upstream https://github.com/JARUS-5/ecewebsite.git
git pull upstream
git merge upstream/master
git push origin master
npm install
npm start
```
4. Make necessary changes and updates to the file.
5. Press *ctrl-c* and *Y* to exit the server.
6. If changes and updates are working, then within the same directory, run the following commands 
```
git add .
git commit -m "replace this with your message"
git push origin master
```
7. Send me a pull request

Use the following commands to update your repository with latest main repository
'''
git pull upstream
git merge upstream/master
'''

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.