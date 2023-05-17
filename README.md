# CRC Logging
![Screenshot](public/images/screenshot.png)
## Installation
1. Clone Repository
```
git clone https://github.com/kennethsible/crclogging.git
```
2. Install [Node.js](https://nodejs.org/en) (should be installed already)
```
sudo apt install nodejs npm
```
3. Install [Express](https://expressjs.com)
```
mv ~/.npm ~/.npm-backup
mkdir /tmp/shampton
ln -s /tmp/shampton ~/.npm
npm install express
rm ~/.npm
mv /tmp/shampton ~/.npm
```
## Usage
1. Launch Tmux (on remote)
2. Start Server (on remote)
```
node server.js --port 8080
```
3. Log to `public/markdown/*.md` (on remote)
4. Forward Port (on local)
```
ssh -L 8080:localhost:8080 ssh_remote_hostname
```
5. Navigate to `http://localhost:8080/` (on local)