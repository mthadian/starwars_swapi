# starwars_swapi
Technologies: jQuery,Spring-boot,H2-DB.

Setup Steps:


Method 1:

•	Copy the file /starwars-1.jar to local machine

•	Using java, run the file, i.e, java -jar starwars-1.jar. By default, the application will run on port 8080,
however to change port, run as java -jar -Dserver.port={port} starwars-1.jar ,eg, java -jar -Dserver.port=8081 starwars-1.jar or on powershell java -jar “-Dserver.port=8081” starwars -1.jar


Method 2:

Open the folder from an ide like Eclipse, Netbeans or IntelliJ as a maven project. 
The prerequisite in this case is maven and java.

 Other front end files like html,css and js are in the packaged jar file
Testing

To view the frontEnd, visit server-url:port , e.g http://127.0.0.1:8080/ on web browser.
Ensure you have an internet connection.


 
DB UI


url: server-url:port /h2-console

Jdbc url: jdbc:h2:~/dbStarwars

Username:root

Password:

