# Book Store Backend API

To run this program make sure you have Node install and npm as well. <br>
if you don't have them, just head over to <a style="color: blue" href="https://nodejs.org">nodejs.org</a> to download Node <br>
which comes with npm preinstalled so you don't have to install it separately.

Next thing is to make sure the installation was successfully, to do that <br>
open your terminal or command prompt on windows and type the following commands.

```
node -v or node --version

npm -v or npm --version
```

If you see something like this `v14.1.3`, which is v and some number depending <br> on the version you downloaded, then your good to go.

The next thing is to clone or download the repository from the github page. But the best thing is <br> to fork the repository on your account. So to fork the repository on to your account, look on the <br> right at the navigation bar just under your profile picture you will see a fork button, just click it <br> and the repository will be added on to your account simple as that.

<h3 style="color: orange; font-weight: bold " > # Cloning process</h3>

Now go ahead and clone the repository from your account instead of mine. <br> So if you want to clone the repository instead of downloading it, make sure you install <br> git on your computer otherwise follow the downloading process, just incase you don't <br> have git installed head over to <a style="color: blue" href="https://git-scm.com">git-scm.com</a> to download git in your computer and follow <br> their installation proccess.

After your done downloading and installing git, type this command on you terminal or command <br> prompt on windows.

```
git --version
```

To check if the installation was successfully, if it is
follow the next command to clone the repository

```
git clone https://github.com/CharlesElloit/bookStore-backend.git
```

<h3 style="color: orange; font-weight: bold " > # Downloading process</h3>

To download the code, click on the on green button that says code, it will open a dropdown panel. <br> On the buttom of the panel you will seee download zip, just click on it and follow the rest of the <br> instractions.

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
