<h3>Fetch data from api and save it into mysql database using cleardb on heroku or at your localhost without cleardb</h3>
<p>To host on heroku i have used cleardb for mysql with NodeJs application</P>
1. git clone https://github.com/kul1010/weather-api-express.git <br>
2. npm i <br>
3. set envirnoment variable on heroku using config_var in settings tab for your app <br> OR <br>
set envirnoment variable in .env file <br>
PORT=5000<br>
HOST=127.0.0.1<br>
USER=root<br>
PASSWORD= #password if any<br>
DB=weather-api #give your database name here <br>
API_URL= #give your api url <br>
DATABASE_URL= #give your heroku cleardb url here<br>
3. table structure <br>
CREATE TABLE `weather_dtls` (
  `id` INT(11) NOT NULL,
  `temp_min` INT(11) NOT NULL,
  `temp_max` INT(11) NOT NULL,
  `temp` INT(11) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;<br>-
ALTER TABLE `weather_dtls`
  ADD PRIMARY KEY (`id`); <br>

ALTER TABLE `weather_dtls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;<br>

<a href="https://weather-api-express.herokuapp.com/list">Demo</a>
