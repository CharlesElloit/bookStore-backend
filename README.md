# Book Store Backend API

To run this program make sure you have Node install and npm as well. <br>
if you don't have them, just head over to nodejs.org to download Node <br>
which comes with npm already installed.

Next thing is to make sure the installation was successfully, to that <br>
open your terminal or command prompt on windows and type the following commands.

```
node -v or node --version

npm -v or npm --version
```

If you see something like this `v14.1.3`, which is v and some number depending <br> on the version you downloaded, then your good to go.

Now, in you terminal or command prompt, navigate using the cd command which stands <br> for (change directory) into the root of the project folder which in this case is `bookStore-backend` <br> if you didn't rename the folder. So after you cd into the project folder run the following commands

```
npm i or npm install
```

This command will go on the internet and download all the dependencies used <br> in this project, after the installation done run this command.

```
npm run dev
```

Thsi will go head and start a development server on http://localhost:13700.

## endpoints

Get all Books <br>
http://localhost:13700/books
